# Phase 6.1 Specification: Tactile Surface Elevation, Hairline Border Engineering & Materiality Shaders

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 5: Macrostructure & Surface Materiality`  
> **Phase ID**: `6.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 6.1 engineers the tactile surface materiality, physical elevation physics, and hairline border tokens for Vidya Dham Academy's digital flagship. Operating on top of the layout scaffolding established in Phase 5.1 and the UI Component Manifest from Phase 5.4, this phase establishes the concrete optical reality of the interface before interactive state logic is implemented in Wave 6.

Corporate templates and generic website designs rely on crude 1-stop drop shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`), neon multi-color glow borders, and flat unmeasured corners. In contrast, Phase 6.1 executes an **Awwwards-tier craft standard** grounded in:
1. **Multi-Stop Natural Neutral Ambient Occlusion**: Multi-layered shadow stops derived from optical physics (`beautiful-shadows`), preventing muddy halos while creating authentic physical separation on dark slate canvas (`#05070c`).
2. **Dual-Layer Hairline Gradient Borders**: 0.5px to 1px micro-borders (`css-border-gradient`) utilizing dual-layer `padding-box` / `border-box` linear gradients (`135deg oklch(1 0 0 / 0.12)` fading to transparent) to simulate natural incident directional lighting across card edges.
3. **Harmonic Concentric Corner Geometry**: Mathematical radius scaling satisfying the concentric law $R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$, eliminating optical warping between outer bento cards ($R=16\text{px}$), nested widgets ($R=8\text{px}$), and pill capsules ($R=9999\text{px}$).
4. **Frosted Obsidian Glass Materiality**: Deep obsidian base surfaces (`oklch(0.13 0.020 260)` / `#0b0f19`) paired with hardware-accelerated `backdrop-filter: blur(16px)` and specular inner highlights (`inset 0 1px 0 rgba(255, 255, 255, 0.08)`), simulating high-precision scientific optical glass.

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase Interview was conducted across two interactive turns, establishing unanimous architectural consensus:

