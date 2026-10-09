import { Trophy } from "lucide-react";
import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import { HIGHLIGHTS } from "../../../data/stats";

export default function Highlights() {
  return (
    <div className="border-y border-ink-950/5 bg-white py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.label}
              direction="up"
              delay={i * 0.08}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white">
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wide leading-snug text-ink-900">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
