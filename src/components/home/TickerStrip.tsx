import React from 'react';

export const TickerStrip: React.FC = () => {
  const keywords = [
    "DURABLE",
    "LIGHTWEIGHT",
    "PRECISE",
    "TESTED",
    "WEATHERPROOF",
    "ERGONOMIC",
    "CERTIFIED",
    "1000D CORDURA",
    "HYDROPHOBIC",
    "ISO 9001",
    "SIGNAL LIME ACCENTS"
  ];

  const fullList = [...keywords, ...keywords, ...keywords, ...keywords];

  return (
    <div className="bg-[#171C24] border-y border-[#3A4350] py-3 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold tracking-widest text-[#F6F8FA]">
        {fullList.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="hover:text-[#C6F432] transition-colors">{item}</span>
            <span className="text-[#C6F432] font-extrabold">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};
