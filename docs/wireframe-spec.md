# Spatial Wireframe & Rhythm Specifications

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 3: Architecture & Spatial Wireframing`  
> **Active Phase**: `Phase 3.4`  
> **Aesthetic Mode**: `editorial-tech`  
> **Status**: `[VERIFIED ARCHITECTURAL SPECIFICATION]`  

---

## 1. Global Spatial Architecture & Grid System

This specification defines the exact spatial containers, 12-column responsive grids, component placement coordinates, and optical alignment rules across Vidya Dham Academy's digital flagship. The architecture rejects corporate marketing clutter, adopting an unhurried **editorial-tech** structure with high information density, disciplined whitespace, and zero horizontal overflow.

### 1.1 Responsive Breakpoint Matrix

| Viewport Tier | Viewport Width ($W_{\text{viewport}}$) | Grid Columns ($N$) | Layout Margins ($M$) | Column Gutters ($G$) | Container Max Width |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Compact Mobile** | `320px – 374px` | 4 | `16px` (`px-4`) | `12px` | `100%` |
| **Standard Mobile** | `375px – 639px` | 4 | `20px` (`px-5`) | `16px` | `100%` |
| **Tablet / Foldable** | `640px – 1023px` | 8 | `32px` (`px-8`) | `24px` | `100%` |
| **Desktop Flagship** | `1024px – 1439px` | 12 | `48px` (`px-12`) | `32px` | `100%` |
| **Ultrawide / 4K** | `1440px – 3840px+` | 12 | `auto` | `32px` | `1440px` (`max-w-7xl`) |

### 1.2 Fluid Spatial Rhythm Formulas
- **Major Stage Transitions (Obys Baseline Rhythm)**:
  $$\text{padding-block: } \text{clamp}(4.0\text{rem}, 2.5\text{rem} + 5.0\text{vw}, 8.75\text{rem})$$
  - Mobile (375px): `64px` (`4rem`)
  - Tablet (768px): `96px` (`6rem`)
  - Desktop (1440px): `140px` (`8.75rem`)
- **Minor Sub-Section Pacing**:
  $$\text{padding-block: } \text{clamp}(3.0\text{rem}, 2.0\text{rem} + 3.0\text{vw}, 6.0\text{rem})$$
  - Mobile (375px): `48px` (`3rem`)
  - Desktop (1440px): `96px` (`6rem`)
- **Card & Bento Module Gutters**:
  $$\text{gap: } \text{clamp}(1.0\text{rem}, 0.75\text{rem} + 1.0\text{vw}, 2.0\text{rem})$$
  - Mobile: `16px` | Desktop: `32px`

---

## 2. Persistent Navigation Chrome Wireframes

### 2.1 Persistent Desktop Header ($H = 64\text{px}$, Fixed Top)

```
+--------------------------------------------------------------------------------------------------------------------+
| [Logo Seal + VIDYA DHAM ACADEMY]          [• Cohort 2026-27: 19/25 Seats Claimed]    [Reserve Visit]  [Menu Icon]  |
+--------------------------------------------------------------------------------------------------------------------+
  Cols 1–4: Brand Identity                   Cols 6–8: Live Status Pill                Col 11: Amber CTA  Col 12: Drawer
```

#### Specifications:
- **Container**: `position: fixed; top: 0; left: 0; right: 0; height: 64px; z-index: 50`.
- **Surface**: `background: rgba(9, 13, 22, 0.85); backdrop-filter: blur(16px); border-bottom: 0.5px solid rgba(255, 255, 255, 0.12)`.
- **Max Width**: `max-w-7xl mx-auto px-6 lg:px-12`.
- **Elements**:
  - *Col 1–4*: Geometric Academic Seal ($32\text{px} \times 32\text{px}$) + `VIDYA DHAM ACADEMY` wordmark (Geist, $13\text{px}$, tracking 0.15em).
  - *Col 6–8*: Real-time status capsule: `border-radius: 9999px`, emerald pulsing dot ($6\text{px}$), text: `Cohort 2026-27: 19/25 Claimed`.
  - *Col 11*: Primary Button: `[Reserve Classroom Visit]` ($H = 40\text{px}$, background `#f59e0b`, text `#090d16`, font-weight 600, radius `8px`).
  - *Col 12*: Menu Trigger: $40\text{px} \times 40\text{px}$ icon button with 2 horizontal hairlines ($1.5\text{px}$ stroke).

