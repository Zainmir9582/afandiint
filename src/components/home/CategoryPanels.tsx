import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Briefcase, Compass, Layers, Key, Pocket } from 'lucide-react';
import { ImageFallback } from '../ui/ImageFallback';

export const CategoryPanels: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF6F0] text-[#12100E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-sans text-sm tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
            TWO SPECIALIZED DIVISIONS
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
            Curated Collections
          </h2>
          <p className="font-sans text-base text-[#6E6457]">
            Direct window portals with specialized subcategories engineered for performance and longevity.
          </p>
        </div>

        {/* Category 01: Gearwear */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] p-8 sm:p-12 rounded-xs border border-[#E3D8C8] shadow-xs"
        >
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-sm font-bold text-[#D98A10] uppercase tracking-wider block">
              DIVISION 01 – GEARWEAR & HANDWEAR
            </span>

            <h3 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
              Gearwear & Gloves
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#6E6457] leading-relaxed font-normal">
              Specialized tactical duty handwear, craftsman leather work gloves, weatherproof field jackets, and ergonomic utility trousers built with EN 388 certifications and reinforced materials.
            </p>

            {/* Quick subcategory shortcuts */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/gearwear?sub=gloves"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#FDAA27] hover:text-[#12100E]" />
                <span>🧤 Gloves & Handwear</span>
              </Link>
              <Link
                to="/gearwear?sub=jackets"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>🧥 Jackets</span>
              </Link>
              <Link
                to="/gearwear?sub=pants"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>👖 Trousers</span>
              </Link>
              <Link
                to="/gearwear?sub=vests"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Pocket className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>🦺 Vests</span>
              </Link>
            </div>

            <div className="pt-2">
              <Link
                to="/gearwear"
                className="inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-[#12100E] hover:text-[#D98A10] transition-colors border-b-2 border-[#12100E] hover:border-[#D98A10] pb-1"
              >
                <span>OPEN GEARWEAR WINDOW</span>
                <ArrowUpRight className="w-5 h-5 text-[#FDAA27]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xs overflow-hidden border border-[#E3D8C8] shadow-md">
              <ImageFallback
                src="/images/gearwear/tactical_gloves.jpg"
                alt="AFANDI INTERNATIONAL Gearwear and Gloves"
                aspectRatio="aspect-4/3"
                className="w-full h-auto object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Category 02: Accessories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] p-8 sm:p-12 rounded-xs border border-[#E3D8C8] shadow-xs"
        >
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-xs overflow-hidden border border-[#E3D8C8] shadow-md">
              <ImageFallback
                src="/images/accessories/edc_wallet.jpg"
                alt="AFANDI INTERNATIONAL Accessories and Wallets"
                aspectRatio="aspect-4/3"
                className="w-full h-auto object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="font-sans text-sm font-bold text-[#D98A10] uppercase tracking-wider block">
              DIVISION 02 – ACCESSORIES & LEATHER
            </span>

            <h3 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
              Accessories & Carry
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#6E6457] leading-relaxed font-normal">
              Full-grain Italian leather bifold wallets with RFID protection, heavy waxed canvas weekender packs, high-density webbing belts, and solid marine bronze EDC clips.
            </p>

            {/* Quick subcategory shortcuts */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/accessories?sub=wallets"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#FDAA27] hover:text-[#12100E]" />
                <span>👝 Wallets & Leather</span>
              </Link>
              <Link
                to="/accessories?sub=bags"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>🎒 Bags & Packs</span>
              </Link>
              <Link
                to="/accessories?sub=belts"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>🪢 Belts</span>
              </Link>
              <Link
                to="/accessories?sub=hardware"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] border border-[#E3D8C8] hover:border-[#FDAA27] rounded-xs text-xs font-bold font-sans transition-colors"
              >
                <Key className="w-3.5 h-3.5 text-[#6E6457]" />
                <span>🔑 Hardware</span>
              </Link>
            </div>

            <div className="pt-2">
              <Link
                to="/accessories"
                className="inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-[#12100E] hover:text-[#D98A10] transition-colors border-b-2 border-[#12100E] hover:border-[#D98A10] pb-1"
              >
                <span>OPEN ACCESSORIES WINDOW</span>
                <ArrowUpRight className="w-5 h-5 text-[#FDAA27]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
