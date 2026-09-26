"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, UtensilsCrossed } from "lucide-react";

type CuisineType = "indian" | "thai" | "sri-lankan";

interface CuisineItem {
  id: string;
  name: string;
  desc: string;
  notes: string;
  badge?: string;
}

interface CuisineSection {
  label: string;
  subtitle: string;
  heroImage: string;
  items: CuisineItem[];
}

const cuisinePreviews: Record<CuisineType, CuisineSection> = {
  indian: {
    label: "Indian Heritage",
    subtitle: "Aromatic spice compositions & regional recipes",
    heroImage: "/restaurant.webp",
    items: [
      {
        id: "01",
        name: "North Indian Delicacies",
        desc: "Slow-simmered gravies, charcoal tandoor kebabs, and delicate saffron-infused breads crafted to order.",
        notes: "Clay Tandoor • Saffron • Ghee Roasts",
        badge: "Chef Signature",
      },
      {
        id: "02",
        name: "South Indian Specialities",
        desc: "Authentic coastal Karnataka flavours, tempering of fresh curry leaves, and heritage preparations.",
        notes: "Stone Ground Spices • Coconut Milk",
      },
      {
        id: "03",
        name: "Contemporary Awadhi & Biryanis",
        desc: "Fragrant long-grain basmati layered with artisanal spices, sealed and cooked in traditional 'dum' style.",
        notes: "Dum Pukht Method • Aged Basmati",
        badge: "House Favourite",
      },
    ],
  },

  thai: {
    label: "Thai Gastronomy",
    subtitle: "Sweet, sour, salty, and spicy in precise harmony",
    heroImage: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1600&auto=format&fit=crop",
    items: [
      {
        id: "01",
        name: "Aromatic Coconut Curries",
        desc: "Silky green and red Thai curries scented with freshly pounded lemongrass, galangal, and kaffir lime leaves.",
        notes: "Fresh Galangal • Kaffir Lime",
        badge: "Speciality",
      },
      {
        id: "02",
        name: "Wok-Tossed Street Classics",
        desc: "Smoky flat-rice noodles and jasmine stir-fries blistered at intense wok heat with holy basil and tamarind.",
        notes: "High-Heat Wok Hei • Thai Basil",
      },
      {
        id: "03",
        name: "Zesty Salads & Starters",
        desc: "Crisp raw papaya lightly crushed with bird's eye chillies, palm sugar glaze, and crushed roasted peanuts.",
        notes: "Som Tum • Crispy Aromatics",
      },
    ],
  },

  "sri-lankan": {
    label: "Island Flavours",
    subtitle: "Rich toasted spices, black curries & coastal Ceylon delicacies",
    heroImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop",
    items: [
      {
        id: "01",
        name: "Roasted Jaffna Curries",
        desc: "Deep, complex gravies steeped in hand-roasted black curry powder, fennel, and freshly grated coconut.",
        notes: "Heirloom Pepper • Dark Roasted Cumin",
        badge: "Rare Selection",
      },
      {
        id: "02",
        name: "Pol Sambol & String Hoppers",
        desc: "Delicate steamed rice noodles paired with spicy coconut sambol, tempered dhal, and coconut cream.",
        notes: "Traditional Ceylon Breakfast & Dinner",
      },
      {
        id: "03",
        name: "Coastal Spiced Medleys",
        desc: "Tender local vegetables and fresh market catch simmered in golden turmeric, goraka, and tempered mustard seeds.",
        notes: "Goraka Infusion • Island Herbs",
      },
    ],
  },
};

