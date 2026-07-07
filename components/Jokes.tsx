"use client";

import { motion } from "framer-motion";
import { jokes } from "@/lib/data";

const EMOJI = ["😄", "🔥", "💀", "😭", "🤣", "🫡", "👀"];

export default function Jokes() {
  if (jokes.length === 0) return null;
  return (
    <section id="glume" className="relative mx-auto w-full max-w-4xl px-4 py-20">
      <h2 className="text-center font-display text-4xl font-medium gradient-text sm:text-5xl">
        Glume interne
      </h2>
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        doar ale noastre · fără supărare, miticule
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {jokes.map((j, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: i % 2 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="glass flex items-start gap-3 rounded-2xl p-5"
          >
            <span className="text-2xl">{EMOJI[i % EMOJI.length]}</span>
            <p className="font-hand text-xl leading-snug text-[var(--star)]/90">{j}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
