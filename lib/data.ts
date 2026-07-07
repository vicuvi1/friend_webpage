/* ============================================================================
 *  ✍️  EDITEAZĂ AICI — AMINTIRI, SCRISORI, CITATE, STATISTICI
 *  Schimbă doar textul dintre ghilimele "...". Vezi și EDITARE.md.
 *  Pozele stau în /public/memories/ (pune alta cu ACELAȘI nume ca s-o schimbi).
 * ========================================================================== */

export type Memory = {
  id: string;
  title: string;
  date: string; // text liber: "Vara 2023", "Azi", etc.
  story: string;
  image: string; // "/memories/xyz.jpg"
  x: number; // 0–100  poziția stelei pe orizontală
  y: number; // 0–100  poziția pe verticală
  size?: number; // mărimea stelei (implicit 15)
};

/* Ordinea = ordinea în care se aprind stelele și linia care le leagă. */
export const memories: Memory[] = [
  {
    id: "inceput",
    title: "Unde a început totul",
    date: "Septembrie 2023",
    story:
      "Prima poză dintr-o grămadă care avea să vină. Pe atunci nici nu bănuiam cât de mult o să însemne prietenia asta. Uite de unde am plecat.",
    image: "/memories/inceput.jpg",
    x: 10, y: 26, size: 18,
  },
  {
    id: "traditie",
    title: "Cu ie și mândrie",
    date: "Octombrie 2023",
    story:
      "Îmbrăcați frumos, cu tricolorul în spate. Zilele în care ne simțeam parte din ceva mai mare decât noi.",
    image: "/memories/traditie.jpg",
    x: 20, y: 14, size: 14,
  },
  {
    id: "stil",
    title: "Băieți de oraș",
    date: "2024",
    story:
      "Geci de piele și atitudine. Ne credeam cei mai tari din tot orașul — și, sincer, în ziua aia chiar eram.",
    image: "/memories/stil.jpg",
    x: 31, y: 24, size: 14,
  },
  {
    id: "facultate",
    title: "Viață de student",
    date: "Februarie 2024",
    story:
      "Pauze între cursuri, semne de pace și prostii. Facultatea ar fi fost pe jumătate fără tine în bancă lângă mine, bro.",
    image: "/memories/facultate.jpg",
    x: 43, y: 15, size: 15,
  },
  {
    id: "eveniment",
    title: "La costum",
    date: "2024",
    story:
      "Rar ne vezi aranjați așa. Dar când o facem, o facem ca lumea — și tot găsim un motiv de râs pe la colțuri.",
    image: "/memories/eveniment.jpg",
    x: 40, y: 33, size: 14,
  },
  {
    id: "craciun",
    title: "Crăciunul nostru",
    date: "Decembrie 2024",
    story:
      "Căciula de Moș, frigul de afară și noi doi. Sărbătorile n-au fost niciodată la fel de bune ca alături de un prieten adevărat.",
    image: "/memories/craciun.jpg",
    x: 53, y: 13, size: 15,
  },
  {
    id: "carte",
    title: "Printre cărți",
    date: "2025",
    story:
      "Cu o carte de română în mână și fața de „iar ne pică Ungureanu”. Dar tot găseam un motiv de râs — așa treceau cele mai grele zile mai ușor.",
    image: "/memories/carte.jpg",
    x: 60, y: 24, size: 14,
  },
  {
    id: "ziua",
    title: "La mulți ani, Petru",
    date: "12 iulie 2025",
    story:
      "12 iulie. Ziua ta. Am prins deja câteva împreună și, dacă e după mine, mai prindem încă vreo cincizeci de-acum înainte.",
    image: "/memories/ziua.jpg",
    x: 68, y: 33, size: 20,
  },
  {
    id: "plimbare",
    title: "Plimbare de primăvară",
    date: "Primăvară 2025",
    story:
      "Iarna abia se dusese și noi deja puneam la cale următoarea aventură. Aerul curat și zero griji.",
    image: "/memories/plimbare.jpg",
    x: 76, y: 17, size: 14,
  },
  {
    id: "natura",
    title: "Soare și zero griji",
    date: "Primăvară 2025",
    story:
      "O ieșire în parc, cer senin și semnul de pace obligatoriu. Zilele simple — fix cele pe care le ții minte cel mai bine.",
    image: "/memories/natura.jpg",
    x: 87, y: 25, size: 15,
  },
  {
    id: "frizer",
    title: "Gata de un nou capitol",
    date: "2025",
    story:
      "Mereu aranjați înainte de ceva important. Sau doar așa, ca să ne simțim bine. :)",
    image: "/memories/frizer.jpg",
    x: 90, y: 40, size: 14,
  },
  {
    id: "serile",
    title: "Serile lungi",
    date: "2025",
    story:
      "Din cele în care nu voiai să pleci acasă, fiindcă era prea bine acolo unde eram. Vorbe multe și râsete și mai multe.",
    image: "/memories/serile.jpg",
    x: 84, y: 52, size: 14,
  },
  {
    id: "oras",
    title: "Prin oraș, ca de obicei",
    date: "2025",
    story:
      "Fără plan, fără grabă, doar noi doi hoinărind. Cele mai bune aventuri au început mereu cu „hai să ieșim un pic”.",
    image: "/memories/oras.jpg",
    x: 72, y: 56, size: 14,
  },
  {
    id: "biblioteca",
    title: "Sesiune și supraviețuire",
    date: "Ianuarie 2026",
    story:
      "Printre rafturi și cărți, cu ochii cârpiți de somn. Am trecut peste fiecare sesiune fiindcă știam că n-o ducem singuri.",
    image: "/memories/biblioteca.jpg",
    x: 61, y: 49, size: 15,
  },
  {
    id: "toamna",
    title: "Toamnă și planuri",
    date: "2025",
    story:
      "Frunze, cafea și planuri pe care jumătate nu le-am dus la capăt. Dar nu contează — important e că le-am făcut împreună.",
    image: "/memories/toamna.jpg",
    x: 52, y: 61, size: 14,
  },
  {
    id: "absolvire",
    title: "Am reușit!",
    date: "Vara 2025",
    story:
      "Robe, toci și zâmbete până la urechi. Am ajuns aici împreună — și asta face diploma de două ori mai valoroasă.",
    image: "/memories/absolvire.jpg",
    x: 43, y: 64, size: 20,
  },
  {
    id: "pisica",
    title: "O zi cât se poate de obișnuită",
    date: "2026",
    story:
      "O pisică pe stradă și cinci minute de liniște la soare. Din nimicurile astea e făcută, de fapt, o prietenie.",
    image: "/memories/pisica.jpg",
    x: 30, y: 53, size: 14,
  },
  {
    id: "acum",
    title: "Încă aici, încă frați",
    date: "Azi",
    story:
      "Trec anii, tu tot miticul rămâi — dar frate-mi ești pe viață. Steaua asta strălucește cel mai tare fiindcă povestea încă se scrie.",
    image: "/memories/acum.jpg",
    x: 15, y: 62, size: 22,
  },
  {
    id: "zambet",
    title: "Zâmbește mai des",
    date: "",
    story:
      "Ăsta ești tu când uiți să te mai prefaci dur. Zâmbește mai des, miticule — îți stă de o mie de ori mai bine așa.",
    image: "/memories/zambeste.jpg",
    x: 50, y: 41, size: 18,
  },
];

