import React from 'react';
import { motion } from 'framer-motion';
import { ImageFallback } from '../ui/ImageFallback';
import { companyInfo } from '../../data/company';
import { CheckCircle2, Award, Zap, ShieldAlert } from 'lucide-react';

export const ManufacturingBanner: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#172B2A] text-white overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ImageFallback
          src="/images/company/quality.jpg"
          alt="AFANDINT Quality Control Inspection"
          aspectRatio="aspect-16/9"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B2A] via-[#172B2A]/90 to-[#172B2A]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#263C38] border border-[#324e49] text-xs font-bold uppercase tracking-widest text-[#C58B52]">
            <Award className="w-3.5 h-3.5" />
            <span>MANUFACTURING INTEGRITY</span>
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Quality Is at the Heart of Everything We Do.
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Our state-of-the-art facilities combine automated laser fabric inspection, 200-needle circular knitting precision, and strict batch-level stress testing. We guarantee that every product shipped meets exact technical specifications.
          </p>

          {/* Stats Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#263C38]">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#C58B52] block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
