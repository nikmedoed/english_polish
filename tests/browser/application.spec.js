import { test, expect } from "@playwright/test";
import { makeBank } from "../../content/bank-source.mjs";
import { ruleLessons } from "../../content/rules.mjs";
import { assess, fresh } from "../../src/domain/core.js";

const bank = makeBank();

test("word assembly supports removing a middle word, Backspace and clearing", async ({
  page,
}, testInfo) => {
  const ex = bank.exercises.find((e) => e.mode === "order");
  await seed(page, ex, { tap: true });
  const available = page.locator(".word-bank button");
  const labels = await available.allTextContents();
  for (let i = 0; i < 3; i++) await available.nth(i).click();
  await page.locator("#assembled button").nth(1).click();
  await expect(available.nth(1)).toBeFocused();
  await expect(page.locator("#assembled button")).toHaveText([
    labels[0],
    labels[2],
  ]);
  await expect(available.nth(1)).toBeEnabled();
  await page
    .getByRole("button", { name: "Убрать последнее", exact: true })
    .focus();
  await page.keyboard.press("Backspace");
  await expect(page.locator("#assembled button")).toHaveText([labels[0]]);
  await page.getByRole("button", { name: "Очистить", exact: true }).click();
  await expect(page.locator("#assembled button")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Проверить", exact: true }),
  ).toBeDisabled();
  for (const word of ex.model.split(" "))
    await page
      .locator(".word-bank")
      .getByRole("button", { name: word, exact: true })
      .and(page.locator("button:enabled"))
      .first()
      .click();
  await page.screenshot({
    path: testInfo.outputPath("assembly.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "Проверить", exact: true }).click();
  await expect(page.locator("#feedback .review-answer")).toBeVisible();
});

test("word assembly can be corrected by tapping with gradual help and no extra first attempt", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "order");
  await seed(page, ex, { tap: true });
  await page.locator(".word-bank button").first().click();
  await page.getByRole("button", { name: "Проверить", exact: true }).click();
  await expect(page.locator(".correction input")).toHaveCount(0);
  await expect(page.locator("#feedback .review-answer")).toHaveCount(0);
  await page.getByRole("button", { name: "Проверить", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Показать ответ и разбор", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Проверить", exact: true }).click();
  await expect(page.locator("#feedback .review-answer")).toBeVisible();
  await page.reload();
  await expect(page.locator("#assembled button")).toHaveCount(1);
  await page.getByRole("button", { name: "Очистить", exact: true }).click();
  for (const word of ex.model.split(" "))
    await page
      .locator(".word-bank")
      .getByRole("button", { name: word, exact: true })
      .and(page.locator("button:enabled"))
      .first()
      .click();
  await page.getByRole("button", { name: "Проверить", exact: true }).click();
  const events = await page.evaluate(
    () => JSON.parse(localStorage.getItem("english-focus-sandbox-v1")).events,
  );
  expect(events.map((e) => [e.phase, e.ok, e.assisted])).toEqual([
    ["practice", false, false],
    ["correction", true, true],
  ]);
  await expect(
    page.getByRole("button", { name: "Следующее", exact: true }),
  ).toBeVisible();
});

test("choice order stays stable during retries and digits select the visible option", async ({
  page,
}, testInfo) => {
  const ex = bank.exercises.find((e) => e.mode === "choice");
  await seed(page, ex, { tap: true });
  const choices = page.locator(".choices button");
  const labels = await choices.allTextContents();
  await page.screenshot({
    path: testInfo.outputPath("choice.png"),
    fullPage: true,
  });
  const correct = await page
    .locator(".choices")
    .getByRole("button", { name: ex.answers[0], exact: true })
    .getAttribute("data-shortcut");
  const wrong = correct === "1" ? "2" : "1";
  await page.keyboard.press(wrong);
  await expect(page.locator("#feedback .review-answer")).toHaveCount(0);
  await expect(choices).toHaveText(labels);
  await page.keyboard.press(wrong);
  await expect(choices).toHaveText(labels);
  await page.keyboard.press(correct);
  await expect(
    page.getByText("Ошибка исправлена после подсказки", { exact: true }),
  ).toBeVisible();
});

test("unfinished exercise can be resumed after finishing without losing its draft", async ({
  page,
}) => {
  await seed(
    page,
    bank.exercises.find((e) => e.mode === "gap"),
  );
  await page.locator("#answer-0").fill("draft answer");
  await page.getByRole("button", { name: "Закончить", exact: true }).click();
  await page.reload();
  await page
    .getByRole("button", { name: "Вернуться к заданию", exact: true })
    .click();
  await expect(page.locator("#answer-0")).toHaveValue("draft answer");
  await expect(page.locator("#answer-0")).toBeFocused();
});

test("next question returns into view after scrolling through a review", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "contrast");
  await seed(page, ex);
  await submit(page, ex);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.getByRole("button", { name: "Следующее", exact: true }).click();
  await expect
    .poll(() =>
      page
        .locator("#exercise")
        .evaluate((node) => node.getBoundingClientRect().top),
    )
    .toBeGreaterThanOrEqual(0);
  expect(
    await page
      .locator("#exercise")
      .evaluate(
        (node) => node.getBoundingClientRect().top < window.innerHeight / 2,
      ),
  ).toBe(true);
});