| Parameter | Decision Locked | Architectural Justification & Craft Caliber |
| :--- | :--- | :--- |
| **Shadow Elevation Strategy** | **Layered Natural Neutral Shadows (`beautiful-shadows`)** | Employs 6-stop sub-pixel alpha gradients for cards, panels, and modals. Eliminates muddy gray halos on dark backgrounds, achieving the tactile depth characteristic of Stripe Press and Linear. |
| **Border Highlight Treatment** | **Subtle Hairline Gradient Borders (`css-border-gradient`)** | 135-degree micro-gradient (`oklch(1 0 0 / 0.12)` $\rightarrow$ transparent) utilizing CSS background-clip masking. Reserved active amber transitions for interactive hover and focus states. |
| **Surface Materiality** | **Dark Frosted Obsidian Glass** | Deep obsidian base (`#0b0f19` / 72% alpha) with `backdrop-filter: blur(16px)` and top-edge specular highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.08)`). Imparts monastic academic gravitas without corporate SaaS slop. |
| **Concentric Geometry Law** | **Harmonic Concentric Radii ($R_{\text{inner}} = R_{\text{outer}} - P$)** | Eliminates visual tension in nested cards: 16px outer bento cards with 8px internal padding pair with 8px inner buttons/chips. 24px modals with 12px padding pair with 12px inner cards. |

### Architectural Verification of Awwwards-Tier Pedigree
Every option offered and locked in this phase and preceding phases directly reflects Awwwards Site of the Year / Site of the Day award-winning digital flagships:
- **Obys Agency Spatial Discipline**: Non-monoculture layout, 140px vertical rhythm, asymmetrical column pacing, and monumental headline scale (`clamp(4.0rem, 2.327rem + 7.14vw, 8.75rem)`).
- **Linear Engineering Precision**: Pure neutral multi-stop shadow stops, 0.5px hairline boundary definitions, high contrast ratios (19.26:1 text on canvas), and zero neon color contamination.
- **Stripe Press Intellectual Authority**: Newsreader display serif paired with Schibsted Grotesk and JetBrains Mono; authentic classroom documentary photography rather than commercial stock imagery; tabular numeric typography for institutional metrics.
- **Apple Human Interface Optical Math**: True concentric corner radius equations and subpixel hairline borders that adapt smoothly across 5 responsive viewport tiers.

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit shadow layering, subpixel rasterization, and GPU composite performance under real-world conditions.

### Persona 1: The Contrarian (GPU Composite Overhead & Layer Squashing Auditor)
- **Critique**: "Applying `backdrop-filter: blur(16px)` combined with multi-stop box-shadows across 15 bento cards simultaneously will cause excessive GPU fill-rate consumption and frame drops during fast scroll gestures on mid-range mobile GPUs (such as Mali-G57 or Adreno 610)."
- **Mitigation & Resolution**:
  - *Selective Backdrop Isolation*: `backdrop-filter: blur(16px)` is strictly restricted to persistent floating chrome (the 64px monastic top navigation dock and modal drawers).
  - *Opaque Surface Optimization for Repeating Cards*: Bento cards and modular grid rows utilize high-performance semi-translucent fills (`oklch(0.13 0.020 260 / 0.85)`) overlaid on the canvas without continuous blur passes.
  - *Composite Layer Pruning*: Multi-stop box-shadows use `translate3d(0,0,0)` promotion only on interactive hover containers, preventing global GPU memory exhaustion.

### Persona 2: The Logician (Subpixel Hairline Rendering & Concentric Radius Mathematics Auditor)
- **Critique**: "On standard 1x DPI displays or non-integer zoom levels (e.g., 125% Windows scaling), a 0.5px border often rounds to 0px or renders with uneven 1px/0px flickering along box perimeters. Furthermore, nested corner gaps will warp if padding is modified dynamically."
- **Mitigation & Resolution**:
  - *Subpixel Anti-Aliased Hairlines*: Border lines are implemented via `1px solid transparent` with `padding-box` / `border-box` gradient masking, which browsers anti-alias smoothly regardless of fractional scaling factors.
  - *CSS Variable Concentric Invariants*: Inner radius values are computed programmatically via CSS `calc()`:
    $$\text{--radius-inner}: \max(0\text{px}, \text{calc}(\text{var}(--\text{radius-outer}) - \text{var}(--\text{card-padding})))$$
    guaranteeing that optical concentricity can never drift.

### Persona 3: The Buyer (Academic Solemnity, Craft Perception & Trust Auditor)
- **Critique**: "If borders or shadows look glossy, iridescent, or game-like, parents will perceive the institute as an edtech startup rather than an elite offline coaching academy. Every shadow and highlight must project quiet academic prestige."
- **Mitigation & Resolution**:
  - *Zero Rainbow or Chromatic Noise in Core Chrome*: The default hairline borders are locked to neutral monochromatic white alpha (`oklch(1 0 0 / 0.12)` $\rightarrow$ transparent).
  - *Subtle Amber Punctuation Only*: The amber accent (`oklch(0.76 0.16 75)`) is introduced exclusively on active `:focus-visible` states and primary interactive buttons, reinforcing institutional focus.

---

## 4. Skill Evidence & Formula Block

This block provides the exact mathematical formulas, token citations, contrast ratios, and CSS utility implementations derived from the mandatory skills: [`beautiful-shadows`](file:///d:/Design-OS/.agents/skills/beautiful-shadows/SKILL.md), [`css-border-gradient`](file:///d:/Design-OS/.agents/skills/css-border-gradient/SKILL.md), and [`liquid-metal-border`](file:///d:/Design-OS/.agents/skills/liquid-metal-border/SKILL.md).

### 4.1 Skill Rule Citations & Invariants
- **`beautiful-shadows` Rule 1**: Multi-stop neutral ambient occlusion without muddy gray halos or color tinting. Use `Beautiful sm` for compact pills and controls; `Beautiful md` for standard bento cards and panels; `Beautiful lg` for hero containers and modal popovers.
- **`beautiful-shadows` Rule 2**: Never stack multiple shadow utilities on one element; keep one shadow strength per component state.
- **`css-border-gradient` Rule 1**: Border width standard is `1px` (`0.5px` visual via alpha); radius inherits parent radius; angle locked at `135deg` or `160deg`.
- **`css-border-gradient` Rule 2**: Stops must use neutral highlight (`rgba(255,255,255,0.18)`), one brand accent for active states (`oklch(0.76 0.16 75 / 0.35)`), and neutral fade (`rgba(255,255,255,0.03)`). Opacity kept below 0.4.
- **`liquid-metal-border` Contract**: WebGL animated chromatic border is reserved for active, selected, or primary hero surfaces only. Static CSS fallback must always be present. `paused` state enforced for `prefers-reduced-motion`.

### 4.2 Mathematical Formulas & Calculations

#### 1. Concentric Corner Radius Equation:
$$R_{\text{inner}} = \max\left(0\text{px},\, R_{\text{outer}} - P_{\text{padding}}\right)$$

Worked Concrete Examples:
- Standard Bento Card: $R_{\text{outer}} = 16\text{px}$, $P = 8\text{px} \implies R_{\text{inner}} = 8\text{px}$
- Hero Feature Card: $R_{\text{outer}} = 20\text{px}$, $P = 12\text{px} \implies R_{\text{inner}} = 8\text{px}$
- Modal Concept Drawer: $R_{\text{outer}} = 24\text{px}$, $P = 12\text{px} \implies R_{\text{inner}} = 12\text{px}$
- Status Capsule / Pill: $R_{\text{outer}} = 9999\text{px}$, $P = 4\text{px} \implies R_{\text{inner}} = 9999\text{px}$

#### 2. Contrast Ratios on Surface Layers:
- Primary Text (`oklch(0.98 0.005 260)` / `#f8fafc`) on Canvas Base (`oklch(0.08 0.015 260)` / `#05070c`): **19.26:1** `[PASS WCAG AAA]`
- Primary Text on Card Surface (`oklch(0.13 0.020 260)` / `#0b0f19`): **18.30:1** `[PASS WCAG AAA]`
- Secondary Text (`oklch(0.86 0.015 260)` / `#cbd5e1`) on Card Surface: **12.90:1** `[PASS WCAG AAA]`
- Muted Monospace Text (`oklch(0.70 0.020 260)` / `#94a3b8`) on Card Surface: **7.47:1** `[PASS WCAG AA]`
- Amber Focus Ring (`oklch(0.76 0.16 75)` / `#f59e0b`) on Card Surface: **8.72:1** `[PASS WCAG UI 1.4.11]`

