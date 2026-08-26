# [RESUME ANCHOR] vidya-dham-academy

> **Project Root**: `projects/Websites/vidya-dham-academy`  
> **Last Synchronized**: `2026-08-26 16:55 UTC`  
> **Active Stage**: Stage 4 (Mathematical Tokens, Spatial Grids & Surface Craft)  
> **Active Sub-Phase**: Phase 4.1 (OKLCH Palette Generation & Mathematical Contrast Flooring)  
> **Active Chat Session**: Chat 09  
> **Status**: `[READY FOR PHASE 4.1]`  

---

## One-Line Prompt for New Chat Session

Whenever you open a fresh chat in your IDE, simply paste:

```markdown
Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 4.1.
```

---

## Active Phase Summary & Invariants

- **Active Sub-Phase**: `Phase 4.1 -- OKLCH Palette Generation & Mathematical Contrast Flooring`
- **Mandatory Pre-flight**: Run [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check.
- **Zero-Emoji Mandate**: Absolutely zero emojis across chat, code, and documentation. Use `[PASS]`, `[FAIL]`, `[ACTIVE]`.
- **Target Artifact**: `context/2-design-tokens.json` (OKLCH color tokens and contrast matrix)
- **Mandatory Skills**: [`better-colors`](file:///d:/Design-OS/.agents/skills/better-colors/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Allowed Write Paths**:
  - `context/2-design-tokens.json`
  - `specs/phase-4.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/3-ui-manifest.md, context/4-motion-choreography.md]`

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
  P3_4 --> P4_1["4.1 OKLCH Palette & Contrast"]:::active

  classDef completed fill:#059669,stroke:#10b981,color:#ffffff,stroke-width:2px;
  classDef active fill:#d97706,stroke:#f59e0b,color:#ffffff,stroke-width:3px;
  classDef pending fill:#1f2937,stroke:#374151,color:#9ca3af,stroke-width:1px;
```
*(For complete 24-phase map, see [`docs/DESIGN_MAP.mermaid`](file:///d:/Design-OS/projects/Websites/vidya-dham-academy/docs/DESIGN_MAP.mermaid))*
