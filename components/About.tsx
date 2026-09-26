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
      className="relative w-full overflow-hidden border-t border-stone-200/80 bg-[#f8f7f4] px-6 py-16 text-stone-900 sm:px-12 sm:py-32 lg:px-20 selection:bg-orange-500/20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        
        {/* LEFT - EDITORIAL IMAGES WITH IN-VIEW FADE */}
        <div
          className={`relative flex w-full items-center justify-start lg:col-span-7 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-xl sm:h-[540px] sm:w-[84%]">
            <Image
              src="/about1.webp"
              alt="Highland Hotel exterior and property"
              fill
              priority
              quality={90}
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Secondary Inset Image */}
          <div className="absolute -bottom-8 right-0 z-10 hidden h-[280px] w-[230px] overflow-hidden rounded-lg border-4 border-[#f8f7f4] bg-stone-200 shadow-2xl sm:block lg:-right-4">
            <Image
              src="/about2.webp"
              alt="Highland Hotel suite room interior"
              fill
              quality={90}
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="230px"
            />
          </div>

          {/* Location Badge */}
          <div className="absolute bottom-5 left-5 z-20 border border-white/30 bg-black/40 px-4 py-3 backdrop-blur-md">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
              Highland Hotel
            </p>
            <p className="mt-1 text-xs text-white font-medium">
              North Bangalore
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
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-orange-600">
              About Highland
            </p>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.08] tracking-tight text-stone-900">
              A place to stay,
              <br />
              <span className="italic">dine, celebrate</span>
              <br />
              &amp; reconnect.
            </h2>
          </div>

          {/* Narrative Copy */}
          <div
            className={`transition-all duration-700 delay-300 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-8 max-w-lg font-sans text-xs sm:text-sm font-light leading-relaxed text-stone-600">
              Highland Hotel brings together comfortable stays, multi-cuisine
              dining, celebrations and holistic wellness under one roof in North
              Bangalore. With 42 rooms and suites, Cinnamon Restaurant, Utsava
              Banquet Hall and Ayurvedic therapies, Highland offers an intimate
              setting for both peaceful stays and milestone occasions.
            </p>
          </div>

          {/* REFINED EDITORIAL STATS */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 border-t border-stone-300/70 pt-6 transition-all duration-700 delay-400 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] font-light text-stone-900">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] tracking-wider lowercase text-stone-500 font-medium">
                    {stat.unit}
                  </span>
                </div>

                <span className="font-sans text-[9px] sm:text-[9.5px] font-medium uppercase tracking-[0.2em] text-stone-500 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div
            className={`pt-8 transition-all duration-700 delay-500 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 border-b border-stone-900/30 pb-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 hover:border-orange-500 hover:text-orange-600 cursor-pointer"
            >
              <span>Discover Highland</span>
              <ArrowUpRight className="h-3 w-3 text-stone-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600" />
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle Background Watermark */}
      <div className="pointer-events-none absolute -bottom-12 -left-4 hidden select-none font-serif text-[180px] font-light leading-none text-stone-900/[0.02] lg:block">
        HIGHLAND
      </div>
    </section>
  );
}