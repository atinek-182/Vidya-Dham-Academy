# SESSION PROMPT: CHAT 08
## Active Phase: 3.4 -- Spatial Wireframing & Rhythm Specifications
### Wave: Wave 3 (Architecture & Spatial Wireframing) -- [WAVE 3 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`wireframe-spec`](file:///d:/Design-OS/.agents/skills/wireframe-spec/SKILL.md), [`better-layout`](file:///d:/Design-OS/.agents/skills/better-layout/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `docs/wireframe-spec.md`
  - `specs/phase-3.4-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 3.4 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `docs/sitemap.md` to review the section inventory.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure layout structures do not rely on unsafe third-party CDN scripts or unsafe iframe embeddings.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the spatial layout & wireframe interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Container max-widths across viewports: Ultrawide (1440px/1600px container) vs. full-bleed edge-to-edge stages.
  - *Question 2*: Visual weight and optical alignment: Centered editorial balance vs. asymmetrical tension.
- **Turn 2**:
  - *Question 3*: Section vertical rhythm: Obys 140px baseline breathing room vs. compact utility spacing.
  - *Question 4*: Mobile stacking behavior (how do 12-column bento grids collapse gracefully onto 375px screens?).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit wireframe density and viewport overflow risks. Emit:
`specs/phase-3.4-spec.md` with `## Skill Evidence & Formula Block` citing `wireframe-spec` and `better-layout`.

### Step 4: Gated Implementation
1. Document the complete spatial wireframe specs into `docs/wireframe-spec.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 3.4 --allowed docs/wireframe-spec.md specs/phase-3.4-spec.md
   ```

### Step 5: Wave 3 Gate Checkpoint & Handoff
1. Check off Phase 3.4 in `context/6-progress-tracker.md`.
2. Mark **Wave 3 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-3-structure" -m "Wave 3 verified: Architecture and Spatial Wireframing locked"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 9`.
5. Update `RESUME.md` with active phase set to `4.1` (Wave 4: Mathematical Tokens & Contrast Math).
6. Print the exact prompt for Chat 09:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 4.1.
   ```
7. **STOP calling tools immediately.**
