export const WHATSAPP_NUMBER = "919403825153";

export type EventCategory =
  | "Kids' Birthdays (Ages 8–16)"
  | "Weddings & Sangeets"
  | "Corporate & College Fests"
  | "Cafes & Hangouts";

export type QuoteEventType =
  | "Birthday Party"
  | "Wedding / Sangeet"
  | "Corporate"
  | "Cafe Pop-Up / Venue Partnership";

export type PackageTierId = "starter" | "signature" | "grand" | "custom";

export type VenueType = "Home" | "Clubhouse" | "Banquet Hall" | "Lawn";

export type CityArea =
  | "Pune (Koregaon Park / Baner / Wakad / Kothrud)"
  | "Mumbai (Bandra / Andheri / Powai / South Mumbai)"
  | "Navi Mumbai & Thane"
  | "Lonavala & Aamby Valley Resorts";

export interface PackageTier {
  id: PackageTierId;
  name: string;
  shortLabel: string;
  priceInr: string;
  numericPrice: number | null;
  duration: string;
  headsets: string;
  headsetCount: number;
  hoursCount: number;
  displaySpec: string;
  operators: string;
  hygieneSpec: string;
  highlightFeature: string;
  isPopular?: boolean;
  features: string[];
}

export interface QuoteFormState {
  eventType: QuoteEventType;
  packageTier: PackageTierId;
  eventDate: string;
  cityArea: CityArea;
  customNeighborhood: string;
  venueType: VenueType;
  guestCountEstimate: number;
  hostName: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof QuoteFormState, string>>;
}

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: "starter",
    name: "Starter Home Party",
    shortLabel: "₹7,999 Starter",
    priceInr: "₹7,999",
    numericPrice: 7999,
    duration: "2.5 Hours",
    headsets: "1 Wireless VR Headset",
    headsetCount: 1,
    hoursCount: 2.5,
    displaySpec: "Venue TV Casting or Laptop Stream (TV Not Included)",
    operators: "1 Dedicated Operator",
    hygieneSpec: "Sanitized Silicone Cushions Between Turns",
    highlightFeature: "Ideal for intimate living room birthdays (15–25 guests)",
    features: [
      "2.5 Hours of Non-Stop Guided VR Play",
      "1 Wireless Meta Quest VR Headset",
      "1 Trained On-Site Operator",
      "TV Not Included — Live Casting to Your Venue TV or Operator Laptop",
      "Antibacterial Silicone Cushion Wipe-Down Between Every Turn",
    ],
  },
  {
    id: "signature",
    name: "Signature Party Stall",
    shortLabel: "₹13,500 Signature",
    priceInr: "₹13,500",
    numericPrice: 13500,
    duration: "3 Hours",
    headsets: "2 Wireless VR Headsets",
    headsetCount: 2,
    hoursCount: 3,
    displaySpec: "Venue TV Casting or Laptop Stream (TV Not Included)",
    operators: "1 Dedicated Operator",
    hygieneSpec: "Sanitized Silicone Cushions Between Turns",
    highlightFeature: "Dual-headset setup with physical wooden plank prop & live streaming",
    isPopular: true,
    features: [
      "3 Hours of High-Energy Dual-Headset Arena",
      "2 Wireless Meta Quest VR Headsets",
      "TV Not Included — Uses Your Venue TV or Our Laptop Streaming Setup",
      "1 Trained On-Site Operator & Queue Manager",
      "Physical Wooden Plank Prop + Sanitized Silicone Face Covers",
    ],
  },
  {
    id: "grand",
    name: "Grand Wedding & Sangeet Arena",
    shortLabel: "₹24,999 Grand Wedding",
    priceInr: "₹24,999",
    numericPrice: 24999,
    duration: "4 Hours",
    headsets: "4 Wireless VR Headsets",
    headsetCount: 4,
    hoursCount: 4,
    displaySpec: "Venue TV / LED Wall Casting or Laptop Stream (TV Not Included)",
    operators: "2 Dedicated Operators",
    hygieneSpec: "Sanitized Silicone Cushions + Dedicated Wipe Station",
    highlightFeature: "High-throughput 4-headset zone for large wedding & Sangeet crowds",
    features: [
      "4 Hours Full-Scale Celebration VR Arena",
      "4 Wireless Meta Quest VR Headsets",
      "TV Not Included — Streams to Venue TV / LED Screen or Operator Laptops",
      "2 Dedicated Uniformed Operators for Fast Guest Turnover",
      "Theme-Friendly Booth Setup & Outfit-Safe Experience Curation",
    ],
  },
  {
    id: "custom",
    name: "Custom / B2B Partner Stall",
    shortLabel: "Custom / B2B",
    priceInr: "Custom Quote",
    numericPrice: null,
    duration: "Flexible / Multi-Day",
    headsets: "2 to 8+ Wireless Headsets",
    headsetCount: 4,
    hoursCount: 5,
    displaySpec: "Venue Display Integration or Laptop Streaming (TV Not Included)",
    operators: "2–4 Dedicated Operators",
    hygieneSpec: "Commercial High-Throughput Sanitization Kit",
    highlightFeature: "Net B2B agency rates, zero-cost weekend cafe pop-ups, or multi-day fests",
    features: [
      "Net Partner Rates for Wedding Planners & Event Agencies",
      "Zero-Cost Weekend Cafe Pop-Ups (₹150/play) & F&B Combos",
      "TV Not Included — Connects to Venue Screens or Uses Laptop Streaming",
      "Multi-Day Lonavala Destination Wedding Packages",
    ],
  },
];

