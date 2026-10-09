import {
  Swords,
  Target,
  Hand,
  Shield,
  Dumbbell,
  Eye,
  BrainCircuit,
  Users,
} from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { TRAINING_MODULES } from "../../../data/programs";

const ICONS = [Swords, Target, Hand, Shield, Dumbbell, Eye, BrainCircuit, Users];

export default function TrainingModules() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading eyebrow="Curriculum" title="Complete, Well-Rounded Coaching" highlight="Coaching" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_MODULES.map((module, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={module.title} direction="up" delay={i * 0.05}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-cream-200 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <Icon className="h-7 w-7 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
                  <span className="font-bold uppercase tracking-wide text-ink-950">{module.title}</span>
                  <p className="text-sm text-ink-500 leading-relaxed">{module.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
