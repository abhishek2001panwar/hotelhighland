"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Phone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";

interface Dignitary {
  name: string;
  designation: string;
  images: string[];
}

const dignitaries: Dignitary[] = [
  {
    name: "Eshwar B Khandre",
    designation: "Bengaluru Forest Minister",
    images: [
      "https://highlandhotel.in/wp-content/uploads/2023/08/3-8.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/8-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/7-4.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/6-5.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/4-7.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/5-5.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/1-12.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/2-13.png",
    ],
  },
  {
    name: "Devi Sri Prasad",
    designation: "Indian Musical Composer",
    images: [
      "https://highlandhotel.in/wp-content/uploads/2023/08/9-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/15-3.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/14-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/12-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/11-3.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/10-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/13-2.png",
      "https://highlandhotel.in/wp-content/uploads/2023/08/17-3.png",
    ],
  },
];

// The 9 General Gallery Images
const galleryImages = [
  "https://highlandhotel.in/wp-content/uploads/2023/08/5-3.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/20.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/13-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/22.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-9.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/10-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/7-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/17-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/16-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/18-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/11-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/19-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/15-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/9-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/19.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/18.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/21.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/10.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/11.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/24.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/3-2.png ",
  "https://highlandhotel.in/wp-content/uploads/2023/08/12-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/9.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-5.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/2-8.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/12.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/13.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/25.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/5-2.png " ,
  "https://highlandhotel.in/wp-content/uploads/2023/08/4-2.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/6-2.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/2-10.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/1-7.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/14-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/8-1.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/3-6.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/7-2.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/6-3.png",
  "https://highlandhotel.in/wp-content/uploads/2023/08/4-5.png",
];

export default function GallerySection() {
  const [visitorIndices, setVisitorIndices] = useState<number[]>([0, 0]);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const handleNext = (dignitaryIdx: number) => {
    setVisitorIndices((prev) => {
      const next = [...prev];
      const max = dignitaries[dignitaryIdx].images.length;
      next[dignitaryIdx] = (next[dignitaryIdx] + 1) % max;
      return next;
    });
  };

  const handlePrev = (dignitaryIdx: number) => {
    setVisitorIndices((prev) => {
      const next = [...prev];
      const max = dignitaries[dignitaryIdx].images.length;
      next[dignitaryIdx] = (next[dignitaryIdx] - 1 + max) % max;
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-[#FDFBF7] text-[#1B1917] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 selection:bg-[#1B1917] selection:text-[#FDFBF7] border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        
        {/* =========================================================
            HEADER WITH RIGHT-ALIGNED "GALLERY EXPLORE" & PHONE
        ========================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E5E0D5]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.02] tracking-[-0.035em] text-[#1B1917]">
              Gallery <br />
              <span className="italic font-light text-[#7A6E58]">&amp; Moments</span>
            </h2>
          </div>

          <div className="lg:text-right flex flex-col lg:items-end justify-end space-y-2">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#7A6E58] font-semibold">
              Gallery Explore
            </span>
            <div className="w-24 h-[1.5px] bg-[#D4CDBC] lg:ml-auto mb-2" />
            
            <p className="font-sans text-[11px] uppercase tracking-wider text-[#1B1917]/70 font-medium">
              For Any Enquiries Connect Us:
            </p>
            <a
              href="tel:+919035034425"
              className="inline-flex items-center gap-2 font-mono text-base font-semibold text-[#1B1917] hover:text-[#7A6E58] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7A6E58]" />
              <span>+91-9035034425</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            "OUR HONORABLE VISITORS" (DUAL CAROUSELS)
        ========================================================== */}
        <div className="pt-16 sm:pt-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-[#7A6E58]" />
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1B1917] font-normal tracking-tight">
                &ldquo;Our Honorable Visitors&rdquo;
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {dignitaries.map((person, dIdx) => {
              const activeSlide = visitorIndices[dIdx];
              const currentSrc = person.images[activeSlide];

              return (
                <div
                  key={person.name}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Name & Title Header */}
                  <div className="mb-6">
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal">
                      {person.name}
                    </h4>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#7A6E58] font-medium mt-1">
                      {person.designation}
                    </p>
                  </div>

                  {/* Carousel Stage */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#EAE4D7] group flex items-center justify-center p-2 sm:p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentSrc}
                      alt={person.name}
                      className="w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                      }}
                    />

                    {/* Prev Arrow */}
                    <button
                      onClick={() => handlePrev(dIdx)}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-[#1B1917] border border-[#DCD5C7] flex items-center justify-center transition-all hover:bg-[#1B1917] hover:text-white shadow-md active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Next Arrow */}
                    <button
                      onClick={() => handleNext(dIdx)}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-[#1B1917] border border-[#DCD5C7] flex items-center justify-center transition-all hover:bg-[#1B1917] hover:text-white shadow-md active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Zoom Pill */}
                    <button
                      onClick={() => setLightboxSrc(currentSrc)}
                      className="absolute top-3 right-3 bg-black/60 hover:bg-black/85 text-white p-2.5 rounded-full backdrop-blur-xs transition-all cursor-pointer"
                      aria-label="Expand photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Indicator Ticks (Purely Visual, No Numbers) */}
                  <div className="mt-6 pt-5 border-t border-[#F0EBE0] flex items-center justify-center gap-1.5 flex-wrap">
                    {person.images.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => {
                          setVisitorIndices((prev) => {
                            const next = [...prev];
                            next[dIdx] = dotIdx;
                            return next;
                          });
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === activeSlide
                            ? "w-6 bg-[#1B1917]"
                            : "w-1.5 bg-[#D4CDBC] hover:bg-[#7A6E58]"
                        }`}
                        aria-label={`Slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            PURE GALLERY GRID (9 IMAGES, NO NUMBERS, CLEAN EDITORIAL)
        ========================================================== */}
        <div className="pt-24 sm:pt-32">
          <div className="mb-10 pb-4 border-b border-[#E5E0D5]">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold block mb-1">
              Visual Collection
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1B1917] font-normal">
              Highland Moments
            </h3>
          </div>

          {/* 3 Columns Grid of 9 Clean Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxSrc(src)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden  border-[#E5E0D5] p-3 shadow-xs hover:shadow-lg transition-all duration-500 cursor-pointer group flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Highland Hotel Gallery"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                  loading="lazy"
                />

                {/* Subtle Hover Cue */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white pointer-events-none">
                  <div className="bg-black/60 p-2.5 rounded-full backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================
          FULLSCREEN LIGHTBOX MODAL
      ========================================================== */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
        >
          <div className="w-full flex items-center justify-between text-white pb-4 border-b border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">
              Highland Hotel &bull; Visual Gallery
            </span>

            <button
              onClick={() => setLightboxSrc(null)}
              className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative w-full h-[80vh] flex items-center justify-center p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt="Highland Hotel Gallery View"
              className="max-h-full max-w-full object-contain rounded-sm"
            />
          </div>

          <div className="text-center font-sans text-xs text-white/40 pt-2">
            Click Esc or close button to exit
          </div>
        </div>
      )}
    </section>
  );
}