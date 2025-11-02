// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// export default function Navbar() {
//   const navbarRef = useRef<HTMLDivElement>(null);
//   const progressRef = useRef<HTMLDivElement>(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrollPercent = (scrollTop / docHeight) * 100;

//       setIsScrolled(scrollTop > 50);

//       if (progressRef.current) {
//         gsap.to(progressRef.current, {
//           width: `${scrollPercent}%`,
//           duration: 0.3,
//           ease: "power1.out",
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     "Pulse",
//     "TeraaMart",
//     "TeraaCharger",
//     "Investors",
//     "Partners",
//     "Insights",
//     "Connect",
//   ];

//   return (
//     <div
//       ref={navbarRef}
//       className={`fixed top-0 left-0 w-full z-50 bg-black flex items-center px-4 sm:px-6 md:px-10 transition-all duration-300 ${
//         isScrolled ? "h-14 sm:h-16" : "h-20 sm:h-24"
//       }`}
//     >
//       {/* 🔰 Logo on the left */}
//       <div className="h-[8vw] sm:h-[5vw] md:h-[2.5vw] w-auto relative">
//         <Image
//           src="https://teraawatt.com/layer-1.svg"
//           alt="Teraawatt Logo"
//           width={120}
//           height={60}
//           className="object-contain"
//         />
//       </div>

//       {/* 🧭 Navigation links - Hidden on mobile, visible on md+ */}
//       <div className="hidden md:flex ml-auto gap-6 lg:gap-10 text-white font-semibold tracking-wide text-sm lg:text-base">
//         {navItems.map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="relative group transition-colors duration-300"
//           >
//             {item}
//             {/* Green underline on hover */}
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#05df72] transition-all duration-300 group-hover:w-full"></span>
//           </a>
//         ))}
//       </div>

//       {/* 📱 Mobile menu button */}
//       <button
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="md:hidden ml-auto text-white text-2xl"
//       >
//         ☰
//       </button>

//       {/* 💚 Green scroll progress line */}
//       <div
//         className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#05df72]"
//         ref={progressRef}
//       ></div>

//       {/* 📱 Mobile menu dropdown */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col gap-4 p-4 border-t border-gray-700">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-white hover:text-[#05df72] transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Pulse");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Pulse",
    "TeraaMart",
    "TeraaCharge",
    "Investors",
    "Partners",
    "Insights",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://teraawatt.com/layer-1.svg"
            alt="TeraaWatt Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative pb-1 transition-all duration-200 ${
                active === item ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}

          {/* Connect button */}
          <button className="ml-4 px-5 py-2 rounded-full font-semibold text-black bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 transition">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
