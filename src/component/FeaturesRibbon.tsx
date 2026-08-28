import React from 'react';
import { 
  Layers, 
  Palette, 
  Tag, 
  Printer, 
  Scissors, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

const features = [
  { icon: Layers, label: 'Custom GSM & Fabric' },
  { icon: Palette, label: 'Custom Colors' },
  { icon: Tag, label: 'Private Label' },
  { icon: Printer, label: 'Printing' },
  { icon: Scissors, label: 'Embroidery' },
  { icon: ShieldCheck, label: 'Quality Control' },
  { icon: Globe, label: 'Worldwide Shipping' },
];

export default function FeaturesRibbon() {
  return (
    <section className="w-full bg-[#f8f9fa] border-y border-gray-200/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-6 sm:gap-y-4">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center px-2 group ${
                  index !== features.length - 1 ? 'lg:border-r lg:border-gray-300/70' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="mb-2 sm:mb-2.5 transition-transform duration-200 group-hover:-translate-y-0.5">
                  <IconComponent 
                    className="w-6 h-6 text-[#092834] group-hover:text-[#FF5A00] transition-colors" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Label */}
                <span className="text-[11px] sm:text-xs font-semibold text-[#092834] tracking-tight group-hover:text-[#FF5A00] transition-colors whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}