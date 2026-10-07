import test from "node:test";
import assert from "node:assert/strict";
import { makeBank } from "../content/bank-source.mjs";
import { validateBank } from "../scripts/check-content.mjs";
test("content validation rejects two accepted choice options", () => {
  const bank = makeBank(),
    e = bank.exercises.find((e) => e.mode === "choice");
  e.answers = [...e.choices];
  assert.throws(() => validateBank(bank), /exactly one accepted option/);
});
test("content validation rejects duplicate identities", () => {
  const bank = makeBank();
  bank.exercises.push({ ...bank.exercises[0] });
  assert.throws(() => validateBank(bank), /duplicate ID/);
});
test("content validation rejects matching answers missing from choices", () => {
  const bank = makeBank(),
    e = bank.exercises.find((e) => e.mode === "match");
  e.choices = [];
  assert.throws(() => validateBank(bank), /matching option missing/);
});

test("shuffled contexts cannot expose the remaining answer by elimination", () => {
  const bank = makeBank(),
    e = bank.exercises.find((e) => e.mode === "match" && e.shuffleParts);
  e.parts = e.parts.slice(0, 2);
  e.answers = [e.parts.map((p) => p.answer).join(" | ")];
  assert.throws(() => validateBank(bank), /shuffled contexts need/);
});

test("new time repairs state the intended meaning and tell the learner where to look", () => {
  const bank = makeBank();
  for (const n of [103, 108, 110, 113, 118, 123, 128, 133, 138, 143]) {
    const e = bank.exercises.find((e) => e.id === `verbs-time-${n}-repair`);
    assert.ok(e.cue && !e.cue.includes("___"), e.id);
    assert.ok(e.task, e.id);
    assert.notEqual(e.cue, e.prompt, e.id);
  }
});
