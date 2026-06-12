import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        display: ["var(--font-dancing)", "cursive"],
      },
      colors: {
        night: {
          900: "#0b0723",
          800: "#1a1142",
          700: "#2a1a5e",
        },
        blush: "#ff9ecd",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) scale(0.8)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "100%": { transform: "translateY(-110vh) scale(1.2)", opacity: "0" },
        },
        drift: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 40px 8px rgba(255,158,205,0.35)" },
          "50%": { boxShadow: "0 0 70px 16px rgba(255,158,205,0.55)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        floatUp: "floatUp 9s linear infinite",
        drift: "drift 60s linear infinite",
        glow: "glow 4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
