# SESSION PROMPT: CHAT 13
## Active Phase: 6.1 & 6.2 -- Tactile Surface Elevation & Hairline Border Engineering
### Wave: Wave 5 (Macrostructure & Surface Materiality)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`beautiful-shadows`](file:///d:/Design-OS/.agents/skills/beautiful-shadows/SKILL.md), [`css-border-gradient`](file:///d:/Design-OS/.agents/skills/css-border-gradient/SKILL.md), [`liquid-metal-border`](file:///d:/Design-OS/.agents/skills/liquid-metal-border/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/styles/surfaces.css` or `src/styles/**/*`
  - `specs/phase-6.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/components/**/*, context/4-motion-choreography.md, context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 6.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `.tastemaker/style-lock.md` and `context/2-design-tokens.json`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure CSS shaders and gradient border utilities do not import untrusted external stylesheets or remote assets.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the surface materiality interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Shadow elevation strategy: Layered natural neutral shadows (multi-stop ambient occlusion without muddy gray halos) vs. crisp 1px borders.
  - *Question 2*: Border highlight treatment: Subtle hairline gradient border (`oklch(1 0 0 / 0.12)` fading to transparent) vs. active chromatic liquid-metal borders.
- **Turn 2**:
  - *Question 3*: Surface materials: Dark frosted glass (`backdrop-filter: blur(16px)`) vs. matte ceramic stone vs. deep obsidian velvet.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit shadow layering and GPU composite overhead. Emit:
`specs/phase-6.1-spec.md` with `## Skill Evidence & Formula Block` containing exact shadow utilities and gradient border CSS rules.

### Step 4: Gated Implementation
1. Write the surface elevation classes, concentric border radius rules, and border gradient utilities into `src/styles/surfaces.css`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 6.1 --allowed src/styles/**/* specs/phase-6.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 6.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 14`.
3. Update `RESUME.md` with active phase set to `6.3`.
4. Print the exact prompt for Chat 14:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 6.3.
   ```
5. **STOP calling tools immediately.**
