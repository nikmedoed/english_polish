import { Fragment } from "react";
import { feedbackStatus } from "../domain/core.js";
import WordDifference from "./WordDifference.jsx";
export default function AnswerReview({
  exercise: ex,
  result: r,
  previous = false,
  draft,
}) {
  const reveal = !r.skipped && !(r.ok === false && !r.revealed && !r.recovered);
  const help = {
    hint: "Для этого задания ты открыл подсказку.",
    "auto-hint": "После повторной ошибки приложение показало подсказку.",
    answer: "Перед исправлением был показан правильный ответ.",
  }[r.help];
  const typed = (draft || r.answer || "").trim().split(/\s+/),
    correct = ex.answers[0].trim().split(/\s+/);
  const canonical = (w) => w?.toLowerCase().replace(/[.,!?]/g, "");
  return (
    <div
      className={
        previous
          ? "previous-content"
          : `feedback ${r.ok === false && !r.recovered ? "wrong" : ""}`
      }
    >
      {!previous && <p className="result-status">{feedbackStatus(r)}</p>}
      {(previous ? !r.skipped : reveal) && (
        <div className="feedback-body">
          {r.typo && (
            <div className="typo-details">
              <span>Опечатка, ответ принят</span>
              <div>
                <span>
                  Ты написал:{" "}
                  <WordDifference value={r.typo.typed} other={r.typo.wanted} />
                </span>
                <span>
                  Правильно:{" "}
                  <WordDifference value={r.typo.wanted} other={r.typo.typed} />
                </span>
              </div>
            </div>
          )}
          {!previous &&
            r.revealed &&
            !r.ok &&
            !r.recovered &&
            (draft || r.answer) && (
              <div className="answer-difference">
                <span className="small">Отличия в твоём ответе</span>
                {typed.length === correct.length ? (
                  <p>
                    {typed.map((word, i) => (
                      <Fragment key={i}>
                        {canonical(word) !== canonical(correct[i]) ? (
                          <WordDifference value={word} other={correct[i]} />
                        ) : (
                          word
                        )}{" "}
                      </Fragment>
                    ))}
                  </p>
                ) : (
                  <p>Твой ответ: {draft || r.answer}</p>
                )}
              </div>
            )}
          <div className="review-answer">
            <span className="small">Правильный ответ</span>
            <div className={previous ? "previous-model" : "answer-model"}>
              {ex.parts
                ? ex.parts.map((part, i) => (
                    <span key={i} className="context-answer">
                      {part.prompt.split("___")[0]}
                      <strong>{part.answer}</strong>
                      {part.prompt.split("___").slice(1).join("___")}
                    </span>
                  ))
                : ex.model}
            </div>
          </div>
          {help && !previous && <p className="help-note">{help}</p>}
          <div className="review-rule">
            <strong>Почему так</strong>
            <div
              className={
                previous ? "previous-explanation" : "result-explanation"
              }
            >
              {ex.explanation.split(/\n\n+/).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      {previous && (
        <details className="previous-details">
          <summary>Мой ответ и результат</summary>
          <p>{feedbackStatus(r)}</p>
          <p>{ex.prompt || ex.cue}</p>
          {r.answer && <p>Мой ответ: {r.answer}</p>}
          {help && <p className="help-note">{help}</p>}
        </details>
      )}
    </div>
  );
}
