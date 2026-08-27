# Phase 9.1 Specification: Deterministic Vector Iconography & CC0 Photography Binding

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 6: Component Engineering, Motion & Assets`  
> **Phase ID**: `9.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 9.1 seals the deterministic visual media pipeline for Vidya Dham Academy. Building upon the 2D gravity physics badges and interactive Ray Optics derivation stage engineered in Phase 8.4, this phase replaces generic text placeholders, ad-hoc emoji markers, and unoptimized layout containers with a cohesive, hardened asset infrastructure:
1. **Curated Iconify Solar Duotone Bold Vector Family**: Replaces generic monochrome outline icons with intentional two-tone glyphs where primary geometric paths are rendered at full opacity and secondary supportive geometry is rendered at 50% opacity (`opacity=".5"`), inheriting the brand's warm amber (`oklch(0.75 0.16 75)` / `#f59e0b`) and technical cyan/slate tokens.
2. **Authentic High-Resolution CC0 Photography from Openverse**: Integrates genuine offline STEM classroom, optics laboratory, and chalkboard derivation photography. Eliminates generic corporate stock photography, uncanny AI-generated faces, and watermarked placeholders.
3. **End-to-End VibeSec Vector Sanitization Pipeline**: Every SVG asset is processed through `scripts/sanitize_svg.py` to strip `<script>`, `onload`, `onerror`, `javascript:` URIs, and external DTD entity declarations before entry into `src/assets/icons/`.
4. **Zero Cumulative Layout Shift (CLS = 0) Media Containers**: All photographic cards enforce explicit CSS aspect ratios (`aspect-video`, `aspect-[4/3]`) coupled with dark slate background placeholders (`bg-[#05070c]`) and native `loading="lazy"` / `decoding="async"`, preventing layout reflow during network hydration.

---

## 2. Socratic Interview Findings & Decisions Locked

The Phase 9.1 Socratic Interview established consensus across four architectural decisions:

| Parameter | Decision Locked | Architectural Justification & Craft Caliber |
| :--- | :--- | :--- |
| **Vector Icon Family** | **Iconify Solar Duotone Bold** | Curated two-tone glyphs with secondary fill opacity (`opacity=".5"`) matched to brand accent tokens; provides depth and visual hierarchy without generic outline slop. |
| **Photography Subject Curation** | **Authentic STEM Classrooms & Optics Laboratories** | Genuine offline student rigor, ray optics benches, and chalk derivations from Openverse (CC0/PDM); zero uncanny AI faces or corporate stock models. |
| **Asset Storage & Sanitization** | **Local Sanitized Offline Assets & React SVG Wrappers** | All SVGs sanitized via `scripts/sanitize_svg.py`, stored locally in `src/assets/icons/`, and exported as typed React primitives in `src/components/icons/`. |
| **Media Aspect Ratio & Loading** | **Explicit Aspect Ratio with Slate Skeleton & Native Lazy Loading** | `aspect-video` and `aspect-[4/3]` with `#05070c` placeholder backing to guarantee 0.00 CLS; `loading="lazy"` and `decoding="async"` for fast mobile LCP. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit media performance, cybersecurity hygiene, and institutional brand dignity.

### Persona 1: The Contrarian (LCP Penalties, Mobile Waterfalls & Image Bloat)
- **Critique**: "High-resolution photography causes massive mobile bandwidth consumption, delays Largest Contentful Paint (LCP > 2.5s), and induces layout shifting if dimensions are omitted."
- **Mitigation & Resolution**:
  - *Explicit Aspect Ratios*: Every `<img>` tag is wrapped in a container with explicit CSS `aspect-video` ($16:9$) or `aspect-[4/3]` and explicit HTML `width` / `height` hints, eliminating Cumulative Layout Shift ($\Delta \text{CLS} = 0$).
  - *Native Lazy Loading & Asynchronous Decoding*: Below-the-fold media uses `loading="lazy"` and `decoding="async"`.
  - *Dark Slate Dominant Placeholder*: Containers feature `bg-[#05070c]` and hairline borders so the layout is visually complete before image bytes arrive.

