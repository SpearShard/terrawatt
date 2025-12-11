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
  const containerRef = useRef<HTMLDivElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);

  const fgFrameRef = useRef(0);
  const bgFrameRef = useRef(0);
  const scrollProgressRef = useRef(0);

  const [loaded, setLoaded] = useState(false);

  const fgImagesRef = useRef<HTMLImageElement[]>([]);
  const bgImagesRef = useRef<HTMLImageElement[]>([]);

  const FG_FRAMES = 810;
  const BG_FRAMES = 191;
  const START_BG_AT = 130;
  const CANVAS_W = 1080;
  const CANVAS_H = 1920;

  // Load all images
  useEffect(() => {
    let loadedCount = 0;
    const total = FG_FRAMES + BG_FRAMES;

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

    for (let i = 1; i <= FG_FRAMES; i++) {
      loadImage(
        `https://ik.imagekit.io/m064cyjlx/phone/frame_${String(i).padStart(5, "0")}.png`,
        fgImagesRef.current
      );
    }
    for (let i = 1; i <= BG_FRAMES; i++) {
      loadImage(
        `https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`,
        bgImagesRef.current
      );
    }
  }, []);

  // MAIN ANIMATION — FIXED & PERFECT
  useEffect(() => {
    if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;

    const fgCanvas = fgCanvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const fgCtx = fgCanvas.getContext("2d")!;
    const bgCtx = bgCanvas.getContext("2d")!;

    fgCanvas.width = bgCanvas.width = CANVAS_W;
    fgCanvas.height = bgCanvas.height = CANVAS_H;

    const render = () => {
      // FOREGROUND (phone)
      const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001)); // +0.0001 forces update
      const fgImg = fgImagesRef.current[fgIndex];
      if (fgImg?.complete) {
        fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
      }

      // BACKGROUND (tickets)
      const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
      const bgImg = bgImagesRef.current[bgIndex];
      if (bgImg?.complete) {
        bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
      }
    };

    // THE ONLY SCROLLTRIGGER YOU NEED
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=800%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // THIS LINE WAS BROKEN — NOW FIXED
        fgFrameRef.current = progress * (FG_FRAMES - 1);  // ← This was the bug!

        if (fgFrameRef.current >= START_BG_AT) {
          const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
          bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
        } else {
          bgFrameRef.current = 0;
        }

        scrollProgressRef.current = progress;
        render(); // ← Call render every update
      },
    });

    render();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
          <Canvas camera={{ position: [0, 0, 2.5], near:0.001, far:1000, fov: 50 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={4} />
            <pointLight position={[0, 1, 3]} intensity={3} />
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}