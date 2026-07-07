# ✍️ Cum editezi textul (ghid rapid)

## 🔓 Modul secret (editezi direct pe site, fără cod)

Pe site, **dublu-click pe orice text** → îți cere un **cod secret: `185`**.
- Cod corect → intri în „mod editare”. Acum poți da dublu-click pe titluri, povești, scrisori, citate, glume, mesajul de final etc. și scrii direct peste. Apeși în afară / Enter ca să salvezi, Escape ca să anulezi.
- Cod greșit → apare „Petru Petru, chiar nu-ți place ce am scris...?” 😄

**Important:** ca modificările făcute așa să se vadă și pentru Petru (pe alt telefon), trebuie ca **Supabase să fie pornit** (vezi mai jos) și tabela `content` creată (rulează `supabase/schema.sql`). Fără Supabase, editările rămân doar pe browserul tău.

Codul se schimbă în `components/EditProvider.tsx` (`const SECRET = "185"`).

---

## Sau editezi din fișiere (clasic)

Tot ce ține de text și poze se schimbă în **2 fișiere**. Nu trebuie să știi să programezi — schimbi doar ce e între ghilimele `"..."`.

> După ce salvezi, dă commit + push (sau lasă Vercel să redeployeze automat) și în ~1 minut apar modificările pe site.

---

## 1. `lib/config.ts` — numele, mesajele mari, numărătoarea

| Ce vrei să schimbi | Câmpul |
|---|---|
| Numele prietenului (apare pe intro) | `friendName` |
| Numele tău (apare la final) | `yourName` |
| Rândul poetic de pe intro | `tagline` |
| Textul de pe buton | `openButton` |
| **Mesajul mare de suflet de la final** | `surprise.message` |
| Poza de la final | `surprise.photo` |
| Textul de deasupra numărătorii | `surprise.countdownLabel` |
| Data spre care numără (ziua lui etc.) | `surprise.countdownDate` |

Exemplu — schimbi mesajul de final:
```ts
message:
  "Aici scrii tu ce vrei să-i transmiți lui Petru. " +
  "Poți pune mai multe rânduri, unul după altul, cu + la capăt.",
```

---

## 2. `lib/data.ts` — amintirile, scrisorile, citatele, statisticile

### Amintirile (stelele)
Fiecare stea e un bloc ca ăsta. Schimbă `title`, `date`, `story`:
```ts
{
  id: "ziua",
  title: "La mulți ani, Petru",   // ← titlul
  date: "12 iulie 2025",          // ← data (text liber)
  story: "Aici scrii povestea reală a pozei.", // ← povestea
  image: "/memories/ziua.jpg",    // ← poza (vezi mai jos)
  x: 68, y: 33, size: 20,         // ← poziția pe cer (0–100)
},
```
- **Schimbi poza:** pune altă poză în `public/memories/` cu **exact același nume** (ex. `ziua.jpg`).
- **Adaugi o stea nouă:** copiază un bloc întreg, schimbă `id` (unic), textul și poza, apoi alege `x`/`y` liber (0–100).
- **Ștergi o stea:** șterge blocul ei.

### Scrisorile („deschide când...”)
În lista `letters`. Schimbă `title` și `content`. Pune `unlockDate` gol (`""`) ca să fie mereu deschisă, sau o dată ISO ca s-o sigilezi până atunci.

### Citatele
Lista `quotes` — un rând = un citat. Adaugă/șterge rânduri cum vrei.

### Statisticile de haz
Lista `stats` — `label` = textul, `value` = procentul (0–100).

### Glumele interne
Lista `jokes` — un rând între ghilimele = o glumă. Adaugă câte vrei (pune virgulă la capăt).

### Data prieteniei (contorul de zile)
În `lib/config.ts`, câmpul `friendshipStart` (ex. `"2023-09-01"`).

---

## Diacriticele (ă â î ș ț)
Se pot scrie direct, funcționează. Salvează fișierul ca **UTF-8** (editorul o face implicit).

Gata. Restul (animații, stele, aurora) merge de la sine. 💛
