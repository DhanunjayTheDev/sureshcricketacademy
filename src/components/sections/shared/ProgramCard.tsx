import { CheckCircle2 } from "lucide-react";
import Counter from "../../ui/Counter";
import { LinkButton } from "../../ui/Button";
import type { Program } from "../../../data/programs";

export default function ProgramCard({ program, featured = false }: { program: Program; featured?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col gap-6 rounded-2xl p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift ${
        featured ? "bg-pitch-900 text-cream-50" : "border-l-4 border-gold-500 bg-white text-ink-950"
      }`}
    >
      <div>
        <span
          className={`inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
            featured ? "bg-cream-50/10 text-gold-300" : "bg-cream-100 text-ink-500"
          }`}
        >
          Age {program.ageLabel}
        </span>
        <h3 className={`mt-3 text-2xl font-extrabold uppercase ${featured ? "text-cream-50" : "text-ink-950"}`}>
          {program.name}
        </h3>
      </div>

      <div className="flex items-baseline gap-1">
        <span className={`text-4xl font-extrabold ${featured ? "text-gold-400" : "text-gold-500"}`}>
          <Counter end={program.price} prefix="₹" />
        </span>
        <span className={`text-sm font-medium ${featured ? "text-cream-100/70" : "text-ink-500"}`}>
          {program.priceUnit}
        </span>
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {program.includes.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle2 className={`h-4 w-4 shrink-0 ${featured ? "text-gold-400" : "text-gold-500"}`} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <LinkButton href="/contact" variant={featured ? "primary" : "dark"} className="w-full">
        Enroll Now
      </LinkButton>
    </div>
  );
}
