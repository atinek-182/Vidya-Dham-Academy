import React, { useEffect, useRef, useState } from 'react';

export interface WordRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  wordClassName?: string;
  stagger?: number; // seconds per word, default 0.06
  duration?: number; // seconds, default 0.8
  delayOffset?: number; // base delay in seconds, default 0
  threshold?: number; // intersection observer threshold, default 0.2
}

/**
 * WordReveal
 * Architectural word-by-word typographic reveal adhering to staggered-word-reveal and vibesec specifications.
 * Enforces:
 * - Dual-tree ARIA accessibility contract (aria-hidden="true" visual spans + sr-only unsplit text)
 * - Zero innerHTML or eval usage (strict text splitting into virtual DOM nodes)
 * - Prefers-reduced-motion bypass with instantaneous final states
 * - Single-shot IntersectionObserver activation with unmount cleanup
 */
export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  as: Component = 'span',
  className = '',
  wordClassName = '',
  stagger = 0.06,
  duration = 0.8,
  delayOffset = 0,
  threshold = 0.2,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Accessibility Check: Prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (media.matches) {
        setIsReducedMotion(true);
        setIsVisible(true);
        return;
      }

      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setIsReducedMotion(true);
          setIsVisible(true);
        }
      };

      media.addEventListener('change', handleChange);

      // 2. IntersectionObserver for single-shot reveal
      const node = containerRef.current;
      if (!node) return;

      if (!('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries, io) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              io.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      observer.observe(node);

      return () => {
        media.removeEventListener('change', handleChange);
        observer.disconnect();
      };
    }
  }, [threshold]);

  // Safe programmatic text splitting (Zero innerHTML / Zero XSS sink)
  const words = text.split(/\s+/).filter(Boolean);

  return (
    // @ts-ignore dynamic polymorphic component
    <Component
      ref={containerRef}
      className={`inline-block ${className}`}
    >
      {/* 1. Dual-Tree ARIA Mask: Unsplit screen-reader-only accessible text */}
      <span className="sr-only">{text}</span>

      {/* 2. Visual Animated Words: Hidden from screen readers to prevent phonetic stutter */}
      <span aria-hidden="true" className="inline">
        {words.map((word, index) => {
          const wordDelay = isReducedMotion
            ? 0
            : delayOffset + index * stagger;

          const wordStyle: React.CSSProperties = isReducedMotion
            ? {
                display: 'inline-block',
                opacity: 1,
                transform: 'none',
              }
            : {
                display: 'inline-block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translate3d(0, 0, 0)'
                  : 'translate3d(0, 24px, 0)',
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${wordDelay.toFixed(3)}s`,
                willChange: isVisible ? 'auto' : 'opacity, transform',
              };

          return (
            <React.Fragment key={`${word}-${index}`}>
              <span style={wordStyle} className={wordClassName}>
                {word}
              </span>
              {index < words.length - 1 && ' '}
            </React.Fragment>
          );
        })}
      </span>
    </Component>
  );
};
