// Roast the Smart Fridge: One Line, Best Laugh Wins
// Writes one roast line (<= 160 chars) to the output directory as entry.txt.
// Node 22, standard library only. Deterministic: the same bytes every run.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LINE =
  "My fridge photographs its shelves every hour for inventory; the only thing it has ever caught in the act is me at 3am, eating shredded cheese in its glow.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, gate allows 1 to 160`);
}
if (LINE.trim().length === 0) {
  throw new Error('entry line must not be white space only');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(resolve(OUTPUT_DIR, 'entry.txt'), LINE, { encoding: 'utf8' });
