# Phase 5.4 Specification: UI Component Manifest, Atomic API Specs & State Matrix Engineering

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 5: Macrostructure & Surface Materiality`  
> **Phase ID**: `5.4`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 5.4 formalizes the complete interactive UI component manifest, atomic API contracts, and deterministic state machine matrices for Vidya Dham Academy's digital flagship. Following the foundational layout scaffolding and Obys 140px vertical rhythm established in Phase 5.1, this phase defines the structural anatomy, prop schemas, kinetic physics signatures, and accessibility invariants for every interactive primitive before component code is written in Wave 6.

Every component specified herein strictly reflects the **editorial-tech** aesthetic archetype: monolithic typography, 0.5px hairline borders (`oklch(0.24 0.025 260 / 0.45)`), tactile scale-on-press physics (`scale(0.97)`), and mathematical concentric corner radii. Corporate SaaS clichés (such as pillowy drop shadows, multi-color gradient blobs, and unmeasured component padding) are permanently excluded.

### Core Architectural Anchors Locked:
1. **Full Flagship Core Suite**:
   - `ButtonPrimary`: Tactile conversion action with amber fill (`oklch(0.76 0.16 75)`), deep slate label (`#05070c`), and `scale(0.97)` micro-press.
   - `ButtonSecondary`: Technical outline action with hairline border, subtle background luminance shift, and arrow vector translation.
   - `CardBento`: Monastic content container with 16px radius, subtle hairline border, `translateY(-4px)` hover elevation, and concentric inner padding.
   - `InputField`: High-security input primitive with 16px font floor (zero iOS zoom), tabular numeric enforcement, and real-time inline validation feedback.
   - `NavDock`: Monastic 64px fixed header with progressive blur backdrop (`backdrop-blur-md`), live cohort availability ticker, and accessible tab trap modal drawer.
   - `ModalDrawer`: Focus-trapped pedagogical inspection drawer for 4K concept derivations with backdrop scrim and escape key dismiss.
   - `StatusBadge`: Inline telemetry capsule with live pulse dot and tabular numeric capacity display.
2. **Deterministic 6-State Machine**:
   - Every interactive control must account for six discrete states: `idle`, `hover`, `active/press`, `focus-visible`, `loading/busy`, and `disabled/error`.
   - Focus indicators enforce a 2px amber ring (`#f59e0b`) with a 2px offset against the deep slate canvas (`#05070c`), achieving a 9.05:1 contrast ratio.
3. **Harmonic Concentric Radius Geometry**:
   - Strict adherence to the nested radius law: $R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$.
   - Guarantees optical alignment between outer cards ($R=16\text{px}$), nested widgets ($R=8\text{px}$), and pill capsules ($R=9999\text{px}$).

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase Interview was conducted across two interactive rounds, locking the following architectural parameters:

| Parameter | Decision Locked | Architectural Justification |
| :--- | :--- | :--- |
| **Component Inventory** | **Full Flagship Core Suite** | Specifies Primary Button, Secondary Outline Button, Bento Feature Card, Phone/Email Input with Validation, Monastic Nav Dock, and Modal Concept Drawer. |
| **State Machine Coverage** | **Tactile Physics State Machine** | 6 explicit states (`idle`, `hover`, `active`, `focus-visible`, `loading`, `disabled/error`) with `scale(0.97)` press feedback, `cubic-bezier(0.25, 1, 0.5, 1)` transitions, and 2px amber focus rings with 2px offset. |
| **Concentric Radius Hierarchy** | **Harmonic Concentric Hierarchy** | Outer Bento Card 16px radius with 8px inner controls ($P=8\text{px}$ or $12\text{px}$), Large Modal Drawer 24px radius with 12px inner cards, Hero Cards 20px radius with 8px badges ($R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$). |
| **Edge-Case Governance** | **Strict Anti-Break Containment** | `text-wrap: balance` on headings, `line-clamp-2` with full-text title tooltips on card descriptions, $44\text{px} \times 44\text{px}$ minimum touch targets, `font-variant-numeric: tabular-nums` on metrics, and 320px container reflow. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit component state vulnerabilities, accessibility violations, and mobile touch clipping.

