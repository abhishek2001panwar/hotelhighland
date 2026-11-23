"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tagline: "NORTH BANGALORE • HESARAGHATTA ROAD",
    src: "/test1.JPG",
    alt: "Highland Hotel Exterior & Lawns",
  },
  {
    id: 2,
    tagline: "AYURVEDIC WELLNESS & SPA",
    src: "/hero2.avif",
    alt: "Ayurveda Wellness & Rejuvenation Center",
  },
];

const DURATION = 7500;
const BOOK_NOW_URL =
  "https://bookings.resavenue.com/resBooking/availsearch?regCode=VTGA0517";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] sm:min-h-[720px] max-h-[1200px] flex flex-col justify-end overflow-hidden px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-16 text-[#FDFBF7] bg-[#3A2D21]">
      {/* Background Slides Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={100}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7500ms] ease-out will-change-transform ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* =========================================================
          LIGHT, NATURAL WARM BRONZE SCRIMS (ZERO BLACK, MAX CLARITY)
      ========================================================== */}
      {/* 1. Gentle Top Scrim for Navbar Readability */}
      <div
        className="absolute top-0 inset-x-0 h-32 sm:h-36 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(44, 34, 24, 0.45) 0%, rgba(44, 34, 24, 0.15) 55%, rgba(44, 34, 24, 0) 100%)",
        }}
      />

      {/* 2. Low-Profile Bottom Scrim (Leaves Upper 60% of Photo Untouched) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(44, 34, 24, 0.78) 0%, rgba(44, 34, 24, 0.28) 28%, rgba(44, 34, 24, 0) 58%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-20">
        {/* Left: Refined Editorial Block */}
        <div key={currentSlide} className="w-full max-w-2xl text-left">
          {/* Location Tagline */}
          <div className="overflow-hidden mb-3">
            <div className="inline-flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              
              <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#E5C99B] font-bold">
                {slides[currentSlide].tagline}
              </p>
            </div>
          </div>

          {/* Clean Luxury Headline */}
          <div className="overflow-hidden mb-4">
            <h1 className="font-serif text-[2.2rem] leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-medium sm:leading-[1.08] tracking-tight text-[#FDFBF7] drop-shadow-[0_2px_10px_rgba(44,34,24,0.45)] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              Where Tranquility Meets <br className="hidden md:inline" />
              <span className="italic font-light text-[#F4EFE6]">
                Hospitality Excellence
              </span>
            </h1>
          </div>

          {/* Bold Facilities Highlight Bar */}
          <div className="mb-7 sm:mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
            <p className="text-[#F4EFE6] text-xs sm:text-sm font-normal max-w-lg leading-relaxed mb-3">
              A refined sanctuary crafted in the green serenity of North Bangalore.
            </p>
            {/* <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 bg-[#3A2D21]/55 backdrop-blur-md border border-[#FDFBF7]/20 px-4 py-2 rounded-sm text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase text-[#FDFBF7]">
              <span>42 Luxury Rooms</span>
              <span className="text-[#E5C99B]">&bull;</span>
              <span>Cinnamon Dining</span>
              <span className="text-[#E5C99B]">&bull;</span>
              <span>Utsava Banquet</span>
              <span className="text-[#E5C99B]">&bull;</span>
              <span>KEVA Ayurveda</span>
            </div> */}
          </div>

          {/* Clean Ivory & Frosted Bronze CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#3A2D21] hover:bg-[#F4EFE6] px-7 py-3.5 rounded-xs text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#3A2D21]/45 hover:bg-[#3A2D21]/75 border border-[#FDFBF7]/45 hover:border-[#FDFBF7] text-[#FDFBF7] backdrop-blur-sm px-7 py-3.5 rounded-xs text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Highland</span>
            </Link>
          </div>
        </div>

        {/* Right: Minimal Slide Progress Indicators */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="py-3 px-1 cursor-pointer focus:outline-none group"
              >
                <div className="relative h-[2px] w-10 sm:w-14 bg-[#FDFBF7]/35 rounded-full overflow-hidden">
                  {isActive ? (
                    <div
                      key={currentSlide}
                      className="absolute inset-0 bg-[#FDFBF7] rounded-full animate-progress"
                      style={{
                        animationDuration: `${DURATION}ms`,
                        animationTimingFunction: "linear",
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-[#FDFBF7]/20 group-hover:bg-[#FDFBF7]/60 transition-colors" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroProgress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        .animate-progress {
          animation-name: heroProgress;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}