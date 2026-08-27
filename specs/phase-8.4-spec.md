# Phase 8.4 Specification: Interactive 2D Gravity Physics Badges & WebGL Canvas FX

> **Project**: `vidya-dham-academy`  
> **Workspace Path**: `projects/Websites/vidya-dham-academy`  
> **Wave**: `Wave 6: Component Engineering, Motion & Assets`  
> **Phase ID**: `8.4`  
> **Status**: `[APPROVED -- POST-INTERVIEW SPECIFICATION]`  

---

## 1. Executive Intent & Architectural Overview

Phase 8.4 engineers the interactive 2D physics and WebGL canvas infrastructure for Vidya Dham Academy's digital flagship. Building upon the foundational Lenis smooth scroll engine (Phase 8.1) and kinetic typographic reveals (Phase 8.3), this phase introduces tactile, physics-driven STEM learning artifacts that communicate the academy's core pedagogical promise: **"Disciplined Offline Rigor. Illuminated by Interactive Smart Boards."**

Generic web animations often suffer from critical technical and pedagogical flaws:
1. **Unconstrained GPU Composite Strain**: Uncapped render loops that render at excessive device pixel ratios ($3\times$ to $4\times$), overheating mobile GPUs and draining device batteries within minutes.
2. **Context Loss Crashes**: Fragile WebGL pipelines that crash permanently when mobile devices cycle tabs or enter low-power states, leaving unsightly blank black voids.
3. **Zombie Animation Frame Tickers**: Unmanaged `requestAnimationFrame` and pointer event loops that continue firing when elements scroll off-screen, stealing main-thread execution time from critical user interactions.
4. **Juvenile Visual Distractions**: Frivolous bouncy bouncy effects with garish arcade colors that destroy institutional credibility and undermine the monastic seriousness demanded by discerning parents.
5. **Reduced Motion Violations**: Disorienting continuous kinetic motions that ignore `prefers-reduced-motion: reduce`, triggering vestibular disorders and failing accessibility compliance.

