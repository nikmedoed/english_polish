export const DAY = 86400000;
export const MODES = [
  "choice",
  "gap",
  "repair",
  "order",
  "speak",
  "transform",
  "translate",
  "contrast",
  "match",
];
export const familyOf = (value) =>
  (typeof value === "string" ? value : value.exercise).replace(
    /-(\d+)-(choice|gap|repair|order|speak|transform|translate|contrast|match)$/,
    (_, n) => `-${Number(n)}`,
  );
export const modeOf = (event) => event.exercise.split("-").at(-1);
export function fresh() {
  return {
    version: 1,
    focus: "verbs",
    preferences: {
      size: 6,
      input: "mix",
      challenge: "adaptive",
      autoAdvance: false,
      reviewVersion: 1,
    },
    events: [],
  };
}
export function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(
      /\b(have|has|had|was|were|is|are|should|could|would) not\b/g,
      "$1n't",
    )
    .replace(/\b(i|we|you|they) have\b/g, "$1've")
    .replace(/\b(he|she|it) has\b/g, "$1's")
    .replace(/\bdoes not\b/g, "doesn't")
    .replace(/\bdo not\b/g, "don't")
    .replace(/\bdid not\b/g, "didn't")
    .replace(/\bwill not\b/g, "won't")
    .replace(/\b(can not|cannot)\b/g, "can't")
    .replace(/\bi am\b/g, "i'm")
    .replace(/\b(he|she|it) is\b/g, "$1's")
    .replace(/\b(we|you|they) are\b/g, "$1're")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export function check(exercise, value) {
  return exercise.answers.some((a) => normalize(a) === normalize(value));
}
export function assess(exercise, value) {
  if (check(exercise, value)) return { ok: true };
  if (!["repair", "transform", "translate"].includes(exercise.mode))
    return { ok: false };
  const words = normalize(value).split(" ");
  const grammar = new Set(
    "a an the to of in on at for by with from and or but not no is am are was were be been being do does did have has had will would can could should might may must he she it i we you they his her its their our my your this that these those who which what when where why how than then".split(
      " ",
    ),
  );
  for (const answer of exercise.answers) {
    const correct = normalize(answer).split(" ");
    if (words.length !== correct.length) continue;
    const differences = correct
      .map((word, i) => (word !== words[i] ? i : -1))
      .filter((i) => i >= 0);
    if (differences.length !== 1) continue;
    const i = differences[0],
      wanted = correct[i],
      typed = words[i];
    if (
      Math.min(wanted.length, typed.length) < 4 ||
      grammar.has(wanted) ||
      grammar.has(typed)
    )
      continue;
    // Allow an incidental stem typo while keeping the beginning and grammatical ending intact.
    if (
      exercise.protectedWords?.includes(wanted) &&
      (wanted[0] !== typed[0] || wanted.slice(-2) !== typed.slice(-2))
    )
      continue;
    if ([wanted, typed].some((w) => /[']/.test(w))) continue;
    if (
      wanted === typed + "s" ||
      typed === wanted + "s" ||
      wanted === typed + "d" ||
      typed === wanted + "d" ||
      wanted === typed + "ed" ||
      typed === wanted + "ed" ||
      wanted === typed + "es" ||
      typed === wanted + "es" ||
      wanted === typed + "ing" ||
      typed === wanted + "ing"
    )
      continue;
    let one = false;
    if (wanted.length === typed.length) {
      const d = [...wanted]
        .map((c, j) => (c !== typed[j] ? j : -1))
        .filter((j) => j >= 0);
      one =
        d.length === 1 ||
        (d.length === 2 &&
          d[1] === d[0] + 1 &&
          wanted[d[0]] === typed[d[1]] &&
          wanted[d[1]] === typed[d[0]]);
    } else if (Math.abs(wanted.length - typed.length) === 1) {
      const longer = wanted.length > typed.length ? wanted : typed,
        shorter = wanted.length > typed.length ? typed : wanted;
      one = [...longer].some(
        (_, j) => longer.slice(0, j) + longer.slice(j + 1) === shorter,
      );
    }
    if (one) return { ok: true, typo: { typed, wanted } };
  }
  return { ok: false };
}
export function validate(state) {
  if (
    !state ||
    state.version !== 1 ||
    !Array.isArray(state.events) ||
    state.events.length > 200000 ||
    typeof state.focus !== "string"
  )
    throw Error("Неподдерживаемый формат прогресса");
  const ids = new Set();
  for (const e of state.events) {
    if (
      !e ||
      typeof e.id !== "string" ||
      ids.has(e.id) ||
      typeof e.exercise !== "string" ||
      typeof e.topic !== "string" ||
      !Number.isFinite(e.at) ||
      e.at < 0 ||
      e.at > Date.now() + DAY ||
      typeof e.ok !== "boolean" ||
      typeof e.self !== "boolean" ||
      !Number.isFinite(e.ms) ||
      e.ms < 0 ||
      e.ms > DAY ||
      (e.assisted !== undefined && typeof e.assisted !== "boolean") ||
      (e.skill !== undefined && typeof e.skill !== "string") ||
      (e.level !== undefined && ![1, 2, 3].includes(e.level)) ||
      (e.phase !== undefined && !["practice", "correction"].includes(e.phase))
    )
      throw Error("Повреждённая запись прогресса");
    ids.add(e.id);
  }
  const preferences = { ...fresh().preferences, ...state.preferences };
  if (state.preferences?.reviewVersion !== 1) preferences.autoAdvance = false;
  preferences.reviewVersion = 1;
  if (preferences.input === "write") preferences.input = "mix";
  if (
    ![4, 6, 10].includes(preferences.size) ||
    !["mix", "tap", "write"].includes(preferences.input) ||
    !["adaptive", "foundation", "challenge"].includes(preferences.challenge) ||
    typeof preferences.autoAdvance !== "boolean"
  )
    throw Error("Некорректные настройки подхода");
  return {
    version: 1,
    focus: state.focus,
    preferences: {
      size: preferences.size,
      input: preferences.input,
      challenge: preferences.challenge,
      autoAdvance: preferences.autoAdvance,
      reviewVersion: 1,
    },
    events: state.events
      .map((e) => ({
        id: e.id,
        exercise: e.exercise,
        topic: e.topic,
        at: e.at,
        ok: e.ok,
        self: e.self,
        ms: e.ms,
        assisted: e.assisted || false,
        ...(e.skill ? { skill: e.skill } : {}),
        ...(e.level ? { level: e.level } : {}),
        phase: e.phase || "practice",
      }))
      .sort((a, b) => a.at - b.at),
  };
}
export function merge(a, b) {
  a = validate(a);
  b = validate(b);
  const map = new Map(a.events.map((e) => [e.id, e]));
  for (const e of b.events) if (!map.has(e.id)) map.set(e.id, e);
  return { ...a, events: [...map.values()].sort((x, y) => x.at - y.at) };
}
function objective(e) {
  return !e.self && !e.assisted && e.phase !== "correction";
}
function production(e) {
  return (
    objective(e) &&
    ["gap", "repair", "transform", "translate", "contrast"].includes(modeOf(e))
  );
}
export function summary(state, topic) {
  const all = state.events
    .filter((e) => !topic || e.topic === topic)
    .sort((a, b) => a.at - b.at);
  const events = all.filter(objective),
    recent = events.slice(-30);
  const attempts = all.filter(production);
  // One production observation per family per calendar day: repetitions don't inflate readiness.
  const observations = new Map();
  for (const e of attempts)
    observations.set(
      `${familyOf(e)}:${new Date(e.at).toLocaleDateString("sv-SE")}`,
      e,
    );
  const recall = [...observations.values()]
    .sort((a, b) => a.at - b.at)
    .slice(-20);
  const families = new Set(recall.map(familyOf));
  const days = new Set(
    recall.map((e) => new Date(e.at).toLocaleDateString("sv-SE")),
  );
  const delayed = new Set();
  for (const e of recall)
    if (
      e.ok &&
      attempts.some((p) => familyOf(p) === familyOf(e) && p.at <= e.at - DAY)
    )
      delayed.add(familyOf(e));
  const challengeCount = new Set(
    recall.filter((e) => e.level === 3).map(familyOf),
  ).size;
  const skillCount = new Set(
    recall.filter((e) => e.level === 3 && e.skill).map((e) => e.skill),
  ).size;
  const rate = (es) =>
    es.length
      ? Math.round((es.filter((e) => e.ok).length / es.length) * 100)
      : null;
  return {
    total: events.length,
    accuracy: rate(events),
    recent: rate(recent),
    days: new Set(events.map((e) => new Date(e.at).toLocaleDateString("sv-SE")))
      .size,
    challengeCount,
    skillCount,
    recall: rate(recall),
    recallCount: recall.length,
    families: families.size,
    delayed: delayed.size,
    ready:
      challengeCount >= 4 &&
      skillCount >= (topic === "verbs" ? 3 : 2) &&
      recall.length >= 12 &&
      families.size >= 6 &&
      days.size >= 3 &&
      delayed.size >= 4 &&
      recall.filter((e) => e.ok).length / recall.length >= 0.85,
  };
}
export function schedule(state, id) {
  const family = familyOf(id);
  // Self ratings are tracked but do not postpone checked practice.
  const es = state.events
    .filter((e) => familyOf(e) === family && !e.self)
    .sort((a, b) => a.at - b.at);
  if (!es.length) return { due: 0, streak: 0 };
  let streak = 0,
    lastCounted = -Infinity;
  // A same-day replay or a shown answer cannot expand the interval.
  for (const e of es) {
    if (!e.ok || e.assisted || e.phase === "correction") {
      streak = 0;
      lastCounted = e.at;
    } else if (production(e) && (streak === 0 || e.at - lastCounted >= DAY)) {
      streak++;
      lastCounted = e.at;
    }
  }
  const last = es.at(-1);
  return {
    due:
      last.at +
      (production(last) && last.ok
        ? Math.min(14, 2 ** Math.min(Math.max(0, streak - 1), 4)) * DAY
        : 600000),
    streak,
  };
}
export function dueFamilies(bank, state, now = Date.now()) {
  const ids = [
    ...new Set(
      bank.exercises
        .filter((e) => e.topic === state.focus)
        .map((e) => e.family),
    ),
  ];
  return ids.filter((id) => {
    const s = schedule(state, id);
    return s.due > 0 && s.due <= now;
  }).length;
}
export function skillLevel(state, skill, bank) {
  const requested = state.preferences?.challenge || "adaptive";
  if (requested === "foundation") return 1;
  if (requested === "challenge") return 3;
  const history = state.events
    .filter(
      (e) =>
        !e.self &&
        !e.assisted &&
        e.phase !== "correction" &&
        (e.skill ||
          bank?.exercises.find((x) => x.id === e.exercise)?.skill ||
          e.topic) === skill,
    )
    .slice(-8);
  if (!history.length) return 3;
  if (history.slice(-2).length === 2 && history.slice(-2).every((e) => !e.ok))
    return 1;
  if (!history.at(-1).ok) return 2;
  if (
    history.filter(production).slice(-3).length === 3 &&
    history
      .filter(production)
      .slice(-3)
      .every((e) => e.ok)
  )
    return 3;
  if (
    !history.some((e) => !e.ok) &&
    history.every((e) => e.level === undefined || e.level >= 2)
  )
    return 3;
  return 2;
}
export function pick(bank, state, last, now = Date.now(), options = {}) {
  const used = options.usedFamilies || [];
  const recent = options.recentFamilies || (last ? [familyOf(last)] : []);
  const input = state.preferences?.input || "mix";
  const allowed =
    input === "tap"
      ? ["choice", "order", "match"]
      : input === "write"
        ? ["gap", "repair", "transform", "translate", "contrast"]
        : [
            "choice",
            "gap",
            "repair",
            "order",
            "transform",
            "translate",
            "contrast",
            "match",
          ];
  let available = bank.exercises.filter(
    (e) =>
      e.topic === state.focus &&
      allowed.includes(e.mode) &&
      !used.includes(e.family) &&
      !recent.includes(e.family) &&
      (options.extra || schedule(state, e.family).due <= now),
  );
  if (!available.length) return null;
  const allSkills = [...new Set(available.map((e) => e.skill || e.topic))];
  let candidates = allSkills;
  if (options.forceSkill && allSkills.includes(options.forceSkill))
    candidates = [options.forceSkill];
  const weights = candidates.map((skill) => {
    const history = state.events
      .filter(
        (e) =>
          objective(e) &&
          (e.skill ||
            bank.exercises.find((x) => x.id === e.exercise)?.skill ||
            e.topic) === skill,
      )
      .slice(-8);
    const errors = history.filter((e) => !e.ok).length;
    const due = available.some(
      (e) =>
        (e.skill || e.topic) === skill && schedule(state, e.family).due > 0,
    );
    return {
      skill,
      weight:
        (due ? 3 : 1) + (history.length ? (errors / history.length) * 4 : 2),
    };
  });
  let r = Math.random() * weights.reduce((sum, x) => sum + x.weight, 0),
    chosen = weights.at(-1).skill;
  for (const x of weights) {
    r -= x.weight;
    if (r <= 0) {
      chosen = x.skill;
      break;
    }
  }
  available = available.filter((e) => (e.skill || e.topic) === chosen);
  const target = Math.max(
    input === "write" ? 2 : 1,
    skillLevel(state, chosen, bank),
  );
  const distance = Math.min(
    ...available.map((e) => Math.abs((e.level || 2) - target)),
  );
  available = available.filter(
    (e) => Math.abs((e.level || 2) - target) === distance,
  );
  const lastMode = last?.split("-").at(-1);
  const varied = available.filter((e) => e.mode !== lastMode);
  if (varied.length) available = varied;
  const due = available.filter((e) => schedule(state, e.family).due > 0);
  if (due.length && Math.random() < 0.6) available = due;
  return available[Math.floor(Math.random() * available.length)];
}

// Prefer due/new families, then early practice; recycle only after the pool is exhausted.
export function pickContinuous(
  bank,
  state,
  last,
  now = Date.now(),
  options = {},
) {
  const chosen =
    pick(bank, state, last, now, options) ||
    pick(bank, state, last, now, { ...options, extra: true });
  if (chosen) return chosen;
  const recycled = pick(bank, state, last, now, {
    ...options,
    usedFamilies: [],
    extra: true,
  });
  if (recycled) {
    options.usedFamilies?.splice(0);
    return recycled;
  }
  // A topic with just one available family can still be practised again.
  const single = pick(bank, state, null, now, {
    ...options,
    usedFamilies: [],
    recentFamilies: [],
    extra: true,
  });
  if (single) options.usedFamilies?.splice(0);
  return single;
}

export function hintUsed(session, exerciseId) {
  return session.hint === true && session.hintExercise === exerciseId;
}
export function feedbackStatus(result) {
  if (result.skipped) return "Пропущено";
  if (result.self) return "Самооценка сохранена";
  if (result.recovered)
    return result.help
      ? "Ошибка исправлена после подсказки"
      : "Ошибка исправлена самостоятельно";
  if (!result.ok) return "Пока неверно — попробуй исправить";
  return result.typo ? "Верно — опечатка принята" : "Верно";
}
export function shouldAutoAdvance(preferences, result, exercise) {
  return (
    preferences.autoAdvance === true &&
    !result.autoHeld &&
    result.ok === true &&
    !result.assisted &&
    !result.help &&
    !result.typo &&
    !exercise.parts
  );
}
