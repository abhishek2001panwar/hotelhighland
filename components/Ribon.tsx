"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Wifi, 
  ConciergeBell, 
  Briefcase, 
  UtensilsCrossed, 
  Flower2, 
  ShoppingBag 
} from "lucide-react";

const amenities = [
  { id: "01", label: "High-Speed Wi-Fi", icon: Wifi },
  { id: "02", label: "24/7 Room Service", icon: ConciergeBell },
  { id: "03", label: "Meeting & Event Facilities", icon: Briefcase },
  { id: "04", label: "Cinnamon Fine Dining", icon: UtensilsCrossed },
  { id: "05", label: "Ayurveda Wellness", icon: Flower2 },
  { id: "06", label: "Takeaway & Delivery", icon: ShoppingBag },
];

export default function AmenitiesRibbon() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f4f1ea] border-y border-stone-300/60 py-6 md:py-10 px-0 md:px-12 lg:px-20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle Top Metadata */}
        <div className="hidden md:flex items-center justify-between mb-8 pb-3 border-b border-stone-300/40">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-stone-500">
            Highland Comforts &bull; Curated Services
          </span>
         
        </div>

        {/* 1. Mobile Marquee View (< md) */}
        <div className="md:hidden relative w-full overflow-hidden">
          {/* Edge Blur / Vignettes */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f4f1ea] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f4f1ea] to-transparent z-10" />

          <div className="flex items-center gap-6 animate-marquee-smooth will-change-transform whitespace-nowrap">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex items-center gap-6 shrink-0">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`${copyIndex}-${item.id}`}
                      className="inline-flex items-center gap-2.5 px-3 py-1 text-stone-800"
                    >
                      <Icon className="w-3.5 h-3.5 stroke-[1.6] text-orange-600 shrink-0" />
                      <span className="font-serif text-[13px] font-normal tracking-tight">
                        {item.label}
                      </span>
                      <span className="text-stone-400 font-mono text-[9px] ml-1.5">&bull;</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Desktop Grid View (>= md) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${idx * 70}ms` }}
                className={`group flex flex-col justify-between h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center justify-between text-stone-400 group-hover:text-orange-600 transition-colors mb-4">
                 
                  <Icon className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <p className="font-serif text-sm sm:text-[15px] font-normal text-stone-800 group-hover:text-stone-950 leading-snug">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @keyframes marqueeSmooth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-smooth {
          display: inline-flex;
          animation: marqueeSmooth 22s linear infinite;
        }
      `}</style>
    </section>
  );
}