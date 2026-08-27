import { checkPrefersReducedMotion } from './lenisEngine';
import { ScrollytellingConfig } from './types';

export interface ScrollytellingTeardown {
  revert: () => void;
  refresh: () => void;
}

/**
 * Initializes GSAP ScrollTrigger multi-layer parallax and scrollytelling timelines.
 * Uses gsap.context() for bulletproof unmount teardown and zero memory leaks.
 */
export async function initScrollytelling(
  customConfig?: Partial<ScrollytellingConfig>
): Promise<ScrollytellingTeardown> {
  const isReduced = checkPrefersReducedMotion();

  // Handle prefers-reduced-motion: instantly clear transforms and set final visibility
  if (isReduced) {
    if (typeof document !== 'undefined') {
      const targets = document.querySelectorAll(
        '#comparison, .card-bento, [data-parallax-layer], #hero'
      );
      targets.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }
    return {
      revert: () => {},
      refresh: () => {},
    };
  }

  let ctx: any = null;
  let ScrollTriggerModule: any = null;

  try {
    const [gsapImport, scrollTriggerImport] = await Promise.all([
      import('gsap').catch(() => null),
      import('gsap/ScrollTrigger').catch(() => null),
    ]);

    const gsap = gsapImport?.gsap || gsapImport?.default || (window as any)?.gsap;
    const ScrollTrigger =
      scrollTriggerImport?.ScrollTrigger ||
      scrollTriggerImport?.default ||
      (window as any)?.ScrollTrigger;

    ScrollTriggerModule = ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Create isolated GSAP context
      ctx = gsap.context(() => {
        const comparisonSection = document.getElementById('comparison');

        if (comparisonSection) {
          // Multi-layer parallax depth plane choreography
          // Plane 1: Sticky Context Header (v = 0.15)
          // Plane 2: Comparison Cards (v = 0.30)
          // Plane 3: Metric Hairlines & Telemetry (v = 0.50)
          const plane1 = comparisonSection.querySelectorAll('.parallax-plane-1, [data-parallax="1"]');
          const plane2 = comparisonSection.querySelectorAll('.parallax-plane-2, [data-parallax="2"], .card-bento');
          const plane3 = comparisonSection.querySelectorAll('.parallax-plane-3, [data-parallax="3"]');

          const comparisonTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: comparisonSection,
              start: 'top 75%',
              end: 'bottom 25%',
              scrub: 1.2,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          if (plane1.length > 0) {
            comparisonTimeline.fromTo(
              plane1,
              { y: 30, opacity: 0.8 },
              { y: -20, opacity: 1, ease: 'none' },
              0
            );
          }

          if (plane2.length > 0) {
            comparisonTimeline.fromTo(
              plane2,
              { y: 50, opacity: 0.6 },
              { y: -40, opacity: 1, ease: 'none' },
              0
            );
          }

          if (plane3.length > 0) {
            comparisonTimeline.fromTo(
              plane3,
              { y: 80, opacity: 0.4 },
              { y: -70, opacity: 1, ease: 'none' },
              0
            );
          }
        }

        // Bento card batch reveal triggers
        const bentoCards = document.querySelectorAll('.card-bento:not([data-parallax])');
        if (bentoCards.length > 0) {
          ScrollTrigger.batch(bentoCards, {
            start: 'top 85%',
            once: true,
            onEnter: (batch: Element[]) => {
              gsap.fromTo(
                batch,
                { opacity: 0, y: 32 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: 'power3.out',
                  stagger: 0.1,
                  overwrite: 'auto',
                }
              );
            },
          });
        }
      });
    }
  } catch (error) {
    console.warn('[Motion System Warning] Failed to initialize GSAP scrollytelling:', error);
  }

  const revert = () => {
    if (ctx) {
      try {
        ctx.revert();
      } catch (err) {
        console.warn('[Motion System Warning] Error during GSAP context revert:', err);
      }
      ctx = null;
    }
  };

  const refresh = () => {
    if (ScrollTriggerModule) {
      try {
        ScrollTriggerModule.refresh();
      } catch (err) {
        // No-op
      }
    }
  };

  return {
    revert,
    refresh,
  };
}
