import test from "node:test";
import assert from "node:assert/strict";
import {
  fresh,
  validate,
  merge,
  check,
  summary,
  schedule,
  pick,
  DAY,
  familyOf,
  dueFamilies,
  skillLevel,
  assess,
} from "../public/core.js";
import { makeBank } from "../content/bank-source.mjs";
const bank = makeBank();
const event = (id, overrides = {}) => ({
  id,
  exercise: "verbs-001-gap",
  topic: "verbs",
  at: Date.now(),
  ok: true,
  self: false,
  ms: 1000,
  ...overrides,
});
test("bank has unique stable IDs, independent family count, cues and incorrect distractors", () => {
  assert.ok(bank.exercises.length >= 420);
  assert.equal(
    new Set(bank.exercises.map((e) => e.id)).size,
    bank.exercises.length,
  );
  assert.ok(new Set(bank.exercises.map((e) => e.family)).size >= 120);
  for (const e of bank.exercises) {
    assert.ok(bank.topics.some((t) => t.id === e.topic));
    assert.ok(e.cue);
    assert.ok(e.model);
    assert.ok(e.explanation);
    for (const answer of e.answers) assert.ok(check(e, answer));
    if (e.mode === "choice" || e.mode === "gap")
      assert.equal(
        check(e, e.choices[1]),
        false,
        `${e.id}: distractor is a valid alternative`,
      );
    assert.equal(familyOf(e.id), e.family);
  }
});
test("old export migrates defaults without losing answers", () => {
  const old = { version: 1, focus: "verbs", events: [event("old")] };
  const migrated = validate(old);
  assert.deepEqual(migrated.preferences, fresh().preferences);
  assert.equal(migrated.events[0].assisted, false);
  assert.equal(migrated.events[0].id, "old");
});
test("merge unions history idempotently and keeps recipient preferences", () => {
  const a = {
    ...fresh(),
    events: [event("a")],
    preferences: { size: 4, input: "tap" },
  };
  const b = { ...fresh(), events: [event("a"), event("b")] };
  const merged = merge(a, b);
  assert.equal(merged.events.length, 2);
  assert.deepEqual(merge(merged, b), merged);
  assert.deepEqual(merged.preferences, {
    ...fresh().preferences,
    ...a.preferences,
  });
});
test("damaged import is rejected", () => {
  for (const bad of [
    null,
    {},
    { ...fresh(), version: 2 },
    { ...fresh(), events: [event("a", { ok: "yes" })] },
    { ...fresh(), events: [event("a"), event("a")] },
    { ...fresh(), preferences: { size: 100, input: "mix" } },
  ])
    assert.throws(() => validate(bad));
});
test("repeated same phrase cannot establish readiness", () => {
  const state = {
    ...fresh(),
    events: Array.from({ length: 60 }, (_, i) =>
      event(String(i), { at: Date.now() - (i % 3) * DAY }),
    ),
  };
  const s = summary(state, "verbs");
  assert.equal(s.ready, false);
  assert.equal(s.families, 1);
  assert.equal(s.recallCount, 3);
});
test("choice, hints and oral self ratings do not establish independent recall", () => {
  for (const variant of [
    { exercise: "verbs-001-choice" },
    { exercise: "verbs-001-order" },
    { assisted: true },
    { self: true },
  ]) {
    const state = {
      ...fresh(),
      events: Array.from({ length: 60 }, (_, i) =>
        event(String(i), { at: Date.now() - (i % 3) * DAY, ...variant }),
      ),
    };
    assert.equal(summary(state).recallCount, 0);
    assert.equal(summary(state).ready, false);
  }
});
test("diverse successful production over three days establishes a readiness signal", () => {
  const events = [];
  for (let day = 2; day >= 0; day--)
    for (let family = 1; family <= 6; family++)
      events.push(
        event(`${day}-${family}`, {
          exercise: `verbs-${String(family).padStart(3, "0")}-gap`,
          at: Date.now() - day * DAY,
          level: 3,
          skill: `verbs-skill-${family % 3}`,
        }),
      );
  const s = summary({ ...fresh(), events }, "verbs");
  assert.equal(s.ready, true);
  assert.equal(s.delayed, 6);
  assert.equal(s.families, 6);
});
test("readiness drops when recent varied independent recall is poor", () => {
  const events = [];
  for (let day = 2; day >= 0; day--)
    for (let family = 1; family <= 6; family++)
      events.push(
        event(`${day}-${family}`, {
          exercise: `verbs-${String(family).padStart(3, "0")}-gap`,
          at: Date.now() - day * DAY,
          ok: day > 0,
        }),
      );
  assert.equal(summary({ ...fresh(), events }).ready, false);
});
test("family schedule shares mechanics and does not grow after same-day replay", () => {
  const now = Date.now();
  let state = { ...fresh(), events: [event("a", { at: now })] };
  assert.equal(schedule(state, "verbs-001-repair").due, now + DAY);
  state.events.push(
    event("b", { exercise: "verbs-001-choice", at: now + 1000 }),
  );
  assert.equal(schedule(state, "verbs-001-order").streak, 1);
  state.events.push(event("c", { at: now + DAY + 1000 }));
  assert.equal(schedule(state, "verbs-001-gap").streak, 2);
  assert.equal(schedule(state, "verbs-001-gap").due, now + 3 * DAY + 1000);
});
test("wrong and assisted answers return sooner; self-rating cannot postpone a check", () => {
  const now = Date.now();
  for (const overrides of [{ ok: false }, { assisted: true }])
    assert.equal(
      schedule(
        { ...fresh(), events: [event("a", { at: now, ...overrides })] },
        "verbs-001-repair",
      ).due,
      now + 600000,
    );
  assert.equal(
    schedule(
      { ...fresh(), events: [event("a", { self: true })] },
      "verbs-001-gap",
    ).due,
    0,
  );
});
test("a short approach never repeats a family", () => {
  let seen = [],
    previous;
  const state = fresh();
  for (
    let i = 0;
    i <
    new Set(
      bank.exercises
        .filter((e) => e.topic === state.focus)
        .map((e) => e.family),
    ).size;
    i++
  ) {
    const chosen = pick(bank, state, previous, Date.now(), {
      usedFamilies: seen,
    });
    assert.ok(chosen);
    assert.equal(chosen.topic, "verbs");
    assert.equal(seen.includes(chosen.family), false);
    seen.push(chosen.family);
    previous = chosen.id;
  }
  assert.equal(
    pick(bank, state, previous, Date.now(), { usedFamilies: seen }),
    null,
  );
});
test("when all checks are scheduled later, stop instead of forcing early repeats", () => {
  const state = {
    ...fresh(),
    events: [
      ...new Set(
        bank.exercises.filter((e) => e.topic === "verbs").map((e) => e.family),
      ),
    ].map((family, i) =>
      event(String(i), {
        exercise: bank.exercises.find(
          (e) =>
            e.family === family &&
            ["gap", "repair", "transform", "translate", "contrast"].includes(
              e.mode,
            ),
        ).id,
      }),
    ),
  };
  assert.equal(pick(bank, state), null);
  assert.ok(pick(bank, state, null, Date.now(), { extra: true }));
  assert.equal(dueFamilies(bank, state), 0);
});
test("due counter counts phrases, not five mechanics", () => {
  const state = {
    ...fresh(),
    events: [event("a", { at: Date.now() - 2 * DAY })],
  };
  assert.equal(dueFamilies(bank, state), 1);
});
test("input preference selects comfortable mechanics", () => {
  for (const [input, allowed] of [
    ["tap", ["choice", "order", "match"]],
    ["write", ["gap", "repair", "transform", "translate", "contrast"]],
  ])
    for (let i = 0; i < 30; i++) {
      const state = { ...fresh(), preferences: { size: 6, input } };
      assert.ok(allowed.includes(pick(bank, state).mode));
    }
});
test("normalization accepts punctuation, expanded negatives and valid alternatives", () => {
  assert.ok(check({ answers: ["doesn't"] }, "does not"));
  assert.ok(
    check(
      { answers: ["She checks the reports."] },
      "  she checks the reports! ",
    ),
  );
  assert.equal(check({ answers: ["checks"] }, "check"), false);
  assert.ok(
    check(
      bank.exercises.find((e) => e.id === "verbs-007-gap"),
      "canceled",
    ),
  );
  assert.ok(
    check(
      bank.exercises.find((e) => e.id === "reference-001-gap"),
      "that",
    ),
  );
});

