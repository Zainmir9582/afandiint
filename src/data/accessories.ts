import { Product } from '../types/product';

export const accessoriesProducts: Product[] = [
  // --- WALLETS & POUCHES SUB-CATEGORY ---
  {
    id: "accessories-wl-001",
    name: "AFANDI Full-Grain Leather EDC Bifold Wallet",
    slug: "full-grain-leather-edc-bifold-wallet",
    category: "accessories",
    subCategory: "wallets",
    subCategoryTitle: "Wallets & Leather Pouches",
    shortDescription: "Handcrafted vegetable-tanned Italian leather wallet with RFID blocking layer and 8 card slots.",
    longDescription: "Engineered for minimalist luxury and enduring utility. The AFANDI Full-Grain Leather EDC Bifold Wallet is crafted from rich saddle-tan vegetable-tanned leather that develops an exquisite golden patina with age. Includes an integrated ultra-thin RFID shielding layer to secure credit cards and digital credentials against unauthorized scans.",
    material: "Full-Grain Italian Vegetable-Tanned Cowhide Leather with RFID Shield Core",
    sizes: ["One Size (11cm x 9cm)"],
    colors: ["Saddle Tan", "Cognac Brown", "Obsidian Black"],
    features: [
      "Full-Grain Vegetable-Tanned Tuscan Cowhide",
      "8 Dedicated Precision Die-Cut Card Slots",
      "Full-Length Cash & Currency Compartment",
      "Integrated Military-Grade RFID Frequency Shielding",
      "Hand-Burnished and Waxed Edges for Long Life",
      "Subtle Debossed AFANDI Maker's Stamp"
    ],
    productCode: "AF-AC-WL-01",
    additionalNotes: "Shipped in custom luxury presentation gift packaging with certificate of leather origin.",
    coverImage: "/images/accessories/edc_wallet.jpg",
    gallery: [
      "/images/accessories/edc_wallet.jpg",
      "/images/accessories/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Leather Type": "Vegetable-Tanned 1.4mm Italian Cowhide",
      "Dimensions": "11.0 cm x 9.0 cm x 1.2 cm closed",
      "Card Capacity": "8-12 Cards + Paper Bills",
      "RFID Shield": "13.56 MHz & UHF Frequency Block"
    }
  },
  {
    id: "accessories-003",
    name: "AFANDI Leather Tech & Document Folio Pouch",
    slug: "leather-tech-document-folio-pouch",
    category: "accessories",
    subCategory: "wallets",
    subCategoryTitle: "Wallets & Leather Pouches",
    shortDescription: "Slim padded document and tablet pouch in full-grain leather with soft suede interior.",
    longDescription: "Keep tablets, notebooks, passports, and charging cables organized in quiet luxury. Crafted from supple full-grain leather that develops a rich patina over time.",
    material: "100% Full-Grain Cowhide Leather with Micro-Suede Lining",
    sizes: ["One Size (11\" x 8.5\")"],
    colors: ["Warm Bronze", "Deep Earth", "Off White"],
    features: [
      "Fits 11-inch iPad Pro or A5 Notebooks",
      "Soft Scratch-Resistant Micro-Suede Interior",
      "Smooth YKK® Metal Zipper with Leather Puller",
      "External Quick-Access Slip Pocket"
    ],
    productCode: "AF-AC-003",
    additionalNotes: "Hand-finished edge painting.",
    coverImage: "/images/accessories/banner.jpg",
    gallery: [
      "/images/accessories/banner.jpg",
      "/images/accessories/edc_wallet.jpg"
    ],
    featured: true,
    specifications: {
      "Dimensions": "28cm x 21cm x 2cm",
      "Weight": "240g"
    }
  },

  // --- BAGS & BACKPACKS SUB-CATEGORY ---
  {
    id: "accessories-001",
    name: "AFANDI Atelier Leather & Canvas Weekender Backpack",
    slug: "atelier-leather-canvas-weekender-backpack",
    category: "accessories",
    subCategory: "bags",
    subCategoryTitle: "Bags & Carry Solutions",
    shortDescription: "30L luxury carry backpack combining heavy waxed canvas, full-grain leather trim, and padded tech storage.",
    longDescription: "Crafted for discerning travelers and daily professionals. The AFANDI Atelier Backpack pairs water-resistant waxed cotton canvas with vegetable-tanned full-grain leather accents and custom warm bronze hardware. Features a padded 16-inch laptop compartment and intuitive internal organizers.",
    material: "Waxed Heavyweight Cotton Canvas & Full-Grain Italian Leather with Warm Bronze Hardware",
    sizes: ["One Size (30L)"],
    colors: ["Deep Earth Brown", "Warm Taupe & Bronze", "Off White & Charcoal"],
    features: [
      "30 Liter Capacity with Dedicated Laptop Sleeve (Up to 16\")",
      "Water-Resistant Waxed Canvas Exterior Shell",
      "Full-Grain Vegetable-Tanned Leather Straps & Base",
      "Breathable Padded Back Panel for Long-Haul Comfort",
      "Custom Warm Bronze Metal Buckles and Zipper Hardware",
      "Luggage Pass-Through Sleeve for Travel Suitcases"
    ],
    productCode: "AF-AC-001",
    additionalNotes: "Includes a protective cotton dust bag for long-term storage.",
    coverImage: "/images/accessories/backpack.jpg",
    gallery: [
      "/images/accessories/backpack.jpg",
      "/images/accessories/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Capacity": "30 Liters",
      "Dimensions": "48cm x 32cm x 20cm",
      "Weight": "1.1 kg",
      "Hardware": "Custom Warm Bronze Alloy"
    }
  },
  {
    id: "accessories-bg-002",
    name: "AFANDI Modular Everyday Tactical Daypack",
    slug: "modular-everyday-tactical-daypack",
    category: "accessories",
    subCategory: "bags",
    subCategoryTitle: "Bags & Carry Solutions",
    shortDescription: "22L streamlined weather-resistant ballistic nylon daypack with modular attachment webbing.",
    longDescription: "Designed for daily urban commuting, field operations, and versatile utility. Constructed from ultra-tough 1000D Cordura® ballistic nylon with discreet laser-cut attachment slots and storm-resistant taped zippers.",
    material: "1000D Cordura® Ballistic Nylon, Hypalon Reinforcements, YKK® AquaGuard® Zippers",
    sizes: ["22L Standard"],
    colors: ["Obsidian Slate", "Coyote Amber", "Field Green"],
    features: [
      "22L Streamlined Ergonomic Daypack Profile",
      "Laser-Cut Low-Profile Modular Attachment Grid",
      "Weatherproof YKK® AquaGuard® Zippers",
      "Dedicated Suspended 15\" Laptop Vault",
      "Removable Sternum Strap with Magnetic Clasp"
    ],
    productCode: "AF-AC-BG-02",
    additionalNotes: "Coated with fluorocarbon-free hydrophobic finish.",
    coverImage: "/images/accessories/banner.jpg",
    gallery: [
      "/images/accessories/banner.jpg",
      "/images/accessories/backpack.jpg"
    ],
    featured: false,
    specifications: {
      "Capacity": "22 Liters",
      "Fabric": "1000D Cordura® Hydrophobic Nylon",
      "Weight": "890g"
    }
  },

  // --- BELTS & WEBBING SUB-CATEGORY ---
  {
    id: "accessories-002",
    name: "AFANDI Refined Woven Webbing Belt",
    slug: "refined-woven-webbing-belt",
    category: "accessories",
    subCategory: "belts",
    subCategoryTitle: "Belts & Webbing",
    shortDescription: "High-density woven belt with brushed bronze buckle and full-grain leather tip.",
    longDescription: "An essential everyday accessory that balances casual versatility with refined craftsmanship. Built with high-density elasticated webbing that stretches subtly with movement, paired with a solid bronze buckle.",
    material: "High-Density Nylon-Cotton Elastic Webbing with Solid Bronze Buckle",
    sizes: ["S (30-32\")", "M (33-35\")", "L (36-38\")", "XL (39-42\")"],
    colors: ["Warm Bronze & Olive", "Charcoal & Ivory", "Muted Taupe"],
    features: [
      "Brushed Solid Bronze Buckle",
      "Full-Grain Leather Tip & Keeper Loop",
      "Subtle Stretch Webbing for All-Day Comfort",
      "Infinitely Adjustable Holeless Closure"
    ],
    productCode: "AF-AC-002",
    additionalNotes: "Delivered in a signature AFANDI gift presentation box.",
    coverImage: "/images/accessories/banner.jpg",
    gallery: [
      "/images/accessories/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Belt Width": "3.5 cm (1.38 inches)",
      "Buckle": "Brushed Solid Bronze Alloy"
    }
  },
  {
    id: "accessories-bt-002",
    name: "AFANDI Heavy Duty Cobra-Style Tactical Riggers Belt",
    slug: "heavy-duty-cobra-style-tactical-riggers-belt",
    category: "accessories",
    subCategory: "belts",
    subCategoryTitle: "Belts & Webbing",
    shortDescription: "Reinforced 45mm dual-layer nylon duty belt with quick-release forged alloy buckle.",
    longDescription: "Engineered for heavy-duty workwear, holster carriage, and tool pouch anchoring. Rigid internal stiffener prevents sagging under load while maintaining all-day lumbar support.",
    material: "Dual-Layer Type 13 Mil-Spec Nylon Webbing, Forged Quick-Release Alloy Buckle",
    sizes: ["M (32-36\")", "L (36-40\")", "XL (40-44\")"],
    colors: ["Tactical Black", "Desert Khaki", "Ranger Green"],
    features: [
      "Instant Click-To-Lock Quick Release Mechanism",
      "Double-Layer Scuba Webbing Core for Vertical Rigidity",
      "Tensile Strength Rated to 2,000 lbs",
      "Smooth Matte Anodized Scratch-Resistant Finish"
    ],
    productCode: "AF-AC-BT-02",
    additionalNotes: "Compatible with standard belt loops and MOLLE attachments.",
    coverImage: "/images/accessories/banner.jpg",
    gallery: [
      "/images/accessories/banner.jpg"
    ],
    featured: false,
    specifications: {
      "Belt Width": "45 mm (1.75 inches)",
      "Buckle Mechanism": "Dual-Pin Forged Quick-Release",
      "Tensile Rating": "9 kN (2,000 lbf)"
    }
  },

  // --- HARDWARE & EDC SUB-CATEGORY ---
  {
    id: "accessories-hw-001",
    name: "AFANDI Solid Bronze Carabiner & Brass Key Hook",
    slug: "solid-bronze-carabiner-brass-key-hook",
    category: "accessories",
    subCategory: "hardware",
    subCategoryTitle: "Hardware & Keyholders",
    shortDescription: "Precision CNC-machined solid bronze spring carabiner with leather lanyard and brass keyrings.",
    longDescription: "Precision crafted everyday carry hardware. Machined from solid marine-grade bronze with stainless steel spring wire gate. Accompanying vegetable-tanned bridle leather loop allows effortless belt loop attachment.",
    material: "Solid Marine Bronze C65500, Stainless Steel Gate, Bridle Leather Loop",
    sizes: ["One Size (8.5cm total length)"],
    colors: ["Brushed Antique Bronze", "Polished Natural Brass"],
    features: [
      "Precision CNC-Milled Solid Marine Bronze Construction",
      "High-Tension Stainless Steel Spring Wire Gate",
      "Vegetable-Tanned Saddle Leather Belt Tab with Snap",
      "Supplied with 3 Heavy Solid Brass Split Rings",
      "Natural Patina Evolution with Daily Handling"
    ],
    productCode: "AF-AC-HW-01",
    additionalNotes: "Non-magnetic and highly resistant to salt atmosphere corrosion.",
    coverImage: "/images/accessories/edc_wallet.jpg",
    gallery: [
      "/images/accessories/edc_wallet.jpg",
      "/images/accessories/banner.jpg"
    ],
    featured: true,
    specifications: {
      "Material": "Solid Marine Bronze",
      "Total Weight": "68 grams",
      "Gate Clearance": "12 mm"
    }
  }
];
