// "use client";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import { Urbanist } from "next/font/google";
// import { useRef } from "react";

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

// export default function Connect() {
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   return (
//     <>
//       <Navbar />

//       <div className="relative min-h-[300vh] overflow-hidden">

//         {/* 🔥 Smooth Looping Video Background */}
//         <video
//           ref={videoRef}
//           src="/Contact_page/robotenv.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Subtle dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* MAIN CONTENT */}
//         <div
//           className={`absolute bottom-[20vw] w-full text-center px-6 py-20 ${urbanist.className}`}
//         >
//           {/* Title */}
//           <h2 className="text-[5vw] font-semibold text-[#00B0FF] leading-[100%]">
//             Let&apos;s Power the Future,<br />Together
//           </h2>

//           {/* Subtitle */}
//           <p className="mt-4 text-[38px] font-medium text-[#08638F] leading-[100%]">
//             Whether you&apos;re an EV owner, a charging partner,<br />
//             a business, or an investor—we'd love to connect with you.
//           </p>

//           {/* Keep in touch */}
//           <p className="mt-6 text-[37px] text-gray-300 leading-[46px]">
//             Keep in touch with us
//           </p>

//           {/* Contact Button */}
//           <Link
//             href="mailto:Support@teraawatt.com"
//             className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition"
//           >
//             <span className="h-[30px] w-[30px] bg-[url('/Contact_page/mail.svg')] bg-contain bg-no-repeat" />
//             <span className="text-white text-[20px] font-medium">
//               Support@teraawatt.com
//             </span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }





"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import { useRef } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Connect() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <Navbar />

      
      <div className="relative h-[250vh] overflow-hidden">

        {/* 🔥 Smooth Looping Video Background */}
        <video
          ref={videoRef}
          src="/Contact_page/robotenv.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute  w-full h-fit object-cover"
        />

        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

        
        <div
          className={`
            absolute w-full text-center px-6 z-10
              max-sm:top-[75vw] max-sm:bottom-0 md:bottom-[10vw] 
            ${urbanist.className}
          `}
        >
          
          <h2 className="text-4xl md:text-[5vw] font-semibold text-[#00B0FF] leading-tight md:leading-[100%]">
            Let&apos;s Power the Future,<br className="hidden md:block" /> Together
          </h2>

          {/* Subtitle 
              Mobile: text-base (Readable paragraph)
              Desktop: text-[38px] (Original large text)
          */}
          <p className="mt-4 md:mt-4 text-base md:text-[38px] font-medium text-[#08638F] leading-snug md:leading-[100%] max-w-sm md:max-w-none mx-auto">
            Whether you&apos;re an EV owner, a charging partner,<br className="hidden md:block" />
            a business, or an investor—we&apos;d love to connect with you.
          </p>

          {/* Keep in touch 
              Mobile: text-lg
              Desktop: text-[37px]
          */}
          <p className="mt-8 md:mt-6 text-lg md:text-[37px] text-gray-300 leading-normal md:leading-[46px]">
            Keep in touch with us
          </p>

          {/* Contact Button */}
          <Link
            href="mailto:Support@teraawatt.com"
            className="mt-6 md:mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 hover:bg-white/20 transition group"
          >
            {/* Icon size adjusted for mobile/desktop */}
            <span className="h-[24px] w-[24px] md:h-[30px] md:w-[30px] bg-[url('/Contact_page/mail.svg')] bg-contain bg-no-repeat opacity-90 group-hover:opacity-100" />
            
            {/* Text size adjusted */}
            <span className="text-white text-base md:text-[20px] font-medium">
              Support@teraawatt.com
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}