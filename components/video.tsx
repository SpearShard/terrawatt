// "use client";

// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import { Canvas } from "@react-three/fiber";

// import ScrollingCoin from "./ScrollingCoin";

// import { ScrollTrigger } from "../app/lib/gsap";

// export default function Video() {
//   // ======================================================
//   // REFS
//   // ======================================================

//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   const fgVideoRef =
//     useRef<HTMLVideoElement>(null);

//   const bgVideoRef =
//     useRef<HTMLVideoElement>(null);

//   const mobileImageRef =
//     useRef<HTMLImageElement>(null);

//   const scrollTriggerRef =
//     useRef<ScrollTrigger | null>(
//       null
//     );

//   const rawProgressRef =
//     useRef(0);

//   const smoothProgressRef =
//     useRef(0);

//   const scrollProgressRef =
//     useRef(0);

//   const lastFrameRef =
//     useRef(-1);

//   const mobileFramesRef =
//     useRef<string[]>([]);

//   // ======================================================
//   // STATE
//   // ======================================================

//   const [isMobile, setIsMobile] =
//     useState(false);

//   // ======================================================
//   // CONSTANTS
//   // ======================================================

//   const FG_TOTAL_FRAMES = 451;

//   const FG_FRAME_MAX =
//     FG_TOTAL_FRAMES - 1;

//   const START_BG_AT_FRAME = 251;

//   const MOBILE_TOTAL_FRAMES = 82;

//   const TARGET_PROGRESS =
//     328 / FG_FRAME_MAX;

//   // ======================================================
//   // MOBILE CHECK
//   // ======================================================

//   useEffect(() => {
//     const check = () => {
//       setIsMobile(
//         window.innerWidth < 640
//       );
//     };

//     check();

//     window.addEventListener(
//       "resize",
//       check
//     );

//     return () =>
//       window.removeEventListener(
//         "resize",
//         check
//       );
//   }, []);

//   // ======================================================
//   // MOBILE FRAME PATHS
//   // ======================================================

//   useEffect(() => {
//     mobileFramesRef.current =
//       Array.from(
//         {
//           length:
//             MOBILE_TOTAL_FRAMES,
//         },

        

//         (_, i) =>
//           `/iphoneframes/mobile_avif_frames/frame_${String(
//             i + 1
//           ).padStart(3, "0")}.avif`
//       );

//     // preload mobile images
//     mobileFramesRef.current.forEach(
//       (src) => {
//         const img =
//           new Image();

//         img.src = src;
//       }
//     );

//     // initial frame
//     if (
//       mobileImageRef.current
//     ) {
//       const targetFrame =
//         Math.floor(
//           TARGET_PROGRESS *
//             (MOBILE_TOTAL_FRAMES -
//               1)
//         );

//       mobileImageRef.current.src =
//         mobileFramesRef.current[
//           targetFrame
//         ];

//       lastFrameRef.current =
//         targetFrame;
//     }
//   }, []);

//   // ======================================================
//   // DESKTOP VIDEO SETUP
//   // ======================================================

//   useEffect(() => {
//     if (isMobile) return;

//     const fg =
//       fgVideoRef.current;

//     const bg =
//       bgVideoRef.current;

//     if (!fg || !bg) return;

//     const setup = (
//       video: HTMLVideoElement,
//       src: string
//     ) => {
//       video.src = src;

//       video.muted = true;

//       video.playsInline = true;

//       video.preload = "auto";

//       video.load();
//     };

//     setup(
//       fg,
//       "/iphoneframes/androscrub.webm"
//     );

//     setup(
//       bg,
//       "/iphoneframes/whitetickets.mp4"
//     );
//   }, [isMobile]);

//   // ======================================================
//   // RAF LOOP
//   // ======================================================

//   useEffect(() => {
//     let raf = 0;

//     let lastTime =
//       performance.now();

//     let fgDuration = 0;

//     let bgDuration = 0;

//     const fg =
//       fgVideoRef.current;

//     const bg =
//       bgVideoRef.current;

//     const animate = (
//       time: number
//     ) => {
//       const delta = Math.min(
//         (time - lastTime) / 1000,
//         0.1
//       );

//       lastTime = time;

//       const damping =
//         1 -
//         Math.exp(-delta * 12);

//       smoothProgressRef.current +=
//         (rawProgressRef.current -
//           smoothProgressRef.current) *
//         damping;

//       const smooth =
//         smoothProgressRef.current;

//       scrollProgressRef.current =
//         smooth;

