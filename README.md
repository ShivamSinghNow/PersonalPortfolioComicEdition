# Comic Book Portfolio

A personal portfolio website with a **comic book / graphic novel** aesthetic, built with Next.js 14 (App Router), Tailwind CSS, GSAP ScrollTrigger, and Framer Motion.

## Features

- **Splash Hero** — Full-screen opening panel with animated action-line background and entrance animations
- **Origin Story** — 3-panel horizontal comic strip with scroll-triggered reveal animations
- **Projects** — Comic page grid layout with hover ink-spread effects and staggered scroll entrances
- **Skills / Power Stats** — Animated health-meter-style power bars that fill on scroll
- **Contact** — Speech bubble UI with comic action-word social links (POW!, ZAP!, BANG!)
- **Sound Effects** — Scroll-triggered words (WHOOSH, KAPOW, BLAM) appear between sections
- **Halftone Overlay** — SVG dot-pattern texture across the entire page
- **Mobile Responsive** — Panels stack vertically on small screens

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | App Router, SSR, file-based routing |
| Tailwind CSS 3 | Utility-first styling with custom comic theme |
| GSAP + ScrollTrigger | Scroll-driven section animations |
| Framer Motion | Component hover/mount animations |
| TypeScript | Type safety |
| Google Fonts | Bangers (headings), Comic Neue (body) |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd PersonalPortfolioComicEdition

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx          Root layout (fonts, halftone overlay)
├── page.tsx            Single scrolling page (all sections)
└── globals.css         Tailwind + comic utility classes

components/
├── HalftoneOverlay.tsx Full-page SVG dot texture
├── SoundEffect.tsx     Scroll-triggered comic words
├── SplashHero.tsx      Hero section with action lines
├── OriginStory.tsx     3-panel comic strip
├── ComicPanel.tsx      Reusable bordered panel
├── Projects.tsx        Project grid wrapper
├── ProjectCard.tsx     Individual project card
├── Skills.tsx          Power stats section
├── PowerBar.tsx        Animated skill meter
├── Contact.tsx         Speech bubble contact
└── ActionWord.tsx      Comic action word link

lib/
└── gsap.ts             GSAP + ScrollTrigger registration
```

## Customization

- **Colors**: Edit `tailwind.config.ts` — look for `comic-yellow`, `comic-red`, `comic-cyan`
- **Fonts**: Swap fonts in `app/layout.tsx` via `next/font/google`
- **Content**: Replace placeholder text in each component file
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Skills**: Edit the `skillCategories` array in `components/Skills.tsx`
- **Social Links**: Edit the `socialLinks` array in `components/Contact.tsx`

## License

MIT
