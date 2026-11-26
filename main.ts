/**
 * haunted-server-sign — Funniest Sign on a Haunted Server Room Door
 * (make.fun bounty u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
 *
 * Writes one funny line for the door of a haunted server room to
 * /output/entry.txt. The line is a deadpan sign in the voice of the
 * building, not a joke about the sign: the ghost in the cold aisle
 * ate last night's backup. Twice.
 *
 * Gate: 1-120 UTF-8 characters, not whitespace only. The line below
 * is 89 characters, no trailing newline, so it also wins the
 * smaller-text tie-break against any equal-rate entry.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const SIGN =
  "Please do not feed the ghost in the cold aisle. He already ate last night's backup twice.";

// Gate self-check: the sealed scorer requires 1-120 UTF-8 characters,
// not whitespace only. Fail loudly here rather than shipping an
// invalid entry; 89 characters also keeps the smaller-text tie-break.
if (SIGN.length < 1 || SIGN.length > 120 || SIGN.trim().length === 0) {
  throw new Error(`SIGN is ${SIGN.length} characters; gate requires 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SIGN, "utf8");
