import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/company';
import { ShieldCheck, Compass, Sparkles, Maximize, Feather, HeartHandshake } from 'lucide-react';

export const WhyChooseGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FDAA27]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#FDAA27]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#FDAA27]" />;
      case 'Maximize': return <Maximize className="w-5 h-5 text-[#FDAA27]" />;
      case 'Feather': return <Feather className="w-5 h-5 text-[#FDAA27]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#FDAA27]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#FDAA27]" />;
    }
  };

  return (
    <section className="py-24 bg-[#FAF6F0] text-[#12100E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-sans text-sm tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
            WHY AFANDI INTERNATIONAL
          </span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
            Core Principles
          </h2>
        </div>

        {/* 6 Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#FFFFFF] p-8 rounded-xs border border-[#E3D8C8] hover:border-[#FDAA27] transition-all space-y-4 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xs bg-[#F3EDE2] border border-[#E3D8C8] flex items-center justify-center">
                {getIcon(feature.iconName)}
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#12100E]">
                {feature.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#6E6457] leading-relaxed font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
