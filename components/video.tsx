// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";

// gsap.registerPlugin(ScrollTrigger);

// export default function Video() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const frameRef = useRef(0);
//   const scrollProgressRef = useRef(0);

//   const [loaded, setLoaded] = useState(false);
//   const imagesRef = useRef<HTMLImageElement[]>([]);

//   const frameCount = 870;


//   useEffect(() => {
//     let loadedCount = 0;
//     const frames: HTMLImageElement[] = [];

//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `https://ik.imagekit.io/m064cyjlx/phone_frames/frame_${String(
//         i
//       ).padStart(4, "0")}.jpg`;

//       img.onload = () => {
//         loadedCount++;
//         if (loadedCount === frameCount) {
//           setLoaded(true); // all frames ready — NOW we animate
//         }
//       };

//       frames.push(img);
//     }

//     imagesRef.current = frames;
//   }, []);

  
//   useEffect(() => {
//     if (!loaded) return;

//     const canvas = canvasRef.current!;
//     const context = canvas.getContext("2d")!;

//     canvas.width = 1080;
//     canvas.height = 1920;

//     const render = () => {
//       const frameIndex = Math.floor(frameRef.current);

//       const img = imagesRef.current[frameIndex];
//       if (!img) return;

//       context.clearRect(0, 0, canvas.width, canvas.height);
//       context.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };

//     gsap.to(frameRef, {
//       current: frameCount - 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".scroll-container",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         onUpdate: (self) => {
//           scrollProgressRef.current = self.progress;
//           render();
//         },
//       },
//     });

//     render();
//     ScrollTrigger.refresh();
//   }, [loaded]);

  
//   return (
//     <div className="scroll-container relative w-full min-h-[500vh] bg-white">

//       <div className="sticky top-0 h-screen flex justify-center items-center bg-[#FFF9EF]">

//         {/* Canvas video */}
//         <canvas ref={canvasRef} className="absolute w-auto h-full" />

//         {/* 3D Coin overlay */}
//         <div className="pointer-events-none absolute inset-0 z-20">
//           <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
//             <ambientLight intensity={3} />
//             <directionalLight position={[5, 5, 5]} intensity={4} />
//             <directionalLight position={[-5, 5, 5]} intensity={2} />
//             <pointLight position={[0, 1, 3]} intensity={3} />
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
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const fgFrameRef = useRef(0);
  const bgFrameRef = useRef(0);

  const scrollProgressRef = useRef(0);

  const [loaded, setLoaded] = useState(false);

  const fgImagesRef = useRef<HTMLImageElement[]>([]);
  const bgImagesRef = useRef<HTMLImageElement[]>([]);

  // CONFIG
  const FG_FRAMES = 870;    // foreground frames count
  const BG_FRAMES = 191;    // background frames count
  const START_BG_AT = 130;  // trigger FG frame to start BG

  // Logical canvas resolution (source frame resolution)
  const CANVAS_W = 1080;
  const CANVAS_H = 1920;

  // --------------------------------------------
  // LOAD FRAMES
  // --------------------------------------------
  useEffect(() => {
    let loadedCount = 0;
    const totalToLoad = FG_FRAMES + BG_FRAMES;

    const fgFrames: HTMLImageElement[] = [];
    const bgFrames: HTMLImageElement[] = [];

    for (let i = 1; i <= FG_FRAMES; i++) {
      const img = new Image();
      img.src = `https://ik.imagekit.io/m064cyjlx/phone_frames/frame_${String(i).padStart(4, "0")}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalToLoad) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalToLoad) setLoaded(true);
      };
      fgFrames.push(img);
    }

    for (let i = 1; i <= BG_FRAMES; i++) {
      const img = new Image();
      img.src = `https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalToLoad) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalToLoad) setLoaded(true);
      };
      bgFrames.push(img);
    }

    fgImagesRef.current = fgFrames;
    bgImagesRef.current = bgFrames;
  }, []);

  // --------------------------------------------
  // RENDER & SCROLL TRIGGER
  // --------------------------------------------
  useEffect(() => {
    if (!loaded) return;

    const fgCanvas = fgCanvasRef.current!;
    const bgCanvas = bgCanvasRef.current!;
    const fgCtx = fgCanvas.getContext("2d")!;
    const bgCtx = bgCanvas.getContext("2d")!;

    // Set logical pixel resolution (keeps quality); CSS controls displayed size
    fgCanvas.width = bgCanvas.width = CANVAS_W;
    fgCanvas.height = bgCanvas.height = CANVAS_H;

    // Ensure the FG canvas is styled to be height: 100vh (handled in JSX/CSS).
    // We'll draw images to the logical canvas size (CANVAS_W x CANVAS_H),
    // and the browser will scale the canvas to match CSS display size.

    const render = () => {
      const fgIndex = Math.max(0, Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current)));
      const bgIndex = Math.max(0, Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current)));

      // Draw BG full-bleed
      const bgImg = bgImagesRef.current[bgIndex];
      if (bgImg) {
        // draw to full logical canvas (fills viewport when CSS scaled to cover)
        bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
      } else {
        bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        bgCtx.fillStyle = "#fff";
        bgCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);
      }

      // Draw FG scaled to fill the FG canvas (we want phone to be 100vh)
      const fgImg = fgImagesRef.current[fgIndex];
      if (fgImg) {
        fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        // If your FG frames are phone-only (with bezel), draw full bleed:
        fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
        // If they are only the screen portion, adjust here to place/scaling as needed.
      } else {
        fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      }
    };

    const tween = gsap.to(fgFrameRef, {
      current: FG_FRAMES - 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress;

          const currentFG = Math.floor(fgFrameRef.current);

          if (currentFG < START_BG_AT) {
            bgFrameRef.current = 0; // hold bg at first frame
          } else {
            const bgProgress = (currentFG - START_BG_AT) / Math.max(1, (FG_FRAMES - START_BG_AT));
            bgFrameRef.current = Math.min(Math.floor(bgProgress * (BG_FRAMES - 1)), BG_FRAMES - 1);
          }

          render();
        },
      },
    });

    // initial draw
    render();
    ScrollTrigger.refresh();

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  // --------------------------------------------
  // JSX: bg canvas covers viewport; fg canvas height=100vh centered
  // --------------------------------------------
  return (
    <div className="scroll-container relative w-full min-h-[500vh] bg-white">
      <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">

        {/* BACKGROUND CANVAS — full bleed background */}
        <canvas
          ref={bgCanvasRef}
          // CSS: cover the viewport
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            // objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* FOREGROUND CANVAS — phone frames at height: 100vh, centered horizontally */}
        <canvas
          ref={fgCanvasRef}
          style={{
            position: "relative",      // keeps it centered within the sticky container
            width: "auto",
            height: "100vh",           // <-- phone frame fills viewport height
            maxWidth: "100%",          // prevent overflow on small widths
            zIndex: 10,
            transform: "translateZ(0)", // help with rendering
            pointerEvents: "none",
          }}
        />

        {/* 3D coin overlay (on top) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={4} />
            <directionalLight position={[-5, 5, 5]} intensity={2} />
            <pointLight position={[0, 1, 3]} intensity={3} />
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>

      </div>
    </div>
  );
}
