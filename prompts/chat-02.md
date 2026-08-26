# SESSION PROMPT: CHAT 02
## Active Phase: 1.2 -- User Personas & Mental Models
### Wave: Wave 1 (Strategic Discovery & Inception)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`user-persona`](file:///d:/Design-OS/.agents/skills/user-persona/SKILL.md), [`cognitive-ux-laws`](file:///d:/Design-OS/.agents/skills/cognitive-ux-laws/SKILL.md), [`stakeholder-alignment`](file:///d:/Design-OS/.agents/skills/stakeholder-alignment/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/1-brand-and-vision.md`
  - `specs/phase-1.2-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 1.2 is active.
2. Render `docs/DESIGN_MAP.mermaid` showing Phase 1.1 green and Phase 1.2 active.
3. Read `context/1-brand-and-vision.md` to load the mission and pillars established in Chat 01.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify zero hardcoded secrets in the workspace.
- Confirm CSP policies and dependencies remain intact.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the user persona discovery interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Primary visitor persona profile (high-intent decision maker, aesthetic appreciator, or developer/engineer) and their top skepticism.
  - *Question 2*: The golden path traversal (what must they see within the first 10 seconds of landing?).
- **Turn 2**:
  - *Question 3*: Cognitive UX laws application (Hick's Law navigation simplification vs. Miller's Law bento chunking).
  - *Question 4*: Fitts's Law ergonomics for mobile and desktop action targets.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit the persona models against real behavior. Emit:
`specs/phase-1.2-spec.md` with `## Skill Evidence & Formula Block` citing `user-persona` and `cognitive-ux-laws`.

### Step 4: Gated Implementation
1. Populate Section 4 (User Personas & Cognitive Laws) of `context/1-brand-and-vision.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 1.2 --allowed context/1-brand-and-vision.md specs/phase-1.2-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 1.2 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 3`.
3. Update `RESUME.md` with active phase set to `1.3`.
4. Print the exact prompt for Chat 03:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 1.3.
   ```
5. **STOP calling tools immediately.**
