# Graph Report - .  (2026-04-11)

## Corpus Check
- Corpus is ~3,119 words - fits in a single context window. You may not need a graph.

## Summary
- 60 nodes · 63 edges · 25 communities detected
- Extraction: 67% EXTRACTED · 33% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Visual Identity & Data Layer|Visual Identity & Data Layer]]
- [[_COMMUNITY_Portfolio Sections|Portfolio Sections]]
- [[_COMMUNITY_Comic UI Components|Comic UI Components]]
- [[_COMMUNITY_Root Page|Root Page]]
- [[_COMMUNITY_Action Word Component|Action Word Component]]
- [[_COMMUNITY_Halftone Overlay|Halftone Overlay]]
- [[_COMMUNITY_Project Card|Project Card]]
- [[_COMMUNITY_Origin Story Section|Origin Story Section]]
- [[_COMMUNITY_Splash Hero|Splash Hero]]
- [[_COMMUNITY_Sound Effect|Sound Effect]]
- [[_COMMUNITY_Skills Section|Skills Section]]
- [[_COMMUNITY_Comic Panel|Comic Panel]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_Next.js Types|Next.js Types]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_App Layout|App Layout]]
- [[_COMMUNITY_Projects Component|Projects Component]]
- [[_COMMUNITY_Contact Component|Contact Component]]
- [[_COMMUNITY_Power Bar Component|Power Bar Component]]
- [[_COMMUNITY_GSAP Animation Library|GSAP Animation Library]]
- [[_COMMUNITY_Next Config Module|Next Config Module]]
- [[_COMMUNITY_Next Env Module|Next Env Module]]
- [[_COMMUNITY_Tailwind Config Module|Tailwind Config Module]]
- [[_COMMUNITY_PostCSS Config Module|PostCSS Config Module]]

