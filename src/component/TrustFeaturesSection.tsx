import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: 'QUALITY YOU CAN TRUST',
    desc: 'Multi-stage quality control from fabric inspection to final packing.',
    linkText: 'ABOUT OUR QUALITY',
    href: '#quality',
  },
  {
    icon: Sparkles,
    title: 'FLEXIBLE & SCALABLE',
    desc: 'Low minimums for sampling. High capacity for bulk production.',
    linkText: 'LEARN MORE',
    href: '#how-it-works',
  },
  {
    icon: Clock,
    title: 'ON-TIME DELIVERY',
    desc: 'Reliable timelines and clear communication at every step.',
    linkText: 'OUR PROCESS',
    href: '#how-it-works',
  },
  {
    icon: Globe,
    title: 'WORLDWIDE SHIPPING',
    desc: 'We ship to all major cities across the United States and worldwide.',
    linkText: 'SHIPPING DETAILS',
    href: '#contact',
  },
];

export default function TrustFeaturesSection() {
  return (
    <section className="w-full bg-[#092834] py-14 lg:py-20 border-y border-white/10 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {trustFeatures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 px-0 lg:px-8 group ${
                  index !== 0 ? 'lg:border-l lg:border-white/10' : ''
                }`}
              >
                {/* Left Outline Circular Icon */}
                <div className="w-12 h-12 rounded-full border border-[#FF5A00]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5A00] group-hover:bg-[#FF5A00]/10 transition-all duration-300 mt-0.5">
                  <IconComponent 
                    className="w-5 h-5 text-[#FF5A00]" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-between flex-grow min-h-[120px]">
                  <div>
                    {/* Feature Title */}
                    <h3 className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/75 text-xs sm:text-[13px] leading-relaxed font-normal mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Text Link */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#FF5A00] hover:text-[#e04f00] transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}