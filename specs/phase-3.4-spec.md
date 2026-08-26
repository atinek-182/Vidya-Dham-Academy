# Phase 3.4 Specification: Spatial Wireframing & Rhythm Specifications

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 3: Architecture & Spatial Wireframing`  
> **Phase ID**: `3.4`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 3.4 establishes the deterministic spatial wireframe specifications, container dimensions, 12-column grid geometry, optical alignment systems, and responsive vertical rhythm across Vidya Dham Academy's digital flagship. Building directly upon the content taxonomy locked in Phase 3.1, this specification translates abstract content hierarchies into precise spatial relationships, bounding boxes, and reflow mechanics before visual tokens and color systems are engineered in Wave 4.

### Core Spatial Anchors Locked (Post-Socratic Interview):
1. **Container Max-Width & Stage Geometry**: Constrained 1440px container (`max-w-7xl mx-auto px-6 lg:px-12`) with full-bleed section backgrounds and edge-to-edge hairline separators. Preserves strict typographic line measure (55–75 characters per line) and prevents content drift on ultrawide viewports (1440px to 3840px 4K).
2. **Visual Weight & Optical Alignment**: Asymmetrical Editorial Tension. Left-aligned display typography anchored by monospace utility tags, offset against right-aligned interactive simulation frames and metadata ledgers, establishing an intellectual, disciplined publishing rhythm.
3. **Section Vertical Rhythm**: Obys 140px Spatial Breathing Room with Responsive Compression. Uses fluid spacing `clamp(4rem, 2.5rem + 5vw, 8.75rem)` (64px mobile to 140px desktop) between pivotal narrative stages to cultivate an unhurried, institutional dignity.
4. **Mobile Stacking & Reflow Mechanics**: Single-Column Priority Cascade with Horizontal Swipe Affordance. 12-column bento grids collapse gracefully into a vertically prioritized stack on mobile (375px–428px), while high-density comparative tables and simulation controls convert into horizontal swipe containers with explicit 16px peek affordances.

---

## 2. Pre-Write Adversarial Audit (/roast)

A 3-persona panel was convened to stress-test spatial density, viewport edge-cases, and layout integrity before writing the full specification.

### Persona 1: The Contrarian (Extreme Viewport & Device Stress Analyst)
- **Critique**: "A fixed 1440px max-width container risks looking like an isolated stripe down the middle of 3840px 4K gaming and developer monitors. Conversely, on 320px narrow mobile screens (like budget Android devices prevalent in tier-2 Indian households), complex bento cards and chip selectors risk catastrophic horizontal overflow."
- **Mitigation & Resolution**:
  - *Ultrawide Handshake*: Background fills, 0.5px hairline divider rules, and atmospheric radial glows bleed 100% full-width to the viewport edge. Only readable content and interactive controls are bounded within `max-w-7xl`.
  - *320px Narrow Viewport Flooring*: All flex containers enforce `flex-wrap: wrap`, grid columns use `minmax(0, 1fr)` to prevent min-content blowout, and horizontal padding drops to `px-4` (16px) on viewports below 375px. Every interactive button and chip selector maintains a 100% fluid floor down to 320px with zero horizontal scrollbar triggers (`overflow-x: hidden` on viewport shell).

### Persona 2: The Logician (Systems Architect & Grid Performance Auditor)
- **Critique**: "Using a uniform 140px Obys vertical rhythm between all sections causes excessive scroll fatigue on mobile devices, where 140px equates to nearly 25% of the total viewport height. Furthermore, if bento card heights are hard-coded in pixels, variable-length text in different viewports will cause clipping or ugly whitespace imbalances."
- **Mitigation & Resolution**:
  - *Mathematical Fluid Clamp*: Section vertical padding is strictly parameterized via CSS fluid clamp formulas: `padding-block: clamp(4rem, 2.5rem + 5vw, 8.75rem)`. On 375px mobile, padding calculates to exactly 64px; on 1440px desktop, it expands to 140px.
  - *Intrinsic Height Rule*: No content card or bento cell may have a hard-coded fixed CSS `height`. All heights are computed via intrinsic content sizing (`min-height` coupled with explicit `aspect-ratio` where media geometry is mandatory, e.g. `aspect-ratio: 16 / 10` for the Smart Board canvas).

### Persona 3: The Buyer (Discerning Parent & Focused Student Persona)
- **Critique**: "If a parent has to scroll through endless massive spatial gaps just to find the batch size or the Saturday visit booking form, they may abandon the site before reaching the CTA. Where are the high-conviction proof points placed?"
- **Mitigation & Resolution**:
  - *Zero-Scroll Credibility Anchor*: The live cohort counter (`19/25 Seats Claimed`) is placed directly inside the hero viewport (cols 8–12 on desktop, immediately below the main CTA on mobile).
  - *Persistent Dual-Action Command Strip*: On mobile viewports, a sticky bottom command strip ($H = 64\text{px}$) keeps the `[Reserve Classroom Visit]` CTA and direct WhatsApp channel at 0-click distance at all times.

---

## 3. Grid Geometry & Spatial Metrics

### 3.1 Responsive Breakpoint Architecture

| Viewport Tier | Min Width | Max Width | Columns | Layout Margins | Gutter Width | Target Devices |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Compact Mobile** | `320px` | `374px` | 4 | `16px` (`px-4`) | `12px` | iPhone SE, small Androids |
| **Standard Mobile** | `375px` | `639px` | 4 | `20px` (`px-5`) | `16px` | iPhone 14/15, Galaxy S23 |
| **Tablet / Foldable** | `640px` | `1023px` | 8 | `32px` (`px-8`) | `24px` | iPad Mini, iPad Air, Surface |
| **Desktop Flagship** | `1024px` | `1439px` | 12 | `48px` (`px-12`) | `32px` | MacBook Pro 14/16, 1080p |
| **Ultrawide / 4K** | `1440px` | `3840px+` | 12 | `auto` (max 1440px) | `32px` | 27" Studio Display, 4K Pro |

### 3.2 Spatial Rhythm & Vertical Pacing Scale

| Spacing Token | Mobile Value | Desktop Value | Calculation / Formula | Semantic Application |
| :--- | :---: | :---: | :--- | :--- |
| `space-section-major` | `64px` | `140px` | `clamp(4rem, 2.5rem + 5vw, 8.75rem)` | Major stage transitions (Obys rhythm) |
| `space-section-minor` | `48px` | `96px` | `clamp(3rem, 2rem + 3vw, 6rem)` | Connective sub-sections & headers |
| `space-group-inter` | `24px` | `48px` | `clamp(1.5rem, 1rem + 1.5vw, 3rem)` | Inter-group separation (cards, bento) |
| `space-group-intra` | `12px` | `24px` | `clamp(0.75rem, 0.5rem + 0.75vw, 1.5rem)`| Intra-group element gaps (title to body) |
| `space-control-gap` | `8px` | `12px` | `12px` desktop / `8px` mobile | Breathing room between adjacent buttons |

---

## 4. Skill Evidence & Formula Block

This specification deterministically applies the principles and quantitative rules of [`wireframe-spec`](file:///d:/Design-OS/.agents/skills/wireframe-spec/SKILL.md) and [`better-layout`](file:///d:/Design-OS/.agents/skills/better-layout/SKILL.md).

### 4.1 Better-Layout Rule Citations & Heuristics
- **Rule 1 (Group with space, not lines)**:
  - Spacing establishes hierarchy before lines are evaluated. The gap between groups is configured at $\ge 2\times$ the gap within a single group:
    $$\text{Gap}_{\text{inter}} \ge 2 \cdot \text{Gap}_{\text{intra}}$$
    - *Applied Formula*: For bento cells, internal title-to-body spacing is `12px` (`space-3`), while cell-to-cell structural gap is `24px` (`space-6`), and section-to-section gap is `140px` (`space-section-major`).
- **Rule 2 (Keep controls distinct from content)**:
  - Every interactive control (`button`, `a`, `chip`) features a distinct background fill, a structural border, or dedicated placement zone. Interactive buttons use `border-radius: 8px` to `10px` and high-contrast amber fills (`#f59e0b`), clearly separated from static content cards (`#0c121e`).
