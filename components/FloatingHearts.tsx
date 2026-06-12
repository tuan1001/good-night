"use client";

import { useEffect, useState } from "react";

type Heart = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
};

const EMOJIS = ["💖", "💕", "💗", "🩷", "✨"];

/**
 * Những trái tim bay nhẹ nhàng từ dưới lên trên màn hình.
 */
export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const count = 14;
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 9,
      duration: Math.random() * 5 + 7,
      size: Math.random() * 14 + 16,
      emoji: EMOJIS[i % EMOJIS.length],
    }));
    setHearts(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute bottom-0 animate-floatUp select-none"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
