// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";

// gsap.registerPlugin(ScrollTrigger);

// export default function Video() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fgCanvasRef = useRef<HTMLCanvasElement>(null);
//   const bgCanvasRef = useRef<HTMLCanvasElement>(null);

//   const fgFrameRef = useRef(0);
//   const bgFrameRef = useRef(0);
//   const scrollProgressRef = useRef(0);

//   // Critical: store the ScrollTrigger instance
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const [loaded, setLoaded] = useState(false);

//   const fgImagesRef = useRef<HTMLImageElement[]>([]);
//   const bgImagesRef = useRef<HTMLImageElement[]>([]);

//   const FG_FRAMES = 405;
//   const BG_FRAMES = 191;
//   const START_BG_AT = 130;
//   const CANVAS_W = 1080;
//   const CANVAS_H = 1920;

//   const targetProgress = 289 / (FG_FRAMES - 1);

//   // Load all images with batching to prevent network congestion
//   useEffect(() => {
//     let loadedCount = 0;
//     const total = FG_FRAMES + BG_FRAMES;
//     const batchSize = 50; // Load 50 images at a time
//     const delayBetweenBatches = 100; // ms

//     const loadImage = (url: string, arr: HTMLImageElement[]) => {
//       const img = new Image();
//       img.crossOrigin = "anonymous";
//       img.src = url;
//       img.onload = () => {
//         (img as any).loaded = true;
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       img.onerror = () => {
//         (img as any).loaded = false;
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       arr.push(img);
//     };

//     const loadBatch = (start: number, end: number, urls: string[], arr: HTMLImageElement[]) => {
//       for (let i = start; i < Math.min(end, urls.length); i++) {
//         loadImage(urls[i], arr);
//       }
//     };

//     const fgUrls: string[] = [];
//     for (let i = 1; i <= FG_FRAMES; i++) {
//       fgUrls.push(`/iphoneframes/frame_${String(i).padStart(5, "0")}.webp`);
//     }
//     const bgUrls: string[] = [];
//     for (let i = 1; i <= BG_FRAMES; i++) {
//       bgUrls.push(`https://ik.imagekit.io/yv4cjaya8/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
      
//     }

//     let fgBatchIndex = 0;
//     let bgBatchIndex = 0;

//     const loadNextBatch = () => {
//       if (fgBatchIndex < fgUrls.length) {
//         const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
//         loadBatch(fgBatchIndex, end, fgUrls, fgImagesRef.current);
//         fgBatchIndex = end;
//       }
//       if (bgBatchIndex < bgUrls.length) {
//         const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
//         loadBatch(bgBatchIndex, end, bgUrls, bgImagesRef.current);
//         bgBatchIndex = end;
//       }
//       if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length) {
//         setTimeout(loadNextBatch, delayBetweenBatches);
//       }
//     };

//     loadNextBatch();
//   }, []);

//   // Main scroll-triggered animation
//   useEffect(() => {
//     if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;

//     const fgCanvas = fgCanvasRef.current;
//     const bgCanvas = bgCanvasRef.current;
//     const fgCtx = fgCanvas.getContext("2d")!;
//     const bgCtx = bgCanvas.getContext("2d")!;

//     fgCanvas.width = bgCanvas.width = CANVAS_W;
//     fgCanvas.height = bgCanvas.height = CANVAS_H;

//     const render = () => {
//       const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001));
//       const fgImg = fgImagesRef.current[fgIndex];
//       if ((fgImg as any)?.loaded) {
//         fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }

//       const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
//       const bgImg = bgImagesRef.current[bgIndex];
//       if ((bgImg as any)?.loaded) {
//         bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//     };

//     // Kill any old trigger
//     if (scrollTriggerRef.current) {
//       scrollTriggerRef.current.kill();
//     }

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=400%",
//       scrub: 1,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;

//         fgFrameRef.current = progress * (FG_FRAMES - 1);

//         if (fgFrameRef.current >= START_BG_AT) {
//           const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
//           bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
//         } else {
//           bgFrameRef.current = 0;
//         }

//         scrollProgressRef.current = progress;
//         render();
//       },
//     });

//     scrollTriggerRef.current = st;
//     render();

//     return () => {
//       st.kill();
//       scrollTriggerRef.current = null;
//     };
//   }, [loaded]);

//   // Handle navigation from other pages
//   useEffect(() => {
//     const action = localStorage.getItem("TW_action");
//     if (action === "go_mart") {
//       localStorage.removeItem("TW_action");
//       const waitAndJump = () => {
//         if (scrollTriggerRef.current) {
//           ScrollTrigger.refresh();
//           const st = scrollTriggerRef.current;
//           const scrollPos = st.start + targetProgress * (st.end - st.start);
//           st.scroll(scrollPos);
//         } else {
//           requestAnimationFrame(waitAndJump);
//         }
//       };
//       waitAndJump();
//     }
//   }, []);

//     useEffect(() => {
//     if (!loaded) return;

//     const handleTrigger = () => {
//       window.scrollTo(0, 0);
//       const st = scrollTriggerRef.current;
//       if (st) {
//         const scrollPos = st.start + targetProgress * (st.end - st.start);
//           window.scrollTo({ top: scrollPos });
//       }
//     };

//     window.addEventListener("triggerVideoJump", handleTrigger);

//     return () => {
//       window.removeEventListener("triggerVideoJump", handleTrigger);
//     };
//   }, [loaded]);

//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
//         <canvas
//           ref={bgCanvasRef}
//           className="absolute inset-0 w-full h-full object-fit"
//         />

//         <canvas
//           ref={fgCanvasRef}
//           className="relative z-10 max-w-full h-auto max-h-screen pointer-events-none"
//         />

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

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);

  const scrollProgressRef = useRef(0);
  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const FG_TOTAL_FRAMES = 405;
  const START_BG_AT_FRAME = 130;
  const targetProgress = 289 / (FG_TOTAL_FRAMES - 1);

  /* ---------------- VIDEO SETUP (Minimal wake-up — your encoding is perfect now) ---------------- */
  useEffect(() => {
    const setupVideo = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.crossOrigin = "anonymous";
      video.load();

      // Very light wake-up — just enough to start decoding
      video.currentTime = 0.01;
      setTimeout(() => {
        video.currentTime = 0;
      }, 300);
    };

    if (bgVideoRef.current) {
      setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub.mp4");
    }
    if (fgVideoRef.current) {
      setupVideo(fgVideoRef.current, "/iphoneframes/phonescrub.mp4");
    }
  }, []);

  /* ---------------- ULTRA-PRECISE SCRUBBING LOOP (Optimized for high-keyframe video) ---------------- */
  useEffect(() => {
    const bgVideo = bgVideoRef.current;
    const fgVideo = fgVideoRef.current;
    if (!bgVideo || !fgVideo) return;

    let raf: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!fgVideo.duration || isNaN(fgVideo.duration)) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // Very strong lerp — instant response with silky smoothing
      // Your high-keyframe video can handle this perfectly
      const lerpFactor = Math.min(delta * 25, 1); // 25 = ultra-snappy (feels immediate)
      smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * lerpFactor;

      // Foreground — ultra-precise seeking
      const fgTargetTime = smoothProgressRef.current * fgVideo.duration;
      const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);
      if (fgDiff > 0.008) { // ~half frame at 60fps — extremely tight
        fgVideo.currentTime = fgTargetTime;
      }

      // Background — same precision
      const currentFgFrame = smoothProgressRef.current * (FG_TOTAL_FRAMES - 1);
      if (currentFgFrame >= START_BG_AT_FRAME) {
        const bgProgress = (currentFgFrame - START_BG_AT_FRAME) / (FG_TOTAL_FRAMES - START_BG_AT_FRAME);
        const bgTargetTime = bgProgress * bgVideo.duration;
        const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);
        if (bgDiff > 0.008) {
          bgVideo.currentTime = bgTargetTime;
        }
      } else if (bgVideo.currentTime > 0.008) {
        bgVideo.currentTime = 0;
      }

      scrollProgressRef.current = smoothProgressRef.current;

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
    return () => st.kill();
  }, []);

  /* ---------------- NAVIGATION JUMPS ---------------- */
  useEffect(() => {
    const action = localStorage.getItem("TW_action");
    if (action === "go_mart") {
      localStorage.removeItem("TW_action");
      const jump = () => {
        if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
          ScrollTrigger.refresh();
          const st = scrollTriggerRef.current;
          const pos = st.start + targetProgress * (st.end - st.start);
          st.scroll(pos);

          rawProgressRef.current = targetProgress;
          smoothProgressRef.current = targetProgress;
          fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
        } else {
          requestAnimationFrame(jump);
        }
      };
      jump();
    }
  }, []);

  useEffect(() => {
    const handleTrigger = () => {
      if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
        window.scrollTo(0, 0);
        const st = scrollTriggerRef.current;
        const pos = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({ top: pos, behavior: "instant" });

        rawProgressRef.current = targetProgress;
        smoothProgressRef.current = targetProgress;
        fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
      }
    };
    window.addEventListener("triggerVideoJump", handleTrigger);
    return () => window.removeEventListener("triggerVideoJump", handleTrigger);
  }, []);

  /* ---------------- JSX (UNCHANGED LAYOUT) ---------------- */
  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND VIDEO */}
        <video
          ref={bgVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
          playsInline
          muted
        />

        {/* FOREGROUND VIDEO */}
        <video
          ref={fgVideoRef}
          className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
          style={{ imageRendering: "crisp-edges" }}
          playsInline
          muted
        />

        {/* 3D COIN OVERLAY */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}