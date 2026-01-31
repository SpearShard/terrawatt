// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";

// gsap.registerPlugin(ScrollTrigger);

// export default function Video() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const bgVideoRef = useRef<HTMLVideoElement>(null);
//   const fgVideoRef = useRef<HTMLVideoElement>(null);

//   const scrollProgressRef = useRef(0);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);

//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
//   const rafRef = useRef<number>(0);

//   const FG_TOTAL_FRAMES = 405;
//   const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
//   const START_BG_AT_FRAME = 130;
//   const targetProgress = 289 / FG_FRAME_MAX;

//   /* ---------------- VIDEO SETUP ---------------- */

//   useEffect(() => {
//     const setup = (v: HTMLVideoElement, src: string) => {
//       v.src = src;
//       v.muted = true;
//       v.playsInline = true;
//       v.preload = "auto";
//       v.crossOrigin = "anonymous";
//       v.load();

//       // safari wake
//       v.currentTime = 0.01;
//       setTimeout(() => (v.currentTime = 0), 300);
//     };

//     if (bgVideoRef.current) setup(bgVideoRef.current, "/iphoneframes/bgscrub.mp4");
//     if (fgVideoRef.current) setup(fgVideoRef.current, "/iphoneframes/remember.mp4");
//   }, []);

//   /* ---------------- RAF SCRUB ---------------- */

//   useEffect(() => {
//     const fg = fgVideoRef.current;
//     const bg = bgVideoRef.current;
//     if (!fg || !bg) return;

//     let lastTime = performance.now();
//     let lastRender = 0;
//     let fgDuration = 0;
//     let bgDuration = 0;

//     const animate = (time: number) => {
//       if (time - lastRender < 16) {
//         rafRef.current = requestAnimationFrame(animate);
//         return;
//       }
//       lastRender = time;

//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;

//       if (!fgDuration && fg.duration) {
//         fgDuration = fg.duration;
//         bgDuration = bg.duration || 0;
//       }

//       if (!fgDuration) {
//         rafRef.current = requestAnimationFrame(animate);
//         return;
//       }

//       const damping = 1 - Math.exp(-delta * 18);
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) * damping;

//       const smooth = Math.min(Math.max(smoothProgressRef.current, 0), 1);

//       const fgTarget = smooth * fgDuration;
//       if (Math.abs(fg.currentTime - fgTarget) > 0.03) {
//         fg.fastSeek ? fg.fastSeek(fgTarget) : (fg.currentTime = fgTarget);
//       }

//       const frame = smooth * FG_FRAME_MAX;

//       if (frame >= START_BG_AT_FRAME && bgDuration) {
//         const bgProg =
//           (frame - START_BG_AT_FRAME) / (FG_FRAME_MAX - START_BG_AT_FRAME);
//         const bgTarget = bgProg * bgDuration;

//         if (Math.abs(bg.currentTime - bgTarget) > 0.03) {
//           bg.fastSeek ? bg.fastSeek(bgTarget) : (bg.currentTime = bgTarget);
//         }
//       } else if (bg.currentTime > 0.03) {
//         bg.currentTime = 0;
//       }

//       scrollProgressRef.current = smooth;
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   /* ---------------- SCROLLTRIGGER + NAV SIGNAL ---------------- */

//   useEffect(() => {
//     if (!containerRef.current) return;

//     scrollTriggerRef.current?.kill();

//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=400%",
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;

//         // 🔔 NAVBAR SIGNAL
//         if (self.progress > 0.02) {
//           localStorage.setItem("TW_ACTIVE_NAV", "TeraaMart");
//           window.dispatchEvent(new Event("storage"));
//         }
//       },
//       onRefresh: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//     });

//     scrollTriggerRef.current = st;

//     // tell Home video is mounted
//     (window as any).__VIDEO_READY__ = true;

//     return () => st.kill();
//   }, []);

//   /* ---------------- EXTERNAL JUMP ---------------- */

//   useEffect(() => {
//     const handle = () => {
//       if (!fgVideoRef.current) return;

//       rawProgressRef.current = targetProgress;
//       smoothProgressRef.current = targetProgress;

//       fgVideoRef.current.currentTime =
//         targetProgress * fgVideoRef.current.duration;
//     };

//     window.addEventListener("triggerVideoJump", handle);
//     return () => window.removeEventListener("triggerVideoJump", handle);
//   }, []);

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
//         <video
//           ref={fgVideoRef}
//           className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//           style={{ imageRendering: "crisp-edges" }}
//           playsInline
//           muted
//         />

//         {/* COIN */}
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
  const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
  const START_BG_AT_FRAME = 130;
  const targetProgress = 289 / FG_FRAME_MAX;

  /* ---------------- VIDEO SETUP ---------------- */
  useEffect(() => {
    const setupVideo = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.crossOrigin = "anonymous";
      video.load();

      // tiny wake-up for Safari
      video.currentTime = 0.01;
      setTimeout(() => {
        video.currentTime = 0;
      }, 300);
    };

    if (bgVideoRef.current) setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub.mp4");
    if (fgVideoRef.current) setupVideo(fgVideoRef.current, "/iphoneframes/remember.mp4");
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
      if (time - lastRender < 16) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastRender = time;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!fgDuration && fgVideo.duration) {
        fgDuration = fgVideo.duration;
        bgDuration = bgVideo.duration || 0;
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
    


    return () => st.kill();
  }, []);

  /* ---------------- EXTERNAL JUMP ---------------- */
  useEffect(() => {
    const handleTrigger = () => {
      if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
        window.scrollTo(0, 0);
        const st = scrollTriggerRef.current;
        const pos = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({ top: pos, behavior: "instant" });

        rawProgressRef.current = targetProgress;
        smoothProgressRef.current = targetProgress;
        fgVideoRef.current.currentTime =
          targetProgress * fgVideoRef.current.duration;
      }
    };

    window.addEventListener("triggerVideoJump", handleTrigger);
    return () => window.removeEventListener("triggerVideoJump", handleTrigger);
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
