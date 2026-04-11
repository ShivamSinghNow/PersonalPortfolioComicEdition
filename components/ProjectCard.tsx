"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  span?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  accent,
  span = "",
}: ProjectCardProps) {
  return (
    <motion.div
      className={`comic-panel comic-panel-hover p-0 flex flex-col ${span}`}
      whileHover={{
        scale: 1.03,
        boxShadow: "8px 8px 0px #000000, 0 0 30px rgba(255, 215, 0, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Illustration placeholder */}
      <div
        className="relative w-full aspect-[16/10] flex items-center justify-center"
        style={{ backgroundColor: accent + "22" }}
      >
        <div className="benday-dots absolute inset-0" />
        <span
          className="font-bangers text-3xl md:text-4xl relative z-10"
          style={{ color: accent }}
        >
          {title}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bangers text-xl md:text-2xl text-comic-black mb-2">
          {title}
        </h3>
        <p className="font-comic text-sm text-comic-black/75 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-bangers text-xs px-2 py-1 border-2 border-comic-black bg-comic-yellow/20 text-comic-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className="font-bangers text-lg px-4 py-2 bg-comic-black text-comic-yellow border-2 border-comic-black
                     hover:bg-comic-yellow hover:text-comic-black transition-colors duration-200 self-start"
        >
          READ MORE &raquo;
        </button>
      </div>
    </motion.div>
  );
}