test("choice keyboard checks and advances on separate Enter presses", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "choice");
  await seed(page, ex);
  const choice = page
    .locator(".choices")
    .getByRole("button", { name: ex.answers[0], exact: true });
  await choice.focus();
  await page.keyboard.press("ArrowDown");
  await expect(choice).not.toBeFocused();
  await choice.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#feedback .review-answer")).toBeVisible();
  await expect(
    page.getByRole("article", { name: "Разбор предыдущего задания" }),
  ).toHaveCount(0);
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("article", { name: "Разбор предыдущего задания" }),
  ).toBeVisible();
});

test("practice remains usable and warns when persistent storage is unavailable", async ({
  page,
}) => {
  await seed(
    page,
    bank.exercises.find((e) => e.mode === "gap"),
  );
  await page.addInitScript(() => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (...args) {
      if (this === localStorage)
        throw new DOMException("Blocked", "SecurityError");
      return original.apply(this, args);
    };
  });
  await page.reload();
  await page.getByRole("button", { name: "Подсказка", exact: true }).click();
  // Changing preferences triggers a persistent write independently of the current mechanic.
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await page.locator("#challenge").selectOption("foundation");
  await expect(page.locator("#storage-status")).toContainText(
    "Не удалось сохранить",
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Практика", exact: true })
    .click();
  await expect(page.locator("#exercise")).toBeVisible();
});

test("two tabs merge answers once and retain their own preferences", async ({
  page,
  context,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "gap");
  await seed(page, ex);
  const other = await context.newPage();
  await other.goto("/?sandbox=1#/settings");
  await other.locator("#challenge").selectOption("foundation");
  await page.evaluate(() => {
    window.progressChanges = 0;
    window.addEventListener("storage", (e) => {
      if (e.key === "english-focus-sandbox-v1") window.progressChanges++;
    });
  });
  await submit(page, ex);
  await other
    .getByRole("navigation")
    .getByRole("link", { name: "Прогресс", exact: true })
    .click();
  await expect(other.locator(".metric").first().locator("strong")).toHaveText(
    "1",
  );
  await other
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await expect(other.locator("#challenge")).toHaveValue("foundation");
  // Allow several event-loop turns to expose a storage-event feedback loop.
  await expect
    .poll(() => page.evaluate(() => window.progressChanges))
    .toBeGreaterThan(0);
  await other.locator("#autoAdvance").selectOption("true");
  await other.locator("#autoAdvance").selectOption("false");
  expect(await page.evaluate(() => window.progressChanges)).toBeLessThan(10);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await expect(page.locator("#challenge")).toHaveValue("adaptive");
});

test("damaged session is discarded without losing answer history", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "gap");
  await seed(page, ex);
  await submit(page, ex);
  await page.evaluate(() => {
    const key = "english-focus-sandbox-session-v2";
    const saved = JSON.parse(sessionStorage.getItem(key));
    saved.draft = { damaged: true };
    sessionStorage.setItem(key, JSON.stringify(saved));
  });
  await page.reload();
  await expect(page.locator("#exercise")).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("english-focus-sandbox-v1")).events
          .length,
    ),
  ).toBe(1);
});

