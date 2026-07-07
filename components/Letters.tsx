"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { letters, type Letter } from "@/lib/data";

function isLocked(letter: Letter) {
  if (!letter.unlockDate) return false;
  return new Date(letter.unlockDate).getTime() > Date.now();
}

function unlockLabel(letter: Letter) {
  if (!letter.unlockDate) return "";
  return new Date(letter.unlockDate).toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Letters() {
  const [open, setOpen] = useState<Letter | null>(null);

  return (
    <section className="relative mx-auto w-full max-w-4xl px-4 py-20">
      <h2 className="text-center font-display text-4xl font-medium text-glow sm:text-5xl">
        Scrisori pentru mai târziu
      </h2>
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        deschide-le când e momentul potrivit
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {letters.map((l, i) => {
          const locked = isLocked(l);
          return (
            <motion.button
              key={l.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={locked ? {} : { y: -4, scale: 1.02 }}
              onClick={() => !locked && setOpen(l)}
              className={`glass group flex flex-col items-start gap-2 rounded-2xl p-6 text-left transition-colors ${
                locked
                  ? "cursor-not-allowed opacity-60"
                  : "hover:border-[var(--gold)]/50"
              }`}
            >
              <span className="text-3xl">{locked ? "🔒" : "✉️"}</span>
              <span className="font-display text-2xl font-medium">{l.title}</span>
              {locked ? (
                <span className="font-hand text-lg text-[var(--accent)]">
                  sigilată până pe {unlockLabel(l)}
                </span>
              ) : (
                <span className="text-sm tracking-wide text-[var(--gold)]/80 opacity-0 transition-opacity group-hover:opacity-100">
                  atinge ca să deschizi →
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 w-full max-w-xl rounded-sm bg-[#f7f3e8] p-8 text-[#2a2620] shadow-2xl sm:p-12"
              initial={{ scale: 0.8, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-5 top-4 text-[#2a2620]/50 hover:text-[#2a2620]"
              >
                ✕
              </button>
              <p className="font-hand text-2xl text-[#7a5c1e]">{open.title}</p>
              <p className="mt-6 whitespace-pre-line font-hand text-2xl leading-relaxed">
                {open.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
