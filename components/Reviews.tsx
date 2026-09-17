"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  quote: string;
  author: string;
  source: string;
  image: string;
}

const reviews: Review[] = [
  {
    quote:
      "Absolutely exceptional experience at the Highland Hotel! From the moment we arrived, the staff went above and beyond to make us feel welcome and comfortable. The rooms were immaculate, spacious, and tastefully decorated. The bed was incredibly comfortable, and the amenities were top-notch. The hotel's location was perfect for exploring the surrounding area, and the views from the Hotel were breathtaking. The food was delicious, and the service was attentive and friendly.",
    author: "Sandeep Grover",
    source: "Guest Review",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Newly opened property. The staff is very warm and friendly. Special mention to the executive chef and the floor managers of restaurant. Slightly on the outskirts, but the view and rooms are beautiful. Definitely worth a visit ☀️",
    author: "Nikhil Pradhan",
    source: "Guest Review",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "We recently celebrated our daughter’s engagement at Highland Hotel, and it was an absolutely wonderful experience. From start to finish, the staff went above and beyond to ensure that every detail was perfect. The highlight of the event was undoubtedly the food. It was incredibly tasty, and our guests couldn’t stop raving about it. The venue itself was beautifully decorated and provided a warm and welcoming atmosphere.",
    author: "Aarav",
    source: "Guest Review",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "I had the pleasure of staying at Highland Hotel recently, and I was thoroughly impressed by the level of customer service. From the moment I arrived, the staff went out of their way to ensure that my stay was comfortable and enjoyable. They were attentive, courteous, and always ready to assist with any request. Highland Hotel truly knows how to make their guests feel welcome and valued.",
    author: "Mahesh",
    source: "Guest Review",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeReview = reviews[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const previousReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="relative w-full bg-[#f8f7f4] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium mb-3 text-center lg:text-left">
            Guest Impressions
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 text-center lg:text-left">
              A Stay They Remember
            </h2>

            {/* Google Rating */}
            <div className="flex items-center justify-center lg:justify-end gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-stone-900">4.7</span>
                <span className="text-stone-500">from 543 Google reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Quotation + Image Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Quote */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <Quote className="w-12 h-12 text-orange-400/40 mb-6 -scale-x-100" />

            <div className="min-h-[160px] sm:min-h-[190px]">
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-stone-800 leading-[1.38] tracking-tight transition-opacity duration-500">
                &ldquo;{activeReview.quote}&rdquo;
              </blockquote>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 my-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>

            {/* Author Meta & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-200">
              <div>
                <p className="font-serif text-lg font-medium text-stone-900">
                  {activeReview.author}
                </p>
                <p className="font-sans text-xs text-stone-500 tracking-wider uppercase mt-0.5">
                  {activeReview.source}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={previousReview}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-200/60 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-700" />
                </button>

                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-200/60 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4 text-stone-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Property Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] h-[400px] rounded-lg overflow-hidden border border-stone-200 shadow-xl bg-stone-200">
              {reviews.map((review, index) => (
                <Image
                  key={index}
                  src={review.image}
                  alt={review.author}
                  fill
                  className={`object-cover object-center transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                  sizes="340px"
                  priority={index === 0}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-orange-300 block mb-1">
                  Guest Reviews
                </span>
                <span className="text-[11px] font-sans tracking-widest uppercase">
                  Highland Hotel
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Review Counter / Progress Indicators */}
        <div className="flex justify-center lg:justify-start mt-10">
          <div className="flex items-center gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}