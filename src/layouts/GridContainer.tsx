import React from 'react';

export interface GridContainerProps {
  as?: 'div' | 'header' | 'footer' | 'nav' | 'main';
  className?: string;
  children: React.ReactNode;
  noGrid?: boolean;
}

/**
 * GridContainer
 * 12-Column Responsive CSS Grid Container:
 * - Mobile (<640px): 4 columns, 16px gutters, 20px margin padding
 * - Tablet (640px–1023px): 8 columns, 24px gutters, 32px margin padding
 * - Desktop (1024px–1439px): 12 columns, 32px gutters, 48px margin padding
 * - Ultrawide (1440px+): 12 columns, 32px gutters, max-w-[1440px] mx-auto
 * - Zero horizontal overflow enforced via minmax(0, 1fr) track sizing
 */
export const GridContainer: React.FC<GridContainerProps> = ({
  as: Component = 'div',
  className = '',
  children,
  noGrid = false,
}) => {
  const gridClasses = noGrid
    ? ''
    : 'grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8';

  return (
    <Component
      className={`w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 ${gridClasses} ${className}`}
    >
      {children}
    </Component>
  );
};
