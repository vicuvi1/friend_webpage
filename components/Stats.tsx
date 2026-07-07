"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  if (stats.length === 0) return null;
  return (
    <section className="relative mx-auto w-full max-w-2xl px-4 py-20">
      <h2 className="text-center font-display text-4xl font-medium gradient-text sm:text-5xl">
        Statistici oficiale
      </h2>
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        cifre 100% neverificate
      </p>

      <div className="mt-12 space-y-6">
        {stats.map((s, i) => (
          <div key={s.label}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-[var(--star)]/90">{s.label}</span>
              <span className="font-hand text-xl text-[var(--gold)]">{s.value}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min(100, Math.max(0, s.value))}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--accent), var(--gold))",
                  boxShadow: "0 0 14px rgba(255,217,138,0.5)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
