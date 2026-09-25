'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Award
} from 'lucide-react';
import FabricCards from '@/component/FabricCards';

export default function QualityPage() {
 

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

    

     
      <FabricCards />
    </div>
  );
}