### Persona 2: The VibeSec Auditor (SVG DOM XSS, Entity Injection & Path Traversal)
- **Critique**: "Embedding external SVGs directly from the web risks DOM Cross-Site Scripting (XSS) via injected `<script>` tags, inline `onload` handlers, or XXE attacks."
- **Mitigation & Resolution**:
  - *Deterministic Pre-Flight Sanitization*: All 16 vector icons are processed through `scripts/sanitize_svg.py`, removing `<script>`, `onload`, `onerror`, `xlink:href="javascript:..."`, and `<!DOCTYPE>` declarations.
  - *Local Static Storage*: Zero dynamic URL fetching at runtime. Assets reside directly in `src/assets/icons/` with verified checksums.
  - *Pure React SVG Components*: Components in `src/components/icons/` render sanitized static JSX `<svg>` tags using `currentColor`.

### Persona 3: The Buyer Persona (Parent Trust & Academic Dignity)
- **Critique**: "Parents evaluating a serious STEM academy will instantly spot generic stock models or playful cartoon iconography, destroying trust in the institution's offline rigor promise."
- **Mitigation & Resolution**:
  - *Solar Duotone Restraint*: The Solar Duotone Bold family conveys engineered authority with subtle 50% opacity fills rather than childish cartoon colors.
  - *Authentic Academic Photography*: Images depict real laboratory apparatus (microscopes, optical lenses, laser benches, and lecture chalkboards). Zero cheesy smiling corporate handshakes.

---

## 4. Skill Evidence & Formula Block

