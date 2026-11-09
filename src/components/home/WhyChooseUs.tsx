import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/company';
import { Cpu, ShieldCheck, Award, Sparkles, Sliders, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#C58B52]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C58B52]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#C58B52]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C58B52]" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-[#C58B52]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#C58B52]" />;
      default: return <Award className="w-6 h-6 text-[#C58B52]" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF8F3] text-[#252A2B] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C58B52]">
            WHY CHOOSE AFANDINT
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#172B2A]">
            Built on Industrial Integrity
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            We hold ourselves to rigorous standards across every textile metric, ensuring dependable product quality for corporate partners.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#C58B52]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#172B2A] flex items-center justify-center shrink-0 shadow-sm">
                  {getIcon(feature.iconName)}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#172B2A]">
                  {feature.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-400">
                <span>AFANDINT GUARANTEE</span>
                <span className="text-[#C58B52] font-mono">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
