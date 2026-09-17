"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "42",
    label: "Rooms & Suites",
  },
  {
    value: "36",
    label: "Executive Suites",
  },
  {
    value: "06",
    label: "Executive Twin Suites",
  },
  {
    value: "600",
    label: "Guests for Events",
  },
];

export default function About() {
  return (
    <section className="relative w-full overflow-hidden border-t border-stone-200/80 bg-[#f8f7f4] px-6 py-24 text-stone-900 sm:px-12 sm:py-32 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        
        {/* LEFT — EDITORIAL IMAGES */}
        <div className="relative flex w-full items-center justify-start lg:col-span-7">
          
          {/* Main Image */}
          <div className="relative h-[440px] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-xl sm:h-[560px] sm:w-[82%]">
            <Image
              src="https://highlandhotel.in/wp-content/uploads/2024/09/64-768x512.jpg"
              alt="Highland Hotel exterior and property"
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* Secondary Image */}
          <div className="absolute -bottom-8 right-0 z-10 hidden h-[290px] w-[235px] overflow-hidden rounded-lg border-4 border-[#f8f7f4] bg-stone-200 shadow-2xl sm:block lg:-right-4">
            <Image
              src="https://highlandhotel.in/wp-content/uploads/2023/08/25.png"
              alt="Highland Hotel room"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="235px"
            />
          </div>

          {/* Small Location Label */}
          <div className="absolute bottom-5 left-5 z-20 border border-white/30 bg-black/30 px-4 py-3 backdrop-blur-md">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
              Highland Hotel
            </p>
            <p className="mt-1 text-xs text-white">
              North Bangalore
            </p>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col justify-center text-left lg:col-span-5">
          
          {/* Kicker */}
          <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-stone-500">
            About Highland
          </p>

          {/* Heading */}
          <h2 className="mb-6 font-serif text-4xl font-normal leading-[1.05] tracking-tight text-stone-900 sm:text-5xl lg:text-[54px]">
            A place to stay,
            <br />
            <span className="italic">dine, celebrate</span>
            <br />
            & reconnect.
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-lg font-sans text-sm font-light leading-7 text-stone-600 sm:text-[15px]">
            Highland Hotel brings together comfortable stays, multi-cuisine
            dining, celebrations and holistic wellness under one roof in North
            Bangalore. With 42 rooms and suites, Cinnamon Restaurant, Utsava
            Banquet Hall and Ayurveda, Naturopathy, Yoga and Acupuncture
            services, Highland offers a complete experience for both stays and
            special occasions.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-stone-300/80 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="mb-1 font-serif text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
                  {stat.value}
                </span>

                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-stone-500 sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-10">
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-3 border-b border-stone-900/30 pb-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 hover:border-stone-900 hover:text-stone-600"
            >
              <span>Discover Highland</span>

              <ArrowUpRight
                className="h-3.5 w-3.5 text-stone-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="pointer-events-none absolute -bottom-12 -left-4 hidden select-none font-serif text-[180px] font-light leading-none text-stone-900/[0.025] lg:block">
        HIGHLAND
      </div>
    </section>
  );
}