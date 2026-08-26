# SESSION PROMPT: CHAT 11
## Active Phase: 5.1 & 5.2 -- Anti-Monoculture Layout & Obys 140px Grid Scaffolding
### Wave: Wave 5 (Macrostructure & Surface Materiality)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: `.tastemaker/log.json` rotation rules, Obys spatial math, [`better-layout`](file:///d:/Design-OS/.agents/skills/better-layout/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/layouts/**/*`
  - `src/App.tsx` or `index.html` (root grid structure only)
  - `specs/phase-5.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/**/*, context/4-motion-choreography.md, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 5.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/2-design-tokens.json` and `docs/wireframe-spec.md`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify that DOM containers and layout wrappers do not allow unescaped innerHTML injections.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the layout scaffolding interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Confirm macrostructure rotation archetype: Asymmetrical Bento Stage vs. Editorial Split Horizon vs. Interactive Spatial Stage.
  - *Question 2*: Desktop vertical rhythm: Enforce Obys 140px baseline section padding (160px hero top, 140px features, 180px pinned showcase).
- **Turn 2**:
  - *Question 3*: 12-column grid geometry: Column gutter math (24px/32px) and container margin math across 5 viewports (1920, 1440, 1024, 768, 375px).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Systems Architect) to test responsive grid collapse and horizontal overflow risks. Emit:
`specs/phase-5.1-spec.md` with `## Skill Evidence & Formula Block` citing Obys padding formulas and grid coordinates.

### Step 4: Gated Implementation
1. Scaffold the root semantic layout grid and section wrappers using pure CSS Grid and Obys spatial tokens.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 5.1 --allowed src/layouts/**/* src/App.tsx index.html specs/phase-5.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 5.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 12`.
3. Update `RESUME.md` with active phase set to `5.4`.
4. Print the exact prompt for Chat 12:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 5.4.
   ```
5. **STOP calling tools immediately.**
