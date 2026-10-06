import test from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  readdir,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
test("intake preserves source in date archive and creates anonymized monitoring", async () => {
  const root = await mkdtemp(join(tmpdir(), "english-focus-intake-"));
  try {
    await mkdir(join(root, "materials/private/inbox"), { recursive: true });
    const original = "[Я] disposable synthetic test transcript";
    await writeFile(join(root, "materials/private/inbox/sample.txt"), original);
    execFileSync(process.execPath, [resolve("scripts/intake.mjs")], {
      cwd: root,
    });
    assert.equal(
      (await readdir(join(root, "materials/private/inbox"))).length,
      0,
    );
    const [batch] = await readdir(join(root, "materials/private/archive"));
    assert.equal(
      await readFile(
        join(root, "materials/private/archive", batch, "sample.txt"),
        "utf8",
      ),
      original,
    );
    const manifest = JSON.parse(
      await readFile(
        join(root, "materials/private/archive", batch, "manifest.json"),
        "utf8",
      ),
    );
    assert.equal(
      manifest.files[0].sha256,
      createHash("sha256").update(original).digest("hex"),
    );
    assert.match(batch, /^\d{4}-\d{2}-\d{2}$/);
    const report = await readFile(
      join(root, "materials/monitoring", batch + ".md"),
      "utf8",
    );
    assert.match(report, /ожидает анализа/);
    assert.equal(report.includes(original), false);
    assert.equal(report.includes("sample.txt"), false);
    await writeFile(
      join(root, "materials/private/inbox/sample.txt"),
      "Second synthetic transcript",
    );
    execFileSync(process.execPath, [resolve("scripts/intake.mjs")], {
      cwd: root,
    });
    assert.equal(
      await readFile(
        join(root, "materials/private/archive", batch, "sample.txt"),
        "utf8",
      ),
      original,
    );
    assert.equal(
      await readFile(
        join(root, "materials/private/archive", batch + "-02", "sample.txt"),
        "utf8",
      ),
      "Second synthetic transcript",
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