export type ExperienceFilter = "all" | "weddings" | "kids" | "thrills";

export interface VRExperience {
  id: string;
  title: string;
  subtitle: string;
  sessionLength: string;
  thrillLevel: "Moderate" | "High" | "Extreme" | "Gentle-to-High";
  ageGroup: string;
  categoryTags: ExperienceFilter[];
  description: string;
  outfitSafe: boolean;
  crowdFactor: string;
  imagePath?: string;
}

export const VR_EXPERIENCES: VRExperience[] = [
  {
    id: "ib-cricket",
    title: "iB Cricket",
    subtitle: "Crowd-Favorite Stadium Cricket for Weddings & Adults",
    sessionLength: "3–4 mins (1 Over)",
    thrillLevel: "High",
    ageGroup: "Ages 8 to 70+",
    categoryTags: ["all", "weddings", "kids"],
    description:
      "Step into a roaring 60,000-seat stadium and smash sixes with a custom weighted cricket bat controller. Friends and family watch every ball live on your venue TV or our laptop stream.",
    outfitSafe: true,
    crowdFactor: "Spectators cheer every boundary via venue TV or laptop stream",
    imagePath: "/src/assets/images/vr_cricket_sangeet_1795614654006.jpg",
  },
  {
    id: "richies-plank",
    title: "Richie's Plank Experience",
    subtitle: "Walk a Skyscraper Plank — Guaranteed Crowd Reactions",
    sessionLength: "3 mins",
    thrillLevel: "Extreme",
    ageGroup: "Ages 9+ & Adults",
    categoryTags: ["all", "thrills", "weddings"],
    description:
      "Take a virtual elevator 80 stories up and step onto a real physical wooden plank laid on the venue floor. Uncles, cousins, and teens watching the live feed make this the loudest photo-op of the night.",
    outfitSafe: true,
    crowdFactor: "Number-one smartphone video magnet at parties & celebrations",
    imagePath: "/src/assets/images/vr_plank_experience_1795614653715.jpg",
  },
  {
    id: "beat-saber",
    title: "Beat Saber",
    subtitle: "High-Energy Rhythm Slicing — Great for Kids & Teens",
    sessionLength: "3 mins (1 Song Track)",
    thrillLevel: "High",
    ageGroup: "Ages 8–35",
    categoryTags: ["all", "kids"],
    description:
      "Slash glowing rhythm blocks to high-tempo beats using dual light-sabers. Instant pick-up-and-play controls with live gameplay streamed for friends watching next in line.",
    outfitSafe: true,
    crowdFactor: "Fast-paced rhythm action for kids and teens",
    imagePath: "/src/assets/images/vr_rhythm_arcade_1795614659063.jpg",
  },
  {
    id: "first-encounters",
    title: "First Encounters (Mixed Reality)",
    subtitle: "Aliens Burst Through the Real Party Room Walls",
    sessionLength: "3–4 mins",
    thrillLevel: "Moderate",
    ageGroup: "Ages 7–16 & First-Timers",
    categoryTags: ["all", "kids"],
    description:
      "Uses full-color passthrough cameras so players still see the real banquet hall or living room while colourful space puffs break through the actual walls and ceiling around them.",
    outfitSafe: true,
    crowdFactor: "Zero motion sickness — ideal for first-time VR players",
  },
  {
    id: "fruit-ninja-vr",
    title: "Fruit Ninja VR",
    subtitle: "Zero-Tutorial Arcade Fun for Younger Kids",
    sessionLength: "3 mins (Arcade Mode)",
    thrillLevel: "Moderate",
    ageGroup: "Ages 6–14",
    categoryTags: ["all", "kids"],
    description:
      "Dual-katana fruit slicing in 360 degrees. Requires zero button presses—just swing both hands to slice flying watermelons and combos while dodging bombs.",
    outfitSafe: true,
    crowdFactor: "Instant success for younger birthday guests",
  },
  {
    id: "epic-roller-coasters",
    title: "Epic Roller Coasters",
    subtitle: "Seated or Standing 360° Thrill Ride for All Ages",
    sessionLength: "3 mins",
    thrillLevel: "Gentle-to-High",
    ageGroup: "All Ages (6 to 65+)",
    categoryTags: ["all", "thrills", "weddings"],
    description:
      "Can be played comfortably seated on a chair—making it 100% accessible for elders, guests in heavy wedding sarees or heels, and kids who want a dinosaur-canyon coaster ride.",
    outfitSafe: true,
    crowdFactor: "Hilarious seated reactions for family members of all ages",
  },
];

