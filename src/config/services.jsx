import { createPageUrl } from "@/utils";

// ─── Services Hub (Services page cards) ───────────────────────────────────────
export const serviceCards = [
  {
    title: "Full Service Detail",
    slug: "full-service",
    path: createPageUrl("FullService"),
    description:
      "Complete interior + exterior detailing packages. From a basic full-service to the premium Red Carpet Detail.",
    priceFrom: "From $160",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  },
  {
    title: "Exterior Detail",
    slug: "exterior-detail",
    path: createPageUrl("ExteriorDetail"),
    description:
      "Professional exterior care to make your paint shine. Hand wash, wax, and premium wax options.",
    priceFrom: "From $99",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  },
  {
    title: "Interior Detail",
    slug: "interior-detail",
    path: createPageUrl("InteriorDetail"),
    description:
      "Deep interior cleaning and protection for a fresh, like-new cabin. Includes ceramic coating option.",
    priceFrom: "From $170",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80",
  },
  {
    title: "Paint Correction & Ceramic",
    slug: "paint-correction-ceramic",
    path: createPageUrl("PaintCorrectionCeramic"),
    description:
      "Multi-level paint correction and professional ceramic coating for lasting showroom brilliance.",
    priceFrom: "From $500",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
  },
  {
    title: "À La Carte",
    slug: "a-la-carte",
    path: createPageUrl("ALaCarte"),
    description:
      "Individual add-on services — headliner cleaning, engine detail, clay bar, ozone treatment, and more.",
    priceFrom: "From $35",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

// ─── Full Service Packages ─────────────────────────────────────────────────────
export const fullServiceTiers = [
  {
    name: "Basic Full-Service",
    pricing: [
      { type: "Sedan", price: "$160" },
      { type: "Midsize SUV", price: "$180" },
      { type: "Full Size SUV/Truck", price: "$200" },
    ],
    features: [
      "Hand wash",
      "Clean wheels and tires with tire shine",
      "Towel dry",
      "Compressed air dust removal",
      "Clean cup holders & windows",
      "Dust dashboard and door panels",
      "Vacuum carpets, seats, and trunk",
      "Dashboard conditioner",
    ],
  },
  {
    name: "Super Detail",
    featured: true,
    pricing: [
      { type: "Sedan", price: "$200" },
      { type: "Midsize SUV", price: "$230" },
      { type: "Full Size SUV/Truck", price: "$260" },
    ],
    features: [
      "Everything in Basic Full-Service",
      "Deep clean dashboard and door panels",
      "Conditioner for dashboard & all door panels",
      "Choice of carpet or seat shampoo",
    ],
  },
  {
    name: "Red Carpet Detail",
    pricing: [
      { type: "Sedan", price: "$230" },
      { type: "Midsize SUV", price: "$260" },
      { type: "Full Size SUV/Truck", price: "$290" },
    ],
    features: [
      "Everything in Super Detail",
      "Shampoo carpets, seats, and door panels",
      "Conditioner for all leather & vinyl",
      "Orbital polisher polish/wax",
    ],
  },
];

// ─── Exterior Detail Packages ─────────────────────────────────────────────────
export const exteriorTiers = [
  {
    name: "Hand Wash",
    pricing: [
      { type: "Sedan", price: "$99" },
      { type: "Midsize SUV", price: "$129" },
      { type: "Full Size SUV/Truck", price: "$159" },
    ],
    features: [
      "Hand wash with eco-safe soap",
      "Power wash wheel wells, body & wheels",
      "Towel dry",
      "Apply tire shine",
      "Wipe down wheels",
    ],
  },
  {
    name: "Wash & Wax",
    featured: true,
    pricing: [
      { type: "Sedan", price: "$125" },
      { type: "Midsize SUV", price: "$155" },
      { type: "Full Size SUV/Truck", price: "$185" },
    ],
    features: [
      "Everything in Hand Wash",
      "Wax applied with orbital polisher",
    ],
  },
  {
    name: "Wash & Premium Wax",
    pricing: [
      { type: "Sedan", price: "$140" },
      { type: "Midsize SUV", price: "$170" },
      { type: "Full Size SUV/Truck", price: "$200" },
    ],
    features: [
      "Everything in Hand Wash",
      "Hand applied wax and sealant",
    ],
  },
];

// ─── Interior Detail Packages ─────────────────────────────────────────────────
export const interiorTiers = [
  {
    name: "Interior Detail",
    pricing: [
      { type: "Sedan", price: "$170" },
      { type: "Midsize SUV", price: "$200" },
      { type: "Full Size SUV/Truck", price: "$230" },
    ],
    features: [
      "Compressed air dust removal",
      "Clean cup holders & windows",
      "Dust dashboard and door panels",
      "Vacuum carpets, seats, and trunk",
      "Shampoo carpets, seats, panels & dash",
      "Conditioner for all vinyl & leather",
    ],
  },
  {
    name: "Interior Detail + Ceramic",
    featured: true,
    pricing: [
      { type: "Sedan", price: "$340" },
      { type: "Midsize SUV", price: "$400" },
      { type: "Full Size SUV/Truck", price: "$440" },
    ],
    features: [
      "Everything in Interior Detail",
      "Ceramic coating on all vinyl & leather surfaces",
    ],
  },
];

// ─── Paint Correction Packages ────────────────────────────────────────────────
export const paintCorrectionTiers = [
  {
    name: "Level 1",
    pricing: [
      { type: "Sedan", price: "$500" },
      { type: "Midsize SUV", price: "$600" },
      { type: "Full Size SUV/Truck", price: "$700" },
    ],
    features: [
      "Hand wash + complete interior detail",
      "Iron decontamination",
      "Clay bar decontamination",
      "Wash wheel face & tire shine",
      "Finish polish",
    ],
  },
  {
    name: "Level 2",
    featured: true,
    pricing: [
      { type: "Sedan", price: "$600" },
      { type: "Midsize SUV", price: "$700" },
      { type: "Full Size SUV/Truck", price: "$800" },
    ],
    features: [
      "Everything in Level 1",
      "Medium cut compound",
      "Finish polish",
    ],
  },
  {
    name: "Level 3",
    pricing: [
      { type: "Sedan", price: "$700" },
      { type: "Midsize SUV", price: "$800" },
      { type: "Full Size SUV/Truck", price: "$900" },
    ],
    features: [
      "Everything in Level 1",
      "Heavy compound",
      "Medium compound",
      "Finish polish",
    ],
  },
  {
    name: "Level 4",
    pricing: [
      { type: "Sedan", price: "$800" },
      { type: "Midsize SUV", price: "$900" },
      { type: "Full Size SUV/Truck", price: "$1,000" },
    ],
    features: [
      "Everything in Level 1",
      "Wet sand 3000 grit",
      "Heavy compound",
      "Medium compound",
      "Finish polish",
    ],
  },
];

// ─── Ceramic Coating Packages ─────────────────────────────────────────────────
export const ceramicTiers = [
  {
    name: "1 Layer Ceramic",
    pricing: [
      { type: "Sedan", price: "$1,300" },
      { type: "Midsize SUV", price: "$1,500" },
      { type: "Full Size SUV/Truck", price: "$1,700" },
    ],
    features: [
      "Hand wash + complete interior detail",
      "1 layer ceramic on body",
      "1 layer ceramic on plastic",
      "1 layer ceramic on wheel faces",
      "1 layer ceramic on windshield",
    ],
  },
  {
    name: "2 Layer Ceramic",
    featured: true,
    pricing: [
      { type: "Sedan", price: "$1,600" },
      { type: "Midsize SUV", price: "$1,800" },
      { type: "Full Size SUV/Truck", price: "$2,000" },
    ],
    features: [
      "Hand wash + complete interior detail",
      "2 layers ceramic on body",
      "2 layers ceramic on plastic",
      "2 layers ceramic on wheel faces",
      "2 layers ceramic on windshield",
    ],
  },
  {
    name: "3 Layer Ceramic",
    pricing: [
      { type: "Sedan", price: "$1,900" },
      { type: "Midsize SUV", price: "$2,100" },
      { type: "Full Size SUV/Truck", price: "$2,300" },
    ],
    features: [
      "Hand wash + complete interior detail",
      "3 layers ceramic on body",
      "3 layers ceramic on plastic",
      "3 layers ceramic on wheel faces",
      "3 layers ceramic on windshield",
    ],
  },
  {
    name: "4 Layer Ceramic",
    pricing: [
      { type: "Sedan", price: "$2,200" },
      { type: "Midsize SUV", price: "$2,400" },
      { type: "Full Size SUV/Truck", price: "$2,600" },
    ],
    features: [
      "Hand wash + complete interior detail",
      "4 layers ceramic on body",
      "4 layers ceramic on plastic",
      "4 layers ceramic on wheel faces",
      "4 layers ceramic on windshield",
    ],
  },
];

// ─── À La Carte Items ─────────────────────────────────────────────────────────
export const aLaCarteItems = [
  {
    name: "Headliner Cleaning",
    price: "$100+",
    desc: "Headliners trap smoke, body odor, dust, and spills over time. Our proprietary method removes smells, dust, and minor stains without damage.",
  },
  {
    name: "Engine Cleaning",
    price: "$80+",
    desc: "Road grime, grease, oil, and heat buildup can affect performance. Our method gets your engine bay dust and debris free.",
  },
  {
    name: "Clay Bar Treatment",
    price: "$250+",
    desc: "Removes road grime, grease, oil, environmental fallout, and dirt from your clear coat — making it smooth. Sealed with protectants such as polish or wax.",
  },
  {
    name: "Water Spot Removal",
    price: "$699+",
    desc: "Crystallized mineral deposits from rain or sprinklers bond to your surface. We eliminate contamination and protect your vehicle.",
  },
  {
    name: "Ozone Treatment",
    price: "$125/hr",
    desc: "Neutralizes and kills odor-causing bacteria and viruses that permeate cabin filters and interior surfaces.",
  },
  {
    name: "Headlight Restoration",
    price: "$90/pair",
    desc: "Yellowed acrylic headlights create a safety hazard at night. We restore clarity so you see and are seen clearly.",
  },
  {
    name: "Plastic Trim Restoration",
    price: "$160+",
    desc: "Bring faded exterior trim back to life without costly replacement using our restoration system.",
  },
  {
    name: "Scratch Removal",
    price: "$80/panel",
    desc: "Removal of hairline scratches caused by accidental rubbing or surface transference — not deep scratches.",
  },
  {
    name: "Wheel Polish",
    price: "$35/rim",
    desc: "Removal of brake dust and grime from wheel surfaces for a clean, polished look.",
  },
  {
    name: "Odor Removal",
    price: "$70/treatment",
    desc: "Removes odors caused by smoke, pets, and everyday use.",
  },
  {
    name: "Ceramic Shield for Windows",
    price: "$99+",
    desc: "Enhanced clarity, improved safety, reduced glare, easier cleaning, and UV protection for your windows.",
  },
];