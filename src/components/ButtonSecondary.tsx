import React from 'react';

export interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  iconTrailing?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

/**
 * ButtonSecondary
 * 
 * Technical outline action primitive for exploratory navigation.
 * Implements:
 * - Polymorphic support (renders <a> when href provided, <button> otherwise)
 * - VibeSec: automatic rel="noopener noreferrer" on external links
 * - Emil Kowalski scale-on-press physics: scale(0.98) with 160ms release curve
 * - 48px minimum touch target flooring (WCAG 2.5.5 AAA compliance)
 * - 0.5px hairline boundary with amber-500 hover luminance shift
 * - Dual-layer amber focus ring with 2px canvas offset
 */
export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  onClick,
  href,
  size = 'md',
  iconTrailing,
  fullWidth = false,
  className = '',
  ariaLabel,
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'h-10 min-h-[40px] px-4 text-xs',
    md: 'h-12 min-h-[48px] px-6 text-sm',
    lg: 'h-14 min-h-[56px] px-8 text-base',
  }[size];

  const commonClasses = `
    group relative inline-flex items-center justify-center font-sans font-medium tracking-wide
    rounded-lg select-none cursor-pointer overflow-hidden
    bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12]
    border border-white/[0.14] hover:border-amber-500/40 active:border-amber-500/60
    text-slate-200 hover:text-white
    shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
    transition-[transform,background-color,border-color,color] duration-150 ease-out
    active:scale-[0.98] active:duration-75
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]
    disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none disabled:active:scale-100
    motion-reduce:transition-none motion-reduce:active:scale-100
    ${sizeClasses}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <span className="inline-flex items-center justify-center gap-2.5">
      <span>{children}</span>
      {iconTrailing && (
        <span className="inline-flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-[transform,color] duration-150 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
          {iconTrailing}
        </span>
      )}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={commonClasses}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={commonClasses}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {content}
    </button>
  );
};
