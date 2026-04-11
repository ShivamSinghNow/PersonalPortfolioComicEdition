import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "comic-bg": "#0a0a1a",
        "comic-paper": "#fffef0",
        "comic-yellow": "#FFD700",
        "comic-red": "#FF3333",
        "comic-cyan": "#00D4FF",
        "comic-black": "#000000",
        "comic-orange": "#FF6B35",
        "comic-green": "#39FF14",
        "comic-purple": "#BF5FFF",
      },
      fontFamily: {
        bangers: ["var(--font-bangers)", "cursive"],
        comic: ["var(--font-comic-neue)", "cursive"],
      },
      borderWidth: {
        "panel": "5px",
        "panel-sm": "3px",
        "panel-lg": "7px",
      },
      boxShadow: {
        "panel": "6px 6px 0px #000000",
        "panel-sm": "4px 4px 0px #000000",
        "panel-lg": "8px 8px 0px #000000",
        "panel-hover": "9px 9px 0px #000000, 0 0 24px rgba(255, 215, 0, 0.2)",
        "panel-inset": "inset 3px 3px 0px rgba(0,0,0,0.25)",
      },
      animation: {
        "action-lines": "action-lines-spin 20s linear infinite",
        "action-lines-fast": "action-lines-spin 8s linear infinite",
        "panel-slam": "panel-slam 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "float": "float 4s ease-in-out infinite",
        "flicker": "flicker 0.15s steps(1) infinite",
      },
      keyframes: {
        "action-lines-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "panel-slam": {
          "0%":   { transform: "scale(1.12) rotate(-3deg)", opacity: "0" },
          "60%":  { transform: "scale(0.97) rotate(0.8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
