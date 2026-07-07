"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  addMessage,
  fetchMessages,
  isSupabaseEnabled,
  type GuestMessage,
} from "@/lib/supabase";

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (isSupabaseEnabled) fetchMessages().then(setMessages);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const res = await addMessage(name, text);
    if (res.ok) {
      setText("");
      setStatus("Adăugat pe cer ✨");
      setMessages(await fetchMessages());
    } else {
      setStatus(res.error ?? "Ceva n-a mers");
    }
    setSending(false);
  }

  return (
    <section className="relative mx-auto w-full max-w-3xl px-4 py-20">
      <h2 className="text-center font-display text-4xl font-medium text-glow sm:text-5xl">
        Lasă un gând
      </h2>
      <p className="mt-3 text-center text-sm tracking-widest text-[var(--star)]/60">
        fiecare vizită e o altă amintire
      </p>

      {!isSupabaseEnabled ? (
        <div className="glass mt-10 rounded-2xl p-6 text-center text-[var(--star)]/70">
          <p className="text-lg">Cartea de oaspeți nu e conectată încă.</p>
          <p className="mt-2 text-sm">
            Adaugă cheile de Supabase (vezi README) și mesajele vor apărea aici —
            puteți scrie amândoi în ea ani de zile.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={submit} className="glass mt-10 rounded-2xl p-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Numele tău"
              maxLength={60}
              className="w-full rounded-lg bg-black/20 px-4 py-2 text-[var(--star)] outline-none ring-1 ring-white/10 focus:ring-[var(--gold)]/50"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Scrie ceva…"
              maxLength={500}
              rows={3}
              className="mt-3 w-full resize-none rounded-lg bg-black/20 px-4 py-2 text-[var(--star)] outline-none ring-1 ring-white/10 focus:ring-[var(--gold)]/50"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-[var(--accent)]">{status}</span>
              <button
                type="submit"
                disabled={sending}
                className="rounded-full bg-[var(--gold)]/90 px-6 py-2 text-sm font-medium text-[#1a1400] transition hover:bg-[var(--gold)] disabled:opacity-50"
              >
                {sending ? "Se trimite…" : "Semnează cerul"}
              </button>
            </div>
          </form>

          <div className="scroll-thin mt-8 max-h-96 space-y-3 overflow-y-auto pr-1">
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-hand text-xl text-[var(--gold)]">{m.name}</span>
                  <span className="text-xs text-[var(--star)]/40">
                    {new Date(m.created_at).toLocaleDateString("ro-RO")}
                  </span>
                </div>
                <p className="mt-1 text-[var(--star)]/85">{m.message}</p>
              </motion.div>
            ))}
            {messages.length === 0 && (
              <p className="text-center text-[var(--star)]/50">
                Fii primul care scrie ceva.
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
