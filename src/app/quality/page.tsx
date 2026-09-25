'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Scale, 
  Sparkles, 
  Award,
  Feather,
  Shirt
} from 'lucide-react';

export default function QualityPage() {
  const fabrics = [
    {
      name: "Jersey",
      subtitle: "Lightweight • Smooth • Breathable",
      desc: "A versatile knit with a smooth surface and natural stretch. Commonly used for everyday and premium T-shirts.",
      bestFor: ["T-shirts", "Long-sleeves", "Lightweight tops", "Casual basics"],
      chooseWhen: "You want a comfortable, breathable garment with a clean, smooth appearance.",
      weight: "140–240 GSM",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      name: "French Terry",
      subtitle: "Midweight • Breathable • Structured",
      desc: "A knit with a smooth outer surface and looped interior. It provides more structure than standard jersey while remaining lighter and more breathable than fleece.",
      bestFor: ["Sweatshirts", "Crewnecks", "Joggers", "Shorts", "Lightweight hoodies"],
      chooseWhen: "You want a substantial sweatshirt or casual garment without the warmth and bulk of brushed fleece.",
      weight: "240–380 GSM",
      badgeColor: "bg-orange/10 text-orange border-orange/20"
    },
    {
      name: "Fleece",
      subtitle: "Heavyweight • Warm • Soft",
      desc: "A denser knit designed for warmth and comfort. It can be brushed on the inside for a soft, insulating hand feel or left unbrushed for a more structured finish.",
      bestFor: ["Hoodies", "Sweatshirts", "Sweatpants", "Joggers"],
      chooseWhen: "Warmth, weight and a substantial premium feel are important to the garment.",
      weight: "280–450 GSM",
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
      name: "Interlock",
      subtitle: "Smooth • Dense • Stable",
      desc: "A double-knit construction with a smooth surface on both sides. It is generally more stable and substantial than single jersey, with a clean drape and comfortable stretch.",
      bestFor: ["Premium T-shirts", "Polos", "Loungewear", "Lightweight sweatshirts", "Structured basics"],
      chooseWhen: "You want a smoother, more substantial fabric with greater stability than standard jersey.",
      weight: "180–300 GSM",
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      name: "Rib",
      subtitle: "Stretchy • Resilient • Close-fitting",
      desc: "Rib is a knitted construction with pronounced vertical ribs that give it high stretch and recovery. It is commonly used where the garment needs flexibility and a secure fit.",
      bestFor: ["Cuffs", "Neckbands", "Waistbands", "Fitted tops", "Tank tops", "Rib-knit garments"],
      chooseWhen: "You need stretch, recovery, and a close fit, or want a visibly ribbed texture.",
      weight: "~180–350 GSM",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-navy selection:bg-orange selection:text-white">
      
      {/* HEADER SECTION */}
      <header className="relative w-full bg-navy pt-32 pb-44 px-6 md:px-12 shadow-md overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-orange font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-orange inline-block"></span> Fabric Engineering & Material Guide <span className="w-8 h-[2px] bg-orange inline-block"></span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 text-white leading-tight">
            Choose the Right <br />
            <span className="text-orange">Fabric for Your Brand</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Different knit constructions create different levels of weight, structure, stretch, warmth, and breathability. Select based on how you want your finished apparel line to perform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <ShieldCheck className="text-orange" size={18} /> Premium GSM Certified
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Award className="text-orange" size={18} /> Custom Knit Options
            </div>
          </div>
        </div>

        {/* SVG Curve at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.1,130.83,115.1,188.73,109.18C233.72,104.53,277.6,83.9,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </header>

      {/* FABRIC CARDS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold uppercase text-navy tracking-tight mb-4">
            Fabric Construction <span className="text-orange">Catalog</span>
          </h2>
          <p className="text-gray-600 text-base">
            Review technical specs, weight ranges, and ideal applications for bulk hoodie, t-shirt, and trouser orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fabrics.map((fabric, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col justify-between transition-all hover:shadow-2xl hover:border-orange/30 group ${
                idx === 4 ? 'md:col-span-2 max-w-3xl mx-auto w-full' : ''
              }`}
            >
              <div>
                {/* Top header of card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Layers className="text-orange group-hover:text-white transition-colors" size={26} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy">{fabric.name}</h3>
                      <p className="text-xs font-bold text-orange tracking-wider uppercase">{fabric.weight}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${fabric.badgeColor} w-max`}>
                    {fabric.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {fabric.desc}
                </p>

                {/* Best For Section */}
                <div className="mb-6 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-3 flex items-center gap-2">
                    <Shirt size={15} className="text-orange" /> Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {fabric.bestFor.map((item, iIdx) => (
                      <span key={iIdx} className="text-xs font-semibold text-navy bg-white px-3 py-1.5 rounded-lg border border-gray-200/60 shadow-xs flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-orange shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Choose When Section */}
                <div className="border-l-4 border-orange pl-4 py-1 mb-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Choose {fabric.name} when:</p>
                  <p className="text-sm font-medium text-navy italic">{fabric.chooseWhen}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="bg-[#0A1128] rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full filter blur-[90px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Need Custom Fabric <span className="text-orange">Swatches?</span>
            </h2>
            <p className="text-gray-300 text-base">
              Get in touch with our sourcing team to receive physical fabric sample cards for your apparel brand line.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/products" 
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-xl font-extrabold text-base tracking-wider uppercase shadow-lg shadow-orange/30 transition-all flex items-center gap-3 transform hover:-translate-y-1"
              >
                Explore Catalog <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}