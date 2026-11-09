import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { Star, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3EDE2] text-[#12100E] border-y border-[#E3D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6F0] border border-[#E3D8C8] text-[#6E6457] font-sans text-xs font-semibold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-[#D98A10]" />
            <span>PLACEHOLDER TESTIMONIALS (FOR REPLACEMENT)</span>
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#12100E]">
            Partner Feedback
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-[#FFFFFF] p-8 rounded-xs border border-[#E3D8C8] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#FDAA27]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FDAA27]" />
                  ))}
                </div>

                <p className="font-serif text-sm text-[#12100E] italic leading-relaxed">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D8C8] font-sans text-xs">
                <h4 className="font-bold text-[#12100E]">{test.author}</h4>
                <p className="text-[#6E6457]">{test.role}, <span className="text-[#D98A10] font-semibold">{test.company}</span></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
