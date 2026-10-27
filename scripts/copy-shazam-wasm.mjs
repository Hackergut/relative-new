import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const libs = join(".vercel", "output", "functions", "__server.func", "_libs");
copyFileSync(join("node_modules", "shazamio-core", "node", "shazamio-core_bg.wasm"), join(libs, "shazamio-core_bg.wasm"));

const bundle = join(libs, "shazamio-api+shazamio-core.mjs");
const source = readFileSync(bundle, "utf8");
const broken = 'var path = __require("path").join(__dirname, "shazamio-core_bg.wasm");';
const fixed = 'var path = __require("path").join(__require("path").dirname(__require("url").fileURLToPath(import.meta.url)), "shazamio-core_bg.wasm");';
if (source.includes(broken)) {
  writeFileSync(bundle, source.replace(broken, fixed));
  console.log("[shazam] wasm path fixed in the server bundle");
} else if (source.includes("fileURLToPath")) {
  console.log("[shazam] wasm path already fixed");
} else {
  throw new Error("Shazam bundle has no wasm path to fix");
}
