// "use client";
// import Image from "next/image";
// import { useRef } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// export default function About() {
//   // motion values
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!containerRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   // create transforms for tilt effect
//   const rotateX = useTransform(mouseY, (y) => -y / 70); // tilt up/down
//   const rotateY = useTransform(mouseX, (x) => x / 70);  // tilt left/right
// //   const translateX = useTransform(mouseX, (x) => x / 60);
// //   const translateY = useTransform(mouseY, (y) => y / 60);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 gap-8 sm:gap-12 md:gap-16"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Logo with tilt effect */}
//       <motion.div
//         style={{ rotateX, rotateY, }}
//         className="relative w-[60vw] sm:w-[45vw] md:w-[30vw] h-[30vh] perspective-1000"
//       >
//         <Image
//           src="./teraawatt.svg"
//           alt="Teraawatt Logo"
//           fill
//           className="object-contain"
//         />
//       </motion.div>

//       {/* Intro Text */}
//       {/* <motion.p
//         style={{ rotateX, rotateY,}}
//         className="text-center max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2"
//       >
       
//       </motion.p> */}

//       {/* Green Button */}
//       <motion.button
//         style={{ rotateX, rotateY,  }}
//         whileHover={{ scale: 1.1 }}
//         className="bg-green-500 hover:bg-green-600 transition-all text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base"
//       >
//         Explore our solutions
//       </motion.button>

//       {/* Recharge Image */}
//       {/* <motion.div
//         style={{ rotateX, rotateY,  }}
//         className="relative w-full max-w-3xl h-40 sm:h-64 md:h-96"
//       >
//         <Image
//           src="https://teraawatt.com/recharge.png"
//           alt="Recharge"
//           fill
//           className="object-contain"
//         />
//       </motion.div> */}

//       {/* Text Sections */}
//       <motion.div
//         style={{ rotateX, rotateY,  }}
//         className="flex text-center flex-col gap-6 sm:gap-8 md:gap-10 max-w-4xl px-2"
//       >
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//           We make EV driving easier with seamless charging, AI-powered trip planning, and a vision to make EVs as accessible as petrol cars for cities and beyond
//         </p>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-bold">Our <span className="text-[#05DF72]">Products</span></h2>
//         <p className="text-xs sm:text-sm md:text-base">Comprehensive solutions for the future of electric mobility</p>

//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaCoins</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Our digital currency system that rewards sustainable driving behavior. Earn coins for using our charging network, reducing carbon footprint, and participating in our green mobility ecosystem.
//         </p>

//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaVouchers</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Flexible payment solutions for EV charging and services. Prepaid vouchers that make EV ownership more accessible and provide discounts for frequent users of our charging network.
//         </p>

//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaMart</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Your one-stop marketplace for EV accessories, charging equipment, and sustainable mobility products. Quality products curated specifically for electric vehicle owners and enthusiasts.
//         </p>
//       </motion.div>
//     </div>
//   );
// }



















"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

/* =======================
   Types
======================= */
interface ProductData {
  id: string;
  titleImage: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  features: string[];
}

/* =======================
   Data (ORDER MATTERS)
======================= */
const products: ProductData[] = [
  {
    id: "charge",
    titleImage: "/teraaCharge.png",
    subtitle: "The Charging Network",
    description:
      "Access the fastest and most reliable EV charging network. Find stations, manage charging sessions, and view real-time availability all from one seamless platform.",
    image: "/About/teraacharge.jpg",
    accentColor: "#22D3EE",
    features: [
      "Real-time station availability",
      "Fast & Ultra-fast charging",
      "Seamless app integration",
      "24/7 support",
    ],
  },
  {
    id: "coins",
    titleImage: "/teraacoins.png",
    subtitle: "Digital Currency",
    description:
      "A reward system for sustainable driving. Earn coins for charging, eco-driving, and participating in the green mobility ecosystem.",
    image: "/About/teraacoins.png",
    accentColor: "#FFD700",
    features: [
      "Earn while you drive",
      "Redeem for charging",
      "Marketplace access",
      "Secure & digital",
    ],
  },
  {
    id: "vouchers",
    titleImage: "/teraavouchers.png",
    subtitle: "Flexible Payment",
    description:
      "Prepaid vouchers that make EV ownership more accessible with discounts and corporate-friendly options.",
    image: "/About/teraavoucher.png",
    accentColor: "#05DF72",
    features: [
      "Prepaid flexibility",
      "Corporate gifting",
      "Bulk discounts",
      "Instant delivery",
    ],
  },
  {
    id: "mart",
    titleImage: "/teraamartlogo.png",
    subtitle: "EV Marketplace",
    description:
      "A curated marketplace for EV accessories, charging equipment, and sustainable mobility products.",
    image: "/About/teraamart.png",
    accentColor: "#00BFFF",
    features: [
      "EV accessories",
      "Home chargers",
      "Verified quality",
      "Eco products",
    ],
  },
];

