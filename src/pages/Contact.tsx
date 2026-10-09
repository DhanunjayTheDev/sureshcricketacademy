import { MapPin, Phone, Mail } from "lucide-react";
import DotField from "../components/ui/DotField";
import { InstagramIcon, FacebookIcon } from "../components/ui/SocialIcons";
import SEO from "../components/seo/SEO";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import RegistrationForm from "../components/forms/RegistrationForm";
import FAQSection from "../components/sections/shared/FAQSection";
import { CONTACT } from "../constants/config";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    value: `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city}, ${CONTACT.address.state} ${CONTACT.address.pincode}`,
    href: undefined,
  },
  { icon: Phone, label: "Phone / WhatsApp", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Registration"
        description="Get in touch with Suresh Cricket Academy or register for a free trial session - contact details, location, and an easy WhatsApp registration form."
        path="/contact"
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
            eyebrow="Get in Touch"
            title="Contact Suresh Cricket Academy"
            highlight="Cricket Academy"
            subtitle="Reach out with any questions, or register alongside to start your cricket journey."
          />
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal direction="left" className="flex flex-col gap-8">
              <div>
                <span className="border-l-[3px] border-gold-500 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                  Get in Touch
                </span>
                <h3 className="mt-3 text-2xl font-extrabold uppercase text-ink-950">
                  Contact <span className="text-gold-500">Academy</span>
                </h3>
                <p className="mt-3 text-ink-700 leading-relaxed">
                  Ready to begin your cricket journey? Contact us for admission enquiries, trial sessions, or any
                  other questions.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4 rounded-xl border border-cream-200 bg-white p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-ink-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-ink-950 hover:text-gold-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-ink-950">{value}</p>
                      )}
                      {label === "Phone / WhatsApp" && (
                        <a
                          href={`https://wa.me/${CONTACT.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 block text-xs font-bold uppercase tracking-wide text-gold-600 hover:text-gold-700"
                        >
                          Chat on WhatsApp
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-pitch-900 text-white hover:bg-gold-500 transition-colors"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-pitch-900 text-white hover:bg-gold-500 transition-colors"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>

              <div className="overflow-hidden rounded-xl border border-cream-200 shadow-soft">
                <iframe
                  title="Academy location map"
                  src={CONTACT.mapEmbedSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <div id="registration" className="scroll-mt-24">
              <Reveal direction="right">
                <span className="border-l-[3px] border-gold-500 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                  Registration
                </span>
                <h3 className="mb-6 mt-3 text-2xl font-extrabold uppercase text-ink-950">
                  Register Your <span className="text-gold-500">Interest</span>
                </h3>
                <RegistrationForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <FAQSection tone="white" />
    </>
  );
}
