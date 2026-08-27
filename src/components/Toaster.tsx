import React, { useEffect, useState, useCallback } from 'react';

export type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface ToastAction {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  action?: ToastAction;
  createdAt: number;
}

export interface ToastOptions {
  id?: string;
  description?: string;
  duration?: number;
  action?: ToastAction;
}

// Global Event Bus for Headless Sonner Toast Dispatcher
type Listener = (toasts: ToastData[]) => void;
let activeToasts: ToastData[] = [];
const listeners = new Set<Listener>();

const notifyListeners = () => {
  listeners.forEach((listener) => listener([...activeToasts]));
};

const createToastId = (): string => {
  return 'toast_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
};

export const toast = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'default',
    title,
    description: options?.description,
    duration: options?.duration ?? 4000,
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5); // Max 5 stacked toasts
  }
  notifyListeners();
  return id;
};

toast.success = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'success',
    title,
    description: options?.description,
    duration: options?.duration ?? 4000,
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5);
  }
  notifyListeners();
  return id;
};

toast.error = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'error',
    title,
    description: options?.description,
    duration: options?.duration ?? 5000,
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5);
  }
  notifyListeners();
  return id;
};

toast.info = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'info',
    title,
    description: options?.description,
    duration: options?.duration ?? 4000,
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5);
  }
  notifyListeners();
  return id;
};

toast.warning = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'warning',
    title,
    description: options?.description,
    duration: options?.duration ?? 4500,
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5);
  }
  notifyListeners();
  return id;
};

toast.loading = (title: string, options?: ToastOptions): string => {
  const id = options?.id || createToastId();
  const newToast: ToastData = {
    id,
    type: 'loading',
    title,
    description: options?.description,
    duration: Infinity, // Loading toasts don't auto-dismiss until updated
    action: options?.action,
    createdAt: Date.now(),
  };

  const existingIdx = activeToasts.findIndex((t) => t.id === id);
  if (existingIdx >= 0) {
    activeToasts[existingIdx] = newToast;
  } else {
    activeToasts = [newToast, ...activeToasts].slice(0, 5);
  }
  notifyListeners();
  return id;
};

toast.promise = async <T,>(
  promise: Promise<T>,
  data: {
    loading: string;
    success: string | ((result: T) => string);
    error: string | ((err: unknown) => string);
  }
): Promise<T> => {
  const id = toast.loading(data.loading);
  try {
    const result = await promise;
    const msg = typeof data.success === 'function' ? data.success(result) : data.success;
    toast.success(msg, { id, duration: 4000 });
    return result;
  } catch (err) {
    const msg = typeof data.error === 'function' ? data.error(err) : data.error;
    toast.error(msg, { id, duration: 5000 });
    throw err;
  }
};

toast.dismiss = (id?: string) => {
  if (id) {
    activeToasts = activeToasts.filter((t) => t.id !== id);
  } else {
    activeToasts = [];
  }
  notifyListeners();
};

export interface ToasterProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
}

export const Toaster: React.FC<ToasterProps> = ({
  position = 'bottom-right',
  className = '',
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const handler = (updated: ToastData[]) => setToasts(updated);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  const handleDismiss = useCallback((id: string) => {
    toast.dismiss(id);
  }, []);

  // Auto-dismiss timers
  useEffect(() => {
    if (toasts.length === 0) return;

    const timers = toasts.map((t) => {
      if (t.duration === Infinity) return null;
      return setTimeout(() => {
        handleDismiss(t.id);
      }, t.duration);
    });

    return () => {
      timers.forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [toasts, handleDismiss]);

  const positionClasses = {
    'top-right': 'top-6 right-6 flex-col-reverse',
    'top-left': 'top-6 left-6 flex-col-reverse',
    'bottom-right': 'bottom-6 right-6 flex-col',
    'bottom-left': 'bottom-6 left-6 flex-col',
  }[position];

  if (toasts.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Notifications"
      className={`fixed z-[9999] flex pointer-events-none max-w-sm w-full gap-2.5 p-2 ${positionClasses} ${className}`}
    >
      {toasts.map((item, index) => {
        const isSuccess = item.type === 'success';
        const isError = item.type === 'error';
        const isWarning = item.type === 'warning';
        const isLoading = item.type === 'loading';

        const borderColor = isSuccess
          ? 'border-emerald-500/40 shadow-[0_8px_24px_rgba(16,185,129,0.15)]'
          : isError
          ? 'border-rose-500/40 shadow-[0_8px_24px_rgba(244,63,94,0.15)]'
          : isWarning
          ? 'border-amber-500/40 shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
          : 'border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.5)]';

        const tagText = isSuccess
          ? '[PASS]'
          : isError
          ? '[FAIL]'
          : isWarning
          ? '[WARN]'
          : isLoading
          ? '[SYNC]'
          : '[INFO]';

        const tagColor = isSuccess
          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
          : isError
          ? 'text-rose-400 bg-rose-500/10 border-rose-500/30'
          : isWarning
          ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
          : isLoading
          ? 'text-amber-300 bg-amber-500/10 border-amber-500/30 animate-pulse'
          : 'text-slate-400 bg-white/[0.04] border-white/[0.08]';

        return (
          <div
            key={item.id}
            role="status"
            aria-live="polite"
            className={`pointer-events-auto w-full p-4 rounded-xl bg-[#0b0f19] border ${borderColor} backdrop-blur-xl transition-all duration-200 transform translate-y-0 opacity-100 flex flex-col gap-1.5`}
            style={{
              zIndex: 100 - index,
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${tagColor}`}>
                  {tagText}
                </span>
                <h4 className="text-sm font-semibold text-white tracking-wide leading-tight">
                  {item.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleDismiss(item.id)}
                aria-label="Dismiss Notification"
                className="text-slate-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <span className="font-mono text-xs leading-none">&times;</span>
              </button>
            </div>

            {item.description && (
              <p className="text-xs text-slate-300 font-sans leading-relaxed pl-1">
                {item.description}
              </p>
            )}

            {item.action && (
              <div className="pt-1.5 flex justify-end">
                <button
                  type="button"
                  onClick={item.action.onClick}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-amber-500 hover:bg-amber-400 text-[#05070c] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {item.action.label}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Toaster;
