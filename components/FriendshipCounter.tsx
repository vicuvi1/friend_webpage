"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";

function useDays(from: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    // intenționat: calculăm timpul doar pe client (altfel diferă server/client)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const start = new Date(from).getTime();
  const diff = Math.max(0, now - start);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function FriendshipCounter() {
  const t = useDays(config.friendshipStart);

  return (
    <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--star)]/50">
        Suntem frați de
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4"
      >
        <span className="font-display text-7xl font-medium gradient-text sm:text-8xl">
          {t ? t.days.toLocaleString("ro-RO") : "…"}
        </span>
        <span className="ml-3 font-display text-3xl text-[var(--star)]/70">zile</span>
      </motion.div>
      {t && (
        <p className="mt-4 font-hand text-xl text-[var(--accent)]">
          adică {t.hours}h {t.minutes}m {t.seconds}s de când te suport, mititelule 😄
        </p>
      )}
      <p className="mt-2 text-xs tracking-widest text-[var(--star)]/40">
        …și numărăm de pe 1 septembrie 2023
      </p>
    </section>
  );
}
