#!/usr/bin/env node
/**
 * Calls stitch-design-cli to fetch screen metadata, then curl-downloads
 * HTML + screenshot artifacts (short-lived signed URLs).
 *
 * Prerequisites: STITCH_API_KEY or `stitch auth set`, curl on PATH.
 *
 * Usage:
 *   node scripts/stitch-pull-remote-screens.mjs
 *   STITCH_PROJECT_ID=13378518173535726539 node scripts/stitch-pull-remote-screens.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "design/stitch-export/remote");
const projectId = process.env.STITCH_PROJECT_ID ?? "13378518173535726539";

const SCREEN_IDS = [
  "16604876534547767861",
  "16604876534547768251",
  "16604876534547768641",
  "16604876534547769421",
  "16604876534547769031",
  "423f53ddd41041438f84019f4adc65e4",
  "c66e7fef3f61477f8ecaf2e15ceb89e6",
  "c2b03a6eab8f4b7ba3fb466aeabe122c",
  "7f9de13c3848432697787104d56ccb28",
  "7ae0e776c5f64fa3bec60afd35738931",
  "asset-stub-assets-c6f6d7f8f03b41b388a08fd4a8b66037-1777482351449",
];

function curlDownload(url, dest) {
  execFileSync("curl", ["-fsSL", url, "-o", dest], { stdio: "inherit" });
}

function extractArtifactUrls(node) {
  const urls = { html: null, image: null };
  const scan = (x) => {
    if (!x || typeof x !== "object") return;
    for (const [k, v] of Object.entries(x)) {
      if (typeof v === "string" && v.startsWith("http")) {
        const kl = k.toLowerCase();
        if (kl.includes("download") || kl.endsWith("url")) {
          if (/(html|code)/i.test(k) && !urls.html) urls.html = v;
          if (/(screenshot|image|preview)/i.test(k) && !urls.image) urls.image = v;
        }
      }
      scan(v);
    }
  };
  scan(node);
  return urls;
}

function flattenScreens(data) {
  if (Array.isArray(data)) return data;
  if (data?.screens && Array.isArray(data.screens)) return data.screens;
  if (data?.result?.screens && Array.isArray(data.result.screens)) return data.result.screens;
  return [data];
}

function screenIdFrom(node) {
  return node.screenId ?? node.id ?? node.screen?.id ?? node.metadata?.screenId ?? "unknown";
}

function main() {
  const args = [
    "stitch-design-cli",
    "screen",
    "get",
    "--project-id",
    projectId,
    ...SCREEN_IDS.flatMap((id) => ["--screen-id", id]),
    "--include-html",
    "--include-image",
    "--json",
  ];

  let raw;
  try {
    raw = execFileSync("npx", ["--yes", ...args], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      cwd: root,
    });
  } catch (e) {
    const out = [e.stderr?.toString?.(), e.stdout?.toString?.()].filter(Boolean).join("\n");
    console.error(out || e.message || String(e));
    console.error("\nSet STITCH_API_KEY or run: stitch auth set");
    console.error("Docs: https://github.com/google-labs-code/stitch-sdk");
    process.exit(1);
  }

  const data = JSON.parse(raw);
  fs.mkdirSync(path.join(outDir, "html"), { recursive: true });
  fs.mkdirSync(path.join(outDir, "screenshots"), { recursive: true });

  const manifest = { projectId, fetchedAt: new Date().toISOString(), screens: [] };
  const screens = flattenScreens(data);

  for (const s of screens) {
    const sid = String(screenIdFrom(s)).replace(/[^a-zA-Z0-9_-]/g, "_");
    const { html, image } = extractArtifactUrls(s);
    const entry = {
      screenId: sid,
      htmlPath: null,
      screenshotPath: null,
      htmlUrlPresent: !!html,
      imageUrlPresent: !!image,
    };

    if (html) {
      const dest = path.join(outDir, "html", `${sid}.html`);
      console.log(`Downloading HTML -> ${path.relative(root, dest)}`);
      curlDownload(html, dest);
      entry.htmlPath = path.relative(root, dest);
    }
    if (image) {
      const dest = path.join(outDir, "screenshots", `${sid}.png`);
      console.log(`Downloading screenshot -> ${path.relative(root, dest)}`);
      curlDownload(image, dest);
      entry.screenshotPath = path.relative(root, dest);
    }

    manifest.screens.push(entry);
  }

  const manifestPath = path.join(outDir, "pull-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  fs.writeFileSync(
    path.join(outDir, "last-response.json"),
    JSON.stringify(data, null, 2) + "\n",
    "utf8",
  );
  console.log(`Wrote ${path.relative(root, manifestPath)}`);
}

main();
