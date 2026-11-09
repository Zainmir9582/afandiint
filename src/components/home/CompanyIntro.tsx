import React from 'react';
import { motion } from 'framer-motion';
import { ImageFallback } from '../ui/ImageFallback';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-24 bg-[#F3EDE2] text-[#12100E] relative border-y border-[#E3D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-xs overflow-hidden shadow-xl border border-[#E3D8C8] bg-[#FFFFFF]">
              <ImageFallback
                src="/images/company/factory.jpg"
                alt="AFANDI INTERNATIONAL Design Studio"
                aspectRatio="aspect-4/3"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="font-sans text-xs tracking-[0.25em] font-semibold text-[#D98A10] uppercase block">
              OUR PHILOSOPHY
            </span>

            <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight text-[#12100E]">
              Thoughtful Design.<br />Exceptional Quality.
            </h2>

            <p className="font-sans text-base text-[#6E6457] leading-relaxed font-light">
              At AFANDI INTERNATIONAL, we focus on presenting carefully developed products that combine quality, functionality, and contemporary design.
            </p>

            <p className="font-sans text-base text-[#6E6457] leading-relaxed font-light">
              Our approach pairs luxury textile selection with disciplined manufacturing processes, ensuring that every garment and carrying accessory meets international standards of durability and refined aesthetic presence.
            </p>

            <div className="pt-4 border-t border-[#E3D8C8] grid grid-cols-2 gap-6 text-xs font-sans text-[#6E6457]">
              <div>
                <strong className="text-[#12100E] block font-serif text-lg font-bold">Materials First</strong>
                Certified cottons, Merino wools & waxed canvases.
              </div>
              <div>
                <strong className="text-[#12100E] block font-serif text-lg font-bold">Uncompromising Quality</strong>
                Rigorous material and seam testing protocols.
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
