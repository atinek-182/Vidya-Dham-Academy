# 4. Motion Choreography & Kinetic Physics

> **Smooth Scroll Engine**: Lenis (Sole Engine, Subtle Minimal Dampening)  
> **Animation Engine**: GSAP + ScrollTrigger  
> **Target Frame Rate**: 60 FPS  
> **Active Sub-Phase**: `Phase 8.1 (Locked & Verified)`  

---

## 1. Physics Parameters & Easing Tokens

| Token | Type | Value | Target Usage |
| :--- | :--- | :--- | :--- |
| `ease-fluid` | Cubic Bezier | `cubic-bezier(0.25, 1, 0.5, 1)` | Micro-interactions, button hover & press |
| `ease-cinematic` | Cubic Bezier | `cubic-bezier(0.16, 1, 0.3, 1)` | Page transitions, hero entry sequences |
| `ease-scroll-lerp` | Scalar Lerp | `0.15` | Lenis frame-by-frame interpolation velocity |
| `duration-fast` | Duration | `150ms` | Button active scale, toggle states |
| `duration-base` | Duration | `350ms` | Card hover elevation, border shifts |
| `duration-slow` | Duration | `800ms` | Headline staggered reveals & scroll duration |
| `wheel-multiplier` | Factor | `0.85` | Trackpad and mouse wheel dampening |

---

## 2. Lenis Smooth Scroll Configuration Matrix

| Parameter | Value | Architectural Justification |
| :--- | :--- | :--- |
| **Duration** | `0.8s` | Snappy deceleration, avoids sluggish trackpad fighting |
| **Lerp Factor** | `0.15` | 85% decay per frame, reaching target within 20 frames (333ms) |
| **Wheel Multiplier** | `0.85` | Refined momentum for high-density academic reading |
| **Device Filter** | `pointer: fine && width >= 768px` | Complete bypass on touch devices, retaining native OS mobile inertia |
| **Ticker Integration** | `gsap.ticker.add((t) => lenis.raf(t * 1000))` | Single-loop render synchronization with `lagSmoothing(0)` |
| **Scroll Sync** | `lenis.on('scroll', ScrollTrigger.update)` | Instantaneous bidirectional trigger recalculation |

---

## 3. GSAP ScrollTrigger Sequence Anchors

| Trigger Target | Pin | Scrub | Start / End | Visual Effect |
| :--- | :---: | :---: | :--- | :--- |
| `#hero` | `false` | `false` | `top top` | Staggered headline words rise + fade (y: 30 to 0) |
| `#comparison` | `true` | `1.2` | `top 75% / bottom 25%` | Multi-layer parallax depth planes (v: 0.15, 0.30, 0.50) |
| `.card-bento` | `false` | `false` | `top 85%` | Batch entrance: opacity 0 to 1, y: 32 to 0, stagger: 0.1s |
| `[data-parallax="1"]` | `false` | `1.2` | `top 75% / bottom 25%` | Plane 1: Sticky Context Header (y: 30 to -20, v = 0.15) |
| `[data-parallax="2"]` | `false` | `1.2` | `top 75% / bottom 25%` | Plane 2: Comparison Ledger Cards (y: 50 to -40, v = 0.30) |
| `[data-parallax="3"]` | `false` | `1.2` | `top 75% / bottom 25%` | Plane 3: Telemetry Badges & Metrics (y: 80 to -70, v = 0.50) |

---

## 4. Accessibility & Lifecycle Guardrails (VibeSec Standard)

1. **Prefers Reduced Motion**:
   - Monitored via `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - Bypasses Lenis engine instantiation entirely.
   - Instantly locks all animation targets to their final static values (`opacity: 1`, `transform: none`).
2. **Deterministic Unmount Teardown**:
   - Encapsulated within `gsap.context()` for clean scoping.
   - Always invokes `ctx.revert()`, `lenis.destroy()`, and `gsap.ticker.remove()` on React unmount.
   - Completely eliminates memory exhaustion DoS and ghost listener loops.
3. **ScrollTrigger Refresh**:
   - Invokes `ScrollTrigger.refresh()` upon document font settling (`document.fonts.ready`).
