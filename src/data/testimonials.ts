export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: "Student" | "Parent" | "Success Story";
}

/**
 * PLACEHOLDER content - no real reviews have been collected yet.
 * Each entry is intentionally marked so it is replaced with genuine
 * feedback before launch, and never mistaken for a real endorsement.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "[Placeholder - add a real student testimonial about their training experience here.]",
    name: "Student Name",
    role: "Student",
  },
  {
    id: "t2",
    quote: "[Placeholder - add a real parent testimonial about their child's progress here.]",
    name: "Parent Name",
    role: "Parent",
  },
  {
    id: "t3",
    quote: "[Placeholder - add a real success story or milestone achieved by a student here.]",
    name: "Academy Student",
    role: "Success Story",
  },
];
