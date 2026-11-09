export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description?: string;
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
