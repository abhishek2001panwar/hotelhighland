"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
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

const heroBg = "/ayurveda/hero.webp";
const traditionImg = "/ayurveda/1.webp";
const acupunctureImg = "/ayurveda/2.webp";

const doctorCards = ["/ayurveda/3.webp", "/ayurveda/4.webp"];

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
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden">
      {/* =========================================================
          01 - PARALLAX HERO (ZERO BLACK / RED, BOLD ENQUIRIES, #A1611D CTA)
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

        {/* Warm Espresso Bronze Scrims (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.42) 45%, rgba(44, 34, 24, 0.2) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 text-[#FDFBF7]"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-[1.5px] bg-[#E5C99B]" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
              KEVA Ayurveda &bull; The Best Place For Nature Care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.04] tracking-wide drop-shadow-sm">
                Ayurveda <br />
                <span className="italic font-light text-[#F4EFE6]">
                  &amp; Holistic Wellness
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-[#F4EFE6] font-semibold leading-relaxed tracking-wide">
                &ldquo;Restoring harmony across body, mind, and spirit.&rdquo;
              </p>
            </div>
          </div>

          {/* Bold Appointment Contact & #A1611D Button */}
          <div className="mt-10 pt-6 border-t border-[#FDFBF7]/20 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-[#F4EFE6]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-bold tracking-wide">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5C99B] shrink-0" />
                <span className="text-[#E5C99B]">Appointment:</span>
                <a
                  href="tel:+919035034425"
                  className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors"
                >
                  +91-9035034425
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5C99B] shrink-0" />
                <a
                  href="mailto:kevahesarghatta@kevaayurveda.com"
                  className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors"
                >
                  kevahesarghatta@kevaayurveda.com
                </a>
              </div>
            </div>

            <a
              href="tel:+919035034425"
              className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-md active:scale-95"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - AYURVEDIC TRADITIONS (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Vedic Equilibrium
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Ayurvedic Traditions
            </h2>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              At Highland Hotel, immerse yourself in the{" "}
              <strong className="font-bold text-[#3A2D21]">
                ancient healing practices of Ayurveda
              </strong>
              , a holistic system aimed at restoring balance and harmony within the body, mind, and spirit.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Our Ayurvedic services offer{" "}
              <strong className="font-bold text-[#3A2D21]">
                personalized consultations with experienced practitioners
              </strong>{" "}
              who tailor treatments to your unique constitution, addressing imbalances through a combination of{" "}
              <strong className="font-bold text-[#3A2D21]">
                herbal remedies, dietary adjustments, and therapeutic treatments
              </strong>{" "}
              such as massage, detoxification, and meditation.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Whether you seek relief from physical ailments, stress reduction, or a deeper connection to your inner self, our Ayurvedic offerings provide a pathway to{" "}
              <strong className="font-bold text-[#3A2D21]">
                holistic wellness and rejuvenation
              </strong>
              .
            </p>

            <div className="pt-4 border-t border-[#DDD4C4] flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#A1611D]">
              <span>Personalized Dosha Analysis</span>
              <span>&bull;</span>
              <span>Herbal Detox &amp; Steam</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#EAE1D0] border border-[#DDD4C4] shadow-xl">
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
          03 - ACUPUNCTURE (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#EAE1D0] border border-[#DDD4C4] shadow-xl order-2 lg:order-1">
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
                <Activity className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                  Meridian Therapy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
                Acupuncture
              </h2>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Discover the{" "}
                <strong className="font-bold text-[#3A2D21]">
                  ancient art of acupuncture
                </strong>{" "}
                at Highland Hotel, where skilled practitioners use fine needles to stimulate key points on the body’s meridian pathways, restoring balance and promoting the free flow of vital energy, or Qi.
              </p>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Drawing upon centuries-old traditions, acupuncture offers a{" "}
                <strong className="font-bold text-[#3A2D21]">
                  safe and effective treatment
                </strong>{" "}
                for a wide range of physical, emotional, and psychological ailments, from{" "}
                <strong className="font-bold text-[#3A2D21]">
                  chronic pain and inflammation to stress, anxiety, and insomnia
                </strong>
                .
              </p>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Whether you’re seeking pain relief, stress reduction, or support for your overall health and well-being, our acupuncture sessions provide a gentle and natural approach to healing.
              </p>

              <div className="pt-4 border-t border-[#DDD4C4] flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#A1611D]">
                <span>Qi Flow Activation</span>
                <span>&bull;</span>
                <span>Pain &amp; Stress Relief</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - OUR AYURVEDA DOCTOR PROFILES
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
            Clinical Care &bull; Resident Practitioners
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
            Our Ayurveda Doctor Profiles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {doctorCards.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden border border-[#DDD4C4] shadow-md bg-white group hover:shadow-xl transition-shadow duration-300"
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
          05 - TESTIMONIALS CAROUSEL (#A1611D ACCENTS & ARROWS)
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4] select-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
                Guest Reflections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold tracking-wide">
                Our Testimonials
              </h2>
              <p className="font-sans text-[#5A4A3B] text-sm font-medium mt-2 max-w-xl tracking-wide">
                Genuine healing journeys, reviews, and clinical experiences shared by our wellness retreat guests.
              </p>
            </div>

            {/* Slider Navigation Buttons (#A1611D Hover) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                className="w-11 h-11 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] text-[#3A2D21] flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonials"
                className="w-11 h-11 rounded-full border border-[#DDD4C4] bg-[#FDFBF7] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] text-[#3A2D21] flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
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
                className="shrink-0 snap-start w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-[#FDFBF7] p-7 sm:p-8 rounded-2xl border border-[#DDD4C4] shadow-xs flex flex-col justify-between hover:border-[#A1611D] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#A1611D] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-[#A1611D]/40 mb-2.5" />

                  <p className="font-serif text-base text-[#3A2D21] font-medium leading-relaxed italic tracking-wide mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD4C4] flex items-center justify-between">
                  <p className="font-sans text-xs uppercase tracking-wider text-[#3A2D21] font-bold">
                    {t.author}
                  </p>
                  <p className="font-sans text-xs font-bold text-[#A1611D]">
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: maxPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => scrollToIndex(pageIdx)}
                aria-label={`Go to slide ${pageIdx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  activeSlide === pageIdx
                    ? "w-8 h-2 bg-[#A1611D]"
                    : "w-2 h-2 bg-[#3A2D21]/25 hover:bg-[#A1611D]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 - DIRECT ENQUIRY FOOTER STRIP (#A1611D PRIMARY CTA)
      ========================================================== */}
      <section className="bg-[#FDFBF7] text-[#3A2D21] py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold block mb-2">
              Plan Your Healing Retreat
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide mb-3">
              Book Your Ayurvedic Consultation
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#3A2D21] font-sans text-xs sm:text-sm font-bold tracking-wide">
              <a
                href="tel:+919035034425"
                className="hover:text-[#A1611D] transition-colors"
              >
                T: +91-9035034425
              </a>
              <span className="text-[#A1611D]">&bull;</span>
              <a
                href="mailto:kevahesarghatta@kevaayurveda.com"
                className="hover:text-[#A1611D] hover:underline transition-colors"
              >
                kevahesarghatta@kevaayurveda.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="tel:+919035034425"
              className="bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm active:scale-95"
            >
              Get an Appointment
            </a>
            <Link
              href="/rooms"
              className="bg-[#F4EFE6] border border-[#DDD4C4] hover:border-[#A1611D] text-[#3A2D21] px-7 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-2xs hover:bg-white"
            >
              Stay at Highland
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}