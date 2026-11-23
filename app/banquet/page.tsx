"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Wifi,
  Leaf,
  ConciergeBell,
  Briefcase,
  UtensilsCrossed,
  Shirt,
  ShoppingBag,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroBg = "/banquet.jpg";

const hallImages = [
  "/banquet/1.webp",
  "/banquet/2.webp",
  "/banquet/3.webp",
  "/banquet/4.webp",
  "/banquet/5.webp",
  "/banquet/6.webp",
  // "/banquet/7.webp",
  "/banquet/8.webp",
];

const metrics = [
  { value: "42", label: "Total Accommodations", sub: "Suites & Rooms" },
  { value: "1,904", unit: "sq. ft", label: "Event Space", sub: "Utsava Banquet Hall" },
  { value: "1,400", unit: "sq. ft", label: "Dining Space", sub: "Dedicated Buffet & Dining" },
  { value: "600", label: "Hall Capacity", sub: "Floating Guest Arrangement" },
  { value: "60+", label: "Open Car Parks", sub: "Valet & Dedicated Parking" },
];

const conferenceServices = [
  {
    title: "Free Internet Access",
    desc: "High-speed Wi-Fi throughout banquet and meeting premises",
    icon: Wifi,
  },
  {
    title: "Ayurveda Wellness",
    desc: "Holistic therapies and rejuvenation at KEVA Ayurveda",
    icon: Leaf,
  },
  {
    title: "Room Service",
    desc: "In-room dining and refreshment service for delegates",
    icon: ConciergeBell,
  },
  {
    title: "Business Services",
    desc: "Print, scan, secretarial assistance & high-tech setups",
    icon: Briefcase,
  },
  {
    title: "Dine-in Restaurant",
    desc: "Cinnamon multicuisine dining with indoor & balcony seats",
    icon: UtensilsCrossed,
  },
  {
    title: "Laundry Service",
    desc: "Same-day express dry cleaning and guest pressing",
    icon: Shirt,
  },
  {
    title: "Take away & Delivery",
    desc: "Bespoke packed meal boxes and takeaway culinary orders",
    icon: ShoppingBag,
  },
  {
    title: "Meeting Facilities",
    desc: "Utsava hall, audiovisual gear, podiums & breakout areas",
    icon: Users,
  },
];

