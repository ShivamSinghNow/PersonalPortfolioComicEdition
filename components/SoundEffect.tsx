"use client";

import { motion } from "framer-motion";

interface SoundEffectProps {
  text: string;
  color?: string;
  rotation?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "text-4xl md:text-5xl",
  md: "text-6xl md:text-8xl",
  lg: "text-7xl md:text-9xl",
  xl: "text-8xl md:text-[10rem]",
};

export default function SoundEffect({
  text,
  color = "#FFD700",
  rotation = 0,
  className = "",
  size = "md",
}: SoundEffectProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-20 ${className}`}
      initial={{ scale: 0, rotate: rotation - 18, opacity: 0 }}
      whileInView={{ scale: 1, rotate: rotation, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 14,
        delay: 0.08,
      }}
      aria-hidden="true"
    >
      {/* Radial glow burst */}
      <div
        className="absolute inset-0 -m-6 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}55 0%, transparent 65%)`,
          filter: "blur(6px)",
        }}
      />
      <span
        className={`sound-effect ${sizes[size]} relative z-10 italic`}
        style={{ color }}
      >
        {text}
      </span>
    </motion.div>
  );
}
