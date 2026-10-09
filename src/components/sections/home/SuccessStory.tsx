import { Medal } from "lucide-react";
import DotField from "../../ui/DotField";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import CurvedLoop from "../../ui/CurvedLoop";
import { SUCCESS_STORY } from "../../../data/coach";

export default function SuccessStory() {
  return (
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

      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-6 opacity-[0.08]" aria-hidden="true">
        <CurvedLoop
          marqueeText="Success Story ✦ Team India ✦ Women's Cricket ✦"
          speed={1.2}
          curveAmount={140}
          interactive={false}
          className="text-cream-50"
        />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left" className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              invert
              eyebrow="Success Story"
              title={SUCCESS_STORY.heading}
              highlight="Team India"
            />
            <div className="mt-6 flex flex-col gap-4 text-cream-100/85 leading-relaxed">
              {SUCCESS_STORY.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 border-l-[3px] border-gold-500 pl-4">
              <Medal className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <div>
                <p className="font-bold uppercase tracking-wide text-cream-50">{SUCCESS_STORY.playerName}</p>
                <p className="text-xs uppercase tracking-wider text-gold-300">{SUCCESS_STORY.playerTitle}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="order-1 lg:order-2 mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border-b-4 border-gold-500 shadow-lift">
              <img src="/sree-charani.png" alt={SUCCESS_STORY.playerName} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
