import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface ImageFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  aspectRatio = 'aspect-4/3',
  loading = 'eager',
  decoding = 'async',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full min-h-[160px] bg-[#1A1612] text-[#FAF6F0] flex flex-col items-center justify-center p-6 text-center border border-[#2D2720] rounded-xs ${aspectRatio} ${className}`}
      >
        <Package className="w-7 h-7 text-[#FDAA27] mb-2 opacity-90" />
        <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#FAF6F0]">AFANDI INTERNATIONAL</span>
        <span className="font-sans text-[11px] text-[#A89E90] mt-1 max-w-[200px] line-clamp-2">{fallbackText || "PRODUCT SPEC ARCHIVE"}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1A1612] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1A1612] flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-[#FDAA27] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={loading}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
