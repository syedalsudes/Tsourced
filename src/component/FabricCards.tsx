'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Shirt, 
  CheckCircle2, 
  Scale, 
  Feather, 
  Flame, 
  Layers, 
  Wind, 
  ShieldCheck 
} from 'lucide-react';

export default function FabricCards() {
  const fabrics = [
    {
      name: "Jersey",
      tagline: "Lightweight • Smooth • Breathable",
      desc: "A versatile knit with a smooth surface and natural stretch. Commonly used for everyday and premium T-shirts with an effortless drape.",
      bestFor: ["T-shirts", "Long-sleeves", "Lightweight tops", "Casual basics"],
      chooseWhen: "You want a comfortable, breathable garment with a clean, smooth appearance.",
      weight: "140-240 GSM",
      image: "/foldhoodies.png",
      icon: <Wind className="text-orange" size={20} />,
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      name: "French Terry",
      tagline: "Midweight • Breathable • Structured",
      desc: "A knit with a smooth outer surface and looped interior. It provides more structure than standard jersey while remaining lighter and more breathable than fleece.",
      bestFor: ["Sweatshirts", "Crewnecks", "Joggers", "Shorts", "Lightweight hoodies"],
      chooseWhen: "You want a substantial sweatshirt or casual garment without the warmth and bulk of brushed fleece.",
      weight: "240-380 GSM",
      image: "/foldhoodies.png",
      icon: <Layers className="text-orange" size={20} />,
      badgeBg: "bg-orange-50 text-orange border-orange/20"
    },
    {
      name: "Fleece",
      tagline: "Heavyweight • Warm • Soft",
      desc: "A denser knit designed for warmth and comfort. It can be brushed on the inside for a soft, insulating hand feel or left unbrushed for a more structured finish.",
      bestFor: ["Hoodies", "Sweatshirts", "Sweatpants", "Joggers"],
      chooseWhen: "Warmth, weight and a substantial premium feel are important to the garment.",
      weight: "280-450 GSM",
      image: "/foldhoodies.png",
      icon: <Flame className="text-orange" size={20} />,
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      name: "Interlock",
      tagline: "Smooth • Dense • Stable",
      desc: "A double-knit construction with a smooth surface on both sides. It is generally more stable and substantial than single jersey, with a clean drape and comfortable stretch.",
      bestFor: ["Premium T-shirts", "Polos", "Loungewear", "Lightweight sweatshirts", "Structured basics"],
      chooseWhen: "You want a smoother, more substantial fabric with greater stability than standard jersey.",
      weight: "180-300 GSM",
      image: "/foldhoodies.png",
      icon: <ShieldCheck className="text-orange" size={20} />,
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      name: "Rib",
      tagline: "Stretchy • Resilient • Close-fitting",
      desc: "Rib is a knitted construction with pronounced vertical ribs that give it high stretch and recovery. It is commonly used where the garment needs flexibility and a secure fit.",
      bestFor: ["Cuffs", "Neckbands", "Waistbands", "Fitted tops", "Tank tops", "Rib-knit garments"],
      chooseWhen: "You need stretch, recovery, and a close fit, or want a visibly ribbed texture.",
      weight: "~180-350 GSM",
      image: "/foldhoodies.png",
      icon: <Feather className="text-orange" size={20} />,
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ];

  return (
    <section className="py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-orange font-bold tracking-widest uppercase text-xs mb-3 inline-block bg-orange/10 px-4 py-1.5 rounded-full border border-orange/20 shadow-xs">
          Engineered Materials
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-4">
          Choose the Right <span className="text-orange">Fabric</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Different knit constructions create unique weights, structures, and levels of breathability. Explore our fabric standards below.
        </p>
      </div>

      {/* Grid Layout Cards - Neutral / Light Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fabrics.map((fabric) => (
          <div 
            key={fabric.name} 
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-gray-300"
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
              <div className="absolute top-4 left-4 z-10 bg-white/95 text-gray-100 text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-sm uppercase tracking-wider flex items-center gap-1.5 border border-gray-200">
                <Scale size={13} className="text-orange" /> {fabric.weight}
              </div>

              {/* Tagline / Category Chip */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-xs ${fabric.badgeBg}`}>
                  {fabric.tagline.split(' • ')[0]}
                </span>
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
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 leading-tight">
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
                    <Shirt size={14} className="text-orange" /> Ideal Applications:
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
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck size={14} className="text-orange" /> B2B Verified Standard
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}