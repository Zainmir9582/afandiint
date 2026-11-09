export type ProductCategory = 'gearwear' | 'accessories';

export type GearwearSubCategory = 'gloves' | 'jackets' | 'pants' | 'vests';
export type AccessoriesSubCategory = 'bags' | 'belts' | 'wallets' | 'hardware';
export type SubCategory = GearwearSubCategory | AccessoriesSubCategory;

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subCategory?: SubCategory;
  subCategoryTitle?: string;
  shortDescription: string;
  longDescription: string;
  material: string;
  sizes: string[];
  colors: string[];
  features: string[];
  productCode: string;
  additionalNotes: string;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
  specifications?: Record<string, string>;
}

export interface ProductFilterState {
  searchQuery: string;
  category: 'all' | ProductCategory;
  subCategory?: string;
  selectedSize: string;
  selectedColor: string;
  sortBy: 'featured' | 'name-asc' | 'name-desc' | 'code';
}
