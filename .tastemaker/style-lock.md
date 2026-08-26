# Style lock — vidya-dham-academy

Established: 2026-08-26. Source: Socratic Phase Interview (Chat 06) + Tastemaker Reference Extraction (`editorial-tech`)

## Palette
- Background: #090d16 (role: page background, deep charcoal slate)
- Surface: #0c121e (role: elevated cards, Bento panels, smart board container)
- Primary: #f59e0b (role: primary CTA button fills, active step indicators, focus rings)
- Accent: #fbbf24 (role: luminous amber highlights, ray optics vectors, subtle border glow)
- Text primary: #f8fafc (role: display headlines, card titles, key metric numbers) — contrast vs background: 18.57:1 (WCAG AA text pass)
- Text muted: #94a3b8 (role: body paragraphs, secondary metadata, monospace labels) — contrast vs background: 7.24:1 (WCAG AA text pass)
- Button label color: #090d16 (role: text on Primary #f59e0b fill) — contrast vs Primary: 9.05:1 (WCAG AA text pass)
- Border: #252e3d (role: subtle structural hairlines, 0.5px card separation)
- Dark mode: single mode only (deep charcoal editorial aesthetic; locked by contract)

## Color contract

Required ratios by pairing:

| Foreground on background | Floor | Why |
|---|---|---|
| body/muted text on bg or surface | 4.5:1 | WCAG AA text |
| button label on its fill (Primary #f59e0b) | 4.5:1 | text on a fill |
| link/accent used as text | 4.5:1 | text |
| a fill vs the page (Primary CTA button) | 3:1 | UI component (1.4.11) |
| accent used as a highlight or icon | 3:1 | graphical object |
| a border that conveys state (focus ring, active card) | 3:1 | UI component |
| decorative hairline border | exempt | purely structural separation |

Legal pairings (verified via `scripts/check_contrast.py --matrix`):

- Text-safe (>=4.5): text/bg (18.57), text/on-primary (18.57), text/surface (17.91), text/border (13.06), bg/accent (11.64), accent/on-primary (11.64), surface/accent (11.22), bg/primary (9.05), primary/on-primary (9.05), surface/primary (8.72), accent/border (8.19), primary/border (6.36)
- UI-safe (>=3.0 and <4.5): active state border (primary #f59e0b on bg: 9.05, exceeds 3.0:1)
- Decorative (<3.0): bg/border (1.42), border/on-primary (1.42), surface/border (1.37), primary/accent (1.29), bg/surface (1.04), surface/on-primary (1.04)

The model may only compose color pairings that appear in the text-safe or UI-safe lists. Decorative border pairings must never be the sole indicator of interaction or validation state.

## Typography
- Display/heading font: Geist — matches high-end editorial engineering precision, geometric rigor, and open apertures
- Body font: DM Sans — highly legible geometric humanist sans optimized for dense mobile reading on mid-range Android screens
- Monospace utility font: JetBrains Mono / Geist Mono — for cohort counts ("19/25 Seats Claimed"), curriculum chapter tags, and mathematical annotations
- Scale: 1.25 ratio (Major Third), base 16px fluidly clamped to 20px on desktop viewports (`clamp(1rem, 0.95rem + 0.35vw, 1.25rem)`)
- Heading letter-spacing: -0.02em (tighter tracking for display impact)
- Monospace tracking: 0.05em (widened tracking for utility metadata)

## Shape language
- Corner radius:
  - Cards & Bento containers: 16px
  - Badges, pills, & status indicators: 9999px (full capsule)
  - Nested inner interactive elements: 8px (concentric rule: $R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$)
  - Button controls: 8px to 10px (crisp, manufactured geometry)
- Shadow depth: subtle dual-layer depth (`0 4px 20px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)`)
- Border usage: 0.5px hairline borders (`rgba(255, 255, 255, 0.12)`) with active hover transitions to amber (`rgba(245, 158, 11, 0.35)`) instead of heavy dropshadows

## Density & spacing
- Base unit: 4px
- Section padding (landing/marketing pages):
  - Connective sections: space-16 (64px mobile / 80px desktop)
  - Standard sections: space-24 (96px mobile / 120px desktop)
  - Pivotal scrollytelling sections (hero, smart board visualizer, cohort capacity): space-36 (140px Obys spatial rhythm)
- Content card internal padding: space-6 (24px) minimum floor
- Compact/dense card internal padding: space-3 (12px) for status badges and live seat counters
- Showcase/hero card internal padding: space-8 (32px mobile / 48px desktop)
- Overall density: generous editorial whitespace, strict column alignment, deliberate negative space
- Section separation: 0.5px hairline divider lines combined with subtle Obys 140px vertical rhythm

## Structure
- Site Architecture: Multi-Page Scroll-Driven Digital Flagship
- Routes:
  - `/` (Home & Overview): Hook -> Smart Board Visualizer -> Zero Backbenchers Policy (Max 25 Seats) -> Founding Faculty Proof -> Visit Reservation Close
  - `/pedagogy` (Curriculum & Methodology): Scrollytelling Ray Optics & Vector derivations -> In-class Notebook Discipline -> Assessment Tracking
  - `/faculty` (Master Mentors): Founding Faculty Credentials -> Direct Daily Doubt Desk -> Verified Student Outcomes
  - `/admissions` (Classroom Visit & Cohort Claim): Verified Live Batch Counter -> Fee Transparency -> Saturday Open Classroom Booking Sheet
- Macrostructures used:
  - Landing (`/`): Long-Scroll Narrative with Pinned Pedagogical Comparison Beat
  - Pedagogy (`/pedagogy`): Editorial Index with Asymmetrical 12-Column Concept Modules
  - Faculty (`/faculty`): Showcase Ledger with Horizontal Faculty Dossiers
  - Admissions (`/admissions`): Bento Showcase with Interactive Capacity Counter & Sticky Command Strip
- Shared chrome:
  - Monastic top navigation bar with minimal anchor links and high-contrast CTA
  - Mobile sticky bottom command strip ($H = 64\text{px}$, thumb-zone accessibility under Fitts's Law)
  - Semantic footer with academic accreditation, physical campus address, and verified safety documentation

## Reference intelligence
- Reference board: `.tastemaker/reference-board.md` (viewed sources)
- Design read: Multi-page digital flagship for discerning parents and STEM students, mode Persuade + Read, visual lane Editorial Tech
- Dials: variance 7/10, motion 6/10, density 5/10, art direction 9/10
- Foundation: Vite React + Tailwind CSS v4 + Lenis Smooth Scroll + GSAP ScrollTrigger
- Quality bar: Linear.app (dark engineering precision), Obys Agency (140px spatial rhythm and narrative typography), Stripe Press (intellectual publication authority)
- Direction contract:
  - Thesis: Offline academic rigor elevated by modern smart board visual comprehension without commercial coaching slop.
  - First viewport: Asymmetric headline + live cohort availability counter + interactive before-and-after smart board preview.
  - System: 12-column Bento Grid with 0.5px hairline gradient borders and Geist/DM Sans typography.
  - Risk: Avoid reading as overly cold software enterprise; anchor in authentic teacher quotes, classroom documentary photography, and transparent offline accountability.
- Anti-references: Generic commercial coaching banners, flashy countdown timers, stock model photography, invasive popup lead captures.

## Taste memory
- Profile priors used: none (fresh project initialization)
- Decision log: `.tastemaker/decisions.log`
- Last resolved decisions:
  - Archetype: `editorial-tech` confirmed over dark mesh, minimal beige, and skeuomorphic (Chat 06)
  - Surface: Hairline gradient borders (0.5px) confirmed over liquid metal or borderless (Chat 06)
  - Atmosphere: Subtle SVG anti-banding noise (3.5% `feTurbulence`) confirmed (Chat 06)
  - Structure: Multi-page scroll-driven website confirmed (Chat 06)
- Pending review: none
- Profile promotion: none

## Navigation chrome
- Navigation type: Monastic floating top bar ($H = 60\text{px}$) + Mobile dual-action sticky bottom strip ($H = 64\text{px} + \text{safe-area}$)
- Desktop nav background: rgba(9, 13, 22, 0.85) with 16px backdrop blur and 0.5px hairline bottom border
- Active nav item treatment: text-amber-400 with 1.5px amber bottom indicator dot
- Mobile command strip:
  - Primary CTA: `[Reserve Classroom Visit]` ($48\text{px}$ height, high-contrast amber button)
  - Secondary Action: `[WhatsApp Direct]` ($48\text{px} \times 48\text{px}$ icon button)

## Mood descriptors
Intellectual, Disciplined, Razor-Sharp, Accountable

## Aesthetic mode
editorial-tech

## Assets
- Anchor asset: Interactive Before-and-After Smart Board Visualizer (`src/components/SmartBoardVisualizer.tsx`)
- Asset style: 1.5px stroke vector icons (Solar Duotone / Lucide), high-definition scientific SVG diagrams (ray optics, coordinate vectors)
- Illustration vs photography split: Real authentic classroom and campus photography for facilities and faculty; clean mathematical SVG vector diagrams for smart-board concept demonstrations
- Logo: Geometric academic seal in amber/white with Geist wordmark
- Sanitization: All SVG vector assets strictly pre-sanitized via `scripts/sanitize_svg.py`

## Motion
- Feel: Restrained, disciplined, technical, and smooth (never bouncy or playful)
- Curves: `--ease-out: cubic-bezier(0.25, 1, 0.5, 1)` (smooth deceleration)
- Durations: Press micro-interactions (80ms), dialog/sheet slide-ups (220ms), scroll-triggered section reveals (400ms)
- Entrance: 220ms with 16px upward translation
- Screen tracks:
  - Marketing & scrollytelling pages: Lenis smooth scroll inertia + scrubbed GSAP ScrollTrigger reveals
  - Interactive widgets: Scale-on-press (0.97) tactile feedback and instant state machine transitions
- Reduced motion: `@media (prefers-reduced-motion: reduce)` immediately kills Lenis and scrubbed timelines, rendering clean static editorial layouts

## Do not
- Do not use generic commercial coaching stock photos of Caucasian models in western high schools.
- Do not use intrusive lead capture popups or gate syllabus/fee information behind phone number forms.
- Do not use auto-playing promotional videos with sound or bouncing chat widgets.
- Do not use loud multi-color gradients (no purple/pink/indigo AI clichés); keep color tightly restricted to charcoal slate with amber/gold punctuation.
- Do not use emojis anywhere in code, copy, metadata, or documentation.
