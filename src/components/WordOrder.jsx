import { useEffect, useRef } from "react";
import { choiceKeyboard } from "../lib/presentation.js";
import { Button } from "./ui.jsx";

export default function WordOrder({
  tokens,
  words,
  onChange,
  onSubmit,
  correction = false,
}) {
  const root = useRef(null);
  const returnToken = useRef(null);
  function remove(position) {
    returnToken.current = words[position];
    onChange(words.filter((_, index) => index !== position));
  }
  const sorted = [...tokens].sort((a, b) => a.i - b.i);
  useEffect(() => {
    root.current
      ?.querySelector("button:not(:disabled)")
      ?.focus({ preventScroll: true });
  }, []);
  useEffect(() => {
    if (returnToken.current !== null) {
      root.current
        ?.querySelector(`[data-token="${returnToken.current}"]`)
        ?.focus({ preventScroll: true });
      returnToken.current = null;
      return;
    }
    if (
      root.current?.contains(document.activeElement) &&
      document.activeElement.disabled
    ) {
      (
        root.current.querySelector(".word-bank button:not(:disabled)") ||
        root.current.querySelector(".answer-actions button:not(:disabled)")
      )?.focus({ preventScroll: true });
    }
  }, [words]);
  return (
    <div
      className="word-order"
      ref={root}
      onKeyDown={(event) => {
        if (
          event.key === "Backspace" &&
          !event.ctrlKey &&
          !event.altKey &&
          !event.metaKey &&
          !event.isComposing
        ) {
          event.preventDefault();
          if (!event.repeat && words.length) remove(words.length - 1);
        }
      }}
    >
      <div
        id="assembled"
        className="assembled"
        role="group"
        aria-label="Собранная фраза"
        aria-live="polite"
      >
        {words.length ? (
          words.map((i, position) => (
            <Button
              key={i}
              secondary
              label={sorted[i].word}
              aria-label={`Убрать слово ${position + 1}: ${sorted[i].word}`}
              onClick={() => remove(position)}
            />
          ))
        ) : (
          <span className="small">Нажимай на слова ниже</span>
        )}
      </div>
      <p className="small order-note">
        Нажми слово в собранной фразе, чтобы убрать его.
      </p>
      <div
        className="word-bank"
        role="group"
        aria-label="Доступные слова"
        onKeyDown={choiceKeyboard}
      >
        {tokens.map((token) => (
          <Button
            key={token.i}
            data-token={token.i}
            label={token.word}
            secondary
            disabled={words.includes(token.i)}
            onClick={() => onChange([...words, token.i])}
          />
        ))}
      </div>
      <div className="actions answer-actions">
        <Button
          label="Проверить"
          disabled={!words.length}
          onClick={() => onSubmit(words.map((i) => sorted[i].word).join(" "))}
        />
        <Button
          label="Убрать последнее"
          secondary
          disabled={!words.length}
          onClick={() => remove(words.length - 1)}
        />
        <Button
          label="Очистить"
          text
          disabled={!words.length}
          onClick={() => onChange([])}
        />
      </div>
      <span className="small keyboard-note">
        Backspace: убрать последнее слово
        {correction ? " · Исправление не меняет первый результат" : ""}
      </span>
    </div>
  );
}
