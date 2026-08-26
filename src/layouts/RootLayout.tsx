import React from 'react';

export interface RootLayoutProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  mobileStripContent?: React.ReactNode;
  className?: string;
}

/**
 * RootLayout
 * Fundamental structural scaffold for Vidya Dham Academy.
 * Enforces:
 * - Anti-overflow protection: overflow-x: clip
 * - Theme background: oklch(0.08 0.015 260) / #05070c
 * - Monastic fixed top navigation slot (H = 64px)
 * - Mobile sticky bottom command strip slot with safe-area padding
 * - WCAG Level AAA skip link navigation
 */
export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  headerContent,
  footerContent,
  mobileStripContent,
  className = '',
}) => {
  return (
    <div
      className={`min-h-screen w-full bg-[#05070c] text-[#f8fafc] overflow-x-clip selection:bg-amber-500/20 selection:text-amber-300 font-sans ${className}`}
    >
      {/* Skip to Content Navigation for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-[#05070c] focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Persistent Monastic Header Slot */}
      {headerContent && (
        <header
          role="banner"
          className="fixed top-0 left-0 right-0 z-40 h-16 bg-[#05070c]/85 backdrop-blur-md border-b border-white/[0.08]"
        >
          {headerContent}
        </header>
      )}

      {/* Primary Semantic Main Content Container */}
      <main id="main-content" tabIndex={-1} className="w-full focus:outline-none">
        {children}
      </main>

      {/* Persistent Semantic Footer Slot */}
      {footerContent && (
        <footer role="contentinfo" className="w-full border-t border-white/[0.08]">
          {footerContent}
        </footer>
      )}

      {/* Mobile Sticky Bottom Command Strip Slot (Fitts's Law Zone) */}
      {mobileStripContent && (
        <div
          role="region"
          aria-label="Quick Actions"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#05070c]/90 backdrop-blur-lg border-t border-white/[0.08] pb-[env(safe-area-inset-bottom,0px)]"
        >
          {mobileStripContent}
        </div>
      )}
    </div>
  );
};
