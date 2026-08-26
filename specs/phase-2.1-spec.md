# Phase 2.1 Specification: Multi-Modal Reference Ingestion & Deconstruction

> **Target Project**: `vidya-dham-academy`  
> **Workspace Root**: `projects/Websites/vidya-dham-academy`  
> **Active Sub-Phase**: `Phase 2.1` (Wave 2: Multi-Modal Reference & Mood Lock)  
> **Date**: `2026-08-26`  
> **Status**: `[DRAFT -> SIGN-OFF]`  

---

## 1. Context & Architectural Objectives

Phase 2.1 harvests, deconstructs, and standardizes multi-modal reference benchmarks for Vidya Dham Academy's digital flagship. Following the Socratic Phase Interview, the visual and technical benchmark direction is codified:

1. **Benchmark Reference Paradigm**: A disciplined synthesis of high-end editorial clarity (Linear / Obys spatial rhythm) with clear pedagogical visual demonstration (inspired by Brilliant.org's concept breakdowns), calibrated for local Indian parents and ambitious STEM aspirants.
2. **Typography & Aesthetic Tone**: Crisp Technical Precision using `Geist` (primary sans) and `DM Sans` (secondary interface text). High contrast, razor-sharp letterforms, and mathematical baseline alignment.
3. **Core Hero / Pedagogy Interaction**: Interactive Before-and-After Comparison Slider. Rather than an overly complex, CPU-heavy 3D WebGL canvas, the site demonstrates Smart Board pedagogy through an intuitive split-view comparing a traditional cluttered chalkboard with an illuminated high-clarity digital board diagram.
4. **Anti-Slop Hardening**: Complete elimination of commercial coaching cliches (generic stock photos, intrusive lead-capture popups, fake countdown timers) in favor of verified cohort counters, authentic classroom documentation, and hairline border geometry.

---

## 2. Adversarial Pre-Write Audit (/roast Council)

The 3-persona review council convened to red-team the reference specifications before committing them to `reference/MANIFEST.md`:

### Persona 1: The Contrarian
> *"A Before-and-After comparison slider is typically used for photo editing or dental transformations. Is using it for an educational smart-board comparison gimmicky, and will parents on budget smartphones struggle with the drag handle?"*

- **Rebuttal & Design Resolution**:
  1. **Cognitive Contrast & Instant Comprehension**: Traditional coaching websites verbally claim 'modern smart classrooms,' but parents cannot visualize the difference. The Before-and-After slider instantly contrasts chalk dust, cramped handwritten scribbles, and erased notes against a high-contrast vector ray-optics diagram with clean callouts. It delivers instant perceptual proof within 2 seconds.
  2. **Multi-Input Accessibility & Touch Ergonomics**: The slider is engineered with dual-mode interaction:
     - Pointer / Touch: A generous touch target ($48\text{px} \times 48\text{px}$) with active scale micro-interaction and horizontal touch-action clamp.
     - Keyboard: Full ARIA `role="slider"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, responsive to Left/Right arrow keys with 5% increments.
     - Static Fallback: On devices with `prefers-reduced-motion: reduce`, the slider defaults to a side-by-side static comparison grid.

### Persona 2: The Researcher
> *"Geist and DM Sans provide high technical precision, but could they read as too sterile or cold for an offline school where parents look for emotional warmth and trust?"*

- **Rebuttal & Design Resolution**:
  1. **Optical Legibility on Mid-Range Android**: In Tier-2 and suburban Indian markets, parents frequently access websites on sub-$200 smartphones with varying display calibrations. `Geist` features open apertures, tall x-height, and tabular numeric figures (`tnum`) that maximize legibility under bright ambient light.
  2. **Warmth Through Imagery & Content, Not Fluffy Fonts**: Warmth and emotional safety are delivered through authentic classroom photography, transparent master teacher bios with direct quotes, and calm warm neutral backgrounds rather than decorative novelty typefaces that degrade readability.

### Persona 3: The Buyer (Rajesh Sharma Persona)
> *"I do not want to be trapped behind an email capture popup or forced to give my phone number before I can see what the school actually looks like and what the fees are."*

- **Rebuttal & Design Resolution**:
  1. **Zero Lead-Gen Walls**: All pedagogical specifications, faculty credentials, batch size policies, and classroom photos are 100% publicly visible without gates.
  2. **Dual-Action Command Strip**: A persistent mobile bottom bar offers two non-intrusive actions: `[Reserve Classroom Visit]` (a 2-field bottom sheet) and `[WhatsApp Direct]`. No popups, no blocking modals.

---

## 3. Reference Deconstruction Specifications

### 3.1 Mechanism 1: Interactive Before-and-After Smart Board Visualizer

- **Target Container**: Hero Pedagogy Feature Card (`100%` width, max `1120px`, aspect ratio `16:9` desktop, `4:3` mobile).
- **Layer Stack Decomposition (in Paint Order)**:
  1. `Layer 0 (Base Canvas)`: Deep slate background (`#090d16`) with subtle 0.5px grid texture (`rgba(255,255,255,0.03)`).
  2. `Layer 1 (Before - Traditional Blackboard)`: Low-contrast chalk texture, simulated faded handwritten white chalk equations, scratched surface overlay, opacity `0.85`.
  3. `Layer 2 (After - Digital Smart Board)`: High-definition vector diagram (e.g. geometric optics ray tracing with focal points $F_1, F_2$ and illuminated cyan/amber light paths), crisp digital callout badges. Clipped via CSS `clip-path: inset(0 0 0 calc(100% - var(--divider-pos)))`.
  4. `Layer 3 (Divider Bar)`: `1.5px` vertical hairline divider in accent amber/cyan with subtle Gaussian bloom (`box-shadow: 0 0 12px rgba(245,158,11,0.4)`).
  5. `Layer 4 (Handle Nub)`: Concentric circular thumb button (`44px` outer ring, `20px` solid core with bidirectional arrows), centered on the divider bar with `touch-action: pan-y`.
  6. `Layer 5 (Floating Context Badges)`: Pill badges (`[Traditional Chalkboard]` on top-left, `[Interactive Smart Board]` on top-right) with backdrop-blur (`12px`) and 0.5px hairline border.

- **Interaction Kinematics**:
  - Drag Physics: Position clamped strictly between $5\%$ and $95\%$ of container width:
    $$x_{\text{clamped}} = \max(0.05 \cdot W, \min(x_{\text{pointer}}, 0.95 \cdot W))$$
  - Idle Autoplay Cue: On initial viewport entry, a gentle 1.2s ping-pong tease animation ($50\% \to 42\% \to 50\%$) informs the user of interactivity, immediately killed on first touch/hover.

### 3.2 Mechanism 2: Spatial Bento Grid with Hairline Border Geometry

- **Structural Grid**: 12-column responsive layout collapsing to 6 columns on tablet and 1 column on mobile.
- **Surface Elevation**: Concentric border radius math:
  $$R_{\text{card}} = 16\text{px}, \quad P_{\text{card}} = 20\text{px}, \quad R_{\text{inner}} = \max(0, R_{\text{card}} - P_{\text{card}}) = 0 \text{ or standard } 8\text{px}$$
- **Hairline Border Token**: `border: 0.5px solid rgba(255, 255, 255, 0.12)`.
- **Hover Micro-Interaction**: Scale-on-hover ($1.00 \to 1.01$), subtle border brighten to `rgba(245, 158, 11, 0.4)`, transition duration `200ms` with `ease-out`.

### 3.3 Mechanism 3: Verified Live Cohort Counter

- **Target Component**: Floating trust banner in Hero and Admissions sections.
- **Visual Structure**: Monospace utility badge with pulsing green/amber availability indicator.
- **State Machine**:
  - State: `SEATS_AVAILABLE` (Seats $\le 20$, indicator: emerald pulse).
  - State: `SEATS_CRITICAL` (Seats $> 20$ of $25$, indicator: amber glow, label: "Last 5 Seats in Batch 2026-27").
  - State: `COHORT_FULL` (Seats $= 25$, indicator: slate ring, label: "Batch Capped — Join Waitlist").
- **Kinetic Physics**: Subtle CSS radial pulse animation ($1.0 \to 1.4$ scale with opacity decay) every $2.4\text{s}$.

### 3.4 Mechanism 4: Sticky Mobile Command Strip

- **Target Viewport**: $\le 768\text{px}$.
- **Container Height**: $64\text{px}$ plus `env(safe-area-inset-bottom)`.
- **Button Targets**:
  - Primary CTA: `[Reserve Classroom Visit]` ($H = 48\text{px}$, high-contrast amber/white fill).
  - Secondary CTA: `[WhatsApp Direct]` ($H = 48\text{px}$, hairline border icon button).
- **Latency Budget**: $< 80\text{ms}$ INP on tap, opening a sub-100ms spring-eased bottom sheet dialog.

---

## 4. Anti-Slop Keep-vs-Discard Matrix

| Category | High-End References to KEEP | Commercial Coaching Slop to DISCARD |
| :--- | :--- | :--- |
| **Typography** | Crisp Technical Precision (`Geist` + `DM Sans`), proportional baseline rhythm, tabular numbers | Generic System Arial, comic fonts, screaming ALL-CAPS red warnings |
| **Layout** | 12-column Bento Grid, 0.5px hairline borders, generous negative space | Crowded banner dumps, cluttered sidebars, multi-layer floating badges |
| **Smart Board** | Interactive Before-and-After visual slider with crisp vector ray optics | Fake static stock photos of empty lecture halls, confusing 3D WebGL bloat |
| **Lead Capture** | Unobtrusive 2-field visit reservation sheet, direct 1-tap WhatsApp consultation | Immediate fullscreen popups, mandatory phone gates before viewing fees |
| **Trust Metrics** | Exact verified batch capacity counters ("19/25 Seats Claimed"), named faculty credentials | Fake countdown timers ("Only 2 hours left!"), generic stock student testimonials |
| **Motion** | Responsive Lenis scroll inertia, subtle scale-on-press (0.97), 60fps render loop | Auto-playing marketing videos with audio, dizzying parallax spins, bouncing widgets |

---

## ## Skill Evidence & Formula Block

### Rule & Standard Citations
- **Skill Citation [`explain-interface`](file:///d:/Design-OS/.agents/skills/explain-interface/SKILL.md)**:
  - Decomposing interactive mechanisms into paint-order layer stacks (`Layer 0` to `Layer 5`).
  - Distinguishing measured layout coordinates from derived kinematics and inferred design intents.
  - Specifying the exact technique on each layer rather than vague surface readouts.
- **Skill Citation [`html-to-interaction-prompts`](file:///d:/Design-OS/.agents/skills/html-to-interaction-prompts/SKILL.md)**:
  - Modular interaction prompt cards detailing Core Mechanism, CSS Tokens, React Snippet, and Teardown.
  - Encapsulated slider state machine with pointer-drag and keyboard ARIA accessibility.
- **Skill Citation [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)**:
  - Input validation on slider boundary constraints to prevent division by zero or infinite loop triggers.
  - Zero third-party unvetted CDN assets; all diagrams embedded via sanitized inline SVGs.
- **Skill Citation [`emil-design-eng`](file:///d:/Design-OS/.agents/skills/emil-design-eng/SKILL.md)**:
  - Scale-on-press physics ($0.97$), concentric border radius geometry, and fluid transition easings.

### Mathematical & Quantitative Formulas

1. **Slider Divider Position Clamp Formula**:
   $$\text{DividerPosition}(x, W) = \min\left(0.95, \max\left(0.05, \frac{x - X_{\text{container}}}{W}\right)\right)$$
   - Prevents the slider handle from clipping off the container edges on narrow mobile viewports.

2. **Clip-Path Dynamic Inset Formula**:
   $$\text{clip-path} = \text{inset}\left(0 \quad 0 \quad 0 \quad \text{calc}(100\% \cdot (1 - \text{DividerPosition}))\right)$$
   - Hardware-accelerated GPU clipping path ensuring zero layout shifts during dragging.

3. **Concentric Border Radius Geometric Invariant**:
   $$R_{\text{outer}} = R_{\text{inner}} + P_{\text{padding}} \iff R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$$
   - Preserves optical curvature concentricity between the outer Bento container and inner badges/buttons.

4. **Hairline Border Contrast Ratio Formula**:
   $$\text{CR}_{\text{border}} = \frac{L(\text{border}) + 0.05}{L(\text{background}) + 0.05} \ge 3.0:1$$
   - Guarantees 0.5px hairline card dividers satisfy WCAG 2.2 AA non-text contrast requirements.

5. **Fitts's Law Mobile Thumb Ergonomics Theorem**:
   $$T = a + b \log_2\left(1 + \frac{D}{W}\right), \quad \text{with } D \to 0, \quad W \ge 48\text{px}$$
   - Sticky bottom positioning places the primary conversion CTA directly inside the natural thumb zone ($D \approx 0$).

---

## 5. Definition of Done (DoD) Sign-Off Criteria for Phase 2.1
- [x] Reference benchmark direction locked: High-End Editorial Clarity + Pedagogical Visual Demonstration.
- [x] Typography tone locked: Crisp Technical Precision (`Geist` / `DM Sans`).
- [x] Core interaction mechanism selected & deconstructed: Interactive Before-and-After Smart Board Visualizer.
- [x] Layer stack decomposed in paint order (`Layer 0` to `Layer 5`) with mathematical clamp formulas.
- [x] Anti-Slop Keep-vs-Discard decisions fully articulated across 6 dimensions.
- [x] Adversarial `/roast` council points (Contrarian, Researcher, Buyer) addressed and resolved.
- [x] Skill Evidence & Formula Block populated with rule citations and mathematical invariants.
- [x] `reference/MANIFEST.md` populated with builder recipes and reference cards.
