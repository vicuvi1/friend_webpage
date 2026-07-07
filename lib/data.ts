/* =========================================================================
 *  🌌  AMINTIRILE (stelele) + SCRISORILE
 *
 *  Fiecare stea = o amintire. Pozele stau in  /public/memories/
 *  Ca sa schimbi textul, editeaza pur si simplu ce e intre ghilimele mai jos.
 *  `x` si `y` sunt pozitia stelei pe cer (0–100). `size` = marimea stelei.
 * ========================================================================= */

export type Memory = {
  id: string;
  title: string;
  date: string; // text liber, ex. "Vara 2023"
  story: string;
  image: string; // "/memories/xyz.jpg"
  x: number; // 0–100  (pozitie pe orizontala)
  y: number; // 0–100  (pozitie pe verticala)
  size?: number; // marimea stelei in px (implicit 15)
};

/* Ordinea de mai jos e cronologica — asa se aprind stelele si asa se
 * traseaza linia care leaga amintirile, ca o poveste de la inceput pana azi. */
export const memories: Memory[] = [
  {
    id: "inceput",
    title: "Unde a început totul",
    date: "Septembrie 2023",
    story:
      "Prima poză dintr-o grămadă care avea să vină. Pe atunci nici nu bănuiam cât de mult o să însemne prietenia asta. Uite de unde am plecat.",
    image: "/memories/inceput.jpg",
    x: 14,
    y: 27,
    size: 18,
  },
  {
    id: "traditie",
    title: "Cu ie și mândrie",
    date: "Octombrie 2023",
    story:
      "Îmbrăcați frumos, cu tricolorul în spate. Zilele în care ne simțeam parte din ceva mai mare decât noi.",
    image: "/memories/traditie.jpg",
    x: 29,
    y: 15,
    size: 15,
  },
  {
    id: "facultate",
    title: "Viață de student",
    date: "Februarie 2024",
    story:
      "Pauze între cursuri, semne de pace și prostii. Facultatea ar fi fost pe jumătate fără tine în bancă lângă mine.",
    image: "/memories/facultate.jpg",
    x: 41,
    y: 33,
    size: 15,
  },
  {
    id: "craciun",
    title: "Crăciunul nostru",
    date: "Decembrie 2024",
    story:
      "Căciula de Moș, frigul de afară și noi doi. Sărbătorile n-au fost niciodată la fel de bune ca alături de un prieten adevărat.",
    image: "/memories/craciun.jpg",
    x: 53,
    y: 17,
    size: 15,
  },
  {
    id: "ziua",
    title: "La mulți ani, Petru",
    date: "12 iulie 2025",
    story:
      "12 iulie. Ziua ta. Am prins deja câteva împreună și, dacă e după mine, mai prindem încă vreo cincizeci de-acum înainte.",
    image: "/memories/ziua.jpg",
    x: 65,
    y: 30,
    size: 20,
  },
  {
    id: "natura",
    title: "Soare și zero griji",
    date: "Primăvară 2025",
    story:
      "O ieșire în parc, cer senin și semnul de pace obligatoriu. Zilele simple — fix cele pe care le ții minte cel mai bine.",
    image: "/memories/natura.jpg",
    x: 79,
    y: 19,
    size: 15,
  },
  {
    id: "frizer",
    title: "Gata de un nou capitol",
    date: "2025",
    story:
      "Mereu aranjați înainte de ceva important. Sau doar așa, ca să ne simțim bine. :)",
    image: "/memories/frizer.jpg",
    x: 88,
    y: 41,
    size: 14,
  },
  {
    id: "oras",
    title: "Prin oraș, ca de obicei",
    date: "2025",
    story:
      "Fără plan, fără grabă, doar noi doi hoinărind. Cele mai bune aventuri au început mereu cu „hai să ieșim un pic”.",
    image: "/memories/oras.jpg",
    x: 73,
    y: 56,
    size: 14,
  },
  {
    id: "biblioteca",
    title: "Sesiune și supraviețuire",
    date: "Ianuarie 2026",
    story:
      "Printre rafturi și cărți, cu ochii cârpiți de somn. Am trecut peste fiecare sesiune fiindcă știam că n-o ducem singuri.",
    image: "/memories/biblioteca.jpg",
    x: 59,
    y: 51,
    size: 15,
  },
  {
    id: "absolvire",
    title: "Am reușit!",
    date: "Vara 2025",
    story:
      "Robe, toci și zâmbete până la urechi. Am ajuns aici împreună — și asta face diploma de două ori mai valoroasă.",
    image: "/memories/absolvire.jpg",
    x: 45,
    y: 63,
    size: 20,
  },
  {
    id: "pisica",
    title: "O zi cât se poate de obișnuită",
    date: "2026",
    story:
      "O pisică pe stradă și cinci minute de liniște la soare. Din nimicurile astea e făcută, de fapt, o prietenie.",
    image: "/memories/pisica.jpg",
    x: 29,
    y: 52,
    size: 14,
  },
  {
    id: "acum",
    title: "Încă aici, încă frați",
    date: "Azi",
    story:
      "Trec anii, noi rămânem la fel. Steaua asta strălucește cel mai tare fiindcă povestea încă se scrie.",
    image: "/memories/acum.jpg",
    x: 15,
    y: 64,
    size: 22,
  },
];

/* -------------------------------------------------------------------------
 *  SCRISORI  —  plicuri „deschide când...”.
 *  Daca `unlockDate` e o data din viitor, scrisoarea ramane sigilata pana atunci
 *  (se verifica direct in browser). Lasa `unlockDate` gol ("") pentru scrisori
 *  mereu deschise.
 * ---------------------------------------------------------------------- */

export type Letter = {
  id: string;
  title: string;
  content: string;
  unlockDate?: string; // data ISO, sau "" pentru mereu deschis
};

export const letters: Letter[] = [
  {
    id: "ziua",
    title: "Deschide de ziua ta",
    content:
      "La mulți ani, Petru! 🎉\n\nSper că zâmbești în timp ce citești asta. Nu ți-am luat un lucru pe care să-l pui pe raft și să-l uiți — ți-am făcut un cer, ca să ai unde să te întorci oricând vrei să-ți amintești de noi.\n\nSă ai un an cât toate stelele de aici la un loc. Te iubesc, frate.",
    unlockDate: "",
  },
  {
    id: "fericit",
    title: "Deschide când ești fericit",
    content:
      "Bravo. Ține bine de clipa asta.\n\nȘi, dacă tot ești fericit — sună-mă, hai să facem din ziua asta încă o stea pe cer.",
    unlockDate: "",
  },
  {
    id: "greu",
    title: "Deschide când ți-e greu",
    content:
      "Ai avut zile mai grele decât asta și tot aici ești. O să treacă și asta, exact cum au trecut toate celelalte.\n\nIar dacă nu trece singură, știi unde mă găsești. Mereu.",
    unlockDate: "",
  },
  {
    id: "dor",
    title: "Deschide când ți-e dor de mine",
    content:
      "Atunci suntem chit, fiindcă și mie mi-e dor de tine.\n\nDerulează înapoi prin stele și alege una. Eu deja mă gândesc la ea în timp ce citești rândurile astea.",
    unlockDate: "",
  },
  {
    id: "2030",
    title: "Deschide în 2030",
    content:
      "Dacă citești asta, înseamnă că am ajuns mai departe decât ne așteptam amândoi. Sunt curios cine suntem acum.\n\nSper că suntem tot noi. Scrisoarea asta rămâne sigilată până în 2030.",
    unlockDate: "2030-01-01T00:00:00",
  },
];
