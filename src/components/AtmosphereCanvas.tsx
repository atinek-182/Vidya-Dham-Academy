import React, { useEffect, useRef } from 'react';

/**
 * Bayer 4x4 Ordered Dithering Matrix
 * Scaled and normalized to [0, 1] range via (value + 0.5) / 16.
 */
const BAYER_4X4: number[] = [
   0,  8,  2, 10,
  12,  4, 14,  6,
   3, 11,  1,  9,
  15,  7, 13,  5,
].map((v) => (v + 0.5) / 16);

/**
 * Hermite interpolation smoothstep function.
 */
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Deterministic pseudo-random noise generator.
 */
function noise2(x: number, y: number): number {
  const v = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return v - Math.floor(v);
}

/**
 * 2D Value Noise with quintic smoothstep curve.
 */
function valueNoise(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  const a = noise2(ix, iy);
  const b = noise2(ix + 1, iy);
  const c = noise2(ix, iy + 1);
  const d = noise2(ix + 1, iy + 1);

  return (
    a * (1 - ux) * (1 - uy) +
    b * ux * (1 - uy) +
    c * (1 - ux) * uy +
    d * ux * uy
  );
}

/**
 * 4-Octave Fractional Brownian Motion (FBM).
 */
function fbm(x: number, y: number): number {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1.0;

  for (let octave = 0; octave < 4; octave++) {
    value += valueNoise(x * frequency, y * frequency) * amplitude;
    frequency *= 2.02;
    amplitude *= 0.5;
  }

  return value;
}

/**
 * Vidya Dham Academy Monochromatic Palette Stops:
 * Slate tokens from oklch(0.08 0.015 260) base to oklch(0.38 0.035 260) highlight.
 */
const MONO_PALETTE: [number, number, number][] = [
  [5, 7, 12],     // #05070c: Canvas base
  [11, 15, 25],   // #0b0f19: Bento card surface
  [18, 24, 38],   // #121826: Elevated modal surface
  [30, 41, 59],   // #1e293b: Hairline slate midtone
  [51, 65, 85],   // #334155: Chalk dust highlight crest
];

export interface AtmosphereCanvasProps {
  className?: string;
  cellSizeDesktop?: number;
  cellSizeMobile?: number;
  maxDpr?: number;
}

/**
 * AtmosphereCanvas
 * 
 * Hardware-accelerated 2D procedural Bayer-ordered dithering canvas.
 * Implements:
 * - dither-background: 4x4 Bayer thresholding + 4-octave FBM organic drift
 * - Mobile battery adaptation: 7px desktop / 9px mobile cell pitch + 1.5 DPR cap
 * - prefers-reduced-motion & visibilitychange automatic render kill switch
 * - VibeSec: Pure 2D canvas context with zero external image serialization
 */
export const AtmosphereCanvas: React.FC<AtmosphereCanvasProps> = ({
  className = '',
  cellSizeDesktop = 7,
  cellSizeMobile = 9,
  maxDpr = 1.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize 2D context with alpha: false for GPU fill-rate efficiency
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = mediaQuery.matches;

    let width = 1;
    let height = 1;
    let cols = 1;
    let rows = 1;
    let cell = cellSizeDesktop;
    let rafId = 0;
    let isVisible = !document.hidden;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);

      // Expand cell size on narrow mobile screens to reduce pixel draw count
      cell = width < 768 ? cellSizeMobile : cellSizeDesktop;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / cell);
      rows = Math.ceil(height / cell);
    }

    function sampleField(x: number, y: number, time: number): number {
      const nx = (x / cols - 0.5) * 2;
      const ny = (y / rows - 0.5) * 2;

      // Distance metric with elliptical ratio (0.84x, 1.28y)
      const distance = Math.sqrt(nx * nx * 0.84 + ny * ny * 1.28);
      const vignette = 1 - smoothstep(0.18, 1.15, distance);
      const drift = reduceMotion ? 0 : time * 0.015;

      // Dual harmonic waves
      const wave =
        Math.sin(nx * 2.8 + ny * 1.2 + drift) * 0.16 +
        Math.sin(nx * -1.4 + ny * 3.8 - drift * 0.8) * 0.12;

      // Organic FBM noise mass
      const cloud = fbm(nx * 1.35 + drift * 0.14, ny * 1.35 - drift * 0.07);
      const ridge = smoothstep(0.46, 0.92, cloud + wave);
      const offAxisMass = smoothstep(0.98, 0.18, Math.hypot(nx + 0.22, ny - 0.08));

      return Math.max(0, Math.min(1, ridge * vignette * 0.90 + offAxisMass * 0.16));
    }

    function render(timestamp: number = 0) {
      if (!ctx || !isVisible) return;

      const seconds = timestamp * 0.001;
      ctx.fillStyle = 'rgb(5, 7, 12)';
      ctx.fillRect(0, 0, width, height);

      for (let y = 0; y < rows; y++) {
        const bayerRow = (y % 4) * 4;
        for (let x = 0; x < cols; x++) {
          const threshold = BAYER_4X4[bayerRow + (x % 4)];
          const brightness = sampleField(x, y, seconds);
          const stepped = Math.floor(
            Math.max(0, Math.min(0.999, brightness + threshold * 0.18)) * MONO_PALETTE.length
          );
          const color = MONO_PALETTE[Math.min(MONO_PALETTE.length - 1, stepped)];
          ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
          ctx.fillRect(x * cell, y * cell, cell, cell);
        }
      }

      if (!reduceMotion && isVisible) {
        rafId = requestAnimationFrame(render);
      }
    }

    function handleResize() {
      cancelAnimationFrame(rafId);
      resize();
      render();
    }

    function handleVisibility() {
      isVisible = !document.hidden;
      if (isVisible && !reduceMotion) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(rafId);
      }
    }

    function handleMotionPreference(e: MediaQueryListEvent) {
      reduceMotion = e.matches;
      if (reduceMotion) {
        cancelAnimationFrame(rafId);
        render(); // Render one static frame
      } else if (isVisible) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(render);
      }
    }

    resize();
    render();

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    mediaQuery.addEventListener('change', handleMotionPreference);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [cellSizeDesktop, cellSizeMobile, maxDpr]);

  return (
    <canvas
      ref={canvasRef}
      data-dither-background
      aria-hidden="true"
      className={`atmosphere-canvas ${className}`}
    />
  );
};
