import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gearwearProducts } from '../data/gearwear';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilterSearch } from '../components/products/ProductFilterSearch';
import { ProductFilterState } from '../types/product';
import { 
  ShieldCheck, 
  PackageSearch, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layers, 
  Pocket,
  CheckCircle2,
  SlidersHorizontal,
  Home,
  Image as ImageIcon
} from 'lucide-react';

interface SubCategoryMeta {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: string[];
}

const gearwearCategoryMeta: Record<string, SubCategoryMeta> = {
  all: {
    title: 'Gearwear Collection',
    subtitle: 'DIVISION 01 // SPEC-SHEET ARCHIVE',
    description: 'Engineered for durability, ergonomics, and uncompromising performance across challenging environments. Browse full technical specifications, material compositions, and field capabilities below.',
    image: '/images/gearwear/banner.jpg',
    imageAlt: 'Afandi International Gearwear Showcase',
    badges: ['TACTICAL SPECIFICATIONS', 'BALLISTIC NYLON & KEVLAR®', 'GLOBAL EXPORT CERTIFIED']
  },
  gloves: {
    title: 'Handwear & Glove Engineering',
    subtitle: 'FEATURED CATEGORY // ADVANCED PROTECTION',
    description: 'Discover our specialized industrial, tactical, and craftsman glove models. Engineered with carbon composite shields, A-grade cowhide leather, Kevlar® stitching, and EN 388 impact certifications.',
    image: '/images/gearwear/tactical_gloves.jpg',
    imageAlt: 'Afandi International Tactical & Industrial Gloves',
    badges: ['EN 388:2016 CERTIFIED IMPACT', 'KEVLAR® HEAT-RESISTANT SEAMS', 'MICRO-DEXTERITY LEVEL 5']
  },
  jackets: {
    title: 'Jackets & Outerwear Shells',
    subtitle: 'TACTICAL SHELLS & WEATHERPROOF GEAR',
    description: 'Weatherproof tactical storm parkas, softshell field jackets, and heavy-duty utility outerwear manufactured with DWR water-repellent coatings and sealed ergonomic seams.',
    image: '/images/gearwear/jacket.jpg',
    imageAlt: 'Afandi International Technical Jackets',
    badges: ['3-LAYER DWR WATERPROOF', 'WINDPROOF THERMO-REGULATION', 'REINFORCED CORDURA® ELBOWS']
  },
  pants: {
    title: 'Trousers & Ergonomic Workwear',
    subtitle: 'HEAVY-DUTY ERGONOMIC TROUSERS',
    description: 'Mil-spec ripstop tactical trousers, articulated knee workwear, and high-tenacity cargo pants engineered for unrestricted motion, load distribution, and severe tear resistance.',
    image: '/images/gearwear/pants.jpg',
    imageAlt: 'Afandi International Workwear Trousers',
    badges: ['MIL-SPEC RIPSTOP WEAVE', 'ARTICULATED KNEE POCKETS', 'TEFLON® STAIN RESISTANT']
  },
  vests: {
    title: 'Thermal Gilets & Layering Vests',
    subtitle: 'MODULAR INSULATION & TACTICAL CARRIERS',
    description: 'High-loft thermal insulation vests, multi-pocket tactical utility gilets, and rapid-deployment modular carriers designed for all-season layering and operational agility.',
    image: '/images/gearwear/vest_header.jpg',
    imageAlt: 'Afandi International Thermal Vests',
    badges: ['HIGH-LOFT THERMAL RETENTION', 'MODULAR CHEST ATTACHMENT', 'ULTRA-LIGHTWEIGHT RIPSTOP']
  }
};