test("an open practice starts a new approach on the next calendar day", async ({
  page,
}) => {
  await page.clock.install();
  const ex = bank.exercises.find((e) => e.mode === "gap");
  await seed(page, ex);
  await submit(page, ex);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  await page.clock.setSystemTime(tomorrow);
  await page.evaluate(() => window.dispatchEvent(new Event("focus")));
  await expect(page.locator("#feedback")).toHaveCount(0);
  await expect(page.locator("#exercise .meta")).toContainText("Задание 1");
});

async function seed(page, exercise, { tap = false, auto = false } = {}) {
  const state = fresh();
  state.focus = exercise.topic;
  state.preferences.autoAdvance = auto;
  const session = {
    engine: 3,
    remediation: [],
    input: tap ? "tap" : "mix",
    focus: exercise.topic,
    count: 0,
    correct: 0,
    checked: 0,
    guided: 0,
    skipped: 0,
    seen: [],
    current: exercise.id,
    answered: false,
    result: null,
    hint: false,
    draft: "",
    words: [],
    complete: false,
    oral: false,
  };
  await page.addInitScript(
    ({ state, session }) => {
      // Seed once. Reloads must restore the app's own saved data.
      if (!sessionStorage.getItem("browser-test-seeded")) {
        session.day = new Date().toLocaleDateString("sv-SE");
        localStorage.setItem("english-focus-v1", "main-history-sentinel");
        localStorage.setItem("english-focus-sandbox-v1", JSON.stringify(state));
        sessionStorage.setItem(
          "english-focus-sandbox-session-v2",
          JSON.stringify(session),
        );
        sessionStorage.setItem("browser-test-seeded", "1");
      }
    },
    { state, session },
  );
  await page.goto("/?sandbox=1#practice");
  await expect(page.locator("#exercise")).toBeVisible();
}
async function submit(page, ex, prefix = "answer", answer = ex.answers[0]) {
  if (ex.parts) {
    const values = answer.split(" | ");
    for (let i = 0; i < ex.parts.length; i++) {
      const field = page.locator(`#${prefix}-${i}`);
      if (ex.mode === "match") await field.selectOption(values[i]);
      else await field.fill(values[i]);
    }
  } else await page.locator(`#${prefix}-0`).fill(answer);
  await page
    .locator(`#${prefix}-form`)
    .getByRole("button", { name: "Проверить", exact: true })
    .click();
}

for (const mode of [
  "choice",
  "gap",
  "repair",
  "order",
  "speak",
  "transform",
  "translate",
  "contrast",
  "match",
]) {
  test(`${mode}: answer, review, next, previous review and sandbox isolation`, async ({
    page,
  }, testInfo) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const ex = bank.exercises.find((e) => e.mode === mode);
    await seed(page, ex);
    if (mode === "choice")
      await page
        .locator(".choices")
        .getByRole("button", { name: ex.answers[0], exact: true })
        .click();
    else if (mode === "order") {
      for (const word of ex.model.split(" "))
        await page
          .locator(".word-bank")
          .getByRole("button", { name: word, exact: true })
          .filter({ visible: true })
          .and(page.locator("button:enabled"))
          .first()
          .click();
      await page
        .getByRole("button", { name: "Проверить", exact: true })
        .click();
    } else if (mode === "speak") {
      await expect(page.getByText(ex.model, { exact: true })).toHaveCount(0);
      await page
        .getByRole("button", { name: "Показать образец", exact: true })
        .click();
      await page
        .getByRole("button", { name: "Получилось", exact: true })
        .click();
    } else await submit(page, ex);
    await expect(page.locator("#feedback .review-answer")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Следующее", exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    if (mode === "contrast")
      await page.screenshot({
        path: testInfo.outputPath("practice.png"),
        fullPage: true,
      });
    await page.getByRole("button", { name: "Следующее", exact: true }).click();
    await expect(
      page.getByRole("article", { name: "Разбор предыдущего задания" }),
    ).toBeVisible();
    expect(
      await page.evaluate(() => localStorage.getItem("english-focus-v1")),
    ).toBe("main-history-sentinel");
    expect(errors).toEqual([]);
  });
}

