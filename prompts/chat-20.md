# SESSION PROMPT: CHAT 20
## Active Phase: 9.1 & 9.2 -- Deterministic Vector Iconography & CC0 Photography Binding
### Wave: Wave 6 (Component Engineering, Motion & Assets) -- [WAVE 6 GATEWAY]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`solar-duotone-bold`](file:///d:/Design-OS/.agents/skills/solar-duotone-bold/SKILL.md), Openverse API (`python scripts/design_os.py photos`), [`sanitize_svg.py`](file:///d:/Design-OS/.agents/skills/flagship-project-init/scripts/sanitize_svg.py), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/assets/**/*`
  - `src/components/**/*` (binding icons and photos)
  - `specs/phase-9.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 9.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/3-ui-manifest.md` to identify all iconography and media requirements.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Mandatory SVG sanitization: execute `python scripts/sanitize_svg.py` on every SVG before moving to `src/assets/`.
- Verify zero `<script>`, `onload`, `onerror`, or `javascript:` attributes in vector markup.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the deterministic asset binding interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Vector icon style: Iconify Solar Duotone Bold (curated two-tone matched to brand accent) vs. clean Lucide outlines.
  - *Question 2*: Photography curation query keywords: Specific Openverse search terms for high-res authentic CC0 photography (zero AI faces, zero watermarks).
- **Turn 2**:
  - *Question 3*: Local caching confirmation: Sanitize all SVGs through `python scripts/sanitize_svg.py` and store directly into `src/assets/icons/` for 100% offline resilience.
  - *Question 4*: Image aspect ratios and loading states: Explicit `aspect-ratio`, blurhash placeholders, and lazy loading.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Asset Sanitization & Pre-Write Audit (/roast)
1. Download CC0 photography using `python scripts/design_os.py photos --query "<topic>"`.
2. Fetch and sanitize vector SVGs using `python scripts/sanitize_svg.py`.
3. Convene the 3-persona mini-audit (Contrarian, VibeSec, Buyer) to audit image weights and SVG safety. Emit:
   `specs/phase-9.1-spec.md` with `## Skill Evidence & Formula Block` citing `solar-duotone-bold`.

### Step 4: Gated Implementation & Wave 6 Quality Scorecard
1. Bind all icons and photos to components in `src/components/`.
2. Run the Wave 6 continuous quality audit:
   - Run `better-interface` scoring checklist. Verify score >= 85/100. If score < 85, patch top 3 issues immediately.
3. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 9.1 --allowed src/assets/**/* src/components/**/* specs/phase-9.1-spec.md
   ```

### Step 5: Wave 6 Gate Checkpoint & Handoff
1. Check off Phase 9.1 in `context/6-progress-tracker.md`.
2. Mark **Wave 6 Gate: [PASSED]**.
3. Create local git checkpoint tag:
   ```bash
   git tag -a "checkpoint/wave-6-components" -m "Wave 6 verified: Components, Forms, Motion and Sanitized Assets sealed"
   ```
4. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 21`.
5. Update `RESUME.md` with active phase set to `10.1` (Wave 7: Edge Hardening, Quality Gates & Handoff).
6. Print the exact prompt for Chat 21:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 10.1.
   ```
7. **STOP calling tools immediately.**
