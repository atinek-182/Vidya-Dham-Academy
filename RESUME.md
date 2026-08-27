# [RESUME ANCHOR] vidya-dham-academy

> **Project Root**: `projects/Websites/vidya-dham-academy`  
> **Last Synchronized**: `2026-08-27 04:50 UTC`  
> **Active Stage**: Stage 8 (Motion Choreography, Kinetic Physics & WebGL FX)  
> **Active Sub-Phase**: Phase 8.1 (Lenis Smooth Scroll & GSAP ScrollTrigger Scrollytelling)  
> **Active Chat Session**: Chat 17  
> **Status**: `[READY FOR PHASE 8.1]`  

---

## One-Line Prompt for New Chat Session

Whenever you open a fresh chat in your IDE, simply paste:

```markdown
Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 8.1.
```

---

## Active Phase Summary & Invariants

- **Active Sub-Phase**: `Phase 8.1 -- Lenis Smooth Scroll & GSAP ScrollTrigger Scrollytelling`
- **Mandatory Pre-flight**: Run [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check.
- **Zero-Emoji Mandate**: Absolutely zero emojis across chat, code, and documentation. Use `[PASS]`, `[FAIL]`, `[ACTIVE]`.
- **Target Artifact**: Lenis smooth scroll & GSAP ScrollTrigger timelines (`context/4-motion-choreography.md`, `specs/phase-8.1-spec.md`)
- **Mandatory Skills**: [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md), [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Allowed Write Paths**:
  - `src/motion/**/*`
  - `context/4-motion-choreography.md`
  - `specs/phase-8.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/canvas/**/*, context/7-seo-and-a11y.md]`

---

## Live Architecture Map Snapshot

```mermaid
graph TD
  P1_1["1.1 Problem & JTBD"]:::completed --> P1_2["1.2 Personas & Mental Models"]:::completed
  P1_2 --> P1_3["1.3 Competitive Moats & KPIs"]:::completed
  P1_3 --> P1_4["1.4 Tech Stack & Standards"]:::completed
  P1_4 --> P2_1["2.1 Reference Ingestion"]:::completed
  P2_1 --> P2_3["2.3 Style-Lock Contract"]:::completed
  P2_3 --> P3_1["3.1 Content Strategy & Sitemap"]:::completed
  P3_1 --> P3_4["3.4 Spatial Wireframe & Rhythm"]:::completed
  P3_4 --> P4_1["4.1 OKLCH Palette & Contrast"]:::completed
  P4_1 --> P4_3["4.3 Fluid Typography & Scale"]:::completed
  P4_3 --> P5_1["5.1 Obys Grid & Macrostructure"]:::completed
  P5_1 --> P5_4["5.4 UI Component Manifest"]:::completed
  P5_4 --> P6_1["6.1 Tactile Elevation & Borders"]:::completed
  P6_1 --> P6_3["6.3 Atmospheric Noise & Shaders"]:::completed
  P6_3 --> P7_1["7.1 Atomic Components & States"]:::completed
  P7_1 --> P7_3["7.3 Form UX & Validation"]:::completed
  P7_3 --> P8_1["8.1 Lenis & GSAP Scrollytelling"]:::active

  classDef completed fill:#059669,stroke:#10b981,color:#ffffff,stroke-width:2px;
  classDef active fill:#d97706,stroke:#f59e0b,color:#ffffff,stroke-width:3px;
  classDef pending fill:#1f2937,stroke:#374151,color:#9ca3af,stroke-width:1px;
```
*(For complete 24-phase map, see [`docs/DESIGN_MAP.mermaid`](file:///d:/Design-OS/projects/Websites/vidya-dham-academy/docs/DESIGN_MAP.mermaid))*
