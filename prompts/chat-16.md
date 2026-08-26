# SESSION PROMPT: CHAT 16
## Active Phase: 7.3 -- Form UX, Inline Validation & Feedback Engineering
### Wave: Wave 6 (Component Engineering, Motion & Assets)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`form-design`](file:///d:/Design-OS/.agents/skills/form-design/SKILL.md), [`error-handling-ux`](file:///d:/Design-OS/.agents/skills/error-handling-ux/SKILL.md), [`ask-sonner`](file:///d:/Design-OS/.agents/skills/ask-sonner/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/components/forms/**/*`
  - `src/components/Toaster.*`
  - `specs/phase-7.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[context/4-motion-choreography.md, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 7.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/3-ui-manifest.md` for form field definitions.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Apply VibeSec input sanitization rules: validate and sanitize all form fields client-side, guard against XSS payload injections, prevent prototype pollution in form state handlers.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the form UX & feedback interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Primary input field design: Single-field inline newsletter input vs. floating modal dialog vs. multi-step lead form.
  - *Question 2*: Inline validation triggers: Validate on blur vs. debounce on keystroke (300ms) with zero layout shift.
- **Turn 2**:
  - *Question 3*: Feedback notifications: Sonner toast notification popups (rich styled with OKLCH theme colors) vs. inline state replacement.
  - *Question 4*: Error recovery flows: Clear, human error messages without robotic technical jargon.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit error prevention and keyboard Tab order. Emit:
`specs/phase-7.3-spec.md` with `## Skill Evidence & Formula Block` citing `form-design` and `ask-sonner`.

### Step 4: Gated Implementation
1. Implement the conversion form components and Sonner toast triggers.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 7.3 --allowed src/components/forms/**/* src/components/Toaster.* specs/phase-7.3-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 7.3 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 17`.
3. Update `RESUME.md` with active phase set to `8.1`.
4. Print the exact prompt for Chat 17:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 8.1.
   ```
5. **STOP calling tools immediately.**
