"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function About() {
  // motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // create transforms for tilt effect
  const rotateX = useTransform(mouseY, (y) => -y / 70); // tilt up/down
  const rotateY = useTransform(mouseX, (x) => x / 70);  // tilt left/right
//   const translateX = useTransform(mouseX, (x) => x / 60);
//   const translateY = useTransform(mouseY, (y) => y / 60);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 gap-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo with tilt effect */}
      <motion.div
        style={{ rotateX, rotateY, }}
        className="relative w-[30vw] h-[30vh] perspective-1000"
      >
        <Image
          src="https://teraawatt.com/teraawattLogo.png"
          alt="Teraawatt Logo"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.p
        style={{ rotateX, rotateY,}}
        className="text-center max-w-3xl text-xl md:text-2xl leading-relaxed"
      >
        We're creating a connected ecosystem that powers your EV, your journeys, and your lifestyle.
      </motion.p>

      {/* Green Button */}
      <motion.button
        style={{ rotateX, rotateY,  }}
        whileHover={{ scale: 1.1 }}
        className="bg-green-500 hover:bg-green-600 transition-all text-black font-bold py-3 px-6 rounded-full"
      >
        Explore our solutions
      </motion.button>

      {/* Recharge Image */}
      <motion.div
        style={{ rotateX, rotateY,  }}
        className="relative w-full max-w-3xl h-64 md:h-96"
      >
        <Image
          src="https://teraawatt.com/recharge.png"
          alt="Recharge"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Text Sections */}
      <motion.div
        style={{ rotateX, rotateY,  }}
        className="flex text-center flex-col gap-10 max-w-4xl"
      >
        <p className="text-lg md:text-xl">
          We make EV driving easier with seamless charging, AI-powered trip planning, and a vision to make EVs as accessible as petrol cars for cities and beyond
        </p>

        <h2 className="text-[4vw] font-bold">Our <span className="text-[#05DF72]">Products</span></h2>
        <p>Comprehensive solutions for the future of electric mobility</p>

        <h3 className="text-[4vw] font-bold">TeraaCoins</h3>
        <p>
          Our digital currency system that rewards sustainable driving behavior. Earn coins for using our charging network, reducing carbon footprint, and participating in our green mobility ecosystem.
        </p>

        <h3 className="text-[4vw] font-bold">TeraaVouchers</h3>
        <p>
          Flexible payment solutions for EV charging and services. Prepaid vouchers that make EV ownership more accessible and provide discounts for frequent users of our charging network.
        </p>

        <h3 className="text-[4vw] font-bold">TeraaMart</h3>
        <p>
          Your one-stop marketplace for EV accessories, charging equipment, and sustainable mobility products. Quality products curated specifically for electric vehicle owners and enthusiasts.
        </p>
      </motion.div>
    </div>
  );
}
