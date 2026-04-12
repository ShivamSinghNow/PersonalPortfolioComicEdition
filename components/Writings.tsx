"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import CaptionBox from "./CaptionBox";

const ARTICLES = [
  {
    title: "WHY AI SHOULD THINK IN CONCEPTS, NOT WORDS",
    subtitle: "Diffusion Language Models Explained",
    description:
      "The future of language AI isn't next-token prediction. Explore how diffusion-based models that reason in concept space outperform autoregressive architectures — and why this changes everything about how we build LLMs.",
    tags: ["Diffusion LM", "Concept Space", "NLP"],
    accent: "#BF5FFF",
    bg: "#0a0014",
    issue: "#1",
    href: "https://medium.com/@shivsingh483/why-teaching-ai-to-think-in-concepts-beats-teaching-it-to-write-word-by-word-41a5f0fa90b6",
    featured: true,
  },
  {
    title: "RESNET UNPACKED",
    subtitle: "How Skip Connections Unlocked Deep AI",
    description:
      "How residual learning solved the vanishing gradient problem and made 100+ layer networks trainable — the architecture still powering modern vision models.",
    tags: ["ResNet", "Skip Connections", "Vision"],
    accent: "#FF6B35",
    bg: "#140a00",
    issue: "#2",
    href: "https://medium.com/@shivsingh483/resnet-unpacked-how-residual-learning-unlocked-the-depth-of-modern-ai-e251cfb57ba1",
    featured: false,
  },
  {
    title: "UNDERSTANDING VGGNET",
    subtitle: "Simplicity, Depth & a Lasting Legacy",
    description:
      "How Oxford's VGGNet proved that stacking small 3×3 filters deep beats large kernels — shaping the blueprint for every CNN that followed.",
    tags: ["VGGNet", "CNNs", "Computer Vision"],
    accent: "#00D4FF",
    bg: "#00101a",
    issue: "#3",
    href: "https://medium.com/@shivsingh483/understanding-vggnet-simplicity-depth-and-a-legacy-that-shaped-modern-ai-c843ba807e4b",
    featured: false,
  },
  {
    title: "UNDERSTANDING ALEXNET",
    subtitle: "The Shot Heard Round the AI World",
    description:
      "The 2012 ImageNet breakthrough that ignited the deep learning era — ReLU, dropout, GPU training, and the architecture that started it all.",
    tags: ["AlexNet", "ImageNet", "GPU Training"],
    accent: "#FFD700",
    bg: "#141000",
    issue: "#4",
    href: "https://medium.com/@shivsingh483/understanding-alexnet-the-2012-breakthrough-that-changed-ai-forever-7c365cf76969",
    featured: false,
  },
];

