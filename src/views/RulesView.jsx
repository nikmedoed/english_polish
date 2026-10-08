import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePractice, sandbox } from "../stores/practice.js";
import { choiceKeyboard, shuffle } from "../lib/presentation.js";
import { Button } from "../components/ui.jsx";
const key = sandbox ? "english-rules-sandbox-v1" : "english-rules-v1";
export default function RulesView() {
  const store = usePractice(),
    navigate = useNavigate();
  const [lessons, setLessons] = useState([]),
    [run, setRun] = useState(null),
    [focus, setFocus] = useState(store.state.focus),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    fetch("./data/rules.json")
      .then((r) => {
        if (!r.ok) throw Error();
        return r.json();
      })
      .then((data) => {
        if (!active) return;
        setLessons(data);
        let saved;
        try {
          saved = JSON.parse(sessionStorage.getItem(key));
        } catch {}
        const lesson = data.find((l) => l.id === saved?.lesson);
        if (
          lesson &&
          Number.isInteger(saved.index) &&
          saved.index >= 0 &&
          saved.index <= lesson.questions.length &&
          Number.isInteger(saved.correct) &&
          saved.correct >= 0 &&
          saved.correct <= saved.index
        )
          setRun(saved);
      })
      .catch(() => {
        if (active) setError("Не удалось загрузить правила.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    if (!loading)
      try {
        sessionStorage.setItem(key, JSON.stringify(run));
      } catch {}
  }, [run, loading]);
  const lesson = lessons.find((l) => l.id === run?.lesson);
  const start = (id) => setRun({ lesson: id, index: 0, correct: 0 });
  const list = () => {
    setFocus(lesson.topic);
    setRun(null);
  };
  if (loading) return <p role="status">Загрузка правил…</p>;
  if (error)
    return (
      <div className="card">
        <p role="alert">{error}</p>
        <Button label="Повторить" onClick={() => location.reload()} />
      </div>
    );
  if (!run)
    return (
      <>
        <div className="page-head">
          <div>
            <h1>Правила</h1>
            <p className="small">
              Три коротких вопроса: схема, узнавание, применение. Без набора и
              таймера.
            </p>
          </div>
        </div>
        <div className="card">
          <label htmlFor="rule-topic">Тема</label>
          <select
            id="rule-topic"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
          >
            {store.bank.topics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Правило</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                {lessons
                  .filter((l) => l.topic === focus)
                  .map((l) => (
                    <tr key={l.id}>
                      <td>{l.title}</td>
                      <td>
                        <Button
                          label="Повторить"
                          secondary
                          onClick={() => start(l.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="small">
            Выбирай короткий блок и двигайся дальше по желанию. Результаты
            правил не повышают готовность темы в практике.
          </p>
        </div>
      </>
    );
  if (run.index >= lesson.questions.length)
    return (
      <>
        <div className="page-head">
          <h1>{lesson.title}</h1>
        </div>
        <div className="card">
          <h2>Блок завершён</h2>
          <p>
            Верно с первой попытки без памятки: {run.correct} /{" "}
            {lesson.questions.length}
          </p>
          <p className="small">
            Теперь попробуй применять правило в разных фразах.
          </p>
          <div className="actions">
            <Button
              label="Повторить блок"
              secondary
              onClick={() => start(lesson.id)}
            />
            <Button label="Другие правила" secondary onClick={list} />
            <Button
              label="Практика темы"
              onClick={() => {
                store.setFocus(lesson.topic);
                navigate("/practice");
              }}
            />
          </div>
        </div>
      </>
    );
  return (
    <RuleQuestion
      key={`${run.lesson}-${run.index}`}
      lesson={lesson}
      run={run}
      onList={list}
      onFinish={(success) =>
        setRun({
          ...run,
          index: run.index + 1,
          correct: run.correct + Number(success),
        })
      }
    />
  );
}
function RuleQuestion({ lesson, run, onList, onFinish }) {
  const q = lesson.questions[run.index],
    [choices] = useState(() => shuffle(q.choices)),
    [attempts, setAttempts] = useState(0),
    [assisted, setAssisted] = useState(false),
    [done, setDone] = useState(false),
    [rejected, setRejected] = useState([]),
    nextButton = useRef(null),
    choiceRoot = useRef(null);
  useEffect(() => {
    if (done) nextButton.current?.focus();
    else
      choiceRoot.current
        ?.querySelector("button:not(:disabled)")
        ?.focus({ preventScroll: true });
  }, [done, attempts]);
  function answer(value) {
    if (done) return;
    const count = attempts + 1;
    setAttempts(count);
    if (value !== q.answer) {
      setRejected([...rejected, value]);
      if (count >= 2) setAssisted(true);
      return;
    }
    setDone(true);
  }
  return (
    <>
      <div className="page-head">
        <h1>{lesson.title}</h1>
        <Button label="К списку" secondary onClick={onList} />
      </div>
      <article
        className="card rule-question"
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.repeat) event.preventDefault();
        }}
      >
        <div className="meta">
          <span>
            {
              ["Вспомнить схему", "Узнать конструкцию", "Применить правило"][
                run.index
              ]
            }
          </span>
          <span>{run.index + 1} / 3</span>
        </div>
        <p className="prompt">{q.prompt}</p>
        <div
          id="rule-choices"
          className="choices"
          ref={choiceRoot}
          onKeyDown={choiceKeyboard}
        >
          {choices.map((value, index) => (
            <Button
              key={value}
              label={
                <>
                  <span className="choice-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{value}</span>
                </>
              }
              data-shortcut={index < 9 ? String(index + 1) : undefined}
              aria-keyshortcuts={index < 9 ? String(index + 1) : undefined}
              secondary
              disabled={done || rejected.includes(value)}
              onClick={() => answer(value)}
            />
          ))}
        </div>
        <div id="rule-feedback" aria-live="polite">
          {done ? (
            <>
              <p>
                Верно
                {attempts > 1
                  ? " после исправления"
                  : assisted
                    ? " с памяткой"
                    : ""}
              </p>
              <p className="small">{q.explanation}</p>
              <Button
                ref={nextButton}
                label={run.index === 2 ? "Завершить" : "Дальше"}
                onClick={() => onFinish(attempts === 1 && !assisted)}
              />
            </>
          ) : (
            attempts > 0 && (
              <p>Пока нет. Попробуй ещё раз или открой памятку.</p>
            )
          )}
        </div>
        <div className="actions">
          <Button
            label="Краткая памятка"
            secondary
            disabled={done}
            onClick={() => setAssisted(true)}
          />
          <Button
            label="Пропустить"
            text
            disabled={done}
            onClick={() => onFinish(false)}
          />
        </div>
        {assisted && <p className="hint-panel">{lesson.note}</p>}
      </article>
    </>
  );
}
