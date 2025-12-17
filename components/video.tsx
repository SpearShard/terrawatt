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

//   const [loaded, setLoaded] = useState(false);

//   const fgImagesRef = useRef<HTMLImageElement[]>([]);
//   const bgImagesRef = useRef<HTMLImageElement[]>([]);

//   const FG_FRAMES = 810;
//   const BG_FRAMES = 191;
//   const START_BG_AT = 130;
//   const CANVAS_W = 1080;
//   const CANVAS_H = 1920;

//   // Load all images
//   useEffect(() => {
//     let loadedCount = 0;
//     const total = FG_FRAMES + BG_FRAMES;

//     const loadImage = (url: string, arr: HTMLImageElement[]) => {
//       const img = new Image();
//       img.crossOrigin = "anonymous";
//       img.src = url;
//       img.onload = img.onerror = () => {
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       arr.push(img);
//     };

//     for (let i = 1; i <= FG_FRAMES; i++) {
//       loadImage(
//         `https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`,
//         fgImagesRef.current
//       );
//     }
//     for (let i = 1; i <= BG_FRAMES; i++) {
//       loadImage(
//         `https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`,
//         bgImagesRef.current
//       );
//     }
//   }, []);

//   // MAIN ANIMATION — FIXED & PERFECT
//   useEffect(() => {
//     if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;

//     const fgCanvas = fgCanvasRef.current;
//     const bgCanvas = bgCanvasRef.current;
//     const fgCtx = fgCanvas.getContext("2d")!;
//     const bgCtx = bgCanvas.getContext("2d")!;

//     fgCanvas.width = bgCanvas.width = CANVAS_W;
//     fgCanvas.height = bgCanvas.height = CANVAS_H;

//     const render = () => {
//       // FOREGROUND (phone)
//       const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001)); // +0.0001 forces update
//       const fgImg = fgImagesRef.current[fgIndex];
//       if (fgImg?.complete) {
//         fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }

//       // BACKGROUND (tickets)
//       const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
//       const bgImg = bgImagesRef.current[bgIndex];
//       if (bgImg?.complete) {
//         bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//     };

//     // THE ONLY SCROLLTRIGGER YOU NEED
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=800%",
//       scrub: 1,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;

//         // THIS LINE WAS BROKEN — NOW FIXED
//         fgFrameRef.current = progress * (FG_FRAMES - 1);  // ← This was the bug!

//         if (fgFrameRef.current >= START_BG_AT) {
//           const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
//           bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
//         } else {
//           bgFrameRef.current = 0;
//         }

//         scrollProgressRef.current = progress;
//         render(); // ← Call render every update
//       },
//     });

//     render();

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [loaded]);


// useEffect(() => {
//   if (!loaded) return;

//   const jumpToTerramart = () => {
//     const targetFrame = 589;
//     const progress = targetFrame / (FG_FRAMES - 1);

//     const st = ScrollTrigger.getAll().find(
//       (t) => t.trigger === containerRef.current
//     );

//     if (!st) return;

//     const scrollStart = st.start as number;
//     const scrollEnd = st.end as number;

//     window.scrollTo({
//       top: scrollStart + progress * (scrollEnd - scrollStart),
//       behavior: "smooth",
//     });
//   };

//   // 🔹 Case 1: Coming from another page (Connect / Investors / Insights)
//   const action = localStorage.getItem("TW_action");
//   if (action === "go_mart") {
//     requestAnimationFrame(jumpToTerramart);
//     localStorage.removeItem("TW_action");
//   }

//   // 🔹 Case 2: Already on Pulse / TerraCharge
//   window.addEventListener("triggerVideoJump", jumpToTerramart);

//   return () => {
//     window.removeEventListener("triggerVideoJump", jumpToTerramart);
//   };
// }, [loaded]);

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
//           <Canvas camera={{ position: [0, 0, 2.5], near:0.001, far:1000, fov: 50 }}>
//             {/* <ambientLight intensity={3} />
//             <directionalLight position={[5, 5, 5]} intensity={4} />
//             <pointLight position={[0, 1, 3]} intensity={3} /> */}
//             <ScrollingCoin progressRef={scrollProgressRef} />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }




















