interface MonogramPortraitProps {
  name: string;
  className?: string;
  ringClassName?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Stand-in for a real photograph. Used wherever a verified photo of a named
 * person has not yet been supplied, so the site never fabricates imagery of
 * a real individual - replace the inner content with an <img> once available.
 */
export default function MonogramPortrait({ name, className = "", ringClassName = "" }: MonogramPortraitProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-pitch-800 bg-grain-dark ${className}`}
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
    >
      <div className={`flex h-[42%] w-[42%] items-center justify-center rounded-full border-2 border-gold-400 ${ringClassName}`}>
        <span className="font-bold text-gold-300" style={{ fontSize: "clamp(1.25rem, 6cqw, 3rem)" }}>
          {getInitials(name)}
        </span>
      </div>
    </div>
  );
}
