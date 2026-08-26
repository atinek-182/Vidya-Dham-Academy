# Phase 4.1 Specification: OKLCH Palette Generation & Mathematical Contrast Flooring

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 4: Mathematical Tokens & Contrast Math`  
> **Phase ID**: `4.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 4.1 establishes the deterministic color system, perceptually uniform OKLCH token definitions, and mathematical contrast ratio flooring across Vidya Dham Academy's digital flagship. Adhering strictly to the **editorial-tech** archetype locked in Wave 2 and the spatial architecture locked in Wave 3, this color system rejects generic dark-mode cliches and neon saturation in favor of an **Ultra-Deep Obsidian** base canvas illuminated by **Radiant Amber** and **Luminous Gold** scientific accents.

### Core Color Anchors Locked (Post-Socratic Interview):
1. **Base Background Canvas**: Ultra-Deep Obsidian (`#05070c` / `oklch(0.08 0.015 260)`). Provides maximum figure-ground contrast, deep black levels on OLED/HDR displays, and laser-sharp clarity for interactive STEM vector diagrams while eliminating dark-slate gray wash.
2. **Surface Elevation Architecture**: 3-Tier Simplified Stepping.
   - Tier 1 (Canvas Base): `#05070c` (`oklch(0.08 0.015 260)`)
   - Tier 2 (Card Surface): `#0b0f19` (`oklch(0.13 0.020 260)`) for Bento cells, Smart Board containers, and faculty dossiers.
   - Tier 3 (Modal / Floating Dialog): `#121826` (`oklch(0.18 0.025 260)`) for popovers, dropdown drawers, and classroom booking modals.
   - All surface boundaries are defined by 0.5px hairline structural borders (`oklch(0.24 0.025 260 / 0.45)`) rather than heavy drop-shadows.
3. **Primary Action & Luminous Accents**:
   - Primary CTA Fill: Radiant Amber (`#f59e0b` / `oklch(0.76 0.16 75)`). High-conviction interactive fill with 9.38:1 contrast against dark obsidian.
   - Secondary Accent / Illumination: Luminous Gold (`#fbbf24` / `oklch(0.82 0.15 82)`). Used for ray-optics vectors, simulation light paths, and focus indicators with 12.07:1 contrast.
   - Button Label on Primary: Deep Obsidian (`#05070c` / `oklch(0.08 0.015 260)`). Delivers a crisp 9.38:1 contrast ratio, fully surpassing WCAG AAA (7.0:1).
4. **Contrast Target Flooring**: Dual-Tier Standard.
   - Critical Display, Headings, and Primary Body Text enforce **WCAG 2.2 AAA (>= 7.0:1)**.
   - Secondary metadata and interactive UI boundaries enforce **WCAG 2.2 AA (>= 4.5:1 text, >= 3.0:1 UI components)**.

---

## 2. Pre-Write Adversarial Audit (/roast)

A 3-persona panel was convened to stress-test color perception, dopamine ramps, and readability across real-world screen conditions.

### Persona 1: The Contrarian (Extreme Ambient Light & OLED Display Analyst)
- **Critique**: "Ultra-deep obsidian (`oklch(0.08 0.015 260)`) looks gorgeous in a dark developer room, but what happens when an Indian parent views this website outdoors in harsh 40°C Delhi or Lucknow afternoon sunlight on a mid-range Android phone with 450 nits peak brightness? Low-contrast dark grays disappear completely."
- **Mitigation & Resolution**:
  - *Hard AAA Contrast Flooring*: Primary body and heading typography (`#f8fafc`) achieves a staggering **19.26:1** contrast ratio against the obsidian background. Secondary text (`#cbd5e1`) maintains **13.57:1**. Even muted captions (`#94a3b8`) maintain **7.86:1**, fully clearing the WCAG AAA 7:1 threshold.
  - *Zero Pure Black Clipping*: The base background is held at $L = 0.08$ with subtle blue chroma ($c = 0.015, h = 260$) rather than raw `#000000`. This completely eliminates OLED black-smear artifacts during fast Lenis momentum scrolling while retaining high perceived contrast.

### Persona 2: The Logician (Color Science & Perceptual Uniformity Auditor)
- **Critique**: "In traditional sRGB/HSL color pickers, shifting hue from amber to blue causes wild unintended brightness spikes. If developers attempt to darken amber buttons by tweaking HSL, the button becomes muddy brown. How does OKLCH prevent perceptual color distortion?"
- **Mitigation & Resolution**:
  - *Constant Perceived Lightness*: In OKLCH, lightness ($L$) is decoupled from chroma ($C$) and hue ($H$). The amber primary (`oklch(0.76 0.16 75)`) and luminous accent (`oklch(0.82 0.15 82)`) sit within a tight $7°$ hue arc, maintaining constant warm temperature without muddying.
  - *Mathematical Contrast Verification*: Contrast is calculated via relative luminance matrices derived from linear sRGB transform vectors ($0.2126 R + 0.7152 G + 0.0722 B$), ensuring mathematical certainty before a single component renders.

