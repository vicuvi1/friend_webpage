"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fetchOverrides, saveOverride, isSupabaseEnabled } from "@/lib/supabase";

const SECRET = "185"; // codul secret pentru editare (îl poți schimba aici)
const LS_UNLOCK = "friend-edit-unlocked";
const LS_OVERRIDES = "friend-overrides";

type EditCtx = {
  unlocked: boolean;
  get: (key: string, fallback: string) => string;
  set: (key: string, value: string) => void;
  requestUnlock: () => void;
};

const Ctx = createContext<EditCtx | null>(null);
export const useEdit = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useEdit în afara EditProvider");
  return c;
};

export default function EditProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [unlocked, setUnlocked] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  // încarcă editările (localStorage imediat, apoi Supabase)
  useEffect(() => {
    try {
      const ls = localStorage.getItem(LS_OVERRIDES);
      if (ls) setOverrides(JSON.parse(ls));
      if (localStorage.getItem(LS_UNLOCK) === "1") setUnlocked(true);
    } catch {}
    if (isSupabaseEnabled) {
      fetchOverrides().then((remote) => {
        if (Object.keys(remote).length) {
          setOverrides((prev) => ({ ...prev, ...remote }));
        }
      });
    }
  }, []);

  const get = useCallback(
    (key: string, fallback: string) => overrides[key] ?? fallback,
    [overrides]
  );

  const set = useCallback((key: string, value: string) => {
    setOverrides((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(LS_OVERRIDES, JSON.stringify(next));
      } catch {}
      return next;
    });
    saveOverride(key, value); // salvare globală (dacă Supabase e pornit)
  }, []);

  const requestUnlock = useCallback(() => {
    setError(null);
    setCode("");
    setPromptOpen(true);
  }, []);

  const submit = () => {
    if (code.trim() === SECRET) {
      setUnlocked(true);
      try {
        localStorage.setItem(LS_UNLOCK, "1");
      } catch {}
      setPromptOpen(false);
    } else {
      setError("Petru Petru, chiar nu-ți place ce am scris de vrei să schimbi? 👀");
    }
  };

  return (
    <Ctx.Provider value={{ unlocked, get, set, requestUnlock }}>
      {children}

      {unlocked && (
        <div className="fixed left-4 top-4 z-[70] rounded-full bg-[var(--gold)]/90 px-3 py-1 text-xs font-medium text-[#1a1400] shadow-lg">
          ✎ mod editare — dublu-click pe text
        </div>
      )}

      <AnimatePresence>
        {promptOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPromptOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative z-10 w-full max-w-sm rounded-3xl p-7 text-center"
            >
              <p className="font-display text-2xl text-[var(--gold)]">Cod secret</p>
              <p className="mt-1 text-sm text-[var(--star)]/60">
                doar Victor poate edita textul
              </p>
              <input
                autoFocus
                type="password"
                inputMode="numeric"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError(null);
                }}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                placeholder="• • •"
                className="mt-5 w-full rounded-xl bg-black/25 px-4 py-3 text-center text-2xl tracking-[0.4em] text-[var(--star)] outline-none ring-1 ring-white/10 focus:ring-[var(--gold)]/60"
              />
              {error && (
                <p className="mt-3 font-hand text-lg text-[var(--rose)]">{error}</p>
              )}
              <button
                onClick={submit}
                className="mt-5 w-full rounded-full bg-[var(--gold)]/90 py-2.5 font-medium text-[#1a1400] transition hover:bg-[var(--gold)]"
              >
                Deblochează
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
