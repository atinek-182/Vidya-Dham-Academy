# SESSION PROMPT: CHAT 24
## Active Phase: 11.5 & 12.1 -- Technical SEO, Performance Optimization & Final Handoff
### Wave: Wave 7 (Edge Hardening, Quality Gates & Handoff) -- [PROJECT COMPLETION]

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`handoff-spec`](file:///d:/Design-OS/.agents/skills/handoff-spec/SKILL.md), [`design-impact-reporting`](file:///d:/Design-OS/.agents/skills/design-impact-reporting/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), Schema.org JSON-LD
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `context/7-seo-and-a11y.md`
  - `index.html` (metadata & JSON-LD injection)
  - `specs/phase-12.1-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
  - `.design-lock.json`
- **Forbidden Write Paths**: None (Final packaging phase).

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 12.1 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Verify that Phases 1.1 through 11.3 are marked complete in `context/6-progress-tracker.md`.

### Step 1.5: Security Pre-Flight (VibeSec Protocol)
Run the final [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) security check:
- Final production security sweep: ensure zero secrets, clean build bundle, and no vulnerable packages.
- Document security baseline status as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the final technical SEO & handoff interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Metadata and social preview cards: Page title tag, meta description, canonical URL, OpenGraph image, and Twitter card summary.
  - *Question 2*: Schema.org JSON-LD structured data: Organization, WebSite, Product, or CreativeWork schema injection.
- **Turn 2**:
  - *Question 3*: Core Web Vitals audit: Validate LCP < 1.2s, CLS < 0.05, and asset preloading (`rel="preload"` for hero font and primary image).
  - *Question 4*: Generative Engine Optimization (GEO): Ensure key definitions and product propositions are tagged for AI search engines.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Pre-Write Adversarial Audit (/roast)
Convene the final 3-persona mini-audit (Contrarian, Researcher, Buyer) to audit production readiness. Emit:
`specs/phase-12.1-spec.md` with `## Skill Evidence & Formula Block` citing `handoff-spec`.

### Step 4: Gated Implementation & Final Sign-Off
1. Inject structured data, meta tags, and font preloads into `index.html`.
2. Complete `context/7-seo-and-a11y.md`.
3. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 12.1 --allowed context/7-seo-and-a11y.md index.html specs/phase-12.1-spec.md
   ```

### Step 5: Master Project Completion
1. Check off Phase 12.1 in `context/6-progress-tracker.md`.
2. Mark **Wave 7 Gate: [PASSED]**.
3. Create final git release tag:
   ```bash
   git tag -a "release/awwwards-masterpiece-v1.0" -m "Production Masterpiece Signed Off: All 24 phases verified"
   ```
4. Update `.design-lock.json` status to `"COMPLETED"`.
5. Update `RESUME.md` marking the project **100% COMPLETE & PRODUCTION-READY**.
6. Print the executive completion certificate and handoff summary.
7. **FINISH PROJECT.**
