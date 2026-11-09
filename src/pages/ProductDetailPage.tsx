import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gearwearProducts } from '../data/gearwear';
import { accessoriesProducts } from '../data/accessories';
import { Product } from '../types/product';
import { ImageFallback } from '../components/ui/ImageFallback';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  Maximize2,
  Home
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const allProducts: Product[] = [...gearwearProducts, ...accessoriesProducts];
  const product = allProducts.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | AFANDI INTERNATIONAL`;
      window.scrollTo(0, 0);
      setActiveImageIndex(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-[#12100E] flex items-center justify-center text-center px-4 font-sans text-[#FAF6F0]">
        <div className="bg-[#1A1612] p-8 rounded-xs border border-[#2D2720] max-w-md space-y-4">
          <h2 className="font-serif font-bold text-2xl text-[#FAF6F0]">Product Not Found</h2>
          <p className="text-sm text-[#A89E90]">
            The requested product details could not be located in the AFANDI INTERNATIONAL catalogue.
          </p>
          <Link
            to="/gearwear"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FDAA27] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#12100E]" />
            <span>Return to Collection</span>
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.coverImage];

  // Eagerly pre-cache gallery photos for instant switching
  useEffect(() => {
    galleryImages.forEach((imgUrl) => {
      const img = new Image();
      img.src = imgUrl;
    });
  }, [galleryImages]);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#12100E] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between font-sans text-xs text-[#A89E90] border-b border-[#2D2720] pb-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[#FAF6F0] hover:text-[#FDAA27] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FDAA27]" />
            <span>BACK TO COLLECTION</span>
          </button>

          <div className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-[#FDAA27] transition-colors font-bold text-[#FDAA27]">
              <Home className="w-3.5 h-3.5" />
              <span>Portal</span>
            </Link>
            <span>/</span>
            <Link to={`/${product.category}`} className="hover:text-[#FDAA27] capitalize text-[#FAF6F0]">
              {product.category}
            </Link>
            {product.subCategory && (
              <>
                <span>/</span>
                <Link to={`/${product.category}?sub=${product.subCategory}`} className="hover:text-[#FFE099] text-[#FDAA27] font-bold">
                  {product.subCategoryTitle || product.subCategory}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-[#A89E90] font-semibold truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* Editorial Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#1A1612] rounded-xs p-6 sm:p-10 border border-[#2D2720] shadow-2xl">
          
          {/* Left Column: Gallery & Image Zoom */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Image Stage */}
            <div className="relative rounded-xs overflow-hidden bg-[#0E0C0A] aspect-4/3 border border-[#2D2720] group">
              <ImageFallback
                src={galleryImages[activeImageIndex]}
                alt={`${product.name} - Photo ${activeImageIndex + 1}`}
                aspectRatio="aspect-4/3"
                className={`w-full h-full object-cover transition-all duration-500 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'group-hover:scale-103 cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Category & Subcategory Pill Tags */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 flex-wrap">
                <span className="px-3 py-1 bg-[#12100E]/90 backdrop-blur-md border border-[#2D2720] font-sans text-[10px] font-bold text-[#FDAA27] uppercase tracking-wider rounded-xs">
                  {product.category}
                </span>
                {product.subCategoryTitle && (
                  <span className="px-2.5 py-1 bg-[#FDAA27] text-[#12100E] font-sans text-[10px] font-bold uppercase tracking-wider rounded-xs shadow-sm">
                    {product.subCategoryTitle}
                  </span>
                )}
              </div>

              {/* Product Code Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-2.5 py-1 bg-[#12100E]/90 backdrop-blur-md border border-[#2D2720] text-[#FAF6F0] font-mono text-xs font-semibold tracking-wider rounded-xs">
                  {product.productCode}
                </span>
              </div>

              {/* Slider Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xs bg-[#12100E]/80 hover:bg-[#FDAA27] border border-[#2D2720] text-[#FAF6F0] hover:text-[#12100E] shadow-lg transition-all focus:outline-none cursor-pointer"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xs bg-[#12100E]/80 hover:bg-[#FDAA27] border border-[#2D2720] text-[#FAF6F0] hover:text-[#12100E] shadow-lg transition-all focus:outline-none cursor-pointer"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 font-sans text-[10px] text-[#A89E90] bg-[#12100E]/90 px-2.5 py-1 rounded-xs border border-[#2D2720] flex items-center gap-1.5">
                <Maximize2 className="w-3 h-3 text-[#FDAA27]" />
                <span>Click image to zoom</span>
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xs overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#FDAA27] scale-105' 
                        : 'border-[#2D2720] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageFallback
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      aspectRatio="aspect-4/3"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Note */}
            <div className="p-4 bg-[#221D18] border border-[#2D2720] rounded-xs font-sans text-xs text-[#A89E90] flex items-start gap-3 mt-4">
              <ShieldCheck className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FAF6F0] block font-serif text-sm font-bold">AFANDI INTERNATIONAL Craftsmanship</strong>
                Every item is crafted in certified facilities subject to multi-point material and seam inspections.
              </div>
            </div>

          </div>

          {/* Right Column: Specification Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Lockup */}
            <div className="space-y-2 pb-4 border-b border-[#2D2720]">
              <span className="font-mono text-xs font-bold text-[#FDAA27] tracking-widest uppercase block">
                REF CODE // {product.productCode}
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] leading-tight">
                {product.name}
              </h1>
              <p className="font-sans text-sm font-medium text-[#A89E90]">
                Material: <span className="text-[#FAF6F0] font-bold">{product.material}</span>
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2 font-sans">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDAA27]">
                PRODUCT DESCRIPTION
              </h3>
              <p className="text-base sm:text-lg text-[#D8CFBF] leading-relaxed font-normal">
                {product.longDescription}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-3 font-sans">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDAA27]">
                KEY FEATURES & CRAFTSMANSHIP
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base font-medium">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-[#221D18] p-3 rounded-xs border border-[#2D2720]">
                    <CheckCircle2 className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
                    <span className="text-[#FAF6F0] font-normal">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizes & Colors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDAA27]">
                  AVAILABLE SIZES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <span key={sz} className="px-3 py-1.5 text-sm font-bold bg-[#221D18] text-[#FAF6F0] border border-[#2D2720] rounded-xs font-mono">
                      {sz}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDAA27]">
                  COLOR PALETTE
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((clr) => (
                    <span key={clr} className="px-3 py-1.5 text-sm font-medium bg-[#221D18] text-[#FAF6F0] border border-[#2D2720] rounded-xs">
                      {clr}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Specifications */}
            {product.specifications && (
              <div className="space-y-2 font-sans pt-2">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FDAA27]">
                  PRODUCT SPECIFICATIONS
                </h3>
                <div className="bg-[#221D18] rounded-xs border border-[#2D2720] p-4 text-sm sm:text-base divide-y divide-[#2D2720]">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="py-2.5 flex justify-between">
                      <span className="font-medium text-[#A89E90]">{key}</span>
                      <span className="text-[#FAF6F0] font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Notes */}
            {product.additionalNotes && (
              <p className="font-sans text-sm text-[#A89E90] italic p-3.5 bg-[#221D18]/70 border border-[#2D2720] rounded-xs">
                Note: {product.additionalNotes}
              </p>
            )}

            {/* Action Buttons (Strictly Product Related Inquiry - No cart or pricing) */}
            <div className="pt-6 border-t border-[#2D2720] flex flex-col sm:flex-row items-stretch gap-4 font-sans">
              <Link
                to={`/contact?subject=${encodeURIComponent(`Inquiry regarding ${product.name} (${product.productCode})`)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#12100E] bg-[#FDAA27] hover:bg-[#D98A10] transition-all rounded-xs shadow-md"
              >
                <PhoneCall className="w-5 h-5 text-[#12100E]" />
                <span>PRODUCT RELATED INQUIRY</span>
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#FAF6F0] bg-[#221D18] hover:bg-[#2D2720] border border-[#2D2720] rounded-xs transition-all cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-[#FAF6F0]" />
                <span>BACK TO COLLECTION</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
