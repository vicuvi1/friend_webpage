"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarField from "./StarField";
import Intro from "./Intro";
import Constellation from "./Constellation";
import MemoryModal from "./MemoryModal";
import Quotes from "./Quotes";
import Stats from "./Stats";
import Jokes from "./Jokes";
import FriendshipCounter from "./FriendshipCounter";
import Letters from "./Letters";
import Guestbook from "./Guestbook";
import Contacts from "./Contacts";
import Finale from "./Finale";
import FloatingNav from "./FloatingNav";
import EditProvider from "./EditProvider";
import { memories } from "@/lib/data";
import { config } from "@/lib/config";
import { enableAudio, playOpen, startAmbient, playStar, setMuted, getMutedInitial } from "@/lib/sound";

export default function Experience() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);

  const open = useCallback(() => {
    setOpened(true);
    setFlash(true);
    setTimeout(() => setFlash(false), 1300);
    // pornește sunetul (gest de user -> autoplay permis)
    setMuted(getMutedInitial());
    enableAudio();
    playOpen();
    startAmbient();
  }, []);

  const select = useCallback((i: number) => {
    playStar();
    setIndex(i);
  }, []);

  const random = useCallback(() => {
    if (!memories.length) return;
    select(Math.floor(Math.random() * memories.length));
  }, [select]);

  return (
    <EditProvider>
    <main className="night-sky relative min-h-screen w-full overflow-x-hidden">
      <StarField />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!opened ? (
            <Intro key="intro" onOpen={open} />
          ) : (
            <motion.div
              key="book"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Constellation onSelect={select} />
              <Quotes />
              <Divider />
              <FriendshipCounter />
              <Divider />
              <Stats />
              <Divider />
              <Jokes />
              <Divider />
              <Letters />
              <Divider />
              <Guestbook />
              <Divider />
              <Contacts />
              <Divider />
              <Finale />
              <footer className="pb-24 text-center text-xs tracking-widest text-[var(--star)]/40">
                ✦ făcut cu drag, de {config.yourName} ✦
              </footer>

              <FloatingNav onRandom={random} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* efectul mare de la deschidere: un val de lumină */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[65]"
            initial={{ opacity: 0.9, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,233,184,0.9), rgba(157,180,255,0.4) 40%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      <MemoryModal
        memories={memories}
        index={index}
        onNavigate={setIndex}
        onClose={() => setIndex(null)}
      />
    </main>
    </EditProvider>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
  );
}
