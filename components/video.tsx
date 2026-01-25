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
      setupVideo(fgVideoRef.current, "/iphoneframes/iphonescrub.mp4");
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
  // useEffect(() => {
  //   const action = localStorage.getItem("TW_action");
  //   if (action === "go_mart") {
  //     localStorage.removeItem("TW_action");
  //     const jump = () => {
  //       if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
  //         ScrollTrigger.refresh();
  //         const st = scrollTriggerRef.current;
  //         const pos = st.start + targetProgress * (st.end - st.start);
  //         st.scroll(pos);

  //         rawProgressRef.current = targetProgress;
  //         smoothProgressRef.current = targetProgress;
  //         fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
  //       } else {
  //         requestAnimationFrame(jump);
  //       }
  //     };
  //     jump();
  //   }
  // }, []);

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
      <div className="sticky   top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND VIDEO */}
        <video
          ref={bgVideoRef}
          className="absolute  inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
          playsInline
          muted
        />

        {/* FOREGROUND VIDEO */}
        <video
          ref={fgVideoRef}
          className="relative max-sm:top-[3%] z-10 max-w-full max-h-screen object-contain pointer-events-none"
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

//   const FG_TOTAL_FRAMES = 405;
//   const START_BG_AT_FRAME = 130;
//   const bgStartProgress = START_BG_AT_FRAME / (FG_TOTAL_FRAMES - 1);
//   const targetProgress = 289 / (FG_TOTAL_FRAMES - 1);

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     const unlockVideo = async (video: HTMLVideoElement) => {
//       try {
//         await video.play();
//         video.pause();
//       } catch {}
//     };

//     const setupVideo = (video: HTMLVideoElement, src: string) => {
//       video.src = src;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "auto";
//       video.crossOrigin = "anonymous";
//       video.disablePictureInPicture = true;
//       video.disableRemotePlayback = true;
//       video.load();

//       video.addEventListener("loadeddata", () => unlockVideo(video), { once: true });
//     };

//     if (bgVideoRef.current) setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub1.mp4");
//     if (fgVideoRef.current) setupVideo(fgVideoRef.current, "/iphoneframes/newiphonescrub_small.mp4");
//   }, []);

//   /* ---------------- GSAP SCRUB TIMELINES ---------------- */
//   useEffect(() => {
//     if (!containerRef.current || !fgVideoRef.current || !bgVideoRef.current) return;

//     const fgVideo = fgVideoRef.current;
//     const bgVideo = bgVideoRef.current;

//     const setupTimelines = () => {
//       if (!fgVideo.duration || !bgVideo.duration) return false;

//       ScrollTrigger.refresh(); // ensure accurate measurements

//       // Foreground: full scrub over the pinned area
//       const fgTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=400%", // ← increase to +=500% or +=600% if still too fast
//           pin: true,
//           anticipatePin: 1,
//           scrub: 1, // ← higher = slower/smoother feel (try 1.5 or true for even more lag/smoothness)
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             scrollProgressRef.current = self.progress;
//           },
//         },
//       });

//       fgTl.to(fgVideo, {
//         currentTime: fgVideo.duration,
//         ease: "none",
//       });

//       // Background: separate timeline, starts at bgStartProgress
//       const bgTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=400%",
//           scrub: 1, // same as FG for sync
//           invalidateOnRefresh: true,
//         },
//       });

//       // Force reset to 0 at beginning
//       bgTl.set(bgVideo, { currentTime: 0 });

//       // Scrub BG only after start progress
//       bgTl.to(bgVideo, {
//         currentTime: bgVideo.duration,
//         ease: "none",
//       }, bgStartProgress); // ← position = fraction where BG starts (0–1 scale)

//       return true;
//     };

//     // Poll until durations are available
//     let rafId: number;
//     const check = () => {
//       if (setupTimelines()) {
//         // Success
//       } else {
//         rafId = requestAnimationFrame(check);
//       }
//     };
//     check();

//     return () => {
//       cancelAnimationFrame(rafId);
//       ScrollTrigger.getAll().forEach((t) => t?.kill());
//     };
//   }, []);

//   /* ---------------- NAVIGATION JUMPS ---------------- */
//   useEffect(() => {
//     const action = localStorage.getItem("TW_action");
//     if (action !== "go_mart") return;

//     localStorage.removeItem("TW_action");

//     const jump = () => {
//       if (!fgVideoRef.current?.duration) {
//         requestAnimationFrame(jump);
//         return;
//       }

//       ScrollTrigger.refresh();

//       const progress = targetProgress;
//       // Approximate scroll position (4 = 400%)
//       const scrollPos = window.innerHeight * 4 * progress;

//       window.scrollTo({ top: scrollPos, behavior: "instant" });

//       fgVideoRef.current.currentTime = progress * fgVideoRef.current.duration;
//       if (bgVideoRef.current) {
//         const bgProg = Math.max(0, (progress - bgStartProgress) / (1 - bgStartProgress));
//         bgVideoRef.current.currentTime = bgProg * bgVideoRef.current.duration;
//       }
//       scrollProgressRef.current = progress;
//     };

//     jump();
//   }, []);

//   useEffect(() => {
//     const handleTrigger = () => {
//       if (!fgVideoRef.current?.duration) return;

//       const progress = targetProgress;
//       const scrollPos = window.innerHeight * 4 * progress;

//       window.scrollTo({ top: scrollPos, behavior: "instant" });

//       fgVideoRef.current.currentTime = progress * fgVideoRef.current.duration;
//       if (bgVideoRef.current) {
//         const bgProg = Math.max(0, (progress - bgStartProgress) / (1 - bgStartProgress));
//         bgVideoRef.current.currentTime = bgProg * bgVideoRef.current.duration;
//       }
//       scrollProgressRef.current = progress;
//     };

//     window.addEventListener("triggerVideoJump", handleTrigger);
//     return () => window.removeEventListener("triggerVideoJump", handleTrigger);
//   }, []);

//   /* ---------------- JSX ---------------- */
//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
//         {/* BACKGROUND VIDEO */}
//         <video
//           ref={bgVideoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           playsInline
//           muted
//           preload="auto"
//           disablePictureInPicture
//           disableRemotePlayback
//         />

//         {/* FOREGROUND VIDEO */}
//         <video
//           ref={fgVideoRef}
//           className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//           playsInline
//           muted
//           preload="auto"
//           disablePictureInPicture
//           disableRemotePlayback
//         />

//         {/* 3D COIN */}
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
//             <ScrollingCoin progressRef={scrollProgressRef} />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }
