# SESSION PROMPT: CHAT 14
## Active Phase: 6.3 -- Atmospheric Textures & Noise Canvas Engineering
### Wave: Wave 5 (Macrostructure & Surface Materiality) -- [WAVE 5 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`dither-background`](file:///d:/Design-OS/.agents/skills/dither-background/SKILL.md), [`progressive-blur`](file:///d:/Design-OS/.agents/skills/progressive-blur/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/styles/atmosphere.css` or `src/styles/**/*`
  - `src/components/AtmosphereCanvas.tsx` or background layer
  - `specs/phase-6.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/interactive/**/*, context/4-motion-choreography.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 6.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Inspect `src/styles/surfaces.css`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify that 2D canvas context and SVG filters do not perform unsafe data URL reflections or cross-origin canvas pixel reads.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the atmospheric texture interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Background texture engine: Procedural Bayer-ordered dithering canvas vs. 3% SVG feTurbulence film grain overlay vs. radial gradient mesh.
  - *Question 2*: Progressive blur mask application: Stepped blur fade at header dock (8-stop backdrop-filter mask) to eliminate harsh navbar cuts.
- **Turn 2**:
  - *Question 3*: Performance and battery impact: Low-overhead CSS backdrop filter vs. lightweight 2D canvas noise.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit GPU composite cost and mobile FPS impact. Emit:
`specs/phase-6.3-spec.md` with `## Skill Evidence & Formula Block` citing `dither-background` and `progressive-blur`.

### Step 4: Gated Implementation
1. Implement the background atmospheric layer and progressive blur masks.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 6.3 --allowed src/styles/**/* src/components/AtmosphereCanvas.* specs/phase-6.3-spec.md
   ```

### Step 5: Wave 5 Gate Checkpoint & Handoff
1. Check off Phase 6.3 in `context/6-progress-tracker.md`.
2. Mark **Wave 5 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-5-surfaces" -m "Wave 5 verified: Obys Spatial Layout, Surface Materiality and Shaders sealed"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 15`.
5. Update `RESUME.md` with active phase set to `7.1` (Wave 6: Component Engineering, Motion & Assets).
6. Print the exact prompt for Chat 15:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 7.1.
   ```
7. **STOP calling tools immediately.**
