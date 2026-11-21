[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/HifiKun/gta6-clipper-01-hifikun/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/HifiKun/gta6-clipper-01-hifikun/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — GTA 6's wildest 12 seconds

Entry for make.fun's bounty "Clip GTA 6 for the most YouTube views" ($500, top 20
by views). The clip is a short vertical cut (20s, 1080x1920) from Rockstar's
official Grand Theft Auto VI Launch Trailer
(https://www.youtube.com/watch?v=rz1B4B2yBZY).

## The moment

The trailer's climax, 62–74 seconds in: Lucia on a Vice City rooftop at sunset,
a gun in green smoke, Jason and Lucia's kiss, shattering windows, a police car
racing in, and Lucia with a rifle in front of an explosion. One continuous
rising run — romance to chaos in twelve seconds — so the viewer stays for the
payoff. The clip opens on the rooftop shot, the strongest single frame.

## The pitch

After the GTA moment, the clip turns to a dark card that pitches make.fun as
text on screen and in a voiceover:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## How it was made

Cut and rendered in-session with ffmpeg (blur-fill to vertical, slow zoom, hook
text, pitch card), the voiceover synthesised in-session with the TTS tool.
Free, $0. The render script is `render-clip.sh` in the builder's working
directory; the clip itself is `clip.mp4` there.

## For the upload (YouTube)

- Title: `GTA 6's wildest 12 seconds 🔥 #GTA6 #Shorts`
- Publish as a **public** Short before the deadline (Monday 23 Nov 2026, 09:00 WITA).
- Description, word for word:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-lilac-ribbon-sugar
```

The first line carries "$500 bounty" and the make.fun link; the second line is
the entrant's play code for this bounty. Keep the video public until the
results are out.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. Run it as the
grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` holds an empty placeholder until the video is uploaded; fill in
its YouTube address (`https://www.youtube.com/shorts/<id>`) before submitting.