test("error, independent correction, no inflated first-attempt score", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "transform");
  await seed(page, ex);
  await submit(page, ex, "answer", "wrong answer");
  await expect(page.locator("#feedback .review-answer")).toHaveCount(0);
  await expect(page.locator("#correction-0")).toHaveValue("wrong answer");
  await submit(page, ex, "correction");
  await expect(
    page.getByText("Ошибка исправлена самостоятельно", { exact: true }),
  ).toBeVisible();
  const data = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("english-focus-sandbox-v1")),
  );
  expect(data.events.map((e) => [e.phase, e.ok, e.assisted])).toEqual([
    ["practice", false, false],
    ["correction", true, false],
  ]);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Прогресс", exact: true })
    .click();
  await page.getByText("За последние 14 дней", { exact: true }).click();
  await expect(
    page.locator("details table tbody tr").last().locator("td").nth(1),
  ).toHaveText("1");
});

test("error assistance progresses from retry to hint to model and survives reload", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "transform");
  await seed(page, ex);
  await submit(page, ex, "answer", "wrong answer");
  await submit(page, ex, "correction", "still wrong");
  await expect(
    page.getByRole("button", { name: "Показать ответ и разбор" }),
  ).toBeVisible();
  await expect(page.locator("#feedback .review-answer")).toHaveCount(0);
  await submit(page, ex, "correction", "wrong again");
  await expect(page.locator("#feedback .review-answer")).toBeVisible();
  await page.reload();
  await expect(page.locator("#correction-0")).toHaveValue("wrong again");
  await submit(page, ex, "correction");
  const data = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("english-focus-sandbox-v1")),
  );
  expect(data.events.at(-1)).toMatchObject({
    phase: "correction",
    assisted: true,
  });
});

test("draft survives reload, Enter moves through compound fields then checks once", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "contrast");
  await seed(page, ex);
  await page.locator("#answer-0").fill(ex.parts[0].answer);
  await page.reload();
  await expect(page.locator("#answer-0")).toHaveValue(ex.parts[0].answer);
  for (let i = 0; i < ex.parts.length; i++) {
    await page.locator(`#answer-${i}`).fill(ex.parts[i].answer);
    await page.locator(`#answer-${i}`).press("Enter");
    if (i < ex.parts.length - 1)
      await expect(page.locator(`#answer-${i + 1}`)).toBeFocused();
  }
  await expect(page.locator("#feedback")).toBeVisible();
  // Repeated Enter must cancel native button activation as well as app shortcuts.
  const repeated = await page.locator("#next").evaluate((button) =>
    button.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        repeat: true,
        bubbles: true,
        cancelable: true,
      }),
    ),
  );
  expect(repeated).toBe(false);
  await expect(page.locator("#exercise-instruction")).toHaveText(
    ex.task || "Введи форму для каждого контекста.",
  );
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("article", { name: "Разбор предыдущего задания" }),
  ).toBeVisible();
});

test("tap correction never requires a keyboard; matching uses canonical order", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "match" && e.shuffleParts);
  await seed(page, ex, { tap: true });
  const selects = page.locator("select");
  await selects.first().focus();
  await page.keyboard.press("ArrowDown");
  await expect(selects.first()).not.toHaveValue("");
  const wrong = ex.parts
    .map((part) => ex.choices.find((c) => c !== part.answer))
    .join(" | ");
  await submit(page, ex, "answer", wrong);
  await expect(page.locator(".correction input")).toHaveCount(0);
  await submit(page, ex, "correction");
  await expect(
    page.getByText("Ошибка исправлена самостоятельно", { exact: true }),
  ).toBeVisible();
});

test("manual hint, pause and resume preserve review and assisted score", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "gap");
  await seed(page, ex);
  await page.getByRole("button", { name: "Подсказка", exact: true }).click();
  await submit(page, ex);
  const data = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("english-focus-sandbox-v1")),
  );
  expect(data.events[0].assisted).toBe(true);
  await page.getByRole("button", { name: "Закончить", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Подход завершён" }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Подход завершён" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Продолжить тренировку" }).click();
  await expect(page.locator("#exercise")).toBeVisible();
});

