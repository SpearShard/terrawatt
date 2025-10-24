// components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#E5E7EB] p-[5vw]  text-gray-800 ">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Left side logo */}
        <div className="relative flex h-[15vh] w-[25vw]  items-center gap-4">
          <Image
            src="https://teraawatt.com/teraawatt-logo-3.png"
            alt="Teraawatt Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Middle links */}
        <div className="flex gap-8 justify-center md:justify-start text-lg font-medium mt-4 md:mt-0">
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
      <div className="border-t border-gray-300 mx-6 md:mx-0"></div>

      {/* Bottom row */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <div>© 2025 Teraawatt. All rights reserved.</div>
        <div className="mt-2 md:mt-0">
          Hyderabad, Telangana &nbsp;•&nbsp; info@teraawatt.com
        </div>
      </div>
    </footer>
  );
}
