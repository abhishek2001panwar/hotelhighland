import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const ttRamillas = localFont({
  src: "../public/fonts/TT_Ramillas_Regular.ttf", // Adjust path to where you placed the file
  variable: "--font-ramillas",
  display: "swap",
});

// 2. Inter Medium (Clean UI / Navigation / Buttons)
const inter = localFont({
  src: "../public/fonts/Inter18pt-Medium.ttf",
  variable: "--font-inter",
  display: "swap",
});

// 3. Karla Light (Body copy / Paragraphs / Subtext)
const karla = localFont({
  src: "../public/fonts/Karla-Light.ttf",
  variable: "--font-karla",
  display: "swap",
});

const test = localFont({
  src: "../public/fonts/312c884c2a3d0677-s.p.ttf",
  variable: "--font-test",
  display: "swap",
});
const test1 = localFont({
  src: "../public/fonts/bca811f5d0fb99d0-s.p.ttf",
  variable: "--font-test1",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Highland Hotel Bengaluru | Where Luxury Meets Hospitality",
  description:
    "A premier sanctuary in North Bangalore featuring luxury accommodations, Cinnamon Restaurant, Utsava Banquet Hall, and authentic Ayurvedic wellness.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ttRamillas.variable} ${inter.variable} ${karla.variable} ${test.variable} ${test1.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
