# Phase 8.1 Specification: Lenis Smooth Scroll & GSAP ScrollTrigger Scrollytelling

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 6: Component Engineering, Motion & Assets`  
> **Phase ID**: `8.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 8.1 architects and implements the foundational smooth scrolling infrastructure and GSAP ScrollTrigger scrollytelling engine for Vidya Dham Academy's digital flagship. Following the successful delivery of atomic components (Phase 7.1) and form UX validation (Phase 7.3), this phase bridges static layout architecture with continuous kinetic storytelling, establishing an Awwwards-tier spatial experience while maintaining absolute respect for user agency and accessibility.

Standard educational and commercial web pages frequently suffer from severe kinetic and spatial defects:
1. **Aggressive Scroll Hijacking**: Rigid, over-damped scroll wrappers that fight the user's trackpad or mouse wheel, causing disorientation and sluggish navigation.
2. **Ticker Desynchronization**: Running Lenis on a decoupled native `requestAnimationFrame` loop while ScrollTrigger listens to asynchronous scroll events, resulting in micro-stuttering, tearing, and dropped frames.
3. **Ghost Listeners & Memory Exhaustion**: Failing to tear down ticker callbacks, event handlers, and ScrollTrigger instances on component unmount or route changes, causing runaway CPU usage and Denial of Service (DoS) memory leaks.
4. **Disorienting Parallax Over-Animation**: Excessive translation offsets that pull attention away from critical educational decisions, fee clarity, and cohort availability metrics.
5. **Accessibility Erasure**: Ignoring system-level accessibility settings, inflicting motion sickness on users who have configured `prefers-reduced-motion: reduce`.

To establish an **Awwwards-tier craft standard**, Phase 8.1 codifies:
1. **Subtle Minimal Dampening (Lenis Engine)**: A refined 0.8s duration, `lerp: 0.15`, and `wheelMultiplier: 0.85` profile calibrated for unobtrusive, natural momentum that enhances reading flow without inducing drag or inertia fatigue.
2. **Unified GSAP Ticker Master Loop**: Direct binding of `lenis.raf()` to `gsap.ticker` with `gsap.ticker.lagSmoothing(0)` and bidirectional scroll synchronization via `lenis.on('scroll', ScrollTrigger.update)`.
3. **Multi-Layer Parallax Depth Planes**: Pinned scrollytelling showcase on the comparison track (`#comparison`), utilizing differential vertical translations across three curated depth planes (speeds 0.15, 0.30, and 0.50) with `scrub: 1.2` and `anticipatePin: 1`.
4. **Complete Reduced-Motion Bypass**: Instantaneous detection of `(prefers-reduced-motion: reduce)`. When active, Lenis instantiation is entirely bypassed, native smooth scroll is restored, and all ScrollTrigger animation targets immediately lock to their final visual states.
5. **VibeSec Lifecycle Isolation**: Comprehensive unmount cleanup using `ctx.revert()`, explicit ticker unbinding, and ScrollTrigger instance destruction to guarantee zero memory leaks or runaway background execution.

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase Interview established clear consensus across four core architectural pillars:

| Parameter | Decision Locked | Architectural Justification & Craft Caliber |
| :--- | :--- | :--- |
| **Inertia & Damping Profile** | **Subtle Minimal Dampening** (`0.8s`, `lerp: 0.15`, `wheelMultiplier: 0.85`) | Avoids sluggish trackpad fighting; provides crisp, immediate feedback with gentle edge decrescendo for editorial text scanning. |
| **Pinned Scrollytelling Showcase** | **Multi-Layer Parallax Depth Planes** (`#comparison`, speeds: 0.15, 0.30, 0.50) | Pinned viewport on comparison track scrubbing through 3 stratified depth planes, separating contextual copy, ledger cards, and telemetry markers. |
| **ScrollTrigger & Lenis Sync** | **GSAP Ticker Master Loop** (`gsap.ticker.add`, `lagSmoothing(0)`) | Unifies all kinetic updates into a single tick callback, eliminating frame desynchronization and tearing during high-frequency trackpad scrolling. |
| **Reduced Motion Compliance** | **Complete Motion Bypass & Instant Final States** | Completely omits Lenis initialization under `prefers-reduced-motion: reduce`, restores standard browser scrolling, and renders all elements at final opacity and position. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit kinetic stability, rendering performance, and accessibility ergonomics.

