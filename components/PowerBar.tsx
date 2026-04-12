"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface PowerBarProps {
  label: string;
  level: number;
  color: string;
}

export default function PowerBar({ label, level, color }: PowerBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current || !fillRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleX: 0 },
        {
          scaleX: level / 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, barRef);

    return () => ctx.revert();
  }, [level]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bangers text-lg md:text-xl text-comic-black tracking-wider">
          {label}
        </span>
        <span
          className="font-bangers text-lg md:text-xl"
          style={{ color }}
        >
          {level}%
        </span>
      </div>
      <div className="power-bar-container">
        <div
          ref={fillRef}
          className="power-bar-fill"
          style={{
            backgroundColor: color,
            transform: "scaleX(0)",
          }}
        />
        {/* Notch markers */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-comic-black/20 last:border-r-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
