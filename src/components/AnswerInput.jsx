import { useEffect, useRef, useState } from "react";
import {
  shuffle,
  sequentialKeyboard,
  choiceKeyboard,
} from "../lib/presentation.js";
import { Button, InputText } from "./ui.jsx";

export default function AnswerInput({
  exercise: ex,
  value = "",
  onChange,
  onSubmit,
  correction = false,
  tap = false,
  order,
  choiceOrder,
  attempt = 0,
}) {
  const root = useRef(null);
  const values = value.split(" | ");
  const [choices] = useState(() => choiceOrder || shuffle(ex.choices || []));
  const [indices] = useState(() => order || ex.parts?.map((_, i) => i) || []);
  const [options] = useState(() =>
    Object.fromEntries(
      indices.map((i) => [i, shuffle([...new Set(ex.choices || [])])]),
    ),
  );
  const compound = ["contrast", "match"].includes(ex.mode);
  const label = correction
    ? ex.mode === "choice"
      ? "Введи правильный вариант"
      : ex.mode === "gap"
        ? "Введи только правильную форму"
        : "Введи исправленную фразу"
    : ex.mode === "gap"
      ? "Пропущенная форма"
      : "Твой ответ";
  const prefix = correction ? "correction" : "answer";
  function update(i, value) {
    const result = ex.parts.map((_, i) => values[i] || "");
    result[i] = value;
    onChange(result.join(" | "));
  }
  useEffect(() => {
    root.current
      ?.querySelector("input,select,button:not(:disabled)")
      ?.focus({ preventScroll: true });
  }, [attempt]);
  return (
    <div ref={root}>
      {ex.mode === "choice" && (!correction || tap) ? (
        <div className="choices" onKeyDown={choiceKeyboard}>
          <p className="small keyboard-note">
            ↑ ↓: выбрать · Enter: ответить · Цифра: ответить сразу
          </p>
          {choices.map((choice, index) => (
            <Button
              key={choice}
              label={
                <>
                  <span className="choice-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{choice}</span>
                </>
              }
              data-shortcut={index < 9 ? String(index + 1) : undefined}
              aria-keyshortcuts={index < 9 ? String(index + 1) : undefined}
              secondary
              onClick={() => onSubmit(choice)}
            />
          ))}
        </div>
      ) : (
        <form
          id={`${prefix}-form`}
          className={
            ex.mode === "match" ? "match-form" : compound ? "contrast-form" : ""
          }
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(value);
          }}
          onKeyDown={sequentialKeyboard}
        >
          {ex.mode === "match" ? (
            indices.map((i) => (
              <label
                key={i}
                className="match-sentence"
                htmlFor={`${prefix}-${i}`}
              >
                {ex.parts[i].prompt.split("___")[0]}
                <select
                  id={`${prefix}-${i}`}
                  value={values[i] || ""}
                  required
                  aria-label={`Форма в предложении: ${ex.parts[i].prompt}`}
                  onChange={(e) => update(i, e.target.value)}
                >
                  <option value="">…</option>
                  {options[i].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {ex.parts[i].prompt.split("___").slice(1).join("___")}
              </label>
            ))
          ) : compound ? (
            ex.parts.map((part, i) => (
              <div className="context-field" key={i}>
                <label htmlFor={`${prefix}-${i}`}>
                  {part.prompt} <span className="small">({part.base})</span>
                </label>
                <InputText
                  id={`${prefix}-${i}`}
                  value={values[i] || ""}
                  required
                  autoComplete="off"
                  inputProps={{
                    autoCapitalize: "off",
                    spellCheck: false,
                    lang: "en",
                    enterKeyHint: i < ex.parts.length - 1 ? "next" : "done",
                  }}
                  onChange={(e) => update(i, e.target.value)}
                />
              </div>
            ))
          ) : (
            <>
              <label htmlFor={`${prefix}-0`}>{label}</label>
              <InputText
                id={`${prefix}-0`}
                value={value}
                required
                autoComplete="off"
                inputProps={{
                  autoCapitalize: "off",
                  spellCheck: false,
                  lang: "en",
                  enterKeyHint: "done",
                }}
                onChange={(e) => onChange(e.target.value)}
              />
            </>
          )}
          <div className="actions answer-actions">
            <Button label="Проверить" type="submit" />
            <span className="small keyboard-note">
              {compound
                ? "Enter: следующее поле, затем проверка"
                : "Enter: проверить"}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
