# SESSION PROMPT: CHAT 18
## Active Phase: 8.3 -- Typographic Reveals & Kinetic Micro-Interaction Dynamics
### Wave: Wave 6 (Component Engineering, Motion & Assets)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`staggered-word-reveal`](file:///d:/Design-OS/.agents/skills/staggered-word-reveal/SKILL.md), [`apple-design`](file:///d:/Design-OS/.agents/skills/apple-design/SKILL.md), [`beam-glow-states`](file:///d:/Design-OS/.agents/skills/beam-glow-states/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/motion/**/*`
  - `src/components/effects/**/*`
  - `specs/phase-8.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/canvas/**/*, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 8.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Inspect `src/motion/` and `context/4-motion-choreography.md`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure split-text typography generation does not evaluate untrusted HTML or bypass safe text node creation.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the kinetic typography & micro-interaction interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Staggered word reveal choreography: Words rising from translateY(40px) + opacity 0 with a 0.04s stagger vs. line-by-line mask clip.
  - *Question 2*: Accessibility protection for split text: Hiding split spans from screen readers with `aria-hidden="true"` and providing an unsplit hidden `<span>` for assistive tech.
- **Turn 2**:
  - *Question 3*: Magnetic cursor dynamics: Subtle spring-following cursor dot/ring vs. interactive magnetic button snaps.
  - *Question 4*: Border beam glow highlights: Traveling chromatic beam along the primary conversion card border.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit DOM node inflation and split-text accessibility. Emit:
`specs/phase-8.3-spec.md` with `## Skill Evidence & Formula Block` citing `staggered-word-reveal` and `beam-glow-states`.

### Step 4: Gated Implementation
1. Wire up the word-by-word headline reveals, magnetic cursor, and border beam glow effects.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 8.3 --allowed src/motion/**/* src/components/effects/**/* specs/phase-8.3-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 8.3 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 19`.
3. Update `RESUME.md` with active phase set to `8.4`.
4. Print the exact prompt for Chat 19:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 8.4.
   ```
5. **STOP calling tools immediately.**
