import { Product } from '../types/product';

export const gearwearProducts: Product[] = [
  // --- GLOVES SUB-CATEGORY (HIGHLIGHTED) ---
  {
    id: "gearwear-gl-001",
    name: "AFANDI Tactical Duty Operator Gloves",
    slug: "tactical-duty-operator-gloves",
    category: "gearwear",
    subCategory: "gloves",
    subCategoryTitle: "Tactical & Duty Gloves",
    shortDescription: "Heavy-duty technical duty gloves engineered with carbon-reinforced knuckle shield, synthetic grip palm, and brass lanyard grommet.",
    longDescription: "Engineered for uncompromising hand protection, tactility, and operational endurance. The AFANDI Tactical Duty Operator Gloves feature high-density molded knuckle defense, double-layer silicone-treated grip palms, and breathable neoprene wrist closures. Designed for tactical professionals, outdoor expeditions, and demanding mechanical tasks.",
    material: "Reinforced Clarino™ Synthetic Suede, Carbon Composite Knuckle Shell, Neoprene Cuff",
    sizes: ["S (7)", "M (8)", "L (9)", "XL (10)", "2XL (11)"],
    colors: ["Obsidian Tactical", "Graphite & Bronze Stitch", "Desert Sand"],
    features: [
      "Carbon Composite Ergonomic Knuckle Impact Shield",
      "Double-Reinforced Palm Panels with Micro-Grip Traction",
      "Touchscreen-Compatible Thumb & Index Finger Tips",
      "Heavy-Duty Solid Brass Lanyard Grommet & Quick Clip",
      "Adjustable Hook-and-Loop Neoprene Wrist Lockdown",
      "Breathable Fourchettes Between Fingers for Sweat Reduction"
    ],
    productCode: "AF-GW-GL-01",
    additionalNotes: "Tested and rated to EN 388 Level 4 Abrasion & Level 2 Cut Resistance.",
    coverImage: "/images/gearwear/tactical_gloves.jpg",
    gallery: [
      "/images/gearwear/tactical_gloves.jpg",
      "/images/gearwear/leather_craft_gloves.jpg",
      "/images/gearwear/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Protection Standard": "EN 388:2016 (4121X)",
      "Palm Material": "Clarino™ 0.8mm Synthetic Leather",
      "Knuckle Shield": "High-Impact Carbon Composite",
      "Closure": "Precision Molded TPR with Neoprene",
      "Weight": "165g per pair (Size L)"
    }
  },
  {
    id: "gearwear-gl-002",
    name: "AFANDI Reinforced Cowhide Craftsmanship Work Gloves",
    slug: "reinforced-cowhide-craftsmanship-work-gloves",
    category: "gearwear",
    subCategory: "gloves",
    subCategoryTitle: "Leather Work Gloves",
    shortDescription: "Premium full-grain cowhide artisan work gloves with keystone thumb, gathered elastic wrist, and heat-resistant Kevlar® stitching.",
    longDescription: "Crafted for traditional craftsmanship, industrial fabrication, and rugged field durability. The AFANDI Reinforced Cowhide Work Gloves are crafted from selected top-grain cowhide leather with a supple wax treatment that molds to the wearer's hand over time. Double-stitched with Kevlar® thread across high-stress palm and thumb zones.",
    material: "100% Top-Grain Cowhide Leather with Kevlar® Heat-Resistant Threading",
    sizes: ["M (8)", "L (9)", "XL (10)", "2XL (11)"],
    colors: ["Saddle Amber", "Warm Whiskey", "Aged Tan"],
    features: [
      "100% Selected Full-Grain Cowhide Leather",
      "Reinforced Gunn Cut Pattern with Keystone Thumb for Natural Grip",
      "Heavy-Duty Kevlar® Thread Stitching on High-Wear Zones",
      "Shirred Elastic Wrist Cuff for Secure Fit and Debris Exclusion",
      "Embossed AFANDI Artisanal Insignia",
      "Brass D-Ring for Tool Belt Hanging"
    ],
    productCode: "AF-GW-GL-02",
    additionalNotes: "Natural moisture and light heat resistant. Condition regularly with leather balm.",
    coverImage: "/images/gearwear/leather_craft_gloves.jpg",
    gallery: [
      "/images/gearwear/leather_craft_gloves.jpg",
      "/images/gearwear/tactical_gloves.jpg",
      "/images/gearwear/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Leather Grade": "A-Grade 1.2mm Full-Grain Cowhide",
      "Stitching": "Para-Aramid Kevlar® Double Thread",
      "Thumb Cut": "Ergonomic Keystone Ergonomy",
      "Wrist Style": "Elastic Shirred Slip-On with D-Ring",
      "Weight": "180g per pair"
    }
  },
  {
    id: "gearwear-gl-003",
    name: "AFANDI All-Weather Thermal Grip Gloves",
    slug: "all-weather-thermal-grip-gloves",
    category: "gearwear",
    subCategory: "gloves",
    subCategoryTitle: "Weatherproof Grip Gloves",
    shortDescription: "Waterproof and windproof thermal outdoor gloves with 3M Thinsulate™ fleece core and honeycomb silicone grip.",
    longDescription: "Built to perform in freezing, wet conditions without sacrificing hand dexterity. The AFANDI All-Weather Thermal Grip Gloves combine a hydrophobic outer shell with an internal waterproof breathable membrane and 3M Thinsulate™ fleece insulation.",
    material: "Ripstop Softshell Membrane, 3M Thinsulate™ 100g, Silicone Honeycomb Grip",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Obsidian Black", "Olive Drab", "Slate Grey"],
    features: [
      "100% Windproof & Waterproof Breathable Membrane",
      "3M Thinsulate™ 100g Micro-Fiber Thermal Core",
      "Full-Palm Honeycomb Silicone Anti-Slip Print",
      "Extended Gaiter Cuff with One-Hand Drawcord",
      "Pre-Curved Athletic Hand Shaping"
    ],
    productCode: "AF-GW-GL-03",
    additionalNotes: "Ideal for sub-zero operations, outdoor inspection, and winter transit.",
    coverImage: "/images/gearwear/tactical_gloves.jpg",
    gallery: [
      "/images/gearwear/tactical_gloves.jpg",
      "/images/gearwear/leather_craft_gloves.jpg"
    ],
    featured: false,
    specifications: {
      "Insulation": "100g 3M Thinsulate™",
      "Temperature Rating": "Down to -15°C (5°F)",
      "Waterproofing": "10,000mm Internal Membrane",
      "Palm": "High-Tack Silicone Grid"
    }
  },
  {
    id: "gearwear-gl-004",
    name: "AFANDI Precision Mechanic Utility Gloves",
    slug: "precision-mechanic-utility-gloves",
    category: "gearwear",
    subCategory: "gloves",
    subCategoryTitle: "Precision Utility Gloves",
    shortDescription: "Ultra-dexterous breathable workshop gloves designed for high tactile sensitivity, assembly, and maintenance.",
    longDescription: "When finger dexterity and fine touch control are critical, the Precision Mechanic Glove provides second-skin feel with reliable puncture and abrasion resistance. Featuring 0.6mm micro-suede palms and flexible 4-way stretch spandex uppers.",
    material: "0.6mm Micro-Suede Palm, 4-Way Spandex, Low-Profile TPR Pull Tab",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal & Gold", "Stealth Black"],
    features: [
      "0.6mm Ultra-Thin High-Sensitivity Synthetic Palm",
      "Seamless Rolled Fingertips for Maximum Tactility",
      "4-Way Stretch Breathable Backing for Cool Operation",
      "Reinforced Thumb Saddle for Tool Handle Friction",
      "Machine Washable Synthetic Construction"
    ],
    productCode: "AF-GW-GL-04",
    additionalNotes: "Optimized for assembly lines, electrical maintenance, and equipment tuning.",
    coverImage: "/images/gearwear/leather_craft_gloves.jpg",
    gallery: [
      "/images/gearwear/leather_craft_gloves.jpg",
      "/images/gearwear/tactical_gloves.jpg"
    ],
    featured: false,
    specifications: {
      "Dexterity Rating": "Level 5 (Maximum EN 420 standard)",
      "Palm Thickness": "0.6mm Micro-Suede",
      "Weight": "95g per pair"
    }
  },

  // --- JACKETS SUB-CATEGORY ---
  {
    id: "gearwear-001",
    name: "AFANDI Atelier All-Weather Field Jacket",
    slug: "atelier-all-weather-field-jacket",
    category: "gearwear",
    subCategory: "jackets",
    subCategoryTitle: "Jackets & Outerwear",
    shortDescription: "Thoughtfully designed weatherproof field jacket in warm bronze tone with hydrophobic technical lining.",
    longDescription: "The AFANDI Atelier Field Jacket unites functional weather protection with refined minimalist style. Crafted from a 3-layer weatherproof membrane with a subtle matte texture, it features concealed magnetic storm flaps, articulated sleeve construction, and warm bronze hardware details. Designed to transition effortlessly from natural landscapes to contemporary urban environments.",
    material: "3-Layer Hydrophobic Cotton-Polyester Blend with Matte Weather Barrier",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Warm Bronze", "Ivory Stone", "Deep Charcoal"],
    features: [
      "100% Waterproof & Wind-Resistant 3-Layer Construction",
      "Concealed Storm Flap with Premium Magnetic Fasteners",
      "Ergonomic Articulated Sleeves for Unrestricted Motion",
      "Soft Microfleece-Lined Stand Collar & Handwarmer Pockets",
      "Internal Zippered Passport & Tablet Pocket",
      "Warm Bronze Anodized Zipper Pulls"
    ],
    productCode: "AF-GW-001",
    additionalNotes: "Crafted in accordance with ISO 11092 material quality standards.",
    coverImage: "/images/banners/hero.jpg",
    gallery: [
      "/images/banners/hero.jpg",
      "/images/gearwear/banner.jpg",
      "/images/company/quality.jpg"
    ],
    featured: true,
    specifications: {
      "Waterproof Rating": "20,000mm Hydrostatic Head",
      "Breathability": "15,000 g/m²/24h",
      "Weight": "720g (Size L)",
      "Care": "Gentle machine wash cold / Line dry"
    }
  },

  // --- TROUSERS / PANTS SUB-CATEGORY ---
  {
    id: "gearwear-002",
    name: "AFANDI Minimalist Cargo Trousers",
    slug: "minimalist-cargo-trousers",
    category: "gearwear",
    subCategory: "pants",
    subCategoryTitle: "Trousers & Workwear",
    shortDescription: "Refined 4-way stretch trousers with concealed utility pockets and tailored ergonomic fit.",
    longDescription: "Designed for individuals who value both clean aesthetics and practical utility. The AFANDI Minimalist Cargo Trousers incorporate 4-way flex twill with discreetly integrated low-profile side pockets. Triple-stitched seams ensure longevity without visual bulk.",
    material: "65% Fine Technical Cotton, 32% Polyester Twill, 3% Spandex Flex",
    sizes: ["30R", "32R", "34R", "36R", "38R"],
    colors: ["Soft Charcoal", "Muted Taupe", "Deep Olive"],
    features: [
      "4-Way Stretch Twill for Superior Day-Long Comfort",
      "Low-Profile Concealed Thigh Utility Pockets",
      "Water-Repellent DWR Finish",
      "Tailored Tapered Leg Silhouette",
      "Reinforced Rear Seat and Inseam Stitching"
    ],
    productCode: "AF-GW-002",
    additionalNotes: "Features hidden elastic side waistband inserts for active comfort.",
    coverImage: "/images/gearwear/pants.jpg",
    gallery: [
      "/images/gearwear/pants.jpg",
      "/images/gearwear/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Fabric Weight": "290 gsm Fine Twill",
      "Abrasion Test": "50,000 Cycles",
      "Inseam": "32 inch regular"
    }
  },

  // --- VESTS / GILET SUB-CATEGORY ---
  {
    id: "gearwear-003",
    name: "AFANDI Insulated Lightweight Gilet",
    slug: "insulated-lightweight-gilet",
    category: "gearwear",
    subCategory: "vests",
    subCategoryTitle: "Vests & Mid-Layers",
    shortDescription: "Ultra-light thermal insulation gilet with warm micro-down filling and tailored collar.",
    longDescription: "Provides essential core thermal warmth for cool autumn mornings and layered winter dressing. Filled with lightweight synthetic micro-down that retains heat while remaining slim enough to wear under structured coats.",
    material: "100% Matte Recycled Polyester Shell with Synthetic Micro-Loft Core",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ivory White", "Deep Earth Brown", "Warm Bronze"],
    features: [
      "Micro-Loft Thermal Insulation Core",
      "Sleek Collarless Profile for Effortless Layering",
      "Invisible Zippered Hand Pockets",
      "High-Drop Rear Hem for Lower Back Warmth"
    ],
    productCode: "AF-GW-003",
    additionalNotes: "Packs compactly for travel convenience.",
    coverImage: "/images/gearwear/banner.jpg",
    gallery: [
      "/images/gearwear/banner.jpg",
      "/images/banners/hero.jpg"
    ],
    featured: true,
    specifications: {
      "Weight": "310g",
      "Fill Power Equivalent": "650 FP Micro-Loft"
    }
  }
];
