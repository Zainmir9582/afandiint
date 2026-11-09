import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '', 
  showTagline = false,
  size = 'md'
}) => {
  const isLight = variant === 'light';
  
  // Size variants for image and text
  const sizeConfig = {
    sm: {
      img: 'h-8 md:h-9',
      title: 'text-sm md:text-base font-bold',
      tagline: 'text-[8px] tracking-[0.2em]'
    },
    md: {
      img: 'h-10 md:h-12 lg:h-12',
      title: 'text-base sm:text-lg lg:text-xl font-bold',
      tagline: 'text-[9px] tracking-[0.22em]'
    },
    lg: {
      img: 'h-12 sm:h-14 lg:h-16',
      title: 'text-xl sm:text-2xl font-bold',
      tagline: 'text-[10px] tracking-[0.25em]'
    }
  };

  const currentSize = sizeConfig[size];

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3.5 sm:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDAA27] rounded-xs shrink-0 ${className}`}
    >
      {/* Brand Image Logo - src/assets/images/logo.png */}
      <div className={`relative ${currentSize.img} w-auto transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center`}>
        <img 
          src="/images/logo/brand-logo.png" 
          alt="AFANDI INTERNATIONAL Logo" 
          className="h-full w-auto object-contain drop-shadow-md"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className={`font-serif tracking-wider leading-none uppercase transition-colors ${currentSize.title} ${
          isLight ? 'text-[#FAF6F0] group-hover:text-[#FDAA27]' : 'text-[#12100E] group-hover:text-[#D98A10]'
        }`}>
          AFANDI INTERNATIONAL
        </span>
        {showTagline && (
          <span className={`font-sans font-bold uppercase mt-1.5 ${currentSize.tagline} ${
            isLight ? 'text-[#FDAA27]' : 'text-[#6E6457]'
          }`}>
            Quality in Every Detail
          </span>
        )}
      </div>
    </Link>
  );
};



