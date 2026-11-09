import React from 'react';
import { ImageFallback } from '../ui/ImageFallback';
import { companyInfo } from '../../data/company';
import { Shield } from 'lucide-react';

export const ManufacturingSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#12100E] text-[#FAF6F0] overflow-hidden border-y border-[#2D2720]">
      {/* Background Photography with Soft Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <ImageFallback
          src="/images/company/quality.jpg"
          alt="AFANDI INTERNATIONAL Material Quality"
          aspectRatio="aspect-16/9"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/90 to-[#12100E]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="max-w-3xl space-y-6">
          <span className="font-sans text-xs tracking-[0.25em] font-semibold text-[#FDAA27] uppercase block">
            CRAFTSMANSHIP & INTEGRITY
          </span>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#FAF6F0] leading-tight">
            Quality Lives in the Details.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#F3EDE2]/80 leading-relaxed font-light">
            Every product represents an approach built around thoughtful design, material selection, functionality, and attention to detail.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[#2D2720]">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-[#FDAA27] block">
                {stat.value}
              </span>
              <span className="font-sans text-xs text-[#FAF6F0] font-semibold uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
