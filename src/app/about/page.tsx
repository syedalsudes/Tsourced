'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Globe, 
  ShieldCheck, 
  Layers,
  Scissors
} from 'lucide-react';

export default function AboutPage() {
  const qualityStandards = [
    {
      icon: <Layers className="text-orange" size={26} />,
      title: "Rigorous GSM Verification",
      desc: "Every single roll of fabric undergoes strict GSM weight and density tests before entering our cutting floor to ensure consistency across all bulk orders."
    },
    {
      icon: <Scissors className="text-orange" size={26} />,
      title: "Precision Laser Cutting",
      desc: "We utilize advanced automated cutting technology and high-tensile threads to guarantee accurate sizing and flawless stitch durability on every garment."
    },
    {
      icon: <ShieldCheck className="text-orange" size={26} />,
      title: "Strict AQL 2.5 Inspection",
      desc: "Finished products pass through multi-stage quality audits, checking for color fastness, loose threads, and secure private label integration before dispatch."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-navy selection:bg-orange selection:text-white">
      
      {/* HEADER SECTION (Dark Hero matching theme) */}
      <header className="relative w-full bg-navy pt-32 pb-44 px-6 md:px-12 shadow-md overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-orange font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-orange inline-block"></span> B2B Apparel Manufacturing Partner <span className="w-8 h-[2px] bg-orange inline-block"></span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 text-white leading-tight">
            About <span className="text-orange">T Sourced</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Empowering global brands, businesses, and creators with premium custom apparel manufacturing, bulk production scale, and uncompromising quality standards.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Factory className="text-orange" size={18} /> Direct Factory Production
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
              <Globe className="text-orange" size={18} /> Global B2B Supply
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

      {/* OUR STORY & OPERATIONS SECTION (Clean Centered Layout with Single Clear Description) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>

          <span className="text-orange font-bold tracking-widest uppercase text-xs inline-block bg-orange/10 px-3.5 py-1.5 rounded-full">
            Our Mission & Legacy
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase tracking-tight">
            Built for <span className="text-orange">Scale & Precision</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            T Sourced is a premier B2B apparel manufacturing studio engineered to bridge the gap between clothing brands and high-capacity production floors. From custom hoodies and t-shirts to heavy trousers, we deliver end-to-end execution, private labeling, and consistent retail-ready quality for your business.
          </p>
        </div>
      </section>

      {/* MANUFACTURING QUALITIES SECTION (Clean 3-Card Grid replacing Testimonials) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-orange font-bold tracking-widest uppercase text-xs mb-3 inline-block bg-orange/10 px-3.5 py-1.5 rounded-full">
            Excellence Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase tracking-tight mb-4">
            Our Core <span className="text-orange">Qualities</span>
          </h2>
          <p className="text-gray-600 text-base">
            We maintain strict adherence to international apparel benchmarks so your brand reputation remains protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityStandards.map((item, qIdx) => (
            <div 
              key={qIdx}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between relative group hover:border-orange/30 transition-all text-left"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { className: "group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-orange">
                <CheckCircle2 size={16} /> Verified Protocol
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION (Dark Premium Box at bottom) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-navy rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-orange/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full filter blur-[90px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-6xl font-extrabold uppercase tracking-tight">
              Ready to Partner With <span className="text-orange">T Sourced?</span>
            </h2>
            <p className="text-gray-300 text-base">
              Explore our complete product catalog or reach out to discuss your custom bulk manufacturing requirements today.
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