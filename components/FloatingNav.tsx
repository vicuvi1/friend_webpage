"use client";

import { motion } from "framer-motion";

const LINKS = [
  { id: "constelatie", label: "Stele" },
  { id: "cronologie", label: "Poveste" },
  { id: "glume", label: "Glume" },
  { id: "scrisori", label: "Scrisori" },
  { id: "oaspeti", label: "Oaspeți" },
];

export default function FloatingNav({ onRandom }: { onRandom: () => void }) {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="glass fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 text-sm shadow-2xl"
    >
      {LINKS.map((l) => (
        <button
          key={l.id}
          onClick={() => go(l.id)}
          className="rounded-full px-3 py-1.5 text-[var(--star)]/80 transition-colors hover:bg-white/10 hover:text-[var(--gold)]"
        >
          {l.label}
        </button>
      ))}
      <button
        onClick={onRandom}
        aria-label="O amintire la întâmplare"
        title="O amintire la întâmplare"
        className="ml-1 rounded-full bg-[var(--gold)]/90 px-3 py-1.5 text-[#1a1400] transition hover:bg-[var(--gold)]"
      >
        🎲
      </button>
    </motion.nav>
  );
}
