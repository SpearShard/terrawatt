// "use client";

// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);

//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
//   const pathname = usePathname();

//   const TOTAL_FRAMES = 516;
//   const SCROLL_DISTANCE = TOTAL_FRAMES * 6;

//   /* ---------------- FORCE HARD RELOAD FROM PROBLEMATIC PAGES ---------------- */
//   useEffect(() => {
//     const problematicPaths = ["/pulse", "/teraamart", "/teraacharge"];

//     // Use navigation type if available (for back/forward)
//     if (typeof window !== "undefined" && "navigation" in window) {
//       const navEntry = (window.navigation as any).currentEntry;
//       if (navEntry) {
//         const prevUrl = navEntry.url || "";
//         if (problematicPaths.some(p => prevUrl.includes(p)) && pathname === "/investors") {
//           window.location.reload();
//         }
//       }
//     }

//     // Fallback to sessionStorage tracking
//     const prevPath = sessionStorage.getItem("prevPath");
//     sessionStorage.setItem("prevPath", pathname);

//     if (problematicPaths.includes(prevPath || "") && pathname === "/investors") {
//       window.location.reload();
//     }

//     // Always scroll to top
//     window.scrollTo(0, 0);
//     ScrollTrigger.refresh();
//   }, [pathname]);

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     if (!videoRef.current) return;

//     const video = videoRef.current;
//     video.src = "/investwebp/new/invest.webm";
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.crossOrigin = "anonymous";
//     video.load();

//     video.currentTime = 0.01;
//     setTimeout(() => {
//       video.currentTime = 0;
//     }, 300);
//   }, []);

//   /* ---------------- SMOOTH SCRUBBING LOOP ---------------- */
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     let raf: number;
//     let lastTime = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;

//       if (!video.duration || isNaN(video.duration)) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const lerpFactor = Math.min(delta * 18, 1);
//       smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * lerpFactor;

//       const targetTime = smoothProgressRef.current * video.duration;
//       if (Math.abs(video.currentTime - targetTime) > 0.015) {
//         video.currentTime = targetTime;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${SCROLL_DISTANCE}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//       onRefresh: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//     });

//     scrollTriggerRef.current = st;
//     return () => st.kill();
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <>
//       <Navbar />

//       <div className="w-full flex flex-col overflow-hidden bg-[#04111E] min-h-screen">
//         <div ref={containerRef} className="relative w-full bg-[#04111E]">
//           <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#04111E]">
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               style={{ pointerEvents: "none" }}
//               playsInline
//               muted
//             />
//           </div>

//           <div style={{ height: `${SCROLL_DISTANCE}px` }} />
//         </div>

        
//       </div>
//     </>
//   );
// }











"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InvestorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const scrollDistanceRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  const TOTAL_FRAMES = 516;

  /* ---------------- MOBILE DETECTION ---------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- SCROLL DISTANCE ---------------- */
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) return TOTAL_FRAMES * 2;
      if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
      return TOTAL_FRAMES * 6;
    };

    scrollDistanceRef.current = calc();
    ScrollTrigger.refresh();
  }, []);

  /* ---------------- VIDEO SETUP ---------------- */
  useEffect(() => {
    if (!videoRef.current || !bgVideoRef.current) return;

    // Foreground (main) video
    const fg = videoRef.current;
    fg.src = "/investwebp/new/invest.webm";
    fg.muted = true;
    fg.playsInline = true;
    fg.preload = "auto";
    fg.load();

    // Background video (same source, blurred)
    const bg = bgVideoRef.current;
    bg.src = "/investwebp/new/invest.webm";
    bg.muted = true;
    bg.playsInline = true;
    bg.loop = true;
    bg.preload = "auto";
    bg.load();
  }, []);

  /* ---------------- SCRUB LOOP ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number;
    let last = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;

      if (!video.duration) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const speed = isMobile ? 8 : 18;
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) *
        Math.min(delta * speed, 1);

      const target = smoothProgressRef.current * video.duration;
      if (Math.abs(video.currentTime - target) > 0.015) {
        video.currentTime = target;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isMobile]);

  /* ---------------- SCROLLTRIGGER ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.getAll().forEach(st => st.kill());

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollDistanceRef.current}px`,
      pin: true,
      anticipatePin: 1,
      onUpdate: self => (rawProgressRef.current = self.progress),
    });

    return () => st.kill();
  }, []);

  /* ---------------- JSX ---------------- */
  return (
    <>
      <Navbar />

      <div className="relative  w-full min-h-screen bg-black overflow-hidden">
        {/* 🔹 BLURRED BACKGROUND (MOBILE ONLY) */}
        <div className="absolute inset-0 z-0 sm:hidden">
          <video
            ref={bgVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-fit object-cover scale-110 blur-2xl opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 🔹 FOREGROUND VIDEO */}
        <div
          ref={containerRef}
          className="relative z-10 w-full overflow-hidden"
        >
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full h-full max-h-screen aspect-[16/9] flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-contain sm:object-cover"
                muted
                playsInline
              />
            </div>
          </div>

          <div style={{ height: `${scrollDistanceRef.current}px` }} />
        </div>
      </div>
    </>
  );
}

