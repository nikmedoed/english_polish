import { useEffect, useState } from "react";
import {
  Navigate,
  NavLink,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { usePractice, practiceStore } from "./stores/practice.js";
import { Button } from "./components/ui.jsx";
import PracticeView from "./views/PracticeView.jsx";
import RulesView from "./views/RulesView.jsx";
import TopicsView from "./views/TopicsView.jsx";
import StatsView from "./views/StatsView.jsx";
import SettingsView from "./views/SettingsView.jsx";
const links = [
  ["practice", "Практика"],
  ["rules", "Правила"],
  ["topics", "Темы"],
  ["stats", "Прогресс"],
  ["settings", "Настройки"],
];
export default function App() {
  const store = usePractice(),
    [update, setUpdate] = useState(false),
    locationInfo = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [locationInfo.pathname]);
  useEffect(() => {
    store.load();
    if (import.meta.env.PROD && "serviceWorker" in navigator)
      navigator.serviceWorker
        .register("./sw.js")
        .catch(() =>
          practiceStore
            .getState()
            .setNotice("Офлайн-кеш недоступен. Прогресс хранится локально."),
        );
    async function checkUpdate() {
      if (document.hidden || __APP_BUILD_ID__ === "development") return;
      try {
        const r = await fetch("./build-id.json", { cache: "no-store" });
        if (r.ok) setUpdate((await r.json()).id !== __APP_BUILD_ID__);
      } catch {}
    }
    window.addEventListener("focus", checkUpdate);
    const interval = setInterval(checkUpdate, 30000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", checkUpdate);
    };
  }, [store.load]);
  return (
    <>
      <header>
        <Link className="brand" to="/practice">
          <span className="brand-mark" aria-hidden="true">
            ef
          </span>
          <span>English Focus</span>
        </Link>
        <nav aria-label="Разделы">
          {links.map(([path, label]) => (
            <NavLink key={path} to={`/${path}`}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main-content">
        {store.loading ? (
          <p role="status">Загрузка заданий…</p>
        ) : store.error ? (
          <section className="card">
            <h1>Не удалось загрузить задания</h1>
            <p role="alert">{store.error}</p>
            <Button label="Повторить" onClick={store.load} />
          </section>
        ) : (
          store.bank && (
            <Routes>
              <Route path="/practice" element={<PracticeView />} />
              <Route path="/rules" element={<RulesView />} />
              <Route path="/topics" element={<TopicsView />} />
              <Route path="/stats" element={<StatsView />} />
              <Route path="/settings" element={<SettingsView />} />
              <Route path="*" element={<Navigate to="/practice" replace />} />
            </Routes>
          )
        )}
      </main>
      <footer>
        <span id="storage-status" role="status">
          {store.notice}
        </span>
        {update && (
          <>
            <span>Есть новая версия.</span>
            <Button
              label="Обновить"
              text
              onClick={() => {
                store.remember();
                location.reload();
              }}
            />
          </>
        )}
      </footer>
    </>
  );
}
