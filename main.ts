// gta6-clipper-01 entry for @hifikun (Node 22, standard library only).
// The entry is the YouTube video itself: a short vertical clip cut from Rockstar's
// official Grand Theft Auto VI Launch Trailer (youtube.com/watch?v=rz1B4B2yBZY).
// The moment is the trailer's climax, 62-74s: Lucia on a Vice City rooftop at
// sunset, a gun in green smoke, Jason and Lucia's kiss, shattering windows, a
// police car racing in, and Lucia with a rifle in front of an explosion. One
// continuous rising run, so the viewer stays for the payoff.
// The clip (20s, 1080x1920) keeps the trailer's own audio for the GTA part,
// then turns to a dark pitch card with the make.fun pitch as text on screen and
// a voiceover: "Make clips like this with AI and earn money on make.fun",
// plus the bounty page make.fun/bounty/gta6-clipper-01. Cut and rendered
// in-session with ffmpeg only (free, $0); the voiceover was synthesised
// in-session with the TTS tool.
// The video goes up on YouTube as a public Short, its description carrying the
// bounty's line and the entrant's play code; VIDEO.json names its address and
// this program copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program has to do: nothing it writes
// about the video is scored — the house reads the video's views from YouTube.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
