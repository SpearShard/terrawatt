"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";
import { gsap, ScrollTrigger } from "../app/lib/gsap";

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    (window as any).__VIDEO_READY__ = false;
  }, []);

  const scrollProgressRef = useRef(0);
  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const FG_TOTAL_FRAMES = 480;
  const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
  const START_BG_AT_FRAME = 251;
  const targetProgress = 326 / FG_FRAME_MAX;

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
    setup(fg, "/iphoneframes/scrub_ultra_android.mp4");

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
    if (!bgVideo || !fgVideo) return;

    let raf = 0;
    let lastTime = performance.now();
    let lastRender = 0;

    // cache durations once
    let fgDuration = 0;
    let bgDuration = 0;

    const animate = (time: number) => {
      // hard cap ~60fps
      if (time - lastRender < 33) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastRender = time;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!fgDuration && fgVideo.duration) {
        fgDuration = fgVideo.duration;
        bgDuration = bgVideo.duration || 0;

        if (!(window as any).__VIDEO_READY__) {
          (window as any).__VIDEO_READY__ = true;
          window.dispatchEvent(new Event("videoReady"));
        }
      }

      if (!fgDuration) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // physically-smooth damping (better than lerp)
      const damping = 1 - Math.exp(-delta * 18);
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) * damping;

      const smooth = smoothProgressRef.current;

      /* ---------- FOREGROUND ---------- */
      const fgTargetTime = smooth * fgDuration;
      const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);

      // only seek if meaningful (~1 frame @30fps)
      if (fgDiff > 0.03) {
        fgVideo.currentTime = fgTargetTime;
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

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

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
        <video
          ref={fgVideoRef}
          className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
          style={{ imageRendering: "crisp-edges" }}
          playsInline
          muted
        />

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





















// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";
// import CanvasFrameRenderer from "./CanvasFrameRenderer";

// gsap.registerPlugin(ScrollTrigger);

// export default function Video() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const bgVideoRef = useRef<HTMLVideoElement | null>(null);
//   const fgVideoRef = useRef<HTMLVideoElement | null>(null);

//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const scrollProgressRef = useRef(0);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const isMobile =
//   typeof window !== "undefined" &&
//   /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

//   /* ---------------- CONFIG ---------------- */

//   const FG_TOTAL_FRAMES = 480;
//   const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
//   const START_BG_AT_FRAME = 251;
//   const TARGET_FRAME = 326;
//   const targetProgress = TARGET_FRAME / FG_FRAME_MAX;

//   const FPS = 30;
//   const FRAME_TIME = 1 / FPS;

//   /* ---------------- GLOBAL READY FLAG ---------------- */
//   useEffect(() => {
//     (window as any).__VIDEO_READY__ = false;
//   }, []);

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     const fg = fgVideoRef.current;
//     const bg = bgVideoRef.current;
//     if (!fg || !bg) return;

//     const setup = (video: HTMLVideoElement, src: string) => {
//       video.src = src;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "auto";
//       video.crossOrigin = "anonymous";
//       video.load();

//       // Safari / iOS decode stability trick
//       video.addEventListener(
//         "loadeddata",
//         async () => {
//           try {
//             video.playbackRate = 0.00001;
//             await video.play();
//           } catch {}
//         },
//         { once: true }
//       );
//     };

//     setup(bg, "/iphoneframes/whitetickets.mp4");
//     if (!isMobile) {
//   setup(fg, "/iphoneframes/scrub_ultra_android.mp4");
// }
  

//     /* ----- READY DETECTION ----- */

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
//   }, []);

//   /* ---------------- SEEK ENGINE ---------------- */
//   useEffect(() => {
//     const fgVideo = fgVideoRef.current;
//     const bgVideo = bgVideoRef.current;
//     if (!fgVideo || !bgVideo) return;

//     const fgSeeking = { current: false };
//     const bgSeeking = { current: false };

//     const seekVideo = (
//       video: HTMLVideoElement,
//       targetTime: number,
//       flag: { current: boolean }
//     ) => {
//       if (flag.current) return;

//       const snapped = Math.round(targetTime / FRAME_TIME) * FRAME_TIME;
//       const diff = Math.abs(video.currentTime - snapped);
//       if (diff < FRAME_TIME * 0.5) return;

//       flag.current = true;

//       const done = () => {
//         flag.current = false;
//         video.removeEventListener("seeked", done);
//       };

//       video.addEventListener("seeked", done);

//       const v = video as HTMLVideoElement & { fastSeek?: (t: number) => void };
//       if (v.fastSeek) v.fastSeek(snapped);
//       else video.currentTime = snapped;
//     };

//     let raf = 0;
//     let lastTime = performance.now();
//     let lastRender = 0;

//     let fgDuration = 0;
//     let bgDuration = 0;

//     const animate = (time: number) => {
//       // mobile safe seek rate (~25fps)
//       if (time - lastRender < 40) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       lastRender = time;

//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;

//       if (!fgDuration && fgVideo.duration) {
//         fgDuration = fgVideo.duration;
//         bgDuration = bgVideo.duration || 0;

//         if (!(window as any).__VIDEO_READY__) {
//           (window as any).__VIDEO_READY__ = true;
//           window.dispatchEvent(new Event("videoReady"));
//         }
//       }

//       if (!fgDuration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       // exponential smoothing
//       const damping = 1 - Math.exp(-delta * 18);
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) * damping;

