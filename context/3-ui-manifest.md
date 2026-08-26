# 3. UI Component Manifest & State Matrix

> **Project**: `vidya-dham-academy`  
> **Target Stack**: `vite-react`  

---

## 1. Page Section Inventory (Obys 140px Grid)

| Section ID | Name | Layout Archetype | Desktop Padding | Key Elements |
| :--- | :--- | :--- | :--- | :--- |
| `sec-hero` | Hero Stage | Interactive Spatial Stage | 160px top, 140px bottom | Massive fluid headline, WebGL canvas, primary CTA, badge |
| `sec-proof` | Credibility Strip | Asymmetric Horizon | 120px top, 120px bottom | Dynamic metrics, Solar duotone icons, client marks |
| `sec-features` | Feature Bento Grid | 12-Column Asymmetric Bento | 140px top, 140px bottom | 3 high-impact feature cards, layered depth shadows |
| `sec-story` | Scrollytelling Showcase | Pinned Viewport Track | 180px top, 180px bottom | Pinned sequence scrubbing through 3 visual phases |
| `sec-cta` | Conversion Anchor | Centered Architectural Frame | 160px top, 140px bottom | Hairline gradient border card, email input, Sonner toast |
| `sec-footer` | Semantic Footer | Multi-Column Compact | 100px top, 60px bottom | Legal links, status pill, theme switcher |

---

## 2. Interactive Component Inventory & State Machine

| Component | Allowed States | Transitions & Dynamics | Focus Ring |
| :--- | :--- | :--- | :--- |
| `ButtonPrimary` | idle, hover, active, loading, disabled | scale(0.97) on press, cubic-bezier(0.25,1,0.5,1) | 2px solid var(--border-focus) |
| `CardBento` | idle, hover, active | translateY(-4px), border highlight transition | visible inset outline |
| `InputText` | idle, focus, filled, error | border color shift, inline error message | 2px solid var(--border-focus) |
| `NavDock` | fixed, scrolled, expanded, mobile-open | progressive blur mask backdrop, smooth fade | full keyboard tab loop |
