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
  openButton: "Deschide cartea amintirilor",

  /** ---- O ultimă surpriză (finalul) ---- */
  surprise: {
    /** Mesajul de suflet dezvăluit chiar la final. */
    message:
      "Petru, orice ar urma și oricât de departe ne-ar duce viața, cerul ăsta rămâne aici — al nostru. " +
      "Mulțumesc pentru fiecare râs, fiecare drum și fiecare zi obișnuită care s-a dovedit a conta. " +
      "La mulți ani! Aici sunt toate stelele de până acum — și e loc berechet pentru toate cele pe care încă nu le-am aprins.",
    /** Poza afișată în timpul finalului. */
    photo: "/memories/finale.jpg",
    /** Ținta numărătorii inverse — următoarea amintire (ziua lui, o excursie etc.). Dată ISO. */
    countdownLabel: "Ne vedem de ziua ta, Petru — peste",
    countdownDate: "2026-07-12T00:00:00",
  },
} as const;
