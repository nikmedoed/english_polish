export default function SessionFacts({ session: s }) {
  return (
    <dl className="facts">
      <dt>Выполнено</dt>
      <dd>{s.count}</dd>
      <dt>Верно без подсказки</dt>
      <dd>
        {s.correct} / {s.checked}
      </dd>
      <dt>С подсказкой</dt>
      <dd>{s.guided}</dd>
      <dt>Пропущено</dt>
      <dd>{s.skipped}</dd>
    </dl>
  );
}
