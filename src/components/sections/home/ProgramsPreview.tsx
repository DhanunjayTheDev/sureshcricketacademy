import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import TiltCard from "../../ui/TiltCard";
import ProgramCard from "../shared/ProgramCard";
import { PROGRAMS } from "../../../data/programs";

export default function ProgramsPreview() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Coaching Programs"
          title="Find the Right Program"
          highlight="Right Program"
          subtitle="Structured coaching for every stage - from young beginners to serious adult players."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
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
  );
}
