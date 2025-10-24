// components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#E5E7EB] p-4 sm:p-6 md:p-[5vw] text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8">
        {/* Left side logo */}
        <div className="relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center gap-4">
          <Image
            src="https://teraawatt.com/teraawatt-logo-3.png"
            alt="Teraawatt Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Middle links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start text-base sm:text-lg font-medium mt-4 md:mt-0">
          <a href="#" className="hover:text-green-600 transition">
            Pulse
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Faint horizontal line */}
      <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"></div>

      {/* Bottom row */}
      <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
        <div>© 2025 Teraawatt. All rights reserved.</div>
        <div className="mt-2 sm:mt-0">
          Hyderabad, Telangana &nbsp;•&nbsp; info@teraawatt.com
        </div>
      </div>
    </footer>
  );
}
