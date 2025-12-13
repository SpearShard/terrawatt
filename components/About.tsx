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
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

// --- Types ---
interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  features: string[];
}

// --- Data ---
const products: ProductData[] = [
  {
    id: "coins",
    title: "TeraaCoins",
    subtitle: "Digital Currency",
    description:
      "Our digital currency system that rewards sustainable driving behavior. Earn coins for using our charging network, reducing your carbon footprint, and participating in the green mobility ecosystem.",
    image: "./Teracoins.png",
    accentColor: "#FFD700",
    features: [
      "Earn while you drive",
      "Redeem for charging credits",
      "Exclusive marketplace access",
      "Blockchain-backed security",
    ],
  },
  {
    id: "vouchers",
    title: "TeraaVouchers",
    subtitle: "Flexible Payment",
    description:
      "Flexible payment solutions for EV charging and services. Prepaid vouchers make EV ownership accessible and provide discounts for frequent users of our charging network.",
    image: "./TeraVouchers.png",
    accentColor: "#05DF72",
    features: [
      "Prepaid flexibility",
      "Corporate gifting options",
      "Discounts on bulk purchase",
      "Instant digital delivery",
    ],
  },
  {
    id: "mart",
    title: "TeraaMart",
    subtitle: "EV Marketplace",
    description:
      "Your one-stop marketplace for EV accessories, charging equipment, and sustainable mobility products. Quality products curated specifically for electric vehicle owners.",
    image: "TeraaMart.png",
    accentColor: "#00BFFF",
    features: [
      "Curated EV accessories",
      "Home charging stations",
      "Sustainable merchandise",
      "Verified quality assurance",
    ],
  },
];

// --- Components ---



const ProductSection: React.FC<{ data: ProductData; index: number }> = ({
  data,
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isEven = index % 2 === 0;

  const yImg = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleImg = useTransform(scrollYProgress, [0.2, 0.8], [0.9, 1.1]);
  const opacityContent = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section
      id={data.id}
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
            isEven ? "" : "md:flex-row-reverse"
          }`}
        >
          <motion.div
            style={{ opacity: opacityContent }}
            className="flex-1 space-y-8"
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="block text-[#05DF72] font-mono text-sm tracking-widest uppercase mb-2"
              >
                0{index + 1} — {data.subtitle}
              </motion.span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              {data.title.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block hover:text-[#05DF72] transition-colors duration-300 cursor-default"
                >
                  {char}
                </span>
              ))}
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
              {data.description}
            </p>

            <ul className="space-y-4 pt-4">
              {data.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 text-sm md:text-base border-b border-white/10 pb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[#05DF72]" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="pt-8">
              <button className="group relative px-6 py-3 bg-transparent border border-white/20 rounded-full overflow-hidden">
                <span className="relative z-10 font-bold uppercase text-xs tracking-wider group-hover:text-black transition-colors duration-300">
                  Discover {data.title}
                </span>
                <div className="absolute inset-0 bg-[#05DF72] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </div>
          </motion.div>

          <div className="flex-1 w-full h-[50vh] md:h-[70vh] relative">
            <motion.div
              style={{ y: yImg, scale: scaleImg }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                <div className="w-2 h-2 bg-[#05DF72] rounded-full" />
              </div>
              <div className="absolute bottom-6 left-6 z-20 text-xs font-mono text-[#05DF72]">
                SYSTEM_STATUS: ONLINE
                <br />
                MODULE: {data.id.toUpperCase()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function About() {
  return (
    <div className="bg-[#050505] text-white selection:bg-[#05DF72] selection:text-black min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        body {
          background-color: #050505;
          color: #ffffff;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
        body, p, button, input {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #05DF72;
        }
      `}</style>
      
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <main>
        

        <div className="h-24 w-full bg-gradient-to-b from-[#050505] to-transparent" />

        {products.map((product, index) => (
          <ProductSection key={product.id} data={product} index={index} />
        ))}

        <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-neutral-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
            Join the Revolution
          </h2>
          <p className="max-w-2xl text-gray-400 mb-10 text-lg relative z-10">
            The future of mobility is electric, connected, and rewarding. Don't
            just drive—drive smart.
          </p>
          <button className="relative z-10 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[#05DF72] transition-colors duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </section>
      </main>
    </div>
  );
}