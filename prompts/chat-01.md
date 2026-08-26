# SESSION PROMPT: CHAT 01
## Active Phase: 1.1 -- Socratic Problem Framing & Value Proposition
### Wave: Wave 1 (Strategic Discovery & Inception)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`design-brief`](file:///d:/Design-OS/.agents/skills/design-brief/SKILL.md), [`jobs-to-be-done`](file:///d:/Design-OS/.agents/skills/jobs-to-be-done/SKILL.md), [`workflow-frame-problem`](file:///d:/Design-OS/.agents/skills/workflow-frame-problem/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/1-brand-and-vision.md`
  - `specs/phase-1.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` to confirm project root and active phase.
2. Render `docs/DESIGN_MAP.mermaid` to give the user immediate visual orientation.
3. Announce that Phase 1.1 is active.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify zero hardcoded secrets or API tokens in the project.
- Verify strict CSP headers and safe script policies.
- Verify dependency whitelist in `context/5-code-standards.md`.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct a deep Socratic discovery interview. **Ask only 2-3 questions per turn** and wait for user answers. Cover 6-8 total questions across turns:
- **Turn 1**: 
  - *Question 1*: Executive mission and the single most unforgettable feeling the visitor must have.
  - *Question 2*: Primary conversion goal (e.g. booked call, software trial, waitlist, preorder) vs. editorial storytelling balance.
- **Turn 2**:
  - *Question 3*: The 3 non-negotiable Creative Pillars that distinguish this site from corporate competitors.
  - *Question 4*: Jobs-to-be-Done (Functional, Emotional, Social).
*For every question, provide a 2-sentence concept explanation, 3 structured choices (A/B/C), and highlight your recommended option.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene a 3-persona mini-audit (Contrarian, Logician, Buyer) to stress-test the mission and pillars. Output results to:
`specs/phase-1.1-spec.md` (must include `## Skill Evidence & Formula Block` citing `design-brief` and `jobs-to-be-done`).

### Step 4: Gated Implementation
1. Populate Section 1, 2, and 3 of `context/1-brand-and-vision.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 1.1 --allowed context/1-brand-and-vision.md specs/phase-1.1-spec.md
   ```
   *If the gate fails, resolve the issue immediately. Do NOT bypass.*

### Step 5: Handoff & Resume Update
1. Check off the `[ ]` for Phase 1.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 2`.
3. Update `RESUME.md` with active phase set to `1.2`.
4. Print the exact prompt for Chat 02:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 1.2.
   ```
5. **STOP calling tools immediately.**
