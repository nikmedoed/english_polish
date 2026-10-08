import test from "node:test";
import assert from "node:assert/strict";
import { restoreSession } from "../src/domain/session.js";
const bank = {
  exercises: [
    {
      id: "verbs-1-order",
      topic: "verbs",
      model: "We work here",
      parts: [{}, {}],
    },
  ],
};
const saved = {
  engine: 3,
  day: "2026-10-07",
  focus: "verbs",
  input: "mix",
  current: "verbs-1-order",
  count: 1,
  correct: 0,
  checked: 1,
  guided: 0,
  skipped: 0,
  seen: ["verbs-1"],
  draft: "We here work",
  words: [0, 2, 1],
  answered: true,
  result: { ok: false, answer: "We here work" },
};
test("session restore retains drafts and rejects damaged UI data", () => {
  const restore = (value) => restoreSession(value, bank, "verbs", saved.day);
  assert.equal(restore(saved).result.answer, saved.result.answer);
  for (const patch of [
    { draft: {} },
    { words: [99] },
    { words: [0, 0] },
    { result: null },
    { result: { ok: true, typo: {} } },
    { matchOrder: [0, 0] },
    { remediation: [null] },
    { checked: -1 },
    { current: "removed-card" },
    { day: "2026-10-06" },
  ])
    assert.equal(restore({ ...saved, ...patch }), null, JSON.stringify(patch));
  assert.equal(restore({ ...saved, input: "write" }).input, "mix");
  assert.equal(
    restore({ ...saved, previous: { exercise: "verbs-1-order", result: null } })
      .previous,
    null,
  );
});
