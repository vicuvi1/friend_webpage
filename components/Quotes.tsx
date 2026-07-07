"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "@/lib/data";
import { useEdit } from "./EditProvider";
import Editable from "./Editable";

export default function Quotes() {
  const [i, setI] = useState(0);
  const { unlocked } = useEdit();

  useEffect(() => {
    if (quotes.length < 2 || unlocked) return; // nu roti în mod editare
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, [unlocked]);

  if (quotes.length === 0) return null;

  return (
    <section className="relative mx-auto flex min-h-[38vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <span className="mb-6 text-4xl text-[var(--gold)]/70">❝</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.8 }}
        >
          <Editable
            as="p"
            id={`quote.${i}`}
            value={quotes[i]}
            multiline
            className="font-display text-2xl italic leading-relaxed text-[var(--star)]/90 sm:text-3xl"
          />
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex gap-2">
        {quotes.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Citatul ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              k === i ? "w-6 bg-[var(--gold)]" : "w-1.5 bg-[var(--star)]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
