"use client";

import { useMemo } from "react";

/* Deterministic pseudo-random so SSR and client match (no hydration errors). */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export default function StarField({ count = 140 }: { count?: number }) {
  const stars = useMemo(() => {
    const rand = seeded(42);
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: rand() * 2 + 0.6,
      delay: rand() * 4,
      duration: rand() * 3 + 2,
      opacity: rand() * 0.5 + 0.3,
    }));
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