export default function Dining() {
  const [activeCuisine, setActiveCuisine] = useState<CuisineType>("indian");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const currentSection = cuisinePreviews[activeCuisine];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f7f4] text-stone-900 py-20 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden selection:bg-orange-500/20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header: Mask Reveals */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            {/* Tagline Mask */}
            <div className="overflow-hidden mb-3">
              <div
                className={`flex items-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
            
                <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-500 font-medium">
                  Cinnamon Restaurant
                </p>
              </div>
            </div>

            {/* Headline Mask */}
            <div className="overflow-hidden">
              <h2
                className={`font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12] transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                Flavours Worth Staying For
              </h2>
            </div>
          </div>

          {/* Pill Badge Entrance */}
          <div
            className={`flex items-center gap-2.5 text-stone-600 font-sans text-xs tracking-wider uppercase border border-stone-300/80 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full w-fit transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.16em] text-stone-700">
              Indian &bull; Thai &bull; Sri Lankan
            </span>
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">

          {/* Left: Atmospheric Restaurant Canvas with Slow Drift & Entrance */}
          <div
            className={`lg:col-span-7 relative min-h-[420px] sm:min-h-[500px] rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-950 group transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-[0.98]"
            }`}
          >
            <div className="relative w-full h-full transform transition-transform duration-[7000ms] ease-out group-hover:scale-105">
              <Image
                src="https://highlandhotel.in/wp-content/uploads/2024/09/150.jpg"
                alt="Cinnamon Multicuisine Restaurant at Highland Hotel Bengaluru"
                fill
                quality={90}
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Editorial Vignette & Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 z-10">
              <span className="inline-block bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded">
                Cinnamon Dining Hall
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white font-sans z-10 text-left">
              <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-orange-400 font-medium mb-1">
                Fine Dining &bull; Highland Hotel
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug">
                Where Culinary Tradition Meets Quiet Luxury
              </h3>
            </div>
          </div>

          {/* Right: Narrative Story Card Entrance */}
          <div
            className={`lg:col-span-5 bg-white p-8 sm:p-12 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between text-left transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600 font-semibold block">
                The Cinnamon Story
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-[1.2]">
                A sensory journey across three distinct regional culinary legacies.
              </h3>

              <p className="font-sans text-stone-600 text-xs sm:text-sm font-light leading-relaxed pt-2">
                Cinnamon combines the warmth of traditional hospitality with an ambitious culinary program. From comforting tandoori feasts to aromatic Thai curries and rare Ceylon spices, every plate is prepared using unadulterated ingredients, stone-pressed oils, and farm-fresh produce.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-stone-200/80 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block mb-0.5">
                  Dining Ambience
                </span>
                <span className="font-serif text-base text-stone-900 font-medium">
                  Indoor &amp; Scenic Balcony
                </span>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white font-sans text-xs uppercase tracking-[0.2em] font-medium px-6 py-3.5 rounded-full shadow-sm transition-all duration-300 active:scale-[0.98] group cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Cuisine Explorer Entrance */}
        <div
          className={`bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-12 shadow-sm transition-all duration-1000 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >

          {/* Cuisine Pill Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-6 mb-10 gap-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              {(
                [
                  { key: "indian", label: "Indian Cuisine" },
                  { key: "thai", label: "Thai Cuisine" },
                  { key: "sri-lankan", label: "Sri Lankan Cuisine" },
                ] as const
              ).map((tab) => {
                const isActive = activeCuisine === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveCuisine(tab.key)}
                    className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-stone-900 text-white shadow-sm"
                        : "bg-stone-100/90 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="text-left sm:text-right font-sans">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-0.5">
                Curated Focus
              </span>
              <p className="text-xs text-stone-800 font-medium">
                {currentSection.subtitle}
              </p>
            </div>
          </div>

          {/* Staggered Dishes Grid with Keyed Transition */}
          <div
            key={activeCuisine}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          >
            {currentSection.items.map((dish, i) => (
              <div
                key={dish.id}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group relative bg-[#faf9f6] hover:bg-[#f5f3ee] border border-stone-200/70 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-xs text-orange-600 font-medium">
                      {dish.id}
                    </span>

                    {dish.badge && (
                      <span className="bg-orange-500/10 border border-orange-500/20 text-orange-700 text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                        {dish.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-xl text-stone-900 font-normal mb-2.5 leading-snug group-hover:text-orange-600 transition-colors">
                    {dish.name}
                  </h4>

                  <p className="font-sans text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed mb-6">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-500">
                  <span>{dish.notes}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}