test("a skipped mechanic still affects variety on the next card", () => {
  const state = fresh();
  for (let i = 0; i < 20; i++) {
    const next = pick(bank, state, "verbs-001-choice", Date.now(), {
      usedFamilies: ["verbs-1"],
    });
    assert.notEqual(next.mode, "choice");
    assert.notEqual(next.family, "verbs-1");
  }
});

test("complex production is the default; errors reduce only the affected skill", () => {
  const state = fresh(),
    skill = "verbs-agreement";
  assert.equal(skillLevel(state, skill, bank), 3);
  for (let i = 0; i < 30; i++) {
    const e = pick(bank, state);
    assert.equal(e.level, 3);
    assert.ok(
      ["transform", "translate", "contrast", "choice", "match"].includes(
        e.mode,
      ),
    );
  }
  state.events.push(event("fail1", { skill, level: 3, ok: false }));
  assert.equal(skillLevel(state, skill, bank), 2);
  assert.equal(skillLevel(state, "verbs-past", bank), 3);
  state.events.push(event("fail2", { skill, level: 2, ok: false }));
  assert.equal(skillLevel(state, skill, bank), 1);
  for (let i = 0; i < 3; i++)
    state.events.push(event("recover" + i, { skill, level: 2 }));
  assert.equal(skillLevel(state, skill, bank), 3);
});
test("targeted retry changes the phrase while preserving the skill", () => {
  const state = fresh(),
    first = pick(bank, state, null, Date.now(), { forceSkill: "verbs-past" });
  const next = pick(bank, state, first.id, Date.now(), {
    forceSkill: first.skill,
    usedFamilies: [first.family],
  });
  assert.equal(next.skill, first.skill);
  assert.notEqual(next.family, first.family);
});
test("correction cannot inflate independent recall and metadata survives import", () => {
  const state = {
    ...fresh(),
    events: [
      event("original", { skill: "verbs-past", level: 3, ok: false }),
      event("correction", {
        skill: "verbs-past",
        level: 3,
        phase: "correction",
        assisted: true,
      }),
    ],
  };
  assert.equal(summary(state).total, 1);
  assert.equal(summary(state).recall, 0);
  assert.equal(skillLevel(state, "verbs-past", bank), 2);
  assert.deepEqual(
    validate(state).events.map((e) => [e.skill, e.level, e.phase]),
    [
      ["verbs-past", 3, "practice"],
      ["verbs-past", 3, "correction"],
    ],
  );
});
test("contrast requires both context answers and accepts full negatives", () => {
  const e = bank.exercises.find((e) => e.mode === "contrast");
  assert.ok(check(e, e.answers[0]));
  assert.equal(check(e, e.answers[0].split(" | ")[0]), false);
  assert.ok(check({ answers: ["They weren't ready."] }, "They were not ready"));
  assert.ok(check({ answers: ["She hasn't sent it."] }, "She has not sent it"));
});
test("easy successful history alone cannot establish mastery", () => {
  const events = [];
  for (let day = 2; day >= 0; day--)
    for (let family = 1; family <= 6; family++)
      events.push(
        event(day + "-" + family, {
          exercise: "verbs-" + family + "-gap",
          at: Date.now() - day * DAY,
          level: 2,
          skill: "verbs-past",
        }),
      );
  assert.equal(summary({ ...fresh(), events }, "verbs").ready, false);
});

