# SESSION PROMPT: CHAT 17
## Active Phase: 8.1 & 8.2 -- Lenis Smooth Scroll & GSAP ScrollTrigger Scrollytelling
### Wave: Wave 6 (Component Engineering, Motion & Assets)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md), [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/motion/**/*`
  - `context/4-motion-choreography.md`
  - `specs/phase-8.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/canvas/**/*, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 8.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Inspect `context/4-motion-choreography.md`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure smooth scroll listeners and requestAnimationFrame animation tickers include proper unmount cleanup to prevent memory exhaustion DoS.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the smooth scroll & scrollytelling interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Lenis smooth scroll inertia tuning: Duration (1.2s vs. 1.0s), damping curve (`cubic-bezier(0.16, 1, 0.3, 1)`), and wheel multiplier.
  - *Question 2*: Pinned viewport showcase: Pin `#sec-story` and scrub through 3 horizontal cards vs. multi-layer parallax depth planes.
- **Turn 2**:
  - *Question 3*: ScrollTrigger synchronization: Connecting `lenis.on('scroll', ScrollTrigger.update)` and requestAnimationFrame ticker loop.
  - *Question 4*: Reduced motion compliance: Instant static fallback under `prefers-reduced-motion: reduce`.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit scroll jank, layout thrashing, and cleanup lifecycles (`ctx.revert()`). Emit:
`specs/phase-8.1-spec.md` with `## Skill Evidence & Formula Block` citing GSAP ScrollTrigger formulas.

### Step 4: Gated Implementation
1. Configure Lenis and wire up the pinned GSAP ScrollTrigger timelines.
2. Record timeline parameters in `context/4-motion-choreography.md`.
3. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 8.1 --allowed src/motion/**/* context/4-motion-choreography.md specs/phase-8.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 8.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 18`.
3. Update `RESUME.md` with active phase set to `8.3`.
4. Print the exact prompt for Chat 18:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 8.3.
   ```
5. **STOP calling tools immediately.**