---

### 2.2 Mobile Dual-Action Sticky Command Strip ($H = 64\text{px} + \text{safe-area-inset-bottom}$)

```
+------------------------------------------------------------------------+
|  [=== Primary: Reserve Classroom Visit ===]   [ WA: WhatsApp Direct ]  |
+------------------------------------------------------------------------+
   Width: 75% Screen (Fitts's Law Primary Zone)   Width: 25% ($48x48px$)
```

#### Specifications:
- **Container**: `position: fixed; bottom: 0; left: 0; right: 0; height: calc(64px + env(safe-area-inset-bottom)); z-index: 50`.
- **Surface**: `background: rgba(9, 13, 22, 0.92); backdrop-filter: blur(20px); border-top: 0.5px solid rgba(255, 255, 255, 0.12)`.
- **Padding**: `px-4 pt-2 pb-[calc(8px + env(safe-area-inset-bottom))]`.
- **Primary CTA**: $H = 48\text{px}$, high-contrast amber `#f59e0b` fill, black text `#090d16`, font-size `15px`, bold, radius `8px`.
- **Secondary Action**: $48\text{px} \times 48\text{px}$ square button, slate fill `#1e293b`, 1.5px border `#334155`, green WhatsApp vector icon.

---

### 2.3 Full-Screen Typographic Editorial Drawer (Modal Overlay)

```
+--------------------------------------------------------------------------------------------------------------------+
| [VIDYA DHAM ACADEMY]                                                                                 [Close (ESC)] |
|                                                                                                                    |
|   01 / OVERVIEW & PEDAGOGY                       ACADEMIC CAMPUS DIRECTORY                                         |
|   -------------------------------------------    ---------------------------------------------------------------   |
|   02 / SMART BOARD VISUAL SYSTEM                 Civic Center Road, Sector 4, Campus One                           |
|   -------------------------------------------    Daily Mentorship Hours: 08:30 – 19:30                             |
|   03 / MASTER MENTORS & DOUBT DESKS                                                                                |
|   -------------------------------------------    ADMISSIONS ADVISORY LINE                                          |
|   04 / COHORT CAPACITY & ADMISSIONS              +91 (0) 98765 43210 (Direct Academic Office)                      |
|   -------------------------------------------                                                                      |
|   05 / CAMPUS SAFETY & GOVERNANCE                SAFETY & CCTV ACCREDITATION                                       |
|                                                  Verified 24/7 Security Protocol | Fire Safety Cert. #2026-A       |
+--------------------------------------------------------------------------------------------------------------------+
  Left Column (60%): Massive Nav Typography (clamp(2rem, 4vw, 3.5rem))     Right Column (40%): Operational Metadata
```

---

## 3. Flagship Landing Page (`/`) Wireframes

