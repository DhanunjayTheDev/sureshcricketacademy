/**
 * Verified highlights only - deliberately not numeric counters, since no
 * specific record counts (years, students trained, matches) have been
 * confirmed. Presented as fact badges rather than invented statistics.
 */
export interface HighlightItem {
  label: string;
}

export const HIGHLIGHTS: HighlightItem[] = [
  { label: "Former Ranji Trophy Player" },
  { label: "Represented Andhra Pradesh" },
  { label: "Represented Railways" },
  { label: "Mentored an Indian International Player" },
];
