import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import PlaceholderTile from "../ui/PlaceholderTile";
import Lightbox from "./Lightbox";
import { CATEGORY_ICONS } from "./categoryIcons";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from "../../data/gallery";

const SPAN_ASPECT: Record<GalleryItem["span"], string> = {
  tall: "aspect-[3/5]",
  wide: "aspect-[4/3]",
  normal: "aspect-[4/5]",
};

const FILTER_OPTIONS = ["All", ...GALLERY_CATEGORIES] as const;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(
    () => (activeCategory === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2 rounded-2xl border border-cream-200 bg-white p-2 shadow-soft"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {FILTER_OPTIONS.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors sm:px-5 ${
                isActive ? "text-white" : "text-ink-700 hover:text-pitch-900"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  className="absolute inset-0 rounded-xl bg-gold-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, i) => (
          <Reveal key={item.id} direction="up" delay={(i % 6) * 0.05} className="mb-5 break-inside-avoid">
            <TiltCard maxTilt={6}>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className={`block w-full overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift ${SPAN_ASPECT[item.span]}`}
                aria-label={`View ${item.title}`}
              >
                <PlaceholderTile icon={CATEGORY_ICONS[item.category]} label={item.title} category={item.category} className="h-full w-full" />
              </button>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