export default function BanquetHallPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - HERO SECTION (ZERO BLACK/RED, BOLD ENQUIRIES, #A1611D CTA)
      ========================================================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[88svh] min-h-[580px] max-h-[860px] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src={heroBg}
            alt="Utsava Banquet Hall at Highland Hotel"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Warm Espresso Bronze Scrims (Zero Black) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(44, 34, 24, 0.88) 0%, rgba(44, 34, 24, 0.42) 45%, rgba(44, 34, 24, 0.18) 100%)",
          }}
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 text-[#FDFBF7]"
        >
          <div className="flex items-center gap-2.5 mb-4">
            
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#E5C99B] font-bold">
              Highland Hotel &bull; Celebrations &amp; Conventions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.05] tracking-wide">
                Utsava <br />
                <span className="italic font-light text-[#F4EFE6]">Banquet Hall</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.26em] text-[#F4EFE6] font-bold leading-relaxed">
                Premier Convention &amp; Event Venue
              </p>
              <div className="mt-3 flex items-center lg:justify-end gap-3 font-sans text-xs tracking-[0.22em] text-[#E5C99B] font-bold uppercase">
                <span>200 Seated</span>
                <span>&bull;</span>
                <span>600 Floating</span>
              </div>
            </div>
          </div>

          {/* Bold Enquiries & #A1611D Button */}
          <div className="mt-10 pt-6 border-t border-[#FDFBF7]/20 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-[#F4EFE6]">
            <div className="flex flex-wrap items-center gap-2 font-bold tracking-wide">
              <Phone className="w-4 h-4 text-[#E5C99B] shrink-0" />
              <span className="text-[#E5C99B]">For Any Enquiries Connect With Us:</span>
              <a
                href="tel:+919035034418"
                className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors ml-1"
              >
                +91 90350 34418
              </a>
              <span>/</span>
              <a
                href="tel:+917619231899"
                className="text-[#FDFBF7] hover:text-[#E5C99B] transition-colors"
              >
                +91 76192 31899
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-7 py-3 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-md active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - OVERVIEW & NARRATIVE (WIDE TRACKING & BOLD HIGHLIGHTS)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
              Welcome to Highland Hotel
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold leading-[1.18] tracking-wide">
              Host your next meeting, launch or celebration
            </h2>
            <div className="mt-5 w-12 h-[2px] bg-[#A1611D]" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#5A4A3B] font-sans text-sm sm:text-base font-normal leading-relaxed tracking-wide">
            <p className="font-serif text-xl sm:text-2xl text-[#3A2D21] leading-snug font-bold tracking-wide">
              Welcome to Hotel Highland, your premier destination for hosting unforgettable events in North Bangalore.
            </p>
            <p>
              Our spacious{" "}
              <strong className="font-bold text-[#3A2D21]">
                1,904 sq. ft. Utsava Banquet Hall
              </strong>{" "}
              boasts a capacity of{" "}
              <strong className="font-bold text-[#3A2D21]">200 seated guests</strong> and{" "}
              <strong className="font-bold text-[#3A2D21]">
                600 guests in a floating arrangement
              </strong>
              , making it the perfect venue for any occasion.
            </p>
            <p>
              Whether you&apos;re planning a{" "}
              <strong className="font-bold text-[#3A2D21]">
                corporate conference, wedding, sangeet ceremony, birthday party, or anniversary celebration
              </strong>
              , our versatile space,{" "}
              <strong className="font-bold text-[#3A2D21]">1,400 sq. ft. dedicated dining area</strong>, and{" "}
              <strong className="font-bold text-[#3A2D21]">60+ open car parks</strong> ensure a seamless and memorable experience.
            </p>
            <p className="text-[#3A2D21] font-bold pt-2 tracking-wide">
              Let Hotel Highland be the backdrop for your next event, where elegance and convenience come together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - ARCHITECTURAL CAPACITY & VENUE METRICS (BOLD & WIDE TRACKING)
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-16 sm:py-20 border-y border-[#DDD4C4] px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
            {metrics.map((item) => (
              <div key={item.label} className="border-l-2 border-[#A1611D] pl-5 sm:pl-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#3A2D21] tracking-wide">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="font-sans text-xs font-bold text-[#A1611D] uppercase tracking-wider">
                      {item.unit}
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#3A2D21] font-bold mt-2">
                  {item.label}
                </p>

                <p className="font-sans text-xs text-[#5A4A3B] font-semibold tracking-wide mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - CONFERENCE & MEETINGS: SERVICES (WIDE TRACKING & BOLD TITLES)
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] block mb-2.5 font-bold">
              Overview &bull; Conference &amp; Meetings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
              Services in <br />
              <span className="italic font-normal text-[#A1611D]">Highland</span>
            </h2>
            <p className="font-sans text-[#5A4A3B] text-xs sm:text-sm font-medium leading-relaxed tracking-wide mt-5">
              Comprehensive hospitality infrastructure supporting{" "}
              <strong className="font-bold text-[#3A2D21]">
                corporate seminars, banquet receptions, private dinners, and residential delegates
              </strong>
              .
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-[#DDD4C4]">
            {conferenceServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex items-start gap-4 py-6 border-b border-[#DDD4C4] sm:odd:pr-8 sm:even:pl-8 sm:even:border-l"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#F4EFE6] border border-[#DDD4C4] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#A1611D] stroke-[2]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base sm:text-lg text-[#3A2D21] font-bold leading-snug tracking-wide">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#5A4A3B] font-medium leading-relaxed tracking-wide">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          05 - CLEAN UNIFORM LIGHT GALLERY
      ========================================================== */}
      <section className="bg-[#F4EFE6] border-t border-[#DDD4C4] py-20 sm:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 mb-10 border-b border-[#DDD4C4]">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold block mb-2">
              Venue Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2D21] font-bold tracking-wide">
              Utsava Hall Perspectives
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {hallImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#EAE1D0] border border-[#DDD4C4] shadow-2xs"
              >
                <Image
                  src={src}
                  alt={`Highland Utsava Banquet Hall photo ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 - PRE-FOOTER INQUIRY & RESERVATION CTA (#A1611D BUTTON)
      ========================================================== */}
      <section className="relative bg-[#FDFBF7] border-t border-[#DDD4C4] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#A1611D]/40 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2.5 mb-4">
            
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#A1611D] font-bold">
              Plan Your Gathering
            </span>
            
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3A2D21] font-bold leading-[1.12] tracking-wide">
            Ready to host an unforgettable <br />
            <span className="italic font-normal text-[#A1611D]">event at Utsava?</span>
          </h2>

          <p className="mt-5 text-[#5A4A3B] font-sans text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed tracking-wide">
            From{" "}
            <strong className="font-bold text-[#3A2D21]">
              customized banquet dining and audiovisual stage arrangements
            </strong>{" "}
            to{" "}
            <strong className="font-bold text-[#3A2D21]">dedicated event coordinators</strong>, our team ensures every celebration unfolds flawlessly.
          </p>

          {/* Action CTAs (#A1611D Primary Button) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#A1611D] hover:bg-[#865017] text-[#FDFBF7] px-8 py-4 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-md active:scale-95"
            >
              <span>Enquire Hall Availability</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </Link>

            <a
              href="tel:+919035034418"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F4EFE6] hover:bg-white text-[#3A2D21] border border-[#DDD4C4] hover:border-[#A1611D] px-7 py-4 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-2xs hover:shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#A1611D] stroke-[2.2]" />
              <span>Call +91 90350 34418</span>
            </a>
          </div>

          {/* Quick Perks / Assurance Row */}
          <div className="mt-14 pt-10 border-t border-[#DDD4C4] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
            <div>
              <p className="font-serif text-lg font-bold text-[#3A2D21] tracking-wide">
                Custom Banquet Menus
              </p>
              <p className="font-sans text-xs text-[#5A4A3B] font-semibold tracking-wide mt-1">
                Multi-cuisine vegetarian &amp; non-veg options
              </p>
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#3A2D21] tracking-wide">
                Dedicated Coordinator
              </p>
              <p className="font-sans text-xs text-[#5A4A3B] font-semibold tracking-wide mt-1">
                End-to-end liaison for hassle-free execution
              </p>
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#3A2D21] tracking-wide">
                AV &amp; Stage Ready
              </p>
              <p className="font-sans text-xs text-[#5A4A3B] font-semibold tracking-wide mt-1">
                Acoustics, podiums &amp; projection systems
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}