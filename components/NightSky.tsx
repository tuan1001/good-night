"use client";

import { useEffect, useState } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

/**
 * Bầu trời đêm: các ngôi sao lấp lánh sinh ngẫu nhiên ở phía client
 * (tránh hydration mismatch), cùng mặt trăng phát sáng và vài đám mây trôi nhẹ.
 */
export default function NightSky() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const count = 70;
    const generated: Star[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
    setStars(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Mặt trăng */}
      <div className="absolute right-8 top-10 sm:right-16 sm:top-16">
        <div className="relative h-20 w-20 animate-floaty sm:h-28 sm:w-28">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fff7d6] to-[#ffe08a] shadow-[0_0_60px_20px_rgba(255,224,138,0.45)]" />
          {/* Các hố trên mặt trăng */}
          <div className="absolute left-4 top-5 h-3 w-3 rounded-full bg-[#f0d27a]/70" />
          <div className="absolute right-5 top-8 h-4 w-4 rounded-full bg-[#f0d27a]/60" />
          <div className="absolute left-8 bottom-4 h-2 w-2 rounded-full bg-[#f0d27a]/70" />
        </div>
      </div>

      {/* Các ngôi sao lấp lánh */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.7)",
          }}
        />
      ))}

      {/* Mây trôi nhẹ */}
      <div className="absolute top-1/4 left-0 w-full">
        <div className="animate-drift text-5xl opacity-20 sm:text-7xl">☁️</div>
      </div>
      <div className="absolute top-2/3 left-0 w-full">
        <div
          className="animate-drift text-4xl opacity-10 sm:text-6xl"
          style={{ animationDelay: "-30s", animationDuration: "80s" }}
        >
          ☁️
        </div>
      </div>
    </div>
  );
}