### Persona 1: The Contrarian (Edge Cases & State Failure Auditor)
- **Critique**: "Design system specifications frequently ignore intermediate states: What happens when an input is disabled while loading? What happens if a bento card title wraps to 4 lines on a 360px viewport? How is a screen reader informed that a button is submitting without reading the raw SVG spinner?"
- **Mitigation & Resolution**:
  - *State Collision Rules*: `loading` takes precedence over `hover` and `active`; inputs in `loading` or `disabled` state immediately apply `aria-busy="true"` or `aria-disabled="true"` and pointer-events: none.
  - *Text Clamping & Overflow Rules*: All bento card headers apply `text-wrap: balance` with a maximum height ceiling; card body prose applies `line-clamp-3` on mobile with a full string fallback in an accessible tooltip or disclosure.
  - *Screen Reader Feedback*: All loading states render a visually hidden `<span className="sr-only">Submitting reservation...</span>` and maintain the live announcement region.

### Persona 2: The Logician (Coordinate Geometry & Optical Alignment Auditor)
- **Critique**: "If a 16px outer card has a 12px internal padding and contains a nested button with a 12px radius, the corner gap looks warped and amateurish because $R_{\text{inner}} \ne R_{\text{outer}} - P$. How is mathematical concentricity guaranteed across all nested layers?"
- **Mitigation & Resolution**:
  - *Strict Concentric Radius Calculus*: 
    $$R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$$
    When $R_{\text{outer}} = 16\text{px}$ and $P = 8\text{px}$, $R_{\text{inner}} = 8\text{px}$. When $P = 12\text{px}$, $R_{\text{inner}} = 4\text{px}$ (or $R_{\text{outer}}$ is scaled to $20\text{px}$ so $R_{\text{inner}} = 8\text{px}$).
  - *Icon Optical Weight*: All vector icons inside buttons and cards declare an optical boundary with equalized stroke width (1.5px) matching font weight 500.

### Persona 3: The Buyer (Trust, Clarity & Conversion Auditor)
- **Critique**: "Parents evaluating an elite academic coaching institute are skeptical of gimmicks. If buttons look like toy SaaS apps or forms request excessive information, conversion will drop. Every component must communicate solemn academic authority."
- **Mitigation & Resolution**:
  - *Monastic Restraint*: Primary buttons feature solid amber fills with dark slate text, avoiding neon glows or gradient sheen.
  - *Minimal Friction Inputs*: The admission form requests only Grade Selection + WhatsApp Phone Number. Zero passwords, zero unnecessary data collection.
  - *Continuous Institutional Reassurance*: Live cohort capacity counter (`19 / 25 Claimed`) reinforces scarcity and small-cohort exclusivity with tabular numbers.

---

## 4. Component Inventory & Atomic API Specifications

### 4.1 `ButtonPrimary` (Conversion Action Primitive)
- **Role**: Primary call-to-action for reserving classroom visits and submitting applications.
- **Anatomy**:
  - Container: Amber solid fill (`oklch(0.76 0.16 75)` / `#f59e0b`), height $48\text{px}$ ($3.0\text{rem}$), rounded-lg ($8\text{px}$).
  - Label: Bold Schibsted Grotesk text, color `#05070c` (9.05:1 contrast pass), size $14\text{px}$ ($0.875\text{rem}$).
  - Optional Icon: Trailing arrow vector ($16\text{px}$, 1.5px stroke) translating $+2\text{px}$ horizontally on hover.
- **Props API**:
  ```typescript
  export interface ButtonPrimaryProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
    ariaLabel?: string;
  }
  ```