#### 3. Exact Multi-Stop Shadow Token Formulations:
- **Beautiful sm** (compact pills, status tags, form inputs):
  ```css
  box-shadow:
    0px 2px 3px -1px rgba(0, 0, 0, 0.10),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
  ```
- **Beautiful md** (bento cards, content modules, inspection panels):
  ```css
  box-shadow:
    0px 0px 0px 1px rgba(0, 0, 0, 0.06),
    0px 1px 1px -0.5px rgba(0, 0, 0, 0.06),
    0px 3px 3px -1.5px rgba(0, 0, 0, 0.06),
    0px 6px 6px -3px rgba(0, 0, 0, 0.06),
    0px 12px 12px -6px rgba(0, 0, 0, 0.06),
    0px 24px 24px -12px rgba(0, 0, 0, 0.06);
  ```
- **Beautiful lg** (hero media containers, modal concept drawer, elevated callouts):
  ```css
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.060),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.120);
  ```
- **Dual-Layer Dark Specular Elevation** (combines deep ambient shadow with crisp top specular light):
  ```css
  box-shadow:
    0 4px 24px -2px rgba(0, 0, 0, 0.45),
    0 1px 2px 0 rgba(0, 0, 0, 0.30),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
  ```

#### 4. Dual-Layer Gradient Border Formulations:
- **Hairline Gradient Border (Solid/Translucent Surface)**:
  ```css
  border: 1px solid transparent;
  background:
    linear-gradient(var(--surface-color), var(--surface-color)) padding-box,
    linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.01)) border-box;
  ```
- **Active / Hover Gradient Border (Amber Accent Transition)**:
  ```css
  border: 1px solid transparent;
  background:
    linear-gradient(var(--surface-color), var(--surface-color)) padding-box,
    linear-gradient(135deg, rgba(245, 158, 11, 0.45), rgba(251, 191, 36, 0.20) 45%, rgba(255, 255, 255, 0.06)) border-box;
  ```

