"use client";

import { motion } from "framer-motion";

const TECH = ["PYTHON", "PYTORCH", "LANGCHAIN", "NEXT.JS", "TYPESCRIPT", "AWS"];

export default function ComicCover() {
  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col overflow-hidden bg-comic-bg"
    >
      {/* ── Publisher header bar ─────────────────── */}
      <div className="comic-issue-header z-20">
        <span className="font-bangers text-comic-yellow tracking-widest text-sm md:text-base">
          ★ SHIVAM STUDIOS PRESENTS ★
        </span>
        <div className="font-comic text-xs flex items-center gap-2 md:gap-3 text-comic-paper/70">
          <span>VOL.&nbsp;1</span>
          <span className="text-comic-paper/30">·</span>
          <span>ISSUE #001</span>
          <span className="text-comic-paper/30">·</span>
          <span>$3.99</span>
        </div>
      </div>

      {/* ── Main cover panel ─────────────────────── */}
      <div
        className="flex-1 relative m-3 md:m-4 border-panel border-comic-black overflow-hidden gpu"
        style={{ boxShadow: "8px 8px 0px #000000" }}
      >
        {/* Spinning action lines — GPU layer */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none gpu">
          <div
            className="w-[200vmax] h-[200vmax] animate-action-lines gpu"
            style={{
              background: `repeating-conic-gradient(
                #FFD700 0deg 1.5deg,
                transparent 1.5deg 7deg
              )`,
              opacity: 0.1,
            }}
          />
        </div>

        {/* Diagonal color-band background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(155deg,
              #FF3333 0%,   #FF3333 28%,
              #0a0a1a 28%,  #0a0a1a 55%,
              #00D4FF 55%,  #00D4FF 100%
            )`,
            opacity: 0.07,
          }}
        />

        {/* Ben-Day dots */}
        <div className="absolute inset-0 benday-dots pointer-events-none" />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 35%, #0a0a1a 88%)",
          }}
        />

        {/* ── Cover content ──────────────────────── */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-16 text-center">

          {/* Origin badge */}
          <motion.div
            className="mb-5 md:mb-7 bg-comic-red text-comic-paper font-bangers text-xs md:text-sm
                       tracking-widest px-5 py-1.5 border-2 border-comic-black"
            style={{ boxShadow: "3px 3px 0 #000" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            ★&nbsp;&nbsp;ALL-NEW!&nbsp;&nbsp;ORIGIN ISSUE&nbsp;&nbsp;★
          </motion.div>

          {/* Hero name */}
          <div className="relative">
            <motion.div
              className="font-bangers leading-none tracking-wider text-comic-yellow"
              style={{
                fontSize: "clamp(3.5rem, 16vw, 13rem)",
                textShadow:
                  "6px 6px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
                WebkitTextStroke: "2px #000",
              }}
              initial={{ scale: 0.55, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
            >
              SHIVAM
            </motion.div>

            <motion.div
              className="font-bangers leading-none tracking-wider text-comic-paper"
              style={{
                fontSize: "clamp(3.5rem, 16vw, 13rem)",
                textShadow:
                  "6px 6px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
                WebkitTextStroke: "2px #000",
              }}
              initial={{ scale: 0.55, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.4,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
            >
              SINGH
            </motion.div>
          </div>

          {/* Title banner */}
          <motion.div
            className="mt-6 md:mt-8 mb-7 md:mb-10 bg-comic-black text-comic-yellow
                       font-bangers text-base md:text-2xl xl:text-3xl px-8 md:px-12
                       py-3 tracking-wider"
            style={{ border: "4px solid #FFD700", boxShadow: "5px 5px 0 #FFD700" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            AI / ML ENGINEER&nbsp;&nbsp;•&nbsp;&nbsp;FULL-STACK DEVELOPER
          </motion.div>

          {/* Tech badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-9 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {TECH.map((t) => (
              <span
                key={t}
                className="font-bangers text-xs md:text-sm bg-comic-paper text-comic-black
                           px-3 py-1 border-2 border-comic-black tracking-widest"
                style={{ boxShadow: "2px 2px 0 #000" }}
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={() =>
              document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
            }
            className="comic-btn"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            OPEN ISSUE #001 &darr;
          </motion.button>
        </div>

        {/* Decorative corner marks */}
        <div className="absolute top-3 left-3 w-14 h-14 border-4 border-comic-yellow/25 rotate-3 pointer-events-none" />
        <div className="absolute top-3 right-3 w-10 h-10 border-4 border-comic-red/30 -rotate-6 pointer-events-none" />
        <div className="absolute bottom-6 right-5 w-18 h-18 border-4 border-comic-cyan/20 rotate-12 pointer-events-none" />
      </div>

      {/* ── Publisher footer bar ─────────────────── */}
      <div
        className="flex-shrink-0 bg-comic-yellow border-t-4 border-comic-black
                   flex items-center justify-between px-4 md:px-6 py-2 z-20"
      >
        <span className="font-bangers text-comic-black tracking-widest text-xs md:text-sm">
          &ldquo;THE MOST EXCITING ML ENGINEER IN PRINT&rdquo;
        </span>
        <span className="text-comic-black text-sm md:text-base tracking-widest">★★★★★</span>
        <span className="font-comic text-comic-black text-xs hidden sm:block">
          UCSB &apos;26 — STATS &amp; DATA SCIENCE
        </span>
      </div>
    </section>
  );
}
