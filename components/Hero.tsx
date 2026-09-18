"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 1,
    tagline: "NORTH BANGALORE • HESARAGHATTA ROAD",
    src: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-fa2274cd-4e3f-4a7f-8b82-cf43d942e545.jpg",
    alt: "Highland Hotel Exterior & Lawns",
  },
  {
    id: 2,
    tagline: "AYURVEDIC WELLNESS & SPA",
    src: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202405021653296251-17dedc59-af12-43f0-ab84-b1259f5ca6ec.jpg",
    alt: "Ayurveda Wellness & Rejuvenation Center",
  },
];

const DURATION = 7500;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[620px] sm:min-h-[700px] max-h-[1200px] flex flex-col justify-end overflow-hidden px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-10 sm:pb-14 lg:pb-16 text-white bg-[#0a0a0a]">
      
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
                priority={index <= 1}
                unoptimized={true} // Bypasses Next.js re-compression to prevent blurring
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[9000ms] ease-out will-change-transform ${
                  isActive ? "scale-[1.02]" : "scale-100"
                }`}
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Cinematic Vignette Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 sm:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-1/2 bg-gradient-to-r from-black/80 sm:from-black/60 to-transparent z-10 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-20">
        
        {/* Left: Re-keyed Editorial Content Block */}
        <div key={currentSlide} className="w-full max-w-2xl text-left">
          
          {/* Tagline Badge */}
          <div className="overflow-hidden mb-3">
            <div className="inline-flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              <Sparkles className="w-3 h-3 text-orange-400" />
              <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-orange-400 font-medium">
                {slides[currentSlide].tagline}
              </p>
            </div>
          </div>

          {/* Editorial Headline */}
          <div className="overflow-hidden mb-3.5 sm:mb-4">
            <h1 className="font-serif text-[2rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-[3.35rem] font-normal sm:leading-[1.1] tracking-tight drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              Where Tranquility Meets <br className="hidden md:inline" />
              <span className="italic font-light">Hospitality Excellence</span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <div className="overflow-hidden mb-7 sm:mb-8">
            <p className="text-stone-300/90 text-xs sm:text-sm font-light max-w-xs sm:max-w-md leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
              A refined stay, dining, events and wellness sanctuary crafted in the green serenity of North Bangalore.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] fill-mode-both">
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-md text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Book Your Stay</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/about-us"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/40 backdrop-blur-sm text-white px-7 py-3.5 rounded-md text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer"
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
                <div className="relative h-[2.5px] w-10 sm:w-12 bg-white/20 rounded-full overflow-hidden">
                  {isActive ? (
                    <div
                      key={currentSlide}
                      className="absolute inset-0 bg-orange-500 rounded-full animate-progress"
                      style={{
                        animationDuration: `${DURATION}ms`,
                        animationTimingFunction: "linear",
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-white/20 group-hover:bg-white/40 transition-colors" />
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