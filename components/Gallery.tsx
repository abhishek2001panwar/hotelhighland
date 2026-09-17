"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  src: string;
  aspect: "wide" | "tall";
}

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    title: "Highland Hotel",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/174-2048x1365.jpg",
    aspect: "wide",
  },
  {
    id: 2,
    title: "Executive Suite",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/15-2048x1365.jpg",
    aspect: "tall",
  },
  {
    id: 3,
    title: "Cinnamon Multicuisine Restaurant",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/87-2048x1365.jpg",
    aspect: "tall",
  },
  {
    id: 4,
    title: "Ayurveda & Wellness",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/53-2048x1365.jpg",
    aspect: "wide",
  },
  {
    id: 5,
    title: "Utsava Banquet Hall",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/155-2048x1365.jpg",
    aspect: "wide",
  },
  {
    id: 6,
    title: "Executive Twin Suite",
    src: "https://highlandhotel.in/wp-content/uploads/2024/09/20-2048x1365.jpg",
    aspect: "tall",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = useCallback(() => {
    if (lightboxIndex === null || galleryItems.length === 0) return;

    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? galleryItems.length - 1 : prev - 1;
    });
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null || galleryItems.length === 0) return;

    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === galleryItems.length - 1 ? 0 : prev + 1;
    });
  }, [lightboxIndex]);

  /* Keyboard Navigation */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  /* Prevent Body Scroll While Lightbox Is Open */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex]);

  return (
    <section className="relative w-full bg-[#f8f7f4] text-stone-900 py-10 sm:py-14 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium mb-2">
            Visual Narrative
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-[1.15]">
            Moments of Highland
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {galleryItems.map((item, index) => {
            const isWide = item.aspect === "wide";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-lg border border-stone-200 shadow-md bg-stone-200 h-[300px] sm:h-[380px] transition-transform duration-500 hover:-translate-y-1 text-left ${
                  isWide
                    ? "md:col-span-7 lg:col-span-8"
                    : "md:col-span-5 lg:col-span-4"
                }`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-serif text-lg sm:text-xl font-light leading-snug">
                      {item.title}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxIndex !== null && galleryItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 rounded-full bg-stone-900/60 transition-colors z-50 cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-stone-900/70 hover:bg-orange-500 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-stone-900/70 hover:bg-orange-500 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div className="relative max-w-5xl w-full h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Image Meta */}
            <div className="mt-4 flex items-center justify-between w-full text-stone-300 text-xs sm:text-sm font-sans px-2 gap-4">
              <span className="truncate">
                {galleryItems[lightboxIndex].title}
              </span>
              <span className="text-stone-500 tracking-widest uppercase shrink-0">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}