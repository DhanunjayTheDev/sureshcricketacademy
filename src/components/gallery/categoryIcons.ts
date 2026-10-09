import { Dumbbell, UserSquare2, Users, Swords, PartyPopper, Trophy, type LucideIcon } from "lucide-react";
import type { GalleryCategory } from "../../data/gallery";

export const CATEGORY_ICONS: Record<GalleryCategory, LucideIcon> = {
  Training: Dumbbell,
  Coach: UserSquare2,
  Students: Users,
  Matches: Swords,
  Events: PartyPopper,
  Awards: Trophy,
};
