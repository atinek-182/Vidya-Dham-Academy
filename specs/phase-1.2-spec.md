# Phase 1.2 Specification: User Personas, Mental Models & Cognitive UX Laws

> **Target Project**: `vidya-dham-academy`  
> **Workspace Root**: `projects/Websites/vidya-dham-academy`  
> **Active Sub-Phase**: `Phase 1.2`  
> **Date**: `2026-08-26`  
> **Status**: `[DRAFT -> SIGN-OFF]`  

---

## 1. Context & Architectural Overview

Vidya Dham Academy operates as an intimate, single-branch offline coaching sanctuary (2–3 years old) pairing rigorous, disciplined faculty mentorship with modern interactive digital smart boards. The digital surface must express an Awwwards-tier `editorial-tech` aesthetic—combining intellectual gravitas, Swiss typography, and high-contrast classroom photographic evidence with an ultra-responsive, thumb-zone-optimized mobile architecture (accounting for 90%+ of real-world traffic).

Phase 1.2 codifies the human mental models, behavioral personas, cognitive laws, and conversion psychology that dictate the site's information hierarchy, micro-interactions, and conversion engineering.

---

## 2. Adversarial Pre-Write Audit (/roast Council)

Convened the 3-persona adversarial panel to stress-test the user personas and cognitive frameworks before populating core project context:

### Persona 1: The Contrarian (Skeptic)
> *"You're creating personas for a local academy with one physical branch. Most local education sites just show a banner with phone numbers. Why spend time building high-end cognitive models and Cooper personas for a 2–3 year old center? Isn't this over-engineering?"*

- **Rebuttal & Design Resolution**:
  1. Parents evaluating coaching for Board or Foundation exams are committing their child's daily schedule, academic trajectory, and substantial financial resources. The decision is high-anxiety and deliberative, not casual.
  2. If the site looks like a typical neighborhood tuition page (cluttered, poor typography, low-contrast phone banners), educated parents immediately assume the pedagogical standards inside the classroom are similarly amateurish.
  3. By engineering an Awwwards-caliber `editorial-tech` surface grounded in Alan Cooper's goal-directed personas, we communicate institutional discipline, technological vanguardism (via smart digital boards), and uncompromising quality before the parent or student ever sets foot on campus.

### Persona 2: The Logician (Systems Architect & Mobile Ergonomist)
> *"Parents and students will visit this site on cracked Android screens, in moving autos or buses, often over erratic 4G mobile connections. If you prioritize Awwwards-style heavy hover states and desktop cursor physics over mobile Fitts's Law ergonomics, your bounce rate will exceed 50%."*

- **Rebuttal & Design Resolution**:
  1. We enforce an Asymmetric Dual-Target Architecture: Mobile (90% traffic) receives dedicated Fitts's Law thumb-zone command strips ($H \ge 56\text{px}$, tap targets $\ge 48\text{px} \times 48\text{px}$), native gesture-dismissible bottom-sheet reservation modals, and sub-400ms Doherty response latency.
  2. Desktop (10% traffic) carries the full expressive power of `editorial-tech`—magnetic button hover pulls, Lenis smooth scroll inertia, dynamic multi-column bento grids, and subtle GSAP timeline reveals.
  3. Zero device pollution: Cursor physics and magnetic effects are conditionally isolated using CSS media query `@media (hover: hover) and (pointer: fine)`.

### Persona 3: The Buyer (Parent & Student Duo)
> *"As a parent, I don't care about design awards; I care about whether my daughter will get lost in a crowd of 80 students and whether the teachers actually know what they are doing. As a student, I dread boring lectures where the teacher just reads from a guide."*