test("routes, settings, rules, topic changes and JSON transfer", async ({
  page,
}) => {
  await seed(
    page,
    bank.exercises.find((e) => e.mode === "gap"),
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await page.locator("#challenge").selectOption("foundation");
  await page.reload();
  await expect(page.locator("#challenge")).toHaveValue("foundation");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Правила" })
    .click();
  const lesson = ruleLessons[0];
  await page.locator("#rule-topic").selectOption(lesson.topic);
  await page
    .getByRole("row")
    .filter({ hasText: lesson.title })
    .getByRole("button", { name: "Повторить", exact: true })
    .click();
  for (let i = 0; i < lesson.questions.length; i++) {
    await page
      .locator("#rule-choices")
      .getByRole("button", { name: lesson.questions[i].answer, exact: true })
      .click();
    const next = page.getByRole("button", {
      name: i === 2 ? "Завершить" : "Дальше",
      exact: true,
    });
    expect(
      await next.evaluate((button) =>
        button.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: "Enter",
            repeat: true,
            bubbles: true,
            cancelable: true,
          }),
        ),
      ),
    ).toBe(false);
    await page
      .getByRole("button", {
        name: i === 2 ? "Завершить" : "Дальше",
        exact: true,
      })
      .click();
  }
  await expect(
    page.getByText("Верно с первой попытки без памятки: 3 / 3"),
  ).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Темы", exact: true })
    .click();
  const nextTopic = bank.topics[1];
  await page
    .getByRole("row")
    .filter({ hasText: nextTopic.title })
    .getByRole("button", { name: "Выбрать" })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    nextTopic.title,
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Прогресс", exact: true })
    .click();
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Экспорт JSON" }).click();
  expect((await download).suggestedFilename()).toMatch(/^progress-/);
  const json = await page.locator("#export-json").inputValue();
  await page.locator('input[type="file"]').setInputFiles({
    name: "backup.json",
    mimeType: "application/json",
    buffer: Buffer.from(json),
  });
  await expect(page.locator("#import-status")).toContainText("Добавлено: 0");
  await page.getByText("Перенос текстом вместо файла", { exact: true }).click();
  await page.locator("#import-json").fill(json);
  await page.getByRole("button", { name: "Импортировать текст" }).click();
  await expect(page.locator("#import-status")).toContainText("Добавлено: 0");
  await page.locator("#import-json").fill("{bad");
  await page.getByRole("button", { name: "Импортировать текст" }).click();
  await expect(page.locator("#import-status")).toContainText(
    "Импорт не выполнен",
  );
});

test("accepted spelling typo is marked and always waits for manual next", async ({
  page,
}) => {
  let fixture;
  for (const ex of bank.exercises.filter((e) =>
    ["transform", "translate", "repair"].includes(e.mode),
  )) {
    const words = ex.answers[0].split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length < 5) continue;
      const candidate = [...words];
      candidate[i] =
        words[i].slice(0, 1) + words[i][2] + words[i][1] + words[i].slice(3);
      const answer = candidate.join(" ");
      if (assess(ex, answer).typo) {
        fixture = { ex, answer };
        break;
      }
    }
    if (fixture) break;
  }
  expect(fixture).toBeTruthy();
  await seed(page, fixture.ex, { auto: true });
  await submit(page, fixture.ex, "answer", fixture.answer);
  await expect(page.locator(".typo-details mark")).toHaveCount(2);
  await expect(
    page.getByRole("button", { name: "Следующее", exact: true }),
  ).toBeVisible();
});

