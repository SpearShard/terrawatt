// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import { ChevronDown } from "lucide-react";

// export default function Footer() {
//   const [isComplianceOpen, setIsComplianceOpen] = useState(false);
//   const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const openDropdown = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setIsComplianceOpen(true);
//   };

//   const closeDropdownWithDelay = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setIsComplianceOpen(false);
//     }, 300); // ⏱️ adjust to taste (200–400ms feels best)
//   };

//   const closeDropdownImmediately = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setIsComplianceOpen(false);
//   };

//   return (
//     <footer className="bg-[#FFFFFF] lg:p-0 p-4 sm:p-6 md:p-[5vw] text-gray-800 ">
//       <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8">

//         {/* Logo */}
//         <div className=" relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center">
//           <Image
//             src="/teraawatt-black.svg"
//             alt="Teraawatt Logo"
//             fill
//             className="object-contain"
//           />
//         </div>

//         {/* Links */}
//         <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center md:justify-start text-base sm:text-lg mt-4 md:mt-0 lg:align-middle">
//           <Link href="/privacy-policy" className="hover:text-green-600 transition">
//             Privacy Policy
//           </Link>

//           <Link href="/terms" className="hover:text-green-600 transition">
//             Terms & Conditions
//           </Link>

//           {/* Compliance Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={openDropdown}
//             onMouseLeave={closeDropdownWithDelay}
//           >
//             <button
//               className="flex items-center gap-1 hover:text-green-600 transition focus:outline-none whitespace-nowrap"
//               onClick={() =>
//                 isComplianceOpen
//                   ? closeDropdownImmediately()
//                   : openDropdown()
//               }
//               aria-expanded={isComplianceOpen}
//               aria-haspopup="true"
//             >
//               Compliance
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-200 ${isComplianceOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </button>

//             {/* Dropdown Menu */}
//             {isComplianceOpen && (
//               <div
//                 className="absolute right-0 bottom-full mb-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50"
//                 onMouseEnter={openDropdown}
//                 onMouseLeave={closeDropdownWithDelay}
//               >
//                 {/* ▼ Triangle Pointer */}
//                 <div className="absolute -bottom-2 left-6 md:left-auto md:right-6 w-0 h-0 
//   border-l-8 border-l-transparent
//   border-r-8 border-r-transparent
//   border-t-8 border-t-white"
//                 />

//                 <Link
//                   href="/dcs"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Data and Security Compliance
//                 </Link>

//                 <Link
//                   href="/isc"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Industry-Specific Compliance
//                 </Link>

//                 <Link
//                   href="/pgc"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Payment Gateway Compliance
//                 </Link>

//                 <Link
//                   href="/cgln"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Corporate Governance and Legal Notice
//                 </Link>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0" />

//       {/* Bottom Row */}
//       <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2">
//         <div>© 2026 Teraawatt. All rights reserved.</div>
//         <div>Hyderabad, Telangana • info@teraawatt.com</div>
//       </div>
//     </footer>
//   );
// }











"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, Linkedin, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";

import { SiX } from "react-icons/si";

export default function Footer() {
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsComplianceOpen(true);
  };

  const closeDropdownWithDelay = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsComplianceOpen(false);
    }, 300); // ⏱️ adjust to taste (200–400ms feels best)
  };

  const closeDropdownImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsComplianceOpen(false);
  };

  return (
    <footer className="bg-[#FFFFFF] lg:p-0 p-4 sm:p-6 md:p-[5vw] text-gray-800 ">
      <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8">

        {/* Logo */}
        <div className="flex items-center max-sm:flex-col  gap-6 max-sm:gap-1">

          {/* Logo */}
          <div className="relative  flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw]  max-sm:mr-auto  items-center">
            <Image
              src="/teraawatt-black.svg"
              alt="Teraawatt Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* App Download Buttons */}
          <div className="flex items-center  gap-3">

            <Link
  href="/coming-soon"
  onClick={() => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  }}
>
              <Image
                src="/apple.svg"
                alt="Download on App Store"
                width={130}
                height={40}
                className="object-contain"
              />
            </Link>

            <Link
  href="/coming-soon"
  onClick={() => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  }}
>
              <Image
                src="/google.svg"
                alt="Get it on Google Play"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>

          </div>

        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center md:justify-start text-base sm:text-lg mt-4 md:mt-0 lg:align-middle">
          <Link href="/privacy-policy" className="hover:text-green-600 transition">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-green-600 transition">
            Terms & Conditions
          </Link>

          {/* Compliance Dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownWithDelay}
          >
            <button
              className="flex items-center gap-1 hover:text-green-600 transition focus:outline-none whitespace-nowrap"
              onClick={() =>
                isComplianceOpen
                  ? closeDropdownImmediately()
                  : openDropdown()
              }
              aria-expanded={isComplianceOpen}
              aria-haspopup="true"
            >
              Compliance
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isComplianceOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isComplianceOpen && (
              <div
                className="absolute right-0 bottom-full mb-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                {/* ▼ Triangle Pointer */}
                <div className="absolute -bottom-2 left-6 md:left-auto md:right-6 w-0 h-0 
  border-l-8 border-l-transparent
  border-r-8 border-r-transparent
  border-t-8 border-t-white"
                />

                <Link
                  href="/dcs"
                  className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
                  onClick={closeDropdownImmediately}
                >
                  Data and Security Compliance
                </Link>

                <Link
                  href="/isc"
                  className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
                  onClick={closeDropdownImmediately}
                >
                  Industry-Specific Compliance
                </Link>

                <Link
                  href="/pgc"
                  className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
                  onClick={closeDropdownImmediately}
                >
                  Payment Gateway Compliance
                </Link>

                <Link
                  href="/cgln"
                  className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
                  onClick={closeDropdownImmediately}
                >
                  Corporate Governance and Legal Notice
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0" />

      {/* Social + Tagline */}
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Tagline */}
        <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
          <span className="font-semibold text-gray-800">Recharge • Renew • Repurpose</span> —
          Building the next big thing in EV tech.
          For drivers, dreamers & disruptors who believe the future is electric.
        </p>

        <span className="text-xs tracking-[0.25em] uppercase text-gray-500">
          Stay Charged
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          <Link
            href="https://in.linkedin.com/company/teraawatt"
            target="_blank"
            className="group p-3 rounded-full bg-gray-100 hover:bg-[#0077B5]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin
              size={18}
              className="text-gray-600 group-hover:text-[#0077B5] transition"
            />
          </Link>

          <Link
            href="https://www.instagram.com/teraawatt"
            target="_blank"
            className="group p-3 rounded-full bg-gray-100 hover:bg-pink-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FaInstagram
              size={18}
              className="text-gray-600 group-hover:text-pink-500 transition"
            />
          </Link>

          <Link
            href="https://x.com/teraawatt"
            target="_blank"
            className="group p-3 rounded-full bg-gray-100 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1"
          >
            <SiX
              size={18}
              className="text-gray-600 group-hover:text-black transition"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@teraawatt"
            target="_blank"
            className="group p-3 rounded-full bg-gray-100 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FaYoutube
              size={18}
              className="text-gray-600 group-hover:text-red-500 transition"
            />
          </Link>

          <Link
            href="https://www.facebook.com/teraawatt"
            target="_blank"
            className="group p-3 rounded-full bg-gray-100 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FaFacebook
              size={18}
              className="text-gray-600 group-hover:text-blue-600 transition"
            />
          </Link>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2">
        <div>© 2026 Teraawatt. All rights reserved.</div>
        <div>Hyderabad, Telangana • info@teraawatt.com</div>
      </div>
    </footer>
  );
}