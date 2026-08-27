# Phase 8.3 Specification: Typographic Reveals & Kinetic Micro-Interaction Dynamics

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 6: Component Engineering, Motion & Assets`  
> **Phase ID**: `8.3`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 8.3 engineers the typographic reveal engine, magnetic pointer kinematics, and border beam glow surfaces for Vidya Dham Academy's digital flagship. Operating on top of the foundational Lenis smooth scroll and GSAP ScrollTrigger scrollytelling infrastructure delivered in Phase 8.1, this phase introduces purposeful micro-interactions that draw attention to academic clarity, faculty authority, and cohort availability without compromising performance, device ergonomics, or screen reader accessibility.

Commercial landing pages frequently degrade user experience through uncalibrated kinetic noise:
1. **Inaccessible Split-Text Implementations**: Using `innerHTML` string splitting that destroys screen reader reading flow, drops word pronunciation cues, and exposes the application to DOM XSS vulnerabilities.
2. **DOM Node Bloat**: Splitting every paragraph, subheader, and label into hundreds of individual letter `<span>` elements, triggering excessive layout reflows and memory thrashing on mobile viewports.
3. **Aggressive Cursor Hijacking**: Forcing heavy, laggy custom cursors on mobile touch screens or high-latency trackpads, obscuring content and fighting the user's pointing precision.
4. **Distracting Visual Effects**: Garish neon border glows that flicker continuously across multiple cards, flattening visual hierarchy and looking like a gaming arcade rather than an esteemed academic academy.
5. **Reduced Motion Violations**: Ignoring `prefers-reduced-motion: reduce`, trapping sensitive users in disorienting animations that induce vestibular dysfunction.

To maintain an **Awwwards-tier craft standard** rooted in monastic restraint, Phase 8.3 codifies:
1. **Subtle Word-by-Word Rise**: Controlled headline reveal where words translate from `translateY(24px)` with `opacity: 0` to `opacity: 1` over `0.8s` with `cubic-bezier(0.16, 1, 0.3, 1)` and a sequential `0.06s` stagger per word, triggered once via `IntersectionObserver` with an anticipation threshold of `0.2`.
2. **Dual-Tree ARIA Accessibility Contract**: Strict separation between the visual kinetic layer (`aria-hidden="true"`) and assistive technology tree. An unsplit, visually hidden screen reader container (`sr-only`) ensures screen readers read continuous, natural sentences with zero fragmentation.
3. **Ergonomic Magnetic Pointer Dynamics**: A subtle, critically damped trailing cursor ring (`lerp: 0.18`) paired with magnetic button attraction within a $40\text{px}$ proximity radius ($k_{\text{pull}} = 0.35$). Pointer listeners strictly bind only when `window.matchMedia('(pointer: fine)').matches` evaluates to true, completely bypassing touch screens.
4. **Restrained Traveling Border Beam**: A single, elegant traveling amber-cyan highlight along the Saturday classroom visit reservation card (`duration: 4.5s`, `strength: 0.5`, `colorVariant: sunset-amber`). Automatically pauses when scrolled out of view and completely disables under reduced-motion mode.
5. **Deterministic VibeSec Lifecycle Isolation**: Every animation observer, pointer event listener, and CSS animation loop registers deterministic unmount cleanup in React `useEffect` hooks to prevent memory leaks and thread exhaustion.

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase 8.3 Interview established clear consensus across four core architectural pillars:

| Parameter | Decision Locked | Architectural Justification & Craft Caliber |
| :--- | :--- | :--- |
| **Typographic Reveal Choreography** | **Subtle Word-by-Word Rise** (`y: 24px`, `opacity: 0 -> 1`, `0.8s`, `cubic-bezier(0.16, 1, 0.3, 1)`, `stagger: 0.06s`) | Cinematic editorial pacing; avoids jarring letter splits while maintaining crisp legibility and rhythm during initial headline scanning. |
| **Assistive Tech & Split-Text A11y** | **Dual-Tree ARIA Masking** (`aria-hidden="true"` visual spans + `sr-only` unsplit text) | Guarantees 100% WCAG 2.2 compliance; screen readers experience natural phonetic cadence without staccato word pauses or lost context. |
| **Magnetic Pointer Dynamics** | **Subtle Trailing Ring & Magnetic Button Snap** (`lerp: 0.18`, $40\text{px}$ snap radius, Apple spring $d=1.0$) | Provides tactile desktop engagement without fighting pointer velocity; automatically bypassed on coarse pointer and touch devices. |
| **Surface Border Beam Glow** | **Restrained Traveling Amber-Cyan Beam** (`duration: 4.5s`, `strength: 0.5`, single conversion card focus) | Guides eye directly to the primary Saturday classroom observation CTA without decorative excess or background distraction. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit kinetic stability, rendering performance, and accessibility ergonomics.

### Persona 1: The Contrarian (DOM Bloat, Mobile Jank & Cursor Hijacking)
- **Critique**: "Splitting text into hundreds of inline elements will thrash mobile browsers and cause Cumulative Layout Shift (CLS). Furthermore, adding custom cursors on the web is almost universally despised because it creates visual lag and breaks native pointer accuracy."
- **Mitigation & Resolution**:
  - *Headline-Only Scope*: Word splitting is strictly restricted to primary display headlines (`h1` in hero, section display titles). Body copy and dense paragraphs remain un-split semantic blocks.
  - *Zero-Touch Cursor Bypass*: The magnetic pointer controller checks `window.matchMedia('(pointer: fine)')`. On touchscreens, tablets, and coarse pointers, the cursor component renders `null` and attaches zero DOM listeners.
  - *Native Pointer Preservation*: The native operating system cursor is never hidden (`cursor: none` is prohibited); the custom ring acts purely as a soft ambient trail that snaps to magnetic anchors without overriding mouse physics.

### Persona 2: The Logician (Memory Leaks, Listener Drift & Reduced Motion)
- **Critique**: "Tracking global pointer movements on `window` and running `requestAnimationFrame` loops without bulletproof teardown will create zombie event listeners and battery drain when users navigate away. Moreover, if reduced-motion preferences change at runtime, elements might stay stuck at `opacity: 0`."
- **Mitigation & Resolution**:
  - *Single Ticker & Observer Teardown*: Pointer tracking utilizes a single shared animation frame loop that automatically sleeps when pointer velocity drops below $0.01\text{px/frame}$. Every `pointermove`, `pointerleave`, and `IntersectionObserver` instance unbinds deterministically in `useEffect` cleanup.
  - *Dynamic Media Query Sync*: The system listens for runtime `change` events on `(prefers-reduced-motion: reduce)`. When activated, all reveals immediately jump to `opacity: 1`, `transform: none`, and the border beam animation pauses.

### Persona 3: The Buyer (Parent Trust, Institutional Dignity & Readability)
- **Critique**: "Parents visiting this portal are discerning adults evaluating serious STEM mentorship for competitive entrance examinations. Flashy anime-style animations or playful bouncing widgets will destroy the academy's reputation for monastic discipline and rigorous scholarship."
- **Mitigation & Resolution**:
  - *Monastic Restraint*: Zero elastic bouncing, zero neon strobing, and zero gratuitous rotational transforms.
  - *Editorial Type Alignment*: Typographic reveals use high-damped cubic bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) matching high-end editorial publications, emphasizing intellectual weight and clarity.

---

## 4. Skill Evidence & Formula Block

This specification directly operationalizes principles and formulas from [`staggered-word-reveal`](file:///d:/Design-OS/.agents/skills/staggered-word-reveal/SKILL.md), [`apple-design`](file:///d:/Design-OS/.agents/skills/apple-design/SKILL.md), [`beam-glow-states`](file:///d:/Design-OS/.agents/skills/beam-glow-states/SKILL.md), and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 4.1 Skill Rule Citations & Invariants

- **`staggered-word-reveal` Rule 1: Editorial Pacing Defaults**:
  - Initial State: `opacity: 0`, `transform: translateY(24px)`
  - Final State: `opacity: 1`, `transform: translateY(0)`
  - Duration: `0.8s`
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
  - Word Stagger: `0.06s` per word
  - Trigger: `IntersectionObserver` threshold `0.2`, `rootMargin: "0px 0px -10% 0px"`
  - Replay: Once only (`io.unobserve(entry.target)`)
- **`staggered-word-reveal` Rule 2: Dual-Tree Accessibility**:
  - The split words container must carry `aria-hidden="true"`.
  - The full, unsplit text sentence must be rendered in an adjacent `<span className="sr-only">` element to ensure screen readers read uninterrupted sentences.
- **`apple-design` Rule 1: Instant Response on Press**:
  - Interactive elements must respond immediately on `pointerdown` with `transform: scale(0.97)` andSnappy transition (`100ms ease-out`).
- **`apple-design` Rule 2: Critically Damped Springs**:
  - Magnetic snapping uses Apple's critically damped parameter profile: Damping Ratio $\zeta = 1.0$ (zero overshoot, smooth settle), Response time $\tau = 0.35\text{s}$.
- **`apple-design` Rule 3: Fine Pointer Device Isolation**:
  - Ambient pointer enhancements must only run when fine pointer input is verified via `window.matchMedia('(pointer: fine)').matches`.
- **`beam-glow-states` Rule 1: Single Dominant Surface**:
  - Exactly one conversion surface per viewport may feature an active traveling beam to prevent visual competition.
- **`beam-glow-states` Rule 2: Restrained Parameters**:
  - Preset: `size="md"`, `duration=4.5s`, `strength=0.50`, `colorVariant="sunset"` (amber/warm gold highlight).
- **`beam-glow-states` Rule 3: Reduced Motion & Off-Screen Pausing**:
  - Under `prefers-reduced-motion: reduce`, the beam motion is paused and replaced by a static high-contrast hairline border (`border: 1px solid rgba(245, 158, 11, 0.4)`).
- **`vibesec` Rule 1: Zero-Eval & Safe Text Node Injection**:
  - Text splitting must never invoke `innerHTML`, `dangerouslySetInnerHTML`, or `eval()`. All string tokens must be parsed via deterministic string splitting and mapped into React JSX elements.
- **`vibesec` Rule 2: Deterministic Unmount Teardown**:
  - All pointer event listeners and animation timers must unbind cleanly on component unmount.

### 4.2 Mathematical Formulas & Calculations

#### 1. Typographic Reveal Delay Calculus:
For a sentence containing $N$ words, word $i \in \{0, 1, \dots, N-1\}$ has a computed CSS transition delay:
$$t_{\text{delay}}(i) = i \times 0.06\text{s}$$
Total animation settle time $T_{\text{settle}}$:
$$T_{\text{settle}} = t_{\text{delay}}(N-1) + 0.8\text{s} = ((N-1) \times 0.06 + 0.8)\text{s}$$
For an 8-word headline:
$$T_{\text{settle}} = (7 \times 0.06 + 0.8)\text{s} = 0.42\text{s} + 0.8\text{s} = 1.22\text{s}$$

#### 2. Magnetic Pull Displacement Function:
For a pointer at position $P = (x_p, y_p)$ relative to button center $C = (x_c, y_c)$, the offset vector $\Delta = P - C$.
Distance $r = \|\Delta\| = \sqrt{\Delta_x^2 + \Delta_y^2}$.
Within magnetic threshold radius $R_{\text{max}} = 40\text{px}$:
$$\text{Attraction Factor } \alpha(r) = \begin{cases} \left(1 - \frac{r}{R_{\text{max}}}\right) \cdot k_{\text{pull}} & \text{if } r \le R_{\text{max}} \\ 0 & \text{if } r > R_{\text{max}} \end{cases}$$
Where $k_{\text{pull}} = 0.35$.
Button center displacement:
$$\mathbf{D} = \alpha(r) \cdot \Delta = 0.35 \cdot \left(1 - \frac{r}{40}\right) \cdot \begin{pmatrix} \Delta_x \\ \Delta_y \end{pmatrix}$$
At edge ($r = 40\text{px}$), $\mathbf{D} = \mathbf{0}$. At center ($r = 0\text{px}$), $\mathbf{D} = \mathbf{0}$. Maximum displacement occurs at $r = 20\text{px}$, yielding $\|\mathbf{D}\| = 0.35 \times 0.5 \times 20 = 3.5\text{px}$ subtle tactile suction.

#### 3. Trailing Cursor Smoothing Calculus (Exponential Lerp):
At frame $n$, the rendered cursor position $\mathbf{X}_n$ interpolates towards live pointer position $\mathbf{P}_n$:
$$\mathbf{X}_n = \mathbf{X}_{n-1} + \lambda (\mathbf{P}_n - \mathbf{X}_{n-1})$$
Where $\lambda = \text{lerp} = 0.18$.
After $k$ frames of stationary mouse, residual offset:
$$\epsilon_k = (1 - \lambda)^k = (0.82)^k$$
At $60\text{Hz}$ ($16.6\text{ms/frame}$):
- Frame 5 ($83\text{ms}$): $\epsilon_5 = (0.82)^5 = 0.370$ ($63\%$ caught up)
- Frame 12 ($200\text{ms}$): $\epsilon_{12} = (0.82)^{12} = 0.092$ ($90.8\%$ caught up)
- Frame 20 ($333\text{ms}$): $\epsilon_{20} = (0.82)^{20} = 0.018$ ($98.2\%$ caught up)

#### 4. Border Beam Travelling Conic Gradient:
Angle of beam epicenter $\theta(t)$ at time $t$ with period $T = 4.5\text{s}$:
$$\theta(t) = \left(\frac{t \pmod T}{T} \times 360^\circ\right)$$
Conic gradient stops:
$$\text{conic-gradient}(\text{from } \theta(t), \text{transparent } 0^\circ, \text{rgba}(245, 158, 11, 0.5) \text{ } 30^\circ, \text{rgba}(56, 189, 248, 0.6) \text{ } 45^\circ, \text{transparent } 90^\circ)$$

---

## 5. Technical Implementation Blueprint

### 5.1 Component Inventory

1. **`src/motion/WordReveal.tsx`**:
   - Accepts `text: string`, `as?: 'h1' | 'h2' | 'h3' | 'p'`, `className?: string`, `delayOffset?: number`.
   - Splits text into discrete words preserving spaces.
   - Generates dual-tree markup (`sr-only` unsplit text + `aria-hidden="true"` animated spans).
   - Observes element via `IntersectionObserver` and applies `.is-visible` state class.
   - Full reduced motion support.

2. **`src/motion/MagneticPointer.tsx`**:
   - Ambient trailing ring ($24\text{px}$ diameter, $1.5\text{px}$ border, amber/white styling).
   - Tracks pointer coordinates on `window` via `pointermove` with fine pointer device detection.
   - Smooths coordinate updates using exponential lerp loop.
   - Supports magnetic target attachment for elements tagged with `[data-magnetic="true"]`.
   - Completely unmounts and removes all listeners when unmounted or when reduced-motion is active.

3. **`src/components/effects/BorderBeam.tsx`**:
   - High-performance, hardware-accelerated animated border glow wrapper.
   - Conic-gradient mask using CSS keyframes with pause-on-reduced-motion.
   - Configurable props: `size?: 'sm' | 'md'`, `duration?: number`, `strength?: number`, `colorVariant?: 'amber' | 'cyan' | 'sunset'`.
   - Pauses animation when offscreen via `IntersectionObserver`.

4. **Integration in `src/App.tsx` & `src/layouts/RootLayout.tsx`**:
   - Upgrade hero headline and section titles to `<WordReveal />`.
   - Wrap primary Saturday classroom visit card with `<BorderBeam />`.
   - Attach magnetic attributes (`data-magnetic="true"`) to primary CTAs.
   - Mount `<MagneticPointer />` inside `<RootLayout />`.
