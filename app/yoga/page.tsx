"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  ArrowUpRight,
  Leaf,
  Sun,
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg =
  "https://highlandhotel.in/wp-content/uploads/2025/05/Untitled-design-2025-05-29T143913.542.png";

const naturopathyImg =
  "https://highlandhotel.in/wp-content/uploads/2024/05/2-2.png";

const yogaImg =
  "https://highlandhotel.in/wp-content/uploads/2024/05/2-3.png";

const servicesList = [
  "Personalized Naturopathic Consultations",
  "Therapeutic Hydrotherapy & Steam",
  "Classical Hatha & Ashtanga Yoga",
  "Pranayama & Breath Architecture",
  "Targeted Meridian Acupuncture",
  "Herbal Nutritional Counseling",
  "Lifestyle & Stress Rehabilitation",
  "Holistic Detoxification Programs",
];

const allTestimonials = [
  {
    quote: "Excellent experience at the Centre.",
    author: "Dinesh Shetty",
    location: "Bangalore",
  },
  {
    quote: "Total team work is 100%.",
    author: "B.S. Mahadeva",
    location: "Karnataka",
  },
  {
    quote: "It was excellent, the therapists were very good and gentle. Keep going.",
    author: "Pooja",
    location: "Germany",
  },
  {
    quote:
      "It was great experience with Therapist. Good pressure and complete pain cure and relaxing. Great steam temperature an especially bathroom cleanliness and ambience of the whole set up loved it. Nice satisfied, will see you again.",
    author: "Chandan A.R",
    location: "India",
  },
  {
    quote: "Both the therapists did a great job, excellent treatment and the setup.",
    author: "S.P Singh",
    location: "India",
  },
  {
    quote: "Was very nice treatment, thank you.",
    author: "Jankrell",
    location: "U.S",
  },
  {
    quote: "It was excellent; team was supportive , and humble, good work.",
    author: "Vyshaka",
    location: "Bangalore",
  },
  {
    quote:
      "I was there in Highland Hotel for 4 days and happened to visit the KEVA Ayurveda Clinic in the hotel Premises. I also took the Consultation from the Doctors and the treatment prescribed was good. The therapists did a wonderful Job. They were skilled with their techniques and the equipment and the ambience is great. Felt completely relaxed after the therapy.",
    author: "Shine T. S",
    location: "Kerala",
  },
  {
    quote:
      "I happened to know about the Ayurveda Clinic in Highland Hotel through Friends, and visited there for a Deep tissue massage. The therapy was carried out well with experienced therapists. I felt great after the Massage.",
    author: "Rakesh",
    location: "Bangalore",
  },
  {
    quote:
      "I stayed in Highland Hotel as part of a wedding ceremony, I was informed about the KEVA Ayurveda Yoga Naturopathy Clinic in the Hotel Premises, and I took Doctor’s Consultation for my health issues, I was pleased with their information and patience. I took 3 days of therapy at the Clinic. The ambience of the complete Hotel and the clinic was great and the therapists were Excellent.",
    author: "Hammarsingh",
    location: "Nagaland",
  },
  {
    quote:
      "It was a great treatment for the day; therapist was professional and helped me a lot.",
    author: "John Joseph",
    location: "Bangalore",
  },
  {
    quote:
      "It was a great massage from the team, I really enjoyed it; my body gets calm and feeling very light after the treatment.",
    author: "Akash",
    location: "Bangalore",
  },
  {
    quote: "Really good treatment, super effective, will come back again.",
    author: "Aravind K.R",
    location: "Bangalore",
  },
  {
    quote:
      "Very experienced therapists and I had an excellent experience and I will highly recommend to my friends and family. Very good job by the team; Keep it up.",
    author: "Girish",
    location: "Germany",
  },
];

