"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
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

const heroBg = "/yoga/hero.webp";
const naturopathyImg = "/yoga/1.webp";
const yogaImg = "/yoga/2.webp";

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
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden">
      {/* =========================================================
          01 - PARALLAX HERO (ZERO BLACK/RED, BOLD CONTACT, #A1611D CTA)
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

        {/* Warm Espresso Bronze Scrim (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.4) 45%, rgba(44, 34, 24, 0.18) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20 text-[#FDFBF7]"
        >
          <div className="flex items-center gap-2.5 mb-4">
           
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
              KEVA Wellness &bull; Holistic Nature Care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[1.05] tracking-wide drop-shadow-sm">
                Yoga, Naturopathy <br />
                <span className="italic font-light text-[#F4EFE6]">
                  &amp; Acupuncture
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-serif italic text-lg sm:text-xl text-[#F4EFE6] font-semibold leading-relaxed tracking-wide">
                &ldquo;Cultivating strength, balance, and the innate power to heal.&rdquo;
              </p>
            </div>
          </div>

          {/* Bold Appointment Strip & #A1611D Button */}
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
              <span>Get an Appointment</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - NATUROPATHY (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative w-full rounded-xl overflow-hidden bg-[#F4EFE6] border border-[#DDD4C4] p-3 shadow-xs">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
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
              <Leaf className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                Innate Healing
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Naturopathy
            </h2>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Highland Hotel embraces the principles of{" "}
              <strong className="font-bold text-[#3A2D21]">naturopathic medicine</strong>, offering guests a natural and holistic approach to health and well-being. Our team of{" "}
              <strong className="font-bold text-[#3A2D21]">certified naturopathic practitioners</strong> combines modern scientific knowledge with traditional healing wisdom to address a wide range of health concerns.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Through{" "}
              <strong className="font-bold text-[#3A2D21]">
                personalized consultations, dietary guidance, herbal remedies, hydrotherapy, and lifestyle counseling
              </strong>
              , we empower individuals to take charge of their health and harness the body’s innate ability to heal itself.
            </p>

            <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
              Whether you’re seeking relief from chronic conditions, striving to boost your immune system, or enhancing overall vitality, our naturopathic services provide a supportive environment for{" "}
              <strong className="font-bold text-[#3A2D21]">holistic healing and transformation</strong>.
            </p>

            <div className="pt-4 border-t border-[#DDD4C4] flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#A1611D]">
              <span>Hydrotherapy &amp; Steam</span>
              <span>&bull;</span>
              <span>Dietary Guidance</span>
              <span>&bull;</span>
              <span>Vitality Boost</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - YOGA (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-y border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative w-full rounded-xl overflow-hidden bg-[#FDFBF7] border border-[#DDD4C4] p-3 shadow-xs">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
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
                <Sun className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
                  Mind &bull; Body &bull; Soul
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
                Yoga
              </h2>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Elevate your wellness journey at Highland Hotel with our{" "}
                <strong className="font-bold text-[#3A2D21]">comprehensive yoga program</strong> designed to nurture body, mind, and soul. Led by{" "}
                <strong className="font-bold text-[#3A2D21]">certified instructors</strong> in serene studio spaces or amidst the tranquil greenery of North Bangalore, our sessions cater to all levels.
              </p>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Experience the transformative power of{" "}
                <strong className="font-bold text-[#3A2D21]">
                  classical asanas, pranayama breathwork, and guided meditation
                </strong>{" "}
                as you cultivate strength, flexibility, and inner peace.
              </p>

              <p className="font-sans text-[#5A4A3B] text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                Whether you’re seeking to enhance your physical fitness, alleviate stress, or embark on a restorative retreat, our yoga classes and workshops offer a sanctuary for{" "}
                <strong className="font-bold text-[#3A2D21]">self-discovery and personal renewal</strong>.
              </p>

              <div className="pt-4 border-t border-[#DDD4C4] flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#A1611D]">
                <span>Asanas &amp; Alignment</span>
                <span>&bull;</span>
                <span>Pranayama Breathwork</span>
                <span>&bull;</span>
                <span>Guided Meditation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - TESTIMONIALS SLIDER (#A1611D ACCENTS & CONTROLS)
      ========================================================== */}
      <section className="bg-[#FDFBF7] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-[#DDD4C4] select-none">
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
                Real reflections from guests who experienced holistic recovery, therapies, and care at our wellness center.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                className="w-11 h-11 rounded-full border border-[#DDD4C4] bg-[#F4EFE6] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] text-[#3A2D21] flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonials"
                className="w-11 h-11 rounded-full border border-[#DDD4C4] bg-[#F4EFE6] hover:bg-[#A1611D] hover:text-[#FDFBF7] hover:border-[#A1611D] text-[#3A2D21] flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
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
                className="shrink-0 snap-start w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-[#F4EFE6] p-7 sm:p-8 rounded-2xl border border-[#DDD4C4] shadow-xs flex flex-col justify-between hover:border-[#A1611D] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#A1611D] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-[#A1611D]/40 mb-3" />

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
          05 - SERVICES GRID (BOLD SERVICES & FACILITIES)
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
              Comprehensive Care
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold tracking-wide">
              Wellness Services
            </h2>
            <p className="font-sans text-[#5A4A3B] text-sm font-medium mt-2 tracking-wide">
              Holistic therapies combining <strong className="font-bold text-[#3A2D21]">ancient Indian sciences</strong> with <strong className="font-bold text-[#3A2D21]">naturopathic restoration</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-[#FDFBF7] p-5 rounded-xl border border-[#DDD4C4] hover:border-[#A1611D] transition-colors shadow-2xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#A1611D] stroke-[2.2] shrink-0 mt-1" />
                <span className="font-serif text-base text-[#3A2D21] font-bold leading-snug tracking-wide">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 - LIGHT PARCHMENT CONTACT & FOOTER STRIP (#A1611D CTA)
      ========================================================== */}
      <section className="bg-[#FDFBF7] text-[#3A2D21] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#DDD4C4]">
            <div className="lg:col-span-5">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2 font-bold">
                Connect &bull; Wellness Desk
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide mb-3">
                Contact Info
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium leading-relaxed tracking-wide">
                Connect with our <strong className="font-bold text-[#3A2D21]">certified Ayurvedic, Naturopathy, and Yoga practitioners</strong> for consultations, appointment scheduling, and retreat stays.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#3A2D21]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#A1611D] font-sans uppercase tracking-widest text-xs font-bold">
                  <Phone className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                  <span>Telephone</span>
                </div>
                <p className="text-[#3A2D21] text-base sm:text-lg font-bold tracking-wide">
                  <a href="tel:+919035034425" className="hover:text-[#A1611D] transition-colors">
                    +91-9035034425
                  </a>
                </p>
                <p className="text-xs text-[#5A4A3B] font-semibold">
                  Prior appointment recommended for clinical consultations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#A1611D] font-sans uppercase tracking-widest text-xs font-bold">
                  <Mail className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
                  <span>Email</span>
                </div>
                <p className="text-[#3A2D21] text-sm sm:text-base font-bold break-all">
                  <a
                    href="mailto:kevahesarghatta@kevaayurveda.com"
                    className="hover:text-[#A1611D] transition-colors"
                  >
                    kevahesarghatta@kevaayurveda.com
                  </a>
                </p>
                <p className="text-xs text-[#5A4A3B] font-semibold">
                  Direct inquiries to our specialized wellness clinic team.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-bold text-[#3A2D21]">
            <p className="tracking-wide">
              Highland Hotel &bull; KEVA Ayurveda, Yoga &amp; Naturopathy
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919035034425"
                className="bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3 rounded-sm uppercase tracking-[0.2em] font-bold transition-all shadow-sm active:scale-95"
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