import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePractice } from "../stores/practice.js";
import { dueFamilies } from "../domain/core.js";
import { percentage } from "../lib/presentation.js";
import ExerciseCard from "../components/ExerciseCard.jsx";
import PreviousReview from "../components/PreviousReview.jsx";
import SessionFacts from "../components/SessionFacts.jsx";
import { Button } from "../components/ui.jsx";
export default function PracticeView() {
  const store = usePractice(),
    s = store.session;
  useEffect(() => {
    store.ensureSession();
    const ensure = () => store.ensureSession();
    window.addEventListener("focus", ensure);
    const timer = setInterval(ensure, 30000);
    return () => {
      window.removeEventListener("focus", ensure);
      clearInterval(timer);
    };
  }, [store.state.focus, store.ensureSession]);
  if (!s || s.focus !== store.state.focus) return null;
  if (s.complete)
    return (
      <>
        <div className="page-head">
          <div>
            <h1>Подход завершён</h1>
            <p>{store.topic.title}</p>
          </div>
        </div>
        <section className="card">
          <SessionFacts session={s} />
          <p className="small">
            {store.stats.ready
              ? "Можно проверить применение в собственной речи."
              : "Повтори тему в другой день, чтобы проверить запоминание."}
          </p>
          <div className="actions">
            {!s.answered && s.current && (
              <Button
                label="Вернуться к заданию"
                onClick={() => store.updateSession({ complete: false })}
              />
            )}
            <Button label="Одна фраза вслух" secondary onClick={store.oral} />
            <Link className="button" to="/stats">
              Прогресс
            </Link>
            <Button
              label="Продолжить тренировку"
              secondary={!s.answered && !!s.current}
              onClick={() => store.start(true)}
            />
          </div>
        </section>
        <PreviousReview previous={store.previous} />
      </>
    );
  return (
    <>
      <div className="page-head practice-head">
        <h1>{store.topic.title}</h1>
        <div className="practice-controls">
          <div className="mode-switch" role="group" aria-label="Режим практики">
            <Button
              label="Полная практика"
              secondary
              aria-pressed={s.input !== "tap"}
              onClick={() => store.setMode("mix")}
            />
            <Button
              label="Без клавиатуры"
              secondary
              aria-pressed={s.input === "tap"}
              onClick={() => store.setMode("tap")}
            />
          </div>
          <Link className="topic-link" to="/rules">
            Повторить правила
          </Link>
          <Link className="topic-link" to="/topics">
            Сменить тему
          </Link>
        </div>
      </div>
      <div className="layout">
        <section className="practice-flow">
          <ExerciseCard key={`${s.current}-${s.turn}-${s.oral}`} />
          <PreviousReview previous={store.previous} />
        </section>
        <aside className="practice-summary">
          <div className="card">
            <h2>Этот подход</h2>
            <SessionFacts session={s} />
            <hr />
            <dl className="facts">
              <dt>Повторений к сроку</dt>
              <dd>{dueFamilies(store.bank, store.state)}</dd>
              <dt>Воспроизведение</dt>
              <dd>
                {store.stats.recallCount < 6
                  ? "Мало данных"
                  : percentage(store.stats.recall)}
              </dd>
            </dl>
            <div className="actions">
              <Link to="/stats">Весь прогресс</Link>
              <Link to="/settings">Настроить подход</Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