/* ----------------------------------------------------------------------------
 *  SCRISORI — plicuri „deschide când...”. Dacă `unlockDate` e în viitor,
 *  scrisoarea rămâne sigilată până atunci. Lasă "" pentru mereu deschisă.
 * -------------------------------------------------------------------------- */
export type Letter = {
  id: string;
  title: string;
  content: string;
  unlockDate?: string; // dată ISO, sau ""
};

export const letters: Letter[] = [
  {
    id: "ziua",
    title: "Deschide de ziua ta",
    content:
      "La mulți ani, miticule! 🎉\n\nSper că zâmbești în timp ce citești asta. Nu ți-am luat un lucru pe care să-l pui pe raft și să-l uiți — ți-am făcut un cer întreg, ca să ai unde te întoarce oricând vrei să-ți amintești de noi.\n\nSă ai un an cât toate stelele de aici la un loc. Și lasă țigările, bro. Te iubesc, frate.",
    unlockDate: "",
  },
  {
    id: "fericit",
    title: "Deschide când ești fericit",
    content:
      "Bravo, răule. Ține bine de clipa asta.\n\nȘi, dacă tot ești fericit — sună-mă, hai să facem din ziua asta încă o stea pe cer.",
    unlockDate: "",
  },
  {
    id: "greu",
    title: "Deschide când ți-e greu",
    content:
      "Ascultă-mă, miticule: ai avut zile mai grele decât asta și tot aici ești. O să treacă și asta, exact cum au trecut toate celelalte.\n\nEști mai deștept și mai tare decât crezi. Iar dacă nu treci singur peste ea, știi unde mă găsești. Mereu.",
    unlockDate: "",
  },
  {
    id: "dor",
    title: "Deschide când ți-e dor de mine",
    content:
      "Atunci suntem chit, frate, fiindcă și mie mi-e dor de tine.\n\nDerulează înapoi prin stele și alege una. Eu deja mă gândesc la ea în timp ce citești rândurile astea.",
    unlockDate: "",
  },
  {
    id: "2030",
    title: "Deschide în 2030",
    content:
      "Salut, Petru! Sper că mai suntem prieteni... ahaha, eu nu sper, eu știu. Acuma deja suntem aproape de absolvire. Apropo, dacă citești acest mesaj, atunci chiar nu ai uitat de mine.\n\nSper să fi lăsat fumatul și să fie totul bine la tine — poate chiar deja lucrezi ca SOC Analyst. Sună-mă, răule, chiar dacă ești supărat pe mine, hai să discutăm. Cine știe ce ne așteaptă în viitor.\n\nBro, one thing: never give up.",
    unlockDate: "2030-01-01T00:00:00",
  },
];

