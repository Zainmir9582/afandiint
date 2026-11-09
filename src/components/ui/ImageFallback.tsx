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
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full min-h-[160px] bg-[#F3EDE2] text-[#12100E] flex flex-col items-center justify-center p-6 text-center border border-[#E3D8C8] rounded-xs ${aspectRatio} ${className}`}
      >
        <Package className="w-7 h-7 text-[#FDAA27] mb-2 opacity-90" />
        <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#12100E]">AFANDI INTERNATIONAL</span>
        <span className="font-sans text-[11px] text-[#6E6457] mt-1 max-w-[200px] line-clamp-2">{fallbackText || "PLACEHOLDER – REPLACE WITH REAL PHOTO"}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F3EDE2]/50 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#FDAA27] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
};
