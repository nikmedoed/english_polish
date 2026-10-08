import { Link } from "react-router-dom";
import { usePractice } from "../stores/practice.js";
export default function SettingsView() {
  const store = usePractice();
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Настройки</h1>
          <p className="small">Сложность применяется к следующему подходу.</p>
        </div>
      </div>
      <div className="card settings-form">
        <div className="settings-row">
          <label htmlFor="challenge">Сложность</label>
          <select
            id="challenge"
            value={store.state.preferences.challenge}
            onChange={(e) => store.setPreference("challenge", e.target.value)}
          >
            <option value="adaptive">Адаптивно: начинать с контекста</option>
            <option value="foundation">С опорой</option>
            <option value="challenge">Контекст и преобразования</option>
          </select>
        </div>
        <div className="settings-row">
          <label htmlFor="autoAdvance">После верного ответа</label>
          <select
            id="autoAdvance"
            value={String(store.state.preferences.autoAdvance)}
            onChange={(e) =>
              store.setPreference("autoAdvance", e.target.value === "true")
            }
          >
            <option value="false">По кнопке «Следующее»</option>
            <option value="true">
              Через 8 секунд (короткие ответы без подсказки)
            </option>
          </select>
        </div>
        <div className="actions">
          <Link className="button primary" to="/practice">
            К практике
          </Link>
        </div>
      </div>
    </>
  );
}
