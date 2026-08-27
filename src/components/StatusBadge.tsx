import React from 'react';

export interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'emerald' | 'slate';
  pulse?: boolean;
  className?: string;
}

/**
 * StatusBadge
 * 
 * Academic telemetry capsule for Vidya Dham Academy.
 * Implements:
 * - Concentric pill geometry: 9999px rounded-full capsule with circular indicator dot
 * - Tabular numbers: font-variant-numeric: tabular-nums for numeric stability
 * - Monospace uppercase typography with high contrast (exceeds WCAG AAA)
 * - Optional pulsing LED state beacon
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  variant = 'amber',
  pulse = true,
  className = '',
}) => {
  const variantStyles = {
    amber: {
      container: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      dot: 'bg-amber-400',
      ping: 'bg-amber-400',
    },
    emerald: {
      container: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      dot: 'bg-emerald-400',
      ping: 'bg-emerald-400',
    },
    slate: {
      container: 'bg-white/[0.04] border-white/[0.12] text-slate-300',
      dot: 'bg-slate-400',
      ping: 'bg-slate-400',
    },
  }[variant];

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-full border
        font-mono text-xs font-medium tracking-wide uppercase select-none
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        ${variantStyles.container}
        ${className}
      `}
      style={{
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            aria-hidden="true"
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 motion-reduce:hidden ${variantStyles.ping}`}
          />
          <span
            aria-hidden="true"
            className={`relative inline-flex rounded-full h-2 w-2 ${variantStyles.dot}`}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};
