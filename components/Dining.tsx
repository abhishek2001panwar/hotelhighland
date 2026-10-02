"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

const diningPhotos = [
  // 0: Main panoramic feature shot
  "/dining/1.webp",
  // 1-4: The other 4 perspectives/angles of the dining area
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

export default function Dining() {
  const [heroImage, ...gridImages] = diningPhotos;

  return (
    <section className="relative w-full max-w-full bg-[#FAF7F0] text-[#1B1917] py-10 px-4 sm:px-8 lg:px-14 border-t border-[#E5E0D5] overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[#E0D8CB] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8C6D3B] font-semibold">
                Cinnamon Restaurant &bull; Highland Hotel
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal tracking-tight leading-[1.15]">
              Dining &amp; Hospitality
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-[#DDD4C4] px-4 py-2 rounded-full text-xs font-sans text-stone-700 shadow-2xs self-start md:self-auto">
            <Clock className="w-3.5 h-3.5 text-[#8C6D3B]" />
            <span>Open Daily &bull; 07:00 – 23:00</span>
          </div>
        </div>

        {/* Top: Left Editorial Card + Right 5-Photo Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14 sm:mb-16">
          
          {/* Left Column: Brief Story & Timing (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl md:rounded-3xl border border-[#DDD4C4] p-6 sm:p-8 flex flex-col justify-between shadow-xs self-stretch">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-2">
                Ambience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal leading-snug">
                Cinnamon Restaurant
              </h3>
              <p className="font-serif italic text-stone-500 text-xs sm:text-sm mt-1">
                Indoor &amp; Scenic Balcony Seating
              </p>

              <div className="mt-4 sm:mt-5 w-10 h-[1px] bg-[#8C6D3B]/40" />

              <p className="font-sans text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed mt-4 sm:mt-5">
                Our in-house multicuisine restaurant pairs warm timber interiors and natural light with scenic elevated views. Whether you are enjoying a leisurely family breakfast, an executive business lunch, or an evening dinner, Cinnamon offers a calm, welcoming environment.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-200 space-y-3 text-xs font-sans text-stone-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]" />
                  <span>Indian, Continental &amp; Asian Multicuisine</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]" />
                  <span>Air-Conditioned Indoor &amp; Open-Air Balcony</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]" />
                  <span>Dedicated Buffet &amp; Table Service</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-medium px-6 py-3.5 rounded-md transition-all shadow-sm active:scale-95 cursor-pointer text-center"
              >
                <span>Reserve Table</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5-Photo Mosaic Layout (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
            
            {/* Primary Large Panoramic Shot */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-md bg-stone-100">
              <Image
                src={heroImage}
                alt="Cinnamon Restaurant main dining room view"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center"
              />
            </div>

            {/* 4 Remaining Angles (Equal Compact Grid Below) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {gridImages.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden border border-[#DDD4C4] shadow-2xs bg-stone-100"
                >
                  <Image
                    src={src}
                    alt={`Cinnamon Restaurant perspective ${index + 2}`}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom: Compact Signature Dishes Showcase */}
        <div className="pt-10 border-t border-[#E0D8CB]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8C6D3B] font-semibold block mb-1">
                Culinary Highlights
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal">
                Signature Kitchen Selections
              </h3>
            </div>
            <p className="font-sans text-xs text-stone-500 font-light">
              Crafted with hand-ground spices and fresh local produce
            </p>
          </div>

          {/* 4 Small Minimal Dish Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl border border-[#DDD4C4] p-5 flex flex-col justify-between hover:border-[#8C6D3B]/60 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C6D3B] font-semibold">
                      {dish.category}
                    </span>
                    <span className="bg-[#FAF7F0] border border-[#E5E0D5] text-stone-700 text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full">
                      {dish.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-base sm:text-lg text-[#1B1917] font-normal mb-1.5 leading-snug">
                    {dish.name}
                  </h4>

                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  <span>Selection {dish.id}</span>
                  <Sparkles className="w-3 h-3 text-[#8C6D3B]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}