### Persona 1: The Contrarian (Scroll Hijacking, Mobile Inertia & Touch Lag)
- **Critique**: "Smooth scroll libraries are notorious for infuriating users by overriding native touch inertia on mobile devices and introducing unbearable lag on precision laptop trackpads. If Lenis intercepts touch drag on smartphones, the site will feel broken."
- **Mitigation & Resolution**:
  - *Touch Pointer Bypass*: Smooth scroll is explicitly restricted to fine pointer devices (`pointer: fine` and `(min-width: 768px)`). On touch devices and coarse pointers, Lenis is completely bypassed, allowing native OS inertia to govern touch scrolling.
  - *Restrained Lerp*: The chosen lerp value of $0.15$ ensures responsiveness within 2-3 animation frames, completely avoiding the floaty, detached sensation of heavy dampeners ($0.05$).

### Persona 2: The Logician (GSAP Ticker Desynchronization, Memory Leaks & Lag Smoothing)
- **Critique**: "When Lenis and ScrollTrigger run separate RAF loops, scroll values drift by 1-2 frames, causing pinned elements to jitter or jump on mobile and high-refresh (120Hz) displays. Furthermore, without deterministic teardown, navigating between views leaves orphan tickers consuming background CPU cycles."
- **Mitigation & Resolution**:
  - *Single Source of Truth Ticker*: Lenis is driven strictly through `gsap.ticker.add((time) => lenis.raf(time * 1000))` while disabling GSAP lag smoothing (`gsap.ticker.lagSmoothing(0)`).
  - *Deterministic Teardown Hook*: The motion controller returns an explicit cleanup function that invokes `ctx.revert()`, destroys the Lenis instance (`lenis.destroy()`), and detaches the GSAP ticker callback.

### Persona 3: The Buyer (Parent Focus, Content Readability & Motion Sickness Prevention)
- **Critique**: "Parents visiting this website are evaluating high-stakes academic mentorship and safety standards for their children. If text rotates or floats wildly across the screen, it appears frivolous, cheap, and difficult to read."
- **Mitigation & Resolution**:
  - *Differential Depth Planes*: Pinned scrollytelling uses linear, subtle vertical shifts without rotations or 3D disorientations. Text remains horizontally stable, high-contrast, and fully legible at all scroll velocities.
  - *Hardened A11y Contract*: Under `prefers-reduced-motion: reduce`, all pinned sections collapse into standard vertical flow with zero scrubbed transforms.

---

## 4. Skill Evidence & Formula Block

