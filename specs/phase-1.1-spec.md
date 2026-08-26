# Phase 1.1 Specification: Socratic Problem Framing & Value Proposition

> **Target Project**: `vidya-dham-academy`  
> **Workspace Root**: `projects/Websites/vidya-dham-academy`  
> **Active Sub-Phase**: `Phase 1.1`  
> **Date**: `2026-08-26`  
> **Status**: `[DRAFT -> SIGN-OFF]`  

---

## 1. Context & Architectural Overview

Vidya Dham Academy is an intimate, high-standard offline coaching academy (2–3 years old) operating from a single dedicated campus. It pairs disciplined in-person teaching with modern interactive smart digital boards. Rather than operating as an impersonal commercial mass-coaching factory, Vidya Dham focuses on high teacher proximity, small batch sizes, and visual clarity in foundational sciences and mathematics.

Over 90% of traffic is anticipated to originate from mobile devices (parents and students accessing links via local recommendations and WhatsApp). Therefore, while the desktop version utilizes the full canvas of an Awwwards-tier `editorial-tech` aesthetic, the mobile experience is the primary engineering benchmark—requiring instantaneous load times, thumb-zone action bars, and zero horizontal reflow jitter.

---

## 2. Adversarial Pre-Write Audit (/roast Council)

Convened a 3-persona adversarial panel to stress-test the mission, pillars, and conversion thesis before code or token authoring:

### Persona 1: The Contrarian (Skeptic)
> *"Every single local coaching center claims 'personal attention' and 'expert faculty.' Furthermore, many places buy a cheap television screen and call it a 'smart class.' Why should an educated parent or an ambitious student believe Vidya Dham is genuinely Awwwards-level premium and not just another neighborhood tuition room?"*

- **Rebuttal & Design Resolution**:
  1. We completely reject generic stock imagery and corporate coaching buzzwords.
  2. The interface uses authentic, high-contrast photographic evidence of actual classroom sessions, showcasing the interactive digital smart board being used for complex vector diagrams and live mathematical problem derivation.
  3. We declare transparent institutional constraints: explicit batch size caps (e.g., maximum 25 students per cohort), visible teacher qualifications, and a physical location guarantee.

### Persona 2: The Logician (Systems Architect & Mobile Engineer)
> *"You're targeting an Awwwards-tier aesthetic with GSAP animations, Lenis smooth scrolling, and rich typography, but 90% of your real users are on mid-tier Android phones over cellular connections. If your hero bundle is 5MB or causes touch jank, bounce rates will spike past 60%."*

- **Rebuttal & Design Resolution**:
  1. Strict mobile performance budget: Critical CSS and initial bundle capped under 150KB gzip; Total initial page weight < 1.2MB.
  2. Mobile animation isolation: Heavy cursor physics and desktop hover interactions are conditionally disabled on touch devices using media query `(hover: hover) and (pointer: fine)`.
  3. Mobile ergonomics: All primary interactive controls adhere strictly to Fitts's Law with touch targets $\ge 48\text{px}$ and native bottom-sheet drawers for conversion actions.

### Persona 3: The Buyer (Parent & Student Duo)
> *"As a parent, I am worried about whether this academy is disciplined, safe, and accountable. As a student, I am terrified of boring, repetitive lectures where the teacher ignores my questions. If we visit this website, we must immediately feel that this is a modern sanctuary of real learning."*

- **Rebuttal & Design Resolution**:
  1. Dual-reassurance architecture: Hero and navigation prioritize instant visual clarity. Students see interactive concept breakdowns and smart-board technology; parents see batch limits, teacher accountability, and a direct 1-tap WhatsApp consultation.
  2. Immediate access to the Academic Prospectus and an offline classroom visit schedule without mandatory upfront form friction.

---

## 3. Executive Purpose & Value Proposition

### 3.1 Mission Statement
To provide focused, high-clarity offline education where modern interactive digital boards illuminate foundational concepts, and small, disciplined cohorts ensure every student receives direct, daily mentorship from master teachers.

### 3.2 Target Audience
- **Primary Users (Students, Grades 8–12 & Aspirants)**: Seeking conceptual depth, intuitive visual explanations for tough science/math topics, and an encouraging learning environment free from chaotic backbenches.
- **Key Decision Makers (Parents)**: Disillusioned by overcrowded commercial coaching factories; seeking accountable educators, structured offline discipline, and tangible student academic progress.

### 3.3 The 3 Non-Negotiable Creative Pillars
1. **Intimate Rigor (Zero Backbenchers)**: Strict batch limits (max 25 students) guaranteeing direct eye contact, individualized doubt solving, and daily mentor accountability.
2. **Interactive Smart Board Pedagogy**: High-definition digital boards transforming abstract STEM equations into vibrant visual models, paired with disciplined offline notebook problem-solving.
3. **Monastic Editorial Minimalism**: An aesthetic of intellectual calm, Swiss typographic discipline, and authentic educational craftsmanship—free from garish advertising claims.

