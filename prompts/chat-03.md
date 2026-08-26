# SESSION PROMPT: CHAT 03
## Active Phase: 1.3 -- Competitive Moats & KPI Definition
### Wave: Wave 1 (Strategic Discovery & Inception)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`competitive-analysis`](file:///d:/Design-OS/.agents/skills/competitive-analysis/SKILL.md), [`opportunity-framework`](file:///d:/Design-OS/.agents/skills/opportunity-framework/SKILL.md), [`metrics-definition`](file:///d:/Design-OS/.agents/skills/metrics-definition/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/1-brand-and-vision.md`
  - `specs/phase-1.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and verify Phase 1.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/1-brand-and-vision.md` sections 1-4.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify workspace secret hygiene.
- Confirm zero security regressions.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the competitive analysis interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Who are the top 3 direct and indirect design competitors in your niche?
  - *Question 2*: What is the single biggest design or communication flaw in those competitor sites (e.g. cluttered navigation, generic template slop, slow load times)?
- **Turn 2**:
  - *Question 3*: What is our aesthetic "unfair advantage" or moat (e.g. WebGL canvas, bespoke kinetic typography, ruthless minimalism)?
  - *Question 4*: Measurable engagement and performance KPI targets (dwell time, bounce rate ceiling, mobile LCP).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Researcher, Buyer) to audit the competitive differentiation. Emit:
`specs/phase-1.3-spec.md` with `## Skill Evidence & Formula Block` citing `competitive-analysis` and `opportunity-framework`.

### Step 4: Gated Implementation
1. Populate Section 5 (Competitive Moats & KPIs) of `context/1-brand-and-vision.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 1.3 --allowed context/1-brand-and-vision.md specs/phase-1.3-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 1.3 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 4`.
3. Update `RESUME.md` with active phase set to `1.4`.
4. Print the exact prompt for Chat 04:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 1.4.
   ```
5. **STOP calling tools immediately.**
