"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";
import PowerBar from "./PowerBar";

const CATEGORIES = [
  {
    name: "ML & AI",
    color: "#FFD700",
    stats: [
      { label: "PYTHON",                level: 95 },
      { label: "PYTORCH / TENSORFLOW",  level: 88 },
      { label: "LANGCHAIN / LANGGRAPH", level: 90 },
    ],
  },
  {
    name: "FRAMEWORKS & DATA",
    color: "#00D4FF",
    stats: [
      { label: "NEXT.JS / TYPESCRIPT",     level: 85 },
      { label: "SQL (POSTGRES / SQLITE)",   level: 82 },
      { label: "RAG / VECTOR DATABASES",    level: 88 },
    ],
  },
  {
    name: "INFRASTRUCTURE",
    color: "#FF3333",
    stats: [
      { label: "AWS (LAMBDA, EC2, S3)",       level: 75 },
      { label: "DOCKER / GIT / DEVOPS",       level: 80 },
      { label: "FASTAPI / FLASK / STREAMLIT", level: 85 },
    ],
  },
];

const MOVES = [
  { name: "AGENT ARCHITECT",   desc: "Multi-agent LLM systems from scratch"   },
  { name: "RAG MASTERY",       desc: "Sub-2s retrieval, 95%+ relevance"       },
  { name: "PIPELINE FORGE",    desc: "End-to-end ML pipelines, production-grade" },
  { name: "FULL-STACK DEPLOY", desc: "Idea → shipped app with real users"     },
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
          CHAPTER 4: POWER STATS
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
                  CLASS: AI/ML ENGINEER
                </div>
              </div>

              {/* Stats table */}
              <div
                className="space-y-1.5 text-xs font-comic text-comic-paper/70
                           border-t-2 border-comic-paper/20 pt-3"
              >
                {[
                  ["LEVEL",      <span className="text-comic-yellow font-bangers" key="l">MAX</span>],
                  ["EDUCATION",  <span className="text-comic-cyan font-bangers"   key="e">UCSB &apos;26</span>],
                  ["ALIGNMENT",  <span className="text-comic-paper font-bangers"  key="a">CHAOTIC GOOD</span>],
                  ["ROLE TYPE",  <span className="text-comic-red font-bangers"    key="r">RESEARCHER &amp; BUILDER</span>],
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
            <div className="space-y-6">
              {CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 border-2 border-comic-black flex-shrink-0"
                      style={{ background: cat.color, boxShadow: "1px 1px 0 #000" }}
                    />
                    <h3
                      className="font-bangers text-sm md:text-base tracking-widest text-comic-black/80 uppercase"
                      style={{ borderBottom: `2px solid ${cat.color}`, paddingBottom: "2px" }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    {cat.stats.map((s) => (
                      <PowerBar key={s.label} label={s.label} level={s.level} color={cat.color} />
                    ))}
                  </div>
                </div>
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
