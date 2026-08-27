import React, { useRef } from 'react';

export interface GradeSelectorProps {
  id?: string;
  label: string;
  grades?: string[];
  selectedGrade: string;
  onChange: (grade: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const DEFAULT_GRADES = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  id = 'student-grade-selector',
  label,
  grades = DEFAULT_GRADES,
  selectedGrade,
  onChange,
  error,
  disabled = false,
  className = '',
}) => {
  const groupRef = useRef<HTMLDivElement>(null);
  const feedbackId = `${id}-feedback`;
  const hasError = Boolean(error);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (disabled) return;

    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % grades.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + grades.length) % grades.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = grades.length - 1;
    } else {
      return;
    }

    const nextGrade = grades[nextIndex];
    onChange(nextGrade);

    // Shift DOM focus to the newly selected radio button
    const buttons = groupRef.current?.querySelectorAll<HTMLButtonElement>('button[role="radio"]');
    if (buttons && buttons[nextIndex]) {
      buttons[nextIndex].focus();
    }
  };

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {/* Persistent Monospace Label */}
      <div className="flex items-center justify-between">
        <span
          id={`${id}-label`}
          className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
        >
          {label}
          <span className="text-amber-400 ml-1 font-mono">*</span>
        </span>
        <span className="text-[10px] font-mono text-slate-500">
          Strictly 25 Seats / Cohort
        </span>
      </div>

      {/* Accessible WAI-ARIA Radio Group */}
      <div
        ref={groupRef}
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        aria-describedby={feedbackId}
        className={`grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-xl bg-[#05070c] border transition-colors duration-150
          ${
            hasError
              ? 'border-rose-500/80 ring-1 ring-rose-500/20'
              : 'border-white/[0.12]'
          }
        `}
      >
        {grades.map((grade, index) => {
          const isSelected = selectedGrade === grade;
          return (
            <button
              key={grade}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              disabled={disabled}
              onClick={() => onChange(grade)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`h-11 px-3 rounded-lg text-xs font-mono font-medium transition-all duration-150 flex items-center justify-center select-none outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]
                ${
                  isSelected
                    ? 'bg-amber-500 text-[#05070c] font-bold shadow-[0_2px_8px_rgba(245,158,11,0.25)] scale-[1.02]'
                    : 'bg-[#0b0f19] text-slate-300 border border-white/[0.08] hover:border-amber-500/40 hover:text-white hover:bg-white/[0.04]'
                }
                ${disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
              `}
            >
              <span>{grade}</span>
            </button>
          );
        })}
      </div>

      {/* Reserved Error/Helper Height to Prevent CLS */}
      <div id={feedbackId} className="min-h-[1.25rem] flex items-center">
        {hasError && (
          <p className="text-xs text-rose-400 font-sans tracking-wide leading-tight flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default GradeSelector;
