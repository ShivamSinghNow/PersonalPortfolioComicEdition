"use client";

import { motion } from "framer-motion";

interface ActionWordProps {
  word: string;
  color: string;
  href: string;
  label: string;
  delay?: number;
}

export default function ActionWord({
  word,
  color,
  href,
  label,
  delay = 0,
}: ActionWordProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-center group"
      initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 260,
        damping: 15,
      }}
      whileHover={{ scale: 1.15, rotate: 3 }}
      whileTap={{ scale: 0.9 }}
    >
      <span
        className="font-bangers text-4xl md:text-6xl block text-stroke"
        style={{ color }}
      >
        {word}
      </span>
      <span className="font-comic text-xs md:text-sm text-comic-black/70 mt-1 block group-hover:text-comic-black transition-colors">
        {label}
      </span>
    </motion.a>
  );
}
