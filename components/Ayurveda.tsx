"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

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

const appleEase = [0.16, 1, 0.3, 1] as const;

export default function Wellness() {
  const [activePillarId, setActivePillarId] = useState<string>("ayurveda");
  const selectedPillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <section className="relative w-full max-w-full bg-[#FDFBF7] text-[#3A2D21] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 border-t border-[#E5E0D5] overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: appleEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#DDD4C4] gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
             
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#A1611D] font-bold">
                Sanctuary of Healing &bull; KEVA Ayurveda
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3A2D21] font-semibold tracking-tight leading-[1.12]">
              Restore. Rebalance. Reconnect.
            </h2>
          </div>

          <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-normal max-w-md leading-relaxed">
            <strong className="font-bold text-[#3A2D21]">Four ancient pathways of restorative care</strong>, guided by{" "}
            <strong className="font-bold text-[#3A2D21]">certified wellness doctors</strong> to return your body and mind to natural equilibrium.
          </p>
        </motion.div>

        {/* ================= 4 INTERACTIVE PILLARS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {pillars.map((pillar, idx) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: appleEase,
                }}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 shadow-sm ${
                  isSelected
                    ? "ring-2 ring-[#A1611D] ring-offset-2 ring-offset-[#FDFBF7] border-transparent shadow-xl scale-[1.01]"
                    : "border-[#DDD4C4] opacity-85 hover:opacity-100"
                }`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Warm Espresso Bronze Scrim (Zero Black) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#3A2D21]/85 via-[#3A2D21]/25 to-[#3A2D21]/15 transition-opacity duration-300 ${
                    isSelected ? "opacity-90" : "opacity-75 group-hover:opacity-85"
                  }`}
                />

                {/* Top Category Pill (Warm Bronze Glass, Zero Black) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-end text-[#FDFBF7] z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest bg-[#3A2D21]/55 backdrop-blur-md px-3 py-1 rounded-full border border-[#FDFBF7]/20 text-[#F4EFE6]">
                    {pillar.tag}
                  </span>
                </div>

                {/* Bottom Title & Active Gold Bar */}
                <div className="absolute bottom-5 left-5 right-5 text-[#FDFBF7] z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug drop-shadow-xs">
                    {pillar.title}
                  </h3>

                  <div
                    className={`mt-3 h-[2px] transition-all duration-500 ${
                      isSelected
                        ? "w-full bg-[#E5C99B]"
                        : "w-6 bg-[#FDFBF7]/45 group-hover:w-12 group-hover:bg-[#FDFBF7]"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SELECTED PILLAR DOSSIER STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: appleEase }}
          className="bg-[#F4EFE6] rounded-2xl border border-[#DDD4C4] p-6 sm:p-10 shadow-2xs"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: appleEase }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold mb-3">
                  {selectedPillar.title} &mdash;{" "}
                  <span className="italic text-[#A1611D] font-semibold">
                    {selectedPillar.subtitle}
                  </span>
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium leading-relaxed max-w-3xl mb-6">
                  {selectedPillar.description}
                </p>

                {/* Bold Therapy Highlights Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {selectedPillar.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#FDFBF7] border border-[#DDD4C4] px-4 py-2 rounded-full text-xs font-sans font-bold text-[#3A2D21] shadow-2xs"
                    >
                      <Check className="w-3.5 h-3.5 text-[#A1611D] stroke-[2.5] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA (Brushed Antique Gold Button) */}
              <div className="lg:col-span-4 lg:border-l border-[#DDD4C4] lg:pl-8 flex flex-col justify-center gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1611D] font-bold block mb-1">
                    Practitioner Consultation
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#3A2D21]">
                    Bespoke Sessions on Request
                  </p>
                </div>

                <Link
                  href="/ayurveda"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A1611D] hover:bg-[#73582D] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold px-6 py-3.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer text-center"
                >
                  <span>Explore Therapies</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}