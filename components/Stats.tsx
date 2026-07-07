"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import Editable from "./Editable";

export default function Stats() {
  if (stats.length === 0) return null;
  return (
    <section className="relative mx-auto w-full max-w-2xl px-4 py-20">
      <Editable as="h2" id="ui.stats.title" value="Statistici oficiale" className="block text-center font-display text-4xl font-medium gradient-text sm:text-5xl" />
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        cifre 100% neverificate
      </p>

      <div className="mt-12 space-y-6">
        {stats.map((s, i) => (
          <div key={s.label}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <Editable id={`stat.${i}.label`} value={s.label} className="text-[var(--star)]/90" />
              <span className="shrink-0 font-hand text-xl text-[var(--gold)]">{s.value}%</span>
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
