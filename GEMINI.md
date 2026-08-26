# SUBFOLDER PROJECT SYSTEM CONTRACT: [projects/Websites/vidya-dham-academy]

> **Target Project**: `vidya-dham-academy`  
> **Workspace Category**: `Websites`  
> **Target Stack**: `vite-react`  
> **Aesthetic Archetype**: `editorial-tech`  

---

## 1. Precedence Declaration & Scope Hierarchy

1. **Subfolder Override Authority**: When executing any prompt, task, or subagent inside `projects/Websites/vidya-dham-academy`, the rules and constraints declared in this file take **ABSOLUTE PRECEDENCE** over root workspace defaults regarding:
   - **Active Phase Boundaries & Whitelists**: The agent is strictly locked into the active sub-phase declared in `context/6-progress-tracker.md`.
   - **File Write Whitelists (`ALLOWED_WRITE_PATHS`)**: The agent is physically forbidden from modifying files outside the active phase whitelist.
   - **Stack & Architecture Invariants**: Specified in `context/5-code-standards.md`.
2. **Immutable Baselines**: Global Design OS anti-slop guidelines (`npm run lint:slop`) and WCAG 2.2 AA contrast flooring (`python scripts/design_os.py contrast`) remain immutable baselines that can never be weakened.

---

## 2. Absolute Zero-Emoji Mandate (Non-Negotiable System Invariant)

- **NEVER EVER USE EMOJIS ANYWHERE**: Emojis are strictly forbidden across all outputs without exception.
  - No emojis in chat responses or agent commentary.
  - No emojis in source code files (JS, TS, TSX, CSS, HTML, Python, shaders).
  - No emojis in code comments, JSDoc, or docstrings.
  - No emojis in documentation, markdown files, PRDs, or specs.
  - No emojis in terminal commands, script print statements, or CLI logs.
  - No emojis in git commit messages or git tag annotations.
  - No emojis in status pills, UI labels, or design map diagrams.
- **Allowed Text Replacements**: Use clean, deterministic ASCII text markers instead:
  - `[PASS]`, `[FAIL]`, `[OK]`, `[ERROR]`, `[WARN]`, `[INFO]`, `[ACTIVE]`, `[PENDING]`, `[DONE]`, `->`, `*`, `|`.
- **Enforcement**: Any generated emoji is considered a critical defect and must be removed immediately.

---

## 3. Mandatory VibeSec Pre-Flight Security Protocol

At the beginning of **every** chat session and before taking any modification actions, the agent must run the VibeSec security audit adhering to [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md):
1. **Zero Secret Leaks**: Scan current workspace to verify no hardcoded API keys, private tokens, or secrets exist.
2. **CSP Header & Meta Verification**: Ensure strict Content Security Policy meta tags remain intact.
3. **Dependency Whitelist Audit**: Verify dependencies against `context/5-code-standards.md` approved list.
4. **Vector Asset Sanitization**: Ensure all SVGs are sanitized through `python scripts/sanitize_svg.py` to prevent DOM XSS.
5. **WebGL/Canvas Security**: Verify no unvalidated user input flows into GLSL shader uniforms or DOM sinks.

---

## 4. The 4-Tier Non-Negotiable Precedence Constitution

Whenever two design rules, tokens, or user requests conflict, the conflict is deterministically resolved using this immutable 4-tier hierarchy:

```
+------------------------------------------------------------------------+
| TIER 1: IMMUTABLE INVARIANTS (The Law -- Overrides All)                |
| 1. Cybersecurity & VibeSec (Zero XSS, sanitized SVGs, strict CSP).     |
| 2. Absolute Zero-Emoji Rule (Zero emojis across code, chat, docs).     |
| 3. Mathematical Contrast Floor (WCAG 2.2 AA: 4.5:1 text, 3:1 UI).      |
| 4. Responsive Integrity (320px mobile zero-horizontal-overflow).       |
+-----------------------------------+------------------------------------+
                                    |
                                    v
+------------------------------------------------------------------------+
| TIER 2: PERSISTENT STYLE-LOCK CONTRACT (Stage 2 Lock)                  |
| .tastemaker/style-lock.md (Visual Archetype, Surface Depth, Palettes).  |
| Overrides generic skill defaults and prevents aesthetic drift.         |
+-----------------------------------+------------------------------------+
                                    |
                                    v
+------------------------------------------------------------------------+
| TIER 3: SOCRATIC USER ARBITRATION (The "Yes, And" Bridge)              |
| Trade-offs between valid design patterns (e.g. Bento vs Split,         |
| Spring physics vs Linear ease) are presented via /grill-me.            |
+-----------------------------------+------------------------------------+
                                    |
                                    v
+------------------------------------------------------------------------+
| TIER 4: COMPONENT POLISH DEFAULTS                                      |
| Emil Kowalski micro-interactions, button hover dynamics, beam glows.   |
+------------------------------------------------------------------------+
```

### The Socratic "Yes, And" Bridge
If a user prompt or creative choice conflicts with **Tier 1** (e.g. asking for low-contrast muted text), the agent is forbidden from saying a flat "No". Instead, it applies the Socratic Bridge:
> *"Your request yields a contrast ratio of X:1, below the Tier 1 WCAG floor (4.5:1). To preserve your desired dark, moody aesthetic while guaranteeing legibility, here are two mathematical alternatives: (A) Shift to luminous ice-slate (#94a3b8, 4.8:1); or (B) Add a subtle progressive blur backdrop beneath the text container."*

---

## 5. Multi-Modal Sensor Dispatcher

Whenever the user provides media references in chat, the agent must immediately invoke the specialized deconstruction skill before taking action:
- **Video (.mp4, .mov, screen recording)**: Call [`video-to-superprompt`](file:///d:/Design-OS/.agents/skills/video-to-superprompt/SKILL.md) to decompose frame rates, spring dynamics, camera damping, and layer transitions.
- **Screenshot / Image (.png, .jpg)**: Call [`explain-interface`](file:///d:/Design-OS/.agents/skills/explain-interface/SKILL.md) to deconstruct layer stacks in exact CSS paint order.
- **Live URL**: Call [`html-to-interaction-prompts`](file:///d:/Design-OS/.agents/skills/html-to-interaction-prompts/SKILL.md) to extract the DOM/CSS/JS interaction mechanism into `reference/MANIFEST.md`.

---

## 6. Ambient Umbrella Skills (Persistent Across Sessions)

The following skills are designated as **Ambient Umbrella Skills** for this project and remain in scope across all 24 sessions:
- [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) (Continuous cybersecurity & code hygiene)
- [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md) (Master choreography & performance budget)
- [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md) (Smooth scroll & pinned scrollytelling)
- Chosen Theme Skill: `editorial-tech`

---

## 7. Single-Anchor Auto-Wake Protocol

When waking up in a new chat session:
1. **Immediately read `RESUME.md`**: Extract the active sub-phase, status, and target artifacts.
2. **Execute VibeSec Pre-flight**: Run cybersecurity pre-flight check per [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).
3. **Display `docs/DESIGN_MAP.mermaid`**: Show the user their live progress.
4. **Execute Socratic Interview (`/grill-me`)**: Ask 2-3 questions per turn (5-10 total) before drafting specs or touching code.
5. **Enforce Gatekeeper (`python scripts/phase_gate.py`)**: Never check DoD boxes without passing the automated gate.
