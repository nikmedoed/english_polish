import { useEffect, useRef, useState } from "react";
import { usePractice } from "../stores/practice.js";
import { Button } from "./ui.jsx";
export default function ProgressTransfer() {
  const store = usePractice(),
    fileInput = useRef(null),
    download = useRef(null);
  const [json, setJson] = useState(""),
    [input, setInput] = useState(""),
    [status, setStatus] = useState(""),
    [url, setUrl] = useState("");
  useEffect(
    () => () => {
      if (url) URL.revokeObjectURL(url);
    },
    [url],
  );
  useEffect(() => {
    if (url) download.current?.click();
  }, [url]);
  function exportProgress() {
    const json = JSON.stringify(store.state, null, 2);
    setJson(json);
    setUrl(URL.createObjectURL(new Blob([json], { type: "application/json" })));
  }
  function importText(text) {
    try {
      setStatus(store.importProgress(text));
    } catch (e) {
      setStatus("Импорт не выполнен: " + e.message);
    }
  }
  async function importFile(e) {
    const input = e.target,
      file = input.files[0];
    if (!file) return;
    try {
      if (file.size > 25000000) throw Error("Максимум 25 МБ");
      importText(await file.text());
    } catch (e) {
      setStatus("Импорт не выполнен: " + e.message);
    }
    input.value = "";
  }
  return (
    <section className="card transfer">
      <h2>Перенести прогресс</h2>
      <p>
        На этом устройстве скачай JSON. На другом открой «Прогресс» и выбери
        этот файл.
      </p>
      <div className="actions">
        <Button label="Экспорт JSON" onClick={exportProgress} />
        <Button
          label="Импорт JSON"
          secondary
          onClick={() => fileInput.current.click()}
        />
      </div>
      <input
        ref={fileInput}
        className="upload"
        type="file"
        accept="application/json,.json"
        aria-label="Файл прогресса"
        onChange={importFile}
      />
      {json && (
        <>
          <div className="actions">
            <a
              ref={download}
              className="button"
              href={url}
              download={`progress-${new Date().toISOString().slice(0, 10)}.json`}
            >
              Скачать JSON
            </a>
          </div>
          <details>
            <summary>Показать JSON</summary>
            <label htmlFor="export-json">Скопируй JSON целиком</label>
            <textarea
              id="export-json"
              value={json}
              readOnly
              spellCheck={false}
            />
          </details>
        </>
      )}
      <details>
        <summary>Перенос текстом вместо файла</summary>
        <p className="small">
          Нажми «Экспорт JSON», раскрой «Показать JSON» и скопируй текст. На
          другом устройстве вставь его ниже.
        </p>
        <label htmlFor="import-json">JSON из другого браузера</label>
        <textarea
          id="import-json"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
        />
        <div className="actions">
          <Button
            label="Импортировать текст"
            secondary
            onClick={() => importText(input)}
          />
        </div>
      </details>
      <div id="import-status" role="status">
        {status}
      </div>
    </section>
  );
}
