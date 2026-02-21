"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "charge",
    num: "01",
    label: "Infrastructure",
    titleImage: "/teraacharge.png",
    description:
      "Access the fastest and most reliable EV charging network. Real-time availability, seamless sessions, and high-speed delivery. Real-time data \n Ultra-fast charging \n 24/7 Support ",
    image: "/About/teraacharge.jpg",
    accentColor: "#22D3EE",
    href: "/app",
  },
  {
    id: "coins",
    num: "02",
    label: "Rewards",
    titleImage: "/teraacoins.png",
    description:
      "Turn every charge into rewards. Earn coins as you power up, drive smart, and stay active. Redeem for exclusive EV benefits and services. Reward on every charge Redeem for EV perks Instant in-app tracking ",
    image: "/About/teraacoins.png",
    accentColor: "#FFD700",
    href: "/coins",
  },
  {
    id: "vouchers",
    num: "03",
    label: "Payments",
    titleImage: "/teraavouchers.png",
    description:
      "Power that makes a thoughtful gift. TeraaVouchers make EV charging simple, shareable, and always useful. Easy to purchase Send to anyone Hassle-free redemption ",
    image: "/About/teraavoucher.png",
    accentColor: "#05DF72",
    href: "/vouchers",
  },
  {
    id: "mart",
    num: "04",
    label: "Marketplace",
    titleImage: "/teraamartlogo.png",
    description:
      "A curated collection of premium EV accessories and home charging solutions. Every product quality-verified for your peace of mind.",
    image: "/About/teraamart.png",
    accentColor: "#00BFFF",
    href: "/mart",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-row").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true, // Only animate once and stay visible
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 text-center px-6">
        <p className="text-xs bg-[blue] font-mono tracking-[0.5em] text-gray-500 uppercase mb-8">
          The Ecosystem
        </p>
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/4]">
          <Image src="/teraawattart.svg" alt="Teraawatt" fill className="object-contain" priority />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="w-full h-px bg-white/10" />

      {/* ── PRODUCT ROWS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {products.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={p.id}>
              <div
                className={`about-row py-24 md:py-32 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12 md:gap-20`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-600">{p.num}</span>
                    <div className="h-px flex-1 bg-white/10" />
                    <span
                      className="text-xs font-mono tracking-widest uppercase"
                      style={{ color: p.accentColor }}
                    >
                      {p.label}
                    </span>
                  </div>

                  <div className="relative h-14 w-56">
                    <Image
                      src={p.titleImage}
                      alt={p.label}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {p.description}
                  </p>

                  <Link href={p.href}>
                    <button className="mt-2 flex items-center gap-3 text-white text-sm font-semibold tracking-wide group w-fit border-b border-white/20 pb-1 hover:border-white transition-colors duration-300">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Row Divider */}
              {i < products.length - 1 && <div className="w-full h-px bg-white/5" />}
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="py-32 text-center px-6 border-t border-white/10">
        <p className="text-xs font-mono tracking-[0.5em] text-gray-600 uppercase mb-6">
          Ready to start?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10">
          The smarter way to drive electric starts here.
        </h2>
        <Link href="/connect">
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm tracking-wide">
            Join TeraaWatt
          </button>
        </Link>
      </section>

    </div>
  );
}
