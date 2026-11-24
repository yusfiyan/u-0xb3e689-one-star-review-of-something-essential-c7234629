// One-Star Review of Something Essential
// make.fun bounty: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// A deadpan one-star review of Monday — the essential nobody can live
// without and nobody asked for. The complaint is filed in earnest, the
// sting lands in the last few words, and there is no winking.
//
// Writes exactly one file: $MAKEFUN_OUTPUT_DIR/entry.txt
// (absolute path only — the grader runs the repo read-only).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Monday arrives every single week, right on time, completely uninvited, and still acts surprised that I am not ready.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// Gate guard: mirror the sealed scorer — entry must be UTF-8 text of
// 1 to 160 characters, a single line, and not only white space.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  console.error(
    `entry fails the gate: ${REVIEW.length} characters, must be 1-160, single line, non-blank`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
