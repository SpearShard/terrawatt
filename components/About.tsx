// "use client";

// import React, { memo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// /* =======================
//    Types
// ======================= */
// interface ProductData {
//   id: string;
//   titleImage: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   accentColor: string;
//   features: string[];
// }

// /* =======================
//    Static Data
// ======================= */
// const products: ProductData[] = [
//   {
//     id: "charge",
//     titleImage: "/teraaCharge.png",
//     subtitle: "The Charging Network",
//     description:
//       "Access the fastest and most reliable EV charging network. Find stations, manage charging sessions, and view real-time availability all from one seamless platform.",
//     image: "/About/teraacharge.jpg",
//     accentColor: "#22D3EE",
//     features: [
//       "Real-time station availability",
//       "Fast & Ultra-fast charging",
//       "Seamless app integration",
//       "24/7 support",
//     ],
//   },
//   {
//     id: "coins",
//     titleImage: "/teraacoins.png",
//     subtitle: "Digital Currency",
//     description:
//       "A reward system for sustainable driving. Earn coins for charging, eco-driving, and participating in the green mobility ecosystem.",
//     image: "/About/teraacoins.png",
//     accentColor: "#FFD700",
//     features: [
//       "Earn while you drive",
//       "Redeem for charging",
//       "Marketplace access",
//       "Secure & digital",
//     ],
//   },
//   {
//     id: "vouchers",
//     titleImage: "/teraavouchers.png",
//     subtitle: "Flexible Payment",
//     description:
//       "Prepaid vouchers that make EV ownership more accessible with discounts and corporate-friendly options.",
//     image: "/About/teraavoucher.png",
//     accentColor: "#05DF72",
//     features: [
//       "Prepaid flexibility",
//       "Corporate gifting",
//       "Bulk discounts",
//       "Instant delivery",
//     ],
//   },
//   {
//     id: "mart",
//     titleImage: "/teraamartlogo.png",
//     subtitle: "EV Marketplace",
//     description:
//       "A curated marketplace for EV accessories, charging equipment, and sustainable mobility products.",
//     image: "/About/teraamart.png",
//     accentColor: "#00BFFF",
//     features: [
//       "EV accessories",
//       "Home chargers",
//       "Verified quality",
//       "Eco products",
//     ],
//   },
// ];

// /* =======================
//    Product Section
// ======================= */
// const ProductSection = memo(
//   ({ data, index }: { data: ProductData; index: number }) => {
//     const reverse = index % 2 !== 0;

//     return (
//       <section id={data.id} className="min-h-screen flex items-center px-6">
//         <div
//           className={`container mx-auto flex flex-col md:flex-row items-center gap-16 ${
//             reverse ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-120px" }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="flex-1 space-y-8"
//           >
//             <span className="text-[#05DF72] font-mono text-sm tracking-widest">
//               0{index + 1} — {data.subtitle}
//             </span>

//             <Image
//               src={data.titleImage}
//               alt={data.subtitle}
//               width={420}
//               height={120}
//               priority={index === 0}
//             />

//             <p className="text-gray-400 text-lg max-w-lg">
//               {data.description}
//             </p>

//             <ul className="space-y-4 pt-4">
//               {data.features.map((f) => (
//                 <li
//                   key={f}
//                   className="flex items-center gap-3 border-b border-white/10 pb-3"
//                 >
//                   <span className="w-2 h-2 bg-[#05DF72] rounded-full" />
//                   {f}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* IMAGE CONTAINER (NO OPACITY HERE) */}
//           <motion.div
//             initial={{ scale: 0.95 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true, margin: "-120px" }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="relative flex-1 h-[60vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900"
//             style={{ willChange: "transform" }}
//           >
//             {/* IMAGE FADES IN SEPARATELY */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, margin: "-120px" }}
//               transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={data.image}
//                 alt={data.subtitle}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//                 placeholder="empty"
//                 unoptimized
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     );
//   }
// );

// ProductSection.displayName = "ProductSection";

// /* =======================
//    MAIN ABOUT PAGE
// ======================= */
// export default function About() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* HERO */}
//       <section className="py-[12vw] flex flex-col items-center justify-center text-center">
//         <Image
//           src="/teraawatt.svg"
//           alt="Teraawatt"
//           width={420}
//           height={120}
//           priority
//         />

//         <div className="w-36 h-[6px] bg-red-500 rounded-full my-8" />

//         <p className="max-w-3xl text-white/90 text-lg leading-relaxed">
//           Driving electric is just the start.
//           <br />
//           We&apos;re building the connected system that powers every part of your EV journey.
//         </p>
//       </section>

//       {/* PRODUCTS */}
//       {products.map((product, index) => (
//         <ProductSection key={product.id} data={product} index={index} />
//       ))}

//       {/* CTA */}
//       <section className="py-32 text-center bg-neutral-900 mx-6 rounded-3xl">
//         <h2 className="text-5xl font-bold mb-8">Join the Revolution</h2>

//         <p className="max-w-2xl mx-auto text-gray-400 mb-10">
//           The future of mobility is electric, connected, and rewarding.
//         </p>

//         <Link href="/connect">
//           <button className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(5,223,114,0.2)] transition-all">
//             Get Started
//           </button>
//         </Link>
//       </section>
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
    titleImage: "/teraacharge.png",
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
    transition-all duration-300 cursor-pointer
  "
>
  Get Started
</button>
        </Link>
      </section>
    </div>
  );
}
