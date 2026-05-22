"use client";

import {
    SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

export default function InvestorsPage() {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const videoRef =
    useRef<HTMLVideoElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const scrollHintRef =
    useRef<HTMLDivElement>(null);

  const scrollTriggerRef =
    useRef<ScrollTrigger | null>(
      null
    );

  const rawProgressRef =
    useRef(0);

  const smoothProgressRef =
    useRef(0);

  const scrollDistanceRef =
    useRef(0);

  const mobileRafRef =
    useRef<number | null>(null);

  const atlasImages =
    useRef<HTMLImageElement[]>(
      []
    );

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  const [
    videoReady,
    setVideoReady,
  ] = useState(false);

  const [
    mobileReady,
    setMobileReady,
  ] = useState(false);

  // =====================================
  // MOBILE ATLAS CONFIG
  // =====================================

  const MOBILE_ATLAS = {
    total: 187,

    per: 143,

    cols: 13,

    rows: 11,

    

    

    paths: [
      "/investwebp/mobileinvestor/atlas_output/atlas1.webp",

      "/investwebp/mobileinvestor/atlas_output/atlas2.webp",
    ],
  };

  // =====================================
  // MOBILE DETECTION
  // =====================================

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 640
      );

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

  // =====================================
  // SCROLL DISTANCE
  // =====================================

  useEffect(() => {
    const calc = () => {
      if (
        window.innerWidth < 640
      )
        return (
          MOBILE_ATLAS.total * 50
        );

      if (
        window.innerWidth < 1024
      )
        return (
          MOBILE_ATLAS.total * 60
        );

      return (
        MOBILE_ATLAS.total * 70
      );
    };

    const update = () => {
      scrollDistanceRef.current =
        calc();

      ScrollTrigger.refresh();
    };

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  // =====================================
  // MOBILE CANVAS RENDERER
  // =====================================

  const drawFrame = (
    frame: number
  ) => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    const atlasIndex =
      Math.min(
        atlasImages.current
          .length - 1,
        Math.floor(
          frame /
            MOBILE_ATLAS.per
        )
      );

    const atlas =
      atlasImages.current[
        atlasIndex
      ];

    if (!atlas) return;

    const localFrame =
      frame -
      atlasIndex *
        MOBILE_ATLAS.per;

    const col =
      localFrame %
      MOBILE_ATLAS.cols;

    const row =
      Math.floor(
        localFrame /
          MOBILE_ATLAS.cols
      );

    const frameWidth =
  atlas.width /
  MOBILE_ATLAS.cols;

const frameHeight =
  atlas.height /
  MOBILE_ATLAS.rows;

const sx =
  col * frameWidth;

const sy =
  row * frameHeight;

    const dpr =
      window.devicePixelRatio ||
      1;

    const width =
      canvas.clientWidth;

    const height =
      canvas.clientHeight;

    if (
      canvas.width !==
        width * dpr ||
      canvas.height !==
        height * dpr
    ) {
      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;
    }

    ctx.setTransform(
  1,
  0,
  0,
  1,
  0,
  0
);

ctx.scale(dpr, dpr);

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    const scale =
      Math.min(
        width / frameWidth,
        height / frameHeight
      );

    const drawWidth =
  frameWidth * scale;

const drawHeight =
  frameHeight * scale;

    const dx =
      (width - drawWidth) / 2;

    const dy =
      (height - drawHeight) /
      2;

    ctx.drawImage(
      atlas,
      sx,
      sy,
      frameWidth,
frameHeight,
      dx,
      dy,
      drawWidth,
      drawHeight
    );
  };

  // =====================================
  // LOAD MOBILE ATLASES
  // =====================================

  useEffect(() => {
    if (!isMobile) return;

    Promise.all(
      MOBILE_ATLAS.paths.map(
        (src) => {
          return new Promise<HTMLImageElement>(
            (
              resolve,
              reject
            ) => {
              const cached =
  (
    window as any
  ).__INVESTOR_TEXTURES__?.get(
    src
  );

if (cached) {
  resolve(cached);

  return;
}

const img =
  new Image();

img.src = src;

              img.decoding =
                "async";

              img.onload =
                async () => {
                  try {
                    await img.decode();
                  } catch {}

                  resolve(img);
                };

              img.onerror =
                reject;
            }
          );
        }
      )
    )
      .then((imgs) => {
        atlasImages.current =
          imgs;

        drawFrame(0);

        setMobileReady(
          true
        );

        ScrollTrigger.refresh();
      })
      .catch(console.error);
  }, [isMobile]);

  // =====================================
  // DESKTOP VIDEO
  // =====================================

  useEffect(() => {
    if (
      isMobile ||
      window.innerWidth < 640
    )
      return;

    const video =
      videoRef.current;

    if (!video) return;

    video.src =
      "/investwebp/invescrub.webm";

    video.muted = true;

    video.playsInline =
      true;

    video.preload = "auto";

    video.load();

    const wake =
      async () => {
        try {
          video.currentTime =
            0.01;

          await video
            .play()
            .catch(() => {});

          video.pause();

          video.currentTime = 0;
        } catch {}

        setVideoReady(true);
      };

    video.addEventListener(
      "loadeddata",
      wake,
      { once: true }
    );

    return () =>
      video.removeEventListener(
        "loadeddata",
        wake
      );
  }, [isMobile]);

  // =====================================
  // DESKTOP VIDEO SCRUB
  // =====================================

  useEffect(() => {
    if (
      !videoReady ||
      isMobile
    )
      return;

    const video =
      videoRef.current;

    if (!video) return;

    let raf = 0;

    let last =
      performance.now();

    const animate = (
      time: number
    ) => {
      const delta =
        Math.min(
          (time - last) / 1000,
          0.1
        );

      last = time;

      if (!video.duration) {
        raf =
          requestAnimationFrame(
            animate
          );

        return;
      }

      const damping = 8;

      smoothProgressRef.current +=
        (rawProgressRef.current -
          smoothProgressRef.current) *
        (1 -
          Math.exp(
            -damping * delta
          ));

      const target =
        smoothProgressRef.current *
        video.duration;

      if (
        Math.abs(
          video.currentTime -
            target
        ) > 0.04
      ) {
        video.currentTime =
          target;
      }

      raf =
        requestAnimationFrame(
          animate
        );
    };

    raf =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        raf
      );
  }, [videoReady, isMobile]);

  // =====================================
  // MOBILE RAF LOOP
  // =====================================

  useEffect(() => {
    if (
      !isMobile ||
      !mobileReady
    )
      return;

    let last =
      performance.now();

    let lastFrame = -1;

    const animate = (
      time: number
    ) => {
      const delta =
        Math.min(
          (time - last) / 1000,
          0.1
        );

      last = time;

      const speed = 5;

      smoothProgressRef.current +=
        (rawProgressRef.current -
          smoothProgressRef.current) *
        Math.min(
          delta * speed,
          1
        );

      const progress =
        Math.max(
          0,
          Math.min(
            1,
            smoothProgressRef.current
          )
        );

      const frame =
        Math.floor(
          progress *
            (MOBILE_ATLAS.total -
              1)
        );

      if (
        frame !== lastFrame
      ) {
        drawFrame(frame);

        lastFrame = frame;
      }

      mobileRafRef.current =
        requestAnimationFrame(
          animate
        );
    };

    mobileRafRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        mobileRafRef.current
      ) {
        cancelAnimationFrame(
          mobileRafRef.current
        );
      }
    };
  }, [isMobile, mobileReady]);

  // =====================================
  // SCROLLTRIGGER
  // =====================================

  useEffect(() => {
    if (
      !containerRef.current
    )
      return;

    if (
      isMobile &&
      !mobileReady
    )
      return;

    if (
      !isMobile &&
      !videoReady
    )
      return;

    scrollTriggerRef.current?.kill();

    scrollTriggerRef.current =
      ScrollTrigger.create({
        trigger:
          containerRef.current,

        start: "top top",

        end: `+=${scrollDistanceRef.current}px`,

        pin: true,

        anticipatePin: 1,

        onUpdate: (self) => {
          rawProgressRef.current =
            self.progress;

          if (
            scrollHintRef.current
          ) {
            if (
              self.progress >
              0.02
            ) {
              gsap.to(
                scrollHintRef.current,
                {
                  opacity: 0,
                  y: -40,
                  duration: 0.6,
                  ease:
                    "power2.out",
                  pointerEvents:
                    "none",
                }
              );
            } else {
              gsap.to(
                scrollHintRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease:
                    "power2.out",
                  pointerEvents:
                    "auto",
                }
              );
            }
          }
        },
      });

    return () =>
      scrollTriggerRef.current?.kill();
  }, [
    isMobile,
    mobileReady,
    videoReady,
  ]);

  // =====================================
  // REFRESH
  // =====================================

  useEffect(() => {
    const t = setTimeout(
      () => {
        ScrollTrigger.refresh();
      },
      100
    );

    return () =>
      clearTimeout(t);
  }, []);

  return (
    <>
      

      <div className="relative w-full min-h-screen bg-black ">

        <div
          ref={containerRef}
          className="relative z-10 w-full overflow-hidden"
        >
          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center relative">

            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">

              {isMobile ? (
                <canvas
  ref={canvasRef}
  className="absolute inset-0 w-full h-full overflow-hidden"
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

            {/* SCROLL INDICATOR */}

            <div
              ref={scrollHintRef}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white z-20"
            >
              <p className="text-xs tracking-[0.35em] uppercase opacity-80">
                Scroll
              </p>

              <div className="w-[2px] h-12 bg-white/30 overflow-hidden relative">
                <div className="absolute top-0 w-full h-4 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}




















// "use client";

// import {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import Footer from "@/components/Footer";

// import gsap from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(
//   ScrollTrigger
// );

// // ======================================================
// // CONSTANTS
// // ======================================================

// const MOBILE_BREAKPOINT =
//   640;

// const MOBILE_FRAMES = 187;

// // ======================================================
// // COMPONENT
// // ======================================================

// export default function InvestorsSection() {
//   // ======================================================
//   // REFS
//   // ======================================================

//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   const videoRef =
//     useRef<HTMLVideoElement>(null);

//   const imageRef =
//     useRef<HTMLImageElement>(null);

//   const triggerRef =
//     useRef<ScrollTrigger | null>(
//       null
//     );

//   const rafRef =
//     useRef(0);

//   const cacheRef =
//     useRef(
//       new Map<
//         number,
//         HTMLImageElement
//       >()
//     );

//   const progressRef =
//     useRef(0);

//   const smoothRef =
//     useRef(0);

//   const lastFrameRef =
//     useRef(-1);

//   // ======================================================
//   // STATE
//   // ======================================================

//   const [mounted, setMounted] =
//     useState(false);

//   const [isMobile, setIsMobile] =
//     useState(false);

//   const [videoReady, setVideoReady] =
//     useState(false);

//   // ======================================================
//   // MOBILE FRAMES
//   // ======================================================

//   const mobileFrames =
//     useMemo(
//       () =>
//         Array.from(
//           {
//             length:
//               MOBILE_FRAMES,
//           },

//           (_, i) =>
//             `/investwebp/invesavif/frame_${String(
//               i + 1
//             ).padStart(
//               4,
//               "0"
//             )}.avif`
//         ),

//       []
//     );

//   // ======================================================
//   // MOUNT
//   // ======================================================

//   useEffect(() => {
//     setMounted(true);

//     setIsMobile(
//       window.innerWidth <
//         MOBILE_BREAKPOINT
//     );
//   }, []);

//   // ======================================================
//   // RESIZE
//   // ======================================================

//   useEffect(() => {
//     if (!mounted) return;

//     const onResize = () => {
//       setIsMobile(
//         window.innerWidth <
//           MOBILE_BREAKPOINT
//       );
//     };

//     window.addEventListener(
//       "resize",
//       onResize
//     );

//     return () =>
//       window.removeEventListener(
//         "resize",
//         onResize
//       );
//   }, [mounted]);

//   // ======================================================
//   // MOBILE PRELOAD
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       !isMobile
//     ) {
//       return;
//     }

//     const importantFrames = [
//       0,
//       1,
//       2,
//       40,
//       80,
//       120,
//       160,
//       209,
//     ];

//     importantFrames.forEach(
//       (frame) => {
//         if (
//           cacheRef.current.has(
//             frame
//           )
//         ) {
//           return;
//         }

//         const img =
//           new Image();

//         img.decoding =
//           "async";

//         img.loading =
//           "eager";

//         img.src =
//           mobileFrames[
//             frame
//           ];

//         cacheRef.current.set(
//           frame,
//           img
//         );
//       }
//     );

//     // initial frame

//     if (imageRef.current) {
//       imageRef.current.src =
//         mobileFrames[0];
//     }
//   }, [
//     mounted,
//     isMobile,
//     mobileFrames,
//   ]);

//   // ======================================================
//   // DESKTOP VIDEO
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       isMobile
//     ) {
//       return;
//     }

//     const video =
//       videoRef.current;

//     if (!video) return;

//     video.src =
//       "/investwebp/invescrub.webm";

//     video.muted = true;

//     video.playsInline = true;

//     video.preload = "auto";

//     video.load();

//     const onReady =
//       async () => {
//         try {
//           video.currentTime =
//             0.01;

//           await video
//             .play()
//             .catch(() => {});

//           video.pause();

//           video.currentTime = 0;
//         } catch {}

//         setVideoReady(true);
//       };

//     video.addEventListener(
//       "loadeddata",
//       onReady,
//       { once: true }
//     );

//     return () =>
//       video.removeEventListener(
//         "loadeddata",
//         onReady
//       );
//   }, [
//     mounted,
//     isMobile,
//   ]);

//   // ======================================================
//   // MOBILE FRAME RENDER
//   // ======================================================

//   const renderFrame = (
//     frame: number
//   ) => {
//     if (
//       !imageRef.current ||
//       frame ===
//         lastFrameRef.current
//     ) {
//       return;
//     }

//     lastFrameRef.current =
//       frame;

//     const cached =
//       cacheRef.current.get(
//         frame
//       );

//     // cached

//     if (
//       cached?.complete
//     ) {
//       imageRef.current.src =
//         cached.src;

//       return;
//     }

//     // load frame

//     const img =
//       new Image();

//     img.decoding =
//       "async";

//     img.loading =
//       "eager";

//     img.src =
//       mobileFrames[frame];

//     cacheRef.current.set(
//       frame,
//       img
//     );

//     img.onload = () => {
//       if (
//         imageRef.current
//       ) {
//         imageRef.current.src =
//           img.src;
//       }
//     };

//     // preload nearby

//     for (
//       let i = frame + 1;
//       i <= frame + 4;
//       i++
//     ) {
//       if (
//         i >=
//           MOBILE_FRAMES ||
//         cacheRef.current.has(i)
//       ) {
//         continue;
//       }

//       const preload =
//         new Image();

//       preload.decoding =
//         "async";

//       preload.loading =
//         "lazy";

//       preload.src =
//         mobileFrames[i];

//       cacheRef.current.set(
//         i,
//         preload
//       );
//     }
//   };

//   // ======================================================
//   // RAF LOOP
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       (!isMobile &&
//         !videoReady)
//     ) {
//       return;
//     }

//     const video =
//       videoRef.current;

//     let last =
//       performance.now();

//     const animate = (
//       time: number
//     ) => {
//       const delta =
//         Math.min(
//           (time - last) /
//             1000,

//           0.1
//         );

//       last = time;

//       smoothRef.current +=
//         (progressRef.current -
//           smoothRef.current) *
//         (1 -
//           Math.exp(
//             -delta * 8
//           ));

//       const smooth =
//         smoothRef.current;

//       // ==================================================
//       // MOBILE
//       // ==================================================

//       if (isMobile) {
//         const frame =
//           Math.floor(
//             smooth *
//               (MOBILE_FRAMES -
//                 1)
//           );

//         renderFrame(frame);
//       }

//       // ==================================================
//       // DESKTOP
//       // ==================================================

//       else if (
//         video?.duration
//       ) {
//         const target =
//           smooth *
//           video.duration;

//         if (
//           Math.abs(
//             video.currentTime -
//               target
//           ) > 0.03
//         ) {
//           video.currentTime =
//             target;
//         }
//       }

//       rafRef.current =
//         requestAnimationFrame(
//           animate
//         );
//     };

//     rafRef.current =
//       requestAnimationFrame(
//         animate
//       );

//     return () =>
//       cancelAnimationFrame(
//         rafRef.current
//       );
//   }, [
//     mounted,
//     isMobile,
//     videoReady,
//   ]);

//   // ======================================================
//   // SCROLLTRIGGER
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       !containerRef.current ||
//       (!isMobile &&
//         !videoReady)
//     ) {
//       return;
//     }

//     triggerRef.current?.kill();

//     triggerRef.current =
//       ScrollTrigger.create({
//         trigger:
//           containerRef.current,

//         start: "top top",

//         end: `+=${MOBILE_FRAMES * 55}`,

//         pin: true,

//         anticipatePin: 1,

//         onUpdate: (
//           self
//         ) => {
//           progressRef.current =
//             self.progress;
//         },
//       });

//     requestAnimationFrame(() => {
//       ScrollTrigger.refresh(
//         true
//       );
//     });

//     return () =>
//       triggerRef.current?.kill();
//   }, [
//     mounted,
//     isMobile,
//     videoReady,
//   ]);

//   // ======================================================
//   // SSR SAFETY
//   // ======================================================

//   if (!mounted) {
//     return null;
//   }

//   // ======================================================
//   // JSX
//   // ======================================================

//   return (
//     <>
//       <section className="relative w-full min-h-screen bg-black">

//         <div
//           ref={containerRef}
//           className="relative w-full h-screen overflow-hidden"
//         >
//           <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">

//             {/* ==================================================
//                 MOBILE → AVIF FRAMES
//             ================================================== */}

//             {isMobile ? (
//               <img
//                 ref={imageRef}
//                 alt="investor-frame"
//                 draggable={false}
//                 className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
//               />
//             ) : (

//               /* ==================================================
//                   DESKTOP → VIDEO
//               ================================================== */

//               <video
//                 ref={videoRef}
//                 className="absolute inset-0 w-full h-full object-contain"
//                 muted
//                 playsInline
//               />
//             )}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


















// "use client";

// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import Footer from "@/components/Footer";

// import gsap from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(
//   ScrollTrigger
// );

// // ======================================================
// // COMPONENT
// // ======================================================

// export default function InvestorsSection() {
//   // ======================================================
//   // REFS
//   // ======================================================

//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   const videoRef =
//     useRef<HTMLVideoElement>(null);

//   const triggerRef =
//     useRef<ScrollTrigger | null>(
//       null
//     );

//   const rafRef =
//     useRef(0);

//   const progressRef =
//     useRef(0);

//   const smoothRef =
//     useRef(0);

//   // ======================================================
//   // STATE
//   // ======================================================

//   const [mounted, setMounted] =
//     useState(false);

//   const [videoReady, setVideoReady] =
//     useState(false);

//   const [isMobile, setIsMobile] =
//     useState(false);

//   // ======================================================
//   // MOUNT
//   // ======================================================

//   useEffect(() => {
//     setMounted(true);

//     const checkMobile = () => {
//       setIsMobile(
//         window.innerWidth < 768
//       );
//     };

//     checkMobile();

//     window.addEventListener(
//       "resize",
//       checkMobile
//     );

//     return () =>
//       window.removeEventListener(
//         "resize",
//         checkMobile
//       );
//   }, []);

//   // ======================================================
//   // VIDEO SETUP
//   // ======================================================

//   useEffect(() => {
//     if (!mounted) return;

//     const video =
//       videoRef.current;

//     if (!video) return;

//     // ==================================================
//     // DESKTOP + MOBILE SOURCES
//     // ==================================================

//     video.src = isMobile
//       ? "/investwebp/invesmobile.mp4"
//       : "/investwebp/invesh264.mp4";

//     video.muted = true;

//     video.playsInline = true;

//     video.preload = "auto";

//     video.load();

//     const onReady =
//       async () => {
//         try {
//           // wake decoder

//           video.currentTime =
//             0.01;

//           await video
//             .play()
//             .catch(() => {});

//           video.pause();

//           video.currentTime = 0;
//         } catch {}

//         setVideoReady(true);
//       };

//     video.addEventListener(
//       "loadeddata",
//       onReady,
//       { once: true }
//     );

//     return () =>
//       video.removeEventListener(
//         "loadeddata",
//         onReady
//       );
//   }, [
//     mounted,
//     isMobile,
//   ]);

//   // ======================================================
//   // RAF SCRUB LOOP
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       !videoReady
//     ) {
//       return;
//     }

//     const video =
//       videoRef.current;

//     if (!video) return;

//     let last =
//       performance.now();

//     const animate = (
//       time: number
//     ) => {
//       const delta =
//         Math.min(
//           (time - last) /
//             1000,

//           0.1
//         );

//       last = time;

//       // ==============================================
//       // SMOOTH LERP
//       // ==============================================

//       smoothRef.current +=
//         (progressRef.current -
//           smoothRef.current) *
//         0.18;

//       const target =
//         smoothRef.current *
//         video.duration;

//       // ==============================================
//       // VIDEO SEEK
//       // ==============================================

//       if (
//         Math.abs(
//           video.currentTime -
//             target
//         ) > 0.01
//       ) {
//         video.currentTime =
//           target;
//       }

//       rafRef.current =
//         requestAnimationFrame(
//           animate
//         );
//     };

//     rafRef.current =
//       requestAnimationFrame(
//         animate
//       );

//     return () =>
//       cancelAnimationFrame(
//         rafRef.current
//       );
//   }, [
//     mounted,
//     videoReady,
//   ]);

//   // ======================================================
//   // SCROLLTRIGGER
//   // ======================================================

//   useEffect(() => {
//     if (
//       !mounted ||
//       !videoReady ||
//       !containerRef.current
//     ) {
//       return;
//     }

//     triggerRef.current?.kill();

//     triggerRef.current =
//       ScrollTrigger.create({
//         trigger:
//           containerRef.current,

//         start: "top top",

//         end: "+=9000",

//         pin: true,

//         anticipatePin: 1,

//         scrub: false,

//         onUpdate: (
//           self
//         ) => {
//           progressRef.current =
//             self.progress;
//         },
//       });

//     requestAnimationFrame(() => {
//       ScrollTrigger.refresh(
//         true
//       );
//     });

//     return () =>
//       triggerRef.current?.kill();
//   }, [
//     mounted,
//     videoReady,
//   ]);

//   // ======================================================
//   // SSR SAFETY
//   // ======================================================

//   if (!mounted) {
//     return null;
//   }

//   // ======================================================
//   // JSX
//   // ======================================================

//   return (
//     <>
//       <section className="relative w-full min-h-screen bg-black">

//         <div
//           ref={containerRef}
//           className="relative w-full h-screen overflow-hidden"
//         >
//           <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">

//             <video
//               ref={videoRef}
//               className="absolute inset-0 w-full h-full object-contain md:object-cover will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
//               muted
//               playsInline
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

