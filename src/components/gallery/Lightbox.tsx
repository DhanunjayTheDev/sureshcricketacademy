import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PlaceholderTile from "../ui/PlaceholderTile";
import { CATEGORY_ICONS } from "./categoryIcons";
import type { GalleryItem } from "../../data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/50 text-cream-50 hover:bg-ink-950/70"
            >
              <X className="h-5 w-5" />
            </button>
            <PlaceholderTile
              icon={CATEGORY_ICONS[item.category]}
              label={item.title}
              category={item.category}
              className="aspect-[4/3]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