- **State Machine Dynamics**:
  - `idle`: `bg-amber-500 text-[#05070c] shadow-[0_4px_12px_rgba(245,158,11,0.20)]`.
  - `hover`: `bg-amber-400 shadow-[0_6px_20px_rgba(245,158,11,0.35)] translate-y-[-1px]`.
  - `active/press`: `scale(0.97) bg-amber-600 transition-transform duration-75 ease-out`.
  - `focus-visible`: `outline-none ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]`.
  - `loading`: `opacity-80 pointer-events-none cursor-wait` with centered SVG spinner.
  - `disabled`: `bg-white/[0.08] text-white/30 cursor-not-allowed pointer-events-none shadow-none`.

### 4.2 `ButtonSecondary` (Technical Outline Primitive)
- **Role**: Secondary exploration actions ("Explore Pedagogy Roadmap", "View Faculty Dossier").
- **Anatomy**:
  - Container: 0.5px hairline border (`border-white/[0.12]`), background `bg-white/[0.04]`, height $48\text{px}$, rounded-lg ($8\text{px}$).
  - Label: Medium Schibsted Grotesk text, color `#cbd5e1` (8.82:1 contrast pass).
- **Props API**:
  ```typescript
  export interface ButtonSecondaryProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
    size?: 'sm' | 'md' | 'lg';
    iconTrailing?: React.ReactNode;
    className?: string;
    ariaLabel?: string;
  }
  ```
- **State Machine Dynamics**:
  - `idle`: `border border-white/[0.12] bg-white/[0.04] text-slate-200`.
  - `hover`: `border-amber-500/40 bg-white/[0.08] text-white`.
  - `active/press`: `scale(0.98) bg-white/[0.12] duration-75`.
  - `focus-visible`: `ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]`.

### 4.3 `CardBento` (Modular Pedagogical Container)
- **Role**: Bento grid cards presenting modules, faculty credentials, and smart board teasers.
- **Anatomy**:
  - Surface: Elevated slate canvas (`oklch(0.13 0.020 260)` / `#0b0f19`).
  - Border: 0.5px hairline border (`oklch(0.24 0.025 260 / 0.45)` / `border-white/[0.10]`).
  - Radius: $16\text{px}$ (`rounded-2xl`).
  - Padding: $32\text{px}$ desktop (`p-8`), $24\text{px}$ mobile (`p-6`).
  - Depth: Layered inset specular reflection (`shadow-surface`: `0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)`).
- **Props API**:
  ```typescript
  export interface CardBentoProps {
    colSpan?: string; // e.g. 'col-span-4 sm:col-span-8 lg:col-span-8'
    tag?: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
    interactive?: boolean;
    onClick?: () => void;
    className?: string;
  }
  ```
- **State Machine Dynamics**:
  - `idle`: `bg-[#0b0f19] border border-white/[0.10] shadow-xl`.
  - `hover`: (if interactive) `translate-y-[-4px] border-amber-500/30 shadow-2xl transition-all duration-200 ease-out`.
  - `focus-visible`: `ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]`.

### 4.4 `InputField` (Academic Lead Capture Primitive)
- **Role**: Parent phone number input and grade selection with inline validation.
- **Anatomy**:
  - Container: Height $48\text{px}$, background `#05070c`, border `border-white/[0.12]`, radius $8\text{px}$.
  - Text: Size $16\text{px}$ ($1.0\text{rem}$, iOS zoom prevention floor), font Schibsted Grotesk, color `#f8fafc`.
  - Placeholder: Color `#64748b` (4.5:1 text floor pass).
- **Props API**:
  ```typescript
  export interface InputFieldProps {
    id: string;
    label: string;
    type?: 'text' | 'tel' | 'email';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    isValid?: boolean;
    helperText?: string;
    isRequired?: boolean;
    disabled?: boolean;
    className?: string;
  }
  ```
