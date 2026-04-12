# Graph Report - .  (2026-04-11)

## Corpus Check
- Corpus is ~7,759 words - fits in a single context window. You may not need a graph.

## Summary
- 93 nodes · 102 edges · 24 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Comic Book UI Components|Comic Book UI Components]]
- [[_COMMUNITY_Animation & Motion|Animation & Motion]]
- [[_COMMUNITY_Portfolio Content & Resume|Portfolio Content & Resume]]
- [[_COMMUNITY_Graph Analysis Reports|Graph Analysis Reports]]
- [[_COMMUNITY_Origin Story Section|Origin Story Section]]
- [[_COMMUNITY_Skills Section|Skills Section]]
- [[_COMMUNITY_Contact Section|Contact Section]]
- [[_COMMUNITY_Comic Cover Page|Comic Cover Page]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Projects Module|Projects Module]]
- [[_COMMUNITY_Contact Module|Contact Module]]
- [[_COMMUNITY_OriginStory Module|OriginStory Module]]
- [[_COMMUNITY_CaptionBox Component|CaptionBox Component]]
- [[_COMMUNITY_Splash Hero Module|Splash Hero Module]]
- [[_COMMUNITY_PageBreak Component|PageBreak Component]]
- [[_COMMUNITY_SoundEffect Component|SoundEffect Component]]
- [[_COMMUNITY_Skills Module|Skills Module]]
- [[_COMMUNITY_ComicPanel Component|ComicPanel Component]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_TypeScript Next Env|TypeScript Next Env]]
- [[_COMMUNITY_Tailwind CSS Config|Tailwind CSS Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_App Layout Root|App Layout Root]]
- [[_COMMUNITY_Comic Cover Module|Comic Cover Module]]

