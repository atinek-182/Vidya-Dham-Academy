import React, { forwardRef } from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'tel' | 'email' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  helperText?: string;
  isRequired?: boolean;
  disabled?: boolean;
  prefixText?: string;
  maxLength?: number;
  className?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      name,
      type = 'text',
      value,
      onChange,
      onBlur,
      placeholder,
      error,
      isValid,
      helperText,
      isRequired = false,
      disabled = false,
      prefixText,
      maxLength,
      className = '',
      ...rest
    },
    ref
  ) => {
    const hasError = Boolean(error);
    const feedbackId = `${id}-feedback`;

    return (
      <div className={`space-y-1.5 w-full ${className}`}>
        {/* Persistent Top-Aligned Label */}
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider"
          >
            {label}
            {isRequired && <span className="text-amber-400 ml-1 font-mono">*</span>}
          </label>
          {maxLength && (
            <span className="text-[10px] font-mono text-slate-500">
              {value.length}/{maxLength}
            </span>
          )}
        </div>

        {/* Input Wrapper */}
        <div className="relative flex items-center">
          {prefixText && (
            <div className="absolute left-3 flex items-center gap-1 text-xs font-mono text-slate-400 select-none pointer-events-none pr-2 border-r border-white/[0.10]">
              <span>{prefixText}</span>
            </div>
          )}

          <input
            ref={ref}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            aria-invalid={hasError}
            aria-describedby={feedbackId}
            aria-required={isRequired}
            style={{ fontSize: '16px' }} // Floored at 16px to prevent iOS Safari auto-zoom
            className={`w-full h-12 rounded-lg bg-[#05070c] text-white placeholder-slate-500 transition-colors duration-150 outline-none
              ${prefixText ? 'pl-16 pr-10' : 'px-4 pr-10'}
              ${
                hasError
                  ? 'border border-rose-500 focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500'
                  : isValid
                  ? 'border border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500'
                  : 'border border-white/[0.12] hover:border-white/[0.24] focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed bg-white/[0.02]' : ''}
            `}
            {...rest}
          />

          {/* Validation Status Indicator */}
          <div className="absolute right-3 flex items-center pointer-events-none select-none">
            {hasError && (
              <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/30">
                [FAIL]
              </span>
            )}
            {!hasError && isValid && (
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                [PASS]
              </span>
            )}
          </div>
        </div>

        {/* Reserved Micro-Copy Height (20px) to Prevent Cumulative Layout Shift (CLS = 0) */}
        <div id={feedbackId} className="min-h-[1.25rem] flex items-center">
          {hasError ? (
            <p className="text-xs text-rose-400 font-sans tracking-wide leading-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
              <span>{error}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs text-slate-400 font-sans tracking-wide leading-tight">
              {helperText}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
