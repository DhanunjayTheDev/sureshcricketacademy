export type GalleryCategory =
  | "Training"
  | "Coach"
  | "Students"
  | "Matches"
  | "Events"
  | "Awards";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  /** Real photo not yet supplied - rendered as a styled placeholder tile until provided. */
  span: "tall" | "wide" | "normal";
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Training",
  "Coach",
  "Students",
  "Matches",
  "Events",
  "Awards",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", category: "Training", title: "Net Practice Session", span: "tall" },
  { id: "g2", category: "Coach", title: "Coach Suresh at the Nets", span: "normal" },
  { id: "g3", category: "Students", title: "Young Cricketers in Training", span: "normal" },
  { id: "g4", category: "Matches", title: "Practice Match Action", span: "wide" },
  { id: "g5", category: "Training", title: "Batting Drills", span: "normal" },
  { id: "g6", category: "Events", title: "Academy Event", span: "normal" },
  { id: "g7", category: "Awards", title: "Recognition & Achievements", span: "tall" },
  { id: "g8", category: "Students", title: "Fielding Practice", span: "normal" },
  { id: "g9", category: "Matches", title: "Match Day", span: "normal" },
  { id: "g10", category: "Coach", title: "One-on-One Coaching", span: "wide" },
  { id: "g11", category: "Training", title: "Fitness Session", span: "normal" },
  { id: "g12", category: "Events", title: "Tournament Preparation", span: "normal" },
];
