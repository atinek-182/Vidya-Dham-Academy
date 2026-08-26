# Phase 3.1 Specification: Content Strategy, Scrollytelling Narrative & Sitemaps

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 3: Architecture & Spatial Wireframing`  
> **Phase ID**: `3.1`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architecture Overview

Phase 3.1 establishes the foundational information architecture, content hierarchy, scrollytelling taxonomy, and navigation model for Vidya Dham Academy's digital flagship. The architecture rejects generic commercial coaching tropes (aggressive popups, countdown clocks, stock photography) in favor of an **editorial-tech** digital publication that balances intellectual authority, mathematical rigor, and radical operational transparency.

### Core Strategic Anchors Locked:
1. **Scrollytelling Narrative Arc**: Proof-First Progressive Immersion. Begins with immediate asymmetric hook and real-time cohort counter, transitions directly into the interactive Smart Board simulation proof, substantiates the "Zero Backbenchers" policy (strictly capped at 25 students), introduces the founding master mentors, and concludes with friction-free classroom visit reservation.
2. **Persistent Navigation Pattern**: Minimal Editorial Hamburger Drawer. A restrained, monastic header featuring the geometric institutional seal and high-contrast visit reservation trigger, coupled with an immersive full-screen typographic drawer that provides unhurried, focused navigation across all academic sections.
3. **Primary Section Sequence**: 6-Stage Narrative Architecture:
   - Stage 1: Asymmetric Hero (Hook + Live Seat Availability Counter)
   - Stage 2: Institutional Credibility Bar (Founding Faculty, 25-Student Batch Cap, Zero Backbenchers Policy)
   - Stage 3: Smart Board Pedagogy Bento (Visual STEM Simulations & Notebook Problem-Solving)
   - Stage 4: Pinned Comparison Track (Mass Commercial Factory vs. Intimate Rigorous Mentorship)
   - Stage 5: Conversion Anchor (Saturday Classroom Visit & Assessment Reservation)
   - Stage 6: Monastic Semantic Footer (Accreditation, Campus Address, Safety Records, WhatsApp Direct)
4. **Voice & Tone Philosophy**: Intellectual Rigor & Absolute Conviction. High-conviction academic clarity, zero corporate buzzwords, and factual operational transparency (e.g., "Batch 2026-27: 19 of 25 seats claimed; admissions close upon cohort cap").

---

## 2. Pre-Write Adversarial Audit (/roast)

A rigorous 3-persona panel was convened to stress-test the content strategy and sitemap before committing to implementation.

### Persona 1: The Contrarian (Skeptical Competitor Analyst)
- **Critique**: "A full-screen typographic drawer navigation might hide your academic syllabus and faculty pages. If a parent arrives looking specifically for Grade 11 Physics fees or Saturday timings, forcing them to open a drawer introduces unnecessary interaction friction."
- **Mitigation & Resolution**: The header retains a persistent high-contrast direct action button `[Reserve Visit]` and direct phone contact indicator. Furthermore, the 6-stage homepage acts as a complete self-contained narrative summary where every primary anchor (Pedagogy, Batch Limits, Faculty, Admissions) is directly accessible via continuous vertical scrolling without requiring navigation interaction.

### Persona 2: The Logician (Information Architect & Performance Auditor)
- **Critique**: "Scrollytelling tracks with pinned canvas simulations risk Cumulative Layout Shift (CLS) and thread locking on mid-range Android devices (e.g., Rajesh Sharma's Samsung Galaxy A-series) if the DOM structure mixes heavy layout recalculations with scroll handlers."
- **Mitigation & Resolution**: Strict separation of concern. The interactive Smart Board simulation is contained within a fixed-aspect-ratio bento card (`aspect-ratio: 16 / 10`) with zero dynamic reflow. Motion is orchestrated via GSAP ScrollTrigger with `requestAnimationFrame` debouncing, and `@media (prefers-reduced-motion: reduce)` immediately renders a static high-contrast conceptual diagram.

### Persona 3: The Buyer (Rajesh Sharma — Discerning Parent Persona)
- **Critique**: "If I visit this website, I want to know who is teaching my daughter and if the 25-student limit is real or just marketing talk. If I see generic stock photos or vague claims, I will close the tab."
- **Mitigation & Resolution**: Stage 2 and Stage 4 bind directly to verifiable offline evidence: exact teacher bios with university credentials, a real-time cohort counter (`19 / 25 Seats Claimed`), and an explicit Saturday Classroom Visit invitation where parents sit in the actual classroom before paying any admission fees.

---

## 3. Route & Page Inventory Taxonomy

Vidya Dham Academy is structured as an integrated multi-page digital flagship with deep in-page anchors:

```
[Vidya Dham Digital Flagship]
├── / (Home & Flagship Narrative)
│   ├── #hero (Asymmetric Display + Live Batch Counter)
│   ├── #credibility (Founding Faculty + Zero Backbenchers Policy)
│   ├── #pedagogy (Smart Board Interactive Canvas + In-Class Notebook Discipline)
│   ├── #comparison (Mass Coaching Factory vs. Intimate Rigorous Mentorship)
│   ├── #faculty (Master Mentor Dossiers + Daily Doubt Clearing Desks)
│   └── #admissions (Saturday Classroom Visit Reservation Bottom-Sheet)
├── /pedagogy (Deep-Dive Academic Pedagogy & Curriculum)
│   ├── STEM Interactive Derivations & Ray Optics Simulation
│   ├── Systematic Concept Mastery Framework (Grades 8–12)
│   └── Weekly Micro-Diagnostic Testing Protocol
├── /faculty (Faculty Profiles & Academic Governance)
│   ├── Founding Mentor Dossiers & Subject Specializations
│   ├── Student-Faculty Ratio Guarantee (<= 25:1)
│   └── Daily Doubt Desk Schedule
├── /admissions (Cohort Verification & Open Visit Booking)
│   ├── Real-Time Cohort Seat Ledger (Batch 2026-27)
│   ├── Transparent Fee Schedule (Zero Hidden Costs)
│   └── Saturday Open Classroom Assessment Reservation
└── /legal (Institutional Compliance & Student Safety)
    ├── Campus Physical Safety & Surveillance Charter
    └── Privacy Policy (Strict PII Minimization)
