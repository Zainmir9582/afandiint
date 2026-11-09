import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Menu, X, ArrowUpRight, ClipboardList, Home } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Clean Navigation Links as requested: ONLY About Us, Contact Us, and Product Inquiry
  const navLinks = [
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRODUCT INQUIRY', path: '/contact?type=product_inquiry' },
  ];

  const headerBgClass = isScrolled
    ? 'bg-[#12100E]/95 backdrop-blur-md border-b border-[#2D2720] shadow-2xl py-2.5 text-[#FAF6F0]'
    : 'bg-[#12100E] py-3.5 text-[#FAF6F0] border-b border-[#2D2720]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 min-h-[56px]">
          
          {/* Logo on Left - Always light on dark obsidian theme */}
          <Logo variant="light" size="md" />

          {/* Nav Links on Right: ONLY About Us, Contact Us, and Product Inquiry */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wider uppercase font-semibold">
            
            {/* Quick Home / Return to 2 Windows Icon */}
            <Link
              to="/"
              className="text-[#A89E90] hover:text-[#FDAA27] transition-colors p-1"
              title="Return to Main Windows"
            >
              <Home className="w-4 h-4" />
            </Link>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap transition-colors py-1 ${
                    isActive
                      ? 'text-[#FDAA27] font-bold underline underline-offset-8 decoration-2 decoration-[#FDAA27]'
                      : 'text-[#A89E90] hover:text-[#FAF6F0]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Action CTA: Product Related Inquiry Form Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact?type=product_inquiry"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-sans font-bold uppercase tracking-widest text-[#12100E] bg-[#FDAA27] hover:bg-[#D98A10] transition-all rounded-xs shadow-md"
            >
              <ClipboardList className="w-4 h-4 text-[#12100E]" />
              <span>PRODUCT INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#12100E]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#FAF6F0] hover:text-[#FDAA27] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FDAA27]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12100E] border-b border-[#2D2720] text-[#FAF6F0] px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-sans font-bold tracking-widest uppercase text-[#A89E90] hover:text-[#FDAA27] border-b border-[#2D2720]/60 pb-2.5"
            >
              <Home className="w-4 h-4 text-[#FDAA27]" />
              <span>MAIN SHOWROOM PORTAL</span>
            </Link>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 font-serif text-xl tracking-wider uppercase transition-colors ${
                    isActive ? 'text-[#FDAA27] font-bold border-l-2 border-[#FDAA27] pl-4' : 'text-[#A89E90] hover:text-[#FAF6F0]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-[#2D2720]">
              <Link
                to="/contact?type=product_inquiry"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-sans font-bold uppercase tracking-widest text-[#12100E] bg-[#FDAA27] rounded-xs shadow-md"
              >
                <ClipboardList className="w-4 h-4 text-[#12100E]" />
                <span>PRODUCT INQUIRY FORM</span>
                <ArrowUpRight className="w-4 h-4 text-[#12100E]" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
