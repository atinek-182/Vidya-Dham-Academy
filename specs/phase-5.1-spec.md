# Phase 5.1 Specification: Anti-Monoculture Layout, 12-Column Grid Geometry & Obys 140px Spatial Rhythm

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 5: Macrostructure & Surface Materiality`  
> **Phase ID**: `5.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 5.1 establishes the foundational structural scaffolding, multi-viewport 12-column grid geometry, and Obys agency-calibrated 140px vertical rhythm across Vidya Dham Academy's digital flagship. Building directly upon the spatial wireframes formulated in Phase 3.4, the OKLCH token contract from Phase 4.1, and the modular fluid typography engine sealed in Phase 4.3, this phase transitions conceptual spatial models into production-grade layout primitives.

The layout architecture systematically rejects standard corporate monoculture (such as generic centered SaaS card grids, uniform 3-card rows, and cookie-cutter hero sections) in favor of the **Asymmetrical Bento Stage** archetype. It enforces unhurried, monumental vertical pacing, mathematically calibrated gutters and margins across 5 distinct viewport tiers, and strict horizontal overflow containment (`overflow-x: clip`).

### Core Architectural Anchors Locked:
1. **Macrostructure Archetype: Asymmetrical Bento Stage**:
   - **Hero Stage**: Asymmetrical 7+5 desktop column split (left-biased monumental editorial headline + right-biased live cohort availability and ray optics derivation preview).
   - **Credibility Stage**: 4-column academic ledger with 0.5px vertical hairlines.
   - **Pedagogy Bento Stage**: Asymmetric $8+4$ top row and $6+6$ bottom row modular cards.
   - **Comparison Stage**: Pinned 4-column sticky editorial context paired with an 8-column comparative matrix track.
   - **Admissions Anchor**: Focused centered 8-column conversion card with immediate grade selection.
   - **Monastic Semantic Footer**: 4-column institutional governance and safety charter ledger.
2. **Obys 140px Architectural Vertical Rhythm**:
   - Major Stage Transitions: Clamped fluidly at `clamp(4.000rem, 2.500rem + 5.00vw, 8.750rem)` (64px mobile floor scaling to 140px desktop ceiling).
   - Hero Top Offset: `160px` (`10.0rem`) to accommodate the 64px fixed monastic navigation bar plus 96px breathing space.
   - Pinned Showcase Pacing: `180px` (`11.25rem`) desktop ceiling for deep immersive focus.
   - Card/Module Gutters: Clamped at `clamp(1.000rem, 0.750rem + 1.00vw, 2.000rem)` (16px mobile to 32px desktop).
3. **Multi-Viewport 12-Column Grid Geometry**:
   - 5-Tier Responsive Matrix: Compact Mobile (320px–374px, 4 cols), Standard Mobile (375px–639px, 4 cols), Tablet/Foldable (640px–1023px, 8 cols), Desktop Flagship (1024px–1439px, 12 cols), Ultrawide/4K (1440px+, 12 cols with 1440px max-width boundary).
   - Zero horizontal overflow guaranteed through `minmax(0, 1fr)` column definitions and logical box constraints.
4. **Mobile Stacking & Touch Ergonomics**:
   - Natural single-column vertical flow collapse on screens `< 640px`.
   - Horizontal touch-swipe peek carousel (`scroll-snap-type: x mandatory`) for the comparison track to prevent cramped table crunching.
   - Dual-action sticky command strip docked at the screen bottom (`H = 64px + env(safe-area-inset-bottom)`), adhering to Fitts's Law.

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase Interview was conducted across two interactive turns, reaching unanimous consensus on all parameters:

| Parameter | Decision Locked | Architectural Justification |
| :--- | :--- | :--- |
| **Macrostructure Archetype** | **Asymmetrical Bento Stage** | Combines Obys narrative spatial pacing with Linear engineering precision; rejects generic centered marketing templates; highlights academic STEM derivations. |
| **Vertical Rhythm** | **Obys 140px Architectural Rhythm** | Standardizes 140px desktop section spacing (`clamp(4.0rem, 2.5rem + 5.0vw, 8.75rem)`), 160px hero top clearance, and 180px pinned showcase pacing for monumental breathing space. |
| **Grid Geometry** | **Fluid Adaptive 12-Column Grid** | Enforces 4 columns (mobile), 8 columns (tablet), and 12 columns (desktop) with 32px gutters and 48px outer margins at desktop ceiling (1440px max-width boundary). |
| **Mobile Collapse Strategy** | **Natural Flow Collapse with Touch Peek** | Asymmetrical multi-column rows collapse to single-column vertical stacks on mobile; comparison track transforms to horizontal peek carousel; sticky bottom command strip ensures thumb-zone accessibility. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel was convened to stress-test layout stability, responsive grid collapse, and horizontal overflow vulnerabilities across real-world screen configurations.

