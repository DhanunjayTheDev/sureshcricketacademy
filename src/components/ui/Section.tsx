import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "cream" | "white" | "pitch";
}

const TONE_CLASSES: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream-100",
  white: "bg-white",
  pitch: "bg-pitch-900 text-cream-50",
};

export default function Section({ children, id, className = "", tone = "cream" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 scroll-mt-24 ${TONE_CLASSES[tone]} ${className}`}>
      {children}
    </section>
  );
}
