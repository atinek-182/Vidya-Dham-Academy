# SESSION PROMPT: CHAT 04
## Active Phase: 1.4 -- Tech Stack Invariants & AST Standards
### Wave: Wave 1 (Strategic Discovery & Inception) -- [WAVE 1 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`context/5-code-standards.md`](file:///d:/Design-OS/templates/context/5-code-standards.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), framework compiler guidelines
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/5-code-standards.md`
  - `specs/phase-1.4-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 1.4 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/1-brand-and-vision.md` in full.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify strict CSP policy declarations.
- Verify zero vulnerability surface in chosen package managers.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the technical architecture interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Confirm target stack: Vite React (pure client-side speed, lightweight canvas) vs. Next.js App Router (SSR, server actions, metadata).
  - *Question 2*: CSS architecture: Tailwind v4 (@theme CSS-first) vs. Vanilla CSS custom properties.
- **Turn 2**:
  - *Question 3*: GSAP ScrollTrigger context cleanup rules (`ctx.revert()` lifecycle enforcement).
  - *Question 4*: Package manager and dependency constraints (`APPROVED_DEPS.json`).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Logician, Systems Architect, VibeSec) to stress-test bundle size, SSR hydration mismatches, and memory leaks. Emit:
`specs/phase-1.4-spec.md` with `## Skill Evidence & Formula Block` citing AST compiler rules.

### Step 4: Gated Implementation
1. Finalize `context/5-code-standards.md` locking stack rules, CSP headers, and ambient umbrella skills.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 1.4 --allowed context/5-code-standards.md specs/phase-1.4-spec.md
   ```

### Step 5: Wave 1 Gate Checkpoint & Handoff
1. Check off Phase 1.4 in `context/6-progress-tracker.md`.
2. Mark **Wave 1 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-1-strategy" -m "Wave 1 verified: Strategy, Personas and Stack locked"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 5`.
5. Update `RESUME.md` with active phase set to `2.1` (Wave 2: Multi-Modal Reference & Mood Lock).
6. Print the exact prompt for Chat 05:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 2.1.
   ```
7. **STOP calling tools immediately.**
