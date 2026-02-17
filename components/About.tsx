"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =======================
   Types
======================= */
interface ProductData {
  id: string;
  title: string;          // Keep for alt text / button text logic
  titleImage: string;     // NEW
  category: string;
  description: string;
  image: string;
  accentColor: string;
  features: string[];
}

/* =======================
   Data
======================= */
const products: ProductData[] = [
  {
    id: "charge",
    title: "Teraa Charge",
    titleImage: "/teraacharge.png",
    category: "INFRASTRUCTURE",
    description:
      "Access the fastest and most reliable EV charging network. Real-time availability, seamless sessions, and high-speed delivery.",
    image: "/About/teraacharge.jpg",
    accentColor: "#22D3EE",
    features: ["Real-time Data", "Ultra-fast Charging", "24/7 Support"],
  },
  {
    id: "coins",
    title: "Teraa Coins",
    titleImage: "/teraacoins.png",
    category: "REWARDS",
    description:
      "Turn miles into rewards. Earn digital currency for every sustainable kilometer and redeem it for charging or exclusive products.",
    image: "/About/teraacoins.png",
    accentColor: "#FFD700",
    features: ["Drive & Earn", "Digital Wallet", "Exclusive Perks"],
  },
  {
    id: "vouchers",
    title: "Teraa Vouchers",
    titleImage: "/teraavouchers.png",
    category: "PAYMENTS",
    description:
      "Flexible prepaid solutions for individuals and fleets. Gift sustainable mobility or manage corporate expenses with ease.",
    image: "/About/teraavoucher.png",
    accentColor: "#05DF72",
    features: ["Corporate Gifting", "Bulk Discounts", "Instant Delivery"],
  },
  {
    id: "mart",
    title: "Teraa Mart",
    titleImage: "/teraamartlogo.png",
    category: "MARKETPLACE",
    description:
      "A curated collection of premium EV accessories and home charging solutions. Quality verified for your peace of mind.",
    image: "/About/teraamart.png",
    accentColor: "#00BFFF",
    features: ["Verified Quality", "Home Charging", "Eco Accessories"],
  },
];

/* =======================
   Component
======================= */
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      // 1. Initial State: All images opacity 0, except first one? 
      // Actually, let's start all at 0, and let ScrollTrigger handle the first one being active immediately if scrolled there.
      // But for initial load, to avoid flicker, we can set first to 1.
      products.forEach((product, i) => {
        gsap.set(`#img-${product.id}`, { opacity: i === 0 ? 1 : 0, zIndex: i });
      });

      // 2. Create ScrollTriggers with onToggle
      products.forEach((product, i) => {
        ScrollTrigger.create({
          trigger: `#text-${product.id}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              // Fade In
              gsap.to(`#img-${product.id}`, { opacity: 1, duration: 0.5, overwrite: true });
            } else {
              // Fade Out
              gsap.to(`#img-${product.id}`, { opacity: 0, duration: 0.5, overwrite: true });
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white relative w-full">

      {/* --- HERO SECTION --- */}
      <section className="py-32 px-6 container mx-auto flex flex-col items-center text-center">
        <h2 className="text-sm md:text-base text-gray-500 tracking-[0.2em] font-mono mb-6 uppercase">
          The Ecosystem
        </h2>
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
          Beyond <span className="text-[#05DF72]">Driving.</span>
        </h3>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
          We are building the integrated infrastructure that powers the next generation of electric mobility.
        </p>
        <div className="h-24 w-[1px] bg-gradient-to-b from-gray-800 to-transparent mt-16"></div>
      </section>

      {/* --- SPLIT LAYOUT (Performance Optimized + Glassmorphism) --- */}
      <div className="relative flex flex-col lg:flex-row">

        {/* LEFT COLUMN: Sticky Images */}
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center overflow-hidden relative order-1">

          {/* Background elements for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-transparent to-transparent opacity-40"></div>

          {/* The Glass Container Wrapper - Smaller now (max-w-md or lg) */}
          <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] lg:aspect-square lg:w-[400px] lg:h-[400px] mx-auto z-10">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={`img-${product.id}`}
                className="absolute inset-0 w-full h-full"
              // Initial opacity handled by GSAP setup, but we default to 0 in CSS if needed, 
              // or just let GSAP set immediate render.
              >
                {/* THE CARD ITSELF: Heavy Glassmorphism */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-md bg-white/5 group">

                  {/* Inner Glow based on accent color */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${product.accentColor}, transparent 70%)` }}
                  />

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover p-2 rounded-[20px]"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Tech Elements */}
          <div className="absolute bottom-12 left-12 text-[10px] font-mono text-white/20 tracking-[0.2em] hidden lg:block z-0 rotate-[-90deg] origin-bottom-left">
            SYSTEM_VISUAL_INTERFACE // V2.0
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Text (Glassmorphism + Smaller Typography) */}
        <div className="lg:w-1/2 w-full order-2 relative z-10 lg:bg-transparent">
          {products.map((product) => (
            <div
              key={product.id}
              id={`text-${product.id}`}
              className="min-h-[80vh] lg:min-h-screen flex flex-col justify-center p-6 lg:p-24"
            >
              {/* GLASS CARD */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500">

                {/* Subtle Glow Gradient */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500"
                  style={{ background: `radial-gradient(circle, ${product.accentColor}20 0%, transparent 70%)` }}
                />

                <div className="space-y-6 max-w-lg relative z-10">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]"
                      style={{ backgroundColor: product.accentColor, color: product.accentColor }}
                    ></span>
                    <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                      {product.category}
                    </span>
                  </div>

                  {/* REPLACED TEXT TITLE WITH IMAGE TITLE */}
                  <div className="mb-4 relative w-full h-16 md:h-20 flex items-center justify-start">
                    <Image
                      src={product.titleImage}
                      alt={product.title}
                      width={320}
                      height={80}
                      className="object-contain object-left w-auto h-full"
                    />
                  </div>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-3 pt-6 border-t border-white/5">
                    {product.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300 text-sm font-medium"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white/40" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link href={`/${product.id === 'charge' ? 'app' : product.id}`}>
                      <button className="text-sm font-semibold text-white border-b border-white/30 pb-1 hover:border-white transition-colors flex items-center gap-2">
                        Explore {product.title.split(" ")[1]}
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="py-40 bg-white text-black text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 text-black">
            Start Now
          </h2>
          <Link href="/connect">
            <button className="px-12 py-5 bg-black text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl">
              Get the App
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