export const GearwearPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subParam = searchParams.get('sub') || 'all';

  const [activeSubCategory, setActiveSubCategory] = useState<string>(subParam);

  const currentMeta = gearwearCategoryMeta[activeSubCategory] || gearwearCategoryMeta.all;

  useEffect(() => {
    document.title = activeSubCategory === 'gloves' 
      ? "Gloves & Handwear Collection | AFANDI INTERNATIONAL" 
      : activeSubCategory === 'jackets'
      ? "Jackets & Outerwear Shells | AFANDI INTERNATIONAL"
      : activeSubCategory === 'pants'
      ? "Trousers & Workwear | AFANDI INTERNATIONAL"
      : activeSubCategory === 'vests'
      ? "Thermal Gilets & Vests | AFANDI INTERNATIONAL"
      : "Gearwear Division Showcase | AFANDI INTERNATIONAL";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSubCategory]);

  // Synchronize state when URL query param changes
  useEffect(() => {
    const currentSub = searchParams.get('sub') || 'all';
    setActiveSubCategory(currentSub);
  }, [searchParams]);

  // Eagerly pre-cache category images for instantaneous, load-free switching
  useEffect(() => {
    Object.values(gearwearCategoryMeta).forEach((meta) => {
      const img = new Image();
      img.src = meta.image;
    });
  }, []);

  const [filters, setFilters] = useState<ProductFilterState>({
    searchQuery: '',
    category: 'gearwear',
    selectedSize: '',
    selectedColor: '',
    sortBy: 'featured',
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleSubCategorySelect = (sub: string) => {
    setActiveSubCategory(sub);
    setPage(1);
    if (sub === 'all') {
      searchParams.delete('sub');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ sub });
    }
  };

  // Subcategory tabs with counts
  const subCategories = [
    { id: 'all', label: 'All Gearwear', icon: SlidersHorizontal, count: gearwearProducts.length },
    { id: 'gloves', label: 'Gloves & Handwear', icon: ShieldCheck, count: gearwearProducts.filter(p => p.subCategory === 'gloves').length, featured: true },
    { id: 'jackets', label: 'Jackets & Outerwear', icon: Compass, count: gearwearProducts.filter(p => p.subCategory === 'jackets').length },
    { id: 'pants', label: 'Trousers & Workwear', icon: Layers, count: gearwearProducts.filter(p => p.subCategory === 'pants').length },
    { id: 'vests', label: 'Vests & Mid-Layers', icon: Pocket, count: gearwearProducts.filter(p => p.subCategory === 'vests').length },
  ];

  const availableSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    const sourceProducts = activeSubCategory === 'all' 
      ? gearwearProducts 
      : gearwearProducts.filter(p => p.subCategory === activeSubCategory);
    sourceProducts.forEach((p) => p.sizes.forEach((s) => sizeSet.add(s)));
    return Array.from(sizeSet);
  }, [activeSubCategory]);

  const availableColors = useMemo(() => {
    const colorSet = new Set<string>();
    const sourceProducts = activeSubCategory === 'all' 
      ? gearwearProducts 
      : gearwearProducts.filter(p => p.subCategory === activeSubCategory);
    sourceProducts.forEach((p) => p.colors.forEach((c) => colorSet.add(c)));
    return Array.from(colorSet);
  }, [activeSubCategory]);

  const filteredProducts = useMemo(() => {
    return gearwearProducts.filter((p) => {
      // Subcategory match
      if (activeSubCategory !== 'all' && p.subCategory !== activeSubCategory) {
        return false;
      }

      // Search match
      if (
        filters.searchQuery &&
        !p.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !p.productCode.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !p.shortDescription.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Size match
      if (filters.selectedSize && !p.sizes.includes(filters.selectedSize)) {
        return false;
      }

      // Color match
      if (filters.selectedColor && !p.colors.includes(filters.selectedColor)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (filters.sortBy === 'code') return a.productCode.localeCompare(b.productCode);
      return 0;
    });
  }, [filters, activeSubCategory]);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, page * itemsPerPage);
  }, [filteredProducts, page]);

  const handleFilterChange = (newFilters: Partial<ProductFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setPage(1);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#12100E] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#A89E90] border-b border-[#2D2720] pb-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-1 text-[#FDAA27] hover:underline font-bold">
              <Home className="w-3.5 h-3.5" />
              <span>MAIN PORTAL</span>
            </Link>
            <span>/</span>
            <span className="text-[#FAF6F0] font-bold">GEARWEAR WINDOW</span>
            {activeSubCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-[#FDAA27] font-bold">
                  {subCategories.find(s => s.id === activeSubCategory)?.label}
                </span>
              </>
            )}
          </div>

          <Link
            to="/accessories"
            className="inline-flex items-center gap-1.5 text-[#FAF6F0] hover:text-[#FDAA27] font-bold transition-colors"
          >
            <span>SWITCH TO ACCESSORIES WINDOW</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FDAA27]" />
          </Link>
        </div>

        {/* Division Header Banner with Dynamic Subcategory Product Background */}
        <div className="relative overflow-hidden rounded-xs border border-[#2D2720] shadow-2xl min-h-[340px] sm:min-h-[380px] flex items-center bg-[#1A1612]">
          {/* Dynamic Background Image with AnimatePresence Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMeta.image}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 z-0"
            >
              <img
                src={currentMeta.image}
                alt={currentMeta.imageAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
              {/* Luxury Obsidian Gradient Overlays for Maximum Contrast & Text Legibility */}
              <div className="absolute inset-0 bg-[#12100E]/75" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/90 to-[#12100E]/45 sm:w-4/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/50" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(253,170,39,0.22),transparent_70%)] pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Header Content */}
          <div className="relative z-10 w-full p-8 sm:p-12 lg:p-14 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDAA27] text-[#12100E] font-sans text-xs font-bold uppercase tracking-wider rounded-xs shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentMeta.subtitle}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#12100E]/80 backdrop-blur-sm border border-[#FDAA27]/40 text-[#FDAA27] font-mono text-[11px] font-semibold uppercase tracking-wider rounded-xs">
                <ImageIcon className="w-3 h-3 text-[#FDAA27]" />
                <span>CATEGORY BG:</span>
                <span className="text-[#FAF6F0]">{activeSubCategory.toUpperCase()}</span>
              </div>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FAF6F0] leading-tight tracking-tight">
              {currentMeta.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#D8CFBF] leading-relaxed font-normal">
              {currentMeta.description}
            </p>

            {/* Subcategory Technical Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono text-[#FDAA27]">
              {currentMeta.badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-[#12100E]/90 backdrop-blur-sm px-3 py-1.5 rounded-xs border border-[#2D2720]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FDAA27]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Subcategory Window Navigator Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#A89E90]">
            <span>FILTER BY SUBCATEGORY WINDOW:</span>
            <span className="text-[#FDAA27] font-bold">1-CLICK INSTANT FILTER</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {subCategories.map((sub) => {
              const Icon = sub.icon;
              const isActive = activeSubCategory === sub.id;

              return (
                <button
                  key={sub.id}
                  onClick={() => handleSubCategorySelect(sub.id)}
                  className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xs font-sans text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#FDAA27] text-[#12100E] border-[#FDAA27] shadow-lg font-bold'
                      : sub.featured
                      ? 'bg-[#1A1612] text-[#FAF6F0] border-[#FDAA27]/60 hover:bg-[#FDAA27]/10'
                      : 'bg-[#1A1612] text-[#A89E90] border-[#2D2720] hover:border-[#FDAA27] hover:text-[#FAF6F0]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#12100E]' : sub.featured ? 'text-[#FDAA27]' : 'text-[#A89E90]'}`} />
                  <span>{sub.label}</span>
                  {sub.featured && !isActive && (
                    <span className="text-[10px] bg-[#FDAA27]/20 text-[#FDAA27] px-1.5 py-0.5 rounded-xs font-mono font-bold">
                      FEATURED
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                    isActive ? 'bg-[#12100E] text-[#FDAA27]' : 'bg-[#12100E] text-[#A89E90]'
                  }`}>
                    {sub.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <ProductFilterSearch
          filters={filters}
          onFilterChange={handleFilterChange}
          availableSizes={availableSizes}
          availableColors={availableColors}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-[#1A1612] rounded-xs p-12 text-center border border-[#2D2720] max-w-lg mx-auto space-y-4 my-12 font-sans">
            <PackageSearch className="w-12 h-12 text-[#FDAA27] mx-auto" />
            <h3 className="font-serif font-bold text-2xl text-[#FAF6F0]">No Products Match Filters</h3>
            <p className="text-sm text-[#A89E90]">
              No items in this subcategory matched your query. Try resetting filters or choosing &quot;All Gearwear&quot;.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => handleFilterChange({ searchQuery: '', selectedSize: '', selectedColor: '' })}
                className="px-5 py-2.5 bg-[#FDAA27] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#D98A10] cursor-pointer"
              >
                Reset Search
              </button>
              <button
                onClick={() => handleSubCategorySelect('all')}
                className="px-5 py-2.5 bg-[#221D18] text-[#FAF6F0] text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#2D2720] cursor-pointer border border-[#2D2720]"
              >
                Show All Gearwear
              </button>
            </div>
          </div>
        )}

        {/* Load More Pagination */}
        {filteredProducts.length > paginatedProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-4 bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] text-sm font-sans font-bold uppercase tracking-widest rounded-xs shadow-md transition-all cursor-pointer"
            >
              Load More Products ({filteredProducts.length - paginatedProducts.length} remaining)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
