# SESSION PROMPT: CHAT 21
## Active Phase: 10.1 & 10.2 -- Destructive Edge-Case Stress Testing & Localization Hardening
### Wave: Wave 7 (Edge Hardening, Quality Gates & Handoff)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`break`](file:///d:/Design-OS/.agents/skills/break/SKILL.md), [`localization-design`](file:///d:/Design-OS/.agents/skills/localization-design/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/**/*` (bug fixes, overflow patches, text truncation)
  - `specs/phase-10.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 10.1 is active.
2. Render `docs/DESIGN_MAP.mermaid` showing Waves 1-6 complete.
3. Review the rendered components across the application.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Test edge-case injection: ensure long strings or unicode characters do not bypass HTML entity escaping.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the destructive edge-case interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: 320px narrow viewport stress-testing: Inspect all container cards, hero headlines, and navigation items. How do we resolve any horizontal clipping?
  - *Question 2*: Overflow strings: Inject 500-character test strings into user-facing copy fields. Does text truncate gracefully (`line-clamp-3`) or wrap cleanly?
- **Turn 2**:
  - *Question 3*: Missing assets and network failure: Verify image broken fallback states (`alt` fallback containers with subtle gray background).
  - *Question 4*: Internationalization expansion: Allow +35% text length expansion (German/French) and RTL mirroring safeguards.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Destructive Execution & Pre-Write Audit (/roast)
1. Deliberately inject edge-case strings, narrow the viewport to 320px, and disconnect images to trigger failures.
2. Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to review failure resilience. Emit:
   `specs/phase-10.1-spec.md` with `## Skill Evidence & Formula Block` citing `break` testing results.

### Step 4: Gated Implementation
1. Apply hardening patches (overflow fixes, `text-wrap: balance`, `min-width: 0` flex constraints).
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 10.1 --allowed src/**/* specs/phase-10.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 10.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 22`.
3. Update `RESUME.md` with active phase set to `11.1`.
4. Print the exact prompt for Chat 22:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 11.1.
   ```
5. **STOP calling tools immediately.**
