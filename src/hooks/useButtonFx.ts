import { useReducedMotion } from "framer-motion";
import { useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleSeq = 0;

/**
 * Click ripple (all buttons) + subtle magnetic cursor-pull (primary CTAs only).
 * Applied as inline style so it composes with the element's own CSS
 * hover/active transitions instead of fighting them - style is only set
 * while actively hovering/moving, and cleared (falls back to CSS) on leave.
 */
export function useButtonFx<T extends HTMLElement>(magnetic: boolean) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent) {
    if (!magnetic || prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    const maxOffset = 8;
    const strength = 0.25;
    const dx = Math.max(-maxOffset, Math.min(maxOffset, relX * strength));
    const dy = Math.max(-maxOffset, Math.min(maxOffset, relY * strength));
    setStyle({ transform: `translate(${dx}px, ${dy}px) scale(1.05)` });
  }

  function handleMouseLeave() {
    if (magnetic) setStyle({});
  }

  function handlePointerDown(e: PointerEvent) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = ++rippleSeq;
    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  return { ref, style, ripples, handleMouseMove, handleMouseLeave, handlePointerDown };
}