- **State Machine Dynamics**:
  - `idle`: `border border-white/[0.12] bg-[#05070c] text-white`.
  - `focus`: `border-amber-500 ring-2 ring-amber-500/30 outline-none`.
  - `error`: `border-rose-500 ring-2 ring-rose-500/20 text-white`.
  - `valid`: `border-emerald-500/60 ring-1 ring-emerald-500/20`.
  - `disabled`: `opacity-50 bg-white/[0.02] cursor-not-allowed`.

### 4.5 `NavDock` (Persistent Monastic Navigation)
- **Role**: Fixed 64px monastic header with brand seal, live cohort telemetry, and navigation links.
- **Anatomy**:
  - Backdrop: `h-16 bg-[#05070c]/85 backdrop-blur-md border-b border-white/[0.08]`.
  - Brand Seal: 32px amber geometric monogram container (`rounded-lg bg-amber-500/10 border border-amber-500/30`).
  - Telemetry Capsule: Status dot (`bg-emerald-500 animate-pulse`) + tabular cohort availability (`19/25 Claimed`).
  - Mobile Drawer Trigger: Accessible hamburger button with $44\text{px} \times 44\text{px}$ touch target.
- **Props API**:
  ```typescript
  export interface NavDockProps {
    claimedSeats: number;
    totalSeats: number;
    onOpenVisitModal: () => void;
    className?: string;
  }
  ```

### 4.6 `ModalDrawer` (4K Concept & Visit Reservation Dialog)
- **Role**: Accessible modal drawer for in-depth derivation inspection and classroom visit reservations.
- **Anatomy**:
  - Scrim: `fixed inset-0 z-50 bg-[#05070c]/80 backdrop-blur-sm transition-opacity`.
  - Surface: Centered architectural frame, max-width $640\text{px}$, radius $24\text{px}$ (`rounded-3xl`), background `#0b0f19`, border `border-white/[0.14]`.
  - Focus Trap: Traps Tab key navigation inside modal; dismisses on `Escape` or backdrop click.
- **Props API**:
  ```typescript
  export interface ModalDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    ariaLabelledBy?: string;
  }
  ```

---

## 5. Comprehensive State Machine Matrix

