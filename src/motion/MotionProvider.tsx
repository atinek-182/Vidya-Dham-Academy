import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { initLenisEngine } from './lenisEngine';
import { initScrollytelling } from './scrollytelling';
import { MotionEngineController } from './types';

interface MotionContextValue {
  isReady: boolean;
  isReducedMotion: boolean;
  refresh: () => void;
}

const MotionContext = createContext<MotionContextValue>({
  isReady: false,
  isReducedMotion: false,
  refresh: () => {},
});

export const useMotion = () => useContext(MotionContext);

export interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * High-performance Motion Provider for Vidya Dham Academy
 * Manages Lenis smooth scroll lifecycle and GSAP ScrollTrigger scrollytelling.
 * Guaranteed unmount cleanup with zero memory leaks.
 */
export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const engineRef = useRef<MotionEngineController | null>(null);
  const scrollyRef = useRef<{ revert: () => void; refresh: () => void } | null>(null);

  const refresh = () => {
    engineRef.current?.refresh();
    scrollyRef.current?.refresh();
  };

  useEffect(() => {
    let mounted = true;

    async function mountMotion() {
      // 1. Initialize Lenis Smooth Scroll Engine
      const engine = await initLenisEngine();
      if (!mounted) {
        engine.destroy();
        return;
      }
      engineRef.current = engine;
      setIsReducedMotion(engine.isReducedMotion);

      // 2. Initialize GSAP ScrollTrigger Scrollytelling
      const scrolly = await initScrollytelling();
      if (!mounted) {
        scrolly.revert();
        return;
      }
      scrollyRef.current = scrolly;

      setIsReady(true);

      // 3. Refresh triggers once document fonts and assets settle
      if (typeof document !== 'undefined' && 'fonts' in document) {
        (document as any).fonts.ready.then(() => {
          if (mounted) {
            refresh();
          }
        });
      }
    }

    mountMotion();

    // Deterministic unmount teardown
    return () => {
      mounted = false;
      scrollyRef.current?.revert();
      engineRef.current?.destroy();
      scrollyRef.current = null;
      engineRef.current = null;
    };
  }, []);

  return (
    <MotionContext.Provider value={{ isReady, isReducedMotion, refresh }}>
      {children}
    </MotionContext.Provider>
  );
};
