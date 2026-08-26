# SESSION PROMPT: CHAT 09
## Active Phase: 4.1 & 4.2 -- OKLCH Palette Generation & Mathematical Contrast Flooring
### Wave: Wave 4 (Mathematical Tokens & Contrast Math)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`better-colors`](file:///d:/Design-OS/.agents/skills/better-colors/SKILL.md), Design OS Python CLI (`palette`, `contrast`), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/2-design-tokens.json`
  - `specs/phase-4.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/3-ui-manifest.md, context/4-motion-choreography.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 4.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `.tastemaker/style-lock.md` to confirm the locked visual archetype.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify token schema file integrity (zero executable code in JSON data).
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the color palette & contrast interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Primary background luminance: Ultra-deep obsidian (`oklch(0.10 0.02 260)`) vs. subtle dark slate (`oklch(0.16 0.03 250)`) vs. warm neutral beige.
  - *Question 2*: Accent chroma level: High-dopamine electric cyan/violet (`chroma >= 0.22`) vs. restrained understated mineral tone (`chroma <= 0.14`).
- **Turn 2**:
  - *Question 3*: Surface elevation stepping: How many dark surface tiers are needed (base, card, elevated popover, modal backdrop)?
  - *Question 4*: Contrast target flooring: Enforce standard WCAG 2.2 AA (4.5:1 text, 3:1 UI) vs. enhanced AAA (7:1 text) for critical copy.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Deterministic Contrast Computation & Pre-Write Audit (/roast)
1. Generate candidate OKLCH color palette using `python scripts/design_os.py palette`.
2. Mathematically test all text/bg combinations using `python scripts/design_os.py contrast`.
3. Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit readability and dopamine ramps. Emit:
   `specs/phase-4.1-spec.md` with `## Skill Evidence & Formula Block` containing the full contrast ratio matrix.

### Step 4: Gated Implementation
1. Write the mathematically verified OKLCH color tokens into `context/2-design-tokens.json`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 4.1 --allowed context/2-design-tokens.json specs/phase-4.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 4.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 10`.
3. Update `RESUME.md` with active phase set to `4.3`.
4. Print the exact prompt for Chat 10:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 4.3.
   ```
5. **STOP calling tools immediately.**
