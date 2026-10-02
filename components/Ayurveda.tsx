"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Check, HeartPulse } from "lucide-react";

interface WellnessPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tag: string;
}

const pillars: WellnessPillar[] = [
  {
    id: "ayurveda",
    number: "01",
    title: "Ayurveda",
    subtitle: "Dosha Balance & Herbal Rejuvenation",
    description:
      "Traditional practitioner consultations and therapeutic Panchakarma treatments using hand-pressed herbal oils and bespoke dietary balancing.",
    highlights: ["Abhyanga & Shirodhara", "Dosha Assessment", "Herbal Steam"],
    image: "/ayurveda.webp",
    tag: "Core Heritage",
  },
  {
    id: "yoga",
    number: "02",
    title: "Yoga & Breath",
    subtitle: "Pranayama & Meditative Stillness",
    description:
      "Classical movement sessions guiding vitality through morning asanas, nervous-system calming breathwork, and mindful meditation.",
    highlights: ["Sunrise Flow", "Pranayama Alignment", "Guided Dhyana"],
    image: "/yoga.webp",
    tag: "Mind & Spirit",
  },
  {
    id: "naturopathy",
    number: "03",
    title: "Naturopathy",
    subtitle: "The Healing Intelligence of Nature",
    description:
      "Non-invasive holistic treatments activating self-healing through targeted hydrotherapy, detoxifying clay packs, and pure botanical nutrition.",
    highlights: ["Therapeutic Hydrotherapy", "Clay Packs", "Nutritional Therapy"],
    image: "/naturapathy.webp",
    tag: "Natural Vitality",
  },
  {
    id: "acupuncture",
    number: "04",
    title: "Acupuncture",
    subtitle: "Meridian Flow & Qi Energy",
    description:
      "Gentle micro-point stimulation along classical energy meridians to relieve chronic muscular tension, reduce stress, and restore energetic balance.",
    highlights: ["Classical Meridian Mapping", "Tension Relief", "Qi Circulation"],
    image: "/acupunture.webp",
    tag: "Restorative Flow",
  },
];

export default function Wellness() {
  const [activePillarId, setActivePillarId] = useState<string>("ayurveda");
  const selectedPillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <section className="relative w-full max-w-full bg-[#FAF7F0] text-[#1B1917] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 border-t border-[#E5E0D5] overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E0D8CB] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8C6D3B] font-semibold">
                Sanctuary of Healing &bull; KEVA Ayurveda
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1B1917] font-normal tracking-tight leading-[1.12]">
              Restore. Rebalance. Reconnect.
            </h2>
          </div>

          <p className="font-sans text-stone-600 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Four ancient pathways of restorative care, guided by certified wellness doctors to return your body and mind to natural equilibrium.
          </p>
        </div>

        {/* 4 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {pillars.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 shadow-sm ${
                  isSelected
                    ? "ring-2 ring-[#8C6D3B] ring-offset-2 ring-offset-[#FAF7F0] border-transparent shadow-xl scale-[1.01]"
                    : "border-[#DDD4C4] opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient Scrim */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 transition-opacity duration-300 ${
                  isSelected ? "opacity-90" : "opacity-70 group-hover:opacity-85"
                }`} />

                {/* Top Pillar Number & Category */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 text-stone-200">
                    {pillar.tag}
                  </span>
                </div>

                {/* Bottom Title & State */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                
                  <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Active Indicator Bar */}
                  <div className={`mt-3 h-[2px] transition-all duration-500 ${
                    isSelected ? "w-full bg-[#C89B53]" : "w-6 bg-white/40 group-hover:w-12 group-hover:bg-white"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Dossier Strip */}
        <div className="bg-white rounded-2xl border border-[#DDD4C4] p-6 sm:p-10 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold">
                  
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal mb-3">
                  {selectedPillar.title}  -  <span className="italic text-stone-500 font-light">{selectedPillar.subtitle}</span>
                </h3>

                <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-3xl mb-6">
                  {selectedPillar.description}
                </p>

                {/* Highlights Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {selectedPillar.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#FAF7F0] border border-[#E5E0D5] px-3.5 py-1.5 rounded-full text-xs font-sans text-stone-800"
                    >
                      <Check className="w-3.5 h-3.5 text-[#8C6D3B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="lg:col-span-4 lg:border-l border-stone-200 lg:pl-8 flex flex-col justify-center gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
                    Practitioner Consultation
                  </span>
                  <p className="font-serif text-base text-stone-900">
                    Bespoke Sessions on Request
                  </p>
                </div>

                <Link
                  href="/ayurveda"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B1917] hover:bg-stone-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-medium px-6 py-3.5 rounded-md transition-all shadow-sm active:scale-95 cursor-pointer text-center"
                >
                  <span>Explore Therapies</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}