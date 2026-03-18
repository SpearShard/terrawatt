"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* Back Button */}
      <button
       onClick={() => {
  const scroll = sessionStorage.getItem("scrollPosition");

  router.push("/");

  if (scroll) {
    setTimeout(() => {
      window.scrollTo({
        top: parseInt(scroll),
        behavior: "smooth",
      });
    }, 200);
  }
}}
        className="absolute top-6 left-4 sm:top-8 sm:left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        ← Back
      </button>

      {/* Logo */}
      <Image
        src="/teraawatt-white.svg"
        alt="Teraawatt"
        width={280}
        height={100}
        className="mb-10 w-[70vw] sm:w-[45vw] "
      />

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight">
        App Launching Soon
      </h1>

      {/* Description */}
      <p className="text-neutral-400 mt-4 text-center max-w-xl text-sm sm:text-base px-2">
        The Teraawatt mobile experience is almost here.
        Recharge • Renew • Repurpose — directly from your phone.
      </p>

      {/* Store Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center">

        {/* Apple Store */}
        <div className="relative group cursor-not-allowed opacity-70">
          <Image
            src="/apple.svg"
            alt="App Store"
            width={170}
            height={50}
            className="w-[150px] sm:w-[170px]"
          />

          
        </div>

        {/* Google Play */}
        <div className="relative group cursor-not-allowed opacity-70">
          <Image
            src="/google.svg"
            alt="Google Play"
            width={190}
            height={55}
            className="w-[165px] sm:w-[190px]"
          />

          
        </div>

      </div>

      {/* Subtle Glow Background */}
      <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-green-500/10 blur-[140px] rounded-full -z-10" />

    </main>
  );
}