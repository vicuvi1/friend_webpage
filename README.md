# 🌌 A little sky, just for you

A personal "memory constellation" website — a gift. The night sky is full of stars,
and each glowing star is a memory you two share. Click one to open the photo and the
story. There are sealed letters that unlock on future dates, a guestbook you can both
write in for years, and a final surprise with a countdown to your next memory.

Built with **Next.js 16 + TypeScript + Tailwind + Framer Motion + Supabase**. Runs
entirely on free tiers.

---

## ✨ Make it yours (the only 3 things you need to do)

Everything personal lives in **two files** plus a **photos folder**.

### 1. Your friend, your words → `lib/config.ts`
Name, the intro line, the closing message, and the countdown date.

### 2. The memories → `lib/data.ts`
Each star is one entry: title, date, story, photo, and where it sits in the sky
(`x`/`y`, both 0–100). Also the "open when…" letters live here.

### 3. The photos → `public/memories/`
Drop your photos in and name them to match `lib/data.ts`
(`met.jpg`, `trip.jpg`, `finale.jpg`, …). Missing photos show a soft placeholder,
so nothing ever breaks while you're still collecting them.

> That's it. You don't have to touch anything else to have a complete, beautiful gift.

---

## 🚀 Run it on your computer

```bash
npm install
npm run dev
```

Open the link it prints (http://localhost:3000) — in development it jumps straight
into the experience.

---

## 🔒 The secret link

There's no password screen. Instead, the whole site lives at a long, unguessable URL:

```
https://your-site.vercel.app/aurora-quiet-river-8f3k2j9x
```

The bare domain just shows a quiet 🌙 — only the secret link opens the real thing.

Set your own secret with the `SITE_SECRET` env var (locally in `.env.local`, and in
Vercel). Make it long and random. Share it with your friend when you're ready.

---

## 💬 Guestbook (Supabase) — optional, ~5 minutes

The site works without this; the guestbook just stays disabled until you connect it.

1. Create a free project at [supabase.com](https://supabase.com).
2. In **SQL Editor → New query**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and **Run**.
3. In **Project Settings → API**, copy the **Project URL** and the **anon public** key.
4. Create a file named `.env.local` (copy from `.env.example`) and fill in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
5. Restart `npm run dev`. The guestbook is now live.

---

## 🌍 Put it online (free, ~5 minutes)

1. Push this repo to GitHub (already done if you're reading this there).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import this repo.
3. Under **Environment Variables**, add:
   - `SITE_SECRET` = your long secret slug
   - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if using the guestbook)
4. **Deploy.** Your link is `https://<project>.vercel.app/<SITE_SECRET>`.

---

## 🧩 What's inside

| Piece | File |
|------|------|
| Personal settings (name, message, countdown) | `lib/config.ts` |
| Memories + letters | `lib/data.ts` |
| Photos | `public/memories/` |
| Cinematic intro | `components/Intro.tsx` |
| The constellation | `components/Constellation.tsx` |
| Memory popup (Polaroid) | `components/MemoryModal.tsx` |
| "Open when…" letters | `components/Letters.tsx` |
| Guestbook | `components/Guestbook.tsx` |
| One Last Surprise + countdown | `components/Finale.tsx` |

## 💡 Ideas to add later
The sky is built to grow. Easy next stars: a song per memory, a random-memory button,
hidden Easter eggs, a birthday mode that changes the colors on their birthday. Just add
more entries to `lib/data.ts` and the constellation fills in on its own.

Made with love. ✦
