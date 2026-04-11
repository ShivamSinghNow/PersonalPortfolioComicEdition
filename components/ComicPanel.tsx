"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ComicPanelProps {
  children: ReactNode;
  rotation?: number;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
  panelNumber?: number;
}

export default function ComicPanel({
  children,
  rotation = 0,
  className = "",
  hoverEffect = true,
  dark = false,
  panelNumber,
}: ComicPanelProps) {
  return (
    <motion.div
      className={`
        ${dark ? "comic-panel-dark" : "comic-panel"}
        ${hoverEffect ? "comic-panel-hover" : ""}
        relative
        ${className}
      `}
      style={{ rotate: rotation, boxShadow: "6px 6px 0px #000000" }}
      whileHover={hoverEffect ? { scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {panelNumber !== undefined && (
        <div className="absolute top-2 right-2.5 z-10 font-bangers text-xs opacity-20 pointer-events-none">
          {panelNumber}
        </div>
      )}
      {children}
    </motion.div>
  );
}
