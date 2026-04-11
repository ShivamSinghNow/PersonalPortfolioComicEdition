"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";

const PROJECTS = [
  {
    title: "CYBER SENTINEL",
    subtitle: "Real-Time Dashboard",
    description:
      "A real-time threat-detection dashboard built with Next.js and WebSockets. Monitors network traffic and visualises anomalies at blazing speed.",
    tags: ["Next.js", "WebSocket", "D3.js"],
    accent: "#FFD700",
    bg: "#141000",
    issue: "#1",
    href: "#",
    featured: true,
  },
  {
    title: "PIXEL FORGE",
    subtitle: "AI Image Generator",
    description:
      "Turns text prompts into comic-style artwork using Stable Diffusion. FastAPI backend, React frontend.",
    tags: ["Python", "FastAPI", "React"],
    accent: "#FF3333",
    bg: "#140000",
    issue: "#2",
    href: "#",
    featured: false,
  },
  {
    title: "STACK OVERFLOW",
    subtitle: "Developer Platform",
    description:
      "Full-stack social platform for devs — real-time collaboration and syntax highlighting.",
    tags: ["TypeScript", "PostgreSQL", "Redis"],
    accent: "#00D4FF",
    bg: "#00101a",
    issue: "#3",
    href: "#",
    featured: false,
  },
  {
    title: "QUANTUM QUEST",
    subtitle: "Browser Game",
    description:
      "Retro-style browser game with procedurally generated levels and a chiptune soundtrack.",
    tags: ["Canvas API", "JavaScript"],
    accent: "#FF6B35",
    bg: "#140a00",
    issue: "#4",
    href: "#",
    featured: false,
  },
  {
    title: "DATA STORM",
    subtitle: "CLI Pipeline Tool",
    description:
      "Rapid data pipeline prototyping — ingest, transform, and visualise CSV/JSON in seconds.",
    tags: ["Go", "SQLite"],
    accent: "#39FF14",
    bg: "#001400",
    issue: "#5",
    href: "#",
    featured: false,
  },
  {
    title: "ECHO CHAMBER",
    subtitle: "Encrypted Messaging",
    description:
      "E2E-encrypted messaging with disappearing messages, voice notes, and a custom emoji system.",
    tags: ["React Native", "Node.js"],
    accent: "#BF5FFF",
    bg: "#0a0014",
    issue: "#6",
    href: "#",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;

        const fromX = i === 0 ? -60 : i % 2 === 0 ? 50 : -50;

        gsap.fromTo(
          el,
          { x: fromX, y: 40, opacity: 0, scale: 0.96 },
          {
            x: 0, y: 0, opacity: 1, scale: 1,
            duration: 0.6,
            delay: (i % 3) * 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = PROJECTS[0];
  const sideTwo  = PROJECTS.slice(1, 3);
  const bottomFour = PROJECTS.slice(3);

  return (
    <section id="projects" ref={sectionRef} className="comic-page-section">

      {/* Chapter heading */}
      <div className="mb-4 md:mb-5 text-center">
        <h2 className="comic-heading font-bangers text-comic-red text-4xl md:text-5xl lg:text-6xl">
          CHAPTER 2: PROJECT FILES
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-3 md:space-y-4">

        {/*
          Top row — desktop:
          ┌──────────────────────┬────────┐
          │     FEATURED         │ side 1 │
          │    (col-span-2)      ├────────┤
          │                      │ side 2 │
          └──────────────────────┴────────┘
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

          {/* Featured — large */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="md:col-span-2 border-panel border-comic-black relative overflow-hidden
                       cursor-pointer group gpu comic-panel-hover"
            style={{ minHeight: 300, background: featured.bg, boxShadow: "6px 6px 0 #000" }}
          >
            <CaptionBox text={`FEATURED STORY — ISSUE ${featured.issue}`} variant="yellow" />

            {/* Benday dots in accent colour */}
            <div
              className="absolute inset-0 benday-dots-color pointer-events-none"
              style={{ color: featured.accent }}
            />

            <div className="relative z-10 p-5 md:p-8 flex flex-col h-full" style={{ minHeight: 260 }}>
              <div className="flex-1">
                <div
                  className="font-bangers leading-none mb-1"
                  style={{
                    fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                    color: featured.accent,
                    textShadow: "4px 4px 0 #000",
                    WebkitTextStroke: "1.5px #000",
                  }}
                >
                  {featured.title}
                </div>
                <p className="font-bangers text-comic-paper/50 text-base md:text-lg mb-3 tracking-wide">
                  {featured.subtitle}
                </p>
                <p className="font-comic text-comic-paper/85 text-sm md:text-base leading-relaxed max-w-lg">
                  {featured.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="font-bangers text-xs px-2 py-0.5 border-2 border-comic-black tracking-widest"
                    style={{ background: featured.accent, color: "#000", boxShadow: "1px 1px 0 #000" }}
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={featured.href}
                  className="ml-auto font-bangers text-sm px-4 py-1 border-2 border-comic-black
                             bg-comic-paper text-comic-black hover:bg-comic-yellow transition-colors duration-150"
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  VIEW PROJECT →
                </a>
              </div>
            </div>
          </div>

          {/* Side panels — stacked */}
          <div className="flex flex-col gap-3 md:gap-4">
            {sideTwo.map((proj, i) => (
              <div
                key={proj.title}
                ref={(el) => { cardRefs.current[i + 1] = el; }}
                className="flex-1 border-panel border-comic-black relative overflow-hidden
                           cursor-pointer group gpu comic-panel-hover"
                style={{ background: proj.bg, minHeight: 140, boxShadow: "5px 5px 0 #000" }}
              >
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className="font-bangers text-xl md:text-2xl mb-1"
                      style={{ color: proj.accent, textShadow: "2px 2px 0 #000" }}
                    >
                      {proj.title}
                    </div>
                    <p className="font-comic text-comic-paper/70 text-xs md:text-sm leading-snug">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="font-bangers text-xs px-1.5 py-0.5 border-2 tracking-widest"
                        style={{
                          borderColor: proj.accent,
                          color: proj.accent,
                          background: proj.accent + "22",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — 4 equal panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {bottomFour.map((proj, i) => (
            <div
              key={proj.title}
              ref={(el) => { cardRefs.current[i + 3] = el; }}
              className="border-panel border-comic-black relative overflow-hidden
                         cursor-pointer group gpu comic-panel-hover"
              style={{ background: proj.bg, minHeight: 170, boxShadow: "4px 4px 0 #000" }}
            >
              <div className="relative z-10 p-3 md:p-4 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="font-bangers text-lg md:text-xl mb-1 leading-tight"
                    style={{ color: proj.accent, textShadow: "2px 2px 0 #000" }}
                  >
                    {proj.title}
                  </div>
                  <p className="font-comic text-comic-paper/65 text-xs leading-snug line-clamp-3">
                    {proj.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="font-bangers text-xs px-1.5 py-0.5 border"
                      style={{
                        borderColor: proj.accent,
                        color: proj.accent,
                        background: proj.accent + "18",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
