# 4. Motion Choreography & Kinetic Physics

> **Smooth Scroll Engine**: Lenis (Sole Engine)  
> **Animation Engine**: GSAP + ScrollTrigger  
> **Target Frame Rate**: 60 FPS  

---

## 1. Physics Parameters & Easing Tokens

| Token | Type | Value | Target Usage |
| :--- | :--- | :--- | :--- |
| `ease-fluid` | Cubic Bezier | `cubic-bezier(0.25, 1, 0.5, 1)` | Micro-interactions, button hover & press |
| `ease-cinematic` | Cubic Bezier | `cubic-bezier(0.16, 1, 0.3, 1)` | Page transitions, hero entry sequences |
| `duration-fast` | Duration | `150ms` | Button active scale, toggle states |
| `duration-base` | Duration | `350ms` | Card hover elevation, border shifts |
| `duration-slow` | Duration | `800ms` | Headline staggered reveals |

---

## 2. GSAP ScrollTrigger Sequence Anchors

| Trigger Target | Pin | Scrub | Start / End | Visual Effect |
| :--- | :---: | :---: | :--- | :--- |
| `#sec-hero` | `false` | `false` | `top top` | Staggered headline words rise + fade (y: 30 to 0) |
| `#sec-story` | `true` | `1.2` | `top top / bottom bottom` | Pinned scrollytelling card deck rotation |
| `.card-bento` | `false` | `false` | `top 85%` | Batch entrance: opacity 0 to 1, y: 40 to 0 |

---

## 3. Accessibility & Performance Guardrails
- **Prefers Reduced Motion**: Under `prefers-reduced-motion: reduce`, all animations must be bypassed. Set initial states to final values immediately.
- **ScrollTrigger Refresh**: Always call `ScrollTrigger.refresh()` after fonts and images finish loading.
