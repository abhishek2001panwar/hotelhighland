"use client";

import { useState, useEffect, useRef } from "react";
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
    subtitle: "Traditional Balance & Rejuvenation",
    description:
      "Personalized holistic consultations and centuries-old Ayurvedic therapies designed around individual body constitutions (Doshas). Treatments incorporate warm herbal oils, restorative Panchakarma detox, and mindful dietary harmony.",
    highlights: [
      "Customized Dosha Assessment",
      "Traditional Abhyanga & Shirodhara",
      "Herbal & Dietary Regimens",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/20-1536x1024.jpg",
  },
  {
    id: "yoga",
    title: "Yoga & Breath",
    subtitle: "Movement, Pranayama & Stillness",
    description:
      "Our yoga sanctuary brings together authentic classical disciplines—asanas for vitality, pranayama breathwork for mental clarity, and guided dhyana meditation to anchor serene balance throughout your stay.",
    highlights: [
      "Sunrise & Sunset Asana Flows",
      "Pranayama Breath Alignment",
      "Guided Dhyana Meditation",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/107-1536x1024.jpg",
  },
  {
    id: "naturopathy",
    title: "Naturopathy",
    subtitle: "The Healing Intelligence of Nature",
    description:
      "Rooted in non-invasive natural medicine, our naturopathy therapies empower the body's innate self-healing capabilities through botanical infusions, therapeutic hydrotherapy, clay packs, and lifestyle alignment.",
    highlights: [
      "Personalized Lifestyle Guidance",
      "Therapeutic Hydrotherapy",
      "Whole-Food Nutritional Therapy",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/112-1536x1024.jpg",
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    subtitle: "Meridian Flow & Vital Energy",
    description:
      "Practitioner-led acupuncture sessions gently stimulate classical meridian pathways with hair-thin needles, relieving deep muscular tension, restoring vital Qi circulation, and promoting cellular harmony.",
    highlights: [
      "Practitioner-Led Consultations",
      "Classical Meridian Mapping",
      "Holistic Stress & Pain Relief",
    ],
    image:
      "https://highlandhotel.in/wp-content/uploads/2024/09/109-1536x1024.jpg",
  },
];

export default function Wellness() {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activePillar = pillars[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f4f1ea] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-stone-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Clean Header */}
        <div
          className={`max-w-3xl mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-500 font-medium">
              Sanctuary of Healing
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.12] mb-5">
            Restore. Rebalance. Reconnect.
          </h2>

          <p className="font-sans text-stone-600 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            Four ancient pathways of restorative care, tailored by certified practitioners to return you to natural equilibrium.
          </p>
        </div>

        {/* Minimalist Floating Tabs (No Box Borders) */}
        <div
          className={`flex items-center gap-8 sm:gap-12 overflow-x-auto pb-4 mb-14 border-b border-stone-300/60 no-scrollbar transition-all duration-1000 delay-150 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {pillars.map((pillar, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className="relative pb-3 flex items-baseline gap-3 shrink-0 cursor-pointer group focus:outline-none"
              >
               

                <span
                  className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${
                    isActive ? "text-stone-900 font-normal" : "text-stone-500 group-hover:text-stone-800"
                  }`}
                >
                  {pillar.title}
                </span>

                {/* Animated Minimal Line Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-600 animate-in fade-in zoom-in-50 duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Open Asymmetric Canvas (No Nested Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Soft Organic Arch Frame */}
          <div
            className={`lg:col-span-6 relative aspect-[4/5] max-h-[580px] w-full rounded-t-[7rem] sm:rounded-t-[9rem] rounded-b-2xl overflow-hidden shadow-2xl shadow-stone-900/10 transition-all duration-1000 delay-200 ease-out ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {pillars.map((pillar, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  key={pillar.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    quality={95}
                    priority={index === 0}
                    className={`object-cover object-center transition-transform duration-[8000ms] ease-out will-change-transform ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-8 left-8 text-white z-20">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-orange-300 block mb-1">
                      Pillar 0{index + 1}
                    </span>
                    <p className="font-serif text-2xl font-light">
                      {pillar.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Free-Flowing Editorial Story (Zero Boxes) */}
          <div
            key={activePillar.id}
            className="lg:col-span-6 flex flex-col justify-between py-2 text-left animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-600 font-semibold block mb-2">
                {activePillar.subtitle}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-[1.18] mb-6">
                Holistic equilibrium crafted around you.
              </h3>

              <p className="font-sans text-stone-600 text-sm sm:text-[15px] font-light leading-relaxed mb-10">
                {activePillar.description}
              </p>

              {/* Minimal Line-Drawn Highlights */}
              <div className="space-y-4 pt-6 border-t border-stone-300/70">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-stone-400 block mb-2">
                  Session Highlights
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activePillar.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 font-sans text-xs text-stone-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editorial Action Link (Underline style instead of blocky button) */}
            <div className="pt-12 mt-6 flex items-center justify-between border-t border-stone-300/70">
              <span className="font-sans text-xs text-stone-500">
                Consult with our certified practitioners
              </span>

              <Link
                href="/ayurveda"
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 border-b border-stone-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
              >
                <span>Explore Therapies</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}