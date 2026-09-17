"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UtensilsCrossed } from "lucide-react";

type CuisineType = "indian" | "thai" | "sri-lankan";

interface CuisineItem {
  name: string;
  desc: string;
  badge?: string;
}

const cuisinePreviews: Record<
  CuisineType,
  { label: string; items: CuisineItem[] }
> = {
  indian: {
    label: "Indian Cuisine",
    items: [
      {
        name: "Regional Indian Flavours",
        desc: "A diverse selection of Indian dishes prepared with aromatic spices and carefully balanced flavours.",
        badge: "Featured",
      },
      {
        name: "Classic Indian Favourites",
        desc: "Comforting favourites bringing together familiar flavours and traditional culinary influences.",
      },
      {
        name: "Contemporary Indian Dining",
        desc: "A modern dining experience that combines familiar Indian flavours with an elegant restaurant setting.",
      },
    ],
  },

  thai: {
    label: "Thai Cuisine",
    items: [
      {
        name: "Thai Specialities",
        desc: "Explore distinctive Thai flavours as part of Cinnamon's international culinary offering.",
        badge: "International",
      },
      {
        name: "Aromatic Thai Flavours",
        desc: "A selection inspired by the fragrant herbs, spices and balanced flavours associated with Thai cuisine.",
      },
      {
        name: "Thai Dining Experience",
        desc: "Enjoy international flavours in the welcoming atmosphere of Cinnamon Multicuisine Restaurant.",
      },
    ],
  },

  "sri-lankan": {
    label: "Sri Lankan Cuisine",
    items: [
      {
        name: "Sri Lankan Specialities",
        desc: "Discover the distinctive flavours of Sri Lankan cuisine featured among Cinnamon's international offerings.",
        badge: "Speciality",
      },
      {
        name: "Island-Inspired Flavours",
        desc: "A culinary experience influenced by the rich spices and traditional flavours of Sri Lanka.",
      },
      {
        name: "A Taste of Sri Lanka",
        desc: "Experience something different with Sri Lankan dishes alongside Cinnamon's broader multicuisine selection.",
      },
    ],
  },
};

export default function Dining() {
  const [activeCuisine, setActiveCuisine] =
    useState<CuisineType>("indian");

  return (
    <section className="relative w-full bg-[#f8f7f4] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium mb-3">
              Culinary Experience
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Flavours Worth Staying For
            </h2>
          </div>

          <div className="flex items-center gap-3 text-stone-600 font-sans text-xs tracking-wider uppercase">
            <UtensilsCrossed className="w-4 h-4 text-orange-500" />

            <span>
              Multicuisine • Indian • Thai • Sri Lankan
            </span>
          </div>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">

          {/* Restaurant Visual */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] rounded-lg overflow-hidden border border-stone-200 shadow-xl bg-stone-200">

            <Image
              src="https://highlandhotel.in/wp-content/uploads/2024/09/150-768x512.jpg"
              alt="Cinnamon Multicuisine Restaurant at Highland Hotel"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white font-sans">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-orange-300 block mb-1">
                Cinnamon Multicuisine Restaurant
              </span>

              <p className="font-serif text-2xl font-light">
                A World of Flavours at Highland
              </p>
            </div>
          </div>

          {/* Cinnamon Story Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-lg border border-stone-200 shadow-lg flex flex-col justify-between">

            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-orange-600 font-semibold mb-3 block">
                CINNAMON MULTICUISINE RESTAURANT
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug mb-5">
                A multicuisine dining experience bringing international flavours to Highland Hotel.
              </h3>

              <p className="font-sans text-stone-600 text-sm font-light leading-relaxed mb-6">
                Cinnamon offers a diverse culinary experience with Indian,
                Thai and Sri Lankan influences alongside a wider selection
                of international dishes. Enjoy your meal in the elegant
                dining room or experience al-fresco dining on the scenic
                balconies.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4">

              <div>
                <span className="text-[10px] uppercase font-sans tracking-widest text-stone-400 block">
                  Dining
                </span>

                <span className="font-serif text-base text-stone-800">
                  Multicuisine Restaurant
                </span>
              </div>

              <Link
                href="/cinnamon"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded shadow-md transition-all duration-200"
              >
                <span>Explore Dining</span>

                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Cuisine Preview */}
        <div className="bg-white rounded-lg border border-stone-200 p-6 sm:p-10 shadow-sm">

          {/* Cuisine Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-6 mb-8 gap-4">

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">

              {(
                ["indian", "thai", "sri-lankan"] as CuisineType[]
              ).map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setActiveCuisine(cuisine)}
                  className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer ${
                    activeCuisine === cuisine
                      ? "bg-stone-900 text-white shadow-sm"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200/70"
                  }`}
                >
                  {cuisine === "sri-lankan"
                    ? "Sri Lankan"
                    : cuisine}
                </button>
              ))}
            </div>

            <span className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Explore{" "}
              <strong className="text-stone-800 font-semibold">
                {cuisinePreviews[activeCuisine].label}
              </strong>
            </span>
          </div>

          {/* Cuisine Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {cuisinePreviews[activeCuisine].items.map((dish, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-l-2 border-orange-400/60 pl-5"
              >
                <div>

                  <div className="flex items-center justify-between gap-2 mb-1.5">

                    <h4 className="font-serif text-lg text-stone-900 font-medium">
                      {dish.name}
                    </h4>

                    {dish.badge && (
                      <span className="bg-orange-100 text-orange-800 text-[10px] font-sans tracking-wide uppercase px-2 py-0.5 rounded whitespace-nowrap">
                        {dish.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}