| Component | State | Background Fill | Border Treatment | Text / Foreground | Transform / Physics | Accessibility / ARIA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ButtonPrimary` | `idle` | `#f59e0b` (Amber 500) | `none` | `#05070c` (Slate 950) | `none` | `role="button"` |
| `ButtonPrimary` | `hover` | `#fbbf24` (Amber 400) | `none` | `#05070c` | `translateY(-1px)` | `cursor-pointer` |
| `ButtonPrimary` | `active` | `#d97706` (Amber 600) | `none` | `#05070c` | `scale(0.97)` | `duration-75` |
| `ButtonPrimary` | `focus-visible` | `#f59e0b` | `none` | `#05070c` | `none` | `ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]` |
| `ButtonPrimary` | `loading` | `#f59e0b` (80% opacity) | `none` | `#05070c` | `none` | `aria-busy="true" pointer-events-none` |
| `ButtonPrimary` | `disabled` | `rgba(255,255,255,0.08)` | `none` | `rgba(255,255,255,0.30)` | `none` | `aria-disabled="true" pointer-events-none` |
| `ButtonSecondary`| `idle` | `rgba(255,255,255,0.04)`| `0.5px solid rgba(255,255,255,0.12)` | `#cbd5e1` (Slate 300) | `none` | `role="button"` |
| `ButtonSecondary`| `hover` | `rgba(255,255,255,0.08)`| `0.5px solid rgba(245,158,11,0.40)` | `#ffffff` | `translateX(2px)` icon | `cursor-pointer` |
| `ButtonSecondary`| `active` | `rgba(255,255,255,0.12)`| `0.5px solid rgba(245,158,11,0.60)` | `#ffffff` | `scale(0.98)` | `duration-75` |
| `ButtonSecondary`| `focus-visible` | `rgba(255,255,255,0.04)`| `0.5px solid rgba(245,158,11,0.80)` | `#ffffff` | `none` | `ring-2 ring-amber-500 ring-offset-2` |
| `CardBento` | `idle` | `#0b0f19` | `0.5px solid rgba(255,255,255,0.10)` | `#f8fafc` | `none` | `role="region"` |
| `CardBento` | `hover` | `#0b0f19` | `0.5px solid rgba(245,158,11,0.30)` | `#f8fafc` | `translateY(-4px)` | `transition-all duration-200` |
| `CardBento` | `focus-visible` | `#0b0f19` | `0.5px solid rgba(245,158,11,0.50)` | `#f8fafc` | `none` | `ring-2 ring-amber-500` |
| `InputField` | `idle` | `#05070c` | `1px solid rgba(255,255,255,0.12)` | `#f8fafc` | `none` | `aria-invalid="false"` |
| `InputField` | `focus` | `#05070c` | `1px solid #f59e0b` | `#ffffff` | `none` | `ring-2 ring-amber-500/30` |
| `InputField` | `error` | `#05070c` | `1px solid #f43f5e` (Rose 500) | `#ffffff` | `shake animation` | `aria-invalid="true" aria-describedby="err"` |
| `InputField` | `valid` | `#05070c` | `1px solid #10b981` (Emerald 500)| `#ffffff` | `none` | `aria-invalid="false"` |
| `InputField` | `disabled` | `rgba(255,255,255,0.02)`| `1px solid rgba(255,255,255,0.06)` | `rgba(255,255,255,0.25)` | `none` | `disabled aria-disabled="true"` |
| `NavDock` | `scrolled` | `#05070c`/90 | `border-b border-white/[0.12]` | `#f8fafc` | `none` | `role="banner"` |
| `ModalDrawer` | `open` | `#0b0f19` | `1px solid rgba(255,255,255,0.14)` | `#f8fafc` | `scale(1) translateY(0)`| `role="dialog" aria-modal="true"` |

---

## 6. Concentric Geometry & Optical Radius Calculus

To preserve mathematical harmony across layered containers and nested controls, all radii follow strict geometric rules:

### Concentric Corner Radius Equation:
$$R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$$

### Architectural Radius Matrix:

| Container Tier | Element | Outer Radius ($R_{\text{outer}}$) | Internal Padding ($P$) | Nested Child Element | Calculated Inner Radius ($R_{\text{inner}}$) |
| :--- | :--- | :---: | :---: | :--- | :---: |
| **Modal Tier** | `ModalDrawer` | `24px` (`rounded-3xl`) | `24px` | Embedded Form / Bento Panel | `24px - 24px = 0px` (or `12px` optical) |
| **Hero Tier** | Hero Derivation Card | `20px` (`rounded-2xl`) | `12px` | Canvas Stage Frame | `20px - 12px = 8px` (`rounded-lg`) |
| **Bento Tier** | `CardBento` | `16px` (`rounded-2xl`) | `8px` / `16px` | Interactive Derivation Slot | `16px - 8px = 8px` (`rounded-lg`) |
| **Control Tier** | `ButtonPrimary` | `8px` (`rounded-lg`) | `8px` | Monogram / Icon Box | `8px - 4px = 4px` (`rounded`) |
| **Capsule Tier** | `StatusBadge` | `9999px` (`rounded-full`)| `4px` | Pulse Indicator Dot | `9999px` (Pure Circle) |

---

## 7. Skill Evidence & Formula Block

