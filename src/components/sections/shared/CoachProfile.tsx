import { Trophy, Shield, Users, TrendingUp } from "lucide-react";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { LinkButton } from "../../ui/Button";
import { COACH } from "../../../data/coach";

interface CoachProfileProps {
  variant?: "preview" | "full";
}

const ICONS = [Trophy, Shield, Users, TrendingUp];

export default function CoachProfile({ variant = "full" }: CoachProfileProps) {
  const bioParagraphs = variant === "preview" ? COACH.bio.slice(0, 2) : COACH.bio;

  return (
    <Section id="coach" tone="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border-b-4 border-gold-500 shadow-lift">
              <img src="/suresh.png" alt={COACH.name} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal direction="right" className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Meet the Coach"
              title={COACH.name}
              highlight={COACH.name.split(" ").slice(-1)[0]}
              subtitle={COACH.title}
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {COACH.highlights.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div className="group flex items-start gap-3 rounded-lg bg-cream-100 p-4 transition-colors duration-300 hover:bg-pitch-900" key={item.title}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-ink-950 transition-colors duration-300 group-hover:text-cream-50">{item.title}</p>
                      <p className="text-xs text-ink-500 transition-colors duration-300 group-hover:text-cream-100/70">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 text-ink-700 leading-relaxed">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {variant === "preview" && (
              <div>
                <LinkButton href="/about-coach" variant="ghost" className="!px-0">
                  Read Full Story →
                </LinkButton>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
