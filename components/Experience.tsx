"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarField from "./StarField";
import Intro from "./Intro";
import Constellation from "./Constellation";
import MemoryModal from "./MemoryModal";
import Letters from "./Letters";
import Guestbook from "./Guestbook";
import Finale from "./Finale";
import type { Memory } from "@/lib/data";

export default function Experience() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <main className="night-sky relative min-h-screen w-full overflow-x-hidden">
      <StarField />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!opened ? (
            <Intro key="intro" onOpen={() => setOpened(true)} />
          ) : (
            <motion.div
              key="book"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Constellation onSelect={setSelected} />
              <Divider />
              <Letters />
              <Divider />
              <Guestbook />
              <Divider />
              <Finale />
              <footer className="pb-12 text-center text-xs tracking-widest text-[var(--star)]/40">
                ✦ made with love ✦
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MemoryModal memory={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
  );
}
