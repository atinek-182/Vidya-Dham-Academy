/**
 * Motion System Type Definitions
 * Calibrated for GSAP ScrollTrigger + Lenis Smooth Scroll Engine
 * Vidya Dham Academy Digital Flagship
 */

export interface LenisConfigOptions {
  duration?: number;
  lerp?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  smoothWheel?: boolean;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

export interface ParallaxPlaneConfig {
  selector: string;
  speed: number; // Differential velocity factor (e.g. 0.15, 0.30, 0.50)
  direction?: 'vertical' | 'horizontal';
}

export interface ScrollytellingConfig {
  triggerElement: string;
  pinElement?: string;
  scrub?: number | boolean;
  anticipatePin?: number;
  start?: string;
  end?: string;
  planes?: ParallaxPlaneConfig[];
}

export interface MotionEngineController {
  lenis: any | null;
  isReducedMotion: boolean;
  destroy: () => void;
  refresh: () => void;
}
