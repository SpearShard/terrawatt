// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "@/components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const bgVideoRef = useRef<HTMLVideoElement>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);

//   const [isMobile, setIsMobile] = useState(false);

//   const TOTAL_FRAMES = 516;

//   /* ---------------- MOBILE DETECTION ---------------- */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ---------------- SCROLL DISTANCE ---------------- */
//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return TOTAL_FRAMES * 2;
//       if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
//       return TOTAL_FRAMES * 6;
//     };

//     scrollDistanceRef.current = calc();
//     ScrollTrigger.refresh();
//   }, []);

//   /* ---------------- VIDEO SETUP + WAKE ---------------- */
//   /* ---------------- VIDEO SETUP + HARD WAKE ---------------- */
// useEffect(() => {
//   if (!videoRef.current || !bgVideoRef.current) return;

//   const wake = async (video: HTMLVideoElement) => {
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";

//     try {
//       await video.play();   // 🔥 forces decode
//       video.pause();        // stop immediately
//       video.currentTime = 0;
//     } catch {
//       // autoplay blocked? fallback
//       video.currentTime = 0.01;
//       setTimeout(() => (video.currentTime = 0), 200);
//     }
//   };

//   const fg = videoRef.current;
//   fg.src = "/investwebp/invest.mp4";
//   fg.load();
//   wake(fg);

//   const bg = bgVideoRef.current;
//   bg.src = "/investwebp/invest.mp4";
//   bg.loop = true;
//   bg.load();
//   wake(bg);
// }, []);


//   /* ---------------- SCRUB LOOP ---------------- */
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     let raf: number;
//     let last = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       if (!video.duration || isNaN(video.duration)) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const speed = isMobile ? 8 : 18;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         Math.min(delta * speed, 1);

//       const target = smoothProgressRef.current * video.duration;
//       if (Math.abs(video.currentTime - target) > 0.015) {
//         video.currentTime = target;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [isMobile]);

//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     ScrollTrigger.getAll().forEach(st => st.kill());

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: self => (rawProgressRef.current = self.progress),
//     });

//     return () => st.kill();
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <>
//       <Navbar />

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         {/* MOBILE BLURRED BACKGROUND */}
//         <div className="fixed inset-0 z-0 sm:hidden">
//           <video
//             ref={bgVideoRef}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-screen h-screen object-cover blur-2xl opacity-70"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         {/* FOREGROUND */}
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="w-full h-full max-h-screen flex items-center justify-center">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-contain sm:object-cover"
//                 muted
//                 playsInline
//               />
//             </div>
//           </div>

//           <div style={{ height: `${scrollDistanceRef.current}px` }} />
//         </div>
//       </div>

//       <div className="relative">
//         <Footer />
//       </div>
//     </>
//   );
// }













"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function InvestorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const scrollDistanceRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  const TOTAL_FRAMES = 516;

  /* ---------------- MOBILE ---------------- */
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

  /* ---------------- VIDEO HARD WAKE ---------------- */
  useEffect(() => {
    if (!videoRef.current || !bgVideoRef.current) return;

    const fg = videoRef.current;
    const bg = bgVideoRef.current;

    fg.src = "/investwebp/invest.mp4";
    fg.muted = true;
    fg.playsInline = true;
    fg.preload = "auto";

    bg.src = "/investwebp/invest.mp4";
    bg.muted = true;
    bg.playsInline = true;
    bg.loop = true;
    bg.preload = "auto";

    fg.load();
    bg.load();

    const wake = async () => {
      try {
        await fg.play();
        fg.pause();
        fg.currentTime = 0;

        await bg.play();
        bg.pause();
        bg.currentTime = 0;
      } catch {
        fg.currentTime = 0.01;
        bg.currentTime = 0.01;
        setTimeout(() => {
          fg.currentTime = 0;
          bg.currentTime = 0;
        }, 200);
      }

      setReady(true); // 🔥 now safe to scrub
    };

    fg.addEventListener("loadeddata", wake, { once: true });
  }, []);

  /* ---------------- SCRUB LOOP ---------------- */
  useEffect(() => {
    if (!ready) return;

    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let last = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;

      if (!video.duration || isNaN(video.duration)) {
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
  }, [isMobile, ready]);

  /* ---------------- SCROLLTRIGGER ---------------- */
  useEffect(() => {
    if (!containerRef.current || !ready) return;

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
  }, [ready]);

  /* ---------------- JSX ---------------- */
  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* MOBILE BLUR */}
        <div className="fixed inset-0 z-0 sm:hidden">
          <video
            ref={bgVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-screen h-screen object-cover blur-2xl opacity-70"
          />
          <div className="inset-0 bg-black/40" />
        </div>

        {/* FOREGROUND */}
        <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-contain lg:object-fill sm:object-cover"
                muted
                playsInline
              />
            </div>
          </div>

          
        </div>
      </div>

      <div className="relative">
        <Footer/>
      </div>
    </>
  );
}
















// Optimized version 

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "@/components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const bgVideoRef = useRef<HTMLVideoElement>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);

//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const [isMobile, setIsMobile] = useState(false);

//   /* ---------------- MOBILE DETECTION ---------------- */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ---------------- SCROLL DISTANCE ---------------- */
//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return 1000;
//       if (window.innerWidth < 1024) return 2000;
//       return 3000;
//     };

//     const update = () => {
//       scrollDistanceRef.current = calc();
//       ScrollTrigger.refresh();
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     if (!videoRef.current || !bgVideoRef.current) return;

//     const fg = videoRef.current;
//     fg.src = "/investwebp/invest.mp4";
//     fg.muted = true;
//     fg.playsInline = true;
//     fg.preload = "auto";
//     fg.load();

//     // Safari warmup
//     fg.currentTime = 0.01;
//     setTimeout(() => (fg.currentTime = 0), 200);

//     const bg = bgVideoRef.current;
//     bg.src = "/investwebp/invest.mp4";
//   }, []);

//   /* ---------------- SCRUB LOOP ---------------- */
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     let raf = 0;
//     let lastTime = performance.now();
//     let lastRender = 0;
//     let duration = 0;

//     const animate = (time: number) => {
//       // cap ~60fps
//       if (time - lastRender < 16) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       lastRender = time;

//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;

//       if (!duration && video.duration) duration = video.duration;
//       if (!duration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       // exponential smoothing
//       const damping = 1 - Math.exp(-delta * (isMobile ? 8 : 18));
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) * damping;

//       const target = smoothProgressRef.current * duration;
//       const diff = Math.abs(video.currentTime - target);

//       // avoid micro seeks
//       if (diff > 0.03) {
//         video.currentTime = target;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [isMobile]);

//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     scrollTriggerRef.current?.kill();

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
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

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         {/* MOBILE BLUR BG */}
//         <div className="fixed inset-0 z-0 sm:hidden">
//           <video
//             ref={bgVideoRef}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-screen h-screen object-cover blur-2xl opacity-70"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         {/* FOREGROUND */}
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <video
//               ref={videoRef}
//               className="w-full h-full object-contain sm:object-cover"
//               muted
//               playsInline
//             />
//           </div>

//           <div style={{ height: `${scrollDistanceRef.current}px` }} />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