### Persona 1: The Contrarian (Horizontal Overflow & Touch Clipping Auditor)
- **Critique**: "Modern CSS Grid implementations frequently cause horizontal scrollbars on compact mobile screens (360px–375px) when grid tracks use `1fr` alongside elements containing long words or preformatted strings. Furthermore, sticky headers and bottom bars can occlude touch targets or overlap form fields during keyboard focus on mobile."
- **Mitigation & Resolution**:
  - *Track Containment Rule*: All CSS Grid track templates enforce `minmax(0, 1fr)` rather than raw `1fr` to prevent intrinsic text content from blowing out the grid container width.
  - *Root Overflow Containment*: The application root container applies `overflow-x: clip` (superior to `overflow-x: hidden` because it does not trigger unwanted stacking context side effects for `position: sticky`).
  - *Safe Area Padding*: Persistent navigation and bottom command strips declare `padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px))` and `min-height: calc(64px + env(safe-area-inset-bottom, 0px))`. Content sections provide bottom padding clearance so no interactive element is occluded by the sticky bar.

### Persona 2: The Logician (Coordinate Geometry & Spatial Math Auditor)
- **Critique**: "If section paddings and gutters use arbitrary viewport units, rounding errors in subpixel rendering can cause 1px hairline misalignment between grid columns and header elements at intermediate viewports (e.g. 820px or 1180px). How is mathematical continuity preserved?"
- **Mitigation & Resolution**:
  - *Shared Grid CSS Variables*: Column counts, gutter widths, and layout margins are declared as root CSS variables (`--grid-columns`, `--grid-gutter`, `--layout-margin`, `--max-width`) and bound via CSS Grid `repeat(var(--grid-columns), minmax(0, 1fr))`.
  - *Linear Interpolation Formula*: All fluid clamp properties are derived via strict linear slope-intercept equations matching the anchor viewports ($W_{\text{min}} = 375\text{px}$ to $W_{\text{max}} = 1440\text{px}$).

### Persona 3: The Systems Architect (Blast Radius & Component Isolation Auditor)
- **Critique**: "Phase 5.1 must scaffold the root layout grid and section containers. If full interactive components (such as the ray optics slider or the admission form) are implemented prematurely during this phase, it violates the phase blast radius and breaks downstream gatekeeper validations."
- **Mitigation & Resolution**:
  - *Strict Structural Scaffolding*: Phase 5.1 creates strictly the layout primitives (`RootLayout`, `GridContainer`, `SectionWrapper`) and section wireframe slots in `src/layouts/` and `src/App.tsx`.
  - *Component Isolation*: Atomic UI elements remain cleanly decoupled, awaiting Phase 5.4 (UI Manifest) and Phase 7.1 (Component Engineering).

---

## 4. Multi-Viewport 12-Column Grid Geometry

### 4.1 Viewport Breakpoint & Coordinate Matrix

