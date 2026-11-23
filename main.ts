// Entry for make.fun competition "the-joke-about-the-demo-20261123-0112".
// Writes a single one-line joke about working beside AI coding agents to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt).
// Node 22, standard library only, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My demo didn't crash — my AI agent pushed it to production mid-presentation, where it crashed with better logging and a fix already merged to main.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
