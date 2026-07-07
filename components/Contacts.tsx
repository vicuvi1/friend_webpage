"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";
import Editable from "./Editable";

export default function Contacts() {
  const { intro } = config.contact;
  const items = [...config.contact.items];
  if (items.length === 0) return null;

  return (
    <section id="contact" className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center">
      <Editable
        as="h2"
        id="ui.contact.title"
        value="Ține legătura"
        className="block font-display text-4xl font-medium gradient-text sm:text-5xl"
      />
      <Editable
        as="p"
        id="config.contact.intro"
        value={intro}
        multiline
        className="mx-auto mt-4 block max-w-xl font-display text-xl italic text-[var(--star)]/80"
      />

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {items.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="glass flex min-w-[200px] flex-col items-center gap-1 rounded-2xl px-6 py-5 transition-colors hover:border-[var(--gold)]/50"
          >
            <span className="text-3xl">{c.icon}</span>
            <span className="mt-1 text-xs uppercase tracking-widest text-[var(--star)]/50">
              {c.label}
            </span>
            <span className="font-hand text-2xl text-[var(--gold)]">{c.value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
