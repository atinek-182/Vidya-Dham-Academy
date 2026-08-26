# SESSION PROMPT: CHAT 19
## Active Phase: 8.4 -- Interactive 3D / WebGL Shaders & Canvas FX Engineering
### Wave: Wave 6 (Component Engineering, Motion & Assets)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`threejs-webgl`](file:///d:/Design-OS/.agents/skills/threejs-webgl/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), target FX skill ([`shader-cursor-effects`](file:///d:/Design-OS/.agents/skills/shader-cursor-effects/SKILL.md), [`matterjs`](file:///d:/Design-OS/.agents/skills/matterjs/SKILL.md), or [`cobejs`](file:///d:/Design-OS/.agents/skills/cobejs/SKILL.md))
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/components/canvas/**/*`
  - `src/shaders/**/*`
  - `specs/phase-8.4-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/assets/icons/**/*, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 8.4 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Inspect `src/components/` and `src/motion/`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Verify WebGL shaders against buffer overflow attacks, ensure precision qualifiers are strictly typed, and prevent GLSL uniform injection.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the WebGL & interactive physics interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Confirm canvas stage responsibility: Hero 3D interactive mesh vs. reactive cursor water ripple shader vs. interactive 2D gravity physics badges (`matterjs`) vs. interactive 3D globe (`cobejs`).
  - *Question 2*: Fallback behavior: Static CSS gradient fallback when WebGL context is lost or unsupported.
- **Turn 2**:
  - *Question 3*: Shader performance budget: Enforce pixelRatio capped at `Math.min(window.devicePixelRatio, 2)` and pause animation loop when canvas scrolls off-screen.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, VibeSec) to audit shader memory leaks, GPU composite strain, and canvas XSS. Emit:
`specs/phase-8.4-spec.md` with `## Skill Evidence & Formula Block` citing Three.js uniforms and pixel ratio constraints.

### Step 4: Gated Implementation
1. Implement the canvas component with proper WebGL context loss handling and lifecycle cleanup.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 8.4 --allowed src/components/canvas/**/* src/shaders/**/* specs/phase-8.4-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 8.4 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 20`.
3. Update `RESUME.md` with active phase set to `9.1`.
4. Print the exact prompt for Chat 20:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 9.1.
   ```
5. **STOP calling tools immediately.**
