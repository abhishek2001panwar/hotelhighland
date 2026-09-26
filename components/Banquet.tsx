"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Full high-resolution 1536x1024 master assets (no pixelation or blur)
const banquetSlides = [
  {
    id: 1,
    image: "/utsava.webp",
    alt: "Utsava Banquet Grand Interior & Stage Setup",
  },
  {
    id: 2,
    image: "/utsava2.webp",
    alt: "Banquet Hall Interior, Seating and Table Arrangements",
  },
  {
    id: 3,
    image: "/utsava3.webp",
    alt: "Celebratory Evening Lighting and Dining Ambiance",
  },
];

export default function Banquet() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banquetSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // In-view scroll trigger
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
      className="relative w-full bg-[#f8f7f4] text-stone-900 py-20 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">

              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium">
                Utsava Banquet &amp; Events
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Celebrate Something Extraordinary
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
            A celebration venue in North Bangalore crafted for weddings, gatherings, conferences, and milestone occasions.
          </p>
        </div>

        {/* Media Canvas: 1536px source rendering into a crisp 1024px container */}
        <div
          className={`relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] max-h-[460px] rounded-xl overflow-hidden border border-stone-300/80 shadow-xl bg-stone-950 transition-all duration-1000 delay-200 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {banquetSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div
                  className={`w-full h-full transform transition-transform duration-[7000ms] ease-out will-change-transform ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    quality={95}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              </div>
            );
          })}

          {/* Dash Progress Indicators & Counter */}
          <div className="absolute bottom-5 right-5 flex items-center gap-3 z-20">
            <span className="font-mono text-[10px] text-white/70 tracking-widest">
              0{currentSlide + 1} / 0{banquetSlides.length}
            </span>

            <div className="flex items-center gap-1.5">
              {banquetSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className="py-2 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-7 "
                        : "w-3 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Strip */}
        <div
          className={`max-w-4xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white p-5 sm:p-7 rounded-xl border border-stone-200/90 shadow-sm transition-all duration-1000 delay-300 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-left">
            <h3 className="font-serif text-lg sm:text-xl text-stone-900 mb-0.5">
              Planning an Event?
            </h3>
            <p className="font-sans text-stone-600 text-xs font-light">
              Connect with our team for seating arrangements, audio-visual equipment, and catering.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/banquet"
              className="group inline-flex items-center justify-center gap-2 text-black border-px font-sans text-xs uppercase tracking-[0.16em] font-semibold px-5 py-3 rounded shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Utsava</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-stone-100 border border-stone-300 text-stone-800 font-sans text-xs uppercase tracking-[0.16em] font-medium px-5 py-3 rounded transition-colors duration-200 active:scale-[0.98]"
            >
              <span>Enquire Now</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}