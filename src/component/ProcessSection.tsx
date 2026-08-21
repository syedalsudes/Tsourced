// src/components/ProcessSection.tsx
import React from "react";
import { 
  Lightbulb, 
  FileSpreadsheet, 
  CheckCircle2, 
  Factory, 
  Truck, 
  ArrowRight, 
  ChevronRight
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Idea",
    description: "Tell us what you need. We listen and understand your goals.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "Develop & Quote",
    description: "We provide options, materials and pricing with full transparency.",
    icon: <FileSpreadsheet className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Sample & Approve",
    description: "We create samples. You review, test and approve.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "Production",
    description: "We manufacture with strict quality control at every step.",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    step: "05",
    title: "Delivery",
    description: "On-time delivery to your door. Ready for your business.",
    icon: <Truck className="w-5 h-5" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-[#fcfcfc] py-20 sm:py-28 border-t border-navy/5 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          
          {/* Eyebrow Accent */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-orange rounded-full" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.28em] text-orange uppercase">
              OUR PROCESS
            </span>
            <span className="w-8 h-[2px] bg-orange rounded-full" />
          </div>

          {/* Heavy Bold Orange Serif Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy uppercase scale-y-105 drop-shadow-sm">
            A SIMPLE <span className="text-orange">PROCESS</span>
          </h2>

          {/* Subtitle */}
          <p className="text-navy/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-medium">
            From booking a call to final delivery — we make custom garment production easy, fast, and hassle-free.
          </p>
        </div>

        {/* 5-STEP BOXED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative items-stretch">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              
              {/* INDIVIDUAL STEP CARD */}
              <div className="h-full flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-navy/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(255,90,0,0.12)] hover:border-orange/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                
                {/* Large Background Watermark Number */}
                <span className="absolute -top-3 -right-2 text-6xl  font-black text-navy/[0.04] group-hover:text-orange/10 transition-colors pointer-events-none select-none">
                  {item.step}
                </span>

                {/* Card Top: Icon & Step Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-navy/40 group-hover:text-orange transition-colors uppercase bg-navy/5 group-hover:bg-orange/10 px-2.5 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-navy tracking-tight leading-snug group-hover:text-orange transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Active Accent Line */}
                <div className="w-full h-1 bg-navy/5 group-hover:bg-orange transition-colors mt-6 rounded-full" />
              </div>

              {/* FLOATING ARROW CONNECTOR (DESKTOP) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-navy/15 shadow-sm text-navy/40 items-center justify-center pointer-events-none">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}