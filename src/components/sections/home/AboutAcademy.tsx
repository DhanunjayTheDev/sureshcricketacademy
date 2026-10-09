import { ShieldCheck, Dumbbell, Target, BrainCircuit, Swords, Trophy } from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { LinkButton } from "../../ui/Button";

const FOCUS_AREAS = [
  { icon: ShieldCheck, label: "Discipline" },
  { icon: Target, label: "Strong Fundamentals" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Swords, label: "Technical Excellence" },
  { icon: BrainCircuit, label: "Match Awareness" },
  { icon: Trophy, label: "Tournament Preparation" },
];

interface AboutAcademyProps {
  variant?: "preview" | "full";
}

export default function AboutAcademy({ variant = "full" }: AboutAcademyProps) {
  return (
    <Section id="about" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="About the Academy"
          title="Welcome to Suresh Cricket Academy"
          highlight="Academy"
          subtitle="Professional cricket coaching for kids and adults, built around a simple philosophy: strong fundamentals, real discipline, and steady progress."
        />

        {variant === "full" ? (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} direction="up" delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-cream-200 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-bold uppercase tracking-wide text-ink-900">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal direction="up" className="mt-8 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3">
              {FOCUS_AREAS.slice(0, 4).map(({ label }) => (
                <span
                  key={label}
                  className="rounded-full border border-cream-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink-700 shadow-soft"
                >
                  {label}
                </span>
              ))}
            </div>
            <LinkButton href="/about" variant="dark">
              Learn More About Us
            </LinkButton>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
