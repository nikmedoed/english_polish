import {
  readdir,
  readFile,
  mkdir,
  writeFile,
  copyFile,
  unlink,
} from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";
const inbox = "materials/private/inbox";
await mkdir(inbox, { recursive: true });
const files = (await readdir(inbox, { withFileTypes: true })).filter(
  (f) => f.isFile() && /\.(txt|md|vtt|srt)$/i.test(f.name),
);
if (!files.length) {
  console.log("No transcripts in materials/private/inbox. Nothing archived.");
  process.exit(0);
}
const date = new Date().toISOString().slice(0, 10);
await mkdir("materials/private/archive", { recursive: true });
await mkdir("materials/monitoring", { recursive: true });
let batch = date,
  target;
for (let number = 1; ; number++) {
  batch = number === 1 ? date : `${date}-${String(number).padStart(2, "0")}`;
  target = join("materials/private/archive", batch);
  try {
    await mkdir(target);
    break;
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }
}
const manifest = {
  id: batch,
  receivedAt: new Date().toISOString(),
  status: "awaiting-review",
  files: [],
};
for (const f of files) {
  const source = join(inbox, f.name);
  const content = await readFile(source);
  const destination = join(target, f.name);
  await copyFile(source, destination);
  const copied = await readFile(destination);
  if (!content.equals(copied)) throw Error("Archive verification failed");
  manifest.files.push({
    name: f.name,
    sha256: createHash("sha256").update(content).digest("hex"),
    bytes: content.length,
  });
}
await writeFile(
  join(target, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);
await writeFile(
  join("materials/monitoring", `${batch}.md`),
  `# Мониторинг: ${batch}\n\nСтатус: ожидает анализа. Получено записей: ${files.length}.\n\n- Период речи: не установлен.\n- Проверенные ошибки / возможности употребления: нет данных.\n- Объём собственной речи и длительность: нет данных.\n- Практика за период: нет данных.\n- Изменение относительно прошлого среза: ещё не оценено.\n- Следующий учебный фокус: после проверки.\n\n## Проверка партии\n\n- [ ] Проверить говорящего и качество транскрибации.\n- [ ] Посчитать ошибки, знаменатели и уверенность.\n- [ ] Сопоставить с практикой и предыдущим периодом.\n- [ ] Обновить актуальные разборы в ../errors/ и задания в content/.\n\nЗдесь только обезличенные показатели и выводы. Сырые записи, цитаты и личные детали остаются в ../private/archive/. Методика и план: [вводные](../docs/ВВОДНЫЕ.md).\n`,
  { flag: "wx" },
);
// Originals remain preserved in archive; remove inbox copies only after verification and manifest.
for (const f of files) await unlink(join(inbox, f.name));
console.log(
  `Archived ${files.length} files. Batch ${batch}; materials/monitoring/${batch}.md created.`,
);
