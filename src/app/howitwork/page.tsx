'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Scissors, 
  Layers, 
  Tag, 
  Palette, 
  PackageCheck, 
  Truck, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      icon: <Layers className="text-orange" size={28} />,
      title: "Fabric Selection & Sourcing",
      subtitle: "Custom Fabric Matching",
      desc: "We source premium-grade fabrics tailored to your exact standards—from 100% organic combed cotton and heavyweight French terry to durable polyester blends. Every roll is thoroughly inspected for GSM weight, texture, and durability before cutting.",
      highlights: ["Custom GSM Options", "Organic & Eco-Friendly Dyes", "Rigorous Quality Inspection"]
    },
    {
      step: "02",
      icon: <Scissors className="text-orange" size={28} />,
      title: "Precision Cutting & Stitching",
      subtitle: "Expert Thread Crafting",
      desc: "Using state-of-the-art laser cutting and industrial sewing machines, our expert artisans stitch your apparel with high-tensile, color-matched threads. We apply double-needle stitching and reinforced stress points to guarantee lifetime durability.",
      highlights: ["Laser-Accurate Pattern Cutting", "High-Tensile Industrial Threads", "Reinforced Seams"]
    },
    {
      step: "03",
      icon: <Tag className="text-orange" size={28} />,
      title: "Custom Branding & Labeling",
      subtitle: "Private Label Integration",
      desc: "Transform generic apparel into your proprietary brand line. We seamlessly attach your custom woven neck labels, size tags, hem tags, and custom hangtags using professional heat-press or stitching methods.",
      highlights: ["Woven & Printed Neck Labels", "Custom Hangtags & Barcodes", "Sleeve & Hem Branding"]
    },
    {
      step: "04",
      icon: <Palette className="text-orange" size={28} />,
      title: "Design & Fit Execution",
      subtitle: "Tailored Design Realization",
      desc: "Whether you need modern oversized dropshoulder fits, classic regular fits, or custom screen/DTG printing and embroidery, our production floor translates your tech packs into flawless finished garments.",
      highlights: ["Custom Fit Patterns (Oversized, Relaxed, Slim)", "Screen Printing & High-Density Embroidery", "Pantone Color Matching"]
    },
    {
      step: "05",
      icon: <PackageCheck className="text-orange" size={28} />,
      title: "Premium Packaging",
      subtitle: "Retail-Ready Presentation",
      desc: "Presentation matters for your B2B customers and retail shelves. Each piece is individually folded, packed in clear bio-degradable or custom-branded polybags, and securely boxed in sturdy cartons to prevent transit damage.",
      highlights: ["Individual Polybagging", "Custom Barcode Sticker Application", "Heavy-Duty Master Cartons"]
    },
    {
      step: "06",
      icon: <Truck className="text-orange" size={28} />,
      title: "Global Express Delivery",
      subtitle: "Secure Freight Dispatch",
      desc: "Once production and final quality audits are complete, your bulk order is dispatched through reliable global and local courier networks with real-time tracking straight to your warehouse or storefront.",
      highlights: ["Express Air & Sea Freight Options", "Real-Time Tracking", "Secure Customs Documentation"]
    },
    {
      step: "07",
      icon: <Star className="text-orange" size={28} />,
      title: "Review & Continuous Partnership",
      subtitle: "Client Review & Scaling",
      desc: "Your satisfaction drives our manufacturing studio. We collect your feedback upon delivery, refine tech packs for future production runs, and build a long-term, scalable manufacturing partnership.",
      highlights: ["Dedicated Account Manager", "Post-Delivery Quality Guarantee", "Easy Re-ordering & Scaling"]
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
            <span className="w-8 h-[2px] bg-orange inline-block"></span> End-to-End Manufacturing Process <span className="w-8 h-[2px] bg-orange inline-block"></span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 text-white leading-tight">
            How We Build <br />
            <span className="text-orange">Your Brand Apparel</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            From fabric selection and precision stitching to custom branding, premium packaging, and doorstep delivery—discover how we bring your clothing line to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <ShieldCheck className="text-orange" size={18} /> Premium Quality Control
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Sparkles className="text-orange" size={18} /> 100% Custom Branding
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

      {/* STEPS TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="space-y-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-8 transition-all hover:shadow-2xl hover:border-orange/30 group"
            >
              {/* Step Number & Icon Box */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:w-32 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { className: "group-hover:text-white transition-colors" })}
                </div>
                <span className="text-3xl font-black text-gray-300 group-hover:text-orange transition-colors">
                  {item.step}
                </span>
              </div>

              {/* Content Details */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-2xl font-extrabold text-navy">{item.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange bg-orange/10 px-3 py-1 rounded-full w-max">
                    {item.subtitle}
                  </span>
                </div>

                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Highlights badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-xs font-bold text-navy bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <CheckCircle2 size={14} className="text-orange shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION CARD */}
        <div className="mt-16 bg-[#0A1128] rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full filter blur-[90px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-6xl font-extrabold uppercase tracking-tight">
              Ready to Launch Your <span className="text-orange">Clothing Line?</span>
            </h2>
            <p className="text-gray-300 text-base">
              Browse our ready-to-wear product catalog or get in touch with our team for custom bulk manufacturing solutions tailored to your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/products" 
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-xl font-extrabold text-base tracking-wider uppercase shadow-lg shadow-orange/30 transition-all flex items-center gap-3 transform hover:-translate-y-1"
              >
                Explore Products <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}