/* =========================================================================
 *  🌌  MEMORIES (the stars) + LETTERS
 *
 *  HOW TO ADD A MEMORY:
 *   1. Drop the photo into  /public/memories/   (e.g. beach.jpg)
 *   2. Add an entry below. `image` is "/memories/beach.jpg".
 *   3. `x` and `y` are where the star sits in the sky, 0–100 (%).
 *      Spread them out so the constellation looks nice.
 *
 *  Placeholder photos below point at /memories/... files that don't exist yet
 *  — the site shows a soft starry placeholder until you add the real photo.
 * ========================================================================= */

export type Memory = {
  id: string;
  title: string;
  date: string; // free text, e.g. "Summer 2023"
  story: string;
  image: string; // "/memories/xyz.jpg"
  x: number; // 0–100  (horizontal position in the sky)
  y: number; // 0–100  (vertical position)
  size?: number; // star size in px (default 14)
};

export const memories: Memory[] = [
  {
    id: "met",
    title: "The day we met",
    date: "2022",
    story:
      "This is where it all started. Replace this with the real story — the first time you two crossed paths and had no idea how much it would matter.",
    image: "/memories/met.jpg",
    x: 18,
    y: 30,
    size: 18,
  },
  {
    id: "trip",
    title: "That trip",
    date: "Summer 2023",
    story:
      "The one we still bring up. Write the funny part here — the thing that went wrong and became the best part of the whole thing.",
    image: "/memories/trip.jpg",
    x: 42,
    y: 22,
    size: 16,
  },
  {
    id: "competition",
    title: "Competition day",
    date: "2024",
    story:
      "Nervous, proud, exhausted. Put the memory here — who won, who cried, what we ate afterwards.",
    image: "/memories/competition.jpg",
    x: 68,
    y: 38,
    size: 16,
  },
  {
    id: "birthday",
    title: "The birthday",
    date: "2025",
    story:
      "Cake, terrible singing, and a night that ran long. Replace with the real one.",
    image: "/memories/birthday.jpg",
    x: 30,
    y: 60,
    size: 15,
  },
  {
    id: "ordinary",
    title: "An ordinary day",
    date: "Some Tuesday",
    story:
      "Nothing happened. That's exactly why it's here — the quiet days are the ones you end up missing most.",
    image: "/memories/ordinary.jpg",
    x: 58,
    y: 66,
    size: 14,
  },
  {
    id: "now",
    title: "Still making memories",
    date: "Today",
    story:
      "The sky isn't finished. There's room for every memory we haven't made yet.",
    image: "/memories/now.jpg",
    x: 80,
    y: 62,
    size: 20,
  },
];

/* -------------------------------------------------------------------------
 *  LETTERS  —  "open when..." envelopes.
 *  If `unlockDate` is set and in the future, the letter stays sealed until
 *  that date arrives (checked live in the browser).
 *  Leave `unlockDate` empty ("") for letters that are always open.
 * ---------------------------------------------------------------------- */

export type Letter = {
  id: string;
  title: string; // e.g. "Open when you miss me"
  content: string;
  unlockDate?: string; // ISO date, or "" for always unlocked
};

export const letters: Letter[] = [
  {
    id: "happy",
    title: "Open when you're happy",
    content:
      "Good. Hold onto it. Write the letter here — remind him of a moment you were both this happy before.",
    unlockDate: "",
  },
  {
    id: "sad",
    title: "Open when you're having a hard day",
    content:
      "You've had worse days than this and you're still here. Put the words you'd actually say to him here.",
    unlockDate: "",
  },
  {
    id: "miss",
    title: "Open when you miss me",
    content:
      "Then we're even, because I miss you too. Fill this in with something only the two of you would understand.",
    unlockDate: "",
  },
  {
    id: "future",
    title: "Open in 2030",
    content:
      "If you're reading this, we made it further than either of us expected. This one stays sealed until the date arrives.",
    unlockDate: "2030-01-01T00:00:00",
  },
];
