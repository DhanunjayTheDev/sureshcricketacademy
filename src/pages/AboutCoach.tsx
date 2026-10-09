import { Target, UserCheck, ShieldCheck } from "lucide-react";
import SEO from "../components/seo/SEO";
import DotField from "../components/ui/DotField";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CoachProfile from "../components/sections/shared/CoachProfile";
import SuccessStory from "../components/sections/home/SuccessStory";
import CTABanner from "../components/sections/shared/CTABanner";
import { SITE_CONFIG } from "../constants/config";

const PHILOSOPHY_PRINCIPLES = [
  { icon: Target, title: "Fundamentals First", subtitle: "Technique before match-specific skills" },
  { icon: UserCheck, title: "Individual Attention", subtitle: "Every player coached to their own level" },
  { icon: ShieldCheck, title: "Structured Discipline", subtitle: "The same rigor for beginners and veterans" },
];

export default function AboutCoach() {
  return (
    <>
      <SEO
        title="About Coach Marupuri Suresh"
        description="Learn about Marupuri Suresh - former Ranji Trophy cricketer who represented Andhra Pradesh and Railways, and mentor to Indian international Shree Charani."
        path="/about-coach"
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
            eyebrow={SITE_CONFIG.name}
            title="About the Coach"
            highlight="Coach"
            subtitle="A closer look at the cricketing journey and coaching philosophy behind Suresh Cricket Academy."
          />
        </Container>
      </Section>

      <CoachProfile variant="full" />
      <SuccessStory />

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="flex flex-col gap-4 lg:col-span-2">
              {PHILOSOPHY_PRINCIPLES.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-cream-200 bg-cream-100 p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold uppercase tracking-wide text-ink-950">{title}</p>
                    <p className="text-sm text-ink-500">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:col-span-3">
              <span className="border-l-[3px] border-gold-500 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                Our Approach
              </span>
              <h3 className="text-2xl font-extrabold uppercase text-ink-950 sm:text-3xl">
                Coaching <span className="text-gold-500">Philosophy</span>
              </h3>
              <p className="text-ink-700 leading-relaxed">
                Coach Suresh's approach centers on building strong technical fundamentals before advancing to
                match-specific skills. Every player receives individual attention within a structured, disciplined
                environment - whether they are just starting out or preparing for competitive tournaments.
              </p>
              <p className="text-ink-700 leading-relaxed">
                The academy's methods draw directly on his own experience as a First-Class cricketer, translated into
                practical, age-appropriate coaching for both young beginners and serious adult players.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
