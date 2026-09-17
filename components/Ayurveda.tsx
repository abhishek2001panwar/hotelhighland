"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
}

const pillars: WellnessPillar[] = [
  {
    id: "ayurveda",
    title: "Ayurveda",
    subtitle: "Traditional Wellness & Balance",
    description:
      "Experience Ayurveda at Highland Hotel through personalized consultations and traditional wellness practices designed around individual needs. Treatments may include herbal remedies, dietary guidance, massage, detoxification and meditation.",
    highlights: [
      "Personalized Wellness Consultation",
      "Ayurvedic Treatments",
      "Herbal & Dietary Guidance",
    ],
    image:
      "	https://highlandhotel.in/wp-content/uploads/2024/09/20-1536x1024.jpg",
  },
  {
    id: "yoga",
    title: "Yoga",
    subtitle: "Movement, Breath & Mindfulness",
    description:
      "Highland's yoga programme brings together traditional practices including asanas, pranayama and meditation. Sessions are designed to support flexibility, physical wellbeing, relaxation and inner balance.",
    highlights: [
      "Asana Practice",
      "Pranayama",
      "Meditation",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/107-1536x1024.jpg",
  },
  {
    id: "naturopathy",
    title: "Naturopathy",
    subtitle: "Natural Approaches to Wellbeing",
    description:
      "Highland's naturopathy services combine traditional healing principles with modern knowledge to support holistic wellbeing through personalized consultations, dietary guidance, herbal remedies, hydrotherapy and lifestyle counselling.",
    highlights: [
      "Personalized Consultation",
      "Dietary Guidance",
      "Hydrotherapy & Lifestyle Care",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/112-1536x1024.jpg",
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    subtitle: "Traditional Meridian-Based Care",
    description:
      "Acupuncture at Highland Hotel is provided by practitioners using fine needles at selected points along the body's meridian pathways. The practice is presented as part of the hotel's broader holistic wellness offering.",
    highlights: [
      "Practitioner-Led Sessions",
      "Meridian-Based Practice",
      "Holistic Wellness Support",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/109-1536x1024.jpg",
  },
];

export default function Wellness() {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];

  return (
    <section className="relative w-full bg-[#f4f1ea] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Calm Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">

          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />

              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone-500 font-medium">
                Ayurveda &amp; Wellness
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15]">
              Restore. Rebalance. Reconnect.
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Discover Highland Hotel's holistic wellness offerings through
            Ayurveda, Yoga, Naturopathy and Acupuncture.
          </p>
        </div>

        {/* Four Core Pillars Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">

          {pillars.map((pillar, index) => {
            const isActive = index === activeTab;

            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-6 rounded-md text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-white border-stone-300 shadow-sm"
                    : "bg-[#ece7dc] border-transparent hover:bg-white/60 text-stone-600"
                }`}
              >
                <span
                  className={`block font-sans text-[10px] tracking-[0.25em] uppercase mb-1 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-stone-400"
                  }`}
                >
                  0{index + 1}
                </span>

                <span
                  className={`font-serif text-lg sm:text-xl block ${
                    isActive
                      ? "text-stone-900 font-medium"
                      : "text-stone-700"
                  }`}
                >
                  {pillar.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Immersive Visual Showcase & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Large Immersive Photography with Crossfade */}
          <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[520px] rounded-lg overflow-hidden border border-stone-300/80 shadow-lg bg-stone-200">

            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === activeTab
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <Image
                  src={pillar.image}
                  alt={`${pillar.title} wellness experience at Highland Hotel`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">

                  <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-orange-200 block mb-1">
                    Wellness Experience
                  </span>

                  <p className="font-serif text-2xl font-light">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Calming Narrative Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-12 rounded-lg border border-stone-200/90 shadow-sm flex flex-col justify-between">

            <div>

              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-orange-600 font-semibold mb-3 block">
                Holistic Wellness
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug mb-5">
                {activePillar.title} — {activePillar.subtitle}
              </h3>

              <p className="font-sans text-stone-600 text-sm sm:text-[15px] font-light leading-relaxed mb-8">
                {activePillar.description}
              </p>

              {/* Wellness Highlights */}
              <div className="space-y-3 pt-6 border-t border-stone-100">

                <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 font-medium">
                  Wellness Focus
                </p>

                <ul className="space-y-2">

                  {activePillar.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 font-sans text-xs text-stone-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />

                      <span>{item}</span>
                    </li>
                  ))}

                </ul>
              </div>
            </div>

            {/* Orange CTA */}
            <div className="pt-10 border-t border-stone-100 flex items-center justify-between gap-5">

              <span className="font-sans text-xs text-stone-500 leading-relaxed">
                Consult our wellness practitioners
              </span>

              <Link
                href="/ayurveda"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3.5 rounded shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span>Explore Wellness</span>

                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}