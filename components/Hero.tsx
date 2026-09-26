"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tagline: "NORTH BANGALORE • HESARAGHATTA ROAD",
    src: "/hero.avif",
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
    <section className="relative w-full h-[100dvh] min-h-[640px] sm:min-h-[720px] max-h-[1200px] flex flex-col justify-end overflow-hidden px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-16 text-white bg-black">
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
                quality={95}
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
          REFINED, LIGHTER GRADIENTS (MAX PHOTO CLARITY)
      ========================================================== */}
      {/* 1. Subtle Top Bar Scrim for Navbar Contrast */}
      <div
        className="absolute top-0 inset-x-0 h-32 sm:h-40 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* 2. Focused Bottom Editorial Scrim (Keeps center and landscape bright) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* 3. Soft Radial Glow behind Text instead of a flat heavy black wall */}
      <div
        className="absolute bottom-0 left-0 w-full md:w-2/3 h-2/3 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-20">
        {/* Left: Re-keyed Editorial Content Block */}
        <div key={currentSlide} className="w-full max-w-2xl text-left">
          {/* Tagline Badge */}
          <div className="overflow-hidden mb-3">
            <div className="inline-flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-orange-400 font-semibold drop-shadow-sm">
                {slides[currentSlide].tagline}
              </p>
            </div>
          </div>

          {/* Editorial Headline */}
          <div className="overflow-hidden mb-3.5 sm:mb-4">
            <h1 className="font-serif text-[2.1rem] leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal sm:leading-[1.08] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              Where Tranquility Meets <br className="hidden md:inline" />
              <span className="italic font-light text-stone-100">
                Hospitality Excellence
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <div className="overflow-hidden mb-7 sm:mb-8">
            <p className="text-stone-200 text-xs sm:text-sm font-light max-w-xs sm:max-w-md leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              A refined stay, dining, events and wellness sanctuary crafted in the green serenity of North Bangalore.
            </p>
          </div>

          {/* Luxury Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
            <a
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1B1917] hover:bg-stone-200 px-7 py-3.5 rounded-xs text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-black/25 hover:bg-white/15 border border-white/40 hover:border-white text-white backdrop-blur-sm px-7 py-3.5 rounded-xs text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-md"
            >
              <span>Explore Highland</span>
            </Link>
          </div>
        </div>

        {/* Right: Progress Indicators */}
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
                <div className="relative h-[2px] w-10 sm:w-14 bg-white/30 rounded-full overflow-hidden shadow-sm">
                  {isActive ? (
                    <div
                      key={currentSlide}
                      className="absolute inset-0 bg-white rounded-full animate-progress"
                      style={{
                        animationDuration: `${DURATION}ms`,
                        animationTimingFunction: "linear",
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-white/20 group-hover:bg-white/60 transition-colors" />
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