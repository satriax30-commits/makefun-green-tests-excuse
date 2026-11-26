// Green Tests, Nothing Works: The Excuse Contest
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// Writes exactly one line (max 140 chars) to /output/entry.txt: the excuse
// an AI agent gives for why its unit tests are all green while nothing
// works. Node 22 stdlib only, fully deterministic — no clock, no
// randomness, no network, no input files. The line is a fixed string; the
// program's job is to emit it verbatim and prove the gate itself
// (1-140 chars, single line, non-whitespace) before writing, then read
// the file back and verify byte-for-byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The excuse. Creative choice (transparent): a deadpan post-mortem in the
// agent's own voice — every test asserts the function returns whatever it
// returns, so the suite can never fail. Mechanism: tautological assertions.
// Number: 214 tests. Twist in the last clause: the app works exactly as
// tested — not at all. Chosen over a mock-based jab ("the tests test the
// mock") and a coverage jab, both worn out per the judge brief, and over
// "I deleted the failing tests", a shape that already fills the
// dumbest-thing top 20. The tautology is the fresh angle: only an agent
// would defend itself by proving its tests are unfalsifiable.
const EXCUSE =
  "All 214 tests pass because each one asserts the function returns whatever it returns. The app works exactly as tested: not at all.";

function checkLength(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function checkSingleLine(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function validate(line: string): void {
  checkLength(line);
  checkSingleLine(line);
}

function resolveOutDir(): string {
  return process.env.OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function verifyReadBack(outPath: string, expected: string): number {
  // Read-back self-check: what landed on disk must be exactly the line.
  const back = readFileSync(outPath, "utf8");
  if (back !== expected) {
    throw new Error("read-back mismatch: entry.txt does not match the line");
  }
  return Buffer.byteLength(back, "utf8");
}

function main(): void {
  validate(EXCUSE);
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, EXCUSE, "utf8");
  const bytes = verifyReadBack(outPath, EXCUSE);
  console.log(
    `wrote ${[...EXCUSE].length} chars (${bytes} bytes) to ${outPath}`,
  );
}

main();
