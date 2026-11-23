"use client";

import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  ConciergeBell,
  Briefcase,
  UtensilsCrossed,
  Flower2,
  ShoppingBag,
} from "lucide-react";

const amenities = [
  { id: "01", label: "High-Speed Wi-Fi", icon: Wifi },
  { id: "02", label: "24/7 Room Service", icon: ConciergeBell },
  { id: "03", label: "Meeting & Events", icon: Briefcase },
  { id: "04", label: "Cinnamon Dining", icon: UtensilsCrossed },
  { id: "05", label: "KEVA Ayurveda", icon: Flower2 },
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
      className="relative w-full bg-[#FDFBF7] border-y border-[#E6DFD3] py-6 md:py-9 px-0 md:px-12 lg:px-20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. Mobile Seamless Marquee (< md) */}
        <div className="md:hidden relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />

          <div className="flex items-center gap-8 animate-marquee-smooth will-change-transform whitespace-nowrap">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex items-center gap-8 shrink-0">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`${copyIndex}-${item.id}`}
                      className="inline-flex items-center gap-2.5 text-[#3A2D21]"
                    >
                      <Icon className="w-4 h-4 stroke-[1.5] text-[#A1611D] shrink-0" />
                      <span className="font-sans text-xs font-medium tracking-wide text-[#3A2D21]/90">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Desktop Apple-Style Minimal Strip (>= md) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className={`group flex flex-col items-center text-center gap-2.5 py-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <Icon className="w-5 h-5 stroke-[1.4] text-[#A1611D] transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span className="font-sans text-xs lg:text-[13px] font-medium tracking-wide text-[#3A2D21]/85 group-hover:text-[#3A2D21] transition-colors">
                  {item.label}
                </span>
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
          animation: marqueeSmooth 24s linear infinite;
        }
      `}</style>
    </section>
  );
}