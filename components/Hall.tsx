"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const carouselSlides = [
  { src: "/carousel/c1.webp", alt: "Highland Hotel Slide 1" },
  { src: "/carousel/c2.webp", alt: "Highland Hotel Slide 2" },
  { src: "/carousel/c3.webp", alt: "Highland Hotel Slide 3" },
  { src: "/carousel/c4.webp", alt: "Highland Hotel Slide 4" },
  { src: "/carousel/c5.webp", alt: "Highland Hotel Slide 5" },
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smooth auto-scroll left to right every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7]">
      {/* Full-Width Horizontal Track */}
      <div className="relative w-full h-[65vh] sm:h-[78vh] lg:h-[88vh] min-h-[420px] max-h-[900px] overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full h-full will-change-transform"
        >
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-full shrink-0 overflow-hidden bg-[#F4EFE6]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </motion.div>

        {/* Minimal Slide Indicator Dots (No Text, Zero Black/Red) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#3A2D21]/45 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#FDFBF7]/20">
          {carouselSlides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "w-7 bg-[#E5C99B]"
                    : "w-1.5 bg-[#FDFBF7]/50 hover:bg-[#FDFBF7]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}