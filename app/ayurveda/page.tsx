"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  ArrowUpRight,
  Flower2,
  Activity,
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg =
  "/ayurveda/hero.webp";

const traditionImg =
  "/ayurveda/1.webp";

const acupunctureImg =
  "/ayurveda/2.webp";

const doctorCards = [
  "/ayurveda/3.webp",
  "/ayurveda/4.webp",
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

export default function AyurvedaPage() {
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
    <main className="min-h-screen bg-[#f8f7f4] text-[#1b1916] antialiased selection:bg-orange-500/20 selection:text-orange-950 overflow-x-hidden">
      {/* =========================================================
          01 - PARALLAX HERO
      ========================================================== */}
      <Navbar />
      <section
        ref={heroRef}
        className="relative w-full h-[90svh] min-h-[620px] max-h-[920px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-x-0 -top-[12%] h-[126%] w-full will-change-transform pointer-events-none"
        >
          <Image
            src={heroBg}
            alt="Ayurveda at Highland Hotel"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
           
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-orange-300 font-medium">
              The Best Place For Nature Care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.04] tracking-[-0.035em] drop-shadow-md">
                Ayurveda <br />
                <span className="italic font-light text-stone-200">
                  &amp; Holistic Wellness
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-stone-200 font-light leading-relaxed">
                &ldquo;Restoring harmony across body, mind, and spirit.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-300">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Appointment:</span>
                <a
                  href="tel:+919035034425"
                  className="text-white hover:text-orange-300 transition-colors font-medium"
                >
                  +91-9035034425
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a
                  href="mailto:kevahesarghatta@kevaayurveda.com"
                  className="text-white hover:text-orange-300 transition-colors font-medium"
                >
                  kevahesarghatta@kevaayurveda.com
                </a>
              </div>
            </div>

            <a
              href="tel:+919035034425"
              className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-md font-sans text-[10px] uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - AYURVEDIC TRADITIONS
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-orange-600" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 font-medium">
                Vedic Equilibrium
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal leading-[1.12]">
              Ayurvedic Traditions
            </h2>

            <p className="font-sans text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              At Highland Hotel, immerse yourself in the ancient healing
              practices of Ayurveda, a holistic system aimed at restoring
              balance and harmony within the body, mind, and spirit.
            </p>

            <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Our Ayurvedic services offer personalized consultations with
              experienced practitioners who tailor treatments to your unique
              constitution, addressing imbalances through a combination of
              herbal remedies, dietary adjustments, and therapeutic treatments
              such as massage, detoxification, and meditation.
            </p>

            <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Whether you seek relief from physical ailments, stress reduction,
              or a deeper connection to your inner self, our Ayurvedic offerings
              provide a pathway to holistic wellness and rejuvenation.
            </p>

            <div className="pt-4 border-t border-stone-300/70 flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-stone-500">
              <span>Personalized Dosha Analysis</span>
              <span>&bull;</span>
              <span>Herbal Detox</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-xl">
            <Image
              src={traditionImg}
              alt="Ayurvedic traditions and healing therapies"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - ACUPUNCTURE
      ========================================================== */}
      <section className="bg-[#f2eee5] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-stone-300/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-xl order-2 lg:order-1">
              <Image
                src={acupunctureImg}
                alt="Acupuncture therapy at Highland"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-600" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 font-medium">
                  Meridian Therapy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal leading-[1.12]">
                Acupuncture
              </h2>

              <p className="font-sans text-stone-700 text-sm sm:text-base font-light leading-relaxed">
                Discover the ancient art of acupuncture at Highland Hotel, where
                skilled practitioners use fine needles to stimulate key points on
                the body’s meridian pathways, restoring balance and promoting
                the free flow of vital energy, or Qi.
              </p>

              <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Drawing upon centuries-old Chinese medicine traditions,
                acupuncture offers a safe and effective treatment for a wide
                range of physical, emotional, and psychological ailments, from
                chronic pain and inflammation to stress, anxiety, and insomnia.
              </p>

              <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Whether you’re seeking pain relief, stress reduction, or support
                for your overall health and well-being, our acupuncture sessions
                provide a gentle and natural approach to healing, helping you to
                reconnect with your body’s innate healing intelligence and achieve
                a state of optimal wellness.
              </p>

              <div className="pt-4 border-t border-stone-300/70 flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-stone-500">
                <span>Qi Flow Activation</span>
                <span>&bull;</span>
                <span>Pain &amp; Stress Relief</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - OUR AYURVEDA DOCTOR PROFILES (IMAGE ONLY CARDS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
            Clinical Care &bull; Resident Practitioners
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal leading-[1.12]">
            Our Ayurveda Doctor Profiles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {doctorCards.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden border border-stone-300/80 shadow-md bg-white group hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Ayurveda Doctor Profile ${idx + 1}`}
                width={1200}
                height={1600}
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain object-center block"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 - TESTIMONIALS CAROUSEL (3 PER VIEW WITH DOTS & ARROWS)
      ========================================================== */}
      <section className="bg-[#f2eee5] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-stone-300/70 select-none">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Arrow Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 block mb-2 font-medium">
                Guest Reflections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal">
                Our Testimonials
              </h2>
              <p className="font-sans text-stone-600 text-sm font-light mt-2 max-w-xl">
                Genuine healing journeys, reviews, and clinical experiences
                shared by our wellness retreat guests.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                className="w-10 h-10 rounded-full border border-stone-300/90 bg-white/80 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonials"
                className="w-10 h-10 rounded-full border border-stone-300/90 bg-white/80 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>

          {/* 3-in-One Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
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
                  <div className="flex items-center gap-1 text-orange-600 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-stone-300 mb-2.5" />

                  <p className="font-serif text-base text-stone-800 font-normal leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
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

          {/* Pagination Dots at Bottom */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: maxPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => scrollToIndex(pageIdx)}
                aria-label={`Go to slide ${pageIdx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  activeSlide === pageIdx
                    ? "w-8 h-2 bg-orange-600"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

 {/* =========================================================
          06 - DIRECT ENQUIRY FOOTER STRIP (LIGHT PARCHMENT)
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] font-semibold block mb-2">
              Plan Your Healing Retreat
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1B1917] font-normal mb-3">
              Book Your Ayurvedic Consultation
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#1B1917]/75 font-sans text-xs sm:text-sm">
              <a
                href="tel:+919035034425"
                className="hover:text-[#1B1917] font-medium transition-colors"
              >
                T: +91-9035034425
              </a>
              <span className="text-[#7A6E58]">&bull;</span>
              <a
                href="mailto:kevahesarghatta@kevaayurveda.com"
                className="hover:text-[#1B1917] hover:underline transition-colors"
              >
                kevahesarghatta@kevaayurveda.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="tel:+919035034425"
              className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-7 py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs active:scale-95"
            >
              Get an Appointment
            </a>
            <Link
              href="/rooms"
              className="bg-white border border-[#D8D0C0] hover:border-[#1B1917] text-[#1B1917] px-7 py-3.5 rounded-xs font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-2xs hover:bg-[#FAF7F0]"
            >
              Stay at Highland
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}