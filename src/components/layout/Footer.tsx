import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { companyInfo } from '../../data/company';
import { Mail, Phone, MapPin, ArrowUp, Shield, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12100E] text-[#FAF6F0] border-t border-[#2D2720] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2D2720]">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" showTagline size="md" />
            <p className="text-sm text-[#A89E90] leading-relaxed max-w-sm font-sans font-normal">
              AFANDI INTERNATIONAL is an international manufacturing enterprise presenting thoughtful gearwear and carry accessory collections defined by quality materials and craftsmanship.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#FDAA27] font-mono tracking-wider uppercase font-bold">
              <Shield className="w-4 h-4 text-[#FDAA27]" />
              <span>ISO 9001:2015 CERTIFIED MANUFACTURING</span>
            </div>

            {/* Social Media Link Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#FDAA27]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#FDAA27]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#FDAA27]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all"
              >
                <Facebook className="w-4 h-4 text-[#FDAA27]" />
              </a>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FDAA27]">
              NAVIGATION & INQUIRY
            </h4>
            <ul className="space-y-3 text-sm text-[#D8CFBF] font-sans font-medium">
              <li>
                <Link to="/" className="hover:text-[#FDAA27] transition-colors">MAIN PORTAL (2 WINDOWS)</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FDAA27] transition-colors">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FDAA27] transition-colors">CONTACT US</Link>
              </li>
              <li>
                <Link to="/contact?type=product_inquiry" className="hover:text-[#FDAA27] transition-colors text-[#FDAA27] font-bold">
                  PRODUCT RELATED INQUIRY FORM &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FDAA27]">
              HEADQUARTERS
            </h4>
            <ul className="space-y-3.5 text-sm text-[#A89E90] font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FDAA27] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FDAA27] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#FDAA27] font-semibold text-[#FAF6F0]">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FDAA27] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#FDAA27] font-semibold text-[#FAF6F0]">{companyInfo.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#786E61]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-[#FAF6F0] font-bold">AFANDI INTERNATIONAL</strong>. All rights reserved. Quality in Every Detail.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[#FAF6F0] hover:text-[#FDAA27] transition-colors focus:outline-none cursor-pointer font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 text-[#FDAA27]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