test("one incidental typo is accepted; grammar and target words stay strict", () => {
  const ex = {
    mode: "transform",
    answers: ["She checks the reports."],
    protectedWords: ["checks"],
  };
  assert.equal(assess(ex, "She checks the reporst.").ok, true);
  assert.deepEqual(assess(ex, "She checks the reporst.").typo, {
    typed: "reporst",
    wanted: "reports",
  });
  assert.equal(assess(ex, "She cheks the reports.").ok, true);
  for (const wrong of [
    "She check the reports.",
    "He checks the reports.",
    "She checked the reports.",
    "She checks reports.",
    "She chacks the reporst.",
  ])
    assert.equal(assess(ex, wrong).ok, false);
  assert.equal(assess({ mode: "gap", answers: ["checks"] }, "cheks").ok, false);
});
test("receive spelling typo is accepted in translation, tense errors are rejected", () => {
  const ex = bank.exercises.find((e) => e.id === "verbs-time-106-translate");
  const result = assess(ex, "when did you recieve the final confirmation");
  assert.equal(result.ok, true);
  assert.deepEqual(result.typo, { typed: "recieve", wanted: "receive" });
  for (const wrong of [
    "When did you received the final confirmation?",
    "When do you receive the final confirmation?",
    "When you received the final confirmation?",
  ])
    assert.equal(assess(ex, wrong).ok, false);
});
import { pickContinuous } from "../public/core.js";
test("continuous practice passes 30 answers, exhausts each pool before recycling", () => {
  const exercises = bank.exercises
    .filter((e) => e.topic === "verbs" && e.mode === "choice")
    .slice(0, 12);
  const pool = { ...bank, exercises };
  const state = {
    ...fresh(),
    preferences: { ...fresh().preferences, input: "tap" },
  };
  const seen = [];
  let last = null;
  for (let i = 0; i < 35; i++) {
    const ex = pickContinuous(pool, state, last, Date.now(), {
      usedFamilies: seen,
    });
    assert.ok(ex);
    assert.ok(!seen.includes(ex.family));
    assert.notEqual(ex.id, last);
    seen.push(ex.family);
    last = ex.id;
    state.events.push(
      event("continuous-" + i, { exercise: ex.id, at: Date.now(), ok: true }),
    );
  }
});
test("continuous practice supports a single family and an empty pool", () => {
  const ex = bank.exercises.find(
    (e) => e.topic === "verbs" && e.mode === "choice",
  );
  const state = {
    ...fresh(),
    preferences: { ...fresh().preferences, input: "tap" },
  };
  const seen = [ex.family];
  assert.equal(
    pickContinuous({ ...bank, exercises: [ex] }, state, ex.id, Date.now(), {
      usedFamilies: seen,
    }).id,
    ex.id,
  );
  assert.deepEqual(seen, []);
  assert.equal(pickContinuous({ ...bank, exercises: [] }, state), null);
});

test("legacy fast transitions migrate to manual without changing answer history", () => {
  const old = {
    ...fresh(),
    preferences: { autoAdvance: true },
    events: [event("old", { assisted: true })],
  };
  const updated = validate(old);
  assert.equal(updated.preferences.autoAdvance, false);
  assert.equal(updated.events[0].assisted, true);
  assert.equal(
    validate({
      ...fresh(),
      preferences: { ...fresh().preferences, autoAdvance: true },
    }).preferences.autoAdvance,
    true,
  );
});