- **Rebuttal & Design Resolution**:
  1. The primary persona is the **Discerning Parent** (P1) who holds the financial and safety veto. The first 10 seconds explicitly declare: Single dedicated campus, capped batch size of max 25 students ("Zero Backbenchers"), and transparent master teacher profiles.
  2. The co-deciding persona is the **Ambitious Student** (P2). They immediately see authentic visual proof of how hard topics are decoded on interactive digital smart boards—turning abstract physics and math formulas into intuitive visual models.
  3. The conversion path provides a zero-commitment "Classroom Visit & Concept Masterclass" reservation that lets both parent and student inspect the physical classroom and pedagogical atmosphere firsthand.

---

## 3. Deep User Personas (Alan Cooper Goal-Directed Model)

### Persona 1 (Primary): Rajesh Sharma — The Discerning, Accountable Parent
- **Demographics**: Age 44, Senior Branch Manager at a national bank. Lives within a 6km radius of the academy campus.
- **Device & Tech Comfort**: Mid-range smartphone (Android / Samsung Galaxy A-series). Heavy WhatsApp user, checks local parent groups, values clean readability over ornamental animations.
- **One-Line Mindset Quote**:
  > *"I don't want my child to be student number 87 in a commercial coaching factory. I want dedicated teachers who know her name, track her mistakes, and teach with modern methods."*
- **Goals**:
  - *Functional*: Verify physical campus credibility, confirmed batch cap ($\le 25$), teacher qualifications, safety, and transparent fee schedule.
  - *Emotional*: Deep reassurance and peace of mind that his daughter is not being neglected in overcrowded coaching halls.
  - *Social*: Confidence that he has made an informed, high-standards educational investment for his child's future.
- **Core Frustrations**:
  - Commercial coaching factories that charge exorbitant fees, cram 70–100 students into windowless halls, and rotate inexperienced proxy teachers.
  - Websites that hide fee details, show stock photos of foreign classrooms, or force aggressive phone sales calls before answering basic questions.
- **Day-in-the-Life Scenario**:
  Rajesh receives a recommendation from a trusted colleague in his WhatsApp group about Vidya Dham Academy's disciplined smart-board classes. He taps the link on his mobile phone during his evening commute. Within 8 seconds, he sees the verified "Max 25 Learners" badge, reviews the teacher credentials, and notices the direct WhatsApp desk. He books an offline campus visit for Saturday morning with a single thumb tap.
- **Design Implications for Vidya Dham**:
  - Immediate institutional transparency above the fold (Single Campus Guarantee, Capped Cohorts).
  - Clear, accessible teacher profiles with subject specializations and years of experience.
  - Zero-pressure bottom-sheet reservation modal requesting only essential details (Student Grade + Parent Phone Number).

---

### Persona 2 (Secondary / Co-Decider): Ananya Sharma — The Concept-Hungry Student
- **Demographics**: Age 15, Grade 10 Board & Science Foundation Aspirant. Motivated, curious, but easily overwhelmed by abstract rote learning in school.
- **Device & Tech Comfort**: High mobile fluency, YouTube study channels, Instagram, mobile apps. Expects fast-loading, dynamic visual interfaces.
- **One-Line Mindset Quote**:
  > *"If you just show me formulas on a blackboard, I forget them during the exam. When I can see vectors and 3D geometry rotate on a digital screen and have a teacher answer my questions immediately, I actually get it."*
- **Goals**:
  - *Functional*: Understand complex science and math derivations conceptually without mindless memorization.
  - *Emotional*: Overcome academic anxiety; feel excited and confident when tackling difficult questions.
  - *Social*: Be recognized as an intellectually sharp student among peers; enter exams without fear.
- **Core Frustrations**:
  - Boring teachers who recite from textbooks and dismiss doubts because "we need to finish the syllabus."
  - Feeling intimidated to raise her hand in large classes with 60+ classmates watching.
- **Day-in-the-Life Scenario**:
  Ananya sits at home struggling with electrostatics and circular motion vectors in her school textbook. Her father shares the Vidya Dham Academy website link. She opens it on her phone and is immediately drawn to the interactive concept showcase demonstrating how digital smart boards visualize electromagnetic field lines. She tells her father, *"Can we visit this classroom? Their smart board classes look so clear."*
