# SESSION PROMPT: CHAT 07
## Active Phase: 3.1 & 3.2 -- Content Strategy, Scrollytelling Narrative & Sitemaps
### Wave: Wave 3 (Architecture & Spatial Wireframing)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`content-strategy`](file:///d:/Design-OS/.agents/skills/content-strategy/SKILL.md), [`information-architecture`](file:///d:/Design-OS/.agents/skills/information-architecture/SKILL.md), [`navigation-patterns`](file:///d:/Design-OS/.agents/skills/navigation-patterns/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `docs/sitemap.md`
  - `specs/phase-3.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 3.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Read `context/1-brand-and-vision.md` and `.tastemaker/style-lock.md`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure planned navigation routes and query parameters prevent open-redirect vulnerabilities.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the content strategy & sitemap interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: The scrollytelling narrative arc: How should the visual narrative unfold as the user scrolls from hero to conversion?
  - *Question 2*: Persistent navigation structure: Floating glass dock vs. top fixed navigation bar vs. minimal full-screen drawer.
- **Turn 2**:
  - *Question 3*: Section inventory and sequence (Hero -> Credibility -> Core Innovation Bento -> Deep Dive Pinned Track -> Conversion Anchor -> Semantic Footer).
  - *Question 4*: Micro-copy voice and tone guidelines (concise, high-conviction, zero corporate jargon).
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) to audit the narrative pacing. Emit:
`specs/phase-3.1-spec.md` with `## Skill Evidence & Formula Block` citing `content-strategy` and `navigation-patterns`.

### Step 4: Gated Implementation
1. Write the full sitemap and section taxonomy to `docs/sitemap.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 3.1 --allowed docs/sitemap.md specs/phase-3.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 3.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 8`.
3. Update `RESUME.md` with active phase set to `3.4`.
4. Print the exact prompt for Chat 08:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 3.4.
   ```
5. **STOP calling tools immediately.**
