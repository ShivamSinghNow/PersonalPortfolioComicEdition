"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";

// Directions panels fly in from when they enter the viewport
const ENTRY: { x: number; y: number; rot: number }[] = [
  { x: -90, y:   0, rot: -2 },   // big hero panel — from left
  { x:   0, y: -70, rot:  1.5 }, // top-right — drops in
  { x:  80, y:   0, rot: -1 },   // bottom-right — from right
  { x:   0, y:  60, rot:  0 },   // wide strip — rises up
];

export default function OriginStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const p = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      p.current.forEach((el, i) => {
        if (!el) return;
        const { x, y, rot } = ENTRY[i] ?? { x: 0, y: 40, rot: 0 };

        gsap.fromTo(
          el,
          { x, y, opacity: 0, rotation: rot },
          {
            x: 0, y: 0, opacity: 1, rotation: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="comic-page-section">

      {/* Chapter heading */}
      <div className="mb-4 md:mb-5 text-center">
        <h2 className="comic-heading font-bangers text-comic-yellow text-4xl md:text-5xl lg:text-6xl">
          CHAPTER 1: THE ORIGIN
        </h2>
      </div>

      {/*
        Asymmetric panel grid — desktop:
        ┌──────────────────┬──────────┐
        │                  │  panel 2 │
        │   panel 1        ├──────────┤
        │  (2 col / 2 row) │  panel 3 │
        ├──────────────────┴──────────┤
        │          panel 4 (full)     │
        └─────────────────────────────┘
      */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto"
        style={{ gridTemplateRows: "auto auto auto" }}
      >

        {/* ── PANEL 1 — large hero panel (spans 2 cols × 2 rows) ── */}
        <div
          ref={(el) => { p.current[0] = el; }}
          className="md:col-span-2 md:row-span-2 comic-panel flex flex-col gpu"
          style={{ minHeight: 380 }}
        >
          <CaptionBox text="SOMEWHERE IN CYBERSPACE… A HERO EMERGES" variant="black" />

          {/* Art area — dark bg with action lines */}
          <div className="relative flex-1 bg-comic-bg overflow-hidden flex items-center justify-center p-6 md:p-10">
            <div className="absolute inset-0 benday-dots pointer-events-none" />

            {/* Radial speed lines */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none gpu"
            >
              <div
                className="w-[280%] h-[280%] opacity-10 gpu"
                style={{
                  background: `repeating-conic-gradient(
                    #FFD700 0deg 3deg, transparent 3deg 15deg
                  )`,
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Name as panel art */}
              <div
                className="font-bangers text-comic-yellow leading-none mb-5 md:mb-7"
                style={{
                  fontSize: "clamp(3rem, 9vw, 6.5rem)",
                  textShadow: "5px 5px 0 #000",
                  WebkitTextStroke: "2px #000",
                }}
              >
                SHIVAM<br />SINGH
              </div>

              {/* Speech bubble — using JSX tail so overflow:hidden can't clip it */}
              <div className="relative bg-comic-paper border-4 border-comic-black rounded-2xl p-4 md:p-6 mx-auto max-w-xs md:max-w-sm text-left"
                style={{ boxShadow: "4px 4px 0 #000" }}>
                <p className="font-comic text-sm md:text-base text-comic-black leading-relaxed">
                  &ldquo;I don&apos;t just write code — I&nbsp;
                  <strong>craft experiences</strong>
                  &nbsp;that people remember.&rdquo;
                </p>
                {/* Tail pointing down-left */}
                <div
                  className="absolute -bottom-[22px] left-7 w-0 h-0 pointer-events-none"
                  style={{
                    borderRight: "20px solid transparent",
                    borderTop: "22px solid #000",
                  }}
                />
                <div
                  className="absolute -bottom-[15px] left-[30px] w-0 h-0 pointer-events-none"
                  style={{
                    borderRight: "16px solid transparent",
                    borderTop: "18px solid #fffef0",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>

          <CaptionBox
            text="Full-stack developer crafting high-performance web experiences."
            variant="yellow"
            position="bottom"
          />
        </div>

        {/* ── PANEL 2 — origin story (top-right) ── */}
        <div
          ref={(el) => { p.current[1] = el; }}
          className="comic-panel flex flex-col gpu"
          style={{ transform: "rotate(1deg)" }}
        >
          <CaptionBox text="THE BEGINNING…" variant="red" />
          <div className="flex-1 p-4 md:p-5 bg-comic-paper">
            <h3 className="font-bangers text-2xl md:text-3xl text-comic-black mb-2">
              CHAPTER ONE
            </h3>
            <p className="font-comic text-sm md:text-base text-comic-black/80 leading-relaxed">
              It started with curiosity. A kid who wanted to know{" "}
              <em>how things worked</em>. A broken laptop became the first
              battleground — and the first classroom.
            </p>
          </div>
        </div>

        {/* ── PANEL 3 — training (bottom-right) ── */}
        <div
          ref={(el) => { p.current[2] = el; }}
          className="comic-panel flex flex-col gpu"
          style={{ transform: "rotate(-1deg)" }}
        >
          <CaptionBox text="LEVEL UP!" variant="blue" />
          <div className="flex-1 p-4 md:p-5 bg-comic-paper">
            <h3 className="font-bangers text-2xl md:text-3xl text-comic-black mb-2">
              THE TRAINING ARC
            </h3>
            <p className="font-comic text-sm md:text-base text-comic-black/80 leading-relaxed">
              CS degree. Side projects at 2&nbsp;am. Hackathons. Internships.
              Every challenge forged a stronger skill set and a deeper love for
              building things that matter.
            </p>
          </div>
        </div>

        {/* ── PANEL 4 — wide caption strip ── */}
        <div
          ref={(el) => { p.current[3] = el; }}
          className="md:col-span-3 comic-panel-dark border-panel border-comic-black
                     flex items-center gap-4 md:gap-8 px-4 md:px-8 py-4 md:py-5 gpu"
          style={{ boxShadow: "6px 6px 0 #000" }}
        >
          <span className="font-bangers text-comic-yellow text-3xl md:text-5xl opacity-25 flex-shrink-0">
            →
          </span>
          <p className="font-bangers text-comic-yellow text-base md:text-xl xl:text-2xl tracking-wide leading-snug">
            NOW ARMED WITH THE FULL STACK —&nbsp;
            REACT &bull; NODE.JS &bull; PYTHON &bull; TYPESCRIPT &bull; AWS &bull; POSTGRESQL
          </p>
          <span className="font-bangers text-comic-yellow text-3xl md:text-5xl opacity-25 flex-shrink-0 ml-auto">
            →
          </span>
        </div>
      </div>
    </section>
  );
}
