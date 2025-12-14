module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/investors-and-partners/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// // === CONFIGURE YOUR SEQUENCE HERE ===
// const FOLDER = "hs4kf";        // Change to your folder name
// const FRAME_COUNT = 239;       // Total number of frames
// const FPS = 30;                // Playback speed (30 or 60 recommended)
// // ====================================
// export default function SimpleVideo() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const frameIndexRef = useRef(0);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const loadedCountRef = useRef(0);
//   const isPlayingRef = useRef(false);
//   useEffect(() => {
//     // Preload all frames
//     imagesRef.current = new Array(FRAME_COUNT);
//     for (let i = 0; i < FRAME_COUNT; i++) {
//       const img = new Image();
//       const frameNumber = String(i + 1).padStart(5, "0");
//       img.src = `https://ik.imagekit.io/m064cyjlx/${FOLDER}/frame_${frameNumber}.jpg`;
//       img.onload = () => {
//         imagesRef.current[i] = img;
//         loadedCountRef.current++;
//         // Start playing as soon as ALL frames are loaded
//         if (loadedCountRef.current === FRAME_COUNT && !isPlayingRef.current) {
//           isPlayingRef.current = true;
//           startAnimation();
//         }
//       };
//       img.onerror = () => {
//         console.error(`Failed to load frame_${frameNumber}.jpg`);
//       };
//     }
//     // Animation loop
//     let animationId: number;
//     let lastTime = 0;
//     const frameDuration = 1000 / FPS;
//     const animate = (currentTime: number) => {
//       if (!lastTime) lastTime = currentTime;
//       const delta = currentTime - lastTime;
//       if (delta >= frameDuration) {
//         // Advance frame
//         frameIndexRef.current = (frameIndexRef.current + 1) % FRAME_COUNT;
//         lastTime = currentTime - (delta % frameDuration);
//         // Draw current frame
//         const canvas = canvasRef.current;
//         const ctx = canvas?.getContext("2d");
//         if (ctx && canvas) {
//           const img = imagesRef.current[frameIndexRef.current];
//           if (img?.complete) {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//           }
//         }
//       }
//       animationId = requestAnimationFrame(animate);
//     };
//     const startAnimation = () => {
//       animationId = requestAnimationFrame(animate);
//     };
//     // Start immediately if images are already cached (e.g., on reload)
//     if (loadedCountRef.current === FRAME_COUNT) {
//       isPlayingRef.current = true;
//       startAnimation();
//     }
//     return () => {
//       if (animationId) cancelAnimationFrame(animationId);
//     };
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="fixed inset-0 bg-[#04111E] overflow-hidden">
//         <canvas
//           ref={canvasRef}
//           width={1080}
//           height={1920}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </>
//   );
// }
// "use client";
// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// type FrameFolder = "hs4kf" | "three" | "thp4kf" | "Ip4kf";
// const FRAME_SETS: Record<FrameFolder, number> = {
//   hs4kf: 239,
//   three: 225,
//   thp4kf: 222,
//   Ip4kf: 214,
// };
// const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
//   { id: "hs4kf", fade: "bottom" },
//   { id: "three", fade: "both" },
//   { id: "thp4kf", fade: "both" },
//   { id: "Ip4kf", fade: "top" },
// ];
// function FrameScroller({
//   folder,
//   frameCount,
//   fadeType,
// }: {
//   folder: FrameFolder;
//   frameCount: number;
//   fadeType: "top" | "bottom" | "both";
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const loadedRef = useRef(false);
//   const frameRef = useRef(0);
//   // Load frames
//   useEffect(() => {
//     let loaded = 0;
//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `https://ik.imagekit.io/m064cyjlx/${folder}/frame_${String(
//         i
//       ).padStart(5, "0")}.jpg`;
//       img.onload = () => {
//         loaded++;
//         if (loaded === frameCount) {
//           loadedRef.current = true;
//         }
//       };
//       imagesRef.current.push(img);
//     }
//   }, [folder, frameCount]);
//   // Scroll → frame animation WITH PINNING
//   useEffect(() => {
//     const section = containerRef.current;
//     const canvas = canvasRef.current;
//     if (!section || !canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = 1080;
//     canvas.height = 1920;
//     const render = () => {
//       const index = Math.floor(frameRef.current);
//       const img = imagesRef.current[index];
//       if (!img) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };
//     const ST = ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: `+=${frameCount * 6}px`, // 👈 stay longer the more frames there are
//       scrub: 1,
//       pin: true,
//       onUpdate: (self) => {
//         if (!loadedRef.current) return;
//         const progress = self.progress; // 0 → 1
//         frameRef.current = progress * (frameCount - 1);
//         render();
//       },
//     });
//     return () => ST.kill();
//   }, [frameCount]);
//   // Fade mask
//   const mask =
//     fadeType === "bottom"
//       ? "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,1)_80%,rgba(4,17,30,0)_100%)]"
//       : fadeType === "top"
//       ? "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_20%,rgba(4,17,30,1)_100%)]"
//       : "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_25%,rgba(4,17,30,1)_75%,rgba(4,17,30,0)_100%)]";
//   return (
//     <div ref={containerRef} className="w-full">
//       <canvas
//         ref={canvasRef}
//         className={`w-full h-[100vh] block ${mask}`}
//       />
//     </div>
//   );
// }
// export default function SimpleVideo() {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full  flex flex-col overflow-hidden bg-[#04111E]">
//         {sections.map((s) => (
//           <div key={s.id} className="w-full ">
//             <FrameScroller
//               folder={s.id}
//               frameCount={FRAME_SETS[s.id]}
//               fadeType={s.fade}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
}),
"[project]/app/investors-and-partners/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/investors-and-partners/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c4b5e804._.js.map