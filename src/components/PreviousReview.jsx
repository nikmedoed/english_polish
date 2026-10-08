import AnswerReview from "./AnswerReview.jsx";
export default function PreviousReview({ previous }) {
  return (
    previous && (
      <article
        className="card previous-review"
        aria-label="Разбор предыдущего задания"
      >
        <div className="meta">
          Предыдущее задание{previous.result.skipped ? " · Пропущено" : ""}
        </div>
        <AnswerReview {...previous} previous />
      </article>
    )
  );
}
