import { topics } from "./topics.mjs";
import { skills } from "./skills.mjs";
import { exerciseSources, advancedExercises } from "./exercises/index.mjs";

const LEGACY_MODES = ["choice", "gap", "repair", "order", "speak"];

function legacyCards(seed) {
  const full = seed.prompt.replace("___", seed.answer);
  return LEGACY_MODES.map((mode) => {
    const model = full;
    const prompt =
      mode === "repair"
        ? seed.prompt.replace("___", seed.distractor)
        : mode === "order" || mode === "speak"
          ? full
          : seed.prompt;
    const answers = [
      mode === "repair" || mode === "order" ? full : seed.answer,
    ];
    for (const alternate of seed.alternatives || [])
      answers.push(
        mode === "gap" || mode === "choice"
          ? alternate
          : model.replace(seed.answer, alternate),
      );
    return {
      id: `${seed.id}-${mode}`,
      family: seed.family,
      topic: seed.topic,
      skill: seed.skill,
      mode,
      level: ["choice", "order"].includes(mode) ? 1 : mode === "speak" ? 3 : 2,
      prompt,
      answers,
      choices: [seed.answer, seed.distractor],
      explanation: seed.explanation,
      model,
      cue: seed.cue,
      base: seed.base,
    };
  });
}

function addProtectedWords(exercise) {
  const tokens = (value) =>
    value.toLowerCase().replace(/[.,!?;]/g, "").split(/\s+/);
  const answerTokens = tokens(exercise.model);
  const sourceTokens = tokens(exercise.prompt);
  exercise.protectedWords =
    exercise.mode === "translate"
      ? tokens(exercise.base).flatMap((word) => [
          word,
          `${word}s`,
          `${word}ed`,
          `${word}ing`,
        ])
      : answerTokens.filter((word) => !sourceTokens.includes(word));
}

function addGeneratedModes(exercises) {
  const sources = exercises.filter(
    (exercise) =>
      exercise.level >= 2 &&
      ["transform", "repair", "contrast"].includes(exercise.mode) &&
      exercise.family.startsWith(`${exercise.skill}-`),
  );
  for (const exercise of sources) {
    if (exercise.mode === "contrast") {
      exercises.push({
        ...exercise,
        id: exercise.id.replace(/-contrast$/, "-match"),
        mode: "match",
        prompt: exercise.prompt.replace(
          /впиши[^.]*[.]?/i,
          "выбери подходящие формы.",
        ),
        task: "Сопоставь контексты с правильными формами.",
        choices: [...new Set(exercise.parts.map((part) => part.answer))],
      });
      continue;
    }
    exercises.push({
      ...exercise,
      id: exercise.id.replace(/-(transform|repair)$/, "-choice"),
      mode: "choice",
      task: exercise.task || "Выбери исправленную фразу.",
      choices: [exercise.model, exercise.prompt],
      answers: [exercise.model],
    });
  }
}

export function makeBank() {
  const exercises = exerciseSources.flatMap((source) =>
    source.legacy.flatMap(legacyCards),
  );
  exercises.push(...advancedExercises());
  exercises.forEach(addProtectedWords);
  addGeneratedModes(exercises);
  exercises.sort((a, b) =>
    a.id < b.id ? -1 : a.id > b.id ? 1 : 0,
  );
  return { version: 3, topics, skills, exercises };
}
