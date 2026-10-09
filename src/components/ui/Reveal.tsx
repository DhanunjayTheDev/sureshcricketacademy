import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "up" | "left" | "right" | "scale" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const OFFSETS: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  left: { x: -36 },
  right: { x: 36 },
  scale: { scale: 0.92 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = OFFSETS[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
