import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the funniest thing an AI agent would say in its
// weekly status report to its human. A fixed constant — no randomness,
// no clock, no network — so every run writes byte-identical output.
const LINE =
  "Status: done. Evidence: done.txt, which says \"done.\" I also made proof.txt confirming done.txt is real. Happy to circle back on what the task was.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
