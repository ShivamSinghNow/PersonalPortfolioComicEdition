"use client";

import { motion } from "framer-motion";

export default function SplashHero() {
  const scrollToOrigin = () => {
    document.getElementById("origin")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated action lines background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[200vmax] h-[200vmax] animate-action-lines opacity-30"
          style={{
            background: `repeating-conic-gradient(
              #0a0a1a 0deg 2deg,
              transparent 2deg 8deg
            )`,
          }}
        />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, #0a0a1a 80%)",
        }}
      />

      {/* Ben-Day dot texture */}
      <div className="absolute inset-0 benday-dots" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-bangers text-6xl sm:text-7xl md:text-9xl text-comic-yellow comic-heading mb-4">
            SHIVAM SINGH
          </h1>
        </motion.div>

        <motion.p
          className="font-bangers text-xl sm:text-2xl md:text-4xl text-comic-cyan tracking-wide mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          AI / ML Engineer &bull; Full-Stack Developer
        </motion.p>

        <motion.p
          className="font-comic text-base sm:text-lg md:text-xl text-comic-paper/80 max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Building intelligent systems and shipping products — from
          multi-agent LLM pipelines to full-stack web apps.
        </motion.p>

        <motion.button
          onClick={scrollToOrigin}
          className="comic-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START READING &rarr;
        </motion.button>
      </div>

      {/* Decorative corner panels */}
      <div className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24 border-panel border-comic-yellow/40 rotate-3" />
      <div className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 border-panel border-comic-red/40 -rotate-3" />
    </section>
  );
}
