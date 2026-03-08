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
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);
//   const mobileRafRunningRef = useRef(false);

//   const [isMobile, setIsMobile] = useState(false);
//   const [videoReady, setVideoReady] = useState(false);
//   const [framesReady, setFramesReady] = useState(false);

//   const TOTAL_FRAMES = 312;


//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);


//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return TOTAL_FRAMES * 2;
//       if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
//       return TOTAL_FRAMES * 6;
//     };

//     const update = () => {
//       scrollDistanceRef.current = calc();
//       ScrollTrigger.refresh();
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;

//     const img = new Image();
//     img.src = `/investwebp/potraitinvestframes/frame_${String(index + 1).padStart(4, "0")}.webp`;

//     img.onload = () => {
//       frameCache.current.set(index, img);

//       const currentFrame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       if (index === currentFrame || (currentFrame === 0 && index === 0)) {
//         drawFrame(index);
//       }
//     };
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const BUFFER_AHEAD = 12;
//     const BUFFER_BEHIND = 6;

//     const start = Math.max(0, center - BUFFER_BEHIND);
//     const end = Math.min(TOTAL_FRAMES - 1, center + BUFFER_AHEAD);

//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 50; 

//     frameCache.current.forEach((_, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         frameCache.current.delete(key);
//       }
//     });
//   };


//   const drawFrame = (index: number) => {
//     const canvas = canvasRef.current;
//     const img = frameCache.current.get(index);
//     if (!canvas || !img) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;

//     const newW = width * dpr;
//     const newH = height * dpr;

//     if (canvas.width !== newW || canvas.height !== newH) {
//       canvas.width = newW;
//       canvas.height = newH;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.clearRect(0, 0, width, height);

//     const scale = Math.min(width / img.width, height / img.height);
//     const x = (width - img.width * scale) / 2;
//     const y = (height - img.height * scale) / 2;

//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
//   };


//   useEffect(() => {
//     if (!isMobile || !framesReady) return;

//     const redraw = () => {
//       const frame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       drawFrame(frame);
//     };

//     window.addEventListener("resize", redraw);
//     return () => window.removeEventListener("resize", redraw);
//   }, [isMobile, framesReady]);


//   useEffect(() => {
//     if (isMobile) return;
//     const video = videoRef.current;
//     if (!video) return;

//     video.src = "/investwebp/invescrub.webm";
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.load();

//     const wake = async () => {
//       try {
//         video.currentTime = 0.01;
//         await video.play().catch(() => { });
//         video.pause();
//         video.currentTime = 0;
//       } catch { }
//       setVideoReady(true);
//     };

//     video.addEventListener("loadeddata", wake, { once: true });
//     return () => video.removeEventListener("loadeddata", wake);
//   }, [isMobile]);


//   useEffect(() => {
//     if (!videoReady || isMobile) return;
//     const video = videoRef.current;
//     if (!video) return;

//     let raf = 0;
//     let last = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       if (!video.duration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const speed = 6; 
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         Math.min(delta * speed, 1);

//       const target = smoothProgressRef.current * video.duration;

//       if (Math.abs(video.currentTime - target) > 0.01) {
//         video.currentTime = target;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [videoReady, isMobile]);

//   useEffect(() => {
//   if (!isMobile || !framesReady || mobileRafRunningRef.current) return;
//   mobileRafRunningRef.current = true;

//   smoothProgressRef.current = rawProgressRef.current;

//   let raf = 0;
//   let last = performance.now();
//   let lastFrame = -1;
//   let cleanupCounter = 0;

//   const animate = (time: number) => {
//     const delta = Math.min((time - last) / 1000, 0.1);
//     last = time;

//     const speed = 8;
//     smoothProgressRef.current +=
//       (rawProgressRef.current - smoothProgressRef.current) *
//       Math.min(delta * speed, 1);

//     const progress = Math.max(0, Math.min(1, smoothProgressRef.current));

//     const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

//     if (frame !== lastFrame) {
//       preloadNearbyFrames(frame);

//       cleanupCounter++;
//       if (cleanupCounter > 10) {
//         cleanupFarFrames(frame);
//         cleanupCounter = 0;
//       }

//       drawFrame(frame);
//       lastFrame = frame;
//     }

//     raf = requestAnimationFrame(animate);
//   };

//   raf = requestAnimationFrame(animate);

//   return () => {
//     cancelAnimationFrame(raf);
//     mobileRafRunningRef.current = false;
//   };
// }, [isMobile, framesReady]);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     if (isMobile && !framesReady) return;
//     if (!isMobile && !videoReady) return;

//     scrollTriggerRef.current?.kill();

//     scrollTriggerRef.current = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//     });

//     return () => scrollTriggerRef.current?.kill();
//   }, [isMobile, framesReady, videoReady]);

//   useEffect(() => {
//     if (!isMobile) return;

//     loadFrame(0);                

//     const checkReady = () => {
//       if (frameCache.current.has(0)) {
//         drawFrame(0);
//         setFramesReady(true);
//         ScrollTrigger.refresh();
//       } else {
//         requestAnimationFrame(checkReady);
//       }
//     };

//     checkReady();
//   }, [isMobile]);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100);

//     return () => clearTimeout(t);
//   }, []);


