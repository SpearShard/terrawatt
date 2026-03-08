// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";
// import { gsap, ScrollTrigger } from "../app/lib/gsap";

// export default function Video() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const bgVideoRef = useRef<HTMLVideoElement>(null);
//   const fgVideoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     (window as any).__VIDEO_READY__ = false;
//   }, []);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const scrollProgressRef = useRef(0);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);

//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const FG_TOTAL_FRAMES = 451;
//   const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
//   const MOBILE_TOTAL_FRAMES = 720;
//   const START_BG_AT_FRAME = 251;
//   const targetProgress = 328 / FG_FRAME_MAX;


//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;

//     const img = new Image();
//     img.src = `/iphoneframes/androscrubframes/frame_${String(index + 1).padStart(5, "0")}.webp`;


//     img.onload = () => {
//       frameCache.current.set(index, img);

//       const loadFrame = (index: number) => {
//   if (frameCache.current.has(index)) return;

//   const img = new Image();
//   img.src = `/iphoneframes/androscrubframes/frame_${String(index + 1).padStart(5, "0")}.webp`;


//   img.onload = () => {
//     frameCache.current.set(index, img);
//   };
// };
//     };
//   };

//   // const preloadNearbyFrames = (center: number) => {
//   //   const AHEAD = 40;
//   //   const BEHIND = 20;

//   //   for (let i = Math.max(0, center - BEHIND); i <= Math.min(MOBILE_TOTAL_FRAMES - 1, center + AHEAD); i++) {
//   //     loadFrame(i);
//   //   }
//   // };

//   // const cleanupFarFrames = (center: number) => {
//   //   const MAX_DISTANCE = 140;

//   //   frameCache.current.forEach((_, key) => {
//   //     if (Math.abs(key - center) > MAX_DISTANCE) {
//   //       frameCache.current.delete(key);
//   //     }
//   //   });
//   // };

//   const drawFrame = (index: number) => {
//     const canvas = canvasRef.current;
//     const img = frameCache.current.get(index);
//     if (!canvas || !img) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const w = canvas.clientWidth;
//     const h = canvas.clientHeight;

//     canvas.width = w * dpr;
//     canvas.height = h * dpr;

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.clearRect(0, 0, w, h);

//     const scale = Math.max(w / img.width, h / img.height);
//     const x = (w - img.width * scale) / 2;
//     const y = (h - img.height * scale) / 2;

//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
//   };
//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     const fg = fgVideoRef.current;
//     const bg = bgVideoRef.current;
//     if (!fg || !bg) return;

//     // Check if we need to wake (already loaded?)
//     const wake = async (video: HTMLVideoElement) => {
//       try {
//         await video.play();
//         video.pause();
//         video.currentTime = 0;
//       } catch (e) {
//         // Autoplay blocked or not ready, try silencing to be safe
//         video.currentTime = 0.1;
//         setTimeout(() => (video.currentTime = 0), 200);
//       }
//     };

//     const setup = (video: HTMLVideoElement, src: string) => {
//       video.src = src;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "auto";
//       video.crossOrigin = "anonymous";
//       video.load();

//       // Try to wake it when data loads
//       video.addEventListener("loadeddata", () => wake(video), { once: true });
//     };

//     setup(bg, "/iphoneframes/whitetickets.mp4");
//     if (!isMobile) {
//       setup(fg, "/iphoneframes/androscrub.webm");

//     }

//     const onReady = () => {
//       if (!(window as any).__VIDEO_READY__) {
//         (window as any).__VIDEO_READY__ = true;
//         window.dispatchEvent(new Event("videoReady"));
//       }
//     };

//     let fgReady = false;
//     let bgReady = false;

//     const checkReady = () => {
//       if (fgReady && bgReady && !(window as any).__VIDEO_READY__) {
//         (window as any).__VIDEO_READY__ = true;
//         window.dispatchEvent(new Event("videoReady"));
//       }
//     };

//     fg.addEventListener("loadedmetadata", () => {
//       fgReady = true;
//       checkReady();
//     });

//     bg.addEventListener("loadedmetadata", () => {
//       bgReady = true;
//       checkReady();
//     });

//     return () => {
//       fg.removeEventListener("loadedmetadata", onReady);
//     };
//   }, []);


//   /* ---------------- ULTRA OPTIMIZED RAF LOOP ---------------- */
//   useEffect(() => {

//   const bgVideo = bgVideoRef.current;
//   const fgVideo = fgVideoRef.current;

//   if (!bgVideo || (!isMobile && !fgVideo)) return;

//   // reset smoothing when switching modes
//   smoothProgressRef.current = 0;
//   rawProgressRef.current = 0;
//   scrollProgressRef.current = 0;