test("auto advance can be held; navigating away cancels it", async ({
  page,
}) => {
  await page.clock.install();
  const ex = bank.exercises.find((e) => e.mode === "choice");
  await seed(page, ex, { auto: true });
  await page
    .locator(".choices")
    .getByRole("button", { name: ex.answers[0], exact: true })
    .click();
  await page.getByRole("button", { name: "Пауза", exact: true }).click();
  await page.clock.fastForward(9000);
  await expect(page.locator("#exercise-instruction")).toHaveText(
    ex.task || "Нажми на правильную форму.",
  );
  await expect(
    page.getByRole("button", { name: "Следующее", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await page.clock.fastForward(9000);
  await expect(
    page.getByRole("heading", { name: "Настройки", exact: true }),
  ).toBeVisible();
});

test("legacy preferences migrate and saved history stays intact", async ({
  page,
}) => {
  const ex = bank.exercises.find((e) => e.mode === "gap");
  await seed(page, ex);
  const history = [
    {
      id: "old-answer",
      exercise: ex.id,
      topic: ex.topic,
      at: Date.now() - 86400000,
      ok: true,
      self: false,
      assisted: false,
      skill: ex.skill,
      level: ex.level,
      ms: 1000,
    },
  ];
  await page.evaluate((history) => {
    const state = JSON.parse(localStorage.getItem("english-focus-sandbox-v1"));
    state.events = history;
    state.preferences.autoAdvance = true;
    delete state.preferences.reviewVersion;
    localStorage.setItem("english-focus-sandbox-v1", JSON.stringify(state));
  }, history);
  await page.reload();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Настройки" })
    .click();
  await expect(page.locator("#autoAdvance")).toHaveValue("false");
  await page.locator("#challenge").selectOption("challenge");
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("english-focus-sandbox-v1")),
  );
  expect(saved.events).toEqual(
    history.map((event) => ({ ...event, phase: "practice" })),
  );
  expect(saved.preferences.reviewVersion).toBe(1);
});

test("rules retry, hint, skip and reload never count an unfinished answer twice", async ({
  page,
}) => {
  await seed(
    page,
    bank.exercises.find((e) => e.mode === "gap"),
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Правила" })
    .click();
  const lesson = ruleLessons[0];
  await page.locator("#rule-topic").selectOption(lesson.topic);
  await page
    .getByRole("row")
    .filter({ hasText: lesson.title })
    .getByRole("button", { name: "Повторить", exact: true })
    .click();
  await page
    .locator("#rule-choices")
    .getByRole("button", { name: lesson.questions[0].answer, exact: true })
    .click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Дальше", exact: true }),
  ).toHaveCount(0);
  const wrong = lesson.questions[0].choices.find(
    (c) => c !== lesson.questions[0].answer,
  );
  await page
    .locator("#rule-choices")
    .getByRole("button", { name: wrong, exact: true })
    .click();
  await page.getByRole("button", { name: "Краткая памятка" }).click();
  await expect(page.getByText(lesson.note, { exact: true })).toBeVisible();
  await page
    .locator("#rule-choices")
    .getByRole("button", { name: lesson.questions[0].answer, exact: true })
    .click();
  await page.getByRole("button", { name: "Дальше", exact: true }).click();
  await page.getByRole("button", { name: "Пропустить", exact: true }).click();
  await page
    .locator("#rule-choices")
    .getByRole("button", { name: lesson.questions[2].answer, exact: true })
    .click();
  await page.getByRole("button", { name: "Завершить", exact: true }).click();
  await expect(
    page.getByText("Верно с первой попытки без памятки: 1 / 3"),
  ).toBeVisible();
});

test("enabled auto advance waits eight seconds then moves to the next exercise", async ({
  page,
}) => {
  await page.clock.install();
  const ex = bank.exercises.find((e) => e.mode === "choice");
  await seed(page, ex, { auto: true });
  await page
    .locator(".choices")
    .getByRole("button", { name: ex.answers[0], exact: true })
    .click();
  await expect(page.locator(".auto-note")).toBeVisible();
  await page.clock.fastForward(7000);
  await expect(page.locator("#feedback")).toBeVisible();
  await page.clock.fastForward(1100);
  await expect(
    page.getByRole("article", { name: "Разбор предыдущего задания" }),
  ).toBeVisible();
  await expect(page.locator("#feedback")).toHaveCount(0);
});

test("offline cache contains compiled assets and reloads the application", async ({
  page,
  context,
}) => {
  await seed(
    page,
    bank.exercises.find((e) => e.mode === "gap"),
  );
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.reload();
  await expect(page.locator("#exercise")).toBeVisible();
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator("#exercise")).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Правила" })
    .click();
  await expect(page.locator("#rule-topic")).toBeVisible();
});