---

## 4. Jobs-to-be-Done (JTBD) Matrix

### 4.1 Student Job Statement
> **When** I struggle with abstract concepts in overcrowded school or coaching classes,  
> **I want to** learn from passionate teachers using interactive smart board visualizations,  
> **So I can** understand complex topics intuitively, excel in my examinations, and build genuine confidence.

- **Functional Dimension**: Visually comprehend multi-step derivations and problem-solving techniques in an offline classroom setting.
- **Emotional Dimension**: Relief from feeling invisible or left behind; intellectual excitement when difficult topics click.
- **Social Dimension**: Recognition among peers and family as a disciplined, high-clarity student.

### 4.2 Parent Job Statement
> **When** I am selecting an academic coaching partner for my child's crucial developmental years,  
> **I want to** verify the academy's actual batch size, teacher credentials, and classroom environment,  
> **So I can** entrust my child to dedicated mentors who treat them as an individual rather than a statistic.

- **Functional Dimension**: Inspect curriculum, verify batch limits, check physical campus location, and book a direct consultation with the founding educators.
- **Emotional Dimension**: Peace of mind and profound reassurance that their child's academic future is in caring, capable hands.
- **Social Dimension**: Pride in having selected an intentional, high-caliber local academy over impersonal mass coaching brands.

---

## 5. Mobile Ergonomics & Conversion Framework (90% Focus)

1. **Sticky Bottom Command Strip**: Fixed thumb-zone bar featuring dual actions:
   - Primary: `[Book Classroom Visit]` (triggers accessible, lightweight native bottom sheet).
   - Secondary: `[WhatsApp Direct]` (instant connection with academy desk).
2. **Frictionless Prospectus Access**: Instant curriculum dossier review with zero forced login walls.
3. **Interactive Concept Preview Accordion**: Fast, touch-friendly expandable modules showcasing how difficult chapters are decoded on the digital board.

---

## ## Skill Evidence & Formula Block

### Rule & Standard Citations
- **Skill Citation [`design-brief`](file:///d:/Design-OS/.agents/skills/design-brief/SKILL.md)**: Structured project overview, problem statement, audience definition, goals, and technical constraints.
- **Skill Citation [`jobs-to-be-done`](file:///d:/Design-OS/.agents/skills/jobs-to-be-done/SKILL.md)**: Standard Clayton Christensen / Tony Ulwick Job Statement format: `When [situation], I want to [motivation], so I can [expected outcome]`.
- **Skill Citation [`workflow-frame-problem`](file:///d:/Design-OS/.agents/skills/workflow-frame-problem/SKILL.md)**: Problem exploration, stakeholder alignment, boundary constraints, and prioritized success criteria.

### Mathematical & Ergonomic Formulas
1. **Fitts's Law Touch Target Sizing (Mobile Invariant)**:
   $$\text{MT} = a + b \log_2\left(\frac{2D}{W}\right)$$
   - Minimum target dimension constraint: $W \ge 48\text{px}$, height $\ge 48\text{px}$.
   - Minimum inter-element clearance: $\ge 8\text{px}$ to prevent false activations.

2. **WCAG 2.2 AA Contrast Ratio Mathematical Flooring**:
   $$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$
   - Body copy constraint: $\ge 4.5:1$ relative luminance.
   - Large text / prominent headings ($\ge 24\text{px}$ or bold $\ge 18.5\text{px}$): $\ge 3.0:1$.
   - Interactive borders and UI controls: $\ge 3.0:1$.

3. **Fluid Typography Clamp Formula**:
   $$\text{font-size} = \text{clamp}(V_{\min}, V_{\text{pref}}, V_{\max})$$
   $$\text{Calculation: } \text{clamp}(1.0\text{rem}, 0.875\text{rem} + 0.5\text{vw}, 1.25\text{rem})$$

4. **Concentric Border Radius Geometric Rule**:
   $$R_{\text{outer}} = R_{\text{inner}} + P_{\text{padding}}$$
   Guarantees visual harmony across card containers, interactive chips, and modal wrappers.

---

## 6. Definition of Done (DoD) Sign-Off Criteria for Phase 1.1
- [x] Executive purpose, audience, and North Star metric defined.
- [x] The 3 Creative Pillars locked without generic clichés.
- [x] Dual JTBD statements (Student + Parent) codified.
- [x] Mobile 90% ergonomic constraints established.
- [x] Adversarial `/roast` council points resolved.
- [x] `specs/phase-1.1-spec.md` populated with valid Skill Evidence & Formula Block.
