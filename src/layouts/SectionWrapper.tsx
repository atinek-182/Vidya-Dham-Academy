import React from 'react';

export type SectionRhythmVariant = 'hero' | 'major' | 'minor' | 'showcase';

export interface SectionWrapperProps {
  id?: string;
  variant?: SectionRhythmVariant;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  bleedDivider?: boolean;
}

/**
 * SectionWrapper
 * Calibrated to Obys Agency spatial rhythm:
 * - hero: 160px top padding, clamp(4rem, 2.5rem + 5vw, 8.75rem) bottom padding
 * - major: clamp(4.000rem, 2.500rem + 5.00vw, 8.750rem) (64px mobile to 140px desktop)
 * - minor: clamp(3.000rem, 2.000rem + 3.00vw, 6.000rem) (48px mobile to 96px desktop)
 * - showcase: clamp(5.000rem, 3.000rem + 6.00vw, 11.250rem) (80px mobile to 180px desktop)
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  variant = 'major',
  className = '',
  children,
  ariaLabel,
  bleedDivider = false,
}) => {
  const rhythmStyles: Record<SectionRhythmVariant, string> = {
    hero: 'pt-[160px] pb-[clamp(4.000rem,2.500rem+5.00vw,8.750rem)]',
    major: 'py-[clamp(4.000rem,2.500rem+5.00vw,8.750rem)]',
    minor: 'py-[clamp(3.000rem,2.000rem+3.00vw,6.000rem)]',
    showcase: 'py-[clamp(5.000rem,3.000rem+6.00vw,11.250rem)]',
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full overflow-hidden ${rhythmStyles[variant]} ${
        bleedDivider ? 'border-b border-white/[0.08]' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
};
