"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, Sparkles } from "lucide-react";

export default function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt/parallax following cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full bg-[#0d0d0d] text-white py-24 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-stone-800">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Pre-heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone-400 font-medium">
              Interactive Experience
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100">
            See Highland Before You Arrive
          </h2>
        </div>

        {/* Cinematic Parallax Window Frame */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[480px] sm:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] cursor-pointer group flex flex-col items-center justify-center text-center p-6"
        >
          {/* Panoramic Image with continuous subtle Ken Burns zoom and cursor parallax */}
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out will-change-transform pointer-events-none"
            style={{
              transform: `scale(1.08) translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
              alt="Highland Hotel 360 Panoramic Virtual View"
              fill
              priority
              className="object-cover object-center group-hover:scale-110 transition-transform duration-[6000ms] ease-out brightness-[0.65]"
              sizes="100vw"
            />
          </div>

          {/* Vignette Gradients for depth and focus */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/85 pointer-events-none" />

          {/* Floating Subtle Compass Grid Overlay */}
          <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-stone-300 font-sans text-xs tracking-widest uppercase pointer-events-none">
            <Compass className="w-3.5 h-3.5 text-orange-400 animate-spin [animation-duration:12s]" />
            <span>360° Spherical View</span>
          </div>

          <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-stone-300 font-sans text-xs tracking-widest uppercase pointer-events-none">
            <Eye className="w-3.5 h-3.5 text-stone-400" />
            <span>Ultra HD</span>
          </div>

          {/* Centered Tour Hero Card */}
          <div className="relative z-10 flex flex-col items-center max-w-xl transition-transform duration-300 group-hover:scale-105">
            
            {/* 360° Large Typography Badge */}
            <div className="relative mb-2">
              <span className="font-serif text-6xl sm:text-8xl md:text-9xl font-extralight tracking-tight text-white/95 select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] block">
                360°
              </span>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.45em] uppercase text-orange-300 font-medium block -mt-2">
                VIRTUAL TOUR
              </span>
            </div>

            {/* Supporting Copy */}
            <p className="font-sans text-stone-200 text-sm sm:text-base font-light tracking-wide max-w-md my-6 drop-shadow-md">
              Explore Highland Hotel from every angle
            </p>

            {/* Exact CTA: TAKE THE TOUR */}
            <Link
              href="/virtual-tour"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>Take The Tour</span>
              <Compass className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Helper Hint */}
            <p className="text-[11px] text-stone-400/80 font-sans uppercase tracking-widest mt-6">
              Interactive 3D Walkthrough • Rooms, Banquets &amp; Grounds
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}