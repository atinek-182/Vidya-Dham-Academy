# 3. UI Component Manifest & State Matrix

> **Project**: `vidya-dham-academy`  
> **Target Stack**: `vite-react` (React 19 + TypeScript + Tailwind CSS v4)  
> **Aesthetic Archetype**: `editorial-tech`  
> **Active Sub-Phase**: `Phase 5.4`  
> **Status**: `[LOCKED - PHASE 5.4 DOD VERIFIED]`  

---

## 1. Page Section Inventory (Obys 140px Grid)

| Section ID | Section Name | Layout Archetype | Desktop Section Spacing | Key Elements & Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| `sec-hero` | Hero Stage | Asymmetrical 7+5 Stage | `pt-40 pb-[clamp(4.0rem,2.5rem+5.0vw,8.75rem)]` | Monumental serif headline, 25-student live cohort meter, Snell's law derivation sandbox teaser, primary CTA |
| `sec-credibility` | Credibility Ledger | 4-Column Academic Ledger | `py-[clamp(4.0rem,2.5rem+5.0vw,8.75rem)]` | 4 high-density metric blocks, 0.5px hairlines, 25 MAX batch guarantee, 100% founding faculty, 60-min daily doubt SLA |
| `sec-pedagogy` | Pedagogy Bento Grid | 12-Column Asymmetric Bento | `py-[clamp(4.0rem,2.5rem+5.0vw,8.75rem)]` | 4 modular cards: 4K Smart Board canvas slot, 3-tier notebook discipline, Friday concept pacing, 1-on-1 resolution desk |
| `sec-comparison` | Comparison Track | Pinned 4+8 Viewport Track | `py-[clamp(5.0rem,3.0rem+6.0vw,11.25rem)]` | Sticky editorial context paired with side-by-side contrast ledger (Factory Coaching vs. Vidya Dham Charter) |
| `sec-admissions` | Admissions Anchor | Centered Architectural Frame | `py-[clamp(4.0rem,2.5rem+5.0vw,8.75rem)]` | Centered 8-col conversion card, 5-button grade selector, WhatsApp phone input with inline validation, zero-friction submit |
| `sec-footer` | Semantic Footer | 4-Column Governance Ledger | `pt-24 pb-16` | Institutional mission charter, deep academic routes, safety and compliance pass-marks, direct campus desk coordinates |

---

## 2. Interactive Component Inventory & Atomic Specs

### 2.1 `ButtonPrimary`
- **Purpose**: Primary conversion driver ("Reserve Classroom Visit", "Submit Reservation").
- **Visual Thesis**: Solid amber fill with deep charcoal slate text. High contrast, monumental authority, zero frivolous gradients.
- **Props Schema**:
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
- **Dimensions**: Height $48\text{px}$ ($3.0\text{rem}$), padding $0\text{px } 32\text{px}$ ($2.0\text{rem}$), radius $8\text{px}$ (`rounded-lg`).
- **Touch Target**: Minimum $48\text{px} \times 48\text{px}$ (exceeds WCAG 2.5.5 Level AAA).

### 2.2 `ButtonSecondary`
- **Purpose**: Secondary exploratory navigation ("Explore Pedagogy Roadmap ->", "View Faculty Dossier").
- **Visual Thesis**: Technical hairline outline with subtle background luminance shift and kinetic trailing arrow.
- **Props Schema**:
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
- **Dimensions**: Height $48\text{px}$, padding $0\text{px } 24\text{px}$, radius $8\text{px}$.

### 2.3 `CardBento`
- **Purpose**: Modular information architecture container across pedagogy modules and credibility blocks.
- **Visual Thesis**: Deep elevated slate surface (`#0b0f19`) with 0.5px hairline border (`border-white/[0.10]`) and subtle specular inset glow.
- **Props Schema**:
  ```typescript
  export interface CardBentoProps {
    colSpan?: string;
    tag?: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
    interactive?: boolean;
    onClick?: () => void;
    className?: string;
  }
  ```
