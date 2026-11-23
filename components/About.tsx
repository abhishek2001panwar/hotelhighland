"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "42",
    unit: "Keys",
    label: "Accommodations",
  },
  {
    value: "1,904",
    unit: "sq. ft",
    label: "Utsava Event Hall",
  },
  {
    value: "1,400",
    unit: "sq. ft",
    label: "Cinnamon Dining",
  },
  {
    value: "600",
    unit: "Guests",
    label: "Hall Capacity",
  },
  {
    value: "60+",
    unit: "Vehicles",
    label: "Open Car Parking",
  },
];

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-[#DDD4C4] bg-[#FDFBF7] px-6 py-16 text-[#3A2D21] sm:px-12 sm:py-28 lg:px-20 selection:bg-[#A1611D]/20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        
        {/* LEFT - EDITORIAL IMAGES WITH IN-VIEW FADE */}
        <div
          className={`relative flex w-full items-center justify-start lg:col-span-7 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-[#DDD4C4] bg-[#F4EFE6] shadow-xl sm:h-[540px] sm:w-[84%]">
            <Image
              src="/about1.jpg"
              alt="Highland Hotel exterior and property"
              fill
              priority
              quality={90}
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Warm Espresso Bronze Vignette (Zero Black) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2D21]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Secondary Inset Image */}
          <div className="absolute -bottom-8 right-0 z-10 hidden h-[280px] w-[230px] overflow-hidden rounded-xl border-4 border-[#FDFBF7] bg-[#F4EFE6] shadow-2xl sm:block lg:-right-4">
            <Image
              src="/about.jpg"
              alt="Highland Hotel suite room interior"
              fill
              quality={90}
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="230px"
            />
          </div>

          {/* Location Badge (Warm Espresso Bronze Glass, Zero Black) */}
          <div className="absolute bottom-5 left-5 z-20 rounded-sm border border-[#FDFBF7]/35 bg-[#3A2D21]/85 px-5 py-3.5 backdrop-blur-md shadow-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E5C99B]">
              Highland Hotel
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#FDFBF7] font-bold tracking-wide">
              North Bangalore &bull; Hesaraghatta Road
            </p>
          </div>
        </div>

        {/* RIGHT - EDITORIAL CONTENT */}
        <div className="flex flex-col justify-center text-left lg:col-span-5">
          
          {/* Kicker */}
          <div
            className={`transition-all duration-700 delay-100 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-3">
              
              <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-[#A1611D]">
                About Highland
              </p>
            </div>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.08] tracking-wide text-[#3A2D21]">
              A place to stay,
              <br />
              <span className="italic font-normal text-[#A1611D]">dine, celebrate</span>
              <br />
              &amp; reconnect.
            </h2>
          </div>

          {/* Narrative Copy (Facilities & Services Highlighted in Bold + Wide Tracking) */}
          <div
            className={`transition-all duration-700 delay-300 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-8 max-w-lg font-sans text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed tracking-wide text-[#5A4A3B]">
              Highland Hotel brings together{" "}
              <strong className="font-bold text-[#3A2D21]">
                comfortable stays, multi-cuisine dining, grand celebrations, and holistic wellness
              </strong>{" "}
              under one roof in North Bangalore. Featuring{" "}
              <strong className="font-bold text-[#3A2D21]">
                42 rooms and suites, Cinnamon Restaurant, Utsava Banquet Hall, and KEVA Ayurvedic therapies
              </strong>
              , Highland offers an intimate setting for both peaceful stays and milestone occasions.
            </p>
          </div>

          {/* BOLD EDITORIAL STATS */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 border-t border-[#DDD4C4] pt-6 transition-all duration-700 delay-400 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l-2 border-[#A1611D] pl-3.5">
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="font-serif text-2xl sm:text-[30px] font-bold text-[#3A2D21] tracking-wide">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] tracking-wider lowercase text-[#A1611D] font-bold">
                    {stat.unit}
                  </span>
                </div>

                <span className="font-sans text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#3A2D21]/85 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Primary #A1611D CTA Button */}
          <div
            className={`pt-8 transition-all duration-700 delay-500 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3.5 rounded-sm font-sans text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
            >
              <span>Discover Highland</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle Background Watermark */}
      <div className="pointer-events-none absolute -bottom-12 -left-4 hidden select-none font-serif text-[180px] font-light leading-none text-[#3A2D21]/[0.03] lg:block">
        HIGHLAND
      </div>
    </section>
  );
}