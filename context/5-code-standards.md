# 5. Code Standards, Stack Invariants & VibeSec Gates

> **Target Stack**: `vite-react` (React 19 + TypeScript + Vite 6)  
> **Styling Architecture**: `Tailwind CSS v4` (@theme CSS-first)  
> **Motion Engine**: `GSAP 3.12+` + `@gsap/react` + `Lenis 1.1+`  
> **Workspace**: `projects/Websites/vidya-dham-academy`  
> **Status**: `[LOCKED - Phase 1.4]`  

---

## 1. Stack Invariants & Compilation Safeguards

### 1.1 Framework & Runtime (Vite + React 19 + TypeScript)
- **High-Performance Native ESM**: All modules imported via standard ES modules (`import`/`export`). Zero CommonJS `require()`.
- **Target ECMAScript**: `ES2022`.
- **Compiler Safeguards**:
  - `strict: true` in `tsconfig.json`.
  - `noImplicitAny: true`.
  - `strictNullChecks: true`.
  - `noUnusedLocals: true` and `noUnusedParameters: true`.
  - Zero implicit `any`. Component props interfaces must be exported.
- **Payload Constraint**: Initial compressed JS bundle must remain $\le 150\text{KB}$ (gzip/brotli) to guarantee mobile LCP $< 1.2\text{s}$.

### 1.2 Styling Standards (Tailwind CSS v4 @theme)
- **CSS-First Architecture**: Configured via `@theme` in `src/index.css`—no JavaScript configuration file (`tailwind.config.js` is eliminated).
- **Token Invariant**: Design tokens (colors, font families, tracking, radii) defined as native CSS variables within the `@theme` block.
- **Hairline Border Rule**: Bento cards and hairline dividers use `border-[0.5px]` with mathematically verified WCAG contrast ($\ge 3.0:1$ against adjacent backgrounds).
- **Zero Inline Style Rule**: All layout and typography styling must utilize predefined Tailwind classes or token custom properties. Raw ad-hoc `style={{ ... }}` objects are prohibited except for dynamic runtime physics transforms.

### 1.3 Motion Choreography & GSAP Lifecycle Cleanups
- **Strict useGSAP Hook Enforcement**:
  Every component containing GSAP animations or ScrollTriggers must utilize `@gsap/react`'s `useGSAP` hook with scope definition:
  ```typescript
  import { useRef } from 'react';
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';

  export const BentoCard = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      gsap.from('.bento-item', {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, { scope: containerRef, revertOnUpdate: true });

    return <div ref={containerRef} className="bento-container">...</div>;
  };
  ```
- **Fallback gsap.context() Teardown**:
  Where standard `useEffect` is required (e.g. dynamic canvas setup), return `ctx.revert()` unconditionally:
  ```typescript
  useEffect(() => {
    const ctx = gsap.context(() => {
      // timelines & triggers
    }, containerRef);
    return () => ctx.revert(); // mandatory cleanup
  }, []);
  ```
- **Single Lenis Smooth Scroll Engine**:
  Exactly one `Lenis` instance instantiated at the application root and synchronized with the GSAP ticker:
  ```typescript
  import Lenis from 'lenis';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
- **Accessibility Reduced Motion Invariant**:
  All GSAP timelines and Lenis scrolling must automatically degrade gracefully when `prefers-reduced-motion: reduce` is active:
  ```typescript
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    lenis.destroy();
    gsap.ticker.lagSmoothing(500, 33);
  }
  ```

---

## 2. Approved Dependencies Whitelist (`APPROVED_DEPS.json`)

The project operates under a closed dependency whitelist. No unlisted package may be installed without explicit Socratic review:

```json
{
  "production": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "lenis": "^1.1.20",
    "lucide-react": "^0.475.0",
    "@iconify/react": "^5.2.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.1",
    "sonner": "^2.0.1"
  },
  "development": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "^5.7.3",
    "vite": "^6.1.0"
  }
}
```

---

## 3. Ambient Umbrella Skills (Persistent Across Sessions)

The following skills are designated as **Ambient Umbrella Skills** for Vidya Dham Academy. Their rules apply across all 24 chat sessions:

1. [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md):
   - Zero-placeholder execution.
   - Purposeful canvas derivations (the Smart Board Concept Canvas).
   - Composed GSAP intro sequence for the hero.
2. [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md):
   - Exactly one smooth scroll engine (Lenis).
   - Preserves `prefers-reduced-motion: reduce` overrides.
   - Preserves unsplit accessible DOM names for staggered text reveals.
3. Aesthetic Archetype: `editorial-tech` (Monastic Swiss typography, hairline borders, rich ivory/slate surface tokens).
4. [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md):
   - Continuous cybersecurity gatekeeping.

---

## 4. VibeSec & Cybersecurity Gates

1. **SVG Security Rule**: No raw SVG may be embedded or saved into `src/assets/` without passing through `python scripts/sanitize_svg.py` to eliminate `<script>`, `onload`, and `javascript:` vector vulnerabilities.
2. **Strict Content Security Policy (CSP)**:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; worker-src 'self' blob:; object-src 'none'; base-uri 'self';">
   ```
3. **PII Minimization**: The visit reservation form collects strictly Student Grade + Parent Phone Number. Zero passwords, zero unnecessary data stored.
4. **Secret Hygiene**: Zero API keys or private tokens in client bundles or version control.
