import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize,
  Move
} from 'lucide-react';

interface ProductZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  activeImageIndex: number;
  onSelectImage: (index: number) => void;
  productName: string;
  productCode: string;
}

export const ProductZoomModal: React.FC<ProductZoomModalProps> = ({
  isOpen,
  onClose,
  images,
  activeImageIndex,
  onSelectImage,
  productName,
  productCode,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset zoom & pan when image changes or modal opens
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      resetZoom();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, resetZoom]);

  useEffect(() => {
    resetZoom();
  }, [activeImageIndex, resetZoom]);

  // Zoom helpers
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Double click toggles zoom between 1x and 2.5x
  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2.5);
      // Center zoom around click if possible
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.8;
        const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.8;
        setPosition({ x: -offsetX, y: -offsetY });
      }
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectImage((activeImageIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onSelectImage((activeImageIndex + 1) % images.length);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeImageIndex, images.length, onClose, onSelectImage, resetZoom]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  const currentImage = images[activeImageIndex] || images[0];

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 bg-[#0E0C0A]/95 backdrop-blur-md flex flex-col justify-between text-[#FAF6F0] select-none animate-in fade-in duration-200"
    >
      {/* Top Bar: Title, Zoom Controls & Close Button */}
      <header className="p-4 sm:px-8 border-b border-[#2D2720] bg-[#12100E]/90 flex items-center justify-between gap-4 z-20">
        <div className="flex items-center gap-3 truncate">
          <span className="font-serif font-bold text-lg sm:text-xl text-[#FAF6F0] truncate">
            {productName}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 bg-[#1A1612] border border-[#2D2720] text-[#FDAA27] font-mono text-xs rounded-xs">
            {productCode}
          </span>
          <span className="text-xs font-mono text-[#A89E90]">
            ({activeImageIndex + 1} / {images.length})
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom Out Button */}
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            title="Zoom Out (-)"
            className="p-2 sm:px-3 sm:py-2 bg-[#1A1612] hover:bg-[#2D2720] disabled:opacity-40 disabled:hover:bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] rounded-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Current Zoom Indicator / Reset Button */}
          <button
            onClick={resetZoom}
            title="Reset Zoom (0)"
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#1A1612] hover:bg-[#2D2720] border border-[#2D2720] hover:border-[#FDAA27] text-[#FDAA27] font-mono text-xs font-bold rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{Math.round(scale * 100)}%</span>
          </button>

          {/* Zoom In Button */}
          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            title="Zoom In (+)"
            className="p-2 sm:px-3 sm:py-2 bg-[#1A1612] hover:bg-[#2D2720] disabled:opacity-40 disabled:hover:bg-[#1A1612] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] rounded-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            className="hidden sm:flex p-2 sm:px-3 sm:py-2 bg-[#1A1612] hover:bg-[#2D2720] border border-[#2D2720] hover:border-[#FDAA27] text-[#FAF6F0] hover:text-[#FDAA27] rounded-xs transition-colors items-center gap-1 cursor-pointer"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            title="Close Zoom View (Esc)"
            className="p-2 sm:px-4 sm:py-2 bg-[#FDAA27] hover:bg-[#D98A10] text-[#12100E] font-bold text-xs rounded-xs transition-colors flex items-center gap-1 cursor-pointer ml-2"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">CLOSE</span>
          </button>
        </div>
      </header>

      {/* Main Interactive Zoom Stage */}
      <div 
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        className={`relative flex-1 w-full overflow-hidden flex items-center justify-center ${
          scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
        }`}
      >
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectImage((activeImageIndex - 1 + images.length) % images.length);
              }}
              title="Previous Photo (←)"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-xs bg-[#12100E]/80 hover:bg-[#FDAA27] border border-[#2D2720] text-[#FAF6F0] hover:text-[#12100E] shadow-2xl transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectImage((activeImageIndex + 1) % images.length);
              }}
              title="Next Photo (→)"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-xs bg-[#12100E]/80 hover:bg-[#FDAA27] border border-[#2D2720] text-[#FAF6F0] hover:text-[#12100E] shadow-2xl transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Scaled & Panned Image */}
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            transformOrigin: 'center center',
          }}
          className="max-w-[90vw] max-h-[75vh] flex items-center justify-center pointer-events-none"
        >
          <img
            src={currentImage}
            alt={productName}
            loading="eager"
            decoding="async"
            draggable={false}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Subtle Inspection Guide Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none bg-[#12100E]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#2D2720] text-[11px] font-mono text-[#A89E90] flex items-center gap-2">
          <Move className="w-3.5 h-3.5 text-[#FDAA27]" />
          <span>Double-click or scroll to zoom • Click &amp; drag to inspect material seams</span>
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <footer className="p-3 sm:p-4 border-t border-[#2D2720] bg-[#12100E]/90 flex items-center justify-center gap-3 overflow-x-auto z-20">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectImage(idx)}
              className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xs overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                activeImageIndex === idx 
                  ? 'border-[#FDAA27] scale-105 shadow-lg' 
                  : 'border-[#2D2720] opacity-60 hover:opacity-100 hover:border-[#FDAA27]/50'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </footer>
      )}
    </div>
  );
};
