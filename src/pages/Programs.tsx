import SEO from "../components/seo/SEO";
import DotField from "../components/ui/DotField";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import TiltCard from "../components/ui/TiltCard";
import ProgramCard from "../components/sections/shared/ProgramCard";
import TrainingModules from "../components/sections/programs/TrainingModules";
import ScheduleFacilities from "../components/sections/programs/ScheduleFacilities";
import ProcessTimeline from "../components/sections/shared/ProcessTimeline";
import CTABanner from "../components/sections/shared/CTABanner";
import { PROGRAMS } from "../data/programs";

export default function Programs() {
  return (
    <>
      <SEO
        title="Coaching Programs & Fees"
        description="Explore the Kids Program (age 6-15) and Adults Program (16+) at Suresh Cricket Academy, covering batting, bowling, fielding, fitness, and match practice."
        path="/programs"
      />

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
          <SectionHeading
            invert
            eyebrow="Coaching Programs"
            title="Structured Training for Every Age"
            highlight="Every Age"
            subtitle="From young beginners to serious adult players, our programs build skill, fitness, and match awareness step by step."
          />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.id} direction="up" delay={i * 0.1}>
                <TiltCard maxTilt={6}>
                  <ProgramCard program={program} featured={program.id === "adults"} />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <TrainingModules />
      <ScheduleFacilities />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