- **Design Implications for Vidya Dham**:
  - Interactive Concept Preview module showcasing authentic digital board STEM visualizations.
  - Highlighting "Zero Backbenchers" and mandatory daily doubt-solving desks.
  - Clear visual breakdown of the academic week (Lectures $\rightarrow$ Smart Board Derivations $\rightarrow$ In-Class Problem Solving $\rightarrow$ Weekly Review).

---

### Persona 3 (Internal Institutional Stakeholder): Vikram Patel — The Master Educator & Founder
- **Demographics**: Age 38, Former Senior Faculty at premier coaching institutes, now Founder & Head of Academic Pedagogy at Vidya Dham Academy.
- **One-Line Mindset Quote**:
  > *"True teaching is not mass entertainment. It is intimate, disciplined craftsmanship. We restrict our cohorts to 25 because that is the exact limit where a teacher can look every student in the eye every single day."*
- **Goals**:
  - Attract focused, disciplined learners and committed parents who value genuine conceptual depth over promotional gimmicks.
  - Preserve institutional integrity and maintain full batch capacity across the academic calendar without resorting to aggressive discounting.
- **Design Implications for Vidya Dham**:
  - A proud, monastic editorial aesthetic reflecting academic seriousness and pedagogical mastery.
  - Prominent "Pedagogical Manifesto" section articulating why batch caps and smart board clarity are non-negotiable institutional invariants.

---

## 4. Cognitive UX Laws & Interface Architecture

```
+-----------------------------------------------------------------------------------+
| COGNITIVE UX LAW MAPPING FOR VIDYA DHAM ACADEMY                                    |
+-----------------------------------+-----------------------------------------------+
| UX Law & Formula                  | Interface Application & Engineering Gate      |
+-----------------------------------+-----------------------------------------------+
| 1. Fitts's Law                    | Mobile: Fixed bottom command strip (H >= 56px)|
|    T = a + b * log2(1 + D/W)      | Touch targets >= 48px * 48px; thumb distance 0|
|                                   | Desktop: Magnetic CTA button in persistent nav|
+-----------------------------------+-----------------------------------------------+
| 2. Hick's Law                     | Primary navigation strictly <= 4 items.       |
|    RT = a + b * log2(n)           | Dual primary conversion actions on mobile.    |
|                                   | Secondary policies behind progressive disclosure|
+-----------------------------------+-----------------------------------------------+
| 3. Miller's Law                   | 4-Cluster Bento Architecture:                 |
|    Chunking into <= 5 nodes       | [Pedagogy] [Cohort Cap] [Faculty] [Roadmap]   |
+-----------------------------------+-----------------------------------------------+
| 4. Tesler's Law                   | System absorbs complexity:                    |
|    Complexity Conservation        | Reservation form requires only Grade + Phone; |
|                                   | Smart defaults for upcoming academic terms.   |
+-----------------------------------+-----------------------------------------------+
| 5. Doherty Threshold              | Instant visual feedback (< 400ms):            |
|    Latency <= 400ms               | Optimistic button press states (scale 0.97),  |
|                                   | instant bottom-sheet slide-up, Sonner toasts. |
+-----------------------------------+-----------------------------------------------+
```

---

## ## Skill Evidence & Formula Block

