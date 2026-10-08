import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHash } from "node:crypto";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { makeBank } from "./content/bank-source.mjs";
import { ruleLessons } from "./content/rules.mjs";
import { validateBank } from "./scripts/check-content.mjs";
import { validateRules } from "./scripts/check-rules.mjs";

export default defineConfig(async ({ command }) => {
  const bank = makeBank();
  validateBank(bank);
  validateRules(ruleLessons);
  const data = {
    "data/bank.json": JSON.stringify(bank),
    "data/rules.json": JSON.stringify(ruleLessons),
  };
  const hash = createHash("sha256");
  async function hashDirectory(path) {
    for (const entry of (await readdir(path, { withFileTypes: true })).sort(
      (a, b) => a.name.localeCompare(b.name),
    )) {
      const file = `${path}/${entry.name}`;
      if (entry.isDirectory()) await hashDirectory(file);
      else hash.update(file).update(await readFile(file));
    }
  }
  await hashDirectory("src");
  for (const file of [
    "index.html",
    "vite.config.js",
    "package-lock.json",
    "public/sw.js",
    "public/manifest.webmanifest",
  ])
    hash.update(await readFile(file));
  hash.update(JSON.stringify(data));
  const id = hash.digest("hex").slice(0, 12);
  const manifest = await readFile("public/manifest.webmanifest", "utf8");
  data["build-id.json"] = JSON.stringify({ id });
  return {
    base: "./",
    publicDir: false,
    define: {
      __APP_BUILD_ID__: JSON.stringify(
        command === "serve" ? "development" : id,
      ),
    },
    server: { host: "127.0.0.1", port: 5173, strictPort: true },
    preview: { host: "127.0.0.1", port: 5173, strictPort: true },
    plugins: [
      react(),
      {
        name: "english-content",
        async configureServer(server) {
          await mkdir("dist/data", { recursive: true });
          for (const [file, source] of Object.entries(data))
            await writeFile(`dist/${file}`, source);
          server.middlewares.use(async (req, res, next) => {
            const file = req.url?.split("?")[0].replace(/^\//, "");
            if (file === "manifest.webmanifest") {
              res.setHeader("Content-Type", "application/manifest+json");
              res.end(manifest);
            } else if (file in data) {
              res.setHeader("Content-Type", "application/json");
              res.end(await readFile(`dist/${file}`));
            } else next();
          });
        },
        async generateBundle(_, bundle) {
          for (const [fileName, source] of Object.entries(data))
            this.emitFile({ type: "asset", fileName, source });
          this.emitFile({
            type: "asset",
            fileName: "manifest.webmanifest",
            source: manifest,
          });
          const files = [
            "./",
            "./index.html",
            "./manifest.webmanifest",
            ...Object.keys(data).map((f) => "./" + f),
            ...Object.keys(bundle)
              .filter((f) => f !== "index.html")
              .map((f) => "./" + f),
          ];
          const sw = (await readFile("public/sw.js", "utf8"))
            .replace(
              /const CACHE = .*?;/,
              `const CACHE = "english-focus-${id}";`,
            )
            .replace(
              /const FILES = \[[\s\S]*?\];/,
              `const FILES = ${JSON.stringify([...new Set(files)])};`,
            );
          this.emitFile({ type: "asset", fileName: "sw.js", source: sw });
        },
      },
    ],
  };
});