//       // ==================================================
//       // MOBILE IMAGE SEQUENCE
//       // ==================================================

//       if (
//         isMobile &&
//         mobileImageRef.current
//       ) {
//         const frame =
//           Math.floor(
//             smooth *
//               (MOBILE_TOTAL_FRAMES -
//                 1)
//           );

//         if (
//           frame !==
//           lastFrameRef.current
//         ) {
//           lastFrameRef.current =
//             frame;

//           mobileImageRef.current.src =
//             mobileFramesRef.current[
//               frame
//             ];
//         }
//       }

//       // ==================================================
//       // DESKTOP VIDEO SYSTEM
//       // ==================================================

//       else if (
//         !isMobile &&
//         fg &&
//         bg
//       ) {
//         if (
//           !fgDuration &&
//           fg.duration
//         ) {
//           fgDuration =
//             fg.duration;

//           bgDuration =
//             bg.duration || 0;
//         }

//         if (fgDuration) {
//           const fgTarget =
//             smooth *
//             fgDuration;

//           if (
//             Math.abs(
//               fg.currentTime -
//                 fgTarget
//             ) > 0.02
//           ) {
//             fg.currentTime =
//               fgTarget;
//           }

//           const currentFgFrame =
//             smooth *
//             FG_FRAME_MAX;

//           if (
//             currentFgFrame >=
//               START_BG_AT_FRAME &&
//             bgDuration
//           ) {
//             const bgProgress =
//               (currentFgFrame -
//                 START_BG_AT_FRAME) /
//               (FG_FRAME_MAX -
//                 START_BG_AT_FRAME);

//             const bgTarget =
//               bgProgress *
//               bgDuration;

//             if (
//               Math.abs(
//                 bg.currentTime -
//                   bgTarget
//               ) > 0.02
//             ) {
//               bg.currentTime =
//                 bgTarget;
//             }
//           }
//         }
//       }

//       raf =
//         requestAnimationFrame(
//           animate
//         );
//     };

//     raf =
//       requestAnimationFrame(animate);

//     return () =>
//       cancelAnimationFrame(raf);
//   }, [isMobile]);

//   // ======================================================
//   // SCROLLTRIGGER
//   // ======================================================

//   useEffect(() => {
//     if (!containerRef.current)
//       return;

//     const st =
//       ScrollTrigger.create({
//         trigger:
//           containerRef.current,

//         start: "top top",

//         end: "+=400%",

//         pin: true,

//         anticipatePin: 1,

//         onUpdate: (self) => {
//           rawProgressRef.current =
//             self.progress;
//         },
//       });

//     scrollTriggerRef.current =
//       st;

//     window.dispatchEvent(
//       new Event(
//         "videoScrollReady"
//       )
//     );

//     return () => st.kill();
//   }, []);

//   // ======================================================
//   // EXTERNAL JUMP
//   // ======================================================

//   useEffect(() => {
//     const jump = () => {
//       const st =
//         scrollTriggerRef.current;

//       if (!st) return;

//       const scrollPos =
//         st.start +
//         TARGET_PROGRESS *
//           (st.end - st.start);

//       rawProgressRef.current =
//         TARGET_PROGRESS;

//       smoothProgressRef.current =
//         TARGET_PROGRESS;

//       scrollProgressRef.current =
//         TARGET_PROGRESS;

//       // mobile exact frame
//       if (
//         isMobile &&
//         mobileImageRef.current
//       ) {
//         const targetFrame =
//           Math.floor(
//             TARGET_PROGRESS *
//               (MOBILE_TOTAL_FRAMES -
//                 1)
//           );

//         mobileImageRef.current.src =
//           mobileFramesRef.current[
//             targetFrame
//           ];

//         lastFrameRef.current =
//           targetFrame;
//       }

//       window.scrollTo({
//         top: scrollPos,
//         behavior: "auto",
//       });
//     };

//     const handler = () => {
//       jump();
//     };

//     window.addEventListener(
//       "triggerVideoJump",
//       handler
//     );

//     if (
//       (window as any)
//         .__TERAAMART_PENDING__
//     ) {
//       handler();

//       (
//         window as any
//       ).__TERAAMART_PENDING__ =
//         false;
//     }

//     return () => {
//       window.removeEventListener(
//         "triggerVideoJump",
//         handler
//       );
//     };
//   }, [isMobile]);

//   // ======================================================
//   // JSX
//   // ======================================================

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black"
//     >
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">

