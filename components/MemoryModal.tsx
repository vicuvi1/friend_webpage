"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Memory } from "@/lib/data";
import Editable from "./Editable";

export default function MemoryModal({
  memories,
  index,
  onNavigate,
  onClose,
}: {
  memories: Memory[];
  index: number | null;
  onNavigate: (i: number) => void;
  onClose: () => void;
}) {
  const memory = index === null ? null : memories[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % memories.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + memories.length) % memories.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, memories.length, onNavigate, onClose]);

  return (
    <AnimatePresence>
      {memory && index !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          {/* săgeți navigare */}
          <NavArrow
            side="left"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + memories.length) % memories.length);
            }}
          />
          <NavArrow
            side="right"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % memories.length);
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={memory.id}
              className="glass relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8"
              initial={{ scale: 0.9, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                aria-label="Închide"
                className="absolute right-4 top-4 z-20 text-[var(--star)]/60 transition-colors hover:text-[var(--gold)]"
              >
                ✕
              </button>

              <Polaroid memory={memory} />

              <Editable as="p" id={`memory.${memory.id}.date`} value={memory.date} className="mt-5 block font-hand text-xl text-[var(--gold)]" />
              <Editable as="h2" id={`memory.${memory.id}.title`} value={memory.title} className="block font-display text-3xl font-medium" />
              <Editable as="p" id={`memory.${memory.id}.story`} value={memory.story} multiline className="mt-3 block whitespace-pre-line leading-relaxed text-[var(--star)]/80" />

              <p className="mt-5 text-center text-xs tracking-widest text-[var(--star)]/40">
                {index + 1} / {memories.length} &nbsp;·&nbsp; folosește ← → sau săgețile
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavArrow({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Anterioara" : "Următoarea"}
      className={`glass absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-xl text-[var(--star)] transition-colors hover:text-[var(--gold)] ${
        side === "left" ? "left-3 sm:left-8" : "right-3 sm:right-8"
      }`}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}

function Polaroid({ memory }: { memory: Memory }) {
  // `broken` se resetează singur: modalul remontează Polaroid la fiecare
  // amintire (parintele are key={memory.id}).
  const [broken, setBroken] = useState(false);
  return (
    <motion.div
      initial={{ rotate: -2 }}
      whileHover={{ rotate: 0, scale: 1.01 }}
      className="mx-auto w-fit rounded-sm bg-[#f7f5ee] p-3 pb-5 shadow-2xl"
    >
      <div className="relative h-64 w-72 overflow-hidden bg-gradient-to-br from-[#1b2660] to-[#05060f] sm:w-80">
        {!broken ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={memory.image}
            alt={memory.title}
            decoding="async"
            onError={() => setBroken(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-[var(--star)]/70">
            <span className="text-3xl">✦</span>
            <span className="px-4 text-xs tracking-wide">
              pune poza în <code className="text-[var(--gold)]">public{memory.image}</code>
            </span>
          </div>
        )}
      </div>
      <p className="mt-2 text-center font-hand text-lg text-[#2a2a2a]">{memory.title}</p>
    </motion.div>
  );
}
