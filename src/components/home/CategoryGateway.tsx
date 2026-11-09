import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Compass, 
  Briefcase, 
  Layers, 
  Pocket, 
  Key,
  ShieldCheck
} from 'lucide-react';
import { gearwearProducts } from '../../data/gearwear';
import { accessoriesProducts } from '../../data/accessories';

export const CategoryGateway: React.FC = () => {
  const gloveCount = gearwearProducts.filter(p => p.subCategory === 'gloves').length;
  const jacketCount = gearwearProducts.filter(p => p.subCategory === 'jackets').length;
  const pantsCount = gearwearProducts.filter(p => p.subCategory === 'pants').length;
  const vestCount = gearwearProducts.filter(p => p.subCategory === 'vests').length;

  const bagCount = accessoriesProducts.filter(p => p.subCategory === 'bags').length;
  const beltCount = accessoriesProducts.filter(p => p.subCategory === 'belts').length;
  const walletCount = accessoriesProducts.filter(p => p.subCategory === 'wallets').length;
  const hardwareCount = accessoriesProducts.filter(p => p.subCategory === 'hardware').length;

  return (
    <section id="category-gateway" className="py-16 sm:py-20 bg-[#F5F1E9] border-b border-[#E3D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading & Time-Saving Value Prop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D8C8]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDAA27]/15 border border-[#FDAA27]/30 text-xs font-mono font-bold text-[#D98A10] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FDAA27]" />
              <span>Instant Catalogue Navigator</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#12100E]">
              Select Your Product Division
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#6E6457] font-normal leading-relaxed">
              Skip endless browsing. Choose between <strong>Gearwear</strong> and <strong>Accessories</strong> to enter their dedicated windows, or jump directly into specialized subcategories like <strong>Handwear & Gloves</strong>.
            </p>
          </div>

          <div className="text-right shrink-0 hidden md:block">
            <span className="font-mono text-xs font-bold text-[#A89E90] uppercase tracking-widest block">
              2 PRIMARY DIVISIONS
            </span>
            <span className="font-serif font-bold text-2xl text-[#12100E]">
              {gearwearProducts.length + accessoriesProducts.length} Spec-Sheet Items
            </span>
          </div>
        </div>

        {/* Dual High-Impact Portals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DIVISION 1: GEARWEAR */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#12100E] text-[#FAF6F0] rounded-xs overflow-hidden border border-[#2D2720] shadow-xl flex flex-col justify-between"
          >
            {/* Top Background Image with Subtle Parallax & Overlay */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/images/gearwear/tactical_gloves.jpg"
                alt="AFANDI Gearwear Division"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-transparent" />
              
              {/* Category Badge on Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1.5 bg-[#FDAA27] text-[#12100E] font-sans text-xs font-bold uppercase tracking-wider rounded-xs shadow-md">
                  DIVISION 01
                </span>
                <span className="px-3 py-1 bg-[#12100E]/80 backdrop-blur-md text-[#FAF6F0] border border-[#2D2720] font-mono text-xs font-semibold rounded-xs">
                  {gearwearProducts.length} PRODUCTS
                </span>
              </div>

              {/* Title & Micro Summary */}
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0] tracking-wide">
                  GEARWEAR
                </h3>
                <p className="text-sm text-[#F3EDE2]/80 font-sans mt-1">
                  Tactical Gloves, All-Weather Jackets, Utility Workwear & Mid-Layers
                </p>
              </div>
            </div>

            {/* Portal Content & Direct Subcategory Jump Grid */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-[#12100E]">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#FDAA27] tracking-wider uppercase font-bold">
                  <span>DIRECT SUBCATEGORY ACCESS</span>
                  <span>1-CLICK JUMP</span>
                </div>

                {/* Subcategory Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  
                  {/* GLOVES (EMPHASIZED) */}
                  <Link
                    to="/gearwear?sub=gloves"
                    className="relative flex items-center justify-between p-3 rounded-xs bg-[#221D18] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#FDAA27]/50 hover:border-[#FDAA27] transition-all group/sub shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#FDAA27] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <div className="font-sans font-bold text-sm leading-tight flex items-center gap-1.5">
                          <span>Gloves</span>
                          <span className="text-[10px] bg-[#FDAA27] text-[#12100E] px-1.5 py-0.2 rounded-xs font-mono font-bold group-hover/sub:bg-[#12100E] group-hover/sub:text-[#FDAA27]">
                            POPULAR
                          </span>
                        </div>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">
                          Tactical & Workwear
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded-xs bg-[#12100E]/60 text-[#FDAA27] group-hover/sub:bg-[#12100E] group-hover/sub:text-[#FAF6F0]">
                      {gloveCount}
                    </span>
                  </Link>

                  {/* JACKETS */}
                  <Link
                    to="/gearwear?sub=jackets"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Jackets</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">All-Weather Shells</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {jacketCount}
                    </span>
                  </Link>

                  {/* TROUSERS */}
                  <Link
                    to="/gearwear?sub=pants"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Trousers</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">Cargo & Utility</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {pantsCount}
                    </span>
                  </Link>

                  {/* VESTS */}
                  <Link
                    to="/gearwear?sub=vests"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Pocket className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Vests</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">Thermal Gilets</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {vestCount}
                    </span>
                  </Link>

                </div>
              </div>

              {/* Enter Main Window Button */}
              <Link
                to="/gearwear"
                className="w-full py-4 px-6 bg-[#FDAA27] hover:bg-[#D98A10] text-[#12100E] font-sans font-bold text-sm uppercase tracking-wider rounded-xs flex items-center justify-center gap-2.5 transition-all shadow-md group/btn cursor-pointer"
              >
                <span>OPEN GEARWEAR SHOWROOM WINDOW</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>

            </div>
          </motion.div>

          {/* DIVISION 2: ACCESSORIES */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#12100E] text-[#FAF6F0] rounded-xs overflow-hidden border border-[#2D2720] shadow-xl flex flex-col justify-between"
          >
            {/* Top Background Image with Subtle Parallax & Overlay */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/images/accessories/edc_wallet.jpg"
                alt="AFANDI Accessories Division"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-transparent" />
              
              {/* Category Badge on Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1.5 bg-[#FAF6F0] text-[#12100E] font-sans text-xs font-bold uppercase tracking-wider rounded-xs shadow-md">
                  DIVISION 02
                </span>
                <span className="px-3 py-1 bg-[#12100E]/80 backdrop-blur-md text-[#FAF6F0] border border-[#2D2720] font-mono text-xs font-semibold rounded-xs">
                  {accessoriesProducts.length} PRODUCTS
                </span>
              </div>

              {/* Title & Micro Summary */}
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0] tracking-wide">
                  ACCESSORIES
                </h3>
                <p className="text-sm text-[#F3EDE2]/80 font-sans mt-1">
                  EDC Leather Wallets, Waxed Canvas Daypacks, Tactical Belts & Bronze Clips
                </p>
              </div>
            </div>

            {/* Portal Content & Direct Subcategory Jump Grid */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-[#12100E]">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#FDAA27] tracking-wider uppercase font-bold">
                  <span>DIRECT SUBCATEGORY ACCESS</span>
                  <span>1-CLICK JUMP</span>
                </div>

                {/* Subcategory Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  
                  {/* WALLETS & POUCHES */}
                  <Link
                    to="/accessories?sub=wallets"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#221D18] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#FDAA27]/50 hover:border-[#FDAA27] transition-all group/sub shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#FDAA27] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <div className="font-sans font-bold text-sm leading-tight flex items-center gap-1">
                          <span>Wallets</span>
                        </div>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">
                          Leather & RFID
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded-xs bg-[#12100E]/60 text-[#FDAA27] group-hover/sub:bg-[#12100E] group-hover/sub:text-[#FAF6F0]">
                      {walletCount}
                    </span>
                  </Link>

                  {/* BAGS & PACKS */}
                  <Link
                    to="/accessories?sub=bags"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Bags</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">Packs & Canvas</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {bagCount}
                    </span>
                  </Link>

                  {/* BELTS */}
                  <Link
                    to="/accessories?sub=belts"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Belts</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">Webbing & Riggers</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {beltCount}
                    </span>
                  </Link>

                  {/* HARDWARE */}
                  <Link
                    to="/accessories?sub=hardware"
                    className="flex items-center justify-between p-3 rounded-xs bg-[#1A1612] hover:bg-[#FDAA27] text-[#FAF6F0] hover:text-[#12100E] border border-[#2D2720] hover:border-[#FDAA27] transition-all group/sub"
                  >
                    <div className="flex items-center gap-2.5">
                      <Key className="w-4 h-4 text-[#A89E90] group-hover/sub:text-[#12100E]" />
                      <div className="text-left">
                        <span className="font-sans font-bold text-sm block leading-tight">Hardware</span>
                        <span className="text-[11px] text-[#A89E90] group-hover/sub:text-[#12100E]/80">Bronze Clips & EDC</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A89E90] group-hover/sub:text-[#12100E]">
                      {hardwareCount}
                    </span>
                  </Link>

                </div>
              </div>

              {/* Enter Main Window Button */}
              <Link
                to="/accessories"
                className="w-full py-4 px-6 bg-[#FAF6F0] hover:bg-[#FDAA27] text-[#12100E] font-sans font-bold text-sm uppercase tracking-wider rounded-xs flex items-center justify-center gap-2.5 transition-all shadow-md group/btn cursor-pointer"
              >
                <span>OPEN ACCESSORIES SHOWROOM WINDOW</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
