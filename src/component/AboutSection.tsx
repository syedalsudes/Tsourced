// src/components/AboutSection.tsx
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProductionStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
}

const steps: ProductionStep[] = [
  {
    id: "1",
    phase: "01",
    tag: "STITCHING",
    title: "Precision Craft",
    description: "High-speed overlock & hem stitching with reinforced thread tensile strength.",
    imageSrc: "/about1.png",
  },
  {
    id: "2",
    phase: "02",
    tag: "INSPECTION",
    title: "Exact Fit & QC",
    description: "Manual measurement checks to guarantee zero sizing discrepancies.",
    imageSrc: "/about2.png",
  },
  {
    id: "3",
    phase: "03",
    tag: "ASSEMBLY",
    title: "Custom Trims",
    description: "Dedicated assembly lines for bespoke collars, ribbed cuffs, and detailing.",
    imageSrc: "/about3.png",
  },
  {
    id: "4",
    phase: "04",
    tag: "FINISHING",
    title: "Bar-tack & Label",
    description: "Industrial tacking and woven private label integration for retail-ready drop.",
    imageSrc: "/about4.png",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange/5 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* CENTERED HEADER */}
<div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 flex flex-col items-center">
  {/* Top Badge */}
  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
    <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#FF5A00] uppercase">
      WHO WE ARE & OUR STORY
    </span>
  </div>

  {/* Main Headline with Clean Line-Height */}
  <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-navy leading-[1.25] sm:leading-[1.2]">
    Crafting Garments Built for{" "}
    <span className="block sm:inline text-[#FF5A00] mt-1 sm:mt-0">
      Your Growth.
    </span>
  </h2>
</div>
        {/* MODERN PRODUCTION CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.id}
              className="group relative h-[460px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(9,40,52,0.18)] transition-all duration-500 cursor-pointer border border-navy/5"
            >
              {/* Background Product Image */}
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dynamic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Top Bar: Floating Phase Number & Tag */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold tracking-wider text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  {item.phase}
                </span>
                
                {/* Floating Arrow Icon (Expands on Hover) */}
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-orange group-hover:border-orange transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Glass Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-orange uppercase block">
                  {item.tag}
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-white leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {item.description}
                </p>

                {/* Micro accent line on hover */}
                <div className="pt-2">
                  <div className="h-[2px] w-0 group-hover:w-full bg-orange transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}