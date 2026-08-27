import { LenisConfigOptions, MotionEngineController } from './types';

/**
 * Checks if the client environment explicitly requests reduced motion.
 */
export function checkPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if the client environment is a fine pointer (desktop mouse/trackpad)
 * and satisfies minimum viewport width requirements for smooth scroll inertia.
 */
export function isFinePointerDesktop(): boolean {
  if (typeof window === 'undefined') return false;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const isDesktopWidth = window.innerWidth >= 768;
  return hasFinePointer && isDesktopWidth;
}

/**
 * Default Lenis Motion Configuration:
 * Calibrated for "Subtle Minimal Dampening" (0.8s, lerp 0.15, wheelMultiplier 0.85).
 */
export const DEFAULT_LENIS_CONFIG: LenisConfigOptions = {
  duration: 0.8,
  lerp: 0.15,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.0,
  smoothWheel: true,
  orientation: 'vertical',
};

/**
 * Initializes the Lenis smooth-scroll engine and connects it to GSAP ScrollTrigger.
 * Implements strict lifecycle teardown to prevent memory leaks and thread exhaustion.
 */
export async function initLenisEngine(
  customConfig?: Partial<LenisConfigOptions>
): Promise<MotionEngineController> {
  const isReduced = checkPrefersReducedMotion();

  // Instant bypass under prefers-reduced-motion
  if (isReduced) {
    return {
      lenis: null,
      isReducedMotion: true,
      destroy: () => {},
      refresh: () => {},
    };
  }

  // Only enable smooth-scroll on fine-pointer desktop viewports
  if (!isFinePointerDesktop()) {
    return {
      lenis: null,
      isReducedMotion: false,
      destroy: () => {},
      refresh: () => {},
    };
  }

  const config: LenisConfigOptions = {
    ...DEFAULT_LENIS_CONFIG,
    ...customConfig,
  };

  let lenisInstance: any = null;
  let tickerCallback: ((time: number) => void) | null = null;
  let gsapModule: any = null;

  try {
    // Dynamic import to maintain tree-shakeability and SSR safety
    const [LenisImport, gsapImport, scrollTriggerImport] = await Promise.all([
      import('lenis').catch(() => null),
      import('gsap').catch(() => null),
      import('gsap/ScrollTrigger').catch(() => null),
    ]);

    const LenisConstructor = LenisImport?.default || (window as any)?.Lenis;
    const gsap = gsapImport?.gsap || gsapImport?.default || (window as any)?.gsap;
    const ScrollTrigger =
      scrollTriggerImport?.ScrollTrigger ||
      scrollTriggerImport?.default ||
      (window as any)?.ScrollTrigger;

    gsapModule = gsap;

    if (LenisConstructor) {
      lenisInstance = new LenisConstructor({
        duration: config.duration,
        lerp: config.lerp,
        wheelMultiplier: config.wheelMultiplier,
        touchMultiplier: config.touchMultiplier,
        smoothWheel: config.smoothWheel,
        orientation: config.orientation,
      });

      // Register ScrollTrigger plugin if available
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Synchronize Lenis scroll event with ScrollTrigger update
        lenisInstance.on('scroll', () => {
          ScrollTrigger.update();
        });

        // Unify render cycle via GSAP Ticker
        tickerCallback = (time: number) => {
          lenisInstance?.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      } else {
        // Fallback to standalone requestAnimationFrame if GSAP ticker is absent
        let rafId: number;
        const rafLoop = (time: number) => {
          lenisInstance?.raf(time);
          rafId = requestAnimationFrame(rafLoop);
        };
        rafId = requestAnimationFrame(rafLoop);

        // Store rafId for teardown
        (lenisInstance as any)._customRafId = rafId;
      }
    }
  } catch (error) {
    console.warn('[Motion System Warning] Failed to initialize Lenis engine:', error);
  }

  const destroy = () => {
    if (lenisInstance) {
      try {
        if (gsapModule && tickerCallback) {
          gsapModule.ticker.remove(tickerCallback);
        }
        if ((lenisInstance as any)._customRafId) {
          cancelAnimationFrame((lenisInstance as any)._customRafId);
        }
        lenisInstance.destroy();
      } catch (err) {
        console.warn('[Motion System Warning] Error during Lenis cleanup:', err);
      }
      lenisInstance = null;
    }
  };

  const refresh = () => {
    if (lenisInstance) {
      lenisInstance.resize();
    }
  };

  return {
    lenis: lenisInstance,
    isReducedMotion: false,
    destroy,
    refresh,
  };
}
