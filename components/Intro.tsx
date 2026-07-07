"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

export default function Intro({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="font-hand text-2xl text-[var(--accent)]"
      >
        pentru
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1.4 }}
        className="font-display text-6xl font-medium tracking-wide text-glow sm:text-7xl md:text-8xl"
      >
        {config.friendName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 2, duration: 1.6 }}
        className="mt-6 max-w-md font-display text-xl italic text-[var(--star)]/80 sm:text-2xl"
      >
        {config.tagline}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 1 }}
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="glass mt-12 rounded-full px-8 py-3 text-sm uppercase tracking-[0.2em] text-[var(--star)] transition-colors hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
      >
        {config.openButton}
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-8 text-xs tracking-widest text-[var(--star)]/40"
      >
        ✦ derulează ușor ✦
      </motion.div>
    </motion.div>
  );
}
