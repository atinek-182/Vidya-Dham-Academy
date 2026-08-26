# SESSION PROMPT: CHAT 15
## Active Phase: 7.1 & 7.2 -- Atomic Components & Emil Micro-Interaction Engineering
### Wave: Wave 6 (Component Engineering, Motion & Assets)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`component-spec`](file:///d:/Design-OS/.agents/skills/component-spec/SKILL.md), [`state-machine`](file:///d:/Design-OS/.agents/skills/state-machine/SKILL.md), [`emil-design-eng`](file:///d:/Design-OS/.agents/skills/emil-design-eng/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/components/**/*`
  - `specs/phase-7.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/forms/**/*, context/4-motion-choreography.md, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 7.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/3-ui-manifest.md` to load the component inventory.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure interactive components (buttons, links) enforce safe rel attributes (`rel="noopener noreferrer"`) for external links.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the component micro-interaction interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Primary Button micro-interaction physics: Scale-on-press (`scale(0.97)`) with interruptible spring curves vs. tactile border beam glow.
  - *Question 2*: Card hover dynamic: Subtle 3D tilt with cursor tracking vs. smooth -4px elevation lift with ambient shadow expansion.
- **Turn 2**:
  - *Question 3*: Concentric radius rule enforcement: Confirm child-to-parent padding math across cards and inner pills.
  - *Question 4*: Focus ring treatment: High-contrast `:focus-visible` offset ring for keyboard navigability.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit touch hit targets (>= 48px) and layout shift prevention. Emit:
`specs/phase-7.1-spec.md` with `## Skill Evidence & Formula Block` citing `emil-design-eng` rules and concentric radius formulas.

### Step 4: Gated Implementation
1. Implement the core interactive components (`ButtonPrimary`, `CardBento`, `BadgeStatus`) in `src/components/`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 7.1 --allowed src/components/**/* specs/phase-7.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 7.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 16`.
3. Update `RESUME.md` with active phase set to `7.3`.
4. Print the exact prompt for Chat 16:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 7.3.
   ```
5. **STOP calling tools immediately.**