### Rule & Standard Citations
- **Skill Citation [`user-persona`](file:///d:/Design-OS/.agents/skills/user-persona/SKILL.md)**:
  - Adheres to Alan Cooper's Goal-Directed Design methodology (*About Face*).
  - Explicit delineation of behavioral variables, 3-dimensional goals (Functional, Emotional, Social), frustrations, day-in-the-life scenarios, and direct design implications.
  - Primary persona clearly established (Rajesh Sharma - Parent) with secondary co-decider persona (Ananya Sharma - Student) and stakeholder persona (Vikram Patel - Faculty).
- **Skill Citation [`cognitive-ux-laws`](file:///d:/Design-OS/.agents/skills/cognitive-ux-laws/SKILL.md)**:
  - Strict enforcement of Fitts's Law, Hick's Law, Miller's Law, Tesler's Law, and Doherty Threshold.
  - Elimination of cognitive friction on mobile viewports.
- **Skill Citation [`stakeholder-alignment`](file:///d:/Design-OS/.agents/skills/stakeholder-alignment/SKILL.md)**:
  - Dual-stakeholder alignment framework reconciling parent financial/safety criteria with student intellectual engagement criteria.
- **Skill Citation [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)**:
  - PII minimization: Contact and reservation forms collect strictly minimum necessary data points (phone + student grade), avoiding excessive personal data collection.

### Mathematical & Ergonomic Formulas

1. **Fitts's Law Target Acquisition Index (Mobile Command Strip)**:
   $$T = a + b \log_2 \left(1 + \frac{D}{W}\right)$$
   - On mobile viewports ($\le 480\text{px}$), the sticky bottom command strip pins the primary CTA (`[Reserve Classroom Visit]`) directly at viewport bottom:
     - Travel distance $D \to 0$ for natural thumb zone holding posture.
     - Target width $W = \text{calc}(100\text{vw} - 32\text{px}) \approx 358\text{px}$ (split into dual touch pills $\ge 160\text{px}$ width).
     - Target height $H \ge 48\text{px}$ (exceeding Apple HIG and Android Material 48px touch floors).
     - Result: Minimum movement time $T$, virtually eliminating touch acquisition errors.

2. **Hick's Law Reaction Time Optimization**:
   $$\text{RT} = a + b \log_2(n)$$
   - Where $n$ is the number of distinct choices presented simultaneously.
   - Traditional cluttered coaching navigation presents $n = 9$ to $12$ items ($\text{RT} \approx a + 3.58b$).
   - Vidya Dham Academy restricts primary navigation to $n = 4$ essential routes:
     1. `Pedagogy & Digital Boards`
     2. `Cohort Limits & Campus`
     3. `Faculty & Mentors`
     4. `Admissions Timeline`
   - Yields $\text{RT} = a + b \log_2(4) = a + 2.0b$ (a $\approx 44\%$ reduction in cognitive decision latency).

3. **Miller's Working Memory Chunking Rule**:
   $$\text{Chunk Capacity} = 4 \pm 1 \text{ discrete information nodes}$$
   - Applied via 4-cluster Bento Architecture across all middle-page sections.
   - Prevents attention fragmentation on mobile screens.

4. **WCAG 2.2 AA Contrast Mathematical Floor**:
   $$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05} \ge 4.5:1 \text{ (Normal Text)}, \quad \ge 3.0:1 \text{ (UI Components / Headings)}$$
   - Guaranteed across all persona touchpoints, badges, buttons, and text surfaces.

5. **Concentric Border Radius Geometric Invariant**:
   $$R_{\text{outer}} = R_{\text{inner}} + P_{\text{padding}}$$
   - Applied to all nested bento cards, bottom sheets, and interactive button groups.

---

## 5. Definition of Done (DoD) Sign-Off Criteria for Phase 1.2
- [x] Primary persona (Rajesh Sharma - Parent) codified with 3-dimensional goals, frustrations, and design implications.
- [x] Secondary co-decider persona (Ananya Sharma - Student) codified with learning styles and smart board engagement needs.
- [x] Institutional stakeholder persona (Vikram Patel - Faculty) codified with academic ethos and batch invariants.
- [x] 5 foundational cognitive UX laws (Fitts, Hick, Miller, Tesler, Doherty) mapped to specific interface components.
- [x] Adversarial `/roast` council audit executed and resolved.
- [x] `specs/phase-1.2-spec.md` populated with valid Skill Evidence & Formula Block.