//       const smooth = smoothProgressRef.current;

//       /* ---------- FOREGROUND ---------- */
//       const fgTargetTime = smooth * fgDuration;

// if (!isMobile) {
//   seekVideo(fgVideo, fgTargetTime, fgSeeking);
// }

//       /* ---------- BACKGROUND ---------- */
//       const currentFgFrame = smooth * FG_FRAME_MAX;

//       if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
//         const bgProgress =
//           (currentFgFrame - START_BG_AT_FRAME) /
//           (FG_FRAME_MAX - START_BG_AT_FRAME);

//         const bgTargetTime = bgProgress * bgDuration;
//         seekVideo(bgVideo, bgTargetTime, bgSeeking);
//       } else if (bgVideo.currentTime > FRAME_TIME) {
//         bgVideo.currentTime = 0;
//       }

//       scrollProgressRef.current = smooth;
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
//       end: "+=400%",
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//       onRefresh: (self) => {
//         rawProgressRef.current = self.progress;
//       }
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
//       if ((window as any).__VIDEO_READY__) jump();
//       else {
//         const onReady = () => {
//           jump();
//           window.removeEventListener("videoReady", onReady);
//         };
//         window.addEventListener("videoReady", onReady);
//       }
//     };

//     window.addEventListener("triggerVideoJump", handler);

//     if ((window as any).__TERAAMART_PENDING__) {
//       handler();
//       (window as any).__TERAAMART_PENDING__ = false;
//     }

//     return () => window.removeEventListener("triggerVideoJump", handler);
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">

//         <video
//           ref={bgVideoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{
//             pointerEvents: "none",
//             transform: "translateZ(0)",
//             backfaceVisibility: "hidden",
//             willChange: "transform"
//           }}
//           playsInline
//           muted
//         />

//         {isMobile ? (
//   <div className="relative z-10 max-w-full max-h-screen">
//     <CanvasFrameRenderer progressRef={scrollProgressRef} />
//   </div>
// ) : (
//   <video
//     ref={fgVideoRef}
//     className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//     style={{
//       imageRendering: "crisp-edges",
//       transform: "translateZ(0)",
//       backfaceVisibility: "hidden",
//       willChange: "transform"
//     }}
//     playsInline
//     muted
//   />
// )}

//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
//             <ScrollingCoin progressRef={scrollProgressRef} />
//           </Canvas>
//         </div>

//       </div>
//     </div>
//   );
// }