## God Nodes (most connected - your core abstractions)
1. `Origin Story Section` - 7 edges
2. `Home Page (Single Scroll Page)` - 6 edges
3. `Projects Section` - 6 edges
4. `Skills Section` - 6 edges
5. `Customization Guide` - 6 edges
6. `Comic Book Aesthetic Design Pattern` - 6 edges
7. `Scroll-Triggered Animation Pattern` - 6 edges
8. `Framer Motion Component Animation Pattern` - 6 edges
9. `Root Layout` - 5 edges
10. `SoundEffect Component` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Comic Book Aesthetic Design Pattern` --conceptually_related_to--> `ActionWord Component`  [INFERRED]
  README.md → components/ActionWord.tsx
- `Comic Book Aesthetic Design Pattern` --conceptually_related_to--> `Halftone Overlay Component`  [INFERRED]
  README.md → components/HalftoneOverlay.tsx
- `Customization Guide` --references--> `Social Links Data Array`  [EXTRACTED]
  README.md → components/Contact.tsx
- `Comic Book Aesthetic Design Pattern` --conceptually_related_to--> `SoundEffect Component`  [INFERRED]
  README.md → components/SoundEffect.tsx
- `Comic Book Aesthetic Design Pattern` --conceptually_related_to--> `ComicPanel Reusable Component`  [INFERRED]
  README.md → components/ComicPanel.tsx

## Hyperedges (group relationships)
- **GSAP ScrollTrigger Scroll Animation System** — lib_gsap, components_projects, components_originstory, components_skills, components_soundeffect, components_powerbar [EXTRACTED 1.00]
- **Comic Book Visual Identity Layer** — tailwindconfig_comictheme, components_halftoneoverlay, components_comicpanel, components_actionword, components_soundeffect [INFERRED 0.88]
- **Single-Page Scroll Section Composition** — page_homepage, components_splashhero, components_originstory, components_projects, components_skills, components_contact [EXTRACTED 1.00]

## Communities

### Community 0 - "Visual Identity & Data Layer"
Cohesion: 0.23
Nodes (12): Halftone Overlay Component, Projects Data Array, Skill Categories Data Array, Comic Book Aesthetic Design Pattern, Bangers Google Font, Comic Neue Google Font, Site Metadata (Comic Portfolio), Root Layout (+4 more)

### Community 1 - "Portfolio Sections"
Cohesion: 0.5
Nodes (9): Origin Story Section, Origin Story Panels Data Array, PowerBar Component, Projects Section, Skills Section, SoundEffect Component, Scroll-Triggered Animation Pattern, GSAP + ScrollTrigger Registration Module (+1 more)

### Community 2 - "Comic UI Components"
Cohesion: 0.32
Nodes (8): ActionWord Component, ComicPanel Reusable Component, Contact Section, ProjectCard Component, Social Links Data Array, Splash Hero Section, Framer Motion Component Animation Pattern, Action Lines Spin Animation

### Community 3 - "Root Page"
Cohesion: 1.0
Nodes (0): 

### Community 4 - "Action Word Component"
Cohesion: 1.0
Nodes (0): 

### Community 5 - "Halftone Overlay"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Project Card"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Origin Story Section"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Splash Hero"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Sound Effect"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Skills Section"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Comic Panel"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Next.js Config"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Next.js Types"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "App Layout"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Projects Component"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Contact Component"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Power Bar Component"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "GSAP Animation Library"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Next Config Module"
Cohesion: 1.0
Nodes (1): Next.js Config

### Community 22 - "Next Env Module"
Cohesion: 1.0
Nodes (1): Next.js TypeScript Environment Types

### Community 23 - "Tailwind Config Module"
Cohesion: 1.0
Nodes (1): Tailwind CSS Config

### Community 24 - "PostCSS Config Module"
Cohesion: 1.0
Nodes (1): PostCSS Config

## Knowledge Gaps
- **7 isolated node(s):** `Next.js Config`, `Next.js TypeScript Environment Types`, `Tailwind CSS Config`, `Action Lines Spin Animation`, `PostCSS Config` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Root Page`** (2 nodes): `page.tsx`, `Home()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Action Word Component`** (2 nodes): `ActionWord()`, `ActionWord.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Halftone Overlay`** (2 nodes): `HalftoneOverlay.tsx`, `HalftoneOverlay()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Card`** (2 nodes): `ProjectCard.tsx`, `ProjectCard()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Origin Story Section`** (2 nodes): `OriginStory.tsx`, `OriginStory()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Splash Hero`** (2 nodes): `SplashHero.tsx`, `scrollToOrigin()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Sound Effect`** (2 nodes): `SoundEffect.tsx`, `SoundEffect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skills Section`** (2 nodes): `Skills.tsx`, `Skills()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Comic Panel`** (2 nodes): `ComicPanel()`, `ComicPanel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Config`** (1 nodes): `next.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Types`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Layout`** (1 nodes): `layout.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Projects Component`** (1 nodes): `Projects.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contact Component`** (1 nodes): `Contact.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Power Bar Component`** (1 nodes): `PowerBar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `GSAP Animation Library`** (1 nodes): `gsap.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Config Module`** (1 nodes): `Next.js Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Env Module`** (1 nodes): `Next.js TypeScript Environment Types`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config Module`** (1 nodes): `Tailwind CSS Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config Module`** (1 nodes): `PostCSS Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Comic Book Aesthetic Design Pattern` connect `Visual Identity & Data Layer` to `Portfolio Sections`, `Comic UI Components`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `Customization Guide` connect `Visual Identity & Data Layer` to `Comic UI Components`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `Home Page (Single Scroll Page)` connect `Portfolio Sections` to `Comic UI Components`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Origin Story Section` (e.g. with `Scroll-Triggered Animation Pattern` and `Projects Section`) actually correct?**
  _`Origin Story Section` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Projects Section` (e.g. with `Scroll-Triggered Animation Pattern` and `Origin Story Section`) actually correct?**
  _`Projects Section` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Skills Section` (e.g. with `Scroll-Triggered Animation Pattern` and `Origin Story Section`) actually correct?**
  _`Skills Section` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js Config`, `Next.js TypeScript Environment Types`, `Tailwind CSS Config` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._