//         {/* ==================================================
//             MOBILE IMAGE SEQUENCE
//         ================================================== */}

//         {isMobile ? (
//           <>
//             <img
//               ref={mobileImageRef}
//               alt="mobile-frame"
//               className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
//               draggable={false}
//             />

//             {/* COIN */}

//             <div className="absolute inset-0 z-20 pointer-events-none">
//               <Canvas
//                 camera={{
//                   position: [
//                     0,
//                     0,
//                     2.5,
//                   ],

//                   near: 0.001,

//                   far: 1000,

//                   fov: 50,
//                 }}
//               >
//                 <ScrollingCoin
//                   progressRef={
//                     scrollProgressRef
//                   }
//                 />
//               </Canvas>
//             </div>
//           </>
//         ) : (
//           <>
//             {/* BG VIDEO */}

//             <video
//               ref={bgVideoRef}
//               className="absolute inset-0 w-full h-full object-cover pointer-events-none"
//               playsInline
//               muted
//             />

//             {/* FG VIDEO */}

//             <video
//               ref={fgVideoRef}
//               className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//               playsInline
//               muted
//             />

//             {/* COIN */}

//             <div className="absolute inset-0 z-20 pointer-events-none">
//               <Canvas
//                 camera={{
//                   position: [
//                     0,
//                     0,
//                     2.5,
//                   ],

//                   near: 0.001,

//                   far: 1000,

//                   fov: 50,
//                 }}
//               >
//                 <ScrollingCoin
//                   progressRef={
//                     scrollProgressRef
//                   }
//                 />
//               </Canvas>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

















"use client";

