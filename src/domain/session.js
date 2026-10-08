// Session storage is a disposable draft, never a source of answer history.
export function restoreSession(
  saved,
  bank,
  focus,
  day = new Date().toLocaleDateString("sv-SE"),
) {
  if (
    !saved ||
    (saved.engine !== 3 && !saved.draft) ||
    saved.day !== day ||
    saved.focus !== focus ||
    !["mix", "tap", "write"].includes(saved.input)
  )
    return null;
  const ex = bank.exercises.find((e) => e.id === saved.current);
  if (
    (!ex && !(saved.current === null && saved.complete)) ||
    (ex && ex.topic !== focus)
  )
    return null;
  const counter = (value) => Number.isSafeInteger(value) && value >= 0;
  if (
    !["count", "correct", "checked", "guided", "skipped"].every((key) =>
      counter(saved[key]),
    ) ||
    !Array.isArray(saved.seen) ||
    !saved.seen.every((id) => typeof id === "string") ||
    typeof saved.draft !== "string" ||
    (saved.repairDraft != null && typeof saved.repairDraft !== "string") ||
    !Array.isArray(saved.words) ||
    !saved.words.every(
      (i) => counter(i) && i < (ex?.model.split(" ").length || 0),
    ) ||
    new Set(saved.words).size !== saved.words.length
  )
    return null;
  const validResult = (r) =>
    r &&
    typeof r === "object" &&
    (r.skipped === true || typeof r.ok === "boolean") &&
    (r.answer == null || typeof r.answer === "string") &&
    (r.typo == null ||
      (typeof r.typo.typed === "string" && typeof r.typo.wanted === "string"));
  if (saved.answered && !validResult(saved.result)) return null;
  if (
    saved.matchOrder != null &&
    (!Array.isArray(saved.matchOrder) ||
      saved.matchOrder.length !== ex?.parts?.length ||
      new Set(saved.matchOrder).size !== saved.matchOrder.length ||
      !saved.matchOrder.every((i) => counter(i) && i < ex.parts.length))
  )
    return null;
  if (
    saved.remediation != null &&
    (!Array.isArray(saved.remediation) ||
      !saved.remediation.every(
        (r) => r && typeof r.skill === "string" && counter(r.after),
      ))
  )
    return null;
  if (
    saved.modes != null &&
    (!Array.isArray(saved.modes) ||
      !saved.modes.every((mode) => typeof mode === "string"))
  )
    return null;
  const previous =
    bank.exercises.some((e) => e.id === saved.previous?.exercise) &&
    validResult(saved.previous?.result)
      ? saved.previous
      : null;
  return {
    ...saved,
    previous,
    engine: 3,
    input: saved.input === "write" ? "mix" : saved.input,
  };
}
