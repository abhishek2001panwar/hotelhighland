"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Phone,
  ArrowUpRight,
  UtensilsCrossed,
  Globe2,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Crisp High-Resolution Hero Photograph (Original Full-Scale Photo)
const heroBg =
  "/cinnamon/hero.webp";

const diningAmbianceImg =
  "/cinnamon/dinning.webp";

const abroadCuisines = [
  {
    title: "Sri Lankan Cuisine",
    subtitle: "Authentic Coastal & Island Flavors",
    description:
      "A tribute to aromatic island curries, fragrant tempered spices, coconut sambols, and time-honored Ceylon heritage recipes prepared fresh by our specialty chefs.",
    src: "/cinnamon/srilanka.webp",
  },
  {
    title: "Thailand Cuisine",
    subtitle: "Vibrant Asian Aromas",
    description:
      "Harmonizing the quintessential Thai balance of sweet, sour, salty, and spicy with authentic kaffir lime, galangal, lemongrass, and rich coconut broths.",
    src: "/cinnamon/thailand.webp",
  },
];

// Clean Full-Resolution Assets (Thumbnails -300x300 & -300x240 removed)
const culinaryGallery = [
  {
    src: "/cinnamon/1.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/2.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/3.webp",
    span: "md:col-span-4 aspect-square",
  },
  {
    src: "/cinnamon/4.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/5.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/6.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/7.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/8.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "/cinnamon/9.webp",
    span: "md:col-span-4 aspect-[4/3]",
  },
];

export default function CinnamonRestaurantPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Pure Y-translation only (NO scale transform to preserve raw pixel sharpness)
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - EDITORIAL HERO (CRISP & SCALE-LOCKED)
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[600px] max-h-[900px] overflow-hidden flex flex-col justify-end p-6 sm:p-12 lg:p-16"
      >
        {/* Parallax Background Canvas - Scale Locked */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full will-change-transform pointer-events-none transform-gpu"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroBg}
            alt="Cinnamon Multicuisine Restaurant at Highland Hotel"
            className="w-full h-full object-cover object-center"
            style={{
              imageRendering: "-webkit-optimize-contrast",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            loading="eager"
          />
        </motion.div>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none z-10" />

        {/* BOTTOM CORNERS: Headings & Actions */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-white"
        >
          {/* Bottom-Left Heading */}
          <div className="lg:col-span-8">
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-stone-300 font-medium mb-3">
              Meet Our Multicuisine Restaurant
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.02] tracking-[-0.035em] drop-shadow-md">
              Cinnamon <br />
              <span className="italic font-light text-stone-200">
                Multicuisine Restaurant
              </span>
            </h1>
          </div>

          {/* Bottom-Right Info & Action */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-end space-y-4">
            <p className="font-serif italic text-base sm:text-lg text-stone-200 font-light leading-snug drop-shadow-xs max-w-sm">
              &ldquo;Where every dish tells a story and every meal becomes a cherished memory.&rdquo;
            </p>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 text-xs font-sans text-stone-200">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <span>Enquiries:</span>
                <a
                  href="tel:+919035034422"
                  className="text-white hover:text-stone-300 transition-colors font-medium underline underline-offset-4"
                >
                  +91-9035034422
                </a>
              </div>

              <a
                href="tel:+919035034422"
                className="inline-flex items-center gap-2 bg-white text-[#1B1917] hover:bg-stone-100 px-5 py-2.5 rounded-sm font-sans text-[10px] uppercase tracking-[0.2em] font-medium transition-all shadow-sm"
              >
                <span>Reserve a Table</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - RESTAURANT INTRODUCTION & AMBIANCE
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Ambiance Image */}
          <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E5E0D5] p-3 shadow-xs">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={diningAmbianceImg}
                alt="Cinnamon Restaurant dining experience and interiors"
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Lead Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-[#7A6E58]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-medium">
                Signature Dining
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
              Cinnamon Multicuisine Restaurant
            </h2>

            <p className="font-sans text-[#1B1917]/85 text-sm sm:text-base font-light leading-relaxed">
              Step into a world of culinary delight at Highland Hotel’s signature restaurant, Cinnamon. Boasting an exquisite blend of captivating interior design and impeccable service, Cinnamon offers a gastronomic experience like no other.
            </p>

            <p className="font-sans text-[#1B1917]/75 text-sm sm:text-base font-light leading-relaxed">
              Indulge your senses with a diverse menu featuring international and innovative dishes crafted from the finest seasonal ingredients, expertly prepared by our skilled chefs. Whether you’re savoring a gourmet meal in the elegant dining room or enjoying al fresco dining on the scenic balconies, every moment at Cinnamon is infused with a sense of warmth, sophistication, and culinary excellence.
            </p>

            <p className="font-sans text-[#1B1917]/75 text-sm sm:text-base font-light leading-relaxed">
              From intimate dinners to celebratory gatherings, let Cinnamon be your destination for unforgettable dining experiences, where every dish tells a story and every meal becomes a cherished memory.
            </p>

            <div className="pt-4 border-t border-[#E5E0D5] flex flex-wrap items-center gap-6 font-sans text-[11px] uppercase tracking-wider text-[#1B1917]/55">
              <span>Gourmet Dining Room</span>
              <span>&bull;</span>
              <span>Scenic Balcony Seating</span>
              <span>&bull;</span>
              <span>Seasonal Ingredients</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          03 - OUR SPECIAL ABROAD CONNECTION WITH FOODS
      ========================================================== */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-[#E8E2D6]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="w-4 h-4 text-[#7A6E58]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-medium">
                Global Gastronomy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
              Our Special Abroad Connection with Foods
            </h2>
            <p className="font-sans text-[#1B1917]/70 text-sm font-light mt-3">
              Bringing master authentic recipes from our international culinary partners straight to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {abroadCuisines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-xs flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/10] bg-[#FAF7F0] overflow-hidden flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-700 hover:scale-102"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                    loading="lazy"
                  />
                </div>

                <div className="p-7 sm:p-8 space-y-3">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A6E58] font-medium block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1B1917] font-normal">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          04 - GALLERY (THE 9 FULL-RESOLUTION CULINARY MOMENTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
            Visual Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
            Culinary Craft &amp; Presentation
          </h2>
          <p className="font-sans text-[#1B1917]/70 text-sm font-light mt-2">
            A glimpse into our freshly prepared appetizers, signature curries, and comforting dining service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6">
          {culinaryGallery.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden bg-white border border-[#E5E0D5] shadow-xs group ${item.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt="Cinnamon Restaurant dish moment"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 - LIGHT PARCHMENT CONTACT & RESERVATION FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
                Table Reservations &bull; Highland Hotel
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal mb-3">
                Dine at Cinnamon
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                Whether you are joining us for breakfast, lunch, or an evening dinner celebration, our team is at your service to ensure an impeccable dining experience.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#1B1917]/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Restaurant Desk</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  <a href="tel:+919035034422" className="hover:underline">
                    +91-9035034422
                  </a>
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  Direct line for table bookings and banquet catering inquiries.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Service Hours</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  7:00 AM – 10:30 PM
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  Breakfast, Lunch, High Tea &amp; Dinner service daily.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/60">
            <p>Highland Hotel &bull; Cinnamon Multicuisine Restaurant</p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919035034422"
                className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-6 py-2.5 rounded-sm uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
              >
                Call for Reservation
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}