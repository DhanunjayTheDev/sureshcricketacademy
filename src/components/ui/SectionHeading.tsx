import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Exact substring within `title` to render in the crimson accent color. */
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}

function renderTitle(title: string, highlight: string | undefined, invert: boolean) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }
  const index = title.indexOf(highlight);
  const before = title.slice(0, index);
  const after = title.slice(index + highlight.length);
  return (
    <>
      {before}
      <span className={invert ? "text-gold-300" : "text-gold-500"}>{highlight}</span>
      {after}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`border-l-[3px] pl-3 text-xs font-bold uppercase tracking-[0.2em] ${
            invert ? "border-gold-400 text-cream-100/80" : "border-gold-500 text-ink-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.15] tracking-tight ${
          invert ? "text-cream-50" : "text-ink-950"
        }`}
      >
        {renderTitle(title, highlight, invert)}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg normal-case ${invert ? "text-cream-100/80" : "text-ink-700"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