- **Dimensions**: Radius $16\text{px}$ (`rounded-2xl`), desktop padding $32\text{px}$ (`p-8`), mobile padding $24\text{px}$ (`p-6`).

### 2.4 `InputField`
- **Purpose**: High-security lead capture for parent contact and admissions inquiry.
- **Visual Thesis**: Monastic dark input with high-contrast text, tabular numbers, and real-time inline validation feedback.
- **Props Schema**:
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
- **Dimensions**: Height $48\text{px}$, radius $8\text{px}$, font-size $16\text{px}$ ($1.0\text{rem}$ floor to prevent iOS automatic zoom).

### 2.5 `NavDock`
- **Purpose**: Fixed monastic top navigation bar with brand seal and live cohort availability counter.
- **Visual Thesis**: Translucent deep slate (`#05070c`/85) with multi-stop backdrop blur and hairline divider.
- **Props Schema**:
  ```typescript
  export interface NavDockProps {
    claimedSeats: number;
    totalSeats: number;
    onOpenVisitModal: () => void;
    className?: string;
  }
  ```
- **Dimensions**: Fixed height $64\text{px}$ ($4.0\text{rem}$), full-width container with 1440px max-width boundary.

### 2.6 `ModalDrawer`
- **Purpose**: Pedagogical derivation inspector and classroom visit reservation modal.
- **Visual Thesis**: Centered architectural surface with dimmed translucent scrim and keyboard focus trap.
- **Props Schema**:
  ```typescript
  export interface ModalDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    ariaLabelledBy?: string;
  }
  ```
- **Dimensions**: Max-width $640\text{px}$, outer radius $24\text{px}$ (`rounded-3xl`), padding $32\text{px}$ (`p-8`).

### 2.7 `StatusBadge`
- **Purpose**: Academic telemetry capsules (e.g. "ACADEMIC YEAR 2026-27", "19/25 CLAIMED").
- **Visual Thesis**: Amber and emerald pill badges with pulsing live indicators and monospace uppercase labels.
- **Dimensions**: Height $28\text{px}$, padding $4\text{px } 12\text{px}$, radius $9999\text{px}$ (`rounded-full`).

---

## 3. Comprehensive 6-State Machine Matrix

