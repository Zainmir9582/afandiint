import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gearwearProducts } from '../../data/gearwear';
import { accessoriesProducts } from '../../data/accessories';
import { ProductCard } from '../products/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'gearwear' | 'accessories'>('all');

  const allProducts = [...gearwearProducts, ...accessoriesProducts];
  const featuredList = allProducts.filter((p) => p.featured);

  const displayedProducts = activeTab === 'all'
    ? featuredList.slice(0, 6)
    : featuredList.filter((p) => p.category === activeTab).slice(0, 6);

  return (
    <section className="py-24 bg-[#F3EDE2] text-[#12100E] border-y border-[#E3D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-sans text-xs tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
              CURATED SELECTION
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
              Featured Spec Items
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6E6457] max-w-lg font-normal">
              A curated look at core gearwear, handwear gloves, and everyday carry accessories.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="inline-flex items-center p-1 bg-[#FAF6F0] border border-[#E3D8C8] rounded-xs shrink-0 font-sans text-xs font-bold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-xs ${
                activeTab === 'all'
                  ? 'bg-[#12100E] text-[#FDAA27]'
                  : 'text-[#6E6457] hover:text-[#12100E]'
              }`}
            >
              All Items ({featuredList.length})
            </button>

            <button
              onClick={() => setActiveTab('gearwear')}
              className={`px-4 py-2 uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-xs ${
                activeTab === 'gearwear'
                  ? 'bg-[#12100E] text-[#FDAA27]'
                  : 'text-[#6E6457] hover:text-[#12100E]'
              }`}
            >
              Gearwear & Gloves
            </button>

            <button
              onClick={() => setActiveTab('accessories')}
              className={`px-4 py-2 uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-xs ${
                activeTab === 'accessories'
                  ? 'bg-[#12100E] text-[#FDAA27]'
                  : 'text-[#6E6457] hover:text-[#12100E]'
              }`}
            >
              Accessories & Wallets
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Collection Links */}
        <div className="pt-8 border-t border-[#E3D8C8] flex flex-col sm:flex-row items-center justify-center gap-6 font-sans text-sm font-bold tracking-wider uppercase">
          <Link
            to="/gearwear"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[#12100E] bg-[#FFFFFF] border border-[#E3D8C8] hover:border-[#FDAA27] transition-all rounded-xs shadow-xs"
          >
            <span>EXPLORE FULL GEARWEAR COLLECTION</span>
            <ArrowUpRight className="w-4 h-4 text-[#FDAA27]" />
          </Link>

          <Link
            to="/accessories"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[#12100E] bg-[#FFFFFF] border border-[#E3D8C8] hover:border-[#FDAA27] transition-all rounded-xs shadow-xs"
          >
            <span>EXPLORE ACCESSORIES COLLECTION</span>
            <ArrowUpRight className="w-4 h-4 text-[#FDAA27]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
