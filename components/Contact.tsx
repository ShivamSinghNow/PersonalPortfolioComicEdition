"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "@/lib/gsap";
import ActionWord from "./ActionWord";
import CaptionBox from "./CaptionBox";

const LINKS = [
  { word: "GITHUB!",   color: "#FFD700", href: "https://github.com/ShivamSinghNow",          label: "GitHub"   },
  { word: "LINKEDIN!", color: "#00D4FF", href: "https://linkedin.com/in/shivamsingh56/",      label: "LinkedIn" },
  { word: "EMAIL!",    color: "#FF3333", href: "mailto:shivamsingh@ucsb.edu",                  label: "Email"    },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const p = useRef<(HTMLElement | null)[]>([]);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      p.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.65,
            delay: i * 0.12,
            ease: "power2.out",
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
    <section id="contact" ref={sectionRef} className="comic-page-section">

      {/* Chapter heading */}
      <div className="mb-4 md:mb-5 text-center">
        <h2 className="comic-heading font-bangers text-comic-yellow text-4xl md:text-5xl lg:text-6xl">
          EPILOGUE: SIGN OFF
        </h2>
      </div>

      {/*
        Grid — desktop:
        ┌──────────────────────┬──────────┐
        │  "To Be Continued"   │ contact  │
        │    (col-span-2)      │ (col 1)  │
        ├──────────────────────┴──────────┤
        │  footer strip (col-span-3)      │
        └─────────────────────────────────┘
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

        {/* ── "To Be Continued" splash panel ── */}
        <div
          ref={(el) => { p.current[0] = el; }}
          className="md:col-span-2 comic-panel-dark border-panel border-comic-black
                     relative overflow-hidden gpu"
          style={{ minHeight: 280, boxShadow: "6px 6px 0 #000" }}
        >
          {/* Action lines */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div
              className="w-[300%] h-[300%] opacity-[0.08] gpu"
              style={{
                background: `repeating-conic-gradient(
                  #FFD700 0deg 2deg, transparent 2deg 12deg
                )`,
              }}
            />
          </div>
          <div className="absolute inset-0 benday-dots pointer-events-none" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="font-bangers text-comic-paper/20 text-xs tracking-widest mb-5">
              ★&nbsp;&nbsp;ISSUE #001 — FIN&nbsp;&nbsp;★
            </div>

            <div
              className="font-bangers text-comic-yellow leading-none mb-4"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
                textShadow: "6px 6px 0 #000",
                WebkitTextStroke: "2px #000",
              }}
            >
              TO BE<br />CONTINUED…
            </div>

            <div className="font-bangers text-comic-paper/40 tracking-widest text-sm md:text-base">
              NEXT ISSUE:&nbsp;&nbsp;THE NEXT BIG PROJECT
            </div>
          </div>
        </div>

        {/* ── Contact panel ── */}
        <div
          ref={(el) => { p.current[1] = el; }}
          className="comic-panel flex flex-col gpu"
        >
          <CaptionBox text="LETTERS TO THE HERO" variant="yellow" />

          <div className="flex-1 p-4 md:p-5 bg-comic-paper flex flex-col justify-between gap-4">
            <div>
              <p className="font-comic text-sm md:text-base text-comic-black leading-relaxed mb-4">
                Got a project? Want to build something{" "}
                <strong>incredible</strong> together? The hero is accepting
                new missions.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 border-4 border-comic-black font-comic text-sm
                             text-comic-black bg-white placeholder:text-comic-black/40
                             focus:outline-none focus:border-comic-cyan"
                />
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message to the hero..."
                  rows={3}
                  className="w-full px-3 py-2.5 border-4 border-comic-black font-comic text-sm
                             text-comic-black bg-white placeholder:text-comic-black/40
                             focus:outline-none focus:border-comic-cyan resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-bangers text-base px-5 py-2.5 bg-comic-red text-white
                             border-4 border-comic-black hover:bg-comic-yellow hover:text-comic-black
                             transition-colors duration-150 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ boxShadow: "3px 3px 0 #000" }}
                >
                  {status === "sending" ? "TRANSMITTING…" :
                   status === "sent"    ? "SIGNAL SENT! ★" :
                   status === "error"   ? "TRANSMISSION FAILED!" :
                                          "SEND SIGNAL!"}
                </button>
              </form>
            </div>

            <div style={{ borderTop: "3px solid #000", paddingTop: "1rem" }}>
              <p className="font-bangers text-comic-black text-xs tracking-widest mb-3">
                OR FIND ME AT:
              </p>
              <div className="flex flex-wrap gap-4">
                {LINKS.map((link, i) => (
                  <ActionWord key={link.word} {...link} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div
          ref={(el) => { p.current[2] = el; }}
          className="md:col-span-3 comic-panel-dark border-panel border-comic-black
                     px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 gpu"
          style={{ boxShadow: "5px 5px 0 #000" }}
        >
          <p className="font-bangers text-comic-paper/30 text-xs tracking-widest text-center sm:text-left">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;SHIVAM SINGH — ALL RIGHTS RESERVED
          </p>
          <p className="font-bangers text-comic-yellow/20 text-xs tracking-widest text-center">
            NO HEROES WERE HARMED IN THE MAKING OF THIS PORTFOLIO
          </p>
          <p className="font-comic text-comic-paper/20 text-xs hidden md:block">
            Next.js · GSAP · Framer Motion
          </p>
        </div>
      </div>
    </section>
  );
}
