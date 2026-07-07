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
      "Pentru cel mai bun prieten al meu, Petru — 19 ani și tot n-ai învățat să răspunzi la mesaje, dar te iert. 😄 " +
      "Ți-am făcut un cer în loc de-un cadou banal, fiindcă tu nu ești un prieten banal. " +
      "Ai fost lângă mine la fiecare prostie, fiecare sesiune și fiecare zi mai gri — și n-aș da înapoi niciun an. " +
      "La mulți ani, frate! Aici sunt toate stelele de până acum, și mai avem o grămadă de aprins împreună.",
    /** Poza afișată în timpul finalului. */
    photo: "/memories/finale.jpg",
    /** Ținta numărătorii inverse — următoarea amintire (ziua lui, o excursie etc.). Dată ISO. */
    countdownLabel: "Ne vedem de ziua ta, Petru — peste",
    countdownDate: "2026-07-12T00:00:00",
  },
} as const;
