"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";
import PowerBar from "./PowerBar";

const STATS = [
  { label: "REACT / NEXT.JS",       level: 92, color: "#00D4FF" },
  { label: "TYPESCRIPT",             level: 88, color: "#00D4FF" },
  { label: "NODE.JS / EXPRESS",      level: 85, color: "#00D4FF" },
  { label: "PYTHON / FASTAPI",       level: 80, color: "#FFD700" },
  { label: "POSTGRESQL / MONGODB",   level: 78, color: "#FFD700" },
  { label: "AWS / CLOUD",            level: 72, color: "#FFD700" },
  { label: "UI / UX DESIGN",         level: 75, color: "#FF3333" },
  { label: "GIT / CI-CD / DEVOPS",   level: 82, color: "#FF3333" },
  { label: "SYSTEM DESIGN",          level: 70, color: "#FF3333" },
];

const MOVES = [
  { name: "INFINITE SCROLL",   desc: "Full-stack app from idea to production" },
  { name: "DEBUG VISION",      desc: "Root cause in minutes, not hours"       },
  { name: "API FUSION",        desc: "Connects any service to any service"    },
  { name: "PERF BOOST",        desc: "Sub-second load times — always"         },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const p = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      p.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="comic-page-section">

      {/* Chapter heading */}
      <div className="mb-4 md:mb-5 text-center">
        <h2 className="comic-heading font-bangers text-comic-cyan text-4xl md:text-5xl lg:text-6xl">
          CHAPTER 3: POWER STATS
        </h2>
      </div>

      {/*
        Grid — desktop:
        ┌──────────────┬──────────────────────────┐
        │ char card    │  power bars (2 cols)      │
        │ (1 col)      │                           │
        └──────────────┴──────────────────────────┘
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

        {/* ── Character card ── */}
        <div
          ref={(el) => { p.current[0] = el; }}
          className="comic-panel flex flex-col gpu"
        >
          <CaptionBox text="CHARACTER PROFILE — CLASSIFIED" variant="black" />

          <div className="flex-1 p-4 md:p-5 bg-comic-paper flex flex-col">

            {/* ID card */}
            <div
              className="bg-comic-bg border-4 border-comic-black p-4 mb-4"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              {/* Avatar */}
              <div className="text-center mb-3">
                <div
                  className="w-16 h-16 mx-auto bg-comic-yellow border-4 border-comic-black mb-2
                             flex items-center justify-center"
                  style={{ boxShadow: "3px 3px 0 #000" }}
                >
                  <span className="font-bangers text-comic-black text-2xl">SS</span>
                </div>
                <div className="font-bangers text-comic-yellow text-xl leading-tight">
                  SHIVAM SINGH
                </div>
                <div className="font-comic text-comic-paper/50 text-xs mt-0.5">
                  CLASS: FULL-STACK DEV
                </div>
              </div>

              {/* Stats table */}
              <div
                className="space-y-1.5 text-xs font-comic text-comic-paper/70
                           border-t-2 border-comic-paper/20 pt-3"
              >
                {[
                  ["LEVEL",      <span className="text-comic-yellow font-bangers" key="l">MAX</span>],
                  ["EXPERIENCE", <span className="text-comic-cyan font-bangers"   key="e">+5 YRS</span>],
                  ["ALIGNMENT",  <span className="text-comic-paper font-bangers"  key="a">CHAOTIC GOOD</span>],
                  ["ROLE TYPE",  <span className="text-comic-red font-bangers"    key="r">BUILDER</span>],
                ].map(([key, val]) => (
                  <div key={key as string} className="flex justify-between items-center">
                    <span>{key}</span>
                    {val}
                  </div>
                ))}
              </div>
            </div>

            {/* Special moves */}
            <h3
              className="font-bangers text-comic-black text-base md:text-lg mb-3 tracking-wide"
              style={{ borderBottom: "3px solid #000", paddingBottom: "4px" }}
            >
              SPECIAL MOVES
            </h3>

            <div className="space-y-2.5">
              {MOVES.map((m) => (
                <div key={m.name} className="flex gap-2 items-start">
                  <span className="text-comic-red font-bangers text-sm flex-shrink-0 mt-0.5">▶</span>
                  <div>
                    <span className="font-bangers text-comic-black text-sm block leading-tight">
                      {m.name}
                    </span>
                    <span className="font-comic text-comic-black/55 text-xs">
                      {m.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Power bar stat sheet (spans 2 cols) ── */}
        <div
          ref={(el) => { p.current[1] = el; }}
          className="md:col-span-2 comic-panel flex flex-col gpu"
        >
          <CaptionBox text="POWER LEVEL ANALYSIS — TOP SECRET" variant="red" />

          <div className="flex-1 p-5 md:p-6 md:p-7 bg-comic-paper">
            <div className="space-y-3 md:space-y-4">
              {STATS.map((s) => (
                <PowerBar key={s.label} {...s} />
              ))}
            </div>
          </div>

          <CaptionBox
            text="THESE LEVELS ARE ALWAYS UPGRADING. LAST CALIBRATED: TODAY."
            variant="blue"
            position="bottom"
          />
        </div>
      </div>
    </section>
  );
}
