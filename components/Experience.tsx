"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarField from "./StarField";
import Intro from "./Intro";
import Constellation from "./Constellation";
import MemoryModal from "./MemoryModal";
import Quotes from "./Quotes";
import Timeline from "./Timeline";
import Stats from "./Stats";
import Jokes from "./Jokes";
import FriendshipCounter from "./FriendshipCounter";
import Letters from "./Letters";
import Guestbook from "./Guestbook";
import Finale from "./Finale";
import FloatingNav from "./FloatingNav";
import { memories } from "@/lib/data";
import { config } from "@/lib/config";

export default function Experience() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  const random = useCallback(() => {
    setIndex(Math.floor(Math.random() * memories.length));
  }, []);

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
              <Constellation onSelect={setIndex} />
              <Quotes />
              <Divider />
              <FriendshipCounter />
              <Divider />
              <Timeline onSelect={setIndex} />
              <Divider />
              <Stats />
              <Divider />
              <Jokes />
              <Divider />
              <Letters />
              <Divider />
              <Guestbook />
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

      <MemoryModal
        memories={memories}
        index={index}
        onNavigate={setIndex}
        onClose={() => setIndex(null)}
      />
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
  );
}
