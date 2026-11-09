import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Facebook,
  ArrowUpRight
} from 'lucide-react';
import { companyInfo } from '../data/company';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "AFANDI INTERNATIONAL | Official Portal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#12100E] text-[#FAF6F0] flex flex-col justify-between selection:bg-[#FDAA27] selection:text-[#12100E]">
      
      {/* ======================================================== */}
      {/* 1. MIDDLE OF THE TOP: LOGO & COMPANY NAME                */}
      {/* ======================================================== */}
      <header className="pt-8 sm:pt-10 pb-6 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Centered Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-3.5"
          >
            <img 
              src="/images/logo/brand-logo.png" 
              alt="AFANDI INTERNATIONAL Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Centered Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-1.5"
          >
            <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#FAF6F0] tracking-[0.22em] uppercase leading-none">
              AFANDI INTERNATIONAL
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#FDAA27] font-semibold tracking-[0.25em] uppercase">
              Quality in Every Detail • Crafted with Excellence
            </p>
          </motion.div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. THE WINDOWS WITH JUST NAME AND A WALLPAPER PIC        */}
      {/* ======================================================== */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          {/* WINDOW 1: GEARWEAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <Link
              to="/gearwear"
              className="group relative block w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-xs overflow-hidden border-2 border-[#2D2720] hover:border-[#FDAA27] transition-all duration-500 shadow-2xl bg-[#1A1612]"
            >
              {/* Wallpaper Picture */}
              <img
                src="/images/gearwear/tactical_gloves.jpg"
                alt="AFANDI Gearwear Wallpaper"
                className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-95"
              />

              {/* Wallpaper Vignette & Darkness Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-transparent group-hover:via-[#12100E]/25 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Just Name in the Window */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="relative">
                  <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF6F0] tracking-[0.18em] uppercase transition-all duration-300 group-hover:text-[#FDAA27] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                    GEARWEAR
                  </h2>
                  <div className="w-16 h-[2px] bg-[#FDAA27] mx-auto mt-4 group-hover:w-32 transition-all duration-500" />
                </div>

                {/* Minimal Subtle Indicator on Hover */}
                <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-xs bg-[#12100E]/80 backdrop-blur-md border border-[#FDAA27]/50 text-xs font-mono font-bold tracking-widest uppercase text-[#FDAA27] opacity-90 group-hover:opacity-100 group-hover:bg-[#FDAA27] group-hover:text-[#12100E] transition-all duration-300">
                  <span>ENTER SHOWROOM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* WINDOW 2: ACCESSORIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full"
          >
            <Link
              to="/accessories"
              className="group relative block w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-xs overflow-hidden border-2 border-[#2D2720] hover:border-[#FDAA27] transition-all duration-500 shadow-2xl bg-[#1A1612]"
            >
              {/* Wallpaper Picture */}
              <img
                src="/images/accessories/edc_wallet.jpg"
                alt="AFANDI Accessories Wallpaper"
                className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-95"
              />

              {/* Wallpaper Vignette & Darkness Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-transparent group-hover:via-[#12100E]/25 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Just Name in the Window */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="relative">
                  <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF6F0] tracking-[0.18em] uppercase transition-all duration-300 group-hover:text-[#FDAA27] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                    ACCESSORIES
                  </h2>
                  <div className="w-16 h-[2px] bg-[#FDAA27] mx-auto mt-4 group-hover:w-32 transition-all duration-500" />
                </div>

                {/* Minimal Subtle Indicator on Hover */}
                <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-xs bg-[#12100E]/80 backdrop-blur-md border border-[#FDAA27]/50 text-xs font-mono font-bold tracking-widest uppercase text-[#FDAA27] opacity-90 group-hover:opacity-100 group-hover:bg-[#FDAA27] group-hover:text-[#12100E] transition-all duration-300">
                  <span>ENTER SHOWROOM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ONLY FOOTER CONTAINING CONTACTS DETAILS               */}
      {/* ======================================================== */}
      <footer className="w-full border-t border-[#2D2720] bg-[#12100E] py-8 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Contact Details (Phone & Email) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 font-sans text-sm sm:text-base text-[#FAF6F0]">
            {/* Phone */}
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="inline-flex items-center gap-2.5 text-[#FAF6F0] hover:text-[#FDAA27] transition-colors font-medium group"
            >
              <span className="p-2 rounded-full bg-[#1A1612] border border-[#2D2720] group-hover:border-[#FDAA27] transition-colors">
                <Phone className="w-4 h-4 text-[#FDAA27]" />
              </span>
              <span>{companyInfo.phone}</span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="inline-flex items-center gap-2.5 text-[#FAF6F0] hover:text-[#FDAA27] transition-colors font-medium group"
            >
              <span className="p-2 rounded-full bg-[#1A1612] border border-[#2D2720] group-hover:border-[#FDAA27] transition-colors">
                <Mail className="w-4 h-4 text-[#FDAA27]" />
              </span>
              <span>{companyInfo.email}</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all transform hover:scale-110"
            >
              <MessageCircle className="w-4 h-4 text-[#FDAA27]" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all transform hover:scale-110"
            >
              <Instagram className="w-4 h-4 text-[#FDAA27]" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all transform hover:scale-110"
            >
              <Linkedin className="w-4 h-4 text-[#FDAA27]" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] transition-all transform hover:scale-110"
            >
              <Facebook className="w-4 h-4 text-[#FDAA27]" />
            </a>
          </div>

          {/* Minimal Copyright */}
          <div className="font-mono text-xs text-[#786E61]">
            &copy; {new Date().getFullYear()} AFANDI INTERNATIONAL. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
};
