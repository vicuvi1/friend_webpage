"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "@/lib/config";

function useCountdown(target: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, new Date(target).getTime() - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

export default function Finale() {
  const [open, setOpen] = useState(false);
  const [photoBroken, setPhotoBroken] = useState(false);
  const cd = useCountdown(config.surprise.countdownDate);

  return (
    <section id="final" className="relative flex flex-col items-center px-4 py-24">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(true)}
        className="glass rounded-full px-10 py-4 text-sm uppercase tracking-[0.25em] text-[var(--gold)] hover:border-[var(--gold)]/60"
        style={{ animation: "pulse-glow 3.5s ease-in-out infinite" }}
      >
        O ultimă surpriză
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-y-auto bg-black px-6 py-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="fixed right-6 top-6 text-white/50 hover:text-[var(--gold)]"
            >
              ✕
            </button>

            {!photoBroken ? (
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img
                src={config.surprise.photo}
                alt=""
                onError={() => setPhotoBroken(true)}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ delay: 0.8, duration: 3 }}
                className="max-h-[42vh] w-auto rounded-lg object-contain shadow-2xl"
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.8, duration: 2 }}
                className="text-6xl"
              >
                ✦
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.92, y: 0 }}
              transition={{ delay: 2.5, duration: 2 }}
              className="mt-8 max-w-xl font-display text-2xl italic leading-relaxed text-white/90"
            >
              {config.surprise.message}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 4, duration: 2 }}
              className="mt-10 font-hand text-2xl text-[var(--accent)]"
            >
              — {config.yourName}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              className="mt-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                {config.surprise.countdownLabel}
              </p>
              {cd && !cd.done && (
                <div className="mt-4 flex justify-center gap-4 sm:gap-6">
                  {[
                    ["zile", cd.days],
                    ["ore", cd.hours],
                    ["min", cd.minutes],
                    ["sec", cd.seconds],
                  ].map(([label, val]) => (
                    <div key={label as string} className="flex flex-col items-center">
                      <span className="font-display text-4xl text-[var(--gold)] sm:text-5xl">
                        {String(val).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {cd?.done && (
                <p className="mt-4 font-display text-3xl text-[var(--gold)]">
                  A sosit clipa. ❤️
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
