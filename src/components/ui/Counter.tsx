import ReactCountUpDefault from "react-countup";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";

// Vite's CJS interop for react-countup's UMD build sometimes yields the raw
// module object ({ default, useCountUp }) instead of the component itself -
// unwrap defensively so it works the same in dev and production builds.
const CountUp =
  typeof ReactCountUpDefault === "function"
    ? ReactCountUpDefault
    : (ReactCountUpDefault as unknown as { default: typeof ReactCountUpDefault }).default;

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ end, prefix = "", suffix = "", duration = 1.6, className = "" }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          prefix={prefix}
          suffix={suffix}
          duration={prefersReducedMotion ? 0 : duration}
          separator=","
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