- **Rule 3 (Align to shared edges & Logical Properties)**:
  - All multi-column modules anchor to shared 12-column grid alignment edges. Layout geometry strictly adopts directional logical properties (`padding-inline`, `padding-block`, `margin-inline`, `margin-block`, `border-inline-start`) to guarantee bidirectional layout stability and RTL adaptability.
- **Rule 4 (Hint at hidden content)**:
  - Horizontal swipe modules on mobile viewports (e.g., Pinned Comparison Track and Cohort Ledger) expose a `16px` to `32px` visible overflow peek cue past the right screen margin, providing a subconscious visual affordance for swipeability.
- **Rule 5 (Content bleeds, controls float)**:
  - Atmospheric background gradients and 0.5px hairline rules extend to the 100% viewport edge (`width: 100vw`). Interactive controls, typography, and focus states remain strictly inside container bounds and safe-area insets (`env(safe-area-inset-*)`).

### 4.2 Mathematical Formulas & Calculations

#### 1. Column Width Formula (12-Column Responsive Grid):
$$W_{\text{col}} = \frac{W_{\text{container}} - 2 \cdot M - (N - 1) \cdot G}{N}$$
Where:
- $W_{\text{container}} = 1440\text{px}$ (Desktop container cap)
- $M = 48\text{px}$ (Desktop inline margin)
- $G = 32\text{px}$ (Desktop column gutter)
- $N = 12$ (Number of columns)

