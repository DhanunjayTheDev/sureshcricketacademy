import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import { WHY_CHOOSE_US } from "../../../data/programs";
import { COACH } from "../../../data/coach";

interface Reason {
  key: number;
  label: string;
}

const REASONS: Reason[] = WHY_CHOOSE_US.map((label, i) => ({ key: i, label }));

/**
 * Adapted from the "Image Reveal" hover pattern: floats the coach's photo
 * near the cursor as each reason is hovered, full width to fill the section.
 */
export default function WhyChooseUs() {
  const [focused, setFocused] = useState<Reason | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => setIsLargeScreen(window.innerWidth >= 768);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  function handleMouseMove(e: ReactMouseEvent) {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }

  return (
    <Section tone="cream">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="What Sets Our Coaching Apart" highlight="Apart" />

        <div
          className="relative mt-14 w-full overflow-hidden rounded-2xl border border-cream-200 bg-white"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setFocused(null)}
        >
          {REASONS.map((reason) => {
            const isFocused = focused?.key === reason.key;
            return (
              <div
                key={reason.key}
                className="relative flex items-center justify-between gap-4 border-b border-cream-200 px-6 py-5 last:border-b-0 sm:px-10"
                onMouseEnter={() => setFocused(reason)}
              >
                {!isLargeScreen && (
                  <img
                    src="/suresh.png"
                    alt={COACH.name}
                    className="h-11 w-11 shrink-0 rounded-lg object-cover"
                  />
                )}
                <span
                  className={`w-full text-lg font-extrabold uppercase tracking-tight transition-colors sm:text-3xl ${
                    isFocused ? "text-gold-500" : "text-ink-950"
                  }`}
                >
                  {reason.label}
                </span>
                <span
                  className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:flex ${
                    isFocused ? "bg-gold-500 text-white" : "bg-transparent text-transparent"
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ease-linear ${
                    isFocused ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {isLargeScreen && focused && (
            <motion.div
              className="pointer-events-none fixed z-30 h-[220px] w-[170px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-gold-400/30 shadow-lift"
              style={{ left: smoothX, top: smoothY }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img src="/suresh.png" alt={COACH.name} className="h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-pitch-950/80 px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-cream-50">
                {focused.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