This specification directly operationalizes principles and formulas from [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md), [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 4.1 Skill Rule Citations & Invariants

- **`cinematic-gsap-lenis-motion-system` Rule 1: Single Smooth Scroll Engine**:
  Lenis is initialized as the sole smooth-scroll engine; no competing scroll controllers or conflicting CSS `scroll-behavior: smooth` rules are permitted.
- **`cinematic-gsap-lenis-motion-system` Rule 2: Ticker Synchronization**:
  Lenis RAF is driven through `gsap.ticker` so ScrollTrigger calculations and smooth scroll transforms are calculated in the exact same render step.
- **`cinematic-gsap-lenis-motion-system` Rule 3: Scrub Dampening Range**:
  ScrollTrigger scrub values must reside between `0.8` and `1.4`. Phase 8.1 establishes `scrub: 1.2` for pinned comparison storytelling.
- **`cinematic-gsap-lenis-motion-system` Rule 4: Reduced Motion Guard**:
  When `window.matchMedia("(prefers-reduced-motion: reduce)").matches` is true, smooth scroll is completely bypassed and all elements are immediately rendered in their final states.
- **`cinematic-gsap-lenis-motion-system` Rule 5: Pin Anticipation**:
  Pinned sections must specify `anticipatePin: 1` to prevent layout jumps as the pin threshold is crossed.
- **`build-awwwards-quality-sites` Rule 1: Static First Frame**:
  Every section must maintain a fully coherent static layout that remains completely accessible if JavaScript fails or motion is disabled.
- **`build-awwwards-quality-sites` Rule 2: Lifecycle Cleanup**:
  All GSAP animations must be scoped within `gsap.context()` and destroyed via `ctx.revert()` upon unmount to eliminate memory leaks and stale trigger coordinates.
- **`vibesec` Rule 1: Unbounded Execution & Resource Exhaustion Defense**:
  All continuous event listeners, scroll listeners, and animation loop tickers must register deterministic unmount handlers to prevent memory leaks and thread exhaustion.

### 4.2 Mathematical Formulas & Calculations

#### 1. Lenis Lerp Interpolation Calculus:
At frame $n$, the rendered scroll position $y_n$ approaches target scroll $Y^*$ according to:
$$y_n = y_{n-1} + \lambda (Y^* - y_{n-1})$$
Where:
- $\lambda = \text{lerp} = 0.15$
- After $k$ frames, residual distance $\epsilon = (1 - \lambda)^k = (0.85)^k$
- At $60\text{Hz}$, within 10 frames ($166\text{ms}$), residual error $< 19.6\%$; within 20 frames ($333\text{ms}$), residual error $< 3.8\%$.

#### 2. Multi-Layer Parallax Differential Velocity:
For a scroll offset $\Delta y_{\text{scroll}}$ within pinned trigger container $H_{\text{pinned}}$:
$$\Delta y_i = v_i \cdot \Delta y_{\text{scroll}}$$
Where:
- Plane 1 (Contextual Academic Headline): $v_1 = 0.15$ (stable anchor)
- Plane 2 (Pedagogy & Comparison Cards): $v_2 = 0.30$ (mid-range focus)
- Plane 3 (Telemetry Badges & Metric Hairlines): $v_3 = 0.50$ (high-depth spatial layer)

#### 3. ScrollTrigger Scrub Window Formula:
$$\text{Smoothing Latency } \tau = 1.2\text{s}$$
Interpolation damping factor $\alpha = 1 - e^{-\Delta t / \tau}$, ensuring buttery continuous ease through sudden velocity surges.

#### 4. Frame Budgeting & 60 FPS Target:
$$T_{\text{frame}} \le 16.67\text{ms}$$
To satisfy the 60 FPS rendering budget:
- Zero DOM writes (`style.width`, `offsetTop`) inside RAF callbacks.
- All animations operate exclusively on GPU composited properties: `transform: translate3d(...)` and `opacity`.

---

## 5. Implementation Architecture & File Manifest

The Phase 8.1 motion infrastructure is encapsulated within `src/motion/`:

```
src/motion/
  ├── index.ts                 # Clean public export surface
  ├── types.ts                 # Strict TypeScript interfaces for Lenis & GSAP controllers
  ├── lenisEngine.ts           # Modular Lenis smooth-scroll setup and ticker integration
  ├── scrollytelling.ts        # GSAP ScrollTrigger timeline orchestration & parallax engines
  └── MotionProvider.tsx       # React lifecycle provider with automated ctx.revert() cleanup
```

---

## 6. Verification & Quality Gates

1. **Gatekeeper Validation**:
   ```bash
   python scripts/phase_gate.py --phase 8.1 --allowed src/motion/**/* context/4-motion-choreography.md specs/phase-8.1-spec.md
   ```
2. **Blast Radius Check**: All edits restricted to `src/motion/**/*`, `context/4-motion-choreography.md`, `specs/phase-8.1-spec.md`, `context/6-progress-tracker.md`, `RESUME.md`, and `NEXT_CHAT_PROMPT.md`.
3. **Accessibility Verification**: Verified complete bypass under `prefers-reduced-motion: reduce`.
