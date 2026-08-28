import React from 'react';
import { 
  FileText, 
  FlaskConical, 
  CheckCircle2, 
  Factory, 
  Truck, 
  ArrowRight 
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'SHARE YOUR REQUIREMENTS',
    desc: 'Send your tech pack, reference garment, sketch or simply tell us what you\'re looking for.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'DEVELOP & SAMPLE',
    desc: 'We develop the fabric, construction and sample based on your requirements.',
    icon: FlaskConical,
  },
  {
    step: '03',
    title: 'APPROVE',
    desc: 'You review the sample. We finalize every detail before bulk production.',
    icon: CheckCircle2,
  },
  {
    step: '04',
    title: 'PRODUCTION',
    desc: 'Cutting, sewing, decoration, finishing and strict quality control at every stage.',
    icon: Factory,
  },
  {
    step: '05',
    title: 'SHIP TO YOU',
    desc: 'Packed and shipped to your business anywhere in the United States.',
    icon: Truck,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Main Heading (Orange with Navy Subtitle) */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#004e72] text-xs font-bold uppercase tracking-[0.25em] mb-2 block">
            Seamless Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#FF5A00] tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Tight Centered 5-Step Process */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <React.Fragment key={index}>
                
                {/* Single Step Container */}
                <div className="flex items-start gap-3.5 w-full lg:w-[195px] flex-shrink-0 group">
                  
                  {/* Left Circle Icon (Navy/Blue subtle container) */}
                  <div className="w-11 h-11 rounded-full bg-[#004e72]/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#004e72]/15 group-hover:bg-[#FF5A00]/10 group-hover:border-[#FF5A00]/30 transition-all duration-300">
                    <IconComponent 
                      className="w-5 h-5 text-[#092834] group-hover:text-[#FF5A00] transition-colors" 
                      strokeWidth={1.75} 
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col text-left">
                    <div className="text-[11px] font-black uppercase tracking-wider leading-tight mb-1.5 text-[#092834]">
                      {/* Orange Step Number */}
                      <span className="text-[#FF5A00] font-extrabold mr-1">{item.step}</span>
                      <span>{item.title}</span>
                    </div>

                    <p className="text-[#092834]/70 text-[11px] leading-[1.45] font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Inline Small Arrow */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center pt-3.5 flex-shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF5A00]/60" strokeWidth={2} />
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}