# SESSION PROMPT: CHAT 10
## Active Phase: 4.3 & 4.4 -- Fluid Typography Scales & Token Normalization
### Wave: Wave 4 (Mathematical Tokens & Contrast Math) -- [WAVE 4 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`better-typography`](file:///d:/Design-OS/.agents/skills/better-typography/SKILL.md), [`design-token`](file:///d:/Design-OS/.agents/skills/design-token/SKILL.md), [`theming-system`](file:///d:/Design-OS/.agents/skills/theming-system/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/2-design-tokens.json`
  - `specs/phase-4.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/3-ui-manifest.md, context/4-motion-choreography.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 4.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/2-design-tokens.json` to load the verified OKLCH color tokens.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure web fonts are sourced exclusively from trusted, privacy-respecting CDNs (Google Fonts / local self-hosted) with correct subresource integrity.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the fluid typography interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Font family pairing strategy: Editorial serif display (e.g. Playfair, Instrument Serif) + grotesque body (Inter, Plus Jakarta) vs. high-tech monospaced pairing.
  - *Question 2*: Fluid type scaling: Major Third (1.25 ratio) vs. Perfect Fourth (1.333 ratio) calculated via fluid CSS `clamp(min, preferred_vw, max)`.
- **Turn 2**:
  - *Question 3*: Massive headline treatment: Confirm hero title scale (`clamp(3.5rem, 12vw, 8.5rem)`) and line-height compaction (`0.88-0.92`).
  - *Question 4*: OpenType features to enable: Tabular numbers (`tnum`), zero slash, discretionary ligatures, curly quotes.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit text measure, line lengths (45-75 chars), and mobile wrap behavior. Emit:
`specs/phase-4.3-spec.md` with `## Skill Evidence & Formula Block` containing the modular clamp formulas.

### Step 4: Gated Implementation
1. Add fluid typography scales, font pairings, and OpenType token definitions into `context/2-design-tokens.json`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 4.3 --allowed context/2-design-tokens.json specs/phase-4.3-spec.md
   ```

### Step 5: Wave 4 Gate Checkpoint & Handoff
1. Check off Phase 4.3 in `context/6-progress-tracker.md`.
2. Mark **Wave 4 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-4-tokens" -m "Wave 4 verified: Mathematical OKLCH Tokens and Fluid Typography sealed"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 11`.
5. Update `RESUME.md` with active phase set to `5.1` (Wave 5: Macrostructure & Surface Materiality).
6. Print the exact prompt for Chat 11:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 5.1.
   ```
7. **STOP calling tools immediately.**
