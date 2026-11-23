"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, CheckCircle2 } from "lucide-react";

interface Review {
  id: string;
  quote: string;
  highlight: string;
  author: string;
  source: string;
  image: string;
  context: string;
}

const reviews: Review[] = [
  {
    id: "aarav",
    quote:
      "We recently celebrated our daughter’s engagement at Highland Hotel, and it was an absolutely wonderful experience. From start to finish, the staff went above and beyond to ensure that every detail was perfect. The highlight of the event was undoubtedly the food. It was incredibly tasty, and our guests couldn’t stop raving about it. Every dish was prepared to perfection, offering a delightful culinary experience that truly made the evening special.",
    highlight: "Engagement Celebration & Banquet",
    author: "Aarav",
    source: "Verified Google Review",
    context: "Family Celebration & Banquet",
    image: "/test1.webp",
  },
  {
    id: "mahesh",
    quote:
      "I had the pleasure of staying at Highland Hotel recently, and I was thoroughly impressed by the level of customer service. From the moment I arrived, the staff went out of their way to ensure that my stay was comfortable and enjoyable. They were attentive, courteous, and always ready to assist with any request. Highland Hotel truly knows how to make their guests feel welcome and valued.",
    highlight: "Attentive Hospitality & Comfort",
    author: "Mahesh",
    source: "Verified Google Review",
    context: "Executive Leisure Stay",
    image: "/test2.webp",
  },
  {
    id: "sandeep",
    quote:
      "Absolutely exceptional experience at the Highland Hotel! From the moment we arrived, the staff went above and beyond to make us feel welcome and comfortable. The rooms were immaculate, spacious, and tastefully decorated. The bed was incredibly comfortable, and the amenities were top-notch. The hotel's location was perfect for exploring the surrounding area, and the views from the Hotel were breathtaking.",
    highlight: "Immaculate Suites & Breathtaking Views",
    author: "Sandeep Grover",
    source: "Verified Google Review",
    context: "Weekend Getaway & Dining",
    image: "/test3.webp",
  },
  {
    id: "nikhil",
    quote:
      "Newly opened property. The staff is very warm and friendly. Special mention to the executive chef and the floor managers of restaurant. Slightly on the outskirts, but the view and rooms are beautiful. Definitely worth a visit.",
    highlight: "Executive Chef & Scenic Rooms",
    author: "Nikhil Pradhan",
    source: "Verified Google Review",
    context: "Culinary & Suite Experience",
    image: "/test4.webp",
  },
];

const appleEase = [0.16, 1, 0.3, 1] as const;

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeReview = reviews[currentIndex];
  const total = reviews.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const previousReview = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FDFBF7] text-[#3A2D21] py-12 sm:py-16 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4] overflow-hidden selection:bg-[#A1611D]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= COMPACT EDITORIAL HEADER ================= */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#DDD4C4] gap-4 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#A1611D] font-bold">
                Guest Impressions &bull; Verified Stays
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#3A2D21] leading-tight">
              A Stay They Remember
            </h2>
          </div>

          {/* Warm Sandstone Rating Badge */}
          <div className="flex items-center gap-3 bg-[#F4EFE6] border border-[#DDD4C4] px-4 py-2 rounded-full w-fit shadow-2xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[#A1611D] text-[#A1611D]"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="font-bold text-[#3A2D21]">4.7 / 5</span>
              <span className="text-[#A1611D]">&bull;</span>
              <span className="text-[#5A4A3B] font-semibold">
                540+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* ================= COMPACT 2-COLUMN SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* LEFT: COMPACT TESTIMONIAL CARD (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F4EFE6] rounded-2xl border border-[#DDD4C4] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Top Quote Icon + Highlight Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#FDFBF7] border border-[#DDD4C4] flex items-center justify-center text-[#A1611D]">
                  <Quote className="w-4 h-4 -scale-x-100 stroke-[2]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={`badge-${activeReview.id}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    className="inline-flex items-center gap-1.5 bg-[#FDFBF7] border border-[#DDD4C4] text-[#A1611D] px-3 py-1 rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.16em]"
                  >
                    <CheckCircle2 className="w-3 h-3 stroke-[2.2]" />
                    <span>{activeReview.highlight}</span>
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Quote Body */}
              <div className="min-h-[125px] sm:min-h-[115px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: appleEase }}
                    className="font-serif text-base sm:text-lg md:text-[19px] font-medium text-[#3A2D21] leading-[1.5] tracking-wide line-clamp-5"
                  >
                    &ldquo;{activeReview.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Author Meta + Pill Controls */}
            <div className="mt-5 pt-4 border-t border-[#DDD4C4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${activeReview.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-[#A1611D] text-[#A1611D]"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-bold text-[#3A2D21] tracking-wide leading-tight">
                    {activeReview.author}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                    <span className="font-sans text-[10px] font-bold text-[#5A4A3B] uppercase tracking-wider">
                      {activeReview.source}
                    </span>
                    <span className="text-[#A1611D] text-xs">&bull;</span>
                    <span className="font-sans text-[11px] text-[#A1611D] font-bold tracking-wide">
                      {activeReview.context}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pill Navigation Buttons */}
              <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Previous review"
                  className="w-10 h-8 rounded-full bg-[#FDFBF7] hover:bg-[#EAE1D0] border border-[#DDD4C4] text-[#3A2D21] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5 stroke-[2]" />
                </button>

                <span className="font-sans text-xs font-bold tracking-[0.18em] text-[#3A2D21] min-w-[34px] text-center">
                  {currentIndex + 1}/{total}
                </span>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-10 h-8 rounded-full bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-xs"
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPACT PHOTO CARD + SELECTOR PILLS (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="relative w-full h-[240px] sm:h-[260px] lg:flex-1 rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-sm bg-[#3A2D21]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.image}
                  initial={{ opacity: 0.3, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.6, ease: appleEase }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeReview.image}
                    alt={`Highland Hotel impression by ${activeReview.author}`}
                    fill
                    quality={95}
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Warm Espresso Bronze Bottom Scrim */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44, 34, 24, 0.85) 0%, rgba(44, 34, 24, 0.2) 48%, rgba(44, 34, 24, 0) 78%)",
                }}
              />

              {/* Bottom Inset Label */}
              <div className="absolute bottom-4 left-5 right-5 text-[#FDFBF7] text-left z-20">
                <span className="text-[10px] font-sans font-bold tracking-[0.24em] uppercase text-[#E5C99B] block mb-0.5">
                  Guest Experience &bull; 0{currentIndex + 1}
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold leading-snug tracking-wide text-[#FDFBF7]">
                  {activeReview.context}
                </p>
              </div>
            </div>

            {/* Interactive Guest Selector Pills */}
            <div className="grid grid-cols-4 gap-2">
              {reviews.map((rev, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={rev.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`py-2 px-2 rounded-lg border text-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#A1611D] border-[#A1611D] text-[#FDFBF7] shadow-xs"
                        : "bg-[#F4EFE6] border-[#DDD4C4] text-[#3A2D21] hover:border-[#A1611D]"
                    }`}
                  >
                    <span className="font-sans text-[11px] font-bold tracking-wide block truncate">
                      {rev.author.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}