import { usePractice } from "../stores/practice.js";
import { summary } from "../domain/core.js";
import { percentage } from "../lib/presentation.js";
import ProgressTransfer from "../components/ProgressTransfer.jsx";
export default function StatsView() {
  const store = usePractice(),
    stats = summary(store.state);
  const topics = store.bank.topics.map((topic) => ({
    ...topic,
    stats: summary(store.state, topic.id),
  }));
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 13 + i);
    const day = date.toLocaleDateString("sv-SE");
    const events = store.state.events.filter(
      (e) =>
        !e.self &&
        !e.assisted &&
        e.phase !== "correction" &&
        new Date(e.at).toLocaleDateString("sv-SE") === day,
    );
    return {
      day,
      total: events.length,
      accuracy: events.length
        ? Math.round((events.filter((e) => e.ok).length / events.length) * 100)
        : null,
    };
  });
  return (
    <>
      <div className="page-head">
        <h1>Прогресс</h1>
      </div>
      <div className="metrics">
        <div className="metric">
          <strong>{stats.total}</strong>
          <span>Ответов без подсказки</span>
        </div>
        <div className="metric">
          <strong>
            {stats.recallCount < 6 ? "Мало данных" : percentage(stats.recall)}
          </strong>
          <span>Верно при вводе</span>
        </div>
        <div className="metric">
          <strong>{stats.days}</strong>
          <span>Дней практики</span>
        </div>
      </div>
      <div className="card table-scroll">
        <h2>По темам</h2>
        <table>
          <thead>
            <tr>
              <th>Тема</th>
              <th className="numeric">Ответы</th>
              <th className="numeric">Ввод, %</th>
              <th className="numeric">Через день</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((t) => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td className="numeric">{t.stats.total}</td>
                <td className="numeric">
                  {t.stats.recallCount < 6 ? "·" : percentage(t.stats.recall)}
                </td>
                <td className="numeric">{t.stats.delayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <details>
          <summary>За последние 14 дней</summary>
          <table>
            <thead>
              <tr>
                <th>Дата</th>
                <th className="numeric">Ответы</th>
                <th className="numeric">Точность</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((d) => (
                <tr key={d.day}>
                  <td>{d.day}</td>
                  <td className="numeric">{d.total}</td>
                  <td className="numeric">{percentage(d.accuracy)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
        <details>
          <summary>Как считаются результаты</summary>
          <p className="small">
            Воспроизведение: ввод, исправление, преобразование, перевод и
            контраст без опоры. Исправление после показа ответа не повышает
            результат. Повтор одной фразы в тот же день учитывается один раз.
            «Через день» показывает разные фразы, успешно проверенные спустя
            сутки.
          </p>
          <p className="small">
            С подсказкой:{" "}
            {
              store.state.events.filter(
                (e) => e.assisted && !e.self && e.phase !== "correction",
              ).length
            }
            . Устных самооценок:{" "}
            {store.state.events.filter((e) => e.self).length}.
          </p>
        </details>
      </div>
      <ProgressTransfer />
    </>
  );
}
