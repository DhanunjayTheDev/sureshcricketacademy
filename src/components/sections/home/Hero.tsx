import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, Trophy } from "lucide-react";
import Container from "../../ui/Container";
import { LinkButton } from "../../ui/Button";
import CircularText from "../../ui/CircularText";
import WavyRippleBackground from "../../ui/WavyRippleBackground";
import { COACH } from "../../../data/coach";
import { CONTACT } from "../../../constants/config";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-pitch-900">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <WavyRippleBackground waveColor="#ec3a54" speed={0.7} frequency={3} maxOpacity={0.4} />
        <div className="absolute inset-0 bg-grain-dark opacity-25" />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 w-full">
        <Container>
          <div className="grid gap-12 py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 text-cream-50"
            >
              <span className="w-fit rounded-lg border-l-[3px] border-gold-500 bg-cream-50/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                Admissions Open
              </span>
              <h1 className="text-balance text-4xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Train Like a <span className="text-gold-500">Champion.</span>
              </h1>
              <p className="max-w-xl text-balance text-base leading-relaxed text-cream-100/85 sm:text-lg">
                Train under Former Ranji Trophy Cricketer <strong className="text-cream-50">Marupuri Suresh</strong>,
                who represented <strong className="text-cream-50">Andhra Pradesh</strong> and{" "}
                <strong className="text-cream-50">Railways</strong>, and has mentored Indian Women's International
                Cricketer <strong className="text-cream-50">Shree Charani</strong>.
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <LinkButton href="/contact" size="lg">
                  Enroll Now
                </LinkButton>
                <LinkButton href={CONTACT.phoneHref} size="lg" variant="secondary" icon={<Phone className="h-4 w-4" />}>
                  Call Now
                </LinkButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="overflow-hidden rounded-2xl border-b-4 border-gold-500 shadow-lift">
                <img src="/suresh.png" alt={COACH.name} className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-3 shadow-lift">
                <Trophy className="h-5 w-5 text-white" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Head Coach</span>
              </div>

              <Link
                to="/contact"
                aria-label="Enroll now - free trial available"
                className="absolute -left-8 -top-8 z-20 hidden sm:block"
              >
                <div className="relative flex items-center justify-center">
                  <CircularText
                    text="FREE TRIAL • ENROLL NOW • "
                    onHover="speedUp"
                    spinDuration={16}
                    className="!h-32 !w-32 bg-gold-500 shadow-lift [&_span]:!text-[9px] [&_span]:!text-white"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-7 w-7 text-white" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-100/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      )}
    </div>
  );
}
