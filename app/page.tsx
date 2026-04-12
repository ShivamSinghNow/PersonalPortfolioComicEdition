import ComicCover   from "@/components/ComicCover";
import OriginStory  from "@/components/OriginStory";
import Projects     from "@/components/Projects";
import Writings     from "@/components/Writings";
import Skills       from "@/components/Skills";
import Contact      from "@/components/Contact";
import PageBreak    from "@/components/PageBreak";
import SoundEffect  from "@/components/SoundEffect";

export default function Home() {
  return (
    <main className="relative">

      {/* ── Cover ─────────────────────────────── */}
      <ComicCover />

      {/* SFX break — bursts between cover and chapter 1 */}
      <div className="relative h-0">
        <SoundEffect
          text="WHOOSH!"
          color="#00D4FF"
          rotation={-8}
          className="right-[5%] -top-12 md:right-[10%] md:-top-16"
        />
      </div>

      <PageBreak pageNumber={2} label="CHAPTER ONE: ORIGIN" />

      {/* ── Origin Story ──────────────────────── */}
      <OriginStory />

      {/* SFX break */}
      <div className="relative h-0">
        <SoundEffect
          text="KAPOW!"
          color="#FFD700"
          rotation={6}
          className="left-[4%] -top-10 md:left-[8%] md:-top-14"
        />
      </div>

      <PageBreak pageNumber={3} label="CHAPTER TWO: PROJECT FILES" />

      {/* ── Projects ──────────────────────────── */}
      <Projects />

      {/* SFX break */}
      <div className="relative h-0">
        <SoundEffect
          text="BLAM!"
          color="#FF3333"
          rotation={-5}
          className="right-[6%] -top-10 md:right-[12%] md:-top-14"
        />
      </div>

      <PageBreak pageNumber={4} label="CHAPTER THREE: INTEL FILES" />

      {/* ── Writings ──────────────────────────── */}
      <Writings />

      {/* SFX break */}
      <div className="relative h-0">
        <SoundEffect
          text="BZZT!"
          color="#BF5FFF"
          rotation={-4}
          className="right-[5%] -top-10 md:right-[10%] md:-top-14"
        />
      </div>

      <PageBreak pageNumber={5} label="CHAPTER FOUR: POWER STATS" />

      {/* ── Skills ────────────────────────────── */}
      <Skills />

      {/* SFX break */}
      <div className="relative h-0">
        <SoundEffect
          text="THWACK!"
          color="#00D4FF"
          rotation={4}
          className="left-[8%] -top-10 md:left-[14%] md:-top-14"
        />
      </div>

      <PageBreak pageNumber={6} label="EPILOGUE: SIGN OFF" />

      {/* ── Contact ───────────────────────────── */}
      <Contact />

    </main>
  );
}