//     let raf = 0;
//     let lastTime = performance.now();
//     let lastRender = 0;

//     // cache durations once
//     let fgDuration = 0;
//     let bgDuration = 0;

//     const animate = (time: number) => {
//       // hard cap ~60fps
//       if (time - lastRender < 33) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       lastRender = time;

//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;

//       // desktop needs foreground duration
//       if (!isMobile && fgVideo && !fgDuration && fgVideo.duration) {
//         fgDuration = fgVideo.duration;
//         bgDuration = bgVideo.duration || 0;

//         if (!(window as any).__VIDEO_READY__) {
//           (window as any).__VIDEO_READY__ = true;
//           window.dispatchEvent(new Event("videoReady"));
//         }
//       }

//       // mobile only needs background duration
//       if (isMobile && !bgDuration && bgVideo.duration) {
//         bgDuration = bgVideo.duration;

//         if (!(window as any).__VIDEO_READY__) {
//           (window as any).__VIDEO_READY__ = true;
//           window.dispatchEvent(new Event("videoReady"));
//         }
//       }

//       // desktop needs video duration
//       // mobile does NOT
//       if (!isMobile && !fgDuration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       // physically-smooth damping (better than lerp)
//       const damping = 1 - Math.exp(-delta * 18);
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) * damping;

//       const smooth = smoothProgressRef.current;

//       /* ---------- FOREGROUND ---------- */
//       if (!isMobile && fgVideo) {
//         const fgTargetTime = smooth * fgDuration;
//         const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);

//         if (fgDiff > 0.03) {
//           fgVideo.currentTime = fgTargetTime;
//         }
//       }

//       /* ---------- BACKGROUND ---------- */
//       const currentFgFrame = smooth * FG_FRAME_MAX;

//       if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
//         const bgProgress =
//           (currentFgFrame - START_BG_AT_FRAME) /
//           (FG_FRAME_MAX - START_BG_AT_FRAME);

//         const bgTargetTime = bgProgress * bgDuration;
//         const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);

//         if (bgDiff > 0.03) {
//           bgVideo.currentTime = bgTargetTime;
//         }
//       } else if (bgVideo.currentTime > 0.03) {
//         bgVideo.currentTime = 0;
//       }

//       scrollProgressRef.current = smooth;

//       if (isMobile) {
//   const frame = Math.floor(smooth * (MOBILE_TOTAL_FRAMES - 1));

//   if (!frameCache.current.has(frame)) {
//     loadFrame(frame);
//   }

//   drawFrame(frame);
// }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [isMobile]);

//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=400%",
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

//     window.dispatchEvent(new Event("videoScrollReady"));

//     return () => st.kill();
//   }, []);

//   /* ---------------- EXTERNAL JUMP ---------------- */
//   useEffect(() => {
//     const jump = () => {
//       const st = scrollTriggerRef.current;
//       if (!st) return;

//       ScrollTrigger.refresh();

//       requestAnimationFrame(() => {
//         const scrollPos = st.start + targetProgress * (st.end - st.start);
//         window.scrollTo({ top: scrollPos, behavior: "smooth" });
//         rawProgressRef.current = targetProgress;
//       });
//     };

//     const handler = () => {
//       // If video is ready, jump immediately
//       if ((window as any).__VIDEO_READY__) {
//         jump();
//       } else {
//         // Otherwise wait for ready event (handled in page.tsx mostly, but safety here)
//         const onReady = () => {
//           jump();
//           window.removeEventListener("videoReady", onReady);
//         };
//         window.addEventListener("videoReady", onReady);
//       }
//     };

//     window.addEventListener("triggerVideoJump", handler);

//     // Initial check in case it's pending
//     if ((window as any).__TERAAMART_PENDING__) {
//       handler();
//       (window as any).__TERAAMART_PENDING__ = false;
//     }

//     return () => {
//       window.removeEventListener("triggerVideoJump", handler);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isMobile) return;

//     loadFrame(0);

//     const wait = () => {
//       if (frameCache.current.has(0)) {
//         drawFrame(0);
//       } else {
//         requestAnimationFrame(wait);
//       }
//     };

//     wait();
//   }, [isMobile]);


//   /* ---------------- JSX ---------------- */
//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
//         {/* BACKGROUND */}
//         <video
//           ref={bgVideoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ pointerEvents: "none" }}
//           playsInline
//           muted
//         />

//         {/* FOREGROUND */}
//         {isMobile ? (
//           <canvas
//   ref={canvasRef}
//   className=" z-10 w-full h-full pointer-events-none"
// />
//         ) : (
//           <video
//             ref={fgVideoRef}
//             className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//             style={{ imageRendering: "crisp-edges" }}
//             playsInline
//             muted
//           />
//         )}

