import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Layers } from 'lucide-react';
import { ImageFallback } from '../ui/ImageFallback';

export const CategoryCards: React.FC = () => {
  return (
    <section className="py-20 bg-[#172B2A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C58B52]">
            PRODUCT CATEGORIES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Explore Our Digital Catalogue
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Discover our specialized manufacturing collections engineered for industrial performance, protective warmth, and daily endurance.
          </p>
        </div>

        {/* 2 Large Visual Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Category 1: Gearwear */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl border border-[#263C38] flex flex-col min-h-[460px] justify-end p-8 sm:p-10"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <ImageFallback
                src="/images/gearwear/banner.jpg"
                alt="AFANDINT Tactical & Industrial Gearwear Collection"
                aspectRatio="aspect-square"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B2A] via-[#172B2A]/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C58B52]/20 border border-[#C58B52]/40 text-[#C58B52] text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Heavy Duty Outerwear & Trousers</span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Gearwear Collection
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed max-w-md">
                Heavy-duty weatherproof jackets, tactical workwear trousers, thermal vests, and certified high-visibility safety parkas engineered for extreme field environments.
              </p>

              <div className="pt-2">
                <Link
                  to="/gearwear"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C58B52] hover:bg-[#b07842] active:scale-95 transition-all duration-200 rounded-md shadow-md"
                >
                  <span>Explore Gearwear Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Category 2: Hosiery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl border border-[#263C38] flex flex-col min-h-[460px] justify-end p-8 sm:p-10"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <ImageFallback
                src="/images/hosiery/banner.jpg"
                alt="AFANDINT Technical Hosiery Collection"
                aspectRatio="aspect-square"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B2A] via-[#172B2A]/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#263C38] border border-[#324e49] text-[#C58B52] text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>200-Needle Technical Knitwork</span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Hosiery Collection
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed max-w-md">
                Graduated medical-grade compression socks, heavy merino wool work boot socks, bamboo executive dress socks, and cut-resistant protective sock liners.
              </p>

              <div className="pt-2">
                <Link
                  to="/hosiery"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#263C38] hover:bg-[#324e49] border border-[#324e49] active:scale-95 transition-all duration-200 rounded-md shadow-md"
                >
                  <span>Explore Hosiery Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#C58B52]" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
