# SESSION PROMPT: CHAT 23
## Active Phase: 11.3 & 11.4 -- AST Anti-Slop Linter, VibeSec Hardening & A11y Review
### Wave: Wave 7 (Edge Hardening, Quality Gates & Handoff)

---

## Non-Negotiable System Rules
1. **ABSOLUTE ZERO-EMOJI MANDATE**: Never ever use emojis anywhere. Strictly forbidden in chat responses, source code, comments, documentation, specs, terminal output, and git commits. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **MANDATORY VIBESEC PRE-FLIGHT**: Execute the VibeSec security audit protocol at the start of work before modifying files.

---

## Scope & Blast Radius Lock
- **Mandatory Core Skills**: [`better-interface`](file:///d:/Design-OS/.agents/skills/better-interface/SKILL.md), [`better-accessibility`](file:///d:/Design-OS/.agents/skills/better-accessibility/SKILL.md), [`better-writing`](file:///d:/Design-OS/.agents/skills/better-writing/SKILL.md), [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md), AST Linter (`python scripts/design_os.py scan` / `npm run lint:slop`)
- **Ambient Umbrella Skills**: [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md), [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md)
- **Allowed Write Paths**:
  - `src/**/*` (code polish, a11y labels, focus rings, anti-slop fixes)
  - `specs/phase-11.3-spec.md`
  - `context/6-progress-tracker.md`
  - `RESUME.md`
  - `NEXT_CHAT_PROMPT.md`
- **Forbidden Write Paths**: `[context/7-seo-and-a11y.md]`

---

## Execution Lifecycle

### Step 1: Auto-Wake & Status Audit
1. Read `RESUME.md` and confirm Phase 11.3 is active.
2. Render `docs/DESIGN_MAP.mermaid`.
3. Review the 5 viewport screenshots in `audits/visual-qa/`.

### Step 1.5: Comprehensive VibeSec Hardening Audit
Run deep [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) compliance audit across codebase:
- Check for zero DOM XSS vectors in user inputs, canvas uniforms, and SVG loaders.
- Verify production CSP meta tags and secure HTTPS resource links.
- Confirm zero secret leakage in git tracking and env configurations.
- Document security audit results in `specs/phase-11.3-spec.md` as `[PASS]`.

### Step 2: Socratic Phase Interview (/grill-me)
Conduct the interface polish & accessibility interview. **Ask 2-3 questions per turn**:
- **Turn 1**:
  - *Question 1*: Run the AST Anti-Slop scan: `python scripts/design_os.py scan`. Did it flag any generic Tailwind gray defaults, uncurated colors, or missing `:hover` transitions?
  - *Question 2*: Keyboard navigation test: Tab through all interactive elements. Are focus rings visible and offset by 2px? Is there any keyboard trap?
- **Turn 2**:
  - *Question 3*: UX writing polish: Review button labels, error text, and empty states using `better-writing`. Are they human, confident, and action-oriented?
  - *Question 4*: Screen reader accessibility: Verify image `alt` attributes and icon button `aria-label` tags.
*Provide concept explanations, structured options (A/B/C), and expert recommendations for each.*

### Step 3: Anti-Slop Audit & Pre-Write Review (/roast)
1. Fix any AST anti-slop linter warnings until the scan returns 0 errors.
2. Convene the 3-persona mini-audit (Contrarian, Logician, Buyer) and emit `specs/phase-11.3-spec.md`.

### Step 4: Gated Implementation
1. Apply final UI polish, UX writing fixes, and ARIA attributes.
2. Run the deterministic gatekeeper:
   ```bash
   python scripts/phase_gate.py --phase 11.3 --allowed src/**/* specs/phase-11.3-spec.md
   ```

### Step 5: Handoff & Resume Update
1. Check off Phase 11.3 in `context/6-progress-tracker.md`.
2. Run prompt hydrator: `python scripts/hydrate_prompt.py --next-chat 24`.
3. Update `RESUME.md` with active phase set to `11.5`.
4. Print the exact prompt for Chat 24:
   ```markdown
   Resume project at projects/Websites/vidya-dham-academy. Read RESUME.md, run vibesec pre-flight, and execute Phase 11.5.
   ```
5. **STOP calling tools immediately.**