To maintain an **Awwwards-tier craft standard** grounded in monastic restraint, Phase 8.4 delivers:
1. **Interactive 2D Gravity Physics Badges (`StemBadgesCanvas`)**: A zero-dependency, deterministic rigid-body simulation powering interactive STEM curriculum badges (e.g., *Snell's Law*, *Wave Optics*, *Thermodynamics*, *Vector Calculus*, *Electromagnetism*). Featuring Verlet numerical integration, capsule-box collision resolution, restitution $e = 0.60$, and pointer dragging with live velocity transfer.
2. **Ray Optics & Snell Derivation Stage (`RayOpticsCanvas`)**: An interactive geometric optics derivation canvas modeling incident angle $\theta_1$, normal line, refractive index interface ($n_1 = 1.00$ air vs. $n_2 = 1.50$ glass), refracted angle $\theta_2$, total internal reflection, and chromatic dispersion waves.
3. **Strict Battery & Lifecycle Throttling**: Device pixel ratio capped at $\min(\text{devicePixelRatio}, 2.0)$ (desktop) and $1.5$ (mobile). Render loops automatically freeze when scrolled off-screen via `IntersectionObserver` (threshold $0.1$) or when the browser tab is hidden (`visibilitychange`).
4. **Seamless Graceful Degradation Contract**: Deterministic handling of `webglcontextlost` and `webglcontextrestored`, paired with instantaneous fallback to a static CSS technical blueprint grid when hardware acceleration is disabled or `prefers-reduced-motion: reduce` is active.
5. **Zero-Slop VibeSec Isolation**: All canvas rendering uses pure context methods (`ctx.fillText`, `ctx.beginPath`) with hardcoded whitelisted curriculum tokens. Zero DOM string injection, zero external image serialization, and deterministic unmount cleanup.

---

## 2. Socratic Interview Findings & Decisions Locked

The Socratic Phase 8.4 Interview established unanimous consensus across four architectural pillars:

| Parameter | Decision Locked | Architectural Justification & Craft Caliber |
| :--- | :--- | :--- |
| **Canvas Stage Responsibility** | **Interactive 2D Gravity Physics Badges (`StemBadgesCanvas`) + Snell Optics Stage (`RayOpticsCanvas`)** | Bridges curriculum rigor with tactile engagement; directly illustrates how smart board derivations turn abstract formulas into intuitive geometry. |
| **Fallback & Degradation Strategy** | **Procedural CSS Blueprint Grid & Static Snell Schematic** | Guarantees zero broken canvas rectangles or layout shifts; provides instantaneous high-contrast visual continuity under reduced motion or GPU context loss. |
| **Performance Budget & Lifecycle** | **Strict IntersectionObserver Sleep & DPR Capping** (`dpr <= 2.0`, threshold $0.1$, `visibilitychange` sleep) | Caps battery consumption; eliminates background GPU strain when the canvas is scrolled out of the active viewport. |
| **Physics Mechanics & Styling** | **Tactile Drag & Toss with Restrained Monastic Palette** ($e = 0.60$, $\mu = 0.12$, chamfered pill geometry, deep slate & amber/cyan borders) | Tactile physical feedback without arcade silliness; matches the institutional dignity of a premier STEM academy. |

---

## 3. Pre-Write Adversarial Audit (/roast)

A 3-persona panel convened to audit GPU performance, memory stability, and institutional authority.

### Persona 1: The Contrarian (GPU Composite Strain, Mobile Battery & Latency)
- **Critique**: "Running continuous physics simulations and canvas renders on mobile devices causes thermal throttling, massive battery drain, and input latency on the admissions form."
- **Mitigation & Resolution**:
  - *Automatic Viewport Sleep*: The canvas integrates an `IntersectionObserver` with an active threshold of $0.1$. The moment the canvas scrolls off-screen, the `requestAnimationFrame` loop halts immediately, reducing CPU/GPU consumption to $0\%$.
  - *DPR Floor & Mobile Optimization*: High-density mobile displays ($3\times, 4\times$) are capped at $1.5\times$ to avoid rendering redundant millions of sub-pixels. Desktop is capped at $2.0\times$.
  - *Simulation Step Sub-Sampling*: Physics updates clamp delta time to $\Delta t \le 33\text{ms}$ ($30\text{Hz}$ minimum) to prevent explosion tunneling when frames are dropped.

### Persona 2: The Logician (Context Loss, Memory Leaks & Teardown)
- **Critique**: "Canvas instances in React components create memory leaks when unmounted, leaving active RAF loops, event listeners on `window`, and uncollected GPU context allocations."
- **Mitigation & Resolution**:
  - *Deterministic React Lifecycle Teardown*: Every `useEffect` returns an explicit cleanup function that cancels the active `rafId`, unbinds all pointer and resize listeners, disconnects observers, and clears canvas references.
  - *Context Loss Handlers*: Event listeners for `webglcontextlost` call `event.preventDefault()` to allow automatic context restoration without throwing unhandled JavaScript runtime exceptions.

### Persona 3: The VibeSec & Academic Integrity Persona (Brand Dignity & Injection Safety)
- **Critique**: "An academic institution must never look like a video game arcade with bouncy neon toys. Furthermore, dynamic text rendering on canvas could introduce DOM injection vulnerabilities if not strictly isolated."
- **Mitigation & Resolution**:
  - *Monastic Editorial-Tech Styling*: Badges are styled with deep slate fill (`#0b0f19`), crisp hairline borders (`#1e293b` with amber/cyan hover accents), and monospace labels (`JetBrains Mono`). Zero garish neon particles or cartoon bouncy physics.
  - *Hardcoded Curricular Whitelist*: Badge topics are statically defined constants (`Snell's Law`, `Wave Optics`, `Thermodynamics`, `Calculus`, `Electromagnetism`, `Kinematics`). Zero dynamic string evaluation or unsafe serialization.

---

## 4. Skill Evidence & Formula Block

This specification directly operationalizes principles and mathematical formulations from [`threejs-webgl`](file:///d:/Design-OS/.agents/skills/threejs-webgl/SKILL.md), [`matterjs`](file:///d:/Design-OS/.agents/skills/matterjs/SKILL.md), [`shader-cursor-effects`](file:///d:/Design-OS/.agents/skills/shader-cursor-effects/SKILL.md), and [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md).

### 4.1 Skill Rule Citations & Invariants

- **`threejs-webgl` Rule 1: Responsive Viewport & DPR Cap**:
  - Device pixel ratio must be clamped:
    $$\text{dpr} = \min(\text{window.devicePixelRatio} \parallel 1, 2.0)$$
  - Canvas logical dimensions must track CSS client bounds precisely:
    $$\text{canvas.width} = \lfloor w \times \text{dpr} \rfloor, \quad \text{canvas.height} = \lfloor h \times \text{dpr} \rfloor$$
- **`threejs-webgl` Rule 2: WebGL Resource Disposal**:
  - When WebGL contexts or shaders are unmounted, all geometries, materials, textures, and shader programs must be explicitly deleted via `gl.deleteShader()`, `gl.deleteProgram()`, and `gl.deleteBuffer()`.
- **`matterjs` Rule 1: Minimal Engine/World Lifecycle**:
  - Simulation must maintain clear separation between physics state update (`Engine.update` / numerical integrator) and visual rendering (`Render` / custom canvas drawing).
- **`matterjs` Rule 2: Mouse Interaction & Velocity Inheritance**:
  - Pointer dragging must calculate instantaneous velocity vector $\mathbf{v} = (\mathbf{p}_t - \mathbf{p}_{t-1}) / \Delta t$ upon release, transferring momentum seamlessly to the rigid body.
- **`vibesec` Rule 1: Zero Dynamic Evaluation & Strict Precision**:
  - GLSL shaders must declare `precision highp float;` explicitly. All uniforms must be statically bounded with zero runtime string interpolation.
- **`vibesec` Rule 2: Pure Canvas Context Isolation**:
  - Text rendered to canvas must strictly utilize direct `ctx.fillText()` with static strings. No `innerHTML`, `DOMParser`, or SVG data URIs.

### 4.2 Mathematical Formulas & Calculations

#### 1. Verlet Numerical Integration with Damping:
For each rigid body badge $k$ with position $\mathbf{x}_k$, previous position $\mathbf{x}_{k, \text{prev}}$, mass $m_k$, and external gravity $\mathbf{g} = (0, 980\text{px/s}^2)$:
$$\mathbf{v}_k = (\mathbf{x}_k - \mathbf{x}_{k, \text{prev}}) \times (1 - \gamma)$$
Where air resistance damping $\gamma = 0.015$.
Updated position at time step $\Delta t$:
$$\mathbf{x}_{k, \text{next}} = \mathbf{x}_k + \mathbf{v}_k + \mathbf{g} \cdot (\Delta t)^2$$
$$\mathbf{x}_{k, \text{prev}} \leftarrow \mathbf{x}_k, \quad \mathbf{x}_k \leftarrow \mathbf{x}_{k, \text{next}}$$

#### 2. Capsule / Rounded Rectangle Bounding & Collision Impulse:
For a badge with half-width $w_h$, half-height $h_h$, and corner radius $r$:
Bounding box penetration against container floor $y_{\text{floor}}$:
$$\text{If } y_k + h_h > y_{\text{floor}}:$$
$$y_k \leftarrow y_{\text{floor}} - h_h$$
$$v_{y, k} \leftarrow -v_{y, k} \times e$$
$$v_{x, k} \leftarrow v_{x, k} \times (1 - \mu)$$
Where restitution coefficient $e = 0.60$ and surface friction coefficient $\mu = 0.12$.

#### 3. Snell's Law Refraction Calculus:
For incident ray angle $\theta_1$ relative to normal vector $\mathbf{N} = (0, 1)$, air refractive index $n_1 = 1.00$, and glass medium index $n_2 = 1.50$:
$$\sin \theta_2 = \frac{n_1}{n_2} \sin \theta_1 = \frac{1.00}{1.50} \sin \theta_1 = 0.667 \sin \theta_1$$
Refracted angle:
$$\theta_2 = \arcsin\left(\frac{n_1}{n_2} \sin \theta_1\right)$$
Critical angle for total internal reflection:
$$\theta_c = \arcsin\left(\frac{n_2}{n_1}\right) \quad (\text{when } n_1 > n_2)$$
Fresnel reflection coefficient for unpolarized light (Schlick's approximation):
$$R_0 = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2 = \left(\frac{1.00 - 1.50}{1.00 + 1.50}\right)^2 = \left(\frac{-0.50}{2.50}\right)^2 = 0.04$$
$$R(\theta_1) = R_0 + (1 - R_0)(1 - \cos \theta_1)^5$$

#### 4. Pointer Drag Spring Attraction Constraint:
When pointer $P = (x_p, y_p)$ drags badge $B = (x_b, y_b)$, the constraint force vector:
$$\mathbf{F}_{\text{drag}} = -k_s (\mathbf{x}_b - \mathbf{x}_p) - d_s \mathbf{v}_b$$
Where spring stiffness $k_s = 0.25$ and damping $d_s = 0.40$, yielding critical damping without violent oscillation.

---

## 5. Technical Implementation Blueprint

### 5.1 Component Inventory

1. **`src/components/canvas/StemBadgesCanvas.tsx`**:
   - High-performance, zero-dependency 2D rigid-body simulation in HTML5 Canvas.
   - Interactive badge elements:
     - `Snell's Law` (Amber accent `#f59e0b`)
     - `Wave Optics` (Cyan accent `#38bdf8`)
     - `Thermodynamics` (Emerald accent `#10b981`)
     - `Vector Calculus` (Purple accent `#a855f7`)
     - `Electromagnetism` (Blue accent `#3b82f6`)
     - `Kinematics` (Rose accent `#f43f5e`)
     - `Organic Chemistry` (Teal accent `#14b8a6`)
   - Direct pointer and touch interaction: badges can be dragged, tossed against container walls, and dynamically collide.
   - Bounded to container dimensions with automatic resize handling.
   - DPR capped at $2.0$ (desktop) and $1.5$ (mobile).
   - Pauses simulation completely when scrolled out of view via `IntersectionObserver`.
   - Full CSS Blueprint fallback when hardware acceleration is disabled.

2. **`src/components/canvas/RayOpticsCanvas.tsx`**:
   - Interactive geometric ray optics sandbox for the Smart Board demonstration.
   - Visualizes Snell refraction across medium boundaries with interactive angle slider/drag.
   - Renders incident ray, reflected ray, refracted ray, normal dashed line, and angle readout overlays.
   - Dynamic math calculations displayed in real time ($\theta_1, \theta_2, n_1, n_2, R(\theta)$).
   - DPR capped with context loss safety.

3. **`src/components/canvas/index.ts`**:
   - Clean export barrel exposing `StemBadgesCanvas` and `RayOpticsCanvas`.
