export interface CompanyStat {
  value: string;
  label: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QualityStandard {
  title: string;
  code: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  positioning: string;
  foundedYear: string;
  headquarters: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  googleMapsEmbedUrl: string;
  stats: CompanyStat[];
  features: FeatureItem[];
  qualityStandards: QualityStandard[];
}

export const companyInfo: CompanyInfo = {
  name: "AFANDI INTERNATIONAL",
  slogan: "Quality in Every Detail. Excellence in Every Product.",
  positioning: "Premium Manufacturing & Product Collections.",
  foundedYear: "2002",
  headquarters: "AFANDI Atelier & Design Studio",
  phone: "+1 (800) 555-2326",
  email: "contact@afandi-international.com",
  whatsapp: "+18005552326",
  address: "Building 04, AFANDI Studio Complex, Atelier Avenue, Suite 400",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4ce1800567%3A0x3e206385d0642301!2sAFANDI%20INTERNATIONAL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",

  stats: [
    { value: "24+", label: "Years of Design Heritage", description: "Crafting technical apparel & everyday carry collections" },
    { value: "100%", label: "Quality Inspected", description: "Every product batch undergoes 14-point material and seam inspection" },
    { value: "35+", label: "International Markets", description: "Supplying discerning corporate and outdoor partners globally" },
    { value: "ISO 9001", label: "Certified Production", description: "Adhering to international manufacturing and quality standards" }
  ],

  features: [
    {
      id: "feat-1",
      title: "Quality Materials",
      description: "Carefully selected technical cottons, Australian Merino wool blends, 1000D Cordura® nylon, and YKK® hardware.",
      iconName: "ShieldCheck"
    },
    {
      id: "feat-2",
      title: "Thoughtful Design",
      description: "Ergonomic body mapping, clean minimal silhouettes, and intentional proportions tailored for modern daily life.",
      iconName: "Compass"
    },
    {
      id: "feat-3",
      title: "Product Innovation",
      description: "In-house development of weatherproof textile laminates, concealed storage solutions, and reinforced strain points.",
      iconName: "Sparkles"
    },
    {
      id: "feat-4",
      title: "Attention to Detail",
      description: "Precision stitching, clean internal finishing, custom bronze hardware accents, and refined seam seals.",
      iconName: "Maximize"
    },
    {
      id: "feat-5",
      title: "Functional Excellence",
      description: "Unrestricted physical movement, weather protection, and effortless transition from outdoor activity to urban settings.",
      iconName: "Feather"
    },
    {
      id: "feat-6",
      title: "Customer Commitment",
      description: "Dedicated corporate representatives offering personal service, customized B2B inquiries, and reliable order fulfillment.",
      iconName: "HeartHandshake"
    }
  ],

  qualityStandards: [
    {
      title: "Quality Management System",
      code: "ISO 9001:2015 Certified",
      description: "Comprehensive quality system governing material intake, processing, and final product release."
    },
    {
      title: "Ecological Textile Standard",
      code: "OEKO-TEX® Standard 100",
      description: "Guarantees that all yarns, dyes, and finishings are completely free from harmful substances."
    },
    {
      title: "Weather Performance Standards",
      code: "ISO 11092 Thermal & Hydrophobic",
      description: "Tested water resistance, thermal retention, and moisture vapor permeability standards."
    },
    {
      title: "Material Durability Norms",
      code: "60,000+ Martindale Abrasion Test",
      description: "Exceeding industrial wear and tear standards for long-lasting structural performance."
    }
  ]
};
