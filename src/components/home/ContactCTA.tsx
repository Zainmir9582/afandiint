import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF6F0] text-[#12100E] text-center border-t border-[#E3D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="font-sans text-xs tracking-[0.25em] font-semibold text-[#FDAA27] uppercase block">
            GET IN TOUCH
          </span>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#12100E]">
            Let's Connect and Create Something Exceptional.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6E6457] leading-relaxed font-light">
            Have a question about our products or collections? We would be pleased to hear from you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-sans font-bold uppercase tracking-widest text-[#12100E] bg-[#FDAA27] hover:bg-[#D98A10] transition-all rounded-xs shadow-md font-bold"
            >
              <span>CONTACT OUR TEAM</span>
              <ArrowUpRight className="w-4 h-4 text-[#12100E]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
