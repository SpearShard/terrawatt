// // components/Footer.tsx
// "use client";

// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#E5E7EB] p-4 sm:p-6 md:p-[5vw] text-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8">
//         {/* Left side logo */}
//         <div className="relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center gap-4">
//           <Image
//             src="/tblack.svg"
//             alt="Teraawatt Logo"
//             fill
//             className="object-contain"
//           />
//         </div>

//         {/* Middle links */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start text-base sm:text-lg font-medium mt-4 md:mt-0">
//           <a href="#" className="hover:text-green-600 transition">
//             Pulse
//           </a>
//           <a href="#" className="hover:text-green-600 transition">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-green-600 transition">
//             Terms & Conditions
//           </a>
//         </div>
//       </div>

//       {/* Faint horizontal line */}
//       <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"></div>

//       {/* Bottom row */}
//       <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
//         <div>© 2025 Teraawatt. All rights reserved.</div>
//         <div className="mt-2 sm:mt-0">
//           Hyderabad, Telangana &nbsp;•&nbsp; info@teraawatt.com
//         </div>
//       </div>
//     </footer>
//   );
// }









// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

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
    <footer className="bg-[#E5E7EB] lg:p-0 p-4 sm:p-6 md:p-[5vw] text-gray-800 ">
      <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8">
        
        {/* Logo */}
        <div className=" relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center">
          <Image
            src="/tblack.svg"
            alt="Teraawatt Logo"
            fill
            className="object-contain"
          />
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
                className={`w-4 h-4 transition-transform duration-200 ${
                  isComplianceOpen ? "rotate-180" : ""
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
    <div className="absolute -bottom-2 right-6 w-0 h-0 
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

      {/* Bottom Row */}
      <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2">
        <div>© 2026 Teraawatt. All rights reserved.</div>
        <div>Hyderabad, Telangana • info@teraawatt.com</div>
      </div>
    </footer>
  );
}
