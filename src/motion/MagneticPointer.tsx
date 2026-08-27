import React, { useEffect, useRef, useState } from 'react';

export interface MagneticPointerProps {
  ringSize?: number; // default 28px
  lerp?: number; // default 0.18
  className?: string;
}

/**
 * MagneticPointer
 * Kinematically smoothed ambient pointer ring with Apple-style spring dampening
 * and magnetic attraction to interactive targets.
 * Enforces:
 * - Complete bypass on touch and coarse pointer devices (pointer: fine guard)
 * - Automatic bypass under prefers-reduced-motion: reduce
 * - Idle sleep cycle (RAF halts when stationary to prevent idle CPU/GPU consumption)
 * - Immediate pointer-down tactile feedback (Apple Design Principle 1)
 * - Deterministic unmount cleanup with zero dangling event listeners
 */
export const MagneticPointer: React.FC<MagneticPointerProps> = ({
  ringSize = 28,
  lerp = 0.18,
  className = '',
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Device and Accessibility Guards
    const finePointerMedia = window.matchMedia('(pointer: fine)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEnabled = () => {
      const active = finePointerMedia.matches && !reducedMotionMedia.matches;
      setIsEnabled(active);
      return active;
    };

    if (!checkEnabled()) return;

    const handlePointerChange = () => checkEnabled();
    const handleMotionChange = () => checkEnabled();

    finePointerMedia.addEventListener('change', handlePointerChange);
    reducedMotionMedia.addEventListener('change', handleMotionChange);

    // 2. Kinematic State
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let isPressed = false;
    let isHoveringTarget = false;
    let rafId: number | null = null;
    let isLooping = false;

    const ring = ringRef.current;
    if (!ring) return;

    function renderTransform() {
      const scale = isPressed ? 0.8 : isHoveringTarget ? 1.4 : 1.0;
      const opacity = isVisible ? (isHoveringTarget ? 0.85 : 0.6) : 0;
      ring!.style.transform = `translate3d(${(currentX - ringSize / 2).toFixed(2)}px, ${(currentY - ringSize / 2).toFixed(2)}px, 0) scale(${scale})`;
      ring!.style.opacity = `${opacity}`;
    }

    function tick() {
      // Exponential lerp calculus: X_n = X_{n-1} + lambda * (Target - X_{n-1})
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * lerp;
      currentY += dy * lerp;

      renderTransform();

      // Idle Sleep Check: Stop loop if delta is sub-pixel (< 0.05px)
      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05 && !isPressed) {
        currentX = targetX;
        currentY = targetY;
        renderTransform();
        isLooping = false;
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    function wakeLoop() {
      if (!isLooping) {
        isLooping = true;
        rafId = requestAnimationFrame(tick);
      }
    }

    // 3. Pointer Event Handlers
    const onPointerMove = (e: PointerEvent) => {
      isVisible = true;

      // Check for magnetic targets under or near pointer
      let clientX = e.clientX;
      let clientY = e.clientY;

      const target = (e.target as HTMLElement)?.closest?.(
        'button, a, [data-magnetic="true"], [data-magnetic], input, select'
      );

      if (target) {
        isHoveringTarget = true;
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxRadius = Math.max(rect.width, rect.height) / 2 + 40;

        if (dist < maxRadius) {
          // Magnetic suction formula: D = delta * (1 - dist / maxRadius) * 0.35
          const pull = (1 - dist / maxRadius) * 0.35;
          clientX -= deltaX * pull;
          clientY -= deltaY * pull;
        }
      } else {
        isHoveringTarget = false;
      }

      targetX = clientX;
      targetY = clientY;
      wakeLoop();
    };

    const onPointerDown = () => {
      isPressed = true;
      wakeLoop();
    };

    const onPointerUp = () => {
      isPressed = false;
      wakeLoop();
    };

    const onPointerLeave = () => {
      isVisible = false;
      wakeLoop();
    };

    const onPointerEnter = () => {
      isVisible = true;
      wakeLoop();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('pointerenter', onPointerEnter);

    // Initial positioning offscreen
    renderTransform();

    // 4. Deterministic Cleanup
    return () => {
      finePointerMedia.removeEventListener('change', handlePointerChange);
      reducedMotionMedia.removeEventListener('change', handleMotionChange);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('pointerenter', onPointerEnter);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [ringSize, lerp]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-amber-400/60 mix-blend-screen transition-opacity duration-300 ${className}`}
      style={{
        width: ringSize,
        height: ringSize,
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform, opacity',
        boxShadow: '0 0 12px rgba(245, 158, 11, 0.25)',
      }}
    />
  );
};
