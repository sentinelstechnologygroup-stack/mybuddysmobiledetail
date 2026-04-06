// src/config/services.jsx
export const serviceCards = [
  {
    title: "Full Service Detail",
    slug: "full-service",
    path: "/services/full-service",
    description:
      "Complete interior + exterior detailing packages. From a basic full-service to the premium Red Carpet Detail.",
    priceFrom: "From $160",
    image: "/images/services/full-service-thumbnail.png",
  },
  {
    title: "Exterior Detail",
    slug: "exterior-detail",
    path: "/services/exterior-detail",
    description:
      "Professional exterior care to make your paint shine. Hand wash, wax, and premium wax options.",
    priceFrom: "From $99",
    image: "/images/services/exterior-detail-thumbnail.png",
  },
  {
    title: "Interior Detail",
    slug: "interior-detail",
    path: "/services/interior-detail",
    description:
      "Deep interior cleaning and protection for a fresh, like-new cabin. Includes ceramic coating option.",
    priceFrom: "From $170",
    image: "/images/services/interior-detail-thumbnail.png",
  },
{
  title: "Paint Correction & Ceramic",
  slug: "paint-correction-ceramic",
  path: "/services/paint-correction-ceramic",
  description:
    "Multi-level paint correction and professional ceramic coating for lasting showroom brilliance.",
  priceFrom: "From $500",
  image: "/images/services/paint-correction-ceramic-thumbnail.png",
},
  {
    title: "À La Carte",
    slug: "a-la-carte",
    path: "/services/a-la-carte",
    description:
      "Individual add-on services — headliner cleaning, engine detail, clay bar, ozone treatment, and more.",
    priceFrom: "From $35",
    image: "/images/services/a-la-cart-thumbnail.png",
  },
];

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