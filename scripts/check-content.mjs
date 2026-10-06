import { ruleLessons } from "../content/rules.mjs";
import { validateRules } from "./check-rules.mjs";
import { makeBank } from "../content/bank-source.mjs";
import { MODES, check, normalize, familyOf } from "../public/core.js";
import { rawContent } from "./check-privacy.mjs";

export function validateBank(bank) {
  const failures = [],
    ids = new Set();
  const fail = (e, message) =>
    failures.push(`${e.id || "missing-id"}: ${message}`);
  for (const e of bank.exercises) {
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
