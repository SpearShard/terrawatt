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
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// type FrameFolder = "investpartner";
// const FRAME_SETS: Record<FrameFolder, number> = {
//   investpartner: 776,
// };
// const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
//   { id: "investpartner", fade: "bottom" }
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
//   return (
//     <div ref={containerRef} className="w-full">
//       <canvas
//         ref={canvasRef}
//         className={`w-full h-[100vh] block `}
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