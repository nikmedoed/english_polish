import { ruleLessons } from "../content/rules.mjs";
import { validateRules } from "./check-rules.mjs";
import { makeBank } from "../content/bank-source.mjs";
import { exerciseSources } from "../content/exercises/index.mjs";
import { skills } from "../content/skills.mjs";
import { MODES, check, normalize, familyOf } from "../public/core.js";
import { rawContent } from "./check-privacy.mjs";

export function validateExerciseSources() {
  const failures = [],
    sourceIds = exerciseSources.map((source) => source.skillId),
    expectedIds = skills.map((skill) => skill.id).sort();
  if (skills.some((skill, index) => index > 0 && skills[index - 1].id > skill.id))
    failures.push("skill metadata is not sorted alphabetically");
  if (new Set(sourceIds).size !== sourceIds.length)
    failures.push("duplicate skill source");
  if (sourceIds.join("\0") !== [...sourceIds].sort().join("\0"))
    failures.push("skill source files are not listed alphabetically");
  if (sourceIds.join("\0") !== expectedIds.join("\0"))
    failures.push("each skill must have exactly one source file");

  const legacyIds = new Set();
  for (const source of exerciseSources) {
    const skill = skills.find((item) => item.id === source.skillId);
    if (!skill) {
      failures.push(`${source.skillId}: unknown skill source`);
      continue;
    }
    for (const seed of source.legacy) {
      const number = Number(seed.id.match(/-(\d+)$/)?.[1]);
      if (
        !number ||
        seed.skill !== source.skillId ||
        seed.topic !== skill.topic ||
        seed.family !== `${seed.topic}-${number}` ||
        !seed.prompt.includes("___") ||
        !seed.answer ||
        !seed.distractor ||
        !seed.explanation ||
        !seed.cue ||
        !seed.base ||
        legacyIds.has(seed.id)
      )
        failures.push(`${seed.id || source.skillId}: invalid legacy source metadata`);
      legacyIds.add(seed.id);
    }
    for (const exercise of source.exercises) {
      if (
        exercise.skill !== source.skillId ||
        exercise.topic !== skill.topic ||
        exercise.id !== `${exercise.family}-${exercise.mode}`
      )
        failures.push(`${exercise.id}: source skill or stable ID mismatch`);
    }
    const familyNumber = (exercise) =>
      Number(exercise.family.match(/-(\d+)$/)?.[1] || 0);
    const sorted = [...source.exercises].sort(
      (a, b) =>
        familyNumber(a) - familyNumber(b) ||
        a.mode.localeCompare(b.mode) ||
        a.id.localeCompare(b.id),
    );
    if (source.exercises.some((exercise, index) => exercise.id !== sorted[index].id))
      failures.push(`${source.skillId}: families are not in stable ID order`);
    if (source.legacy.some((seed, index) => index > 0 && source.legacy[index - 1].id > seed.id))
      failures.push(`${source.skillId}: legacy IDs are not alphabetically ordered`);
  }
  if (failures.length) throw Error("Exercise source validation failed:\n" + failures.join("\n"));
}

export function validateBank(bank) {
  validateExerciseSources();
  const failures = [],
    ids = new Set();
  const fail = (e, message) =>
    failures.push(`${e.id || "missing-id"}: ${message}`);
  for (let index = 1; index < bank.exercises.length; index++)
    if (bank.exercises[index - 1].id > bank.exercises[index].id)
      fail(bank.exercises[index], "cards are not sorted alphabetically by ID");
  if (/[\u2013\u2014]/.test(JSON.stringify([bank.topics,bank.skills])))throw Error("Long dashes in topic or skill text");
  for (const e of bank.exercises) {
    if (/[\u2013\u2014]/.test(JSON.stringify(e)))fail(e,"long dashes in exercise text");
    if (!e.id || ids.has(e.id)) fail(e, "missing or duplicate ID");
    ids.add(e.id);
    const topic = bank.topics.find((t) => t.id === e.topic),
      skill = bank.skills.find((s) => s.id === e.skill);
    if (!topic || !skill || skill.topic !== e.topic)
      fail(e, "unknown or inconsistent topic/skill");
    if (!MODES.includes(e.mode) || ![1, 2, 3].includes(e.level))
      fail(e, "invalid mode/level");
    if (familyOf(e.id) !== e.family || !e.id.startsWith(e.topic + "-"))
      fail(e, "ID/family mismatch");
    for (const field of ["prompt", "model", "cue", "explanation"])
      if (typeof e[field] !== "string" || !e[field].trim())
        fail(e, `missing ${field}`);
    if (
      !Array.isArray(e.answers) ||
      !e.answers.length ||
      e.answers.some((a) => typeof a !== "string" || !a.trim())
    ) {
      fail(e, "missing answers");
      continue;
    }
    if (rawContent(JSON.stringify(e))) fail(e, "raw transcript markers");
    if (e.mode === "choice") {
      if (
        !Array.isArray(e.choices) ||
        e.choices.length < 2 ||
        new Set(e.choices.map(normalize)).size !== e.choices.length
      )
        fail(e, "missing or duplicate choices");
      else if (e.choices.filter((v) => check(e, v)).length !== 1)
        fail(e, "choice needs exactly one accepted option");
    }
    if (["contrast", "match"].includes(e.mode)) {
      if (
        !Array.isArray(e.parts) ||
        e.parts.length < 2 ||
        e.parts.some((p) => !p.prompt || !p.base || !p.answer)
      )
        fail(e, "missing context pairs");
      else if (!check(e, e.parts.map((p) => p.answer).join(" | ")))
        fail(e, "context answers disagree with accepted answer");
      if (
        e.shuffleParts &&
        (e.parts.length < 3 ||
          e.parts.length > 4 ||
          !e.parts.some((p, i) =>
            e.parts
              .slice(0, i)
              .some((q) => normalize(q.answer) === normalize(p.answer)),
          ) ||
          /в перв|во втор/i.test(e.prompt))
      )
        fail(
          e,
          "shuffled contexts need 3–4 independent prompts and repeated answers",
        );
      if (
        e.mode === "match" &&
        e.parts.some((p) => p.prompt.split("___").length !== 2)
      )
        fail(e, "matching context needs exactly one blank");
      if (
        e.mode === "match" &&
        (!Array.isArray(e.choices) ||
          e.parts.some((p) => !e.choices.includes(p.answer)))
      )
        fail(e, "matching option missing");
    }
    if (
      e.skill === "verbs-time" &&
      e.mode === "repair" &&
      e.id.startsWith("verbs-time-1") &&
      (!e.task || e.cue === e.prompt)
    )
      fail(
        e,
        "time repair needs a target-specific instruction and meaning cue",
      );
    if (["transform", "translate"].includes(e.mode) && !e.task)
      fail(e, "missing explicit instruction");
    if (["gap", "translate"].includes(e.mode) && !e.base)
      fail(e, "missing vocabulary cue");
  }
  if (failures.length)
    throw Error("Content validation failed:\n" + failures.join("\n"));
  return {
    cards: bank.exercises.length,
    families: new Set(bank.exercises.map((e) => e.family)).size,
  };
}
if (process.argv[1]?.replaceAll("\\", "/").endsWith("/check-content.mjs")) {
  validateRules(ruleLessons);
  console.log("Content check passed:", validateBank(makeBank()));
}
