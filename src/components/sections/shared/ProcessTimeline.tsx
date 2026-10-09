import { lazy, Suspense, useId, useState } from "react";
import DotField from "../../ui/DotField";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Search,
  Users,
  Dumbbell,
  Swords,
  TrendingUp,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import { COACHING_PROCESS } from "../../../data/programs";
import { SITE_CONFIG } from "../../../constants/config";

// gsap is heavy - lazy-load it so Home (which isn't code-split) doesn't
// pull the whole animation library into its critical-path bundle.
const ScrollReveal = lazy(() => import("../../ui/ScrollReveal"));

const PROCESS_INTRO =
  "Every champion follows a process. Ours starts the day you walk in, and ends on the field where it matters.";

const STEP_ICONS: LucideIcon[] = [ClipboardCheck, Search, Users, Dumbbell, Swords, TrendingUp, Trophy];

interface Step {
  id: string;
  label: string;
  icon: LucideIcon;
}

const STEPS: Step[] = COACHING_PROCESS.map((label, i) => ({
  id: `step-${i}`,
  label,
  icon: STEP_ICONS[i % STEP_ICONS.length],
}));

const ACCENT = "#ec3a54";

/**
 * Adapted from the "Knowledge Convergence" bezier-beam hub pattern: instead
 * of external data sources (YouTube/GitHub/etc.) converging on a brand
 * title, the academy's coaching steps converge on the academy itself -
 * same visual metaphor (many inputs -> one destination), our own content.
 */
export default function ProcessTimeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const filterId = useId();

  const viewBoxWidth = 1000;
  const viewBoxHeight = 600;
  const leftX = 232;
  const targetX = 700;
  const targetY = 300;

  const stepCount = STEPS.length;
  const totalHeight = 460;
  const startY = 70;
  const stepGap = stepCount > 1 ? totalHeight / (stepCount - 1) : 0;
  const getStepY = (index: number) => startY + index * stepGap;

  return (
    <Section tone="pitch" className="relative overflow-hidden">
      <DotField
        className="pointer-events-none absolute inset-0 opacity-60"
        dotRadius={1.5}
        dotSpacing={16}
        bulgeStrength={45}
        glowRadius={150}
        gradientFrom="rgba(236,58,84,0.28)"
        gradientTo="rgba(15,23,42,0.05)"
        glowColor="#ec3a54"
      />
      <Container className="relative">
        <SectionHeading invert eyebrow="Coaching Process" title="Your Journey at the Academy" highlight="Academy" />

        <div className="mt-8 max-w-2xl">
          <Suspense fallback={<p className="text-lg text-cream-100/90 sm:text-xl">{PROCESS_INTRO}</p>}>
            <ScrollReveal
              baseOpacity={0.15}
              baseRotation={3}
              blurStrength={5}
              textClassName="text-cream-100/90 !text-lg sm:!text-xl"
            >
              {PROCESS_INTRO}
            </ScrollReveal>
          </Suspense>
        </div>

        <div className="relative mt-16 flex min-h-[420px] flex-col items-center justify-between gap-10 md:flex-row md:gap-6">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`${filterId}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={ACCENT} stopOpacity="0.25" />
                <stop offset="100%" stopColor={ACCENT} stopOpacity="0.9" />
              </linearGradient>
              <filter id={`${filterId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g>
              {STEPS.map((step, i) => {
                const stepY = getStepY(i);
                const isHovered = hoveredId === step.id;
                const isAnyHovered = hoveredId !== null;
                const pathD = `M ${leftX} ${stepY} C ${leftX + 180} ${stepY}, ${targetX - 180} ${targetY}, ${targetX} ${targetY}`;

                return (
                  <g key={step.id}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke={`url(#${filterId}-grad)`}
                      strokeWidth={isHovered ? 3.5 : 1.75}
                      strokeOpacity={isHovered ? 1 : isAnyHovered ? 0.2 : 0.55}
                      filter={`url(#${filterId}-glow)`}
                      className="transition-all duration-300"
                    />
                    <circle r={isHovered ? 4.5 : 3} fill={ACCENT} filter={`url(#${filterId}-glow)`}>
                      <animateMotion
                        path={pathD}
                        dur={isHovered ? "1.2s" : `${2 + (i % 3) * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </g>
          </svg>

          <div className="relative z-10 flex w-full flex-col gap-3 md:w-auto md:min-w-[260px]">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hoveredId === step.id;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setHoveredId(step.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ scale: 1.03, x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 backdrop-blur-md transition-colors duration-300 ${
                    isHovered
                      ? "border-gold-400 bg-pitch-800"
                      : "border-cream-50/10 bg-cream-50/5"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: ACCENT }}>
                    {i + 1}
                  </span>
                  <Icon className="h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                  <span className="text-sm font-bold uppercase tracking-wide text-cream-50">{step.label}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center gap-4 md:pl-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <div
                className="absolute h-16 w-16 rounded-full opacity-60 motion-safe:animate-pulse"
                style={{ backgroundColor: `${ACCENT}33`, filter: "blur(8px)" }}
                aria-hidden="true"
              />
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 shadow-lift">
                <Trophy className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div className="absolute h-14 w-14 rounded-full border border-gold-400/40 motion-safe:animate-ping" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl font-extrabold uppercase leading-tight text-cream-50 sm:text-2xl">
                {SITE_CONFIG.name}
              </p>
              <span className="mt-1 inline-block rounded-full border border-gold-400/30 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                {STEPS.length}-Step Journey
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
