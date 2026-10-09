import { createContext, useContext, useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { wrap } from "../../utils/wrap";

/**
 * Reconstructed from the "3D Scroll Trigger" pattern (velocity-based
 * infinite horizontal scroll) - the vendored source we received cut off
 * mid-component before the row-scrolling logic, so this rebuilds that part
 * from the visible imports/utility (wrap, useVelocity, useAnimationFrame)
 * using the standard Framer Motion velocity-marquee recipe those point to.
 */

const VelocityContext = createContext<MotionValue<number> | null>(null);

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function ThreeDScrollTriggerContainer({ children, className = "" }: ContainerProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <VelocityContext.Provider value={velocityFactor}>
      <div className={`relative w-full ${className}`}>{children}</div>
    </VelocityContext.Provider>
  );
}

interface RowProps {
  children: ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
}

export function ThreeDScrollTriggerRow({ children, baseVelocity = 2, direction = 1, className = "" }: RowProps) {
  const velocityFactor = useContext(VelocityContext);
  const prefersReducedMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const directionFactor = useRef<1 | -1>(direction);
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const vf = velocityFactor?.get() ?? 0;
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * Math.abs(vf) * 3;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div className="flex flex-none" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <div className="flex flex-none" key={i} aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
