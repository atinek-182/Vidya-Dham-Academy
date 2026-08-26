# SESSION PROMPT: CHAT 22
## Active Phase: 11.1 & 11.2 -- Playwright 5-Viewport Visual Capture & Self-Healing Layout Loop
### Wave: Wave 7 (Edge Hardening, Quality Gates & Handoff)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`browser-testing`](file:///C:/Users/HP/.gemini/config/skills/browser-testing/SKILL.md), visual regression tools, [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `audits/visual-qa/**/*`
  - `src/**/*` (layout fixes & self-healing CSS)
  - `specs/phase-11.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 11.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Launch dev server if not already running (`npm run dev`).

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Ensure browser testing scripts run in sandbox mode with zero permission exposure or local file disclosure risks.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the visual QA interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Confirm the 5 standard viewports for automated capture: 1920px (Ultrawide), 1440px (Desktop), 1024px (Tablet Landscape), 768px (Tablet Portrait), and 375px (Mobile).
  - *Question 2*: Self-healing threshold: Automated detection of horizontal scrollbars (`document.documentElement.scrollWidth > window.innerWidth`) and zero-tolerance auto-patching.
- **Turn 2**:
  - *Question 3*: Image and font load settlement: Wait for `document.fonts.ready` and network idle before capturing full-page screenshot receipts.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Multi-Viewport Capture & Pre-Write Audit (/roast)
1. Capture full-page screenshots across all 5 viewports and save to `audits/visual-qa/viewport-[width]px.png`.
2. Inspect screenshots for visual bugs, clipped typography, or misaligned elements.
3. Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) and emit `specs/phase-11.1-spec.md`.

### Step 4: Self-Healing Layout Loop & Gatekeeper
1. Auto-patch any layout bugs discovered in the screenshots.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 11.1 --allowed audits/visual-qa/**/* src/**/* specs/phase-11.1-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 11.1 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 23`.
3. Update `RESUME.md` with active phase set to `11.3`.
4. Print the exact prompt for Chat 23:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 11.3.
   ```
5. **STOP calling tools immediately.**
