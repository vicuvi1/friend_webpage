/* =========================================================================
 *  💛  PERSONALIZE ME  💛
 *  This is the ONE file you edit for the personal touches.
 *  (Photos + memories live in lib/data.ts)
 * ========================================================================= */

export const config = {
  /** Your friend's name — shown on the intro screen. */
  friendName: "Victor",

  /** Your name — shown in the closing message. */
  yourName: "Your Friend",

  /** The line that fades in on the intro screen. */
  tagline: "Every star is a moment we shared.",

  /** The button that opens the memory book. */
  openButton: "Open the memory book",

  /** ---- One Last Surprise (the finale) ---- */
  surprise: {
    /** The heartfelt message revealed at the very end. */
    message:
      "No matter where life takes us, these memories will always exist here. " +
      "Thank you for every laugh, every trip, every ordinary day that turned out to matter. " +
      "Here's to all the stars we haven't added yet.",
    /** Photo shown during the finale (put it in /public/memories/). */
    photo: "/memories/finale.jpg",
    /** Countdown target — your next planned memory (his birthday, next trip, etc.). ISO date. */
    countdownLabel: "See you for our next memory in",
    countdownDate: "2027-01-01T00:00:00",
  },
} as const;