Calculation:
$$W_{\text{col}} = \frac{1440 - (2 \cdot 48) - (11 \cdot 32)}{12} = \frac{1440 - 96 - 352}{12} = \frac{992}{12} = 82.66\text{px}$$
- A 7-column hero headline block spans:
  $$W_{7\text{-col}} = 7 \cdot W_{\text{col}} + 6 \cdot G = (7 \cdot 82.66) + (6 \cdot 32) = 578.62 + 192 = 770.62\text{px}$$
- A 5-column live status card spans:
  $$W_{5\text{-col}} = 5 \cdot W_{\text{col}} + 4 \cdot G = (5 \cdot 82.66) + (4 \cdot 32) = 413.30 + 128 = 541.30\text{px}$$
- Total span: $770.62 + 32\text{px (gutter)} + 541.30 = 1343.92\text{px} + 96\text{px (margins)} = 1440\text{px}$ (Exact mathematical grid closure).

#### 2. Concentric Border Radius Geometry:
$$R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$$
- Card container outer radius $R_{\text{outer}} = 16\text{px}$
- Container internal padding $P_{\text{padding}} = 8\text{px}$
- Inner nested button/chip radius:
  $$R_{\text{inner}} = 16\text{px} - 8\text{px} = 8\text{px}$$
- For compact pills: $R_{\text{outer}} = 9999\text{px}$, inner elements maintain proportional capsule geometry.

#### 3. Fitts's Law Index of Difficulty:
$$ID = \log_2\left(1 + \frac{D}{W}\right)$$
- On mobile screen, the sticky command strip is fixed at bottom: distance from natural thumb rest $D \approx 0$.
- Button width $W \ge 240\text{px}$ (75% screen width).
- $$ID = \log_2(1 + 0) = 0$$
- Acquisition time is minimized to baseline motor reaction time ($T \approx 80\text{ms}$), maximizing reservation conversion.

---

## 5. Blast Radius & Deterministic Gatekeeper Verification

- **Target Output File**: `docs/wireframe-spec.md`
- **Spec Artifact**: `specs/phase-3.4-spec.md`
- **Gatekeeper Command**:
  ```bash
  python scripts/phase_gate.py --phase 3.4 --allowed docs/wireframe-spec.md specs/phase-3.4-spec.md
  ```
- **Invariants**: Strictly forbidden to modify `src/**/*`, `index.html`, `context/2-design-tokens.json`, or `context/3-ui-manifest.md`.
