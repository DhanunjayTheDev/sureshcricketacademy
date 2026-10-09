import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

interface PlaceholderTileProps {
  icon?: LucideIcon;
  label: string;
  category?: string;
  className?: string;
}

/**
 * Stand-in for a real photograph in the gallery grid until actual images
 * are supplied. Distinct per category via icon + label, never a fabricated photo.
 */
export default function PlaceholderTile({ icon: Icon = ImageIcon, label, category, className = "" }: PlaceholderTileProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-3 bg-pitch-700 bg-grain-dark text-cream-50 ${className}`}
      role="img"
      aria-label={label}
    >
      <Icon className="h-8 w-8 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
      <div className="px-4 text-center">
        {category && (
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
            {category}
          </span>
        )}
        <span className="mt-1 block text-sm font-medium text-cream-100/90">{label}</span>
      </div>
    </div>
  );
}
