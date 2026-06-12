"use client";

import { useEffect, useState } from "react";

type Particle = {
  tx: number;
  ty: number;
  rot: number;
  size: number;
  delay: number;
  emoji: string;
};

const EMOJIS = ["❤️", "💖", "💕", "💗", "✨", "💞"];

/**
 * Pháo trái tim: khi `trigger` đổi giá trị, một loạt trái tim bung ra
 * từ tâm rồi bay tản ra mọi hướng và mờ dần.
 */
export default function HeartBurst({ trigger }: { trigger: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;

    const count = 18;
    const generated: Particle[] = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const distance = 90 + Math.random() * 90;
      return {
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        rot: (Math.random() - 0.5) * 180,
        size: Math.random() * 14 + 18,
        delay: Math.random() * 0.12,
        emoji: EMOJIS[i % EMOJIS.length],
      };
    });
    setParticles(generated);

    const timeout = setTimeout(() => setParticles([]), 1200);
    return () => clearTimeout(timeout);
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-0 w-0"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="heart-particle absolute left-0 top-0 select-none"
          style={
            {
              fontSize: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              "--rot": `${p.rot}deg`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
