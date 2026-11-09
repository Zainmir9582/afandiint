import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Compass, 
  Layers, 
  Pocket, 
  Briefcase, 
  Key, 
  ArrowRight, 
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { gearwearProducts } from '../../data/gearwear';
import { accessoriesProducts } from '../../data/accessories';

export const TwoWindowsLanding: React.FC = () => {
  // Mobile active tab ('all' shows both, or switch between gearwear and accessories on small screens)
  const [mobileTab, setMobileTab] = useState<'both' | 'gearwear' | 'accessories'>('both');
  const [activeHoverWindow, setActiveHoverWindow] = useState<'gearwear' | 'accessories' | null>(null);

  // Subcategories for Gearwear
  const gearwearSubcategories = [
    {
      id: 'gloves',
      title: 'Gloves & Handwear',
      badge: 'FEATURED / 4 MODELS',
      description: 'Tactical duty operator gloves, full-grain cowhide work gloves, weatherproof thermal grip & precision mechanics.',
      image: '/images/gearwear/tactical_gloves.jpg',
      icon: ShieldCheck,
      count: gearwearProducts.filter(p => p.subCategory === 'gloves').length,
      sampleItems: ['Tactical Duty Operator', 'Reinforced Cowhide Artisan', 'All-Weather Thermal Grip', 'Precision Mechanic']
    },
    {
      id: 'jackets',
      title: 'Jackets & Outerwear',
      badge: '3-LAYER SHELL',
      description: 'Atelier weatherproof field jackets with hydrophobic lining and articulated sleeves.',
      image: '/images/gearwear/jacket.jpg',
      icon: Compass,
      count: gearwearProducts.filter(p => p.subCategory === 'jackets').length,
      sampleItems: ['Atelier Field Jacket', 'Weatherproof Membrane Shell']
    },
    {
      id: 'pants',
      title: 'Trousers & Workwear',
      badge: '4-WAY STRETCH',
      description: 'Minimalist cargo trousers with concealed low-profile utility pockets and DWR finish.',
      image: '/images/gearwear/pants.jpg',
      icon: Layers,
      count: gearwearProducts.filter(p => p.subCategory === 'pants').length,
      sampleItems: ['Minimalist Cargo Trousers', 'Ergonomic Flex Twill']
    },
    {
      id: 'vests',
      title: 'Vests & Mid-Layers',
      badge: 'THERMAL CORE',
      description: 'Ultra-lightweight micro-down thermal gilets for streamlined autumn & winter layering.',
      image: '/images/gearwear/banner.jpg',
      icon: Pocket,
      count: gearwearProducts.filter(p => p.subCategory === 'vests').length,
      sampleItems: ['Insulated Lightweight Gilet', 'Micro-Loft Core Vest']
    }
  ];

  // Subcategories for Accessories
  const accessoriesSubcategories = [
    {
      id: 'wallets',
      title: 'Wallets & Leather Pouches',
      badge: 'ITALIAN COWHIDE',
      description: 'Handcrafted RFID-shielded vegetable-tanned bifold wallets and padded micro-suede tech folios.',
      image: '/images/accessories/edc_wallet.jpg',
      icon: Briefcase,
      count: accessoriesProducts.filter(p => p.subCategory === 'wallets').length,
      sampleItems: ['EDC Leather Bifold (RFID)', 'Leather Tech & Document Folio']
    },
    {
      id: 'bags',
      title: 'Bags & Backpacks',
      badge: 'WAXED CANVAS',
      description: '30L heavy waxed canvas weekender packs and 22L ballistic Cordura® tactical daypacks.',
      image: '/images/accessories/backpack.jpg',
      icon: Compass,
      count: accessoriesProducts.filter(p => p.subCategory === 'bags').length,
      sampleItems: ['30L Weekender Backpack', '22L Tactical Cordura® Daypack']
    },
    {
      id: 'belts',
      title: 'Belts & Webbing',
      badge: 'SOLID BRONZE',
      description: 'High-density woven stretch belts with brushed solid bronze buckles and tactical riggers belts.',
      image: '/images/accessories/banner.jpg',
      icon: Layers,
      count: accessoriesProducts.filter(p => p.subCategory === 'belts').length,
      sampleItems: ['Refined Woven Webbing Belt', 'Heavy Duty Cobra Riggers Belt']
    },
    {
      id: 'hardware',
      title: 'Hardware & EDC Clips',
      badge: 'MARINE BRONZE',
      description: 'Precision CNC-machined solid marine bronze carabiners and bridle leather keyholders.',
      image: '/images/accessories/edc_wallet.jpg',
      icon: Key,
      count: accessoriesProducts.filter(p => p.subCategory === 'hardware').length,
      sampleItems: ['Solid Bronze Carabiner', 'Brass Key Hook & Leather Tab']
    }
  ];

  return (
    <div className="min-h-screen bg-[#12100E] text-[#FAF6F0] pt-24 pb-16 flex flex-col justify-between">
      
      {/* Top Introduction Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2D2720] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDAA27]/15 border border-[#FDAA27]/30 rounded-xs text-[#FDAA27] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AFANDI INTERNATIONAL SHOWROOM PORTAL</span>
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] tracking-tight">
              Two Dedicated Divisions
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#A89E90] max-w-xl font-normal leading-relaxed">
              Explore our core manufacturing divisions below. Click into <strong>Gearwear</strong> or <strong>Accessories</strong>, or access their specialized subcategories directly.
            </p>
          </div>

          {/* Quick Division Switcher for Mobile / Compact screens */}
          <div className="flex items-center gap-2 p-1 bg-[#1A1612] border border-[#2D2720] rounded-xs font-sans text-xs font-bold md:hidden">
            <button
              onClick={() => setMobileTab('both')}
              className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                mobileTab === 'both' ? 'bg-[#FDAA27] text-[#12100E]' : 'text-[#A89E90]'
              }`}
            >
              Both Windows
            </button>
            <button
              onClick={() => setMobileTab('gearwear')}
              className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                mobileTab === 'gearwear' ? 'bg-[#FDAA27] text-[#12100E]' : 'text-[#A89E90]'
              }`}
            >
              Gearwear ({gearwearProducts.length})
            </button>
            <button
              onClick={() => setMobileTab('accessories')}
              className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                mobileTab === 'accessories' ? 'bg-[#FDAA27] text-[#12100E]' : 'text-[#A89E90]'
              }`}
            >
              Accessories ({accessoriesProducts.length})
            </button>
          </div>
        </div>
      </div>

      {/* THE TWO WINDOWS MAIN VIEWPORT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* ======================================================== */}
          {/* WINDOW 01: GEARWEAR                                     */}
          {/* ======================================================== */}
          {(mobileTab === 'both' || mobileTab === 'gearwear') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveHoverWindow('gearwear')}
              onMouseLeave={() => setActiveHoverWindow(null)}
              className="flex flex-col justify-between bg-[#1A1612] rounded-xs border-2 border-[#2D2720] hover:border-[#FDAA27] transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              {/* Window Header Stage with Background Imagery */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-[#2D2720]">
                <img
                  src="/images/gearwear/tactical_gloves.jpg"
                  alt="AFANDI Gearwear Division"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612] via-[#1A1612]/50 to-transparent" />
                
                {/* Window Top Controls Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FDAA27] animate-pulse" />
                    <span className="px-2.5 py-1 bg-[#12100E]/80 backdrop-blur-md border border-[#FDAA27]/40 text-[#FDAA27] font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
                      WINDOW 01 // GEARWEAR
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-[#FDAA27] text-[#12100E] font-sans text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm">
                    {gearwearProducts.length} PRODUCTS
                  </span>
                </div>

                {/* Window Title Lockup */}
                <div className="absolute bottom-4 left-5 right-5 space-y-1">
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0] tracking-wide">
                    GEARWEAR
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#F3EDE2]/80">
                    Handwear engineering, tactical gloves, all-weather jackets & utility cargo workwear.
                  </p>
                </div>
              </div>

              {/* Window Subcategories Area */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-[#1A1612]">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#2D2720] pb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FDAA27] font-bold">
                      FURTHER CATEGORIES ({gearwearSubcategories.length})
                    </span>
                    <span className="text-[11px] font-sans text-[#A89E90]">
                      Click category to open dedicated window
                    </span>
                  </div>

                  {/* Subcategories List / Cards */}
                  <div className="space-y-3">
                    {gearwearSubcategories.map((sub) => {
                      const Icon = sub.icon;
                      const isGlove = sub.id === 'gloves';

                      return (
                        <Link
                          key={sub.id}
                          to={`/gearwear?sub=${sub.id}`}
                          className={`block p-3.5 rounded-xs border transition-all duration-200 group/item ${
                            isGlove 
                              ? 'bg-[#241F1A] hover:bg-[#FDAA27] border-[#FDAA27]/60 hover:border-[#FDAA27] shadow-sm' 
                              : 'bg-[#12100E] hover:bg-[#FDAA27] border-[#2D2720] hover:border-[#FDAA27]'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            {/* Photo Thumbnail */}
                            <div className="w-16 h-16 rounded-xs overflow-hidden border border-[#3D3328] shrink-0 bg-[#0E0C0A]">
                              <img
                                src={sub.image}
                                alt={sub.title}
                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-[#FDAA27] group-hover/item:text-[#12100E] shrink-0" />
                                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#FAF6F0] group-hover/item:text-[#12100E] truncate">
                                    {sub.title}
                                  </h3>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-xs font-mono font-bold shrink-0 ${
                                  isGlove
                                    ? 'bg-[#FDAA27] text-[#12100E] group-hover/item:bg-[#12100E] group-hover/item:text-[#FDAA27]'
                                    : 'bg-[#221D18] text-[#A89E90] group-hover/item:bg-[#12100E] group-hover/item:text-[#FAF6F0]'
                                }`}>
                                  {sub.badge}
                                </span>
                              </div>

                              <p className="font-sans text-xs text-[#A89E90] group-hover/item:text-[#12100E]/85 line-clamp-1 mt-1 font-normal">
                                {sub.description}
                              </p>

                              {/* Sample models */}
                              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                {sub.sampleItems.slice(0, 2).map((item, i) => (
                                  <span key={i} className="text-[10px] font-sans bg-[#12100E]/60 text-[#D8CFBF] group-hover/item:bg-[#12100E] group-hover/item:text-[#FDAA27] px-1.5 py-0.2 rounded-xs">
                                    • {item}
                                  </span>
                                ))}
                                <span className="text-[10px] font-mono text-[#FDAA27] group-hover/item:text-[#12100E] font-bold ml-auto">
                                  View {sub.count} items &rarr;
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Window CTA Button */}
                <div className="pt-2">
                  <Link
                    to="/gearwear"
                    className="w-full py-4 px-6 bg-[#FDAA27] hover:bg-[#D98A10] text-[#12100E] font-sans font-bold text-sm uppercase tracking-wider rounded-xs flex items-center justify-center gap-3 transition-all shadow-md group/btn cursor-pointer"
                  >
                    <span>ENTER FULL GEARWEAR WINDOW</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* WINDOW 02: ACCESSORIES                                  */}
          {/* ======================================================== */}
          {(mobileTab === 'both' || mobileTab === 'accessories') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onMouseEnter={() => setActiveHoverWindow('accessories')}
              onMouseLeave={() => setActiveHoverWindow(null)}
              className="flex flex-col justify-between bg-[#1A1612] rounded-xs border-2 border-[#2D2720] hover:border-[#FDAA27] transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              {/* Window Header Stage with Background Imagery */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-[#2D2720]">
                <img
                  src="/images/accessories/edc_wallet.jpg"
                  alt="AFANDI Accessories Division"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612] via-[#1A1612]/50 to-transparent" />
                
                {/* Window Top Controls Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FAF6F0] animate-pulse" />
                    <span className="px-2.5 py-1 bg-[#12100E]/80 backdrop-blur-md border border-[#FAF6F0]/40 text-[#FAF6F0] font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
                      WINDOW 02 // ACCESSORIES
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-[#FAF6F0] text-[#12100E] font-sans text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm">
                    {accessoriesProducts.length} PRODUCTS
                  </span>
                </div>

                {/* Window Title Lockup */}
                <div className="absolute bottom-4 left-5 right-5 space-y-1">
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0] tracking-wide">
                    ACCESSORIES
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#F3EDE2]/80">
                    Italian leather wallets, RFID pouches, waxed canvas weekender daypacks & solid bronze clips.
                  </p>
                </div>
              </div>

              {/* Window Subcategories Area */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-[#1A1612]">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#2D2720] pb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FDAA27] font-bold">
                      FURTHER CATEGORIES ({accessoriesSubcategories.length})
                    </span>
                    <span className="text-[11px] font-sans text-[#A89E90]">
                      Click category to open dedicated window
                    </span>
                  </div>

                  {/* Subcategories List / Cards */}
                  <div className="space-y-3">
                    {accessoriesSubcategories.map((sub) => {
                      const Icon = sub.icon;
                      const isWallet = sub.id === 'wallets';

                      return (
                        <Link
                          key={sub.id}
                          to={`/accessories?sub=${sub.id}`}
                          className={`block p-3.5 rounded-xs border transition-all duration-200 group/item ${
                            isWallet 
                              ? 'bg-[#241F1A] hover:bg-[#FDAA27] border-[#FDAA27]/60 hover:border-[#FDAA27] shadow-sm' 
                              : 'bg-[#12100E] hover:bg-[#FDAA27] border-[#2D2720] hover:border-[#FDAA27]'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            {/* Photo Thumbnail */}
                            <div className="w-16 h-16 rounded-xs overflow-hidden border border-[#3D3328] shrink-0 bg-[#0E0C0A]">
                              <img
                                src={sub.image}
                                alt={sub.title}
                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-[#FDAA27] group-hover/item:text-[#12100E] shrink-0" />
                                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#FAF6F0] group-hover/item:text-[#12100E] truncate">
                                    {sub.title}
                                  </h3>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-xs font-mono font-bold shrink-0 ${
                                  isWallet
                                    ? 'bg-[#FDAA27] text-[#12100E] group-hover/item:bg-[#12100E] group-hover/item:text-[#FDAA27]'
                                    : 'bg-[#221D18] text-[#A89E90] group-hover/item:bg-[#12100E] group-hover/item:text-[#FAF6F0]'
                                }`}>
                                  {sub.badge}
                                </span>
                              </div>

                              <p className="font-sans text-xs text-[#A89E90] group-hover/item:text-[#12100E]/85 line-clamp-1 mt-1 font-normal">
                                {sub.description}
                              </p>

                              {/* Sample models */}
                              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                {sub.sampleItems.slice(0, 2).map((item, i) => (
                                  <span key={i} className="text-[10px] font-sans bg-[#12100E]/60 text-[#D8CFBF] group-hover/item:bg-[#12100E] group-hover/item:text-[#FDAA27] px-1.5 py-0.2 rounded-xs">
                                    • {item}
                                  </span>
                                ))}
                                <span className="text-[10px] font-mono text-[#FDAA27] group-hover/item:text-[#12100E] font-bold ml-auto">
                                  View {sub.count} items &rarr;
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Window CTA Button */}
                <div className="pt-2">
                  <Link
                    to="/accessories"
                    className="w-full py-4 px-6 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] font-sans font-bold text-sm uppercase tracking-wider rounded-xs flex items-center justify-center gap-3 transition-all shadow-md group/btn cursor-pointer"
                  >
                    <span>ENTER FULL ACCESSORIES WINDOW</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* Minimal Footer Strip within Landing Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="border-t border-[#2D2720] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#786E61]">
          <div>
            AFANDI INTERNATIONAL &bull; OFFICIAL SPEC-SHEET CATALOGUE PORTAL
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#FDAA27] transition-colors">ABOUT ENTERPRISE</Link>
            <Link to="/contact" className="hover:text-[#FDAA27] transition-colors">PRODUCT INQUIRIES</Link>
          </div>
        </div>
      </div>

    </div>
  );
};
