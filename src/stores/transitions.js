import {
  validate,
  merge,
  pickContinuous,
  assess,
  hintUsed,
  MODES,
} from "../domain/core.js";
let activeMs = 0,
  visibleSince = Date.now();
const today = () => new Date().toLocaleDateString("sv-SE");
export function trackVisibility() {
  if (document.hidden) activeMs += Date.now() - visibleSince;
  else visibleSince = Date.now();
}
// Run one transition inside an Immer transaction. Nested actions share the same draft.
export function practiceCommands(model, progressKey) {
  const exercise = () =>
    model.bank.exercises.find((e) => e.id === model.session?.current);
  function save() {
    try {
      const raw = localStorage.getItem(progressKey);
      if (raw) model.state = merge(model.state, JSON.parse(raw));
    } catch {
      model.notice = "Не удалось прочитать сохранённый прогресс.";
    }
  }
  function advance() {
    const s = model.session;
    if (s.current && s.result)
      s.previous = { exercise: s.current, result: s.result };
    s.remediation ||= [];
    const remedial = s.remediation.find((x) => x.after <= s.count);
    const recentModes = (s.modes || []).slice(-2);
    const tap = (m) => ["choice", "order", "match"].includes(m);
    const activeInput =
      s.input === "mix" &&
      recentModes.length === 2 &&
      recentModes.every((m) => !tap(m))
        ? "tap"
        : s.input === "mix" &&
            recentModes.length === 2 &&
            recentModes.every(tap)
          ? "write"
          : s.input;
    const choose = (input) =>
      pickContinuous(
        model.bank,
        { ...model.state, preferences: { ...model.state.preferences, input } },
        s.current,
        Date.now(),
        { usedFamilies: s.seen, extra: s.extra, forceSkill: remedial?.skill },
      );
    let chosen = choose(activeInput);
    if (!chosen && activeInput !== s.input) chosen = choose(s.input);
    if (remedial && chosen?.skill === remedial.skill)
      s.remediation = s.remediation.filter((x) => x !== remedial);
    Object.assign(s, {
      turn: (s.turn || 0) + 1,
      current: chosen?.id || null,
      complete: !chosen,
      answered: false,
      result: null,
      hint: false,
      hintExercise: null,
      draft: "",
      repairDraft: null,
      words: [],
      oral: false,
      matchOrder: null,
    });
    activeMs = 0;
    visibleSince = Date.now();
  }
  function start(extra = false) {
    const remediation = (model.bank.skills || [])
      .filter((skill) => skill.topic === model.state.focus)
      .filter((skill) => {
        const es = model.state.events.filter(
          (e) => e.phase !== "correction" && !e.self && e.skill === skill.id,
        );
        return es.length && !es.at(-1).ok;
      })
      .map((skill) => ({ skill: skill.id, after: 0 }));
    model.session = {
      engine: 3,
      remediation,
      day: today(),
      input: model.state.preferences.input,
      focus: model.state.focus,
      count: 0,
      correct: 0,
      checked: 0,
      guided: 0,
      skipped: 0,
      seen: [],
      current: null,
      answered: false,
      result: null,
      hint: false,
      draft: "",
      words: [],
      extra,
      complete: false,
      oral: false,
    };
    advance();
  }
  function ensureSession() {
    if (
      !model.session ||
      model.session.focus !== model.state.focus ||
      model.session.day !== today()
    )
      start();
  }
  function next() {
    if (model.session.oral) finish();
    else advance();
  }
  function finish() {
    const s = model.session;
    if (s.answered && s.current && s.result)
      s.previous = { exercise: s.current, result: s.result };
    s.complete = true;
  }
  function setFocus(id) {
    if (model.state.focus !== id) {
      model.state.focus = id;
      model.session = null;
      save();
    }
  }
  function setMode(input) {
    if (model.session.input === input) return;
    model.state.preferences.input = input;
    save();
    model.session.input = input;
    next();
  }
  function event(ok, self, assisted, phase = "practice") {
    const ex = exercise();
    model.state.events.push({
      id: crypto.randomUUID(),
      exercise: ex.id,
      topic: ex.topic,
      at: Date.now(),
      ok,
      self,
      assisted,
      skill: ex.skill,
      level: ex.level || 2,
      phase,
      ms:
        phase === "correction"
          ? 0
          : Math.min(
              86400000,
              activeMs + (document.hidden ? 0 : Date.now() - visibleSince),
            ),
    });
    save();
  }
  function record(ok, self, answer = "", typo) {
    const s = model.session,
      ex = exercise();
    if (s.answered) return;
    const assisted = hintUsed(s, ex.id);
    s.answered = true;
    event(ok, self, assisted);
    if (!self) {
      s.count++;
      s.seen.push(ex.family);
      s.modes = [...(s.modes || []), ex.mode];
      if (assisted) s.guided++;
      else {
        s.checked++;
        if (ok) s.correct++;
      }
    }
    if (ok && !self && !assisted && (ex.level || 2) >= 2)
      s.remediation = (s.remediation || []).filter((x) => x.skill !== ex.skill);
    if (!ok && !self) {
      s.remediation ||= [];
      if (!s.remediation.some((x) => x.skill === ex.skill))
        s.remediation.push({ skill: ex.skill, after: s.count + 2 });
    }
    s.result = {
      ok,
      self,
      assisted,
      help: assisted ? "hint" : null,
      answer,
      typo,
      retryHint: assisted,
    };
  }
  function grade(value) {
    if (!value.trim()) return;
    const result = assess(exercise(), value);
    record(result.ok, false, value, result.typo);
  }
  function retry(value) {
    if (!value.trim()) return;
    const s = model.session,
      r = s.result;
    const assessment = assess(exercise(), value);
    if (!assessment.ok) {
      r.retries = (r.retries || 0) + 1;
      s.repairDraft = value;
      if (r.retries === 1) {
        r.retryHint = true;
        r.help = "auto-hint";
      }
      if (r.retries >= 2) reveal();
      return;
    }
    event(
      true,
      false,
      !!(r.retryHint || r.revealed || r.assisted),
      "correction",
    );
    r.recovered = true;
    r.help = r.revealed
      ? "answer"
      : r.help || (r.retryHint ? "auto-hint" : null);
    r.typo = assessment.typo;
    s.repairDraft = "";
    s.corrected = (s.corrected || 0) + 1;
  }
  function hint() {
    model.session.hint = true;
    model.session.hintExercise = exercise().id;
  }
  function retryHint() {
    Object.assign(model.session.result, { retryHint: true, help: "hint" });
  }
  function reveal() {
    Object.assign(model.session.result, { revealed: true, help: "answer" });
  }
  function skip() {
    const s = model.session;
    if (!s.oral) {
      s.skipped++;
      s.count++;
      s.seen.push(exercise().family);
    }
    s.answered = true;
    s.result = { skipped: true };
    next();
  }
  function oral() {
    const s = model.session,
      family = s.seen.at(-1);
    const ex =
      model.bank.exercises.find(
        (e) =>
          e.topic === model.state.focus &&
          e.mode === "speak" &&
          (!family || e.family === family),
      ) ||
      model.bank.exercises.find(
        (e) => e.topic === model.state.focus && e.mode === "speak",
      );
    if (!ex) return;
    Object.assign(s, {
      current: ex.id,
      oral: true,
      complete: false,
      answered: false,
      result: null,
      hint: false,
    });
    activeMs = 0;
    visibleSince = Date.now();
  }
  function importProgress(text) {
    if (text.length > 25000000) throw Error("Максимум 25 МБ");
    const imported = validate(JSON.parse(text.replace(/^\uFEFF/, "")));
    if (!model.bank.topics.some((t) => t.id === imported.focus))
      throw Error("Неизвестная тема");
    if (
      imported.events.some(
        (e) =>
          !model.bank.topics.some((t) => t.id === e.topic) ||
          !MODES.includes(e.exercise.split("-").at(-1)) ||
          !e.exercise.startsWith(e.topic + "-"),
      )
    )
      throw Error("Неизвестный формат задания");
    const before = model.state.events.length;
    model.state = merge(model.state, imported);
    save();
    return `Добавлено: ${model.state.events.length - before}. Всего: ${model.state.events.length}.`;
  }

  function updateSession(values) {
    Object.assign(model.session, values);
  }
  function setPreference(key, value) {
    model.state.preferences[key] = value;
  }
  function hold() {
    model.session.result.autoHeld = true;
  }
  return {
    start,
    ensureSession,
    next,
    finish,
    setFocus,
    setMode,
    record,
    grade,
    retry,
    hint,
    retryHint,
    reveal,
    skip,
    oral,
    importProgress,
    updateSession,
    setPreference,
    hold,
  };
}
