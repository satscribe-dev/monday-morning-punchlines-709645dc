// Monday Morning Punchlines — entry writer.
//
// Writes exactly one joke about Monday mornings (at most 200 characters)
// to /output/entry.txt, deterministically: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set five alarms for Monday morning. They formed a union and went on strike.";

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only white space. Fail loudly instead of writing an
// entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry violates the gate: ${JOKE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
