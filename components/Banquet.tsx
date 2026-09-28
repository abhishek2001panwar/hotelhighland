"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const banquetSlides = [
  {
    id: 1,
    image: "/90.jpg",
    alt: "Utsava Banquet Grand Interior & Stage Setup",
  },
  {
    id: 2,
    image: "/91.jpg",
    alt: "Banquet Hall Interior, Seating and Table Arrangements",
  },
  {
    id: 3,
    image: "/92.jpg",
    alt: "Celebratory Evening Lighting and Dining Ambiance",
  },
];

export default function Banquet() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafId = useRef<number | null>(null);

  // Auto-play slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banquetSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Snappy, faster scroll parallax (multiplier boosted to 0.35)
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Active whenever section intersects viewport
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          // Centered faster parallax offset
          const relativePos = (viewportHeight / 2 - (rect.top + rect.height / 2)) * 0.35;
          setScrollY(relativePos);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[88dvh] sm:h-[82dvh] min-h-[560px] max-h-[820px] bg-[#f8f7f4] flex flex-col justify-center items-center overflow-hidden "
    >
      {/* Full canvas container with 2xl rounded corners */}
      <div className="relative w-full h-full  overflow-hidden shadow-2xl border border-stone-200/50 bg-stone-950 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        
        {/* Background Slides */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {banquetSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Parallax wrapper: faster translation with minimal delay */}
                <div
                  className="w-full h-[120%] -top-[10%] absolute will-change-transform"
                  style={{
                    transform: `translate3d(0, ${scrollY}px, 0)`,
                    transition: "transform 20ms linear",
                  }}
                >
                  {/* Ken Burns Zoom */}
                  <div
                    className={`w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                      isActive ? "scale-115" : "scale-105"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      quality={95}
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Scrims */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 via-black/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Top Header / Eyebrow Badge */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <p className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-stone-200 font-medium">
              Utsava Banquet &amp; Events
            </p>
          </div>

          {/* Slide Counters */}
         
        </div>

        {/* Bottom Content Area: Title, Details & CTA Strip */}
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-6">
          
          {/* Left: Heading & Description */}
          <div className="max-w-xl text-left">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.1] mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Celebrate Something <br className="hidden sm:inline" />
              <span className="italic font-light text-stone-200">Extraordinary</span>
            </h2>

            <p className="font-sans text-stone-300 text-xs sm:text-sm font-light max-w-md leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              A celebration venue in North Bangalore crafted for weddings, grand gatherings, 
              conferences, and milestone occasions.
            </p>
          </div>

          {/* Right: Controls & Interactive Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
            
            {/* Progress Indicators */}
            <div className="flex items-center gap-2">
              {banquetSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className="md:py-1.5 cursor-pointer focus:outline-none group"
                >
                  <span
                    className={`block h-[2.5px] rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                        : "w-3 bg-white/35 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/banquet"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#FDFBF7] hover:bg-stone-100 text-[#1B1917] font-sans text-xs uppercase tracking-[0.18em] font-semibold px-5 sm:px-6 py-3 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(255,255,255,0.2)] active:scale-[0.98]"
              >
                <span>Explore Utsava</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white backdrop-blur-md font-sans text-xs uppercase tracking-[0.18em] font-medium px-5 sm:px-6 py-3 rounded-sm transition-all duration-300 active:scale-[0.98] shadow-lg"
              >
                <span>Enquire Now</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}