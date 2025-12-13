// "use client";
// import Navbar from "@/components/Navbar";

// export default function SimpleVideo() {
//   const videos = ["/hs4k.mp4", "/tp4k.mp4", "/thp4k.mp4", "/lp4k.mp4"];
//   const fadeColor = "rgba(4,17,30"; // Base fade color

//   return (
//     <>
//       <Navbar />
//       <div className="w-full flex flex-col overflow-hidden bg-[#04111E]">
//         {videos.map((src, i) => {
//           let maskStyle = "";

//           if (i === 0) {
//             // First video → Bottom fade only
//             maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,1)_80%,rgba(4,17,30,0)_100%)]";
//           } else if (i === videos.length - 1) {
//             // Last video → Top fade only
//             maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_20%,rgba(4,17,30,1)_100%)]";
//           } else {
//             // Middle videos → Both sides fade
//             maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_25%,rgba(4,17,30,1)_75%,rgba(4,17,30,0)_100%)]";
//           }

//           return (
//             <video
//               key={i}
//               autoPlay
//               muted
//               playsInline
//               preload="auto"
//               className={`w-full h-full object-cover ${maskStyle}`}
//             >
//               <source src={src} type="video/mp4" />
//             </video>
//           );
//         })}
//       </div>
//     </>
//   );
// }























"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type FrameFolder = "hs4kf" | "three" | "thp4kf" | "Ip4kf";

const FRAME_SETS: Record<FrameFolder, number> = {
  hs4kf: 239,
  three: 225,
  thp4kf: 222,
  Ip4kf: 214,
};

const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
  { id: "hs4kf", fade: "bottom" },
  { id: "three", fade: "both" },
  { id: "thp4kf", fade: "both" },
  { id: "Ip4kf", fade: "top" },
];



function FrameScroller({
  folder,
  frameCount,
  fadeType,
}: {
  folder: FrameFolder;
  frameCount: number;
  fadeType: "top" | "bottom" | "both";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(false);
  const frameRef = useRef(0);

  // Load frames
  useEffect(() => {
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `https://ik.imagekit.io/m064cyjlx/${folder}/frame_${String(
        i
      ).padStart(5, "0")}.jpg`;

      img.onload = () => {
        loaded++;
        if (loaded === frameCount) {
          loadedRef.current = true;
        }
      };

      imagesRef.current.push(img);
    }
  }, [folder, frameCount]);

  // Scroll → frame animation WITH PINNING
  useEffect(() => {
    const section = containerRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = 1080;
    canvas.height = 1920;

    const render = () => {
      const index = Math.floor(frameRef.current);
      const img = imagesRef.current[index];

      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const ST = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${frameCount * 6}px`, // 👈 stay longer the more frames there are
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (!loadedRef.current) return;

        const progress = self.progress; // 0 → 1
        frameRef.current = progress * (frameCount - 1);

        render();
      },
    });

    return () => ST.kill();
  }, [frameCount]);

  // Fade mask
  const mask =
    fadeType === "bottom"
      ? "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,1)_80%,rgba(4,17,30,0)_100%)]"
      : fadeType === "top"
      ? "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_20%,rgba(4,17,30,1)_100%)]"
      : "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_25%,rgba(4,17,30,1)_75%,rgba(4,17,30,0)_100%)]";

  return (
    <div ref={containerRef} className="w-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-[100vh] block ${mask}`}
      />
    </div>
  );
}


export default function SimpleVideo() {
  return (
    <>
      <Navbar />

      <div className="w-full  flex flex-col overflow-hidden bg-[#04111E]">
        {sections.map((s) => (
          <div key={s.id} className="w-full ">
            <FrameScroller
              folder={s.id}
              frameCount={FRAME_SETS[s.id]}
              fadeType={s.fade}
            />
          </div>
        ))}
      </div>
    </>
  );
}
