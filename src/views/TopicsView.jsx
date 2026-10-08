import { useNavigate } from "react-router-dom";
import { usePractice } from "../stores/practice.js";
import { Button } from "../components/ui.jsx";
export default function TopicsView() {
  const store = usePractice(),
    navigate = useNavigate();
  const choose = (id) => {
    store.setFocus(id);
    navigate("/practice");
  };
  const families = (id) =>
    new Set(
      store.bank.exercises.filter((e) => e.topic === id).map((e) => e.family),
    ).size;
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Темы</h1>
          <p className="small">Выбери одну тему для следующего подхода.</p>
        </div>
      </div>
      <div className="card table-scroll">
        <table className="topic-table">
          <thead>
            <tr>
              <th>Тема</th>
              <th className="numeric">Приоритет</th>
              <th className="numeric">Примеры</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {store.bank.topics.map((t) => (
              <tr
                key={t.id}
                className={t.id === store.state.focus ? "current" : ""}
              >
                <td>
                  {t.title}{" "}
                  {t.id === store.state.focus && (
                    <span className="pill">Текущая</span>
                  )}
                  <span className="small rule">{t.rule}</span>
                </td>
                <td className="numeric">{t.priority}</td>
                <td className="numeric">{families(t.id)}</td>
                <td>
                  <Button
                    label={
                      t.id === store.state.focus ? "Продолжить" : "Выбрать"
                    }
                    secondary
                    onClick={() => choose(t.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
