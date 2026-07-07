"use client";

import { motion } from "framer-motion";
import { memories, type Memory } from "@/lib/data";

export default function Constellation({
  onSelect,
}: {
  onSelect: (m: Memory) => void;
}) {
  return (
    <section className="relative mx-auto min-h-screen w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-medium text-glow sm:text-5xl"
      >
        Our constellation
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60"
      >
        touch a star to open the memory
      </motion.p>

      {/* The sky canvas */}
      <div className="relative mt-10 h-[64vh] min-h-[420px] w-full">
        {/* faint connecting lines between the stars, in order */}
        <StarLines />

        {memories.map((m, i) => (
          <MemoryStar key={m.id} m={m} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

/* SVG uses a 0–100 viewBox so x/y percentages map directly. */
function StarLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      <polyline
        points={memories.map((m) => `${m.x} ${m.y}`).join(" ")}
        fill="none"
        stroke="rgba(157,180,255,0.25)"
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
  onSelect: (m: Memory) => void;
}) {
  const size = m.size ?? 14;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.25, duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.4 }}
      onClick={() => onSelect(m)}
      className="memory-star group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${index * 0.6}s` }}
      aria-label={`${m.title} — ${m.date}`}
    >
      <span
        className="block rounded-full bg-[var(--gold)]"
        style={{
          width: size,
          height: size,
          animation: "pulse-glow 3.5s ease-in-out infinite",
          animationDelay: `${index * 0.5}s`,
        }}
      />
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-hand text-base text-[var(--star)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {m.title}
      </span>
    </motion.button>
  );
}
