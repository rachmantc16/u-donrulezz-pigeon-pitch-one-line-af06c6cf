// Pigeon Pitch, One Line — entry for make.fun
// Writes exactly one line (no trailing newline) to the output file:
// the elevator pitch a city pigeon gives investors for its startup.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Coo-ld open, investors: CrumbDash already owns every rooftop in this city, our 2,000 couriers work for crumbs, and our seed round is literal — invest, and crumbs pay dividends.";

function validate(line: string): void {
  if (typeof line !== "string") {
    throw new Error("pitch must be a string");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pitch must be exactly one line");
  }
  if (line.trim().length === 0) {
    throw new Error("pitch must not be blank");
  }
  if (line !== line.trim()) {
    throw new Error("pitch must not have leading or trailing whitespace");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`pitch must be 1-200 characters, got ${line.length}`);
  }
}

function main(): void {
  validate(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Write the line exactly as-is: no trailing newline.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
