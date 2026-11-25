// The Funniest Office Joke — entry program.
// Writes one single-line office joke to /output/entry.txt.
// The joke: a polite email chain escalating, step by step, into the
// politest threat ever received. Setup, turn, punchline last.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "My coworker escalated from 'bumping this' to 'per my last email' to CC'ing my boss — the politest threat I've ever received.";

function main(): void {
  const text = JOKE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: entry.txt differs from joke text");
  }
}

main();