//   return (
//     <>
//       <Navbar />

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="w-full h-full flex items-center justify-center">
//               {isMobile ? (
//                 <canvas ref={canvasRef} className="w-full h-full" />
//               ) : (
//                 <video
//                   ref={videoRef}
//                   className="w-full h-full object-contain lg:object-fill sm:object-cover"
//                   muted
//                   playsInline
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingFrames = useRef<Set<number>>(new Set());
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const scrollDistanceRef = useRef(0);
  const mobileRafRunningRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [framesReady, setFramesReady] = useState(false);

  const TOTAL_FRAMES = 187;


  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);


  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) return TOTAL_FRAMES * 15;
      if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
      return TOTAL_FRAMES * 6;
    };

    const update = () => {
      scrollDistanceRef.current = calc();
      ScrollTrigger.refresh();
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const loadFrame = (index: number) => {
    if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;

    loadingFrames.current.add(index);

    const img = new Image();
img.src = `/investwebp/mobileinvestor/frame_${String(index + 1).padStart(4, "0")}.webp`;
    

    img.onerror = () => {
  console.log("Frame failed:", img.src);
};

    img.onload = async () => {
      try {
        await img.decode();
      } catch { }

      loadingFrames.current.delete(index);

      frameCache.current.set(index, img);

      const currentFrame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
      if (index === currentFrame || (currentFrame === 0 && index === 0)) {
        drawFrame(index);
      }
    };
  };

  const preloadNearbyFrames = (center: number) => {
    const BUFFER_AHEAD = 8;
    const BUFFER_BEHIND = 4;

    const start = Math.max(0, center - BUFFER_BEHIND);
    const end = Math.min(TOTAL_FRAMES - 1, center + BUFFER_AHEAD);

    for (let i = start; i <= end; i++) {
      loadFrame(i);
    }
  };

  const cleanupFarFrames = (center: number) => {
    const MAX_DISTANCE = 50;

    frameCache.current.forEach((_, key) => {
      if (Math.abs(key - center) > MAX_DISTANCE) {
        frameCache.current.delete(key);
      }
    });
  };


  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = frameCache.current.get(index);
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const newW = width * dpr;
    const newH = height * dpr;

    if (canvas.width !== newW || canvas.height !== newH) {
      canvas.width = newW;
      canvas.height = newH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "copy";

    const scale = Math.min(width / img.width, height / img.height);
    const x = (width - img.width * scale) / 2;
    const y = (height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };


  useEffect(() => {
    if (!isMobile || !framesReady) return;

    const redraw = () => {
      const frame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
      drawFrame(frame);
    };

    window.addEventListener("resize", redraw);
    return () => window.removeEventListener("resize", redraw);
  }, [isMobile, framesReady]);


  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;

    video.src = "/investwebp/invescrub.webm";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.load();

    const wake = async () => {
      try {
        video.currentTime = 0.01;
        await video.play().catch(() => { });
        video.pause();
        video.currentTime = 0;
      } catch { }
      setVideoReady(true);
    };

    video.addEventListener("loadeddata", wake, { once: true });
    return () => video.removeEventListener("loadeddata", wake);
  }, [isMobile]);


  useEffect(() => {
    if (!videoReady || isMobile) return;
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let last = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;

      if (!video.duration) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const speed = 6;
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) *
        Math.min(delta * speed, 1);

      const target = smoothProgressRef.current * video.duration;

      if (Math.abs(video.currentTime - target) > 0.01) {
        video.currentTime = target;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [videoReady, isMobile]);

  useEffect(() => {
    if (!isMobile || !framesReady || mobileRafRunningRef.current) return;
    mobileRafRunningRef.current = true;

    smoothProgressRef.current = rawProgressRef.current;

    let raf = 0;
    let last = performance.now();
    let lastFrame = -1;
    let cleanupCounter = 0;

    const animate = (time: number) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;

      const speed = 4;
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) *
        Math.min(delta * speed, 1);

      const progress = Math.max(0, Math.min(1, smoothProgressRef.current));

      const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

      if (frame !== lastFrame) {
        

        cleanupCounter++;
        if (cleanupCounter > 10) {
          cleanupFarFrames(frame);
          cleanupCounter = 0;
        }

        drawFrame(frame);
        lastFrame = frame;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      mobileRafRunningRef.current = false;
    };
  }, [isMobile, framesReady]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (isMobile && !framesReady) return;
    if (!isMobile && !videoReady) return;

    scrollTriggerRef.current?.kill();

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollDistanceRef.current}px`,
      pin: true,
      anticipatePin: 1,
     onUpdate: (self) => {
  rawProgressRef.current = self.progress;

  const frame = Math.floor(self.progress * (TOTAL_FRAMES - 1));
  preloadNearbyFrames(frame);
},
    });

    return () => scrollTriggerRef.current?.kill();
  }, [isMobile, framesReady, videoReady]);

  useEffect(() => {
  if (!isMobile) return;

  // preload first frames so scroll starts smooth
  for (let i = 0; i < 20; i++) {
    loadFrame(i);
  }

    const checkReady = () => {
      if (frameCache.current.has(0)) {
        drawFrame(0);
        setFramesReady(true);
        ScrollTrigger.refresh();
      } else {
        requestAnimationFrame(checkReady);
      }
    };

    checkReady();
  }, [isMobile]);

  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(t);
  }, []);


  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {isMobile ? (
                <canvas ref={canvasRef} className="w-full h-full" />
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

      <Footer />
    </>
  );
}