## God Nodes (most connected - your core abstractions)
1. `Shivam Singh Resume` - 11 edges
2. `OriginStory Section Component` - 9 edges
3. `Skills Section Component` - 7 edges
4. `God Nodes Analysis (most connected abstractions)` - 7 edges
5. `Projects Data Array (PROJECTS)` - 6 edges
6. `ComicCover Section Component` - 6 edges
7. `ML/AI Technical Skills` - 6 edges
8. `Comic Book Aesthetic Design Pattern` - 6 edges
9. `Root Layout` - 5 edges
10. `Projects Section Component` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Social Links Data Array (LINKS)` --references--> `Shivam Singh Resume`  [INFERRED]
  components/Contact.tsx → Resume.MD
- `OriginStory Panel Entry Animation Config (ENTRY)` --conceptually_related_to--> `Comic Book Aesthetic Design Pattern`  [INFERRED]
  components/OriginStory.tsx → graphify-out/GRAPH_REPORT.md
- `Tech Strip (wide caption panel)` --references--> `ML/AI Technical Skills`  [INFERRED]
  components/OriginStory.tsx → Resume.MD
- `Character Card Panel (RPG-style)` --shares_data_with--> `Shivam Singh Resume`  [INFERRED]
  components/Skills.tsx → Resume.MD
- `Tech Badges Array (TECH)` --references--> `ML/AI Technical Skills`  [INFERRED]
  components/ComicCover.tsx → Resume.MD

## Hyperedges (group relationships)
- **GSAP ScrollTrigger Scroll Animation System** — lib_gsap, components_projects, components_originstory, components_skills, components_soundeffect, components_powerbar [EXTRACTED 1.00]
- **GSAP ScrollTrigger Scroll Animation System** — projects_gsap_animation, contact_gsap_animation, originstory_gsap_animation, skills_gsap_animation, pattern_scrolltrigger_animation [EXTRACTED 1.00]
- **Framer Motion Entry Animation System** — splashhero_framer_motion, comiccover_framer_motion, pattern_framer_motion_animation [EXTRACTED 1.00]
- **Single-Page Scroll Section Composition** — splashhero_component, comiccover_component, originstory_component, projects_component, skills_component, contact_component [INFERRED 0.90]
- **Resume Projects Mirrored in Portfolio UI** — resume_project_trading, resume_project_powertracker, resume_project_nemolens, resume_maihealth_exp, resume_ucsb_research, projects_data_array [INFERRED 0.88]
- **CaptionBox Comic UI System** — projects_captionbox_usage, contact_captionbox_usage, originstory_captionbox_usage, skills_captionbox_usage [EXTRACTED 1.00]
- **Comic Cover Visual Identity System** — comiccover_publisher_header, comiccover_publisher_footer, comiccover_tech_array, pattern_comicbook_aesthetic [INFERRED 0.85]

## Communities

### Community 0 - "Comic Book UI Components"
Cohesion: 0.18
Nodes (11): ActionWord Component, Halftone Overlay Component, PowerBar Component, ProjectCard Component, Comic Book Aesthetic Design Pattern, Framer Motion Component Animation Pattern, Scroll-Triggered Animation Pattern, GSAP + ScrollTrigger Registration Module (+3 more)

### Community 1 - "Animation & Motion"
Cohesion: 0.2
Nodes (11): Framer Motion Animations in ComicCover, Contact GSAP ScrollTrigger Animation, God Nodes Analysis (most connected abstractions), OriginStory GSAP ScrollTrigger Animation, Framer Motion Component Animation Pattern, Scroll-Triggered Animation Pattern, CaptionBox Usage in Projects, Projects Section Component (+3 more)

### Community 2 - "Portfolio Content & Resume"
Cohesion: 0.33
Nodes (11): Projects Data Array (PROJECTS), UCSB Statistics and Data Science Degree, MaiHealth AI/ML Internship, NeurIPS NeurReps Workshop Reviewer, NemoLens Project, PowerTracker Project, Multi-Agent LLM Trading System Project, Shivam Singh Resume (+3 more)

### Community 3 - "Graph Analysis Reports"
Cohesion: 0.22
Nodes (10): Graphify Graph Report, Community Detection Results (25 communities), Hyperedges (GSAP Visual Identity Single-Page Scroll), Knowledge Gaps (isolated nodes), Bangers Google Font, Comic Neue Google Font, HalftoneOverlay Usage in Layout, Site Metadata (Comic Portfolio) (+2 more)

### Community 4 - "Origin Story Section"
Cohesion: 0.25
Nodes (8): CaptionBox Usage in OriginStory, OriginStory Section Component, OriginStory Panel Entry Animation Config (ENTRY), Speech Bubble (JSX CSS border-trick tail), Tech Strip (wide caption panel), SplashHero Section Component, Framer Motion Animations in SplashHero, scrollToOrigin() smooth scroll to #origin

### Community 5 - "Skills Section"
Cohesion: 0.33
Nodes (6): CaptionBox Usage in Skills, Character Card Panel (RPG-style), Skills Section Component, Special Moves Data Array (MOVES), PowerBar Usage in Skills, Skill Stats Data Array (STATS)

### Community 6 - "Contact Section"
Cohesion: 0.4
Nodes (5): ActionWord Usage in Contact, CaptionBox Usage in Contact, Contact Section Component, Footer Strip Panel, Social Links Data Array (LINKS)

### Community 7 - "Comic Cover Page"
Cohesion: 0.4
Nodes (5): ComicCover Section Component, Publisher Footer Bar, Publisher Header Bar, CTA scroll to #story in ComicCover, Tech Badges Array (TECH)

### Community 8 - "App Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Projects Module"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Contact Module"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "OriginStory Module"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "CaptionBox Component"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Splash Hero Module"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "PageBreak Component"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "SoundEffect Component"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Skills Module"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "ComicPanel Component"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Next.js Config"
Cohesion: 1.0
Nodes (1): Next.js Config

### Community 19 - "TypeScript Next Env"
Cohesion: 1.0
Nodes (1): Next.js TypeScript Environment Types

### Community 20 - "Tailwind CSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "PostCSS Config"
Cohesion: 1.0
Nodes (1): PostCSS Config

### Community 22 - "App Layout Root"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Comic Cover Module"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **20 isolated node(s):** `Next.js Config`, `Next.js TypeScript Environment Types`, `PostCSS Config`, `Halftone Overlay Component`, `ProjectCard Component` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Entry Point`** (2 nodes): `page.tsx`, `Home()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Projects Module`** (2 nodes): `Projects.tsx`, `Projects()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contact Module`** (2 nodes): `Contact.tsx`, `Contact()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `OriginStory Module`** (2 nodes): `OriginStory.tsx`, `OriginStory()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CaptionBox Component`** (2 nodes): `CaptionBox()`, `CaptionBox.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Splash Hero Module`** (2 nodes): `SplashHero.tsx`, `scrollToOrigin()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PageBreak Component`** (2 nodes): `PageBreak.tsx`, `PageBreak()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SoundEffect Component`** (2 nodes): `SoundEffect.tsx`, `SoundEffect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skills Module`** (2 nodes): `Skills.tsx`, `Skills()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ComicPanel Component`** (2 nodes): `ComicPanel()`, `ComicPanel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Config`** (1 nodes): `Next.js Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TypeScript Next Env`** (1 nodes): `Next.js TypeScript Environment Types`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind CSS Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `PostCSS Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Layout Root`** (1 nodes): `layout.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Comic Cover Module`** (1 nodes): `ComicCover.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `God Nodes Analysis (most connected abstractions)` connect `Animation & Motion` to `Graph Analysis Reports`, `Origin Story Section`, `Skills Section`?**
  _High betweenness centrality (0.237) - this node is a cross-community bridge._
- **Why does `Comic Book Aesthetic Design Pattern` connect `Graph Analysis Reports` to `Animation & Motion`, `Origin Story Section`, `Comic Cover Page`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `Root Layout` connect `Graph Analysis Reports` to `Comic Book UI Components`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Shivam Singh Resume` (e.g. with `Social Links Data Array (LINKS)` and `Character Card Panel (RPG-style)`) actually correct?**
  _`Shivam Singh Resume` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `Projects Data Array (PROJECTS)` (e.g. with `Multi-Agent LLM Trading System Project` and `PowerTracker Project`) actually correct?**
  _`Projects Data Array (PROJECTS)` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js Config`, `Next.js TypeScript Environment Types`, `PostCSS Config` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._