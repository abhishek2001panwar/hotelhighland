"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export interface BlogItem {
  slug: string;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export const blogsList: BlogItem[] = [
  {
    slug: "panchatantra",
    day: "16",
    month: "Aug",
    year: "24",
    category: "Ayurveda",
    title: "Panchatantra",
    excerpt:
      "These are the 5 basic rules and regulations that one should follow in order to lead a healthy life. These are the pillars of a healthy lifestyle. These principles are scientifically addressed and proven to be effective in modifying the lifestyle thereby preventing lifestyle-related disorders.",
    image: "/blog1.webp",
  },
  {
    slug: "taste-the-world",
    day: "17",
    month: "Aug",
    year: "24",
    category: "Dining",
    title: "Taste the World: A Multi-Cuisine Adventure at Cinnamon Restaurant",
    excerpt:
      "Hotel Highland is the location where Cinnamon Restaurant is found, hence its elegance and sophistication. It’s a culinary treasure situated within the confines of Hotel Highland, which allows guests to try out a mix of cuisines like no other place.",
    image: "/blog2.webp",
  },
  {
    slug: "hair-fall",
    day: "17",
    month: "Aug",
    year: "24",
    category: "Ayurveda",
    title: "Hair fall",
    excerpt:
      "Hair fall is also called as alopecia or baldness. In which loss of hair will be there either from head or the body. It is normal for a person to lose 50-100 hairs per day. Discover the primary causes and ancient Ayurvedic treatments.",
    image: "/blog3.webp",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3A2D21] antialiased selection:bg-[#A1611D]/20 selection:text-[#3A2D21] overflow-x-hidden pt-28 sm:pt-36">
      <Navbar />

      {/* =========================================================
          01 - HEADER
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pb-10 border-b border-[#DDD4C4]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#A1611D]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#A1611D] font-bold">
                Highland Hotel &bull; Journal
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#3A2D21] font-bold tracking-wide">
              Blogs
            </h1>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#5A4A3B] font-medium max-w-xs sm:text-right leading-relaxed tracking-wide">
            <strong className="font-bold text-[#3A2D21]">
              Wellness perspectives, culinary traditions
            </strong>
            , and holistic lifestyle insights.
          </p>
        </div>
      </section>

      {/* =========================================================
          02 - 2 IN ONE ROW EDITORIAL GRID (#A1611D ACCENTS & ZERO BLACK)
      ========================================================== */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogsList.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#DDD4C4] hover:border-[#A1611D] shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div>
                {/* Visual Header matching 890x480 ratio (~16:9) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F4EFE6]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                  />

                  {/* Highland Stamp Date Pill */}
                  <div className="absolute top-4 left-4 bg-[#FDFBF7]/95 backdrop-blur-xs text-[#3A2D21] px-3.5 py-2 rounded-sm shadow-xs border border-[#DDD4C4] flex flex-col items-center leading-none">
                    <span className="font-serif text-sm font-bold tracking-tight">
                      {blog.day} {blog.month}
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#A1611D] mt-1">
                      20{blog.year}
                    </span>
                  </div>

                  {/* Category Chip (Warm Espresso Bronze Glass, Zero Black) */}
                  <div className="absolute top-4 right-4 bg-[#3A2D21]/80 backdrop-blur-md text-[#FDFBF7] border border-[#FDFBF7]/20 text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-sm">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#3A2D21] font-bold leading-snug tracking-wide group-hover:text-[#A1611D] transition-colors mb-4">
                    {blog.title}
                  </h2>
                  <p className="font-sans text-sm text-[#5A4A3B] font-normal leading-relaxed tracking-wide line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer (#A1611D Action Circle) */}
              <div className="px-8 sm:px-10 py-5 border-t border-[#DDD4C4] bg-[#F4EFE6] flex items-center justify-between text-xs font-sans uppercase tracking-[0.22em] font-bold text-[#3A2D21] group-hover:text-[#A1611D] transition-colors">
                <span>Explore More</span>
                <div className="w-9 h-9 rounded-full border border-[#A1611D]/40 bg-[#A1611D] text-[#FDFBF7] group-hover:bg-[#865017] flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 - LIGHT PARCHMENT FOOTER STRIP (BOLD ADDRESS & LINKS)
      ========================================================== */}
      <section className="bg-[#F4EFE6] text-[#3A2D21] py-16 px-6 sm:px-12 lg:px-20 border-t border-[#DDD4C4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-sans">
          <div>
            <p className="font-serif font-bold text-lg text-[#3A2D21] tracking-wide">
              Highland Hotel Bengaluru
            </p>
            <p className="font-semibold text-[#5A4A3B] tracking-wide mt-1">
              #4 &amp; 5, MM Heights, Chikkasandra, Hesaraghatta Main Road, Bangalore – 560073
            </p>
          </div>
          <div className="flex items-center gap-6 font-bold uppercase tracking-[0.18em] text-[#3A2D21]">
            <Link href="/ayurveda" className="hover:text-[#A1611D] transition-colors">
              Ayurveda
            </Link>
            <Link href="/cinnamon" className="hover:text-[#A1611D] transition-colors">
              Cinnamon
            </Link>
            <Link href="/contact" className="hover:text-[#A1611D] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}