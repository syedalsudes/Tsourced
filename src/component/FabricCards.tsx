'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Shirt, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  Flame, 
  Layers, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface FabricCardsProps {
  activeFabric?: string;
  onSelectFabric?: (fabricName: string) => void;
}

export default function FabricCards({ activeFabric, onSelectFabric }: FabricCardsProps) {
  const fabrics = [
    {
      name: "Core Fleece",
      tagline: "Heavyweight • Smooth • Reliable",
      desc: "Our standard 80% cotton / 20% polyester fleece range engineered for everyday durability, warmth, and a smooth exterior surface ideal for custom printing.",
      bestFor: ["Crewnecks", "Pullover Hoodies", "Full-Zip Hoodies", "Youth Hoodies"],
      chooseWhen: "You want a dependable, classic fleece garment with a smooth print face and broad size availability (up to 5XL).",
      weight: "9 oz Fleece",
      image: "/foldhoodies.png",
      icon: <Flame className="text-orange" size={20} />,
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      name: "CloudLoop",
      tagline: "Midweight • Ring-Spun • Textured",
      desc: "Crafted from a 60% ring-spun cotton / 40% polyester blend featuring a soft, towel-like visual texture and a distinctive knit construction with a relaxed drape.",
      bestFor: ["Relaxed Crewnecks", "Pullover Hoodies", "Full-Zip Hoodies", "Youth Hoodies"],
      chooseWhen: "You want a softer, slightly lighter garment with a unique tactile knit surface and vibrant color options.",
      weight: "8.5 oz Fleece",
      image: "/foldhoodies.png",
      icon: <Layers className="text-orange" size={20} />,
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      name: "GrainKnit",
      tagline: "Heavyweight • Tonal • Brushed Interior",
      desc: "A 60% premium cotton / 40% polyester knit featuring a pronounced tonal surface texture on the outside and a heavy, cozy brushed-back fleece interior.",
      bestFor: ["Contemporary Crewnecks", "Modern Retail Hoodies", "Screen Print & Embroidery"],
      chooseWhen: "You want an elevated retail look with rich surface character while keeping a smooth face for DTF, embroidery, or screen printing.",
      weight: "9 oz Fleece",
      image: "/foldhoodies.png",
      icon: <Sparkles className="text-orange" size={20} />,
      badgeBg: "bg-orange-50 text-orange border-orange/20"
    }
  ];

  return (
    <section className="py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-orange font-bold tracking-widest uppercase text-xs mb-3 inline-block bg-orange/10 px-4 py-1.5 rounded-full border border-orange/20 shadow-xs">
          Signature Fabric Families
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-4">
          Choose the Right <span className="text-orange">Fabric</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Click on any fabric family below to filter and explore all garments crafted from that specific knit construction.
        </p>
      </div>

      {/* Grid Layout Cards - 3 Columns for 3 Fabric Families */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fabrics.map((fabric) => {
          const isSelected = activeFabric === fabric.name;

          return (
            <div 
              key={fabric.name}
              onClick={() => onSelectFabric && onSelectFabric(fabric.name)}
              className={`cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border-2 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isSelected 
                  ? 'border-orange ring-4 ring-orange/15 shadow-lg' 
                  : 'border-gray-200/90 hover:border-orange/50'
              }`}
            >
              {/* Card Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 shrink-0">
                <Image 
                  src={fabric.image} 
                  alt={fabric.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Weight Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 text-navy text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-sm uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">
                  <Scale size={13} className="text-orange" /> {fabric.weight}
                </div>

                {/* Tagline / Active Status Chip */}
                <div className="absolute top-4 right-4 z-10">
                  {isSelected ? (
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-orange text-white shadow-md">
                      Selected
                    </span>
                  ) : (
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-xs ${fabric.badgeBg}`}>
                      {fabric.tagline.split(' • ')[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Title & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center border border-orange/20 shrink-0">
                      {fabric.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 leading-tight group-hover:text-orange transition-colors">
                        {fabric.name}
                      </h3>
                      <p className="text-[11px] font-bold text-orange tracking-wider uppercase">
                        {fabric.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {fabric.desc}
                  </p>

                  {/* Ideal Applications (Best For) */}
                  <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-700 mb-2.5 flex items-center gap-1.5">
                      <Shirt size={14} className="text-orange" /> Available Garments:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {fabric.bestFor.map((item, iIdx) => (
                        <span 
                          key={iIdx} 
                          className="text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs flex items-center gap-1"
                        >
                          <CheckCircle2 size={12} className="text-orange shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Choose When Box */}
                  <div className="border-l-2 border-orange pl-3 py-1 bg-orange/5 rounded-r-lg">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                      When to select:
                    </p>
                    <p className="text-xs font-medium text-slate-700 italic leading-relaxed">
                      &ldquo;{fabric.chooseWhen}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px]">
                    <ShieldCheck size={14} className="text-orange" /> B2B Verified
                  </span>
                  <span className="text-navy group-hover:text-orange flex items-center gap-1 transition-colors">
                    View Garments <ArrowRight size={14} className="text-orange transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}