import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImageFallback } from '../ui/ImageFallback';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F1E9] text-[#292823] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="font-sans text-sm tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
              AFANDI INTERNATIONAL
            </span>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#12100E] leading-[1.08]">
              Designed with Purpose.<br />
              <span className="italic font-normal text-[#D98A10]">Crafted with Excellence.</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#6E6457] leading-relaxed max-w-xl font-normal">
              Discover a refined collection of gearwear and accessories, where thoughtful design, quality materials, and attention to detail come together.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-sans text-sm tracking-wider uppercase font-bold">
              <Link
                to="/gearwear"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#12100E] bg-[#FDAA27] hover:bg-[#D98A10] transition-all rounded-xs shadow-md"
              >
                <span>EXPLORE GEARWEAR</span>
                <ArrowUpRight className="w-5 h-5 text-[#12100E]" />
              </Link>

              <Link
                to="/accessories"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#12100E] bg-[#F3EDE2] hover:bg-[#E3D8C8] border border-[#E3D8C8] transition-all rounded-xs"
              >
                <span>EXPLORE ACCESSORIES</span>
                <ArrowUpRight className="w-5 h-5 text-[#12100E]" />
              </Link>
            </div>

            {/* Quick customer time-saver pill */}
            <div className="pt-1 flex items-center gap-3 text-xs font-mono text-[#6E6457]">
              <span className="font-bold text-[#FDAA27]">QUICK ACCESS:</span>
              <Link to="/gearwear?sub=gloves" className="hover:text-[#FDAA27] underline decoration-[#FDAA27]/60 font-semibold">
                🧤 Tactical & Work Gloves
              </Link>
              <span>•</span>
              <Link to="/accessories?sub=wallets" className="hover:text-[#FDAA27] underline decoration-[#FDAA27]/60 font-semibold">
                👝 Leather Wallets
              </Link>
            </div>
          </motion.div>

          {/* Right Editorial Photography Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-xs overflow-hidden shadow-2xl border border-[#E3D8C8] group bg-[#FFFFFF]">
              <ImageFallback
                src="/images/banners/hero.jpg"
                alt="AFANDI INTERNATIONAL Product Craftsmanship"
                aspectRatio="aspect-4/3"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/40 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E3D8C8] flex items-center justify-between">
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#FDAA27] font-bold block">
                    THE ATELIER COLLECTION
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#12100E] mt-0.5">
                    Weatherproof Field Jacket
                  </h4>
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#6E6457] font-semibold">
                  2026 EDITION
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