export default function YogaNaturopathyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const maxPages = Math.ceil(allTestimonials.length / 3);

  const scrollToIndex = (pageIndex: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetElement = container.children[pageIndex * 3] as HTMLElement;
    if (targetElement) {
      container.scrollTo({
        left: targetElement.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveSlide(pageIndex);
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth;
    const newPage = Math.round(scrollLeft / slideWidth);
    if (newPage !== activeSlide && newPage >= 0 && newPage < maxPages) {
      setActiveSlide(newPage);
    }
  };

  const handleNext = () => {
    const next = (activeSlide + 1) % maxPages;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const prev = (activeSlide - 1 + maxPages) % maxPages;
    scrollToIndex(prev);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden">
      {/* =========================================================
          01 - PARALLAX HERO
      ========================================================== */}
      <Navbar />

      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[600px] max-h-[900px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-x-0 -top-[12%] h-[126%] w-full will-change-transform pointer-events-none"
        >
          <Image
            src={heroBg}
            alt="Yoga, Naturopathy and Acupuncture at Highland Hotel"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
          
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-white/80 font-medium">
              Holistic Nature Care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal leading-[1.05] tracking-[-0.03em] drop-shadow-md">
                Yoga, Naturopathy <br />
                <span className="italic font-light text-stone-200">
                  &amp; Acupuncture
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-stone-200 font-light leading-relaxed">
                &ldquo;Cultivating strength, balance, and the innate power to heal.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-200">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <span>Appointment:</span>
                <a
                  href="tel:+919035034425"
                  className="text-white hover:text-stone-300 transition-colors font-medium"
                >
                  +91-9035034425
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <a
                  href="mailto:kevahesarghatta@kevaayurveda.com"
                  className="text-white hover:text-stone-300 transition-colors font-medium"
                >
                  kevahesarghatta@kevaayurveda.com
                </a>
              </div>
            </div>

            <a
              href="tel:+919035034425"
              className="inline-flex items-center gap-2 bg-white text-[#1B1917] hover:bg-stone-100 px-6 py-2.5 rounded-sm font-sans text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-sm"
            >
              <span>Get an Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - NATUROPATHY (PRESERVES TRUE IMAGE RATIO)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative w-full rounded-lg overflow-hidden bg-[#F2EDE4] border border-[#E5E0D5] p-3 shadow-xs">
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
              <Image
                src={naturopathyImg}
                alt="Naturopathy treatments at Highland Hotel"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#7A6E58]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-medium">
                Innate Healing
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
              Naturopathy
            </h2>

            <p className="font-sans text-[#1B1917]/80 text-sm sm:text-base font-light leading-relaxed">
              Highland Hotel embraces the principles of naturopathic medicine, offering guests a natural and holistic approach to health and well-being. Our team of naturopathic practitioners combines modern scientific knowledge with traditional healing wisdom to address a wide range of health concerns and promote optimal wellness.
            </p>

            <p className="font-sans text-[#1B1917]/70 text-sm sm:text-base font-light leading-relaxed">
              Through personalized consultations, dietary guidance, herbal remedies, hydrotherapy, and lifestyle counseling, we empower individuals to take charge of their health and harness the body’s innate ability to heal itself.
            </p>

            <p className="font-sans text-[#1B1917]/70 text-sm sm:text-base font-light leading-relaxed">
              Whether you’re seeking relief from chronic conditions, striving to boost your immune system, or simply aiming to enhance your overall vitality, our naturopathic services provide a supportive environment for holistic healing and holistic transformation.
            </p>

            <div className="pt-4 border-t border-[#E5E0D5] flex items-center gap-6 font-sans text-[11px] uppercase tracking-wider text-[#1B1917]/50">
              <span>Hydrotherapy</span>
              <span>&bull;</span>
              <span>Dietary Guidance</span>
              <span>&bull;</span>
              <span>Vitality Boost</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - YOGA (PRESERVES TRUE IMAGE RATIO)
      ========================================================== */}
      <section className="bg-[#F7F4EE] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-[#E8E2D6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative w-full rounded-lg overflow-hidden bg-[#EFE9DD] border border-[#E0D9CB] p-3 shadow-xs">
              <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                <Image
                  src={yogaImg}
                  alt="Yoga sessions at Highland Hotel"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#7A6E58]" />
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-medium">
                  Mind &bull; Body &bull; Soul
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.12]">
                Yoga
              </h2>

              <p className="font-sans text-[#1B1917]/80 text-sm sm:text-base font-light leading-relaxed">
                Elevate your wellness journey at Highland Hotel with our comprehensive yoga program designed to nurture body, mind, and soul. Led by certified instructors in serene studio spaces or amidst the tranquil beauty of nature, our yoga sessions cater to practitioners of all levels, from beginners to advanced yogis.
              </p>

              <p className="font-sans text-[#1B1917]/70 text-sm sm:text-base font-light leading-relaxed">
                Experience the transformative power of asanas, pranayama, and meditation as you cultivate strength, flexibility, and inner peace.
              </p>

              <p className="font-sans text-[#1B1917]/70 text-sm sm:text-base font-light leading-relaxed">
                Whether you’re seeking to enhance your physical fitness, alleviate stress, or embark on a spiritual quest, our diverse array of yoga classes and workshops offer a sanctuary for self-discovery and personal growth.
              </p>

              <div className="pt-4 border-t border-[#E0D9CB] flex items-center gap-6 font-sans text-[11px] uppercase tracking-wider text-[#1B1917]/50">
                <span>Asanas &amp; Alignment</span>
                <span>&bull;</span>
                <span>Pranayama</span>
                <span>&bull;</span>
                <span>Inner Peace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - TESTIMONIALS SLIDER (WARM PARCHMENT BG & AMBER STARS)
      ========================================================== */}
      <section className="bg-[#f2eee5] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-stone-300/70 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C7A5B] block mb-2 font-medium">
                Guest Reflections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal">
                Our Testimonials
              </h2>
              <p className="font-sans text-stone-600 text-sm font-light mt-2 max-w-xl">
                Real reflections from guests who experienced holistic recovery, therapies, and care at our wellness center.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                className="w-10 h-10 rounded-full border border-stone-300/90 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonials"
                className="w-10 h-10 rounded-full border border-stone-300/90 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 items-stretch"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-start w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white p-7 sm:p-8 rounded-2xl border border-stone-300/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C49A45] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-stone-300 mb-3" />

                  <p className="font-serif text-base text-stone-800 font-normal leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <p className="font-sans text-xs uppercase tracking-wider text-stone-900 font-semibold">
                    {t.author}
                  </p>
                  <p className="font-mono text-[10px] text-stone-400">
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => scrollToIndex(pageIdx)}
                aria-label={`Go to slide ${pageIdx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  activeSlide === pageIdx
                    ? "w-8 h-2 bg-[#8C7A5B]"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          05 - SERVICES GRID
      ========================================================== */}
      <section className="bg-[#F7F4EE] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-[#E8E2D6]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
              Comprehensive Care
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal">
              Services
            </h2>
            <p className="font-sans text-[#1B1917]/70 text-sm font-light mt-2">
              Holistic therapies combining ancient Indian sciences with naturopathic restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-[#FDFBF7] p-5 rounded border border-[#E5E0D5] shadow-2xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#7A6E58] shrink-0 mt-0.5" />
                <span className="font-serif text-base text-[#1B1917] font-normal leading-snug">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 - LIGHT PARCHMENT CONTACT & FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
                Connect &bull; Wellness Desk
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal mb-3">
                Contact Info
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                Connect with our certified Ayurvedic, Naturopathy, and Yoga practitioners for consultations, appointment scheduling, and retreat stays.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#1B1917]/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Telephone</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  <a href="tel:+919035034425" className="hover:underline">
                    +91-9035034425
                  </a>
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  Prior appointment recommended for clinical consultations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#1B1917] font-sans uppercase tracking-widest text-[11px] font-semibold">
                  <Mail className="w-3.5 h-3.5 text-[#7A6E58]" />
                  <span>Email</span>
                </div>
                <p className="text-[#1B1917] text-sm font-medium">
                  <a
                    href="mailto:kevahesarghatta@kevaayurveda.com"
                    className="hover:underline"
                  >
                    kevahesarghatta@kevaayurveda.com
                  </a>
                </p>
                <p className="text-[11px] text-[#1B1917]/60 font-light">
                  Direct inquiries to our specialized wellness clinic team.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/60">
            <p>Highland Hotel &bull; KEVA Ayurveda, Yoga &amp; Naturopathy</p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919035034425"
                className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-6 py-2.5 rounded-sm uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
              >
                Get an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}