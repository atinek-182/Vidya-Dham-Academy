import React, { useRef, useCallback } from 'react';

export interface CardBentoProps {
  colSpan?: string;
  tag?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

/**
 * CardBento
 * 
 * Awwwards-tier modular pedagogical container for Vidya Dham Academy.
 * Implements:
 * - Dynamic cursor spotlight: Mouse raycasting updates CSS variables (--mouse-x, --mouse-y)
 *   directly on the DOM node without React re-render overhead
 * - Concentric radius geometry: 16px outer radius (rounded-2xl) paired with 8px inner elements
 * - Layered depth: Inset specular highlight + ambient elevation shadow on hover
 * - Emil Kowalski motion principles: Smooth -4px elevation lift with custom ease curve
 * - Full accessibility: role="region" or role="button" if interactive, tabIndex support
 */
export const CardBento: React.FC<CardBentoProps> = ({
  colSpan = 'col-span-4 sm:col-span-8 lg:col-span-6',
  tag,
  icon,
  title,
  description,
  children,
  interactive = false,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '-999px');
    card.style.setProperty('--mouse-y', '-999px');
  }, []);

  return (
    <div
      ref={cardRef}
      role={interactive ? 'button' : 'region'}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={interactive ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel || title}
      className={`
        group relative overflow-hidden rounded-2xl p-6 sm:p-8
        bg-[#0b0f19] border border-white/[0.10]
        shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
        transition-[transform,border-color,box-shadow] duration-200 ease-out
        ${interactive ? 'cursor-pointer hover:border-amber-500/35 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_24px_rgba(245,158,11,0.08)] active:scale-[0.99] active:duration-75' : ''}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]
        motion-reduce:transition-none motion-reduce:hover:transform-none
        ${colSpan}
        ${className}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {/* Interactive Cursor Spotlight Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(420px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(245, 158, 11, 0.08), transparent 70%)',
        }}
      />

      {/* Subtle Hairline Specular Border Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.18)]"
      />

      {/* Card Header Content */}
      {(tag || icon || title || description) && (
        <div className="relative z-10 space-y-3 mb-6">
          {(tag || icon) && (
            <div className="flex items-center gap-3">
              {icon && (
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 text-lg">
                  {icon}
                </div>
              )}
              {tag && (
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs uppercase tracking-wider">
                  <span>{tag}</span>
                </div>
              )}
            </div>
          )}
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white group-hover:text-amber-100/95 transition-colors duration-150">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Nested Body Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};