export function filterExperiences(
  experiences: VRExperience[],
  filter: ExperienceFilter
): VRExperience[] {
  if (filter === "all") {
    return experiences;
  }
  return experiences.filter((exp) => exp.categoryTags.includes(filter));
}

export function calculateEstimatedTurns(packageTierId: PackageTierId): {
  turnsPerHour: number;
  totalTurns: number;
} {
  const pkg =
    PACKAGE_TIERS.find((tier) => tier.id === packageTierId) ?? PACKAGE_TIERS[1];
  // With 3-4 minute turns + 1 min cushion sanitization wipe (~15 turns/hour per headset)
  const turnsPerHour = pkg.headsetCount * 15;
  const totalTurns = Math.round(turnsPerHour * pkg.hoursCount);
  return { turnsPerHour, totalTurns };
}

export function validateQuoteForm(state: QuoteFormState): ValidationResult {
  const errors: Partial<Record<keyof QuoteFormState, string>> = {};

  if (!state.eventDate || state.eventDate.trim() === "") {
    errors.eventDate = "Please select your preferred event date.";
  }

  if (
    Number.isNaN(state.guestCountEstimate) ||
    state.guestCountEstimate < 5 ||
    state.guestCountEstimate > 2000
  ) {
    errors.guestCountEstimate = "Please enter an estimated guest count between 5 and 2,000.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppMessage(state: QuoteFormState): string {
  const selectedTier =
    PACKAGE_TIERS.find((t) => t.id === state.packageTier) ?? PACKAGE_TIERS[1];
  const throughput = calculateEstimatedTurns(state.packageTier);
  const locationDetail = state.customNeighborhood.trim()
    ? `${state.cityArea} (${state.customNeighborhood.trim()})`
    : state.cityArea;
  const greetingName = state.hostName.trim()
    ? `Hi NexaVR Events! I'm ${state.hostName.trim()}.`
    : "Hi NexaVR Events!";

  const lines = [
    greetingName,
    "I'd like to check availability & get an instant quote for a VR Stall:",
    "",
    `• Event Type: ${state.eventType}`,
    `• Package Tier: ${selectedTier.name} (${selectedTier.priceInr})`,
    `• Event Date: ${state.eventDate || "Flexible / TBD"}`,
    `• City / Area: ${locationDetail}`,
    `• Venue Type: ${state.venueType}`,
    `• Estimated Players: ~${state.guestCountEstimate} guests (Up to ${throughput.totalTurns} VR turns capacity)`,
    "",
    "Please let me know if this date slot is available!",
  ];

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  message: string,
  phone: string = WHATSAPP_NUMBER
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
