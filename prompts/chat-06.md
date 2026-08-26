# SESSION PROMPT: CHAT 06
## Active Phase: 2.3 -- Socratic Style-Lock Contract & Anti-Slop Seal
### Wave: Wave 2 (Multi-Modal Reference & Mood Lock) -- [WAVE 2 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`tastemaker`](file:///d:/Design-OS/.agents/skills/tastemaker/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), target aesthetic skill (`editorial-tech`)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `.tastemaker/style-lock.md`
  - `.tastemaker/log.json`
  - `specs/phase-2.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 2.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `reference/MANIFEST.md` to load the deconstructed reference recipes.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure the style-lock contract mandates secure asset pipelines (SVG sanitization, no unvetted CDNs).
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the aesthetic style-lock interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Confirm primary visual archetype:
    - (A) Dark Mesh Gradient & Planetary Depth (`mesh-gradient-dark-blue-clean`)
    - (B) Editorial Tech & Asymmetric Typography (`editorial-tech`)
    - (C) Clean Minimal Beige & Warm Neutral Light Mode (`clean-minimal-beige-light-mode`)
    - (D) High-Contrast Skeuomorphic & Paper Elevation (`high-contrast-skeuomorphic-clean`)
    - (E) Dark Glassmorphism & Frosted Glow Borders (`glass-dark-ui`)
  - *Question 2*: Surface materiality and border treatment (hairline gradient borders, liquid metal accents, or quiet borderless grids).
- **Turn 2**:
  - *Question 3*: Atmospheric layer (subtle SVG noise, procedural Bayer dithering, or stepped progressive blur).
  - *Question 4*: Explicit Keep-vs-Discard constraints to permanently lock into the contract.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Buyer, Systems Architect) to test the style contract against visual cliches. Emit:
`specs/phase-2.3-spec.md` with `## Skill Evidence & Formula Block` citing `tastemaker`.

### Step 4: Gated Implementation
1. Create `.tastemaker/style-lock.md` locking visual tokens, surface materials, and anti-slop rules.
2. Record rotation archetype into `.tastemaker/log.json`.
3. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 2.3 --allowed .tastemaker/style-lock.md .tastemaker/log.json specs/phase-2.3-spec.md
   ```

### Step 5: Wave 2 Gate Checkpoint & Handoff
1. Check off Phase 2.3 in `context/6-progress-tracker.md`.
2. Mark **Wave 2 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-2-aesthetics" -m "Wave 2 verified: Aesthetic Style-Lock Contract sealed"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 7`.
5. Update `RESUME.md` with active phase set to `3.1` (Wave 3: Architecture & Spatial Wireframing).
6. Print the exact prompt for Chat 07:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 3.1.
   ```
7. **STOP calling tools immediately.**
