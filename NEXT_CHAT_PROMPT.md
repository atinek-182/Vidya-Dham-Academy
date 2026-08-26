# SESSION PROMPT: CHAT 12
## Active Phase: 5.4 -- UI Component Manifest & State Matrix Engineering
### Wave: Wave 5 (Macrostructure & Surface Materiality)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`component-spec`](file:///d:/Design-OS/.agents/skills/component-spec/SKILL.md), [`pattern-library`](file:///d:/Design-OS/.agents/skills/pattern-library/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/3-ui-manifest.md`
  - `specs/phase-5.4-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/**/*, context/4-motion-choreography.md, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 5.4 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Inspect the root layout structure created in Phase 5.1.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify that component specifications do not declare unsafe props (such as raw HTML injection or unfiltered eval handlers).
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the component inventory interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Exact inventory of interactive components needed across sections: Primary Button, Bento Feature Card, Email Input, Floating Nav Dock, Modal Drawer.
  - *Question 2*: State machine coverage: Define explicit visual representations for `idle`, `hover`, `active/press`, `focus-visible`, `loading/busy`, and `disabled/error`.
- **Turn 2**:
  - *Question 3*: Concentric radius hierarchy: Define parent-to-child radius ratios (e.g. outer card 20px, inner badge 8px, padding 12px).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit missing edge-case states (e.g. empty lists, truncated text). Emit:
`specs/phase-5.4-spec.md` with `## Skill Evidence & Formula Block` citing `component-spec`.

### Step 4: Gated Implementation
1. Write the complete component specification and state matrix into `context/3-ui-manifest.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 5.4 --allowed context/3-ui-manifest.md specs/phase-5.4-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 5.4 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 13`.
3. Update `RESUME.md` with active phase set to `6.1`.
4. Print the exact prompt for Chat 13:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 6.1.
   ```
5. **STOP calling tools immediately.**
