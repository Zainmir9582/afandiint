import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrandPreloaderProps {
  onComplete?: () => void;
  minDuration?: number; // milliseconds
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({ 
  onComplete,
  minDuration = 1400 
}) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState('INITIALIZING CATALOGUE ARCHIVE...');

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / minDuration) * 100), 100);
      
      setProgress(rawProgress);

      if (rawProgress < 40) {
        setStatusText('INITIALIZING CATALOGUE ARCHIVE...');
      } else if (rawProgress < 80) {
        setStatusText('PREPARING GEARWEAR & ACCESSORIES...');
      } else {
        setStatusText('SHOWROOM READY');
      }

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 250);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="brand-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#12100E] text-[#FAF6F0] overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,170,39,0.12)_0%,rgba(18,16,14,0.95)_70%)] pointer-events-none" />

          {/* Grid background texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FDAA27 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            
            {/* Logo with Soft Glowing Ambient Halo */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer Pulsing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-36 h-36 rounded-full bg-[#FDAA27]/20 blur-xl"
              />

              {/* Logo Emblem Container */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-4 rounded-xl border border-[#FDAA27]/30 bg-[#12100E]/80 backdrop-blur-md shadow-[0_0_30px_rgba(253,170,39,0.15)]"
              >
                <img
                  src="/images/logo/brand-logo.png"
                  alt="AFANDI INTERNATIONAL Logo"
                  className="w-24 sm:w-28 h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-1.5"
            >
              <h1 className="font-serif font-bold text-2xl sm:text-3xl tracking-[0.18em] text-[#FAF6F0] uppercase">
                AFANDI INTERNATIONAL
              </h1>
              <p className="font-sans text-xs tracking-[0.25em] text-[#FDAA27] font-semibold uppercase">
                Quality in Every Detail • Crafted with Excellence
              </p>
            </motion.div>

            {/* Progress Bar & Numeric Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-64 sm:w-72 mt-8 space-y-2.5"
            >
              {/* Progress Track */}
              <div className="h-[3px] w-full bg-[#26201A] rounded-full overflow-hidden border border-[#3D3328]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D98A10] via-[#FDAA27] to-[#FFE099] rounded-full shadow-[0_0_8px_#FDAA27]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status and Percentage Label */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#A89E90]">
                <span>{statusText}</span>
                <span className="text-[#FDAA27] font-bold">{progress}%</span>
              </div>
            </motion.div>

            {/* Fast Skip Option for Immediate Entrance */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              onClick={handleSkip}
              className="mt-6 text-[11px] font-sans uppercase tracking-[0.2em] text-[#A89E90] hover:text-[#FDAA27] transition-colors cursor-pointer py-1 px-3 border border-transparent hover:border-[#FDAA27]/40 rounded-xs"
            >
              Enter Showroom &rarr;
            </motion.button>

          </div>

          {/* Minimal Bottom Security / Standard Label */}
          <div className="absolute bottom-6 left-0 right-0 text-center font-sans text-[10px] tracking-[0.22em] text-[#786E61] uppercase">
            Official Corporate Product Showcase
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
