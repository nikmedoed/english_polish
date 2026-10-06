import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
export function blockedPaths(paths) {
  return paths.filter(
    (p) =>
      /^materials\/monitoring\/archive\//i.test(p) ||
      /^(?:materials\/)?(?:private|examples|\.code-review-graph)\//i.test(p) ||
      /(^|\/)\.env(?:\.|$)/i.test(p) ||
      /(^|\/)progress[^/]*\.json$/i.test(p) ||
      /\.(srt|vtt)$/i.test(p),
  );
}
export function rawContent(text) {
  return (
    /(?:^|\n)\s*(?:\[Я\]|\[Собеседник\]|\d{2}:\d{2}:\d{2}[,.]\d{3}\s*-->)/u.test(
      text,
    ) || /2026-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}[^\n]*\.txt/u.test(text)
  );
}
async function walk(root) {
  const files = [];
  for (const e of await readdir(root, { withFileTypes: true })) {
    const p = join(root, e.name);
    if (p.replaceAll("\\", "/").startsWith("materials/monitoring/archive"))
      continue;
    if (e.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}
export async function audit() {
  const tracked = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean);
  const blocked = blockedPaths(tracked);
  const publicFiles = ["README.md", "AGENTS.md", "materials/ВВОДНЫЕ.md"];
  for (const root of [
    "public",
    "materials/errors",
    "materials/monitoring",
    "content",
  ])
    publicFiles.push(...(await walk(root)));
  for (const p of publicFiles) {
    if (
      /\.(md|txt|json|html|mjs|js)$/i.test(p) &&
      rawContent(await readFile(p, "utf8"))
    )
      blocked.push(p);
  }
  if (blocked.length)
    throw Error(
      "Private or raw material in public paths: " + blocked.join(", "),
    );
  console.log(
    "Privacy check passed: errors and monitoring are public; raw records and personal exports are excluded.",
  );
}
if (process.argv[1]?.replaceAll("\\", "/").endsWith("/check-privacy.mjs"))
  await audit();
