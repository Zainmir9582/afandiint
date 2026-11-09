import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ImageFallback } from '../ui/ImageFallback';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-[#1A1612] rounded-xs border border-[#2D2720] overflow-hidden hover:border-[#FDAA27] transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl">
      
      {/* Large Product Photography */}
      <div className="relative overflow-hidden bg-[#0E0C0A] aspect-4/3 border-b border-[#2D2720]">
        <ImageFallback
          src={product.coverImage}
          alt={product.name}
          aspectRatio="aspect-4/3"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
        />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap">
          <span className="px-3 py-1 bg-[#12100E]/90 backdrop-blur-md border border-[#2D2720] font-sans text-xs font-bold text-[#FDAA27] uppercase tracking-wider rounded-xs">
            {product.category}
          </span>
          {product.subCategoryTitle && (
            <span className="px-2.5 py-1 bg-[#FDAA27] text-[#12100E] font-sans text-[11px] font-bold uppercase tracking-wider rounded-xs shadow-sm">
              {product.subCategoryTitle}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-2xl text-[#FAF6F0] group-hover:text-[#FDAA27] transition-colors leading-tight">
            {product.name}
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#A89E90] leading-relaxed line-clamp-2 font-normal">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-[#2D2720] flex items-center justify-between">
          <span className="font-mono text-xs font-semibold text-[#786E61]">
            {product.productCode}
          </span>

          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27] hover:text-[#FFE099] transition-colors group/link"
          >
            <span>SPEC DETAILS</span>
            <ArrowUpRight className="w-4 h-4 text-[#FDAA27] transform group-link:translate-x-0.5 group-link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
};