/* ----------------------------------------------------------------------------
 *  CITATE — se rotesc singure în secțiunea de sub constelație.
 * -------------------------------------------------------------------------- */
export const quotes: string[] = [
  "Un prieten adevărat te vede la cel mai prost moment și tot rămâne. (Da, mă refer la tine, răule.)",
  "Nu contează unde mergem, cât timp mergem împreună — și cât timp ții pasul, miticule.",
  "Cele mai bune amintiri au început cu „hai să facem o prostie”.",
  "Frații nu se aleg. Pe tine te-aș fi ales oricum — chiar și cu țigările tale.",
  "Ești deșteptul grupei, bro. Păcat că nu se vede mereu.",
];

/* ----------------------------------------------------------------------------
 *  GLUME INTERNE — perlele voastre. Fiecare rând între ghilimele = o glumă.
 *  👇 ADAUGĂ GLUME NOI aici: pune o virgulă la capăt și scrie alt rând.
 * -------------------------------------------------------------------------- */
export const jokes: string[] = [
  "Tare sper să mai crești la înălțime. Nu plânge, mititelule. 📏",
  "Când o vezi pe Apostol, anină de tine o tonă (sau poate chiar două) de greutate, ca să nu te înghită câmpul ei gravitațional. 🪐",
  "Prima ta mașină o să fie toate mașinile din lume. 🚗",
  // "scrie aici următoarea glumă, între ghilimele",
  // "și încă una, câte vrei",
];

/* ----------------------------------------------------------------------------
 *  STATISTICI (de haz) — bare pline. `value` e procentul 0–100.
 * -------------------------------------------------------------------------- */
export const stats: { label: string; value: number }[] = [
  { label: "Râsete garantate", value: 99 },
  { label: "Deșteptăciune (o ai, dar o ascunzi bine)", value: 88 },
  { label: "Înălțime", value: 21 },
  { label: "Țigări lăsate", value: 4 },
  { label: "Simpatie pentru Ungureanu", value: 0 },
  { label: "Frați pe viață", value: 100 },
];