/* =======================
   Product Section
======================= */
const ProductSection = ({ data, index }: { data: ProductData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleImg = useTransform(scrollYProgress, [0.2, 0.8], [0.9, 1.05]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 1]);

  const reverse = index % 2 !== 0;

  return (
    <section
      ref={ref}
      id={data.id}
      className="min-h-screen flex items-center px-6 "
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <motion.div style={{ opacity }} className="flex-1 space-y-8">
          <span className="text-[#05DF72] font-mono text-sm tracking-widest">
            0{index + 1} — {data.subtitle}
          </span>

          <Image
    src={data.titleImage}
    alt="image"
    width={420}
    height={120}
    className="mb-2"
    priority={index === 0}
  />

          <p className="text-gray-400 text-lg max-w-lg">
            {data.description}
          </p>

          <ul className="space-y-4 pt-4">
            {data.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 border-b border-white/10 pb-3"
              >
                <span className="w-2 h-2 bg-[#05DF72] rounded-full" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ y: yImg, scale: scaleImg }}
          className="flex-1 h-[60vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900"
        >
          <img
            src={data.image}
            alt="image"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* =======================
   MAIN ABOUT PAGE
======================= */
export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* =======================
          TERA AWATT HERO
      ======================= */}
      <section className="h-auto  py-[12vw] max-sm:py-[10vw] flex flex-col items-center justify-center text-center ">
        <Image
          src="/teraawatt.svg"
          alt="Teraawatt"
          width={420}
          height={120}
          priority
          className=" max-sm:h-[12vw]"
        />

        <div className="max-sm:my-[5vw] max-sm:h-[1vw] max-sm:w-[50%] w-36 h-[6px] bg-red-500 rounded-full my-8" />

        <p className="max-w-3xl text-white/90 text-lg leading-relaxed max-sm:py-[5vw]">
          Driving electric is just the start.
          <br />
          We&apos;re building the connected system that powers every part of your EV journey.
        </p>

        
      </section>

      {/* =======================
          PRODUCTS
      ======================= */}
      {products.map((product, index) => (
        <ProductSection key={product.id} data={product} index={index} />
      ))}

      {/* =======================
          CTA
      ======================= */}
      <section className="py-32 max-sm:p-[5vw] text-center bg-neutral-900 max-sm:m-[5vw] max-sm:rounded-[10vw] max-sm:py-[5vw]">
        <h2 className="text-5xl max-sm:text-[8vw] font-bold mb-8  max-sm:mb-[5vw]">
          Join the Revolution
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10 max-sm:text-[4.5vw]  max-sm:mb-[5vw] ">
          The future of mobility is electric, connected, and rewarding.
        </p>
        <Link href="/connect">
          <button
  className="
    px-10 py-4 max-sm:px-[10vw] max-sm:py-[1vh] max-sm:text-[5vw]
    bg-white/10 backdrop-blur-xl
    text-white font-semibold text-lg
    border border-white/20
    rounded-full
    hover:bg-white/20
    hover:border-white/30
    hover:shadow-[0_8px_32px_rgba(5,223,114,0.2)]
    active:scale-95
    transition-all duration-300
  "
>
  Get Started
</button>
        </Link>
      </section>
    </div>
  );
}
