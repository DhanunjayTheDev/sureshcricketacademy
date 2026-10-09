import { Phone } from "lucide-react";
import DotField from "../../ui/DotField";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import { LinkButton } from "../../ui/Button";
import { CONTACT } from "../../../constants/config";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden border-y-4 border-gold-500 bg-pitch-900 py-24 sm:py-28">
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
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <h2 className="text-balance text-3xl font-extrabold uppercase leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Ready to Start Your <span className="text-gold-500">Cricket Journey?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="/contact" size="lg">
              Enroll Now
            </LinkButton>
            <LinkButton href={CONTACT.phoneHref} size="lg" variant="secondary" icon={<Phone className="h-4 w-4" />}>
              Call Coach
            </LinkButton>
            <LinkButton
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              size="lg"
              variant="secondary"
              icon={<img src="/whatsapp.png" alt="" className="h-4 w-4" />}
            >
              WhatsApp
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
