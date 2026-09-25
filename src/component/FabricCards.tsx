'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Shirt, 
  CheckCircle2, 
  Scale, 
  ArrowRight, 
  SlidersHorizontal, 
  Feather, 
  Flame, 
  Layers, 
  Wind, 
  ShieldCheck 
} from 'lucide-react';

export default function FabricCards() {
  const [activeTab, setActiveTab] = useState(0);

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
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
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
      badgeBg: "bg-orange/10 text-orange border-orange/20"
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
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20"
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
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
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
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  const currentFabric = fabrics[activeTab];

  return (
    <section className="py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-orange font-bold tracking-widest uppercase text-xs mb-3 inline-block bg-orange/10 px-4 py-1.5 rounded-full border border-orange/20 shadow-xs">
          Engineered Materials
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-4">
          Choose the Right <span className="text-orange">Fabric</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Different knit constructions create unique weights, structures, and levels of breathability. Select your fabric standard below.
        </p>
      </div>

      {/* Styled Filter / Tab Bar */}
      <div className="flex flex-col items-center justify-center mb-12 gap-4">
        <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-xl border border-gray-100 overflow-x-auto max-w-full">
          <div className="pl-4 pr-2 text-orange hidden md:flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
            <SlidersHorizontal size={18} /> Fabric:
          </div>
          {fabrics.map((fabric, idx) => (
            <button
              key={fabric.name}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-navy text-white shadow-md scale-105'
                  : 'text-gray-500 hover:text-navy hover:bg-gray-50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === idx ? 'bg-orange animate-pulse' : 'bg-gray-300'}`}></span>
              {fabric.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Showcase Card with Perfectly Balanced Alignment */}
      <div className="relative bg-[#0A1128] rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        
        {/* Left Side: Background Image Covering Entire Panel with Rich Gradient */}
        <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-gray-900">
          <Image 
            src={currentFabric.image} 
            alt={currentFabric.name} 
            fill 
            className="object-cover brightness-[0.85] hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1128]/90 hidden lg:block"></div>
          
          {/* Floating GSM Badge */}
          <div className="absolute top-6 left-6 z-10 bg-orange text-white text-xs font-extrabold px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider flex items-center gap-2 border border-white/20">
            <Scale size={14} /> {currentFabric.weight}
          </div>
        </div>

        {/* Right Side: Content & Specifications */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between text-white relative z-10 bg-[#0A1128]">
          <div className="space-y-6">
            
            {/* Title & Category Badge */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center border border-orange/20 shadow-inner">
                    {currentFabric.icon}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    {currentFabric.name}
                  </h3>
                </div>
                <span className={`text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full border shadow-sm ${currentFabric.badgeBg}`}>
                  {currentFabric.tagline.split(' • ')[0]}
                </span>
              </div>
              <p className="text-xs font-bold text-orange tracking-widest uppercase pl-1">
                {currentFabric.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-1">
              {currentFabric.desc}
            </p>

            {/* Best For Tags Grid */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-widest text-orange mb-3 flex items-center gap-2">
                <Shirt size={15} /> Ideal Applications (Best For):
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentFabric.bestFor.map((item, iIdx) => (
                  <span key={iIdx} className="text-xs font-semibold text-white bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10 shadow-xs flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-orange shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Choose When Box */}
            <div className="border-l-4 border-orange pl-4 py-1 bg-white/[0.02] rounded-r-xl">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">When to select {currentFabric.name}:</p>
              <p className="text-xs sm:text-sm font-medium text-gray-200 italic leading-relaxed">
                &ldquo;{currentFabric.chooseWhen}&rdquo;
              </p>
            </div>

          </div>

          {/* Bottom Action Footer inside card */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5 text-gray-300">
              <ShieldCheck size={15} className="text-orange" /> Verified B2B Textile Standard
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}