"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);

  const fgFrameRef = useRef(0);
  const bgFrameRef = useRef(0);
  const scrollProgressRef = useRef(0);

  // Critical: store the ScrollTrigger instance
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [loaded, setLoaded] = useState(false);

  const fgImagesRef = useRef<HTMLImageElement[]>([]);
  const bgImagesRef = useRef<HTMLImageElement[]>([]);

  const FG_FRAMES = 810;
  const BG_FRAMES = 191;
  const START_BG_AT = 130;
  const CANVAS_W = 1080;
  const CANVAS_H = 1920;

  const targetProgress = 589 / (FG_FRAMES - 1);

  // Load all images with batching to prevent network congestion
  useEffect(() => {
    let loadedCount = 0;
    const total = FG_FRAMES + BG_FRAMES;
    const batchSize = 50; // Load 50 images at a time
    const delayBetweenBatches = 100; // ms

    const loadImage = (url: string, arr: HTMLImageElement[]) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount >= total) setLoaded(true);
      };
      arr.push(img);
    };

    const loadBatch = (start: number, end: number, urls: string[], arr: HTMLImageElement[]) => {
      for (let i = start; i < Math.min(end, urls.length); i++) {
        loadImage(urls[i], arr);
      }
    };

    const fgUrls: string[] = [];
    for (let i = 1; i <= FG_FRAMES; i++) {
      fgUrls.push(`https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`);
    }
    const bgUrls: string[] = [];
    for (let i = 1; i <= BG_FRAMES; i++) {
      bgUrls.push(`https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
    }

    let fgBatchIndex = 0;
    let bgBatchIndex = 0;

    const loadNextBatch = () => {
      if (fgBatchIndex < fgUrls.length) {
        const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
        loadBatch(fgBatchIndex, end, fgUrls, fgImagesRef.current);
        fgBatchIndex = end;
      }
      if (bgBatchIndex < bgUrls.length) {
        const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
        loadBatch(bgBatchIndex, end, bgUrls, bgImagesRef.current);
        bgBatchIndex = end;
      }
      if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length) {
        setTimeout(loadNextBatch, delayBetweenBatches);
      }
    };

    loadNextBatch();
  }, []);

  // Main scroll-triggered animation
  useEffect(() => {
    if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;

    const fgCanvas = fgCanvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const fgCtx = fgCanvas.getContext("2d")!;
    const bgCtx = bgCanvas.getContext("2d")!;

    fgCanvas.width = bgCanvas.width = CANVAS_W;
    fgCanvas.height = bgCanvas.height = CANVAS_H;

    const render = () => {
      const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001));
      const fgImg = fgImagesRef.current[fgIndex];
      if (fgImg?.complete) {
        fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
      }

      const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
      const bgImg = bgImagesRef.current[bgIndex];
      if (bgImg?.complete) {
        bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
      }
    };

    // Kill any old trigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        fgFrameRef.current = progress * (FG_FRAMES - 1);

        if (fgFrameRef.current >= START_BG_AT) {
          const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
          bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
        } else {
          bgFrameRef.current = 0;
        }

        scrollProgressRef.current = progress;
        render();
      },
    });

    scrollTriggerRef.current = st;
    render();

    return () => {
      st.kill();
      scrollTriggerRef.current = null;
    };
  }, [loaded]);

  // Handle navigation from other pages
  useEffect(() => {
    const action = localStorage.getItem("TW_action");
    if (action === "go_mart") {
      localStorage.removeItem("TW_action");
      const waitAndJump = () => {
        if (scrollTriggerRef.current) {
          ScrollTrigger.refresh();
          const st = scrollTriggerRef.current;
          const scrollPos = st.start + targetProgress * (st.end - st.start);
          st.scroll(scrollPos);
        } else {
          requestAnimationFrame(waitAndJump);
        }
      };
      waitAndJump();
    }
  }, []);

    useEffect(() => {
    if (!loaded) return;

    const handleTrigger = () => {
      window.scrollTo(0, 0);
      const st = scrollTriggerRef.current;
      if (st) {
        const scrollPos = st.start + targetProgress * (st.end - st.start);
          window.scrollTo({ top: scrollPos });
      }
    };

    window.addEventListener("triggerVideoJump", handleTrigger);

    return () => {
      window.removeEventListener("triggerVideoJump", handleTrigger);
    };
  }, [loaded]);

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        <canvas
          ref={bgCanvasRef}
          className="absolute inset-0 w-full h-full object-fit"
        />

        <canvas
          ref={fgCanvasRef}
          className="relative z-10 max-w-full h-auto max-h-screen pointer-events-none"
        />

        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}