export default function Writings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLElement | null)[]>([]);

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

  const featured   = ARTICLES[0];
  const sideCard   = ARTICLES[1];
  const bottomRow  = ARTICLES.slice(2);

  return (
    <section id="writings" ref={sectionRef} className="comic-page-section">

      {/* Chapter heading */}
      <div className="mb-4 md:mb-5 text-center">
        <h2 className="comic-heading font-bangers text-comic-yellow text-4xl md:text-5xl lg:text-6xl">
          CHAPTER 3: INTEL FILES
        </h2>
        <p className="font-bangers text-comic-paper/40 text-sm tracking-widest mt-1">
          ML PAPERS — DECODED & DISPATCHED
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-3 md:space-y-4">

        {/* Top row — featured (2/3) + side (1/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

          {/* Featured article */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => { cardRefs.current[0] = el; }}
            className="md:col-span-2 border-panel border-comic-black relative overflow-hidden
                       block group gpu comic-panel-hover"
            style={{ minHeight: 300, background: featured.bg, boxShadow: "6px 6px 0 #000" }}
          >
            <CaptionBox text={`INTEL DISPATCH — ISSUE ${featured.issue}`} variant="black" />

            {/* Benday dots */}
            <div
              className="absolute inset-0 benday-dots-color pointer-events-none"
              style={{ color: featured.accent }}
            />

            {/* Medium stamp */}
            <div
              className="absolute top-10 right-4 font-bangers text-xs px-2 py-0.5 border-2 border-comic-black z-10 rotate-slight-right"
              style={{ background: featured.accent, color: "#000", boxShadow: "2px 2px 0 #000" }}
            >
              READ ON MEDIUM ↗
            </div>

            <div className="relative z-10 p-5 md:p-8 flex flex-col h-full" style={{ minHeight: 260 }}>
              <div className="flex-1">
                <div
                  className="font-bangers leading-tight mb-1"
                  style={{
                    fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
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
                <span
                  className="ml-auto font-bangers text-sm px-4 py-1 border-2 border-comic-black
                             bg-comic-paper text-comic-black group-hover:bg-comic-yellow transition-colors duration-150"
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  READ FULL BRIEF →
                </span>
              </div>
            </div>
          </a>

          {/* Side article */}
          <a
            href={sideCard.href}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => { cardRefs.current[1] = el; }}
            className="border-panel border-comic-black relative overflow-hidden
                       flex flex-col group gpu comic-panel-hover"
            style={{ background: sideCard.bg, minHeight: 260, boxShadow: "5px 5px 0 #000" }}
          >
            <CaptionBox text={`ISSUE ${sideCard.issue} — DEEP LEARNING`} variant="red" />

            <div className="relative z-10 p-4 md:p-5 flex-1 flex flex-col justify-between">
              <div>
                <div
                  className="font-bangers text-2xl md:text-3xl mb-1 leading-tight"
                  style={{ color: sideCard.accent, textShadow: "3px 3px 0 #000" }}
                >
                  {sideCard.title}
                </div>
                <p className="font-bangers text-comic-paper/45 text-sm mb-3 tracking-wide">
                  {sideCard.subtitle}
                </p>
                <p className="font-comic text-comic-paper/75 text-sm leading-relaxed">
                  {sideCard.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {sideCard.tags.map((t) => (
                  <span
                    key={t}
                    className="font-bangers text-xs px-1.5 py-0.5 border-2 tracking-widest"
                    style={{
                      borderColor: sideCard.accent,
                      color: sideCard.accent,
                      background: sideCard.accent + "22",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>

        {/* Bottom row — 2 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {bottomRow.map((article, i) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { cardRefs.current[i + 2] = el; }}
              className="border-panel border-comic-black relative overflow-hidden
                         flex flex-col group gpu comic-panel-hover"
              style={{ background: article.bg, minHeight: 180, boxShadow: "4px 4px 0 #000" }}
            >
              <CaptionBox
                text={`ISSUE ${article.issue} — CLASSIC ARCHITECTURES`}
                variant={i === 0 ? "blue" : "yellow"}
              />

              <div className="relative z-10 p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div
                    className="font-bangers text-xl md:text-2xl mb-1 leading-tight"
                    style={{ color: article.accent, textShadow: "2px 2px 0 #000" }}
                  >
                    {article.title}
                  </div>
                  <p className="font-bangers text-comic-paper/40 text-xs mb-2 tracking-wide">
                    {article.subtitle}
                  </p>
                  <p className="font-comic text-comic-paper/70 text-sm leading-snug">
                    {article.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="font-bangers text-xs px-1.5 py-0.5 border-2 tracking-widest"
                      style={{
                        borderColor: article.accent,
                        color: article.accent,
                        background: article.accent + "22",
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

        {/* Footer strip */}
        <div
          className="border-panel border-comic-black px-4 py-2 flex items-center justify-between"
          style={{ background: "#0a0a1a", boxShadow: "3px 3px 0 #000" }}
        >
          <span className="font-bangers text-xs tracking-widest text-comic-paper/30">
            ALL ARTICLES PUBLISHED ON MEDIUM · SHIVAM SINGH
          </span>
          <a
            href="https://medium.com/@shivsingh483"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bangers text-xs px-3 py-1 border-2 border-comic-black
                       text-comic-paper hover:bg-comic-yellow hover:text-comic-black transition-colors duration-150"
            style={{ boxShadow: "2px 2px 0 #000" }}
          >
            VIEW ALL →
          </a>
        </div>

      </div>
    </section>
  );
}
