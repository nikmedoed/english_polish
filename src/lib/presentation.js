export function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export const percentage = (n) => (n === null ? "·" : `${n}%`);
export const modeNames = {
  match: "Сопоставление",
  choice: "Выбор формы",
  gap: "Вспомнить форму",
  repair: "Исправить фразу",
  order: "Собрать предложение",
  speak: "Перенести в речь",
  transform: "Преобразование",
  translate: "Из смысла в фразу",
  contrast: "Контрастные контексты",
};
export const instructions = {
  choice: "Нажми на правильную форму.",
  gap: "Введи пропущенную форму и нажми «Проверить».",
  repair: "Исправь ошибки в целевой конструкции. Не перефразируй.",
  order: "Нажимай на слова по порядку, затем «Проверить».",
  speak: "Скажи по-английски, затем открой образец.",
  transform: "Преобразуй фразу, сохранив остальные слова.",
  translate: "Переведи, используя указанные слова.",
  contrast: "Введи форму для каждого контекста.",
  match: "Выбери форму для каждого контекста.",
};

// DOM access is limited to keyboard/focus behavior. React owns rendering and values.
export function sequentialKeyboard(event) {
  if (
    event.isComposing ||
    event.ctrlKey ||
    event.altKey ||
    event.metaKey ||
    event.shiftKey
  )
    return;
  const form = event.currentTarget;
  const fields = [...form.querySelectorAll("input,select")];
  const index = fields.indexOf(event.target);
  if (index < 0) return;
  const field = fields[index];
  if (
    field.tagName === "SELECT" &&
    ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)
  ) {
    event.preventDefault();
    const delta = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
    field.selectedIndex = Math.max(
      1,
      Math.min(field.options.length - 1, field.selectedIndex + delta),
    );
    field.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }
  if (event.key !== "Enter") return;
  event.preventDefault();
  if (event.repeat) return;
  if (!field.value.trim()) {
    field.focus();
    return;
  }
  const next = fields[index + 1] || fields.find((item) => !item.value.trim());
  if (next) next.focus();
  else form.requestSubmit();
}
export function choiceKeyboard(event) {
  if (event.isComposing || event.ctrlKey || event.altKey || event.metaKey)
    return;
  const buttons = [
    ...event.currentTarget.querySelectorAll("button:not(:disabled)"),
  ];
  const index = buttons.indexOf(event.target);
  if (index < 0) return;
  if (event.key === "Enter" && event.repeat) event.preventDefault();
  const shortcut = buttons.find(
    (button) => button.dataset.shortcut === event.key,
  );
  if (shortcut && !event.shiftKey) {
    event.preventDefault();
    if (!event.repeat) shortcut.click();
    return;
  }
  const delta = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[
    event.key
  ];
  if (delta) {
    event.preventDefault();
    buttons[(index + delta + buttons.length) % buttons.length].focus();
  }
}
