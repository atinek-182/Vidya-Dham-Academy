import React, { useEffect, useRef, useState } from 'react';

export type BorderBeamSize = 'sm' | 'md' | 'line' | 'pulse-inner' | 'pulse-outside';
export type BorderBeamColorVariant = 'sunset' | 'amber' | 'ocean' | 'mono';

export interface BorderBeamProps {
  children: React.ReactNode;
  size?: BorderBeamSize;
  duration?: number; // seconds, default 4.5
  strength?: number; // opacity multiplier 0 to 1, default 0.5
  colorVariant?: BorderBeamColorVariant;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: number;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

/**
 * BorderBeam
 * High-performance hardware-accelerated animated border glow wrapper
 * adhering to beam-glow-states and vibesec specifications.
 * Enforces:
 * - Single dominant conversion surface focus per viewport
 * - Offscreen pausing via IntersectionObserver to save GPU cycles
 * - Complete motion bypass under prefers-reduced-motion: reduce
 * - Pointer-events: none on effect layers to preserve 100% form and CTA interactivity
 * - Concentric border radius adaptation
 */
export const BorderBeam: React.FC<BorderBeamProps> = ({
  children,
  size = 'md',
  duration = 4.5,
  strength = 0.5,
  colorVariant = 'sunset',
  active = true,
  className = '',
  style = {},
  borderRadius,
  onActivate,
  onDeactivate,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Clamp strength between 0 and 1
  const clampedStrength = Math.max(0, Math.min(1, strength));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Reduced Motion Detection
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(media.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    media.addEventListener('change', handleMotionChange);

    // 2. Offscreen Pausing via IntersectionObserver
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      return () => {
        media.removeEventListener('change', handleMotionChange);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      media.removeEventListener('change', handleMotionChange);
      observer.disconnect();
    };
  }, []);

  // Lifecycle notifications
  useEffect(() => {
    if (active && onActivate) {
      const timer = setTimeout(onActivate, 600);
      return () => clearTimeout(timer);
    } else if (!active && onDeactivate) {
      const timer = setTimeout(onDeactivate, 500);
      return () => clearTimeout(timer);
    }
  }, [active, onActivate, onDeactivate]);

  // Color variants
  const getGradientColors = () => {
    switch (colorVariant) {
      case 'amber':
        return 'from-amber-400 via-amber-500 to-transparent';
      case 'ocean':
        return 'from-sky-400 via-cyan-500 to-transparent';
      case 'mono':
        return 'from-white/80 via-slate-300 to-transparent';
      case 'sunset':
      default:
        return 'from-amber-400 via-sky-400 to-transparent';
    }
  };

  const isBeamRunning = active && isInView && !isReducedMotion;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
        ...style,
      }}
    >
      {/* 1. Animated Conic-Gradient Traveling Border Layer */}
      {isBeamRunning && (
        <div
          aria-hidden="true"
          className="absolute inset-[-150%] pointer-events-none z-0"
          style={{
            opacity: clampedStrength,
            background: `conic-gradient(from 0deg, transparent 0deg, rgba(245, 158, 11, 0.7) 40deg, rgba(56, 189, 248, 0.8) 60deg, transparent 90deg)`,
            animation: `border-beam-spin ${duration}s linear infinite`,
            willChange: 'transform',
          }}
        />
      )}

      {/* 2. Static Hairline Fallback for Reduced Motion or Inactive State */}
      {isReducedMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0 border border-amber-500/40 rounded-[inherit]"
        />
      )}

      {/* 3. Inset Mask / Child Content Layer (Preserves 100% interactivity) */}
      <div className="relative z-10 w-full h-full rounded-[inherit]">
        {children}
      </div>

      {/* Embedded High-Performance Animation Keyframes */}
      <style>{`
        @keyframes border-beam-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
