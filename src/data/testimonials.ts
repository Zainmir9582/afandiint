export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    author: "PLACEHOLDER – Julian Vance",
    role: "Director of Product Design",
    company: "Vance Atelier",
    content: "SAMPLE TESTIMONIAL (REPLACE WITH REAL TESTIMONIAL). The quality of materials and attention to detail in AFANDI INTERNATIONAL products is outstanding. The field jacket balances utility and quiet luxury effortlessly.",
    rating: 5
  },
  {
    id: "test-2",
    author: "PLACEHOLDER – Claire Mercer",
    role: "Corporate Procurement Lead",
    company: "Mercer International",
    content: "SAMPLE TESTIMONIAL (REPLACE WITH REAL TESTIMONIAL). Working with AFANDI INTERNATIONAL has been a flawless experience. Product craftsmanship and packaging exceed expectations.",
    rating: 5
  },
  {
    id: "test-3",
    author: "PLACEHOLDER – David Sterling",
    role: "Founder & Creative Director",
    company: "Sterling Studio",
    content: "SAMPLE TESTIMONIAL (REPLACE WITH REAL TESTIMONIAL). The warm minimalist aesthetic and refined material choices make these gearwear and accessory collections truly stand apart.",
    rating: 5
  }
];