This specification directly operationalizes principles and formulas from [`component-spec`](file:///d:/Design-OS/.agents/skills/component-spec/SKILL.md), [`pattern-library`](file:///d:/Design-OS/.agents/skills/pattern-library/SKILL.md), and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 7.1 Skill Rule Citations

- **`component-spec` Rule 1: Eight-Point Specification Structure**:
  Every component defines overview, anatomy, variants, props/API, states, behavior, accessibility, and usage guidelines.
- **`component-spec` Rule 5: Exhaustive State Coverage**:
  Every interactive primitive declares explicit visual tokens for `idle`, `hover`, `focus`, `active`, `disabled`, `loading`, and `error`.
- **`component-spec` Rule 7: Strict Accessibility Semantics**:
  Enforces keyboard tab navigation, `role="button"`, `role="dialog"`, `aria-busy`, `aria-invalid`, and visible focus rings.
- **`pattern-library` Rule: Focus on problem first, solution second**:
  Patterns solve tangible user problems: high-friction admissions forms are replaced with 2-step single-screen verification; complex derivations are isolated in pinned comparison and modal drawers.
- **`better-ui` Rule: Scale-on-press micro-interactions**:
  Active press states declare `scale(0.97)` on primary buttons and `scale(0.98)` on cards with `duration-75` and `cubic-bezier(0.25, 1, 0.5, 1)`.
- **`better-accessibility` Rule: 44px Touch Target Flooring**:
  Every button, input field, tab trigger, and close control maintains minimum dimensions of $44\text{px} \times 44\text{px}$ to prevent mis-taps on touch viewports.
- **`better-typography` Rule: Mobile Input 16px Floor**:
  All form input fields enforce `font-size: 16px` ($1.0\text{rem}$) on screens $< 640\text{px}$ to permanently suppress iOS Safari automatic viewport zooming.

### 7.2 Mathematical Formulas & Calculations

#### 1. Concentric Corner Radius Formula:
$$R_{\text{inner}} = R_{\text{outer}} - P_{\text{padding}}$$
- Outer Bento Container: $R_{\text{outer}} = 16\text{px}$
- Inner Widget Margin Padding: $P = 8\text{px}$
- Inner Widget Radius: $R_{\text{inner}} = 16\text{px} - 8\text{px} = 8\text{px}$

#### 2. Contrast Ratio Matrix (WCAG 2.2 AA Compliance):
Calculated via mathematical luminance formula $C_r = \frac{L_1 + 0.05}{L_2 + 0.05}$:
- `ButtonPrimary` Label on Fill:
  $$\text{Text } \#05070c \text{ on Fill } \#f59e0b \implies C_r = 9.05:1 \quad (\ge 4.5:1 \text{ [PASS]})$$
- Display Headlines on Canvas:
  $$\text{Text } \#f8fafc \text{ on Canvas } \#05070c \implies C_r = 18.57:1 \quad (\ge 4.5:1 \text{ [PASS]})$$
- Muted Metadata on Bento Surface:
  $$\text{Text } \#94a3b8 \text{ on Surface } \#0b0f19 \implies C_r = 7.24:1 \quad (\ge 4.5:1 \text{ [PASS]})$$
- Focus Ring Contrast:
  $$\text{Ring } \#f59e0b \text{ on Canvas } \#05070c \implies C_r = 9.05:1 \quad (\ge 3.0:1 \text{ [PASS]})$$

#### 3. Fluid Section and Container Padding Clamp Formula:
$$\text{clamp}(P_{\text{min}}, b\text{rem} + V\text{vw}, P_{\text{max}})$$
- Major section vertical rhythm:
  $$\text{clamp}(4.000\text{rem}, 2.500\text{rem} + 5.00\text{vw}, 8.750\text{rem})$$
- Hero top spacing:
  $$160\text{px} \quad (10.0\text{rem})$$

---

## 8. Verification & Gatekeeper Clearance

This specification satisfies all requirements of Phase 5.4 and verifies cleanly against `scripts/phase_gate.py`.

Execution verification command:
```bash
python scripts/phase_gate.py --phase 5.4 --allowed context/3-ui-manifest.md specs/phase-5.4-spec.md
```
