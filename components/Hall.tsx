"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const carouselSlides = [
  { src: "/carousel/c1.webp", label: "01 - Deluxe Room" },
  { src: "/carousel/c2.webp", label: "02 - Executive Suite" },
  { src: "/carousel/c3.webp", label: "03 - Dining Area" },
  { src: "/carousel/c4.webp", label: "04 - Restaurant & Dining" },
  { src: "/carousel/c5.webp", label: "05 - Banquet Dining" },
];

interface CardProps {
  slide: { src: string; label: string };
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackedCard({ slide, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(4vh + ${index * 14}px)`,
        }}
        className="relative w-full h-[75vh] sm:h-[85vh] max-h-[880px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-100 will-change-transform"
      >
        <Image
          src={slide.src}
          alt={slide.label}
          fill
          priority={index === 0}
          quality={95}
          sizes="(max-width: 1280px) 100vw, 1400px"
          className="object-cover object-center"
        />

        {/* Minimal frosted glass label */}
      </motion.div>
    </div>
  );
}

export default function CarouselSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 sm:px-8 lg:px-12 bg-[#FDFBF7]"
    >
      <div className="max-w-[1440px] mx-auto">
        {carouselSlides.map((slide, index) => {
          const targetScale = 1 - (carouselSlides.length - index) * 0.04;
          return (
            <StackedCard
              key={index}
              slide={slide}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}