```

---

## Skill Evidence & Formula Block

This specification deterministically applies the principles and quantitative rules of [`content-strategy`](file:///d:/Design-OS/.agents/skills/content-strategy/SKILL.md), [`information-architecture`](file:///d:/Design-OS/.agents/skills/information-architecture/SKILL.md), [`navigation-patterns`](file:///d:/Design-OS/.agents/skills/navigation-patterns/SKILL.md), and [`better-layout`](file:///d:/Design-OS/.agents/skills/better-layout/SKILL.md).

### 4.1 Information Architecture & Wayfinding Heuristics
- **Rule 1 (Findability & 3-Click Rule)**: Every academic and admission outcome is discoverable within $\le 2$ interactions from the landing page. Primary CTA is 0-click persistent.
- **Rule 2 (Hierarchy Depth vs. Breadth)**: Primary navigation depth is strictly capped at 2 tiers (`/` $\rightarrow$ Section Anchor / Deep Sub-page), eliminating deep nested labyrinths.
- **Rule 3 (Information Scent & Label Clarity)**: All category labels use user-grounded vocabulary (`Pedagogy`, `Faculty`, `Cohort Limits`, `Admissions`) rather than internal corporate terminology (`Solutions`, `Offerings`, `Ecosystem`).

### 4.2 Cognitive Ergonomics & Interaction Formulas
- **Fitts's Law Index of Difficulty**:
  $$ID = \log_2\left(1 + \frac{D}{W}\right)$$
  - *Mobile Target*: Dual-action sticky bottom command strip on mobile viewports has distance $D \approx 0$ from thumb rest position, with minimum button width $W \ge 160\text{px}$ and touch height $H = 48\text{px}$.
  - *Calculation*: For $D = 0$, $ID = \log_2(1 + 0) = 0$, yielding minimum target acquisition time $T = a + b(0) = a \approx 80\text{ms}$.
- **Hick's Law Reaction Time**:
  $$RT = a + b \log_2(n)$$
  - For navigation choices $n = 4$ primary anchors (`Pedagogy`, `Faculty`, `Cohort Limits`, `Admissions`), decision time is strictly constrained:
  $$RT = a + b \log_2(4) = a + 2b \approx 240\text{ms}$$
  - Prevents cognitive paralysis compared to mega-menus with $n \ge 20$ links ($RT > 800\text{ms}$).
- **Miller's Law ($4 \pm 1$ Chunking Rule)**:
  - All bento grids and content modules chunk information into groups of 3 or 4 elements (e.g., 4 Academic Pillars, 3 Master Mentors, 4 Admissions Steps).

### 4.3 Typography & Fluid Scaling Formulas
- **Fluid Type Scale Clamping**:
  $$\text{clamp}(V_{\text{min}}, V_{\text{pref}}, V_{\text{max}})$$
  - Display Title (Hero H1):
    $$\text{clamp}(2.25\text{rem}, 1.75\text{rem} + 2.5\text{vw}, 4.25\text{rem})$$
  - Body Text (Paragraphs):
    $$\text{clamp}(1.0\text{rem}, 0.95\text{rem} + 0.25\text{vw}, 1.125\text{rem})$$
- **Contrast Ratio Verification (WCAG 2.2 AA)**:
  $$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$
  - Primary Text `#f8fafc` on Background `#090d16`: Contrast ratio = **18.57:1** (Passes WCAG AA $\ge 4.5:1$ threshold).
  - Button Text `#090d16` on Primary `#f59e0b`: Contrast ratio = **9.05:1** (Passes WCAG AA $\ge 4.5:1$ threshold).
  - Border `#f59e0b` (active state) on Surface `#0c121e`: Contrast ratio = **8.72:1** (Passes WCAG AA $\ge 3.0:1$ UI threshold).

### 4.4 Concentric Border Radius Geometry
- **Rule of Concentricity**:
  $$R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$$
  - For card container with $R_{\text{outer}} = 16\text{px}$ and $P_{\text{padding}} = 8\text{px}$, the inner interactive button or chip has:
  $$R_{\text{inner}} = 16\text{px} - 8\text{px} = 8\text{px}$$
  - Prevents visual corner distortion and maintains optical harmony.

---

## 5. Blast Radius & Deterministic Gatekeeper Verification

- **Target Output File**: `docs/sitemap.md`
- **Spec Artifact**: `specs/phase-3.1-spec.md`
- **Gatekeeper Command**:
  ```bash
  python scripts/phase_gate.py --phase 3.1 --allowed docs/sitemap.md specs/phase-3.1-spec.md
  ```
- **Invariants**: No modifications to `src/**/*`, `index.html`, or token files in this phase.
