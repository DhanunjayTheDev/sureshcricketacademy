import { Quote } from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "../../ui/ThreeDScrollTrigger";
import { TESTIMONIALS } from "../../../data/testimonials";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="mr-6 flex h-full w-[340px] shrink-0 flex-col gap-4 rounded-xl border border-cream-200 bg-white p-8 shadow-soft sm:w-[380px]">
      <Quote className="h-8 w-8 text-gold-500" aria-hidden="true" />
      <p className="flex-1 text-ink-700 leading-relaxed italic">{t.quote}</p>
      <div>
        <p className="font-semibold text-ink-950">{t.name}</p>
        <p className="text-sm text-ink-500">{t.role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <Section tone="cream">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Families Say" highlight="Families Say" />
      </Container>
      <Reveal className="mt-14">
        <ThreeDScrollTriggerContainer className="scroll-fade-mask">
          <ThreeDScrollTriggerRow baseVelocity={1.6}>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
        <p className="mt-6 text-center text-xs font-medium uppercase tracking-wider text-ink-300">
          Scroll the page - the cards drift faster with you
        </p>
      </Reveal>
    </Section>
  );
}