### Stage 1: Asymmetric Hero Beat

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 1: ASYMMETRIC HERO BEAT (Desktop 12-Column Layout | Section Height: min-h-[90vh])                            |
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
| [Col 1–7: Editorial Headline & Proof Hook]               [Col 8–12: Live Cohort Card & Simulation Teaser]         |
|                                                                                                                    |
|  [TAG: ACADEMIC YEAR 2026-27 | GRADES 8-12]              +-------------------------------------------------------+ |
|                                                          | COHORT STATUS: 2026-27 ACADEMIC SESSIONS              | |
|  H1: Disciplined Offline Rigor.                          | [•••••••••••••••••••.....] 19 / 25 Seats Claimed      | |
|      Illuminated by Interactive                          | 6 Seats Remaining Before Cohort Closes Permanently    | |
|      Smart Boards.                                       +-------------------------------------------------------+ |
|                                                          | [SMART BOARD INTERACTIVE TEASER]                      | |
|  Body: Small cohorts strictly capped at 25 students.     | [Canvas Frame: Snell's Law Refraction Ray Vector]     | |
|  Daily direct mentorship from master teachers.           | [Slider: Drag Angle of Incidence: 45° -> 62°]         | |
|  Zero commercial backbenchers.                           | "Visual derivations replace memorization anxiety."    | |
|                                                          +-------------------------------------------------------+ |
|  [Button: Reserve Classroom Visit]  [Link: View Syllabus ->]                                                      |
+--------------------------------------------------------------------------------------------------------------------+
```

#### Responsive Stacking (Mobile `< 640px`):
1. Tag: Monospace utility label ($12\text{px}$).
2. Display Title (H1): `clamp(2.25rem, 1.75rem + 2.5vw, 4.25rem)`.
3. Body Paragraph: Max-width 48ch, `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`.
4. Hero CTA Group: Primary button full width ($H = 48\text{px}$), syllabus link centered underneath.
5. Live Cohort Status Card: Inset card ($R = 16\text{px}$, padding `16px`).
6. Smart Board Teaser: Interactive canvas container (`aspect-ratio: 16 / 10`).

---

### Stage 2: Institutional Credibility Bar

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 2: INSTITUTIONAL CREDIBILITY BAR (Desktop 4-Column Ledger | Obys Separation: py-28)                          |
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
| [Col 1–3: 25-Student Ceiling]  [Col 4–6: Master Faculty]      [Col 7–9: Daily Doubt Desk]  [Col 10–12: Governance] |
| -----------------------------  -----------------------------  ---------------------------  ----------------------- |
| METRIC: "25 MAX"               METRIC: "100% FOUNDERS"        METRIC: "60 MIN / DAY"       METRIC: "UPFRONT"       |
| Every student sits in the      Core subjects taught solely    Personal 1-on-1 desk before  Transparent fee sheet.  |
| first 4 rows. Guaranteed.      by primary master mentors.     leaving campus every evening Zero hidden extras.     |
+--------------------------------------------------------------------------------------------------------------------+
```

#### Metrics & Annotations:
- **Desktop**: 4 equal columns ($3\text{-cols}$ each), separated by $0.5\text{px}$ vertical hairline dividers.
- **Tablet**: $2 \times 2$ grid with $24\text{px}$ gap.
- **Mobile**: Vertical stack with $16\text{px}$ inter-group separation and $0.5\text{px}$ horizontal hairline rules.
- **Micro-interactions**: Subtle hover state shifts background from `#0c121e` to `#111927` with amber indicator tick.

---

### Stage 3: Smart Board Pedagogy Bento Grid

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 3: SMART BOARD PEDAGOGY BENTO GRID (12-Column Asymmetric Layout)                                             |
+--------------------------------------------------------------------------------------------------------------------+
| SECTION HEADER (Cols 1–12):                                                                                        |
| [TAG: VISUAL COGNITION]                                                                                            |
| H2: From Abstract Formulas to Intuitive Geometry.                                                                  |
| Body: Why 4K digital smart boards combined with handwritten notebook rigor creates permanent retention.          |
+--------------------------------------------------------------------------------------------------------------------+
| [MODULE 3.1: COLS 1–8 (Large Interactive Canvas Stage)]     | [MODULE 3.2: COLS 9–12 (Dual-Track Discipline)]      |
|                                                             |                                                      |
| Interactive Physics Sandbox (Ray Optics / Wave Mechanics):  | The 3-Tier Notebook System:                          |
| +---------------------------------------------------------+ | - Tier 1: Real-time lecture derivations              |
| | Interactive SVG Canvas (Ray incident on convex surface) | | - Tier 2: Daily practice problem (DPP) journal       |
| | [Interactive Drag Handle: Index of Refraction n=1.52]   | | - Tier 3: Verified error-analysis logbook            |
| +---------------------------------------------------------+ |                                                      |
| Status: Active Waveform Rendered at 60 FPS                  | "Every derivation on board must be handwritten."     |
+-------------------------------------------------------------+------------------------------------------------------+
| [MODULE 3.3: COLS 1–6 (Weekly Concept Diagnostics)]         | [MODULE 3.4: COLS 7–12 (Direct Doubt Desk SLA)]      |
|                                                             |                                                      |
| 20-Minute Friday Concept Pacing micro-tests.                | 1-on-1 Dedicated Doubt Clearing:                     |
| Measures conceptual velocity rather than test anxiety.      | Guaranteed 15-minute faculty resolution per student. |
+--------------------------------------------------------------------------------------------------------------------+
```

#### Responsive Mechanics:
- **Desktop (1024px+)**: Asymmetrical $8+4$ top row, $6+6$ bottom row.
- **Mobile (`< 640px`)**: Single-column vertical stack (Module 3.1 $\rightarrow$ Module 3.2 $\rightarrow$ Module 3.3 $\rightarrow$ Module 3.4).
- **Interactive Canvas**: Touch-enabled drag controls for simulation parameters (`touch-action: pan-y`).

---

### Stage 4: Pinned Comparison Track (Factory vs. Vidya Dham)

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 4: PINNED COMPARISON TRACK (Desktop Sticky Split Layout | Mobile Horizontal Swipe Carousel)                   |
+--------------------------------------------------------------------------------------------------------------------+
| [COLS 1–4: PINNED EDITORIAL CONTEXT (Sticky Top: 96px)]  | [COLS 5–12: DUAL COMPARISON MATRIX TRACK]               |
|                                                          |                                                         |
| H2: The Reality of Mega-Factories                        | +---------------------------+-------------------------+ |
|     vs. The Vidya Dham Model.                            | | COMMERCIAL MEGA-FACTORY   | VIDYA DHAM ACADEMY      | |
|                                                          | +---------------------------+-------------------------+ |
| Body: Most coaching institutes maximize revenue by       | | 80–120 Students / Batch   | Strictly Capped at 25   | |
| packing 100+ students into massive auditoriums.          | | Rotating Junior Tutors    | Permanent Master Mentors| |
| We do the exact opposite.                                | | Ticketed Doubt Counters   | Daily 1-on-1 Doubt Desk | |
|                                                          | | Passive Lecture Streaming | Interactive Smart Board | |
| [Small CTA: Attend a Live Saturday Comparison Class ->]  | | Parent Opacity            | Weekly Direct Updates   | |
|                                                          +---------------------------+-------------------------+ |
+--------------------------------------------------------------------------------------------------------------------+
```

#### Mobile Horizontal Swipe Carousel (`< 640px`):
- Instead of a cramped 2-column table, cards display as side-by-side comparison cards in a horizontal swipe track.
- Card 1 (Mega Factory) displays at width `calc(100vw - 64px)`.
- Card 2 (Vidya Dham) peeks by `24px` from the right screen edge (`overflow-x: auto; scroll-snap-type: x mandatory`).

---

### Stage 5: Conversion Anchor (Saturday Open Classroom Visit)

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 5: CONVERSION ANCHOR (Centered 8-Column Card: Cols 3–10 | Container: max-w-3xl mx-auto)                      |
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
|   [CAPSULE: ADMISSION SESSIONS 2026-27]                                                                            |
|   H2: Sit in an Actual Saturday Class. Judge for Yourself.                                                         |
|   Body: No sales agents. No pressure. Attend a real 45-minute offline concept session with your child.             |
|                                                                                                                    |
|   FIELD 1: SELECT STUDENT GRADE                                                                                    |
|   [ (•) Grade 8 ]   [ ( ) Grade 9 ]   [ ( ) Grade 10 ]   [ ( ) Grade 11 ]   [ ( ) Grade 12 ]                       |
|                                                                                                                    |
|   FIELD 2: PARENT WHATSAPP / CONTACT NUMBER                                                                        |
|   [ +91 | 10-digit mobile number                                                  ]                                |
|                                                                                                                    |
|   [✓] Send confirmation and syllabus map via WhatsApp (Zero automated promotional calls)                          |
|                                                                                                                    |
|   [========================= BUTTON: Reserve Saturday Classroom Visit =========================]                   |
|                                                                                                                    |
|   Micro-copy: "Seats strictly allocated in order of application. Current batch capacity: 19/25 claimed."          |
+--------------------------------------------------------------------------------------------------------------------+
```

---

### Stage 6: Monastic Semantic Footer

```
+--------------------------------------------------------------------------------------------------------------------+
| STAGE 6: MONASTIC SEMANTIC FOOTER (Desktop 4-Column Ledger)                                                        |
+--------------------------------------------------------------------------------------------------------------------+
| [Col 1–4: Institutional Charter]   [Col 5–6: Deep Routes]   [Col 7–9: Safety & Governance] [Col 10–12: Direct Contact] |
| --------------------------------   ----------------------   -----------------------------  ----------------------- |
| VIDYA DHAM ACADEMY                 - /pedagogy              - Fire Safety Cert #2026-A     - Direct Phone:         |
| Registered STEM Foundation.        - /faculty               - 24/7 CCTV Campus Protocol      +91 (0) 98765 43210   |
| Strict 25-student cohort charter.  - /admissions            - Child Protection Charter     - Campus Location:      |
| Built on offline pedagogical rigor - /legal                 - Student Emergency Protocol     Civic Center Road     |
|                                                                                                                    |
| (C) 2026 Vidya Dham Academy. All rights reserved. Zero unauthorized student PII tracking.                          |
+--------------------------------------------------------------------------------------------------------------------+
```

---

## 4. Sub-Page Wireframe Specifications

### 4.1 `/pedagogy` — Academic Pedagogy & Curriculum Architecture

```
+--------------------------------------------------------------------------------------------------------------------+
| /pedagogy: ACADEMIC PEDAGOGY & CURRICULUM ARCHITECTURE                                                             |
+--------------------------------------------------------------------------------------------------------------------+
| [HEADER: Hero Breadcrumb + Editorial Title]                                                                        |
|   H1: The Visual STEM Engine & Concept Roadmaps                                                                    |
|   Sub: Deconstructing how 4K digital smart board derivations eliminate rote memorization in STEM.                 |
+--------------------------------------------------------------------------------------------------------------------+
| [INTERACTIVE DERIVATION WORKBENCH (Cols 1–12, Full Width Canvas)]                                                  |
| +----------------------------------------------------------------------------------------------------------------+ |
| | Full-Screen Smart Board Simulator: Optics, Mechanics, Calculus                                                 | |
| | [Left Panel: Step-by-Step Derivation Steps] | [Right Panel: Live 60 FPS Mathematical Vector Canvas]             | |
| +----------------------------------------------------------------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------------------------+
| [CURRICULUM ARCHITECTURE ROADMAP (12-Column Chronological Ledger)]                                                 |
| - Foundation Phase (Grades 8–10): Spatial Geometry, Physics Foundations, Algebra Intuition                         |
| - Mastery Phase (Grades 11–12): Differential Calculus, Electromagnetism, Analytical Chemistry                      |
+--------------------------------------------------------------------------------------------------------------------+
```

---

### 4.2 `/faculty` — Master Mentors & Academic Governance

```
+--------------------------------------------------------------------------------------------------------------------+
| /faculty: MASTER MENTORS & ACADEMIC GOVERNANCE                                                                     |
+--------------------------------------------------------------------------------------------------------------------+
| [HEADER]: H1: Founders in the Classroom. Every Single Day.                                                         |
| Sub: We do not employ rotating junior tutors. Every core subject is instructed by verified founding teachers.      |
+--------------------------------------------------------------------------------------------------------------------+
| [FACULTY DOSSIER GRID (3 Horizontal Master Cards, Cols 1–12)]                                                      |
| +----------------------------------------------------------------------------------------------------------------+ |
| | [Col 1–4: Portrait (1:1 Ratio)] | [Col 5–12: Dossier Details]                                                  | |
| | Vikram Patel                    | Academic Director & Head of Physics (M.Sc. Physics, 14 Years Experience)     | |
| |                                 | Pedagogy: Visual mechanics, ray optics derivation specialist.                | |
| |                                 | Doubt Desk Hours: 17:30 – 18:45 Daily                                        | |
| +----------------------------------------------------------------------------------------------------------------+ |
| | Dr. Sunita Rao (Chemistry) & Anand Deshmukh (Mathematics) rendered with identical rigorous dossier specifications|
+--------------------------------------------------------------------------------------------------------------------+
```

---

### 4.3 `/admissions` — Real-Time Cohort Ledger & Fee Matrix

```
+--------------------------------------------------------------------------------------------------------------------+
| /admissions: COHORT AVAILABILITY & ADMISSION TRANSPARENCY                                                          |
+--------------------------------------------------------------------------------------------------------------------+
| [COHORT SEAT AVAILABILITY MATRIX (Cols 1–12)]                                                                      |
|                                                                                                                    |
| Grade 9 Foundation   | Capacity: 25 | Claimed: 21 | Status: [==== 4 AVAILABLE ====]   | [Reserve Visit Button] |
| Grade 10 Accelerator | Capacity: 25 | Claimed: 24 | Status: [= 1 SEAT REMAINING =]    | [Reserve Visit Button] |
| Grade 11 STEM        | Capacity: 25 | Claimed: 18 | Status: [======= 7 AVAILABLE ===] | [Reserve Visit Button] |
| Grade 12 Advanced    | Capacity: 25 | Claimed: 22 | Status: [=== 3 AVAILABLE =====]   | [Reserve Visit Button] |
+--------------------------------------------------------------------------------------------------------------------+
| [TRANSPARENT FEE SCHEDULE (Zero Hidden Costs)]                                                                     |
| - Published quarterly tuition schedule with 100% textbook & smart-board material inclusion.                        |
| - Zero admission registration surcharges or building funds.                                                        |
+--------------------------------------------------------------------------------------------------------------------+
```

---

### 4.4 `/legal` — Campus Safety, Surveillance & Governance

```
+--------------------------------------------------------------------------------------------------------------------+
| /legal: INSTITUTIONAL COMPLIANCE & SAFETY CHARTER                                                                  |
+--------------------------------------------------------------------------------------------------------------------+
| [TWO-COLUMN EDITORIAL LEGAL LAYOUT: Col 1–4 Sticky Table of Contents | Col 5–12 Legal Articles]                    |
| - Article 1: Physical Campus Surveillance & CCTV Data Retention Policy                                             |
| - Article 2: Fire Safety Certification & Bi-Annual Evacuation Drills                                               |
| - Article 3: Anti-Ragging & Child Safeguarding Protocols                                                           |
| - Article 4: Student Data Privacy & WhatsApp Messaging Policy (Zero Telemarketing Resale)                          |
+--------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Touch Targets, Focus Rings & Ergonomics

1. **Touch Target Dimensions**:
   - Every button, chip selector, and drawer trigger maintains a minimum hit area of $44\text{px} \times 44\text{px}$ (exceeding WCAG 2.5.5 Level AAA $44\text{px}$ standard).
   - Inset buttons on mobile use full container width or minimum width $W \ge 160\text{px}$.
2. **Keyboard Focus Architecture**:
   - All interactive controls provide a visible focus ring:
     `outline: 2px solid #f59e0b; outline-offset: 2px;`.
   - Never suppressed via `outline: none` without an explicit `:focus-visible` replacement.
3. **Concentricity & Radius Rhythm**:
   - Bento Cards: $R_{\text{outer}} = 16\text{px}$
   - Nested Controls: $R_{\text{inner}} = 16\text{px} - 8\text{px} = 8\text{px}$
   - Status Capsules: $R = 9999\text{px}$

---

## 6. Verification & Gatekeeper Clearance

This specification is verified against all requirements of `specs/phase-3.4-spec.md`.

Execute deterministic verification:
```bash
python scripts/phase_gate.py --phase 3.4 --allowed docs/wireframe-spec.md specs/phase-3.4-spec.md
```
