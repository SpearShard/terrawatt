"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FrameFolder = "investwebp";

const FRAME_SETS: Record<FrameFolder, number> = {
  investwebp: 516,
};

const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
  { id: "investwebp", fade: "bottom" },
];

function FrameScroller({
  folder,
  frameCount,
}: {
  folder: FrameFolder;
  frameCount: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(false);
  const frameRef = useRef(0);

  // Canvas render function
  const render = (forcedFrame?: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const index = forcedFrame ?? Math.floor(frameRef.current);
    const img = imagesRef.current[index];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } else {
      // Fallback background while loading
      ctx.fillStyle = "#04111E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Load all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/${folder}/frame_${String(i).padStart(5, "0")}.webp`;
      // img.src = `/frames/${folder}/frame_${String(i).padStart(5, "0")}.jpg`;
      
      

      img.onload = () => {
        loadedCount++;
        images[i - 1] = img; // Store in correct order

        if (loadedCount === frameCount) {
          imagesRef.current = images;
          loadedRef.current = true;
          render(0); // Force first frame when fully loaded
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
      };
    }

    // Try to render frame 0 immediately (in case cached)
    render(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder, frameCount]);

  // ScrollTrigger setup
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1080;
    canvas.height = 1920;

    // Kill any existing ScrollTriggers to prevent duplicates/ghosts
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Initial render
    render(0);

    // Delay trigger creation to let layout & images settle
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${frameCount * 6}px`, // Adjust multiplier if needed for smoother pacing
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!loadedRef.current) {
            frameRef.current = 0;
            render(0);
            return;
          }
          frameRef.current = self.progress * (frameCount - 1);
          render();
        },
        onRefresh: () => render(),
      });

      // Cleanup on unmount
      return () => {
        st.kill();
      };
    }, 100); // Small delay helps with Next.js navigation quirks

    return () => {
      clearTimeout(initTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [frameCount]);

  return (
    <div ref={containerRef} className="w-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-screen block sticky top-0"
      />
    </div>
  );
}

export default function InvestorsPage() {
  // Handle scroll restoration properly for client-side navigation
  useEffect(() => {
    // Allow browser to restore scroll on back/forward, but force top on direct visit
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    // Always start at top when entering this page
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger if page becomes visible again (e.g. tab switch)
    const handleVisibility = () => {
      if (!document.hidden) {
        ScrollTrigger.refresh();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col overflow-hidden bg-[#04111E]">
        {sections.map((s) => (
          <div key={s.id} className="w-full">
            <FrameScroller
              folder={s.id}
              frameCount={FRAME_SETS[s.id]}
            />
          </div>
        ))}
      </div>
    </>
  );
}











// "use client";

// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// type FrameFolder = "investwebp";

// const FRAME_SETS: Record<FrameFolder, number> = {
//   investwebp: 516,
// };

// const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
//   { id: "investwebp", fade: "bottom" },
// ];

// function FrameScroller({
//   folder,
//   frameCount,
// }: {
//   folder: FrameFolder;
//   frameCount: number;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const loadedRef = useRef(false);
//   const frameRef = useRef(0);

//   const render = (forcedFrame?: number) => {
//     if (!canvasRef.current) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d")!;
//     const index = forcedFrame ?? Math.floor(frameRef.current);
//     const img = imagesRef.current[index];

//     if (img && img.complete) {
//       // RESPONSIVE DRAWING LOGIC (Object-fit: cover equivalent for Canvas)
//       const canvasAspect = canvas.width / canvas.height;
//       const imgAspect = img.width / img.height;
//       let drawWidth, drawHeight, offsetX, offsetY;

//       if (canvasAspect > imgAspect) {
//         drawWidth = canvas.width;
//         drawHeight = canvas.width / imgAspect;
//         offsetX = 0;
//         offsetY = (canvas.height - drawHeight) / 2;
//       } else {
//         drawWidth = canvas.height * imgAspect;
//         drawHeight = canvas.height;
//         offsetX = (canvas.width - drawWidth) / 2;
//         offsetY = 0;
//       }

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//     } else {
//       ctx.fillStyle = "#04111E";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }
//   };

//   useEffect(() => {
//     const images: HTMLImageElement[] = [];
//     let loadedCount = 0;

//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `/${folder}/frame_${String(i).padStart(5, "0")}.webp`;

//       img.onload = () => {
//         loadedCount++;
//         images[i - 1] = img;
//         if (loadedCount === frameCount) {
//           imagesRef.current = images;
//           loadedRef.current = true;
//           render(0);
//         }
//       };
//     }
//     render(0);
//   }, [folder, frameCount]);

//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;

//     const canvas = canvasRef.current;
    
//     // RESPONSIVE CANVAS SIZING
//     const handleResize = () => {
//       // Set internal drawing resolution to match window device pixel ratio for sharpness
//       canvas.width = window.innerWidth * window.devicePixelRatio;
//       canvas.height = window.innerHeight * window.devicePixelRatio;
//       render();
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial call

//     ScrollTrigger.getAll().forEach((st) => st.kill());

//     const initTimeout = setTimeout(() => {
//       ScrollTrigger.refresh();

//       const st = ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         // Increase multiplier on mobile for a better feel
//         end: `+=${frameCount * (window.innerWidth < 768 ? 4 : 6)}px`, 
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//           if (!loadedRef.current) return;
//           frameRef.current = self.progress * (frameCount - 1);
//           render();
//         },
//       });

//       return () => st.kill();
//     }, 100);

//     return () => {
//       clearTimeout(initTimeout);
//       window.removeEventListener("resize", handleResize);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, [frameCount]);

//   return (
//     <div ref={containerRef} className="w-full relative bg-[#04111E]">
//       <canvas
//         ref={canvasRef}
//         className="w-full h-screen block sticky top-0 object-cover"
//         style={{ width: '100vw', height: '100vh' }}
//       />
//     </div>
//   );
// }

// export default function InvestorsPage() {
//   useEffect(() => {
//     if ("scrollRestoration" in history) {
//       history.scrollRestoration = "manual"; 
//     }
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="w-full flex flex-col overflow-hidden bg-[#04111E]">
//         {sections.map((s) => (
//           <div key={s.id} className="w-full">
//             <FrameScroller
//               folder={s.id}
//               frameCount={FRAME_SETS[s.id]}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }