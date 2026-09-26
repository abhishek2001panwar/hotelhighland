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

const heroBg =
  "/banquet.jpg"; // Full high-resolution 1920x1280 hero image for Utsava Banquet Hall

const hallImages = [
  "/banquet/1.webp",
  "/banquet/2.webp",
  "/banquet/3.webp",
  "/banquet/4.webp",
  "/banquet/5.webp",
  "/banquet/6.webp",
  "/banquet/7.webp",
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

  // Toned down parallax offsets so the hero image remains perfectly proportioned without over-zooming
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-amber-600/20 selection:text-amber-950 overflow-x-hidden">
      <Navbar />

      {/* =========================================================
          01 - HERO SECTION (CLEAN PROPORTIONS, NO OVER-ZOOM)
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

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-stone-950/15 pointer-events-none z-10" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-amber-300 font-medium">
              Highland Hotel &bull; Celebrations &amp; Conventions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.03] tracking-tight">
                Utsava <br />
                <span className="italic font-light text-stone-200">Banquet Hall</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-sans text-xs uppercase tracking-[0.24em] text-stone-300 font-light leading-relaxed">
                Stay in our luxury meeting hall
              </p>
              <div className="mt-3 flex items-center lg:justify-end gap-3 font-mono text-[11px] tracking-widest text-amber-200/90 uppercase">
                <span>200 Seated</span>
                <span>&bull;</span>
                <span>600 Floating</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-stone-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-stone-300">For Any Enquiries Connect With Us:</span>
              <a
                href="tel:+919035034418"
                className="text-white hover:text-amber-300 transition-colors font-medium ml-1"
              >
                +91 90350 34418
              </a>
              <span>/</span>
              <a
                href="tel:+917619231899"
                className="text-white hover:text-amber-300 transition-colors font-medium"
              >
                +91 76192 31899
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-amber-500 hover:text-white px-6 py-2.5 rounded-sm font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          02 - OVERVIEW & NARRATIVE
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C6D3B] block mb-2 font-semibold">
              Welcome to Highland Hotel
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal leading-[1.15]">
              Host your next meeting, launch or celebration
            </h2>
            <div className="mt-5 w-12 h-[1px] bg-[#D8CFBF]" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#4A453E] font-sans text-sm sm:text-base font-light leading-relaxed">
            <p className="font-serif text-xl sm:text-2xl text-[#1B1917] leading-snug font-normal">
              Welcome to Hotel Highland, your premier destination for hosting unforgettable events.
            </p>
            <p>
              Our spacious banquet hall boasts a capacity of <strong>200 seated guests</strong> and{" "}
              <strong>600 guests in a floating arrangement</strong>, making it the perfect venue for any occasion.
            </p>
            <p>
              Whether you&apos;re planning a conference, wedding, sangeet ceremony, birthday party, anniversary celebration, or any other special event, our versatile space and exceptional service will ensure a memorable experience.
            </p>
            <p className="text-[#1B1917] font-normal pt-2">
              Let Hotel Highland be the backdrop for your next event, where elegance and convenience come together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 - ARCHITECTURAL CAPACITY & VENUE METRICS
      ========================================================== */}
      <section className="bg-[#F4EFE6] py-16 sm:py-20 border-y border-[#E2DAD0] px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
            {metrics.map((item) => (
              <div key={item.label} className="border-l border-[#D6CDBC] pl-5 sm:pl-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#1B1917] tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="font-mono text-xs text-[#7A6E58] uppercase">
                      {item.unit}
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs uppercase tracking-wider text-[#1B1917] font-medium mt-2">
                  {item.label}
                </p>

                <p className="font-sans text-[11px] text-[#7A6E58] font-light mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 - CONFERENCE & MEETINGS: SERVICES
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C6D3B] block mb-2 font-semibold">
              Overview &bull; Conference &amp; Meetings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1917] font-normal leading-[1.1]">
              Services in <br />
              <span className="italic font-light text-[#8C6D3B]">Highland</span>
            </h2>
            <p className="font-sans text-[#5F584C] text-xs sm:text-sm font-light leading-relaxed mt-5">
              Comprehensive hospitality infrastructure supporting corporate seminars, banquet receptions, private dinners, and residential delegates.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-[#E5E0D5]">
            {conferenceServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex items-start gap-4 py-6 border-b border-[#E5E0D5] sm:odd:pr-8 sm:even:pl-8 sm:even:border-l"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FAF7F0] border border-[#E5E0D5] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#8C6D3B] stroke-[1.75]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg text-[#1B1917] font-normal leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-[#5F584C] font-light leading-relaxed">
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
          05 - CLEAN UNIFORM LIGHT GALLERY (EQUAL SMALL CARDS, NO TEXT, NO ENLARGEMENT)
      ========================================================== */}
      <section className="bg-[#FAF7F0] border-t border-[#EAE4D9] py-20 sm:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="pb-8 mb-10 border-b border-[#E0D8CB]">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold block mb-2">
              Venue Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal">
              Utsava Hall Perspectives
            </h2>
          </div>

          {/* Equal Sized Uniform Grid (4 Columns, 4:3 Aspect Ratio, Crisp Images) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {hallImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#ECE6DA] border border-[#E2D9CB] shadow-2xs"
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
          06 - PRE-FOOTER INQUIRY & RESERVATION CTA
      ========================================================== */}
      <section className="relative bg-[#F4EFE6] border-t border-[#E5E0D5] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Subtle decorative architectural lines */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8C6D3B]/30 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-4">
           
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
              Plan Your Gathering
            </span>
           
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1B1917] font-normal leading-[1.1] tracking-tight">
            Ready to host an unforgettable <br />
            <span className="italic font-light text-[#7A6E58]">event at Utsava?</span>
          </h2>

          {/* Subtext */}
          <p className="mt-5 text-[#5F584C] font-sans text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From customized banquet dining and audiovisual stage arrangements to dedicated event coordinators, our team ensures every celebration unfolds flawlessly.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1B1917] hover:bg-[#2C2723] text-[#FDFBF7] px-8 py-4 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
            >
              <span>Enquire Hall Availability</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </Link>

            <a
              href="tel:+919035034418"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FAF7F0] hover:bg-white text-[#1B1917] border border-[#DDD4C4] px-7 py-4 rounded-sm font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-2xs hover:shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#8C6D3B]" />
              <span>Call +91 90350 34418</span>
            </a>
          </div>

          {/* Quick Perks / Assurance Row */}
          <div className="mt-14 pt-10 border-t border-[#E0D8CB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
            <div>
              <p className="font-serif text-base text-[#1B1917]">Custom Banquet Menus</p>
              <p className="font-sans text-xs text-[#7A6E58] font-light mt-1">
                Multi-cuisine vegetarian & non-veg options
              </p>
            </div>
            <div>
              <p className="font-serif text-base text-[#1B1917]">Dedicated Coordinator</p>
              <p className="font-sans text-xs text-[#7A6E58] font-light mt-1">
                End-to-end liaison for hassle-free execution
              </p>
            </div>
            <div>
              <p className="font-serif text-base text-[#1B1917]">AV & Stage Ready</p>
              <p className="font-sans text-xs text-[#7A6E58] font-light mt-1">
                Acoustics, podiums & projection systems
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}