import {
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";

import { Canvas } from "@react-three/fiber";

import ScrollingCoin from "./ScrollingCoin";

import { ScrollTrigger } from "../app/lib/gsap";

// ======================================================
// TYPES
// ======================================================

type FrameCache = Map<
  number,
  HTMLImageElement
>;

// ======================================================
// COMPONENT
// ======================================================

export default function DashFrame() {
  // ======================================================
  // REFS
  // ======================================================

  const containerRef =
    useRef<HTMLDivElement>(null);

  const fgVideoRef =
    useRef<HTMLVideoElement>(null);

  const bgVideoRef =
    useRef<HTMLVideoElement>(null);

  const mobileImageRef =
    useRef<HTMLImageElement>(null);

  const scrollTriggerRef =
    useRef<ScrollTrigger | null>(
      null
    );

  const rawProgressRef =
    useRef(0);

  const smoothProgressRef =
    useRef(0);

  const scrollProgressRef =
    useRef(0);

  const rafRef =
    useRef<number>(0);

  const lastFrameRef =
    useRef(-1);

  const frameCacheRef =
    useRef<FrameCache>(
      new Map()
    );

  // ======================================================
  // STATE
  // ======================================================

  const [isMobile, setIsMobile] =
    useState(false);

  // ======================================================
  // CONSTANTS
  // ======================================================

  const FG_TOTAL_FRAMES = 451;

  const FG_FRAME_MAX =
    FG_TOTAL_FRAMES - 1;

  const START_BG_AT_FRAME = 251;

  const MOBILE_TOTAL_FRAMES = 158;

  const TARGET_PROGRESS =
    328 / FG_FRAME_MAX;

  // ======================================================
  // MOBILE FRAME PATHS
  // ======================================================

  const mobileFrames =
    useMemo(
      () =>
        Array.from(
          {
            length:
              MOBILE_TOTAL_FRAMES,
          },

          (_, i) =>
            `/iphoneframes/phoneavif/frame_${String(
              i + 1
            ).padStart(
              3,
              "0"
            )}.avif`
        ),

      []
    );

  // ======================================================
  // MOBILE DETECTION
  // ======================================================

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 640
      );
    };

    check();

    window.addEventListener(
      "resize",
      check
    );

    return () =>
      window.removeEventListener(
        "resize",
        check
      );
  }, []);

  // ======================================================
  // MOBILE PRELOAD
  // ======================================================

  useEffect(() => {
    if (!isMobile) return;

    // ============================================
    // PRELOAD ONLY IMPORTANT FRAMES
    // ============================================

    const importantFrames = [
      0,

      Math.floor(
        0.205 *
          (MOBILE_TOTAL_FRAMES -
            1)
      ),

      Math.floor(
        TARGET_PROGRESS *
          (MOBILE_TOTAL_FRAMES -
            1)
      ),
    ];

    importantFrames.forEach(
      (frameIndex) => {
        if (
          frameCacheRef.current.has(
            frameIndex
          )
        ) {
          return;
        }

        const img =
          new Image();

        img.decoding = "async";

        img.loading = "eager";

        img.src =
          mobileFrames[
            frameIndex
          ];

        frameCacheRef.current.set(
          frameIndex,
          img
        );
      }
    );

    // ============================================
    // INITIAL FRAME
    // ============================================

    const initialFrame =
      Math.floor(
        TARGET_PROGRESS *
          (MOBILE_TOTAL_FRAMES -
            1)
      );

    const initialImg =
      new Image();

    initialImg.decoding =
      "async";

    initialImg.loading =
      "eager";

    initialImg.src =
      mobileFrames[
        initialFrame
      ];

    initialImg.onload = () => {
      if (
        mobileImageRef.current
      ) {
        mobileImageRef.current.src =
          initialImg.src;

        lastFrameRef.current =
          initialFrame;
      }
    };
  }, [
    isMobile,
    mobileFrames,
  ]);

  // ======================================================
  // DESKTOP VIDEO SETUP
  // ======================================================

  useEffect(() => {
    if (isMobile) return;

    const fg =
      fgVideoRef.current;

    const bg =
      bgVideoRef.current;

    if (!fg || !bg) return;

    const setupVideo = (
      video: HTMLVideoElement,
      src: string
    ) => {
      video.src = src;

      video.muted = true;

      video.playsInline = true;

      video.preload = "auto";

      video.load();
    };

    setupVideo(
      fg,
      "/iphoneframes/androscrub.webm"
    );

    setupVideo(
      bg,
      "/iphoneframes/whitetickets.mp4"
    );

    window.dispatchEvent(
      new Event(
        "videoReady"
      )
    );
  }, [isMobile]);

  // ======================================================
  // FRAME RENDER
  // ======================================================

  const renderMobileFrame = (
    frame: number
  ) => {
    if (
      !mobileImageRef.current
    ) {
      return;
    }

    if (
      frame ===
      lastFrameRef.current
    ) {
      return;
    }

    lastFrameRef.current =
      frame;

    // ============================================
    // USE CACHE IF AVAILABLE
    // ============================================

    const cached =
      frameCacheRef.current.get(
        frame
      );

    if (
      cached &&
      cached.complete
    ) {
      mobileImageRef.current.src =
        cached.src;

      return;
    }

    // ============================================
    // LOAD FRAME
    // ============================================

    const img =
      new Image();

    img.decoding = "async";

    img.loading = "eager";

    img.src =
      mobileFrames[frame];

    frameCacheRef.current.set(
      frame,
      img
    );

    img.onload = () => {
      if (
        mobileImageRef.current
      ) {
        mobileImageRef.current.src =
          img.src;
      }
    };

    // ============================================
    // PRELOAD NEIGHBOR FRAMES
    // ============================================

    for (
      let i = frame + 1;
      i <= frame + 4;
      i++
    ) {
      if (
        i >=
        MOBILE_TOTAL_FRAMES
      ) {
        continue;
      }

      if (
        frameCacheRef.current.has(
          i
        )
      ) {
        continue;
      }

      const preload =
        new Image();

      preload.decoding =
        "async";

      preload.loading =
        "lazy";

      preload.src =
        mobileFrames[i];

      frameCacheRef.current.set(
        i,
        preload
      );
    }
  };

  // ======================================================
  // RAF LOOP
  // ======================================================

  useEffect(() => {
    let lastTime =
      performance.now();

    let fgDuration = 0;

    let bgDuration = 0;

    const fg =
      fgVideoRef.current;

    const bg =
      bgVideoRef.current;

    const animate = (
      time: number
    ) => {
      const delta = Math.min(
        (time - lastTime) /
          1000,

        0.1
      );

      lastTime = time;

      // ============================================
      // SMOOTHING
      // ============================================

      const damping =
        1 -
        Math.exp(
          -delta * 12
        );

      smoothProgressRef.current +=
        (rawProgressRef.current -
          smoothProgressRef.current) *
        damping;

      const smooth =
        smoothProgressRef.current;

      scrollProgressRef.current =
        smooth;

      // ============================================
      // MOBILE
      // ============================================

      if (isMobile) {
        const frame =
          Math.floor(
            smooth *
              (MOBILE_TOTAL_FRAMES -
                1)
          );

        renderMobileFrame(
          frame
        );
      }

      // ============================================
      // DESKTOP
      // ============================================

      else if (
        fg &&
        bg
      ) {
        if (
          !fgDuration &&
          fg.duration
        ) {
          fgDuration =
            fg.duration;

          bgDuration =
            bg.duration || 0;
        }

        if (fgDuration) {
          const fgTarget =
            smooth *
            fgDuration;

          if (
            Math.abs(
              fg.currentTime -
                fgTarget
            ) > 0.02
          ) {
            fg.currentTime =
              fgTarget;
          }

          const currentFgFrame =
            smooth *
            FG_FRAME_MAX;

          if (
            currentFgFrame >=
              START_BG_AT_FRAME &&
            bgDuration
          ) {
            const bgProgress =
              (currentFgFrame -
                START_BG_AT_FRAME) /
              (FG_FRAME_MAX -
                START_BG_AT_FRAME);

            const bgTarget =
              bgProgress *
              bgDuration;

            if (
              Math.abs(
                bg.currentTime -
                  bgTarget
              ) > 0.02
            ) {
              bg.currentTime =
                bgTarget;
            }
          }
        }
      }

      rafRef.current =
        requestAnimationFrame(
          animate
        );
    };

    rafRef.current =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        rafRef.current
      );
  }, [isMobile]);

  // ======================================================
  // SCROLLTRIGGER
  // ======================================================

  useEffect(() => {
    if (!containerRef.current)
      return;

    const st =
      ScrollTrigger.create({
        trigger:
          containerRef.current,

        start: "top top",

        end: "+=400%",

        pin: true,

        anticipatePin: 1,

        onUpdate: (self) => {
          rawProgressRef.current =
            self.progress;
        },
      });

    scrollTriggerRef.current =
      st;

    window.dispatchEvent(
      new Event(
        "videoScrollReady"
      )
    );

    return () => {
      st.kill();
    };
  }, []);

  // ======================================================
  // EXTERNAL JUMP
  // ======================================================

  useEffect(() => {
    const jump = () => {
      const st =
        scrollTriggerRef.current;

      if (!st) return;

      const scrollPos =
        st.start +
        TARGET_PROGRESS *
          (st.end -
            st.start);

      rawProgressRef.current =
        TARGET_PROGRESS;

      smoothProgressRef.current =
        TARGET_PROGRESS;

      scrollProgressRef.current =
        TARGET_PROGRESS;

      // ============================================
      // MOBILE EXACT FRAME
      // ============================================

      if (isMobile) {
        const targetFrame =
          Math.floor(
            TARGET_PROGRESS *
              (MOBILE_TOTAL_FRAMES -
                1)
          );

        renderMobileFrame(
          targetFrame
        );
      }

      window.scrollTo({
        top: scrollPos,

        behavior: "auto",
      });
    };

    window.addEventListener(
      "triggerVideoJump",
      jump
    );

    return () => {
      window.removeEventListener(
        "triggerVideoJump",
        jump
      );
    };
  }, [isMobile]);

  // ======================================================
  // JSX
  // ======================================================

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">

        {/* ==================================================
            MOBILE
        ================================================== */}

        {isMobile ? (
          <>
            <img
              ref={mobileImageRef}
              alt="mobile-frame"
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              style={{
                imageRendering:
                  "auto",
              }}
            />

            {/* COIN */}

            <div className="absolute inset-0 z-20 pointer-events-none">
              <Canvas
                camera={{
                  position: [
                    0,
                    0,
                    2.5,
                  ],

                  near: 0.001,

                  far: 1000,

                  fov: 50,
                }}
              >
                <ScrollingCoin
                  progressRef={
                    scrollProgressRef
                  }
                />
              </Canvas>
            </div>
          </>
        ) : (
          <>
            {/* ==========================================
                BG VIDEO
            ========================================== */}

            <video
              ref={bgVideoRef}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              playsInline
              muted
            />

            {/* ==========================================
                FG VIDEO
            ========================================== */}

            <video
              ref={fgVideoRef}
              className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
              playsInline
              muted
            />

            {/* ==========================================
                COIN
            ========================================== */}

            <div className="absolute inset-0 z-20 pointer-events-none">
              <Canvas
                camera={{
                  position: [
                    0,
                    0,
                    2.5,
                  ],

                  near: 0.001,

                  far: 1000,

                  fov: 50,
                }}
              >
                <ScrollingCoin
                  progressRef={
                    scrollProgressRef
                  }
                />
              </Canvas>
            </div>
          </>
        )}
      </div>
    </div>
  );
}












