/* =========================================================================
 *  💛  PERSONALIZEAZĂ  💛
 *  Ăsta e singurul fișier pentru detaliile personale.
 *  (Pozele + amintirile sunt în lib/data.ts)
 * ========================================================================= */

export const config = {
  /** Numele prietenului — apare pe ecranul de intro. */
  friendName: "Petru",

  /** Numele tău — apare în mesajul de final. */
  yourName: "Victor",

  /** Linia care apare încet pe ecranul de intro. */
  tagline: "Fiecare stea e o clipă pe care am trăit-o împreună.",

  /** Butonul care deschide cartea amintirilor. */
  openButton: "Hai, deschide, mititelule 👀",

  /** Data de când vă cunoașteți — pentru contorul „suntem prieteni de X zile". */
  friendshipStart: "2023-09-01",

  /** ---- O ultimă surpriză (finalul) ---- */
  surprise: {
    /** Mesajul de suflet dezvăluit chiar la final. */
    message:
      "La mulți ani, mititelule! 🎉 (Da, tot mititelul rămâi, degeaba te ridici pe vârfuri.) " +
      "Ești cel mai deștept prost pe care-l cunosc și cel mai bun prieten pe care puteam să-l am. " +
      "Ți-am făcut un cer în loc de-un cadou banal — și singura condiție e să lași țigările, " +
      "ca să mai aprindem împreună cât mai multe stele de-acum înainte. " +
      "Orice ar urma, cerul ăsta rămâne al nostru. Te iubesc, frate. — Victor " +
      "(P.S. pe Ungureanu tot n-o iertăm.)",
    /** Poza afișată în timpul finalului. */
    photo: "/memories/finale.jpg",
    /** Ținta numărătorii inverse — următoarea amintire (ziua lui, o excursie etc.). Dată ISO. */
    countdownLabel: "Ne vedem de ziua ta, Petru — peste",
    countdownDate: "2026-07-12T00:00:00",
  },
} as const;