---

## 5. Surface Token Specifications & CSS Architecture

The surface architecture is structured into modular utility layers in `src/styles/surfaces.css`:

```
src/styles/
└── surfaces.css   # Surface fills, hairline borders, beautiful shadows, concentric radii
```

### 5.1 CSS Custom Properties (Tokens)
- `--surface-canvas`: `oklch(0.08 0.015 260)` (`#05070c`)
- `--surface-card`: `oklch(0.13 0.020 260)` (`#0b0f19`)
- `--surface-card-alpha`: `rgba(11, 15, 25, 0.85)`
- `--surface-modal`: `oklch(0.18 0.025 260)` (`#121826`)
- `--surface-glass`: `rgba(11, 15, 25, 0.72)`
- `--border-hairline`: `oklch(0.24 0.025 260 / 0.45)` (`#1e2638`)
- `--border-hairline-light`: `rgba(255, 255, 255, 0.12)`
- `--border-hairline-amber`: `rgba(245, 158, 11, 0.35)`
- `--radius-bento`: `16px`
- `--radius-hero`: `20px`
- `--radius-modal`: `24px`
- `--radius-control`: `8px`
- `--radius-pill`: `9999px`

### 5.2 Concrete Class Hierarchy
- `.surface-canvas`: Base page background with optical black floor.
- `.surface-card`: Monastic bento card container with dual-layer dark elevation and hairline border.
- `.surface-glass`: Floating header dock and modal drawer backdrop with 16px blur filter.
- `.surface-modal`: Inspection concept drawer container with `Beautiful lg` elevation.
- `.border-hairline`: Clean 0.5px equivalent structural perimeter.
- `.border-gradient`: Directional 135deg incident lighting border via CSS background-clip.
- `.border-gradient-amber`: Hover/active state border with amber illumination.
- `.shadow-sm`, `.shadow-md`, `.shadow-lg`: Native CSS implementations of `beautiful-shadows`.
- `.radius-bento`, `.radius-hero`, `.radius-modal`, `.radius-inner-concentric`: Enforced geometric rules.

---

## 6. Accessibility, Performance & VibeSec Compliance Gates

1. **WCAG 2.2 AA Contrast Compliance**:
   - All interactive surfaces maintain $> 4.5:1$ contrast for text labels and $> 3.0:1$ for UI control perimeters and focus rings.
   - Focus rings enforce a 2px solid amber ring (`#f59e0b`) with a 2px offset against the canvas, achieving a **9.05:1** contrast ratio.
2. **GPU Performance & Frame-Rate Protection**:
   - Zero continuous background-blur on grid items; restricted exclusively to fixed chrome (`nav` dock, modal drawers).
   - Zero layout shifts during hover: elevation changes utilize `translateY(-2px)` and shadow transitions without box model mutations.
3. **VibeSec Compliance Protocol**:
   - Zero `@import` of remote stylesheets or third-party web fonts inside CSS.
   - All gradient definitions use native CSS color functions (`oklch`, `rgba`) with zero external URL assets.
   - Reduced-motion media query (`@media (prefers-reduced-motion: reduce)`) gracefully disables all transitions, elevation shifts, and WebGL animations.

---

## 7. Verification & Acceptance Criteria (DoD Sign-off)

- [x] Socratic Phase Interview completed across 2 turns with unanimous stakeholder consensus.
- [x] Pre-Write Adversarial Audit (`/roast`) passed with GPU and concentric geometry mitigations locked.
- [x] Skill Evidence & Formula Block contains verified citations from `beautiful-shadows`, `css-border-gradient`, and `liquid-metal-border`.
- [x] Surface CSS module engineered in `src/styles/surfaces.css` adhering strictly to tokens and blast-radius rules.
- [x] Deterministic phase gatekeeper executed and verified:
  ```bash
  python scripts/phase_gate.py --phase 6.1 --allowed src/styles/**/* specs/phase-6.1-spec.md
  ```
- [x] Progress tracker and resume anchor updated for seamless resumption.
