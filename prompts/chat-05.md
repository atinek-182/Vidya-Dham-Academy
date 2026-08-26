# SESSION PROMPT: CHAT 05
## Active Phase: 2.1 -- Multi-Modal Reference Ingestion & Deconstruction
### Wave: Wave 2 (Multi-Modal Reference & Mood Lock)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`explain-interface`](file:///d:/Design-OS/.agents/skills/explain-interface/SKILL.md), [`video-to-superprompt`](file:///d:/Design-OS/.agents/skills/video-to-superprompt/SKILL.md), [`html-to-interaction-prompts`](file:///d:/Design-OS/.agents/skills/html-to-interaction-prompts/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `reference/MANIFEST.md`
  - `specs/phase-2.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[src/**/*, index.html, context/2-design-tokens.json, context/3-ui-manifest.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 2.1 is active.
2. Render `docs/DESIGN_MAP.mermaid` showing Wave 1 completed.
3. Check `reference/` directory for any user-dropped screenshots, recordings, or links.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Inspect external reference links for unsafe origin domains.
- Ensure reference assets are verified clean.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the reference harvesting interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: What live URLs, video recordings, or screenshots represent the benchmark standard for this project?
  - *Question 2*: Which specific mechanism from the references should be adapted (e.g. hero spatial depth, mouse cursor trail, staggered text reveal, card flip physics)?
- **Turn 2**:
  - *Question 3*: Anti-slop Keep-vs-Discard decisions (what do we keep from the references, and what corporate clichés do we discard)?
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Multi-Modal Sensor Execution & Pre-Write Audit (/roast)
1. If the user provided a video, execute [`video-to-superprompt`](file:///d:/Design-OS/.agents/skills/video-to-superprompt/SKILL.md).
2. If the user provided an image, execute [`explain-interface`](file:///d:/Design-OS/.agents/skills/explain-interface/SKILL.md) to decompose layer stacks in paint order.
3. If the user provided a URL, execute [`html-to-interaction-prompts`](file:///d:/Design-OS/.agents/skills/html-to-interaction-prompts/SKILL.md).
4. Convene the 3-persona mini-audit (Contrarian, Researcher, Buyer) and emit `specs/phase-2.1-spec.md`.

### Step 4: Gated Implementation
1. Write deconstruction tables and recipes into `reference/MANIFEST.md`.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 2.1 --allowed reference/MANIFEST.md specs/phase-2.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 2.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 6`.
3. Update `RESUME.md` with active phase set to `2.3`.
4. Print the exact prompt for Chat 06:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 2.3.
   ```
5. **STOP calling tools immediately.**