//         {/* 3D COIN */}
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
//             <ScrollingCoin progressRef={scrollProgressRef} />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }































"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";
import { gsap, ScrollTrigger } from "../app/lib/gsap";

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingFrames = useRef<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    (window as any).__VIDEO_READY__ = false;
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollProgressRef = useRef(0);
  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const FG_TOTAL_FRAMES = 451;
  const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
  const MOBILE_TOTAL_FRAMES = 271;
  const START_BG_AT_FRAME = 251;
  const targetProgress = 328 / FG_FRAME_MAX;


  const loadFrame = (index: number) => {
    if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;

    loadingFrames.current.add(index);

    const img = new Image();
    img.src = `/iphoneframes/potrait_iphone/frame_${String(index + 1).padStart(5, "0")}.webp`;
    

    img.onload = async () => {
      try {
        await img.decode();
      } catch { }

      loadingFrames.current.delete(index);
      frameCache.current.set(index, img);
    };

    img.onerror = () => {
      loadingFrames.current.delete(index);
    };
  };

  const preloadNearbyFrames = (center: number) => {
    const BUFFER_AHEAD = 14;
    const BUFFER_BEHIND = 8;

    const start = Math.max(0, center - BUFFER_BEHIND);
    const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + BUFFER_AHEAD);

    for (let i = start; i <= end; i++) {
      loadFrame(i);
    }
  };

  const cleanupFarFrames = (center: number) => {
    const MAX_DISTANCE = 80;

    frameCache.current.forEach((_, key) => {
      if (Math.abs(key - center) > MAX_DISTANCE) {
        frameCache.current.delete(key);
      }
    });
  };

  // const preloadNearbyFrames = (center: number) => {
  //   const AHEAD = 40;
  //   const BEHIND = 20;

  //   for (let i = Math.max(0, center - BEHIND); i <= Math.min(MOBILE_TOTAL_FRAMES - 1, center + AHEAD); i++) {
  //     loadFrame(i);
  //   }
  // };

  // const cleanupFarFrames = (center: number) => {
  //   const MAX_DISTANCE = 140;

  //   frameCache.current.forEach((_, key) => {
  //     if (Math.abs(key - center) > MAX_DISTANCE) {
  //       frameCache.current.delete(key);
  //     }
  //   });
  // };

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = frameCache.current.get(index);
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
  canvas.width = w * dpr;
  canvas.height = h * dpr;
}

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "copy";

    const scale = Math.max(w / img.width, h / img.height);
    const x = (w - img.width * scale) / 2;
    const y = (h - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };
  /* ---------------- VIDEO SETUP ---------------- */
  useEffect(() => {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;
    if (!fg || !bg) return;

    // Check if we need to wake (already loaded?)
    const wake = async (video: HTMLVideoElement) => {
      try {
        await video.play();
        video.pause();
        video.currentTime = 0;
      } catch (e) {
        // Autoplay blocked or not ready, try silencing to be safe
        video.currentTime = 0.1;
        setTimeout(() => (video.currentTime = 0), 200);
      }
    };

    const setup = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.crossOrigin = "anonymous";
      video.load();

      // Try to wake it when data loads
      video.addEventListener("loadeddata", () => wake(video), { once: true });
    };

    setup(bg, "/iphoneframes/whitetickets.mp4");
    if (!isMobile) {
      setup(fg, "/iphoneframes/androscrub.webm");

    }

    const onReady = () => {
      if (!(window as any).__VIDEO_READY__) {
        (window as any).__VIDEO_READY__ = true;
        window.dispatchEvent(new Event("videoReady"));
      }
    };

    let fgReady = false;
    let bgReady = false;

    const checkReady = () => {
      if (fgReady && bgReady && !(window as any).__VIDEO_READY__) {
        (window as any).__VIDEO_READY__ = true;
        window.dispatchEvent(new Event("videoReady"));
      }
    };

    fg.addEventListener("loadedmetadata", () => {
      fgReady = true;
      checkReady();
    });

    bg.addEventListener("loadedmetadata", () => {
      bgReady = true;
      checkReady();
    });

    return () => {
      fg.removeEventListener("loadedmetadata", onReady);
    };
  }, []);


  /* ---------------- ULTRA OPTIMIZED RAF LOOP ---------------- */
  useEffect(() => {

    const bgVideo = bgVideoRef.current;
    const fgVideo = fgVideoRef.current;

    if (!bgVideo || (!isMobile && !fgVideo)) return;

    // reset smoothing when switching modes
    smoothProgressRef.current = 0;
    rawProgressRef.current = 0;
    scrollProgressRef.current = 0;

    let raf = 0;
    let lastTime = performance.now();
    let lastRender = 0;
    let lastFrame = -1;
let cleanupCounter = 0;

    // cache durations once
    let fgDuration = 0;
    let bgDuration = 0;

    const animate = (time: number) => {
      // hard cap ~60fps
      if (time - lastRender < 16) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastRender = time;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // desktop needs foreground duration
      if (!isMobile && fgVideo && !fgDuration && fgVideo.duration) {
        fgDuration = fgVideo.duration;
        bgDuration = bgVideo.duration || 0;

        if (!(window as any).__VIDEO_READY__) {
          (window as any).__VIDEO_READY__ = true;
          window.dispatchEvent(new Event("videoReady"));
        }
      }

      // mobile only needs background duration
      if (isMobile && !bgDuration && bgVideo.duration) {
        bgDuration = bgVideo.duration;

        if (!(window as any).__VIDEO_READY__) {
          (window as any).__VIDEO_READY__ = true;
          window.dispatchEvent(new Event("videoReady"));
        }
      }

      // desktop needs video duration
      // mobile does NOT
      if (!isMobile && !fgDuration) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // physically-smooth damping (better than lerp)
      const damping = 1 - Math.exp(-delta * 18);
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) * damping;

      const smooth = smoothProgressRef.current;

      /* ---------- FOREGROUND ---------- */
      if (!isMobile && fgVideo) {
        const fgTargetTime = smooth * fgDuration;
        const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);

        if (fgDiff > 0.03) {
          fgVideo.currentTime = fgTargetTime;
        }
      }

      /* ---------- BACKGROUND ---------- */
      const currentFgFrame = smooth * FG_FRAME_MAX;

      if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
        const bgProgress =
          (currentFgFrame - START_BG_AT_FRAME) /
          (FG_FRAME_MAX - START_BG_AT_FRAME);

        const bgTargetTime = bgProgress * bgDuration;
        const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);

        if (bgDiff > 0.03) {
          bgVideo.currentTime = bgTargetTime;
        }
      } else if (bgVideo.currentTime > 0.03) {
        bgVideo.currentTime = 0;
      }

      scrollProgressRef.current = smooth;

      if (isMobile) {
  const frame = Math.floor(smooth * (MOBILE_TOTAL_FRAMES - 1));

  if (frame !== lastFrame) {
    preloadNearbyFrames(frame);

    cleanupCounter++;
    if (cleanupCounter > 10) {
      cleanupFarFrames(frame);
      cleanupCounter = 0;
    }

    drawFrame(frame);
    lastFrame = frame;
  }
}

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isMobile]);

  /* ---------------- SCROLLTRIGGER ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%",
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        rawProgressRef.current = self.progress;
      },
      onRefresh: (self) => {
        rawProgressRef.current = self.progress;
      },
    });

    scrollTriggerRef.current = st;

    window.dispatchEvent(new Event("videoScrollReady"));

    return () => st.kill();
  }, []);

  /* ---------------- EXTERNAL JUMP ---------------- */
  useEffect(() => {
    const jump = () => {
      const st = scrollTriggerRef.current;
      if (!st) return;

      ScrollTrigger.refresh();

      requestAnimationFrame(() => {
        const scrollPos = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({ top: scrollPos, behavior: "smooth" });
        rawProgressRef.current = targetProgress;
      });
    };

    const handler = () => {
      // If video is ready, jump immediately
      if ((window as any).__VIDEO_READY__) {
        jump();
      } else {
        // Otherwise wait for ready event (handled in page.tsx mostly, but safety here)
        const onReady = () => {
          jump();
          window.removeEventListener("videoReady", onReady);
        };
        window.addEventListener("videoReady", onReady);
      }
    };

    window.addEventListener("triggerVideoJump", handler);

    // Initial check in case it's pending
    if ((window as any).__TERAAMART_PENDING__) {
      handler();
      (window as any).__TERAAMART_PENDING__ = false;
    }

    return () => {
      window.removeEventListener("triggerVideoJump", handler);
    };
  }, []);

  useEffect(() => {
  if (!isMobile) return;

  for (let i = 0; i < 25; i++) {
    loadFrame(i);
  }

    const wait = () => {
      if (frameCache.current.has(0)) {
        drawFrame(0);
      } else {
        requestAnimationFrame(wait);
      }
    };

    wait();
  }, [isMobile]);


  /* ---------------- JSX ---------------- */
  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND */}
        <video
          ref={bgVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
          playsInline
          muted
        />

        {/* FOREGROUND */}
        {isMobile ? (
          <canvas
            ref={canvasRef}
            className=" z-10 w-full h-full pointer-events-none"
          />
        ) : (
          <video
            ref={fgVideoRef}
            className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
            style={{ imageRendering: "crisp-edges" }}
            playsInline
            muted
          />
        )}

        {/* 3D COIN */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

















