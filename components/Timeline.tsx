"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { memories } from "@/lib/data";

export default function Timeline({ onSelect }: { onSelect: (index: number) => void }) {
  return (
    <section id="cronologie" className="relative mx-auto w-full max-w-4xl px-4 py-20">
      <h2 className="text-center font-display text-4xl font-medium gradient-text sm:text-5xl">
        Firul poveștii
      </h2>
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        de la prima poză până azi
      </p>

      <div className="relative mt-14">
        {/* linia verticală */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--accent)]/40 to-transparent sm:left-1/2" />

        <div className="space-y-8">
          {memories.map((m, i) => (
            <Row key={m.id} index={i} left={i % 2 === 0} onSelect={onSelect} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  m,
  index,
  left,
  onSelect,
}: {
  m: (typeof memories)[number];
  index: number;
  left: boolean;
  onSelect: (i: number) => void;
}) {
  const [broken, setBroken] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex items-center gap-4 pl-12 sm:pl-0 ${
        left ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      {/* nod pe linie */}
      <span className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--gold)] sm:left-1/2"
        style={{ boxShadow: "0 0 12px 3px rgba(255,217,138,0.7)" }}
      />

      <button
        onClick={() => onSelect(index)}
        className="glass group flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-colors hover:border-[var(--gold)]/50 sm:w-[calc(50%-2rem)]"
      >
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[var(--bg-glow)]">
          {!broken ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.image} alt={m.title} onError={() => setBroken(true)} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[var(--gold)]/60">✦</div>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-hand text-lg text-[var(--gold)]">{m.date}</p>
          <p className="truncate font-display text-xl">{m.title}</p>
        </div>
      </button>
    </motion.div>
  );
}