### Persona 3: The Buyer (Discerning Parent & Focused Student Persona)
- **Critique**: "Commercial coaching sites assault parents with fluorescent red countdown bars and flashing green badges. We must look like an intellectual institution, not a casino. Does the amber accent feel academic or promotional?"
- **Mitigation & Resolution**:
  - *Single-Action Emphasis*: Amber (`#f59e0b`) is strictly reserved for primary state changes (the Saturday Classroom Visit CTA, active tab indicators, and laser vector derivations).
  - *Restrained Chroma*: Chroma is capped at $0.16$ (compared to commercial advertising yellows which exceed $0.24$), giving the amber a refined, book-illuminated warmth akin to vintage brass laboratory instruments and Oxford library reading lamps.

---

## 3. The Golden Ratio ($\phi = 1.618$) Modular Scale Architectural Analysis

### 3.1 Mathematical Theory & Visual Hierarchy
The Golden Ratio ($\phi \approx 1.6180339887$) represents the divine proportion found in natural geometry, wave dynamics, and classical book composition. When applied to typography and spatial intervals:
$$S_n = S_0 \cdot \phi^n$$
Where $S_0 = 16\text{px}$ (`1.0rem` base paragraph body):
- **Base Body**: $16.00\text{px}$ ($1.00\text{rem}$)
- **Subheading (H4 / Large Body)**: $16 \cdot 1.618 = 25.89\text{px} \approx \mathbf{26\text{px}}$ ($1.625\text{rem}$)
- **Section Title (H3)**: $25.89 \cdot 1.618 = 41.89\text{px} \approx \mathbf{42\text{px}}$ ($2.625\text{rem}$)
- **Major Heading (H2)**: $41.89 \cdot 1.618 = 67.77\text{px} \approx \mathbf{68\text{px}}$ ($4.25\text{rem}$)
- **Display Monument (H1 / Hero)**: $67.77 \cdot 1.618 = 109.66\text{px} \approx \mathbf{110\text{px}}$ ($6.875\text{rem}$)

### 3.2 Evaluation for Vidya Dham Academy
1. **Thematic Cohesion [PASS]**: As a premier offline STEM academy teaching ray optics, calculus, and vector kinematics, grounding the design in $\phi = 1.618$ provides deep intellectual resonance and authentic scientific storytelling.
2. **Desktop Visual Impact [EXCELLENT]**: On 1080p and 1440p displays, the Golden Ratio produces breathtaking editorial drama. Headings demand attention immediately, with unmistakable hierarchy over body text.
3. **Mobile Reflow Adaptation [CRITICAL REQUIREMENT]**: On a 375px mobile screen, a static 110px or 68px title causes single words (e.g. "ELECTROMAGNETISM") to blow out horizontally beyond 400px.
4. **The Architectural Resolution (Responsive Fluid Golden Clamp)**:
   - In upcoming **Phase 4.3**, we will parameterize the typography tokens using CSS `clamp()` where:
     - The **mobile floor** is anchored at a disciplined $1.25$ (Major Third) ratio to guarantee zero horizontal overflow.
     - The **desktop ceiling** fluidly expands directly into the **Golden Ratio ($\phi = 1.618$)** modular scale ($68\text{px}$ to $110\text{px}$).

---

## 4. Palette Structure & OKLCH Token Definitions

```json
{
  "color": {
    "canvas": {
      "base": "oklch(0.08 0.015 260)",
      "surface": "oklch(0.13 0.020 260)",
      "modal": "oklch(0.18 0.025 260)"
    },
    "text": {
      "primary": "oklch(0.98 0.005 260)",
      "secondary": "oklch(0.86 0.015 260)",
      "muted": "oklch(0.70 0.020 260)",
      "inverse": "oklch(0.08 0.015 260)"
    },
    "accent": {
      "primary": "oklch(0.76 0.16 75)",
      "primary-hover": "oklch(0.72 0.17 73)",
      "luminous": "oklch(0.82 0.15 82)",
      "glow": "oklch(0.76 0.16 75 / 0.15)"
    },
    "border": {
      "subtle": "oklch(0.24 0.025 260 / 0.45)",
      "strong": "oklch(0.32 0.030 260)",
      "focus": "oklch(0.76 0.16 75)"
    }
  }
}
```

---

## 5. Skill Evidence & Formula Block