| Component | State | Visual Treatment | Kinetic Physics | ARIA / Accessibility |
| :--- | :--- | :--- | :--- | :--- |
| **`ButtonPrimary`** | `idle` | `bg-amber-500 text-[#05070c] shadow-[0_4px_12px_rgba(245,158,11,0.20)]` | `none` | `role="button" tabIndex={0}` |
| | `hover` | `bg-amber-400 shadow-[0_6px_20px_rgba(245,158,11,0.35)]` | `translate-y-[-1px] duration-150` | `cursor-pointer` |
| | `active/press` | `bg-amber-600` | `scale(0.97) duration-75 ease-out` | `none` |
| | `focus-visible`| `bg-amber-500` | `none` | `outline-none ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]` |
| | `loading` | `bg-amber-500/80 cursor-wait` | `none` | `aria-busy="true" pointer-events-none` |
| | `disabled` | `bg-white/[0.08] text-white/30` | `none` | `aria-disabled="true" pointer-events-none` |
| **`ButtonSecondary`** | `idle` | `bg-white/[0.04] border border-white/[0.12] text-slate-200` | `none` | `role="button"` |
| | `hover` | `bg-white/[0.08] border-amber-500/40 text-white` | `translateX(2px) icon translation` | `cursor-pointer` |
| | `active/press` | `bg-white/[0.12] border-amber-500/60 text-white` | `scale(0.98) duration-75` | `none` |
| | `focus-visible`| `bg-white/[0.04]` | `none` | `ring-2 ring-amber-500 ring-offset-2 ring-offset-[#05070c]` |
| **`CardBento`** | `idle` | `bg-[#0b0f19] border border-white/[0.10] shadow-xl` | `none` | `role="region"` |
| | `hover` | `border-amber-500/30 shadow-2xl` | `translate-y-[-4px] duration-200 ease-out` | `cursor-pointer` (if interactive) |
| | `focus-visible`| `border-amber-500/50` | `none` | `ring-2 ring-amber-500 outline-none` |
| **`InputField`** | `idle` | `bg-[#05070c] border border-white/[0.12] text-white` | `none` | `aria-invalid="false"` |
| | `focus` | `border-amber-500 ring-2 ring-amber-500/30` | `none` | `outline-none` |
| | `error` | `border-rose-500 ring-2 ring-rose-500/20 text-white` | `shake keyframe duration-200` | `aria-invalid="true" aria-describedby="[id]-error"` |
| | `valid` | `border-emerald-500/60 ring-1 ring-emerald-500/20` | `none` | `aria-invalid="false"` |
| | `disabled` | `opacity-50 bg-white/[0.02] cursor-not-allowed` | `none` | `disabled aria-disabled="true"` |
| **`NavDock`** | `fixed` | `h-16 bg-[#05070c]/85 backdrop-blur-md border-b border-white/[0.08]` | `none` | `role="banner"` |
| | `mobile-open`| `h-screen bg-[#05070c]/95 backdrop-blur-xl` | `slide-in-down duration-250` | `role="dialog" aria-modal="true"` |
| **`ModalDrawer`** | `open` | `bg-[#0b0f19] border border-white/[0.14] shadow-2xl` | `scale(1) opacity-100 duration-200` | `role="dialog" aria-modal="true" aria-labelledby` |
| | `closed` | `hidden` | `scale(0.95) opacity-0 duration-150` | `aria-hidden="true"` |

---

## 4. Concentric Radius Geometry

To prevent visual disharmony between nested cards, controls, and containers:

$$R_{\text{inner}} = \max(0, R_{\text{outer}} - P_{\text{padding}})$$

- **Modal Frame**: $R_{\text{outer}} = 24\text{px}$ (`rounded-3xl`), internal padding $24\text{px} \implies R_{\text{inner}} = 12\text{px}$ (optical adjustment).
- **Hero Card**: $R_{\text{outer}} = 20\text{px}$ (`rounded-2xl`), padding $12\text{px} \implies R_{\text{inner}} = 8\text{px}$ (`rounded-lg`).
- **Bento Card**: $R_{\text{outer}} = 16\text{px}$ (`rounded-2xl`), padding $8\text{px} \implies R_{\text{inner}} = 8\text{px}$ (`rounded-lg`).
- **Buttons & Inputs**: $R = 8\text{px}$ (`rounded-lg`), internal icon box $R = 4\text{px}$ (`rounded`).
- **Telemetry Pills**: $R = 9999\text{px}$ (`rounded-full`), internal status dot $R = 9999\text{px}$.

---

## 5. Accessibility, Focus Management & Touch Standards

1. **Focus Ring Architecture**:
   - Every focusable primitive enforces:
     `outline: none; box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px #05070c;`
   - Contrast vs Canvas `#05070c`: **9.05:1** (exceeds WCAG 2.4.11 / 2.4.13 Level AA requirements of 3.0:1).
2. **Touch Targets**:
   - Desktop and Mobile buttons floor at $48\text{px}$ height.
   - Secondary icon triggers enforce minimum bounding box of $44\text{px} \times 44\text{px}$.
3. **Typography & OpenType Standards**:
   - `font-variant-numeric: tabular-nums` enforced on cohort counter, fee schedules, and countdown timers.
   - Form inputs floored at $16\text{px}$ on mobile viewports to prevent iOS Safari auto-zoom.
4. **Motion Safety**:
   - `@media (prefers-reduced-motion: reduce)` immediately deactivates `scale(0.97)` micro-press and `translateY(-4px)` hover shifts, substituting instantaneous border luminance transitions.
