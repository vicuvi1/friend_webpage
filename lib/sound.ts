/* Motor de sunet sintetizat (Web Audio) — fără fișiere, merge offline.
 * Pad ambiental blând + „cling"-uri de steluță pe scală pentatonică. */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let padGain: GainNode | null = null;
let started = false;
let muted = false;

const MASTER = 0.5;
// Do major pentatonic (C5..C6) — sună mereu bine împreună
const NOTES = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

function ensure(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : MASTER;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function bell(freq: number, when: number, dur = 2.4, vol = 0.22) {
  if (!ctx || !master) return;
  const o = ctx.createOscillator();
  const o2 = ctx.createOscillator();
  o.type = "sine";
  o2.type = "sine";
  o.frequency.value = freq;
  o2.frequency.value = freq * 2.01; // armonic ușor detunat -> clopoțel
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(vol, when + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  const g2 = ctx.createGain();
  g2.gain.setValueAtTime(0.0001, when);
  g2.gain.exponentialRampToValueAtTime(vol * 0.4, when + 0.012);
  g2.gain.exponentialRampToValueAtTime(0.0001, when + dur * 0.7);
  o.connect(g).connect(master);
  o2.connect(g2).connect(master);
  o.start(when);
  o2.start(when);
  o.stop(when + dur + 0.1);
  o2.stop(when + dur + 0.1);
}

/** Apelabil dintr-un gest de user (click) ca să pornească audio. */
export function enableAudio() {
  ensure();
}

/** Arpegiu ascendent la deschiderea cărții. */
export function playOpen() {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime;
  [0, 2, 4, 5].forEach((i, k) => bell(NOTES[i], t + k * 0.12, 2.6, 0.26));
}

/** „Cling" de steluță când se deschide o amintire. */
export function playStar() {
  const c = ensure();
  if (!c) return;
  const n = NOTES[Math.floor(Math.random() * NOTES.length)];
  bell(n, c.currentTime, 1.8, 0.22);
}

/** Pornește pad-ul ambiental + steluțe rare, la intervale. */
export function startAmbient() {
  const c = ensure();
  if (!c || !master || started) return;
  started = true;

  padGain = c.createGain();
  padGain.gain.value = 0.05;
  const filter = c.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 700;
  padGain.connect(filter).connect(master);

  // pad: două sine joase (A2 + E3) care „respiră"
  [110, 164.81].forEach((f) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    o.connect(padGain!);
    o.start();
  });
  // LFO lent care mișcă volumul pad-ului
  const lfo = c.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoGain = c.createGain();
  lfoGain.gain.value = 0.03;
  lfo.connect(lfoGain).connect(padGain.gain);
  lfo.start();

  // steluțe ocazionale (rulează cât timp e deschis site-ul)
  setInterval(() => {
    if (!muted && ctx && ctx.state === "running") {
      bell(NOTES[Math.floor(Math.random() * NOTES.length)], ctx.currentTime, 2.2, 0.08);
    }
  }, 4200);
}

export function setMuted(m: boolean) {
  muted = m;
  if (master && ctx) master.gain.setTargetAtTime(m ? 0 : MASTER, ctx.currentTime, 0.05);
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("friend-muted", m ? "1" : "0");
    } catch {}
  }
}

export function getMutedInitial(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("friend-muted") === "1";
  } catch {
    return false;
  }
}
