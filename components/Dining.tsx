"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

const diningPhotos = [
  "/dining/1.webp",
  "/dining/2.webp",
  "/dining/3.webp",
  "/dining/4.webp",
  "/dining/5.webp",
];

const featuredDishes = [
  {
    id: "01",
    name: "Awadhi Dum Biryani",
    desc: "Aromatic aged basmati slow-cooked in sealed clay handi with saffron & whole spices.",
    category: "Indian Heritage",
    badge: "Chef Signature",
  },
  {
    id: "02",
    name: "Charcoal Tandoori Kebab",
    desc: "Tender, clay-oven roasted cuts marinated in hand-ground spices and mustard oil.",
    category: "Tandoor Special",
    badge: "Smoky Classic",
  },
  {
    id: "03",
    name: "Thai Green Curry",
    desc: "Silky coconut broth simmered with crushed lemongrass, galangal & holy basil.",
    category: "Pan-Asian",
    badge: "Aromatic",
  },
  {
    id: "04",
    name: "Ceylon Spiced Roast",
    desc: "Rich coastal black curry infused with hand-toasted island spices & tempered curry leaves.",
    category: "Island Special",
    badge: "House Favourite",
  },
];

const appleEase = [0.16, 1, 0.3, 1] as const;

export default function Dining() {
  const [heroImage, ...gridImages] = diningPhotos;

  return (
    <section className="relative w-full max-w-full bg-[#FDFBF7] text-[#3A2D21] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 border-t border-[#E5E0D5] overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: appleEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 pb-6 sm:pb-8 border-b border-[#DDD4C4] gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2.5">
             
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#A1611D] font-bold">
                Cinnamon Restaurant &bull; Highland Hotel
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-semibold tracking-tight leading-[1.12]">
              Dining &amp; Hospitality
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-[#F4EFE6] border border-[#DDD4C4] px-4 py-2.5 rounded-full text-xs font-sans font-bold text-[#3A2D21] shadow-2xs self-start md:self-auto">
            <Clock className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.2]" />
            <span>Open Daily &bull; 07:00 – 23:00</span>
          </div>
        </motion.div>

        {/* ================= TOP: EDITORIAL CARD + 5-PHOTO MOSAIC ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16 sm:mb-20">
          
          {/* Left Column: Brief Story & Bold Facilities (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.08, ease: appleEase }}
            className="lg:col-span-4 bg-[#F4EFE6] rounded-2xl md:rounded-3xl border border-[#DDD4C4] p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A1611D] font-bold block mb-2">
                Ambience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold leading-snug">
                Cinnamon Restaurant
              </h3>
              <p className="font-serif italic text-[#A1611D] font-semibold text-xs sm:text-sm mt-1">
                Indoor &amp; Scenic Balcony Seating
              </p>

              <div className="mt-5 w-10 h-[1.5px] bg-[#A1611D]/50" />

              <p className="font-sans text-xs sm:text-[13px] text-[#5A4A3B] font-medium leading-relaxed mt-5">
                Our in-house <strong className="font-bold text-[#3A2D21]">multicuisine restaurant</strong> pairs warm timber interiors and natural light with scenic elevated views. Whether you are enjoying a leisurely family breakfast, an executive business lunch, or an evening dinner, Cinnamon offers a calm, welcoming environment.
              </p>

              <div className="mt-6 pt-6 border-t border-[#DDD4C4] space-y-3 text-xs font-sans font-bold text-[#3A2D21]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A1611D] shrink-0" />
                  <span>Indian, Continental &amp; Asian Multicuisine</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A1611D] shrink-0" />
                  <span>Air-Conditioned Indoor &amp; Open-Air Balcony</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A1611D] shrink-0" />
                  <span>Dedicated Buffet &amp; Table Service</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDD4C4]">
              <Link
                href="/contact"
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#A1611D] hover:bg-[#73582D] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold px-6 py-3.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer text-center"
              >
                <span>Reserve Table</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Apple-Smooth 5-Photo Mosaic Layout (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
            
            {/* Primary Large Panoramic Shot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.14, ease: appleEase }}
              className="group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-md bg-[#F4EFE6]"
            >
              <Image
                src={heroImage}
                alt="Cinnamon Restaurant main dining room view"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

            {/* 4 Remaining Angles (Equal Compact Grid with Staggered Reveal) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {gridImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + index * 0.07,
                    ease: appleEase,
                  }}
                  className="group relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden border border-[#DDD4C4] shadow-2xs bg-[#F4EFE6]"
                >
                  <Image
                    src={src}
                    alt={`Cinnamon Restaurant perspective ${index + 2}`}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* ================= BOTTOM: COMPACT SIGNATURE DISHES SHOWCASE ================= */}
        <div className="pt-12 border-t border-[#DDD4C4]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: appleEase }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A1611D] font-bold block mb-1">
                Culinary Highlights
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold">
                Signature Kitchen Selections
              </h3>
            </div>
            <p className="font-sans text-xs text-[#5A4A3B] font-semibold">
              Crafted with hand-ground spices and fresh local produce
            </p>
          </motion.div>

          {/* 4 Minimal Apple-Tactile Dish Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {featuredDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: appleEase,
                }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl border border-[#DDD4C4] p-5 flex flex-col justify-between hover:border-[#A1611D] hover:shadow-md transition-all duration-300 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1611D] font-bold">
                      {dish.category}
                    </span>
                    <span className="bg-[#F4EFE6] border border-[#DDD4C4] text-[#3A2D21] text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                      {dish.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-base sm:text-lg text-[#3A2D21] font-bold mb-2 leading-snug">
                    {dish.name}
                  </h4>

                  <p className="font-sans text-xs text-[#5A4A3B] font-normal leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-4 border-t border-[#E5E0D5] flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-[#A1611D]">
                  <span>Selection {dish.id}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#A1611D]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}