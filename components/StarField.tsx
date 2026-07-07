"use client";

import { useMemo } from "react";

/* Pseudo-random determinist ca serverul și clientul să deseneze la fel. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const COLORS = ["#ffffff", "#eaf0ff", "#cdd7ff", "#ffe9b8", "#ffd1e6"];

export default function StarField({ count = 380, shooting = 5 }: { count?: number; shooting?: number }) {
  const stars = useMemo(() => {
    const rand = seeded(1337);
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: rand() * 2.4 + 0.5,
      delay: rand() * 5,
      duration: rand() * 3.5 + 1.8,
      opacity: rand() * 0.6 + 0.25,
      color: COLORS[Math.floor(rand() * COLORS.length)],
    }));
  }, [count]);

  const meteors = useMemo(() => {
    const rand = seeded(99);
    return Array.from({ length: shooting }, () => ({
      left: rand() * 70 + 20,
      top: rand() * 40,
      delay: rand() * 14,
      duration: rand() * 6 + 8,
    }));
  }, [shooting]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora" />
      <div className="moon" />

      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            opacity: s.opacity,
            boxShadow: s.size > 2 ? `0 0 ${s.size * 2}px ${s.color}` : undefined,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {meteors.map((m, i) => (
        <span
          key={`m${i}`}
          className="shooting"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
