"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";

const PROJECTS = [
  {
    title: "TRIBEMAP",
    subtitle: "Brain Response Prediction",
    description:
      "Predicts how the human brain responds to any image, video, or text using Meta's TRIBE v2 model. 20,484 cortical vertices visualized in real time via Three.js, powered by a trimodal encoding pipeline (V-JEPA2, Wav2Vec-BERT, LLaMA 3.2) on Modal GPUs with Claude-generated neural interpretations.",
    tags: ["TRIBE v2", "Three.js", "Modal", "Claude"],
    accent: "#BF5FFF",
    bg: "#0a0014",
    issue: "#1",
    href: "https://tribemap-ten.vercel.app/",
    featured: true,
  },
  {
    title: "BATTLE ANGEL",
    subtitle: "Google DeepMind I/O Hackathon",
    description:
      "Humanoid disaster-rescue RL agent — PPO policy trained across 8 MuJoCo gym environments on LIDAR, cameras, thermal & accelerometer inputs. Gemini 3.5 Flash generates unseen scenarios on the fly; live Three.js visualization. Built in 6 hours.",
    tags: ["PPO", "MuJoCo", "Gemini", "Three.js"],
    accent: "#FF4757",
    bg: "#140008",
    issue: "#10",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7465185948897533953/",
    featured: false,
  },
  {
    title: "DRISHTI",
    subtitle: "Offline TB Detection",
    description:
      "Vision-language chest X-ray screening for clinics without reliable bandwidth. Qwen2-VL fine-tuned on TBX11K with Grad-CAM heatmaps and an offline GGUF path for on-device inference.",
    tags: ["Qwen2-VL", "Grad-CAM", "GGUF", "Modal"],
    accent: "#00C9A7",
    bg: "#001210",
    issue: "#9",
    href: "https://drishti-demo.vercel.app/",
    featured: false,
  },
  {
    title: "SCARTISSUE",
    subtitle: "Regression Detection for Codebases",
    description:
      "Indexes a repo's git history of fixes and warns when a PR is about to reintroduce a regression your team already paid for. MCP server + web UI cross-reference every hunk against known scar patterns.",
    tags: ["MCP", "GitHub", "Anthropic", "Python"],
    accent: "#FF4466",
    bg: "#140008",
    issue: "#8",
    href: "https://scartissue.vercel.app/",
    featured: false,
  },
  {
    title: "CONNECTAI — VR CHARACTERS",
    subtitle: "UCSB Human-AI Interaction Lab",
    description:
      "RAG-based AI character system for a no-code VR platform — Mistral + ChromaDB NPCs with persistent episodic memory and real-time reasoning via JSON-based Unity integration.",
    tags: ["Mistral", "ChromaDB", "RAG", "Unity"],
    accent: "#FF3333",
    bg: "#140000",
    issue: "#5",
    href: "https://github.com/ShivamSinghNow",
    featured: false,
  },
  {
    title: "NEURIPS VISUAL AGENTS",
    subtitle: "UCSB Bionic Vision Lab",
    description:
      "Evaluation infrastructure for NeurIPS 2025 competition benchmarking 50+ visual agents against biological baselines using PyTorch and Weights & Biases.",
    tags: ["PyTorch", "W&B", "NeurIPS"],
    accent: "#FF6B35",
    bg: "#140a00",
    issue: "#6",
    href: "https://robustforaging.github.io/",
    featured: false,
  },
  {
    title: "MAIHEALTH PIPELINE",
    subtitle: "Voice-to-FHIR + RAG Chatbot",
    description:
      "Voice-to-FHIR pipeline achieving 94% extraction accuracy across 15+ medical entity types. Plus a RAG chatbot with LangChain & ChromaDB querying EHR data with <2s latency.",
    tags: ["LangChain", "ChromaDB", "FastAPI"],
    accent: "#FF6B35",
    bg: "#140a00",
    issue: "#7",
    href: "https://github.com/ShivamSinghNow",
    featured: false,
  },
  {
    title: "NEMOLENS",
    subtitle: "AI Video Study Companion",
    description:
      "Multimodal video analysis pipeline using NVIDIA Nemotron Nano 12B & local Whisper — parallel frame extraction, structured notes, quizzes & a voice assistant. Submitted to NVIDIA GTC 2026.",
    tags: ["NVIDIA", "Whisper", "Streamlit", "Python"],
    accent: "#39FF14",
    bg: "#001400",
    issue: "#4",
    href: "https://github.com/ShivamSinghNow/NemoLens",
    featured: false,
  },
  {
    title: "POWERTRACKER",
    subtitle: "AI Job Application Tracker",
    description:
      "Full-stack job tracker with AI-driven insights — Next.js 15, TypeScript, Tailwind, Postgres/Prisma, deployed on Vercel with 8 active users.",
    tags: ["Next.js", "TypeScript", "Prisma", "Anthropic"],
    accent: "#00D4FF",
    bg: "#00101a",
    issue: "#3",
    href: "https://v0-power-tracker.vercel.app/",
    featured: false,
  },
  {
    title: "MULTI-AGENT LLM TRADING",
    subtitle: "Crypto Intelligence System",
    description:
      "End-to-end multi-agent crypto trading system using LangGraph — 8 specialized LLM agents (GPT-4, Claude) via a shared state graph with production-grade data pipelines from YFinance, CoinGecko, Reddit & Binance.",
    tags: ["LangGraph", "GPT-4", "Claude", "Python"],
    accent: "#FFD700",
    bg: "#141000",
    issue: "#2",
    href: "https://github.com/ShivamSinghNow/JainCapitalAgenticTrading",
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
  const bottomRow = PROJECTS.slice(3);

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
                  target="_blank"
                  rel="noopener noreferrer"
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
              <a
                key={proj.title}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { cardRefs.current[i + 1] = el as HTMLDivElement | null; }}
                className="flex-1 border-panel border-comic-black relative overflow-hidden
                           cursor-pointer group gpu comic-panel-hover block"
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
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {bottomRow.map((proj, i) => (
            <a
              key={proj.title}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { cardRefs.current[i + 3] = el as HTMLDivElement | null; }}
              className="border-panel border-comic-black relative overflow-hidden
                         cursor-pointer group gpu comic-panel-hover block"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
