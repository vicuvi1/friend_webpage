"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Memory } from "@/lib/data";

export default function MemoryModal({
  memory,
  onClose,
}: {
  memory: Memory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            className="glass relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8"
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-[var(--star)]/60 transition-colors hover:text-[var(--gold)]"
            >
              ✕
            </button>

            <Polaroid memory={memory} />

            <p className="mt-5 font-hand text-xl text-[var(--gold)]">{memory.date}</p>
            <h2 className="font-display text-3xl font-medium">{memory.title}</h2>
            <p className="mt-3 leading-relaxed text-[var(--star)]/80">{memory.story}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Polaroid({ memory }: { memory: Memory }) {
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
            onError={() => setBroken(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-[var(--star)]/70">
            <span className="text-3xl">✦</span>
            <span className="px-4 text-xs tracking-wide">
              add <code className="text-[var(--gold)]">public{memory.image}</code>
            </span>
          </div>
        )}
      </div>
      <p className="mt-2 text-center font-hand text-lg text-[#2a2a2a]">{memory.title}</p>
    </motion.div>
  );
}
