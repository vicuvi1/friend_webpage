"use client";

import { motion } from "framer-motion";
import { memories, type Memory } from "@/lib/data";
import Editable from "./Editable";

export default function Constellation({
  onSelect,
}: {
  onSelect: (index: number) => void;
}) {
  return (
    <section id="constelatie" className="relative mx-auto min-h-screen w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-medium gradient-text sm:text-5xl"
      >
        <Editable id="ui.constellation.title" value="Constelația noastră" />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60"
      >
        atinge o stea ca să deschizi amintirea
      </motion.p>

      <div className="relative mt-10 h-[68vh] min-h-[440px] w-full">
        <StarLines />
        {memories.map((m, i) => (
          <MemoryStar key={m.id} m={m} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

/* Liniile care leagă stelele — viewBox 0–100 ca să mapeze procentele direct. */
function StarLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <polyline
        points={memories.map((m) => `${m.x} ${m.y}`).join(" ")}
        fill="none"
        stroke="rgba(157,180,255,0.22)"
        strokeWidth="0.3"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="1.5 1.5"
      />
    </svg>
  );
}

function MemoryStar({
  m,
  index,
  onSelect,
}: {
  m: Memory;
  index: number;
  onSelect: (index: number) => void;
}) {
  const size = m.size ?? 15;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.7, type: "spring" }}
      whileHover={{ scale: 1.45 }}
      onClick={() => onSelect(index)}
      className="memory-star group absolute"
      style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${index * 0.5}s` }}
      aria-label={`${m.title} — ${m.date}`}
    >
      {/* halou exterior */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-md"
        style={{ width: size * 2.6, height: size * 2.6, background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />
      {/* steaua */}
      <span
        className="relative block rounded-full bg-[var(--gold)]"
        style={{
          width: size,
          height: size,
          animation: "pulse-glow 3.5s ease-in-out infinite",
          animationDelay: `${index * 0.4}s`,
        }}
      />
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-hand text-base text-[var(--star)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {m.title}
      </span>
    </motion.button>
  );
}
