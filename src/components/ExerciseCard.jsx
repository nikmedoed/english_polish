import { useEffect, useRef, useState } from "react";
import { usePractice } from "../stores/practice.js";
import { shouldAutoAdvance } from "../domain/core.js";
import { instructions, modeNames, shuffle } from "../lib/presentation.js";
import AnswerInput from "./AnswerInput.jsx";
import AnswerReview from "./AnswerReview.jsx";
import WordOrder from "./WordOrder.jsx";
import { Button } from "./ui.jsx";

export default function ExerciseCard() {
  const store = usePractice(),
    ex = store.exercise,
    s = store.session,
    r = s.result;
  const correcting = r?.ok === false && !r.self && !r.recovered;
  const rule =
    ex.hint ||
    store.bank.skills?.find((x) => x.id === ex.skill)?.rule ||
    store.topic.rule;
  const [tokens] = useState(() =>
    shuffle(ex.model.split(" ").map((word, i) => ({ word, i }))),
  );
  const [order] = useState(
    () =>
      s.matchOrder ||
      (ex.shuffleParts
        ? shuffle(ex.parts.map((_, i) => i))
        : ex.parts?.map((_, i) => i)),
  );
  const [spoken, setSpoken] = useState(false);
  const [choiceOrder] = useState(() => shuffle(ex.choices || []));
  const feedback = useRef(null),
    root = useRef(null);
  const auto =
    s.answered &&
    !correcting &&
    shouldAutoAdvance(store.state.preferences, r, ex);
  useEffect(() => {
    if (ex.mode === "match" && ex.shuffleParts && !s.matchOrder)
      store.updateSession({ matchOrder: order });
    root.current
      ?.querySelector("input,select,button:not(:disabled)")
      ?.focus({ preventScroll: true });
    const bounds = root.current?.getBoundingClientRect();
    if (bounds && (bounds.top < 0 || bounds.top > window.innerHeight / 2))
      root.current.scrollIntoView({ block: "start" });
  }, []);
  useEffect(() => {
    let timer;
    const schedule = () => {
      clearTimeout(timer);
      if (auto && !document.hidden) timer = setTimeout(store.next, 8000);
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [auto, store.next]);
  useEffect(() => {
    if (s.answered && !correcting) {
      feedback.current?.focus({ preventScroll: true });
      feedback.current?.scrollIntoView({ block: "nearest" });
    }
  }, [s.answered, r?.recovered, r?.revealed, correcting]);
  useEffect(() => {
    function enter(e) {
      if (e.key === "Enter" && e.repeat) {
        e.preventDefault();
        return;
      }
      if (
        e.defaultPrevented ||
        e.key !== "Enter" ||
        e.isComposing ||
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        !s.answered ||
        correcting ||
        s.complete
      )
        return;
      if (e.target.closest?.("a,button") && e.target.id !== "next") return;
      e.preventDefault();
      store.next();
    }
    document.addEventListener("keydown", enter);
    return () => document.removeEventListener("keydown", enter);
  }, [s.answered, s.complete, correcting, store.next]);
  const draft = (value) => store.updateSession({ draft: value });
  const repair = (value) => store.updateSession({ repairDraft: value });
  return (
    <article
      id="exercise"
      className="card"
      ref={root}
      aria-labelledby="exercise-instruction"
    >
      <div className="meta">
        <span>
          {modeNames[ex.mode]} ·{" "}
          {["", "С опорой", "Самостоятельно", "В контексте"][ex.level || 2]}
        </span>
        <span>Задание {s.count + (s.answered ? 0 : 1)}</span>
      </div>
      <h2 id="exercise-instruction" className="practice-note">
        {ex.task || instructions[ex.mode]}
      </h2>
      {ex.mode === "repair" && ex.task && ex.cue !== ex.prompt && (
        <p className="exercise-cue">
          <strong>Смысл фразы</strong>
          {ex.cue}
        </p>
      )}
      {ex.mode !== "order" && (
        <div className="prompt">{ex.mode === "speak" ? ex.cue : ex.prompt}</div>
      )}
      {!s.answered && (
        <div id="input-area">
          {ex.mode === "order" ? (
            <WordOrder
              tokens={tokens}
              words={s.words}
              onChange={(words) => store.updateSession({ words })}
              onSubmit={store.grade}
            />
          ) : ex.mode === "speak" ? (
            <>
              <p className="small">Затем скажи похожую фразу о себе.</p>
              {!spoken ? (
                <Button
                  label="Показать образец"
                  onClick={() => setSpoken(true)}
                />
              ) : (
                <>
                  <AnswerReview
                    exercise={ex}
                    result={{ ok: true, self: true }}
                  />
                  <p className="small">
                    Проверь конструкцию. Перевод не обязан совпадать дословно.
                  </p>
                  <div className="actions">
                    <Button
                      label="Получилось"
                      onClick={() => store.record(true, true)}
                    />
                    <Button
                      label="Нужна практика"
                      secondary
                      onClick={() => store.record(false, true)}
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {ex.mode === "gap" && (
                <p className="small cue">
                  {ex.cue}
                  <span>Исходное слово: {ex.base}</span>
                </p>
              )}
              {ex.mode === "translate" && (
                <p className="small cue">Слова: {ex.base}</p>
              )}
              <AnswerInput
                exercise={ex}
                choiceOrder={choiceOrder}
                value={s.draft}
                onChange={draft}
                order={order}
                onSubmit={store.grade}
              />
            </>
          )}
        </div>
      )}
      {s.answered ? (
        <div id="feedback" ref={feedback} tabIndex={-1} aria-live="polite">
          <AnswerReview exercise={ex} result={r} draft={s.repairDraft} />
        </div>
      ) : (
        s.hint && (
          <div className="hint-panel">
            <strong>Правило</strong>
            <p>{rule}</p>
            <p className="help-note">Ответ будет учтён с подсказкой.</p>
          </div>
        )
      )}
      {correcting ? (
        <div className="correction">
          <p className="correction-note">
            {r.revealed
              ? "Посмотри разбор и попробуй ещё раз."
              : r.retryHint
                ? "Примени подсказку и исправь ответ."
                : "Попробуй исправить сам. Ответ пока скрыт."}
          </p>
          {r.retryHint && !r.revealed && (
            <div className="hint-panel">
              <strong>Подсказка</strong>
              <p>{rule}</p>
            </div>
          )}
          {ex.mode === "order" && s.input === "tap" ? (
            <WordOrder
              tokens={tokens}
              words={s.words}
              correction
              onChange={(words) =>
                store.updateSession({
                  words,
                  repairDraft: words
                    .map((i) => ex.model.split(" ")[i])
                    .join(" "),
                })
              }
              onSubmit={store.retry}
            />
          ) : s.input === "tap" && !["choice", "match"].includes(ex.mode) ? (
            <>
              <p className="small">
                Проверь порядок слов. Можно продолжить без набора.
              </p>
              {!r.revealed && (
                <Button
                  label="Показать разбор"
                  secondary
                  onClick={store.reveal}
                />
              )}
            </>
          ) : (
            <AnswerInput
              attempt={`${r.retries || 0}-${!!r.retryHint}-${!!r.revealed}`}
              exercise={ex}
              choiceOrder={choiceOrder}
              value={s.repairDraft ?? r.answer ?? s.draft}
              onChange={repair}
              correction
              tap={s.input === "tap"}
              order={order}
              onSubmit={store.retry}
            />
          )}
          <div className="actions">
            {!r.retryHint && !r.revealed && (
              <Button label="Намёк" secondary onClick={store.retryHint} />
            )}
            {r.retryHint && !r.revealed && (
              <Button
                label="Показать ответ и разбор"
                secondary
                onClick={store.reveal}
              />
            )}
            <Button label="Пропустить" text onClick={store.next} />
            <Button label="Закончить" text onClick={store.finish} />
          </div>
        </div>
      ) : s.answered ? (
        <div id="exercise-actions" className="actions">
          {auto ? (
            <>
              <Button id="next" label="Следующее" onClick={store.next} />
              <Button label="Пауза" secondary onClick={store.hold} />
            </>
          ) : (
            <Button
              id="next"
              label={s.oral ? "Завершить подход" : "Следующее"}
              onClick={store.next}
            />
          )}
          <Button label="Закончить" text onClick={store.finish} />
          <span className={`small keyboard-note ${auto ? "auto-note" : ""}`}>
            {auto
              ? "Автопереход через 8 секунд · Enter: дальше"
              : "Enter: дальше"}
          </span>
        </div>
      ) : (
        <div id="support-actions" className="actions">
          <Button label="Подсказка" text onClick={store.hint} />
          <Button label="Пропустить" text onClick={store.skip} />
          <Button label="Закончить" text onClick={store.finish} />
        </div>
      )}
    </article>
  );
}
