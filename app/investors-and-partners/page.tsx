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
//   const [ready, setReady] = useState(false);

//   const TOTAL_FRAMES = 516;

//   /* ---------------- MOBILE ---------------- */
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

//   /* ---------------- VIDEO HARD WAKE ---------------- */
//   useEffect(() => {
//     if (!videoRef.current || !bgVideoRef.current) return;

//     const fg = videoRef.current;
//     const bg = bgVideoRef.current;

//     // Pick the right video based on viewport
//     const src = isMobile
//       ? "/investwebp/investor_ultra_android.mp4"
//       : "/investwebp/out.mp4";

//     fg.src = src;
//     fg.muted = true;
//     fg.playsInline = true;
//     fg.preload = "auto";

//     bg.src = src;
//     bg.muted = true;
//     bg.playsInline = true;
//     bg.loop = true;
//     bg.preload = "auto";

//     fg.load();
//     bg.load();

//     setReady(false); // reset while new video loads

//     const wake = async () => {
//       try {
//         await fg.play();
//         fg.pause();
//         fg.currentTime = 0;

//         await bg.play();
//         bg.pause();
//         bg.currentTime = 0;
//       } catch {
//         fg.currentTime = 0.01;
//         bg.currentTime = 0.01;
//         setTimeout(() => {
//           fg.currentTime = 0;
//           bg.currentTime = 0;
//         }, 200);
//       }

//       setReady(true); // 🔥 now safe to scrub
//     };

//     fg.addEventListener("loadeddata", wake, { once: true });

//     return () => {
//       fg.removeEventListener("loadeddata", wake);
//     };
//   }, [isMobile]); // re-run when mobile/desktop switches

//   /* ---------------- SCRUB LOOP ---------------- */
//   useEffect(() => {
//     if (!ready) return;

//     const video = videoRef.current;
//     if (!video) return;

//     let raf = 0;
//     let last = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       if (!video.duration || isNaN(video.duration)) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const speed = isMobile ? 1 : 12;
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
//   }, [isMobile, ready]);

//   /* ---------------- VIDEO EVENT LISTENER ---------------- */
//   useEffect(() => {
//     if (!ready) return;
//     const handler = () => {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0;
//         videoRef.current.play();
//       }
//     };
//     window.addEventListener('triggerVideoJump', handler);
//     return () => window.removeEventListener('triggerVideoJump', handler);
//   }, [ready]);

//   /* ---------------- SCROLLTRIGGER ---------------- */
//   const localScrollTriggerRef = useRef<ScrollTrigger | null>(null);

// useEffect(() => {
//   if (!containerRef.current || !ready) return;

//   // Kill ONLY the trigger created by this component (if exists)
//   if (localScrollTriggerRef.current) {
//     localScrollTriggerRef.current.kill();
//     localScrollTriggerRef.current = null;
//   }

//   // Create new trigger
//   const st = ScrollTrigger.create({
//     trigger: containerRef.current,
//     start: "top top",
//     end: `+=${scrollDistanceRef.current}px`,
//     pin: true,
//     anticipatePin: 1,
//     onUpdate: self => {
//       rawProgressRef.current = self.progress;
//     },
//   });

//   // Store reference
//   localScrollTriggerRef.current = st;

//   // Cleanup only this trigger
//   return () => {
//     st.kill();
//     localScrollTriggerRef.current = null;
//   };

// }, [ready]);

//   /* ---------------- JSX ---------------- */
//   return (
//     <>
//       <Navbar />

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         {/* MOBILE BLUR */}
//         <div className="fixed inset-0 z-0 sm:hidden">
//           <video
//             ref={bgVideoRef}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-screen h-screen object-cover blur-2xl opacity-70"
//           />
//           <div className="inset-0 bg-black/40" />
//         </div>

//         {/* FOREGROUND */}
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="w-full h-full flex items-center justify-center">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-contain lg:object-fill sm:object-cover"
//                 muted
//                 playsInline
//               />
//             </div>
//           </div>


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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImagesRef = useRef<HTMLImageElement[]>([]);

  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const scrollDistanceRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);
  const [framesReady, setFramesReady] = useState(false);

  const TOTAL_FRAMES = 312;

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = frameImagesRef.current[index];
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    // match canvas to visible size (no layout change)
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    // behave exactly like object-contain (keeps portrait shape)
    const scale = Math.min(width / img.width, height / img.height);
    const x = (width - img.width * scale) / 2;
    const y = (height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

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
    if (isMobile) return;
    if(!videoRef.current) return;

    const fg = videoRef.current;

    // Pick the right video based on viewport
    const src = isMobile
      ? "/investwebp/investor_ultra_android.mp4"
      : "/investwebp/out.mp4";

    fg.src = src;
    fg.muted = true;
    fg.playsInline = true;
    fg.preload = "auto";

    
    fg.load();

    setReady(false); // reset while new video loads

    const wake = async () => {
      try {
        await fg.play();
        fg.pause();
        fg.currentTime = 0;

        
      } catch {
        fg.currentTime = 0.01;
        
      }

      setReady(true); // 🔥 now safe to scrub
    };

    fg.addEventListener("loadeddata", wake, { once: true });

    return () => {
      fg.removeEventListener("loadeddata", wake);
    };
  }, [isMobile]); // re-run when mobile/desktop switches

  useEffect(() => {
    if (!isMobile) return;

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/investwebp/potraitinvestframes/frame_${String(i).padStart(4, "0")}.webp`;

      img.onload = () => {
        loaded++;

        if (loaded === TOTAL_FRAMES) {
          drawFrame(0);
          setFramesReady(true);      // ⭐ VERY IMPORTANT
          ScrollTrigger.refresh();   // ⭐ VERY IMPORTANT
        }
      };

      images.push(img);
    }

    frameImagesRef.current = images;
  }, [isMobile]);

  /* ---------------- SCRUB LOOP ---------------- */
  useEffect(() => {
    if (!ready || isMobile) return;

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

      const speed = isMobile ? 1 : 12;
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

  /* ---------------- VIDEO EVENT LISTENER ---------------- */
  useEffect(() => {
    if (!ready) return;
    const handler = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };
    window.addEventListener('triggerVideoJump', handler);
    return () => window.removeEventListener('triggerVideoJump', handler);
  }, [ready, framesReady, isMobile]);

  /* ---------------- SCROLLTRIGGER ---------------- */
  const localScrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!isMobile && !ready) return;
    if (isMobile && !framesReady) return;

    // Kill ONLY the trigger created by this component (if exists)
    if (localScrollTriggerRef.current) {
      localScrollTriggerRef.current.kill();
      localScrollTriggerRef.current = null;
    }

    // Create new trigger
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollDistanceRef.current}px`,
      pin: true,
      anticipatePin: 1,
      onUpdate: self => {
        rawProgressRef.current = self.progress;

        if (isMobile) {
          const frame = Math.floor(self.progress * (TOTAL_FRAMES - 1));
          drawFrame(frame);
        }
      },
    });

    // Store reference
    localScrollTriggerRef.current = st;

    // Cleanup only this trigger
    return () => {
      st.kill();
      localScrollTriggerRef.current = null;
    };

  }, [ready, framesReady, isMobile]);

  /* ---------------- JSX ---------------- */
  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-screen bg-black overflow-hidden">


        {/* FOREGROUND */}
        <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {isMobile ? (
                <canvas
                  ref={canvasRef}
                  className="w-full h-full"
                />
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain lg:object-fill sm:object-cover"
                  muted
                  playsInline
                />
              )}
            </div>
          </div>


        </div>
      </div>

      
    </>
  );
}