This specification directly implements rules and formulas from [`solar-duotone-bold`](file:///d:/Design-OS/.agents/skills/solar-duotone-bold/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), and WCAG 2.2 AA standards.

### 4.1 Skill Rule Citations & Invariants

- **`solar-duotone-bold` Rule 1: Family Consistency & Monoculture Prevention**:
  - Iconify Solar Duotone Bold is established as the sole icon family for controls, navigation, and feature cards. Outline icons from unrelated icon sets are forbidden within the same component group.
- **`solar-duotone-bold` Rule 2: Intentional Duotone Opacity**:
  - Secondary fills must maintain `opacity=".5"` while the primary silhouette renders at $100\%$ opacity, ensuring secondary shapes support rather than compete with the main glyph.
- **`solar-duotone-bold` Rule 3: Text Pairing & Context**:
  - Icons must always pair with descriptive textual labels or unambiguous `aria-label` / `aria-hidden` attributes. Never rely on icons alone for unfamiliar actions.
- **`vibesec` Rule 1: Zero Vector XSS**:
  - SVGs must contain zero `<script>` tags, zero event handlers (`on\w+=`), zero `javascript:` pseudo-protocols, and zero external entity references.
- **WCAG 2.2 Rule 1.4.11: Non-Text Contrast Floor**:
  - Graphical objects and user interface components must maintain a contrast ratio of at least $3.0:1$ against adjacent backgrounds:
    $$\text{CR}(\text{Icon}, \text{Canvas}) \ge 3.0:1$$

### 4.2 Mathematical Formulas & Calculations

#### 1. Graphical Object Contrast Flooring Matrix:
- Amber Icon Accent (`#f59e0b` / `oklch(0.75 0.16 75)`):
  $$\text{Luminance } L_{\text{amber}} = 0.582, \quad \text{Canvas } L_{\text{bg}} (\#05070c) = 0.007$$
  $$\text{CR} = \frac{0.582 + 0.05}{0.007 + 0.05} = \frac{0.632}{0.057} = \mathbf{11.08:1} \quad (\text{Exceeds } 3.0:1 \text{ requirement})$$
- Slate Primary Icon Fill (`#94a3b8` / `oklch(0.71 0.02 260)`):
  $$\text{Luminance } L_{\text{slate}} = 0.362$$
  $$\text{CR} = \frac{0.362 + 0.05}{0.007 + 0.05} = \frac{0.412}{0.057} = \mathbf{7.22:1} \quad (\text{Exceeds } 3.0:1 \text{ requirement})$$
- Duotone Secondary Layer ($50\%$ Opacity Blended vs. Canvas):
  $$L_{\text{blend}} \approx 0.5 \times 0.582 + 0.5 \times 0.007 = 0.294$$
  $$\text{CR}_{\text{secondary}} = \frac{0.294 + 0.05}{0.057} = \mathbf{6.03:1} \quad (\text{Exceeds } 3.0:1 \text{ requirement})$$

#### 2. Zero Cumulative Layout Shift (CLS) Constraint:
For image container of width $w$ and height $h$:
$$\text{aspect-ratio} = \frac{w}{h} = \frac{16}{9} \approx 1.7778 \quad \text{or} \quad \frac{4}{3} \approx 1.3333$$
$$\Delta \text{CLS} = \sum (\text{Impact Fraction} \times \text{Distance Fraction}) = 0.000$$

#### 3. Concentric Radius Scaling for Icon Badges:
$$R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$$
- Bento Card: $R_{\text{outer}} = 16\text{px}$ (`rounded-2xl`), Padding $24\text{px}$ $\implies R_{\text{icon\_box}} = 10\text{px}$ (`rounded-xl`).
- Icon Capsule: Height $40\text{px}$, Width $40\text{px}$, Icon glyph size $20\text{px} \times 20\text{px}$.

---

## 5. Technical Asset Inventory & Binding Blueprint

### 5.1 Sanitized Solar Duotone Bold Icons (`src/assets/icons/`)
1. `atom-bold-duotone.svg` -- Visual Cognition Engine & Snell Derivations
2. `users-group-rounded-bold-duotone.svg` -- 25 MAX Batch Ceiling & Cohort Telemetry
3. `diploma-bold-duotone.svg` -- 100% Founding Faculty & Master Credentials
4. `clock-circle-bold-duotone.svg` -- 60-Min Daily Doubt Resolution SLA
5. `shield-check-bold-duotone.svg` -- Upfront Integrity & Campus Governance
6. `book-bookmark-bold-duotone.svg` -- 3-Tier Notebook System & Curricular Rigor
7. `target-bold-duotone.svg` -- 20-Min Friday Concept Pacing Diagnostics
8. `chat-round-dots-bold-duotone.svg` -- 1-on-1 Faculty Resolution Desk
9. `tv-bold-duotone.svg` -- 4K Interactive Digital Smart Board Stage
10. `check-circle-bold-duotone.svg` -- Vidya Dham Charter Pass Marks
11. `close-circle-bold-duotone.svg` -- Commercial Mega-Factory Fail Marks
12. `phone-calling-bold-duotone.svg` -- Direct Campus Mentorship Desk
13. `alt-arrow-right-bold-duotone.svg` -- Exploratory Pedagogical Roadmap CTA
14. `calendar-date-bold-duotone.svg` -- Saturday Classroom Visit Booking
15. `pen-new-square-bold-duotone.svg` -- Student Derivation Logs & DPP Journals
16. `star-bold-duotone.svg` -- Academic Merit & Excellence

### 5.2 Curated Openverse CC0 Photography (`src/assets/photos/`)
1. `physics-classroom-1.jpg` -- Authentic offline physics lecture hall with monumental derivation board.
2. `physics-classroom-2.jpg` -- Small cohort seminar room with interactive display focus.
3. `optics-laboratory-1.webp` -- Precision optical lens and refraction bench experiment.
4. `optics-laboratory-2.webp` -- Focused student derivation laboratory apparatus.
5. `CREDITS.txt` -- Complete public domain CC0 licensing record.

### 5.3 Component Binding Plan
- `src/components/icons/SolarIcons.tsx`: Strongly typed React SVG components wrapping all 16 sanitized Solar icons.
- `src/components/icons/index.ts`: Unified export barrel.
- `src/App.tsx`: Bind all Solar Duotone icons and CC0 photo surfaces to replace inline text indicators and empty slots.
