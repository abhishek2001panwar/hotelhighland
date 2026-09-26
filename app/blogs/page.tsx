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
    image:
      "/blog1.webp",
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
    image:
      "/blog2.webp",
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
    image:
      "/blog3.webp",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden pt-28 sm:pt-36">
      <Navbar />
      {/* =========================================================
          01 - HEADER
      ========================================================== */}
      <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pb-10 border-b border-[#E5E0D5]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7A6E58] font-semibold block mb-2">
              Highland Hotel &bull; Journal
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#1B1917] font-normal tracking-[-0.03em]">
              Blogs
            </h1>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#1B1917]/60 font-light max-w-xs sm:text-right">
            Wellness perspectives, culinary traditions, and lifestyle insights.
          </p>
        </div>
      </section>

      {/* =========================================================
          02 - 2 IN ONE ROW EDITORIAL GRID
      ========================================================== */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogsList.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#1B1917]/40 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div>
                {/* Visual Header matching 890x480 ratio (~16:9) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F2EDE4]">
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
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#1B1917] px-3 py-2 rounded-sm shadow-xs border border-[#E5E0D5] flex flex-col items-center leading-none">
                    <span className="font-serif text-sm font-semibold tracking-tight">
                      {blog.day} {blog.month}
                    </span>
                    <span className="font-mono text-[10px] text-[#7A6E58] mt-1">
                      {blog.year}
                    </span>
                  </div>

                  {/* Category Chip */}
                  <div className="absolute top-4 right-4 bg-black/65 backdrop-blur-xs text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm font-medium">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal leading-snug group-hover:text-black transition-colors mb-4">
                    {blog.title}
                  </h2>
                  <p className="font-sans text-sm text-[#1B1917]/70 font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-8 sm:px-10 py-5 border-t border-[#F0EBE0] bg-[#FAF7F0] flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#1B1917]">
                <span>Explore More</span>
                <div className="w-8 h-8 rounded-full border border-[#DCD5C7] bg-white group-hover:bg-[#1B1917] group-hover:text-white group-hover:border-[#1B1917] flex items-center justify-center transition-all duration-300 shadow-2xs">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 - LIGHT PARCHMENT FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-16 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-sans text-[#1B1917]/70">
          <div>
            <p className="font-medium text-sm text-[#1B1917]">Highland Hotel Bengaluru</p>
            <p className="font-light mt-0.5">#4 &amp; 5, MM Heights, Chikkasandra, Hesaraghatta Main Road</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/ayurveda" className="hover:underline">Ayurveda</Link>
            <Link href="/cinnamon" className="hover:underline">Cinnamon</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </section>

    </main>
  );
}