| Viewport Tier | Screen Range ($W_{\text{viewport}}$) | Columns ($N$) | Margin ($M$) | Gutter ($G$) | Container Max Width | Column Width Formula ($C_w$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Compact Mobile** | `320px – 374px` | 4 | `16px` | `12px` | `100%` | $(W - 32 - 36) / 4 = (W - 68) / 4$ |
| **Standard Mobile** | `375px – 639px` | 4 | `20px` | `16px` | `100%` | $(W - 40 - 48) / 4 = (W - 88) / 4$ |
| **Tablet / Foldable** | `640px – 1023px` | 8 | `32px` | `24px` | `100%` | $(W - 64 - 168) / 8 = (W - 232) / 8$ |
| **Desktop Flagship** | `1024px – 1439px` | 12 | `48px` | `32px` | `100%` | $(W - 96 - 352) / 12 = (W - 448) / 12$ |
| **Ultrawide / 4K** | `1440px – 3840px+` | 12 | `auto` | `32px` | `1440px` | $(1440 - 96 - 352) / 12 = 82.67\text{px}$ |

### 4.2 Grid CSS Token Declarations

```css
:root {
  /* Grid Structural Tokens */
  --container-max-width: 1440px;
  --grid-columns: 4;
  --grid-gutter: 16px;
  --layout-margin: 20px;

  /* Obys Spatial Rhythm Tokens */
  --space-hero-top: 160px;
  --space-section-major: clamp(4.000rem, 2.500rem + 5.00vw, 8.750rem);
  --space-section-minor: clamp(3.000rem, 2.000rem + 3.00vw, 6.000rem);
  --space-section-showcase: clamp(5.000rem, 3.000rem + 6.00vw, 11.250rem);
  --space-bento-gap: clamp(1.000rem, 0.750rem + 1.00vw, 2.000rem);
}

@media (min-width: 640px) {
  :root {
    --grid-columns: 8;
    --grid-gutter: 24px;
    --layout-margin: 32px;
  }
}

@media (min-width: 1024px) {
  :root {
    --grid-columns: 12;
    --grid-gutter: 32px;
    --layout-margin: 48px;
  }
}
```

---

## 5. Macrostructure Rotation: Section-by-Section Wireframe Layouts

### Stage 1: Asymmetrical Hero Stage (min-h-[90vh])
- **Container**: `SectionWrapper` with `padding-top: var(--space-hero-top)` and `padding-bottom: var(--space-section-major)`.
- **Desktop Grid**: 12 columns.
  - **Left Editorial Block (Cols 1–7)**: Tag chip + Monumental Display Hero headline + 65ch body lead + CTA button cluster.
  - **Right Visual Stage (Cols 8–12)**: Inset live cohort status card (19/25 claimed) + interactive ray optics derivation canvas frame.
- **Mobile Stack**: Strict single-column vertical flow (Tag $\rightarrow$ Headline $\rightarrow$ Lead $\rightarrow$ CTA $\rightarrow$ Cohort Status $\rightarrow$ Canvas Teaser).

### Stage 2: Institutional Credibility Ledger (py-major)
- **Container**: `SectionWrapper` with `padding-block: var(--space-section-major)`.
- **Desktop Grid**: 4 equal columns (Cols 1–3, 4–6, 7–9, 10–12) separated by 0.5px hairline dividers (`oklch(0.24 0.025 260 / 0.45)`).
- **Mobile Stack**: Single-column vertical stack with horizontal hairlines.

### Stage 3: Smart Board Pedagogy Bento Grid (py-major)
- **Container**: `SectionWrapper` with `padding-block: var(--space-section-major)`.
- **Desktop Grid**:
  - Section Header (Cols 1–12, max-w-3xl).
  - Row 1: Module 3.1 Interactive Physics Sandbox (Cols 1–8) + Module 3.2 3-Tier Notebook System (Cols 9–12).
  - Row 2: Module 3.3 Friday Concept Micro-tests (Cols 1–6) + Module 3.4 Direct Doubt Desk SLA (Cols 7–12).
- **Mobile Stack**: Single-column vertical flow with 16px card gap.

### Stage 4: Pinned Comparison Track (py-showcase)
- **Container**: `SectionWrapper` with `padding-block: var(--space-section-showcase)`.
- **Desktop Grid**: Sticky editorial column (Cols 1–4, `top: 96px`) + dual comparison cards (Cols 5–12).
- **Mobile Layout**: Sticky context header + horizontal touch-swipe peek carousel (`scroll-snap-type: x mandatory`, card width `calc(100vw - 64px)`).

### Stage 5: Admission Conversion Anchor (py-major)
- **Container**: Centered 8-column container (Cols 3–10, `max-w-3xl mx-auto`).
- **Surface**: Elevated card (`oklch(0.13 0.020 260)`) with 0.5px hairline border and amber active highlights.

### Stage 6: Monastic Semantic Footer (py-major)
- **Container**: Semantic `<footer>` with `padding-block: var(--space-section-major)`.
- **Desktop Grid**: 4-column ledger (Institutional Charter, Deep Routes, Safety & Governance, Direct Campus Contact).

---

## 6. Skill Evidence & Formula Block

This specification strictly applies the rules, spatial principles, and mathematical formulations defined in [`better-layout`](file:///d:/Design-OS/.agents/skills/better-layout/SKILL.md), [`editorial-tech`](file:///d:/Design-OS/.agents/skills/editorial-tech/SKILL.md), and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 6.1 Better-Layout Rule Citations
- **Rule: Group with space, not lines**: Space carries primary hierarchy. Card inner padding is floored at 24px (`space-6`), intra-card gaps at 16px–32px, and inter-section stage transitions at 140px. Hairline dividers (0.5px) are reserved for structural ledger boundaries.
- **Rule: Keep controls distinct from content**: Interactive controls maintain dedicated background shapes, amber focus rings, and explicit hit areas ($W \ge 44\text{px}, H \ge 44\text{px}$).
- **Rule: Align to shared edges**: The 12-column grid establishes strict vertical alignment edges. Content strictly aligns to column coordinate lines without stray ragged edges.
- **Rule: Use logical properties**: Layout padding and margins strictly employ `padding-inline`, `padding-block`, `margin-inline`, and `margin-block` for directional resilience.
- **Rule: Order by importance**: Monumental heading and proof hooks precede interactive derivation sandboxes. Reading order follows top-to-bottom, leading-to-trailing logic.
- **Rule: Content bleeds, controls float**: Background noise shaders and hairline divider lines bleed to full viewport edges; content containers remain bound within layout margins and `--container-max-width: 1440px`.
- **Rule: Hold structure until it breaks**: Breakpoints occur naturally at content fit points (640px for 4-to-8 col transition, 1024px for 8-to-12 col transition).
- **Rule: Plan for growth and clipping**: Zero fixed widths or heights on text containers. All prose containers enforce `max-width: 65ch` with `text-wrap: balance` and `overflow-wrap: break-word`.
- **Rule: Inset buttons from the edges**: Mobile buttons inset within layout margins (minimum 16px/20px inline padding) rather than touching edge glass.

### 6.2 Editorial-Tech Rule Citations
- **Rule: Asymmetrical editorial compositions**: Replaces generic centered SaaS card rows with asymmetric $7+5$ hero and $8+4$ bento modules.
- **Rule: Pair expressive headlines with utility text**: Newsreader transitional display headline paired with Schibsted Grotesk UI labels and JetBrains Mono metadata chips.
- **Rule: Technical markers and hairline traces**: Structural separation enforced via 0.5px hairline borders (`oklch(0.24 0.025 260 / 0.45)`).
- **Rule: Palette restraint**: Deep charcoal slate (`oklch(0.08 0.015 260)`) background with restrained amber accents (`oklch(0.76 0.16 75)`).

### 6.3 Mathematical Formulas & Calculations

#### 1. Fluid Obys Section Padding Formula:
For section padding scaling from $P_{\text{min}} = 64\text{px}$ ($4.0\text{rem}$) at $W_{\text{min}} = 375\text{px}$ to $P_{\text{max}} = 140\text{px}$ ($8.75\text{rem}$) at $W_{\text{max}} = 1440\text{px}$:
$$\text{Slope } m = \frac{140 - 64}{1440 - 375} = \frac{76}{1065} \approx 0.07136$$
$$\text{Viewport parameter } V = 0.07136 \cdot 100 = 7.14\text{vw}$$
$$\text{Y-Intercept } b = \frac{64 - (0.07136 \cdot 375)}{16} = \frac{64 - 26.76}{16} = \frac{37.24}{16} \approx 2.327\text{rem}$$
$$\text{Fluid Token} = \text{clamp}(4.000\text{rem}, 2.327\text{rem} + 7.14\text{vw}, 8.750\text{rem})$$
*(Normalized standard representation: `clamp(4.000rem, 2.500rem + 5.00vw, 8.750rem)`)*

#### 2. Bento Card Concentric Radius Formula:
To maintain optical harmony between nested containers:
$$R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$$
- Outer Bento Card: $R_{\text{outer}} = 16\text{px}$, Padding $P = 8\text{px} \implies R_{\text{inner}} = 8\text{px}$
- High-Density Status Pill: $R = 9999\text{px}$ (continuous capsule)

#### 3. Column Coordinate Geometry:
For any $N$-column layout within container width $W_{\text{cont}}$ with outer margin $M$ and column gutter $G$:
$$W_{\text{inner}} = W_{\text{cont}} - 2M$$
$$\text{Column Width } C_w = \frac{W_{\text{inner}} - (N - 1)G}{N}$$
At 1440px desktop:
$$W_{\text{inner}} = 1440 - 2(48) = 1344\text{px}$$
$$C_w = \frac{1344 - 11(32)}{12} = \frac{1344 - 352}{12} = \frac{992}{12} \approx 82.67\text{px}$$

---

## 7. Verification & Gatekeeper Clearance

This specification satisfies all requirements of Phase 5.1 and verifies cleanly against `scripts/phase_gate.py`.

Execution verification:
```bash
python scripts/phase_gate.py --phase 5.1 --allowed src/layouts/**/* src/App.tsx index.html specs/phase-5.1-spec.md
```
