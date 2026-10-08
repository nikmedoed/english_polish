import { useMemo } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fresh, validate, merge, summary } from "../domain/core.js";
import { practiceCommands, trackVisibility } from "./transitions.js";
import { restoreSession } from "../domain/session.js";

export const sandbox =
  new URLSearchParams(location.search).get("sandbox") === "1";
const KEY = sandbox ? "english-focus-sandbox-v1" : "english-focus-v1";
const SESSION_KEY = sandbox
  ? "english-focus-sandbox-session-v2"
  : "english-focus-session-v2";
let state = fresh();
let notice = sandbox
  ? "Тестовый режим: основная история не меняется."
  : "Сохранение в этом браузере";
try {
  const raw = localStorage.getItem(KEY);
  if (raw) state = validate(JSON.parse(raw));
} catch {
  notice = "Память недоступна или повреждена. Сделай экспорт перед закрытием.";
}

const names = [
  "start",
  "ensureSession",
  "next",
  "finish",
  "setFocus",
  "setMode",
  "grade",
  "record",
  "retry",
  "hint",
  "retryHint",
  "reveal",
  "skip",
  "oral",
  "importProgress",
  "updateSession",
  "setPreference",
  "hold",
];
export const practiceStore = create(
  immer((set, get) => ({
    state,
    notice,
    bank: null,
    session: null,
    loading: true,
    error: "",
    ...Object.fromEntries(
      names.map((name) => [
        name,
        (...args) => {
          let result;
          set((draft) => {
            result = practiceCommands(draft, KEY)[name](...args);
          });
          return result;
        },
      ]),
    ),
    remember() {
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(get().session));
      } catch {}
    },
    setNotice(notice) {
      set({ notice });
    },
    async load() {
      set({ loading: true, error: "" });
      try {
        const response = await fetch("./data/bank.json");
        if (!response.ok) throw Error(`HTTP ${response.status}`);
        const bank = await response.json();
        let session = null;
        try {
          const c = JSON.parse(sessionStorage.getItem(SESSION_KEY));
          session = restoreSession(c, bank, get().state.focus);
        } catch {}
        set((draft) => {
          draft.bank = bank;
          draft.session = session;
          if (!bank.topics.some((t) => t.id === draft.state.focus))
            draft.state.focus = "verbs";
          draft.loading = false;
        });
      } catch {
        set({
          loading: false,
          error:
            "Не удалось загрузить задания. Для первого запуска нужен интернет.",
        });
      }
    },
  })),
);
practiceStore.subscribe((next, previous) => {
  if (next.state !== previous.state) {
    try {
      const json = JSON.stringify(next.state);
      if (localStorage.getItem(KEY) !== json) localStorage.setItem(KEY, json);
    } catch {
      practiceStore
        .getState()
        .setNotice("Не удалось сохранить. Сделай экспорт перед закрытием.");
    }
  }
  if (next.session !== previous.session) next.remember();
});
window.addEventListener("pagehide", () => practiceStore.getState().remember());
window.addEventListener("storage", (e) => {
  if (e.key !== KEY || !e.newValue) return;
  try {
    const state = practiceStore.getState().state;
    const merged = merge(state, JSON.parse(e.newValue));
    if (JSON.stringify(state) !== JSON.stringify(merged))
      practiceStore.setState({ state: merged });
  } catch {
    practiceStore
      .getState()
      .setNotice("Не удалось прочитать изменения из другой вкладки.");
  }
});
document.addEventListener("visibilitychange", trackVisibility);

export function usePractice() {
  const model = practiceStore();
  const stats = useMemo(
    () => summary(model.state, model.state.focus),
    [model.state],
  );
  return useMemo(() => {
    const topic = model.bank?.topics.find((t) => t.id === model.state.focus);
    const exercise = model.bank?.exercises.find(
      (e) => e.id === model.session?.current,
    );
    const p = model.session?.previous,
      previousExercise = model.bank?.exercises.find(
        (e) => e.id === p?.exercise,
      );
    return {
      ...model,
      topic,
      exercise,
      previous: previousExercise
        ? { exercise: previousExercise, result: p.result }
        : null,
      stats,
    };
  }, [model, stats]);
}
