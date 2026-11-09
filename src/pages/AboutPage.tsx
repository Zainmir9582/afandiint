import React, { useEffect } from 'react';
import { companyInfo } from '../data/company';
import { ImageFallback } from '../components/ui/ImageFallback';
import { ShieldCheck, Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | AFANDI INTERNATIONAL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#12100E] text-[#FAF6F0]">
      
      {/* 1. Editorial Hero Banner */}
      <section className="relative bg-[#1A1612] py-20 overflow-hidden border-b border-[#2D2720]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDAA27]/15 border border-[#FDAA27]/30 text-[#FDAA27] text-xs font-mono font-bold tracking-widest uppercase rounded-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT AFANDI INTERNATIONAL</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#FAF6F0] leading-tight">
            Quality in Every Detail.<br />Excellence in Every Product.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#D8CFBF] max-w-2xl mx-auto font-normal">
            Learn about our design approach, product development philosophy, and commitment to material craftsmanship across gearwear and carry accessories.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction & Story */}
      <section className="py-24 bg-[#12100E] border-b border-[#2D2720]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
                OUR DESIGN HERITAGE
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0]">
                An Approach Built Around Purpose & Precision
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#A89E90] leading-relaxed font-normal">
                Founded in {companyInfo.foundedYear}, AFANDI INTERNATIONAL represents an international product-focused enterprise specializing in two core collections: Gearwear and Accessories. We focus on developing items that combine refined minimalist aesthetics with active physical functionality.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#A89E90] leading-relaxed font-normal">
                By maintaining total oversight over material sourcing, pattern development, and laboratory testing, AFANDI INTERNATIONAL ensures that every product embodies our brand promise: <em>Quality in Every Detail. Excellence in Every Product.</em>
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 font-sans">
                <div className="p-5 bg-[#1A1612] rounded-xs border border-[#2D2720]">
                  <span className="font-serif font-bold text-3xl text-[#FAF6F0] block">24+</span>
                  <span className="text-[11px] text-[#A89E90] font-semibold uppercase tracking-wider">Years Design Heritage</span>
                </div>

                <div className="p-5 bg-[#1A1612] rounded-xs border border-[#2D2720]">
                  <span className="font-serif font-bold text-3xl text-[#FDAA27] block">35+</span>
                  <span className="text-[11px] text-[#A89E90] font-semibold uppercase tracking-wider">Global Distribution Markets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xs overflow-hidden shadow-2xl border border-[#2D2720]">
                <ImageFallback
                  src="/images/company/factory.jpg"
                  alt="AFANDI Atelier Studio"
                  aspectRatio="aspect-4/3"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Company Philosophy, Mission & Vision */}
      <section className="py-24 bg-[#1A1612] border-b border-[#2D2720]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif font-bold text-4xl text-[#FAF6F0]">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            <div className="bg-[#12100E] p-8 rounded-xs border border-[#2D2720] space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xs bg-[#221D18] flex items-center justify-center text-[#FDAA27] border border-[#2D2720]">
                <Target className="w-6 h-6 text-[#FDAA27]" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#FAF6F0]">Our Mission</h3>
              <p className="text-sm text-[#A89E90] leading-relaxed font-normal">
                To present thoughtfully designed gearwear, handwear gloves, and carrying accessories that combine quality materials, physical functionality, and timeless style for corporate and outdoor partners globally.
              </p>
            </div>

            <div className="bg-[#12100E] p-8 rounded-xs border border-[#2D2720] space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xs bg-[#221D18] flex items-center justify-center text-[#FDAA27] border border-[#2D2720]">
                <Eye className="w-6 h-6 text-[#FDAA27]" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#FAF6F0]">Our Vision</h3>
              <p className="text-sm text-[#A89E90] leading-relaxed font-normal">
                To serve as a recognized international benchmark for warm minimalist product design and manufacturing excellence across technical apparel and travel accessories.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Product Development & Quality Standards */}
      <section className="py-24 bg-[#12100E] border-b border-[#2D2720]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] font-bold text-[#FDAA27] uppercase block">
              DEVELOPMENT & COMPLIANCE
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#FAF6F0]">
              Quality and Attention to Detail
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A89E90]">
              Our products are produced in compliance with rigorous quality standards and environmental protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {companyInfo.qualityStandards.map((std, idx) => (
              <div key={idx} className="bg-[#1A1612] p-6 rounded-xs border border-[#2D2720] space-y-3 shadow-lg">
                <ShieldCheck className="w-6 h-6 text-[#FDAA27]" />
                <h4 className="font-serif text-lg font-bold text-[#FAF6F0]">{std.title}</h4>
                <span className="text-xs font-mono font-bold text-[#FDAA27] block">{std.code}</span>
                <p className="text-xs text-[#A89E90] leading-relaxed font-normal">{std.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Direct Product Inquiry CTA */}
      <section className="py-20 bg-[#1A1612] text-center border-t border-[#2D2720]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FDAA27] font-bold block">
            CORPORATE PARTNERSHIPS & INQUIRIES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#FAF6F0]">
            Connect with Our Product Development Team
          </h2>
          <p className="font-sans text-base text-[#A89E90] max-w-xl mx-auto">
            Discuss production requirements, material specifications, sample evaluations, and catalog inquiries directly with our corporate team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?type=product_inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDAA27] hover:bg-[#D98A10] text-[#12100E] font-sans font-bold text-sm uppercase tracking-wider rounded-xs shadow-lg transition-all"
            >
              <span>SUBMIT PRODUCT INQUIRY</span>
              <ArrowRight className="w-4 h-4 text-[#12100E]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