This specification strictly applies the rules, principles, and mathematical contrast formulations defined in [`better-colors`](file:///d:/Design-OS/.agents/skills/better-colors/SKILL.md) and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 5.1 Better-Colors Rule Citations
- **Rule: A system is ramps, not colors**: Defined exactly one neutral obsidian ramp (`base`, `surface`, `modal`), one primary interactive amber ramp (`primary`, `primary-hover`, `glow`), and one luminous highlight ramp (`luminous`). Zero unused status colors.
- **Rule: Name primitives by hue, semantics by role**: All tokens in `context/2-design-tokens.json` use pure semantic naming (`color.canvas.base`, `color.text.primary`, `color.accent.primary`, `color.border.subtle`) rather than appearance-based names (`color.dark-black`, `color.yellow-button`).
- **Rule: Hold the hue across the ramp**: The dark neutral ramp maintains a locked hue angle of $260^\circ$ (subtle slate-blue) from $L = 0.08$ to $L = 0.98$. The accent ramp locks to $75^\circ \pm 7^\circ$ (warm radiant amber).
- **Rule: Fill exactly one action per view**: Primary filled amber (`#f59e0b`) is reserved exclusively for the primary CTA (`[Reserve Classroom Visit]`). Secondary actions use neutral glass containers with hairline borders.
- **Rule: Measure the rendered pair, then report**: Every text token is measured against the actual background surfaces it renders on (`base`, `surface`, `modal`), not just the generic page background.

### 5.2 Mathematical Formulas & Calculations

#### Relative Luminance Formula (IEC 61966-2-1 / WCAG 2.2):
For sRGB components normalized to $0.0 \le C \le 1.0$:
$$C_{\text{linear}} = \begin{cases} \frac{C}{12.92} & \text{if } C \le 0.04045 \\ \left(\frac{C + 0.055}{1.055}\right)^{2.4} & \text{if } C > 0.04045 \end{cases}$$
$$L = 0.2126 R_{\text{linear}} + 0.7152 G_{\text{linear}} + 0.0722 B_{\text{linear}}$$

#### Contrast Ratio Formula:
$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05} \quad \text{where } L_1 > L_2$$

### 5.3 Verified Mathematical Contrast Matrix

| Element Role | Foreground Color | Background Surface | Measured Ratio | WCAG Floor Target | Verification Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Primary Headline / Display** | `#f8fafc` | Base `#05070c` | **19.26:1** | $\ge 7.0:1$ (AAA) | `[PASS] WCAG AAA` |
| **Primary Headline / Display** | `#f8fafc` | Surface `#0b0f19` | **18.30:1** | $\ge 7.0:1$ (AAA) | `[PASS] WCAG AAA` |
| **Primary Headline / Display** | `#f8fafc` | Modal `#121826` | **16.95:1** | $\ge 7.0:1$ (AAA) | `[PASS] WCAG AAA` |
| **Secondary Text / Body** | `#cbd5e1` | Base `#05070c` | **13.57:1** | $\ge 7.0:1$ (AAA) | `[PASS] WCAG AAA` |
| **Secondary Text / Body** | `#cbd5e1` | Surface `#0b0f19` | **12.90:1** | $\ge 7.0:1$ (AAA) | `[PASS] WCAG AAA` |
| **Muted Metadata / Captions** | `#94a3b8` | Base `#05070c` | **7.86:1** | $\ge 4.5:1$ (AA) | `[PASS] WCAG AAA` |
| **Muted Metadata / Captions** | `#94a3b8` | Surface `#0b0f19` | **7.47:1** | $\ge 4.5:1$ (AA) | `[PASS] WCAG AAA` |
| **Button Label on Primary Fill**| `#05070c` | Primary `#f59e0b` | **9.38:1** | $\ge 4.5:1$ (AA) | `[PASS] WCAG AAA` |
| **Button Label on Accent Fill** | `#05070c` | Accent `#fbbf24` | **12.07:1** | $\ge 4.5:1$ (AA) | `[PASS] WCAG AAA` |
| **Primary CTA Fill Visibility** | `#f59e0b` | Base `#05070c` | **9.38:1** | $\ge 3.0:1$ (UI 1.4.11) | `[PASS] UI Component` |
| **Primary CTA Fill Visibility** | `#f59e0b` | Surface `#0b0f19` | **8.92:1** | $\ge 3.0:1$ (UI 1.4.11) | `[PASS] UI Component` |
| **Accent Ray Optics Fill** | `#fbbf24` | Base `#05070c` | **12.07:1** | $\ge 3.0:1$ (UI 1.4.11) | `[PASS] UI Component` |
| **Active Focus Ring / Border** | `#f59e0b` | Base `#05070c` | **9.38:1** | $\ge 3.0:1$ (UI 1.4.11) | `[PASS] UI Component` |

---

## 6. Blast Radius & Deterministic Gatekeeper Verification

- **Target Output File**: `context/2-design-tokens.json`
- **Spec Artifact**: `specs/phase-4.1-spec.md`
- **Gatekeeper Command**:
  ```bash
  python scripts/phase_gate.py --phase 4.1 --allowed context/2-design-tokens.json specs/phase-4.1-spec.md
  ```
- **Invariants**: Zero modification to `src/**/*`, `index.html`, or future wave artifacts in this phase.
