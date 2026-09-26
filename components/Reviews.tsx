"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface Review {
  quote: string;
  author: string;
  source: string;
  image: string;
  context: string;
}

const reviews: Review[] = [
  {
    quote:
      "We recently celebrated our daughter’s engagement at Highland Hotel, and it was an absolutely wonderful experience. From start to finish, the staff went above and beyond to ensure that every detail was perfect. The highlight of the event was undoubtedly the food. It was incredibly tasty, and our guests couldn’t stop raving about it. Every dish was prepared to perfection, offering a delightful culinary experience that truly made the evening special. The venue itself was beautifully decorated and provided a warm and welcoming atmosphere. The event space was spacious yet intimate, allowing everyone to mingle comfortably and enjoy the celebration....",
    author: "Aarav",
    source: "Guest Review",
    context: "Family Celebration & Banquet",
    image: "/test1.webp",
  },
  {
    quote:
      "I had the pleasure of staying at Highland Hotel recently, and I was thoroughly impressed by the level of customer service. From the moment I arrived, the staff went out of their way to ensure that my stay was comfortable and enjoyable. They were attentive, courteous, and always ready to assist with any request. Highland Hotel truly knows how to make their guests feel welcome and valued.",
    author: "Mahesh",
    source: "Guest Review",
    context: "Executive Leisure Stay",
    image: "/test2.webp",
  },
  {
    quote:
      "Absolutely exceptional experience at the Highland Hotel! From the moment we arrived, the staff went above and beyond to make us feel welcome and comfortable. The rooms were immaculate, spacious, and tastefully decorated. The bed was incredibly comfortable, and the amenities were top-notch. The hotel's location was perfect for exploring the surrounding area, and the views from the Hotel were breathtaking. The food was delicious, and the service was attentive and friendly. What truly sets the Highland Hotel apart, however, is the exceptional service. Every staff member we interacted with was warm, friendly, and went out of their way to...",
    author: "Sandeep Grover",
    source: "Guest Review",
    context: "Weekend Getaway & Dining",
    image: "/test3.webp",
  },
  {
    quote:
      "Newly opened property. The staff is very warm and friendly. Special mention to the executive chef and the floor managers of restaurant. Slightly on the outskirts, but the view and rooms are beautiful. Definitely worth a visit ☀️",
    author: "Nikhil Pradhan",
    source: "Guest Review",
    context: "Culinary & Suite Experience",
    image: "/test4.webp",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeReview = reviews[currentIndex];

  // In-view observer only (no auto-timer)
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

  const previousReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f7f4] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden selection:bg-orange-500/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-2.5">
           
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-500 font-medium">
                Guest Impressions
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12]">
              A Stay They Remember
            </h2>
          </div>

          {/* Minimal Verified Rating Pill */}
          <div className="flex items-center gap-3 bg-white border border-stone-200/90 px-4 py-2.5 rounded-full w-fit shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 font-sans text-xs">
              <span className="font-semibold text-stone-900">4.7</span>
              <span className="text-stone-300">&bull;</span>
              <span className="text-stone-600 font-light text-[11px]">540+ Google Reviews</span>
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Flowing Testimonial */}
          <div className="lg:col-span-8 flex flex-col justify-between text-left">
            <Quote className="w-10 h-10 text-orange-500/30 mb-6 -scale-x-100 stroke-[1.5]" />

            {/* Keyed Dynamic Quote with Smooth In-Place Fade */}
            <div className="min-h-[220px] sm:min-h-[200px] flex items-center">
              <div
                key={currentIndex}
                className="animate-in fade-in duration-500 fill-mode-both"
              >
                <blockquote className="font-serif text-xl sm:text-2xl md:text-[26px] font-light text-stone-800 leading-[1.42] tracking-tight">
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 my-7">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>

            {/* Author Meta & Manual Navigation Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-300/80">
              <div key={`author-${currentIndex}`} className="animate-in fade-in duration-400">
                <p className="font-serif text-xl font-normal text-stone-900">
                  {activeReview.author}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                    {activeReview.source}
                  </span>
                  <span className="text-stone-300 text-xs">&bull;</span>
                  <span className="font-sans text-[11px] text-orange-600 font-medium">
                    {activeReview.context}
                  </span>
                </div>
              </div>

              {/* Slider Controls & Number Index */}
              <div className="flex items-center gap-4 self-start sm:self-center">
               

                <div className="flex items-center gap-2">
                  <button
                    onClick={previousReview}
                    className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:border-stone-900 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextReview}
                    className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-900 hover:border-stone-900 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Curated High-DPI Visual Canvas */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] h-[450px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-xl bg-stone-900">
              {reviews.map((review, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={review.image}
                      alt={`Highland Hotel impression by ${review.author}`}
                      fill
                      quality={95}
                      priority={index === 0}
                      className="object-cover object-center"
                      sizes="340px"
                    />
                  </div>
                );
              })}

              {/* Editorial Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-20" />

              {/* Bottom Inset Label */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-30">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-orange-400 block mb-1">
                  Verified Stay
                </span>
                <p className="font-serif text-lg font-light leading-snug">
                  Highland Hotel Bengaluru
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Dash Progress Indicators (Click to jump) */}
        <div className="flex justify-center lg:justify-start mt-12">
          <div className="flex items-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Jump to review ${index + 1}`}
                className="py-2 cursor-pointer focus:outline-none group"
              >
                <span
                  className={`block h-[2px] rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-8 bg-orange-500"
                      : "w-3 bg-stone-300 group-hover:bg-stone-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}