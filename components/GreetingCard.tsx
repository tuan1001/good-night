"use client";

import { useState } from "react";
import { content } from "@/app/content";
import HeartBurst from "@/components/HeartBurst";

/**
 * Card trung tâm với hiệu ứng glassmorphism.
 * Bấm nút CTA để hiện lời nhắn bí mật kèm hiệu ứng fade-in.
 */
export default function GreetingCard() {
  const [revealed, setRevealed] = useState(false);
  const [burst, setBurst] = useState(0);

  const handleReveal = () => {
    setRevealed(true);
    setBurst((n) => n + 1);
  };

  return (
    <div className="relative z-10 w-full max-w-md px-5">
      <div className="relative animate-glow rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Pháo trái tim bung ra từ giữa card */}
        <HeartBurst trigger={burst} />
        {/* Icon mặt trăng + sao */}
        <div className="mb-4 text-4xl sm:text-5xl" aria-hidden="true">
          <span className="inline-block animate-floaty">🌙</span>
          <span className="mx-1 align-top text-2xl">✨</span>
        </div>

        {/* Tiêu đề lớn */}
        <h1 className="font-display text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(255,158,205,0.5)] sm:text-5xl">
          {content.title}
        </h1>

        {/* Phụ đề */}
        <p className="mt-4 text-base leading-relaxed text-pink-100/90 sm:text-lg">
          {content.subtitle}
        </p>

        {/* Nút CTA */}
        {!revealed && (
          <button
            type="button"
            onClick={handleReveal}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-400/50 active:scale-95"
          >
            <span className="transition-transform duration-300 group-hover:scale-125">
              💝
            </span>
            {content.buttonLabel}
          </button>
        )}

        {/* Lời nhắn bí mật */}
        {revealed && (
          <div className="mt-8 animate-fadeInUp">
            <div className="rounded-2xl border border-pink-200/30 bg-pink-300/10 p-5">
              <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
                {content.secretMessage}
              </p>
              <button
                type="button"
                onClick={() => setBurst((n) => n + 1)}
                className="mt-3 text-2xl transition-transform duration-200 hover:scale-125 active:scale-90"
                aria-label="Bắn thêm trái tim"
              >
                💗💋💗
              </button>
            </div>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="mt-5 text-sm text-pink-100/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              Ẩn lời chúc
            </button>
          </div>
        )}
      </div>

      {/* Chữ ký — web này chỉ dành riêng cho một người */}
      <p className="mt-6 text-center font-display text-2xl text-pink-100/90 drop-shadow-[0_1px_8px_rgba(255,158,205,0.45)] sm:text-3xl">
        {content.signatureName}
      </p>
    </div>
  );
}
