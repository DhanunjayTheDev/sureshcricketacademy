export interface Program {
  id: string;
  name: string;
  price: number;
  priceUnit: string;
  ageLabel: string;
  includes: string[];
}

export const PROGRAMS: Program[] = [
  {
    id: "kids",
    name: "Kids Program",
    price: 2500,
    priceUnit: "/ Month",
    ageLabel: "6-15 Years",
    includes: [
      "Batting",
      "Bowling",
      "Fielding",
      "Fitness",
      "Match Practice",
      "Weekly Assessment",
    ],
  },
  {
    id: "adults",
    name: "Adults Program",
    price: 4000,
    priceUnit: "/ Month",
    ageLabel: "16+",
    includes: [
      "Professional Nets",
      "Advanced Batting",
      "Advanced Bowling",
      "Fitness",
      "Match Simulation",
      "Performance Tracking",
    ],
  },
];

export interface TrainingModule {
  title: string;
  description: string;
}

export const TRAINING_MODULES: TrainingModule[] = [
  { title: "Batting", description: "Stance, footwork, shot selection, and building a solid innings." },
  { title: "Bowling", description: "Run-up, action, pace, swing, seam, and line & length discipline." },
  { title: "Fielding", description: "Ground fielding, catching, throwing accuracy, and saving runs." },
  { title: "Wicket Keeping", description: "Stance, gathering, stumpings, and reacting to pace and spin." },
  { title: "Fitness", description: "Core strength, stamina, flexibility, and injury prevention." },
  { title: "Game Awareness", description: "Reading match situations, field placements, and tactical decisions." },
  { title: "Mental Strength", description: "Handling pressure, focus, and a positive competitive mindset." },
  { title: "Leadership", description: "Communication, captaincy skills, and supporting teammates." },
];

export const COACHING_PROCESS: string[] = [
  "Admission",
  "Skill Assessment",
  "Batch Allocation",
  "Training",
  "Weekly Practice Match",
  "Monthly Evaluation",
  "Tournament Preparation",
];

export const FACILITIES: string[] = [
  "Practice Nets",
  "Open Practice Ground",
  "Cricket Equipment",
  "Fitness Sessions",
  "Match Practice",
  "Drinking Water",
  "Parking",
];

export const WHY_CHOOSE_US: string[] = [
  "Former Ranji Player",
  "Professional Coaching",
  "Individual Attention",
  "Fitness Training",
  "Modern Coaching Techniques",
  "Match Practice",
  "Tournament Preparation",
  "Player Development",
  "Safe Environment",
  "Career Guidance",
];
