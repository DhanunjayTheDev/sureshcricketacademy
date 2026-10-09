import SEO from "../components/seo/SEO";
import DotField from "../components/ui/DotField";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import AboutAcademy from "../components/sections/home/AboutAcademy";
import CTABanner from "../components/sections/shared/CTABanner";
import ScrollPara from "../components/ui/ScrollPara";
import ScrollReveal from "../components/ui/ScrollReveal";
import { SITE_CONFIG } from "../constants/config";

const PHILOSOPHY_LINES = [
  "Cricket is more than a sport.",
  "It's discipline, patience, and grit.",
  "Technique before tactics.",
  "Character before competition.",
  "This is how champions are made.",
];

export default function About() {
  return (
    <>
      <SEO
        title="About the Academy"
        description={SITE_CONFIG.description}
        path="/about"
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
            eyebrow="About Us"
            title="About the Academy"
            highlight="Academy"
            subtitle="Building the next generation of disciplined, technically sound cricketers - one training session at a time."
          />
        </Container>
      </Section>

      <div className="relative bg-pitch-950">
        <div className="pointer-events-none absolute inset-0 bg-grain-dark opacity-20" aria-hidden="true" />
        <ScrollPara
          paragraphs={PHILOSOPHY_LINES}
          direction="bottom"
          textClassName="text-cream-50 uppercase font-extrabold"
        />
      </div>

      <AboutAcademy variant="full" />

      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow="The Coach's Journey" title="Built Through Persistence" highlight="Persistence" />
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-cream-200 bg-white px-6 py-14 shadow-soft sm:px-14">
            <ScrollReveal
              baseOpacity={0.15}
              baseRotation={4}
              blurStrength={6}
              textClassName="text-ink-950"
            >
              Coach Suresh's own playing career began as a top-order batsman before he reinvented himself as a
              leg-spin all-rounder for Andhra Pradesh - a transformation built on patience, not overnight success.
              His strongest domestic season arrived only after years of persistence, a lesson in discipline he now
              passes on to every player who walks into the academy.
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
