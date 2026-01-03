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
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
//   const pathname = usePathname();
//   const TOTAL_FRAMES = 516;
//   const SCROLL_DISTANCE = TOTAL_FRAMES * 6;
//   /* ---------------- FORCE HARD RELOAD FROM PROBLEMATIC PAGES ---------------- */
//   useEffect(() => {
//     const problematicPaths = ["/pulse", "/teraamart", "/teraacharge"];
//     // Use navigation type if available (for back/forward)
//     if (typeof window !== "undefined" && "navigation" in window) {
//       const navEntry = (window.navigation as any).currentEntry;
//       if (navEntry) {
//         const prevUrl = navEntry.url || "";
//         if (problematicPaths.some(p => prevUrl.includes(p)) && pathname === "/investors") {
//           window.location.reload();
//         }
//       }
//     }
//     // Fallback to sessionStorage tracking
//     const prevPath = sessionStorage.getItem("prevPath");
//     sessionStorage.setItem("prevPath", pathname);
//     if (problematicPaths.includes(prevPath || "") && pathname === "/investors") {
//       window.location.reload();
//     }
//     // Always scroll to top
//     window.scrollTo(0, 0);
//     ScrollTrigger.refresh();
//   }, [pathname]);
//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     if (!videoRef.current) return;
//     const video = videoRef.current;
//     video.src = "/investwebp/new/invest.webm";
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.crossOrigin = "anonymous";
//     video.load();
//     video.currentTime = 0.01;
//     setTimeout(() => {
//       video.currentTime = 0;
//     }, 300);
//   }, []);
//   /* ---------------- SMOOTH SCRUBBING LOOP ---------------- */
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     let raf: number;
//     let lastTime = performance.now();
//     const animate = (time: number) => {
//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;
//       if (!video.duration || isNaN(video.duration)) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       const lerpFactor = Math.min(delta * 18, 1);
//       smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * lerpFactor;
//       const targetTime = smoothProgressRef.current * video.duration;
//       if (Math.abs(video.currentTime - targetTime) > 0.015) {
//         video.currentTime = targetTime;
//       }
//       raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, []);
//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;
//     if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${SCROLL_DISTANCE}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//       onRefresh: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//     });
//     scrollTriggerRef.current = st;
//     return () => st.kill();
//   }, []);
//   /* ---------------- JSX ---------------- */
//   return (
//     <>
//       <Navbar />
//       <div className="w-full flex flex-col overflow-hidden bg-[#04111E] min-h-screen">
//         <div ref={containerRef} className="relative w-full bg-[#04111E]">
//           <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#04111E]">
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover"
//               style={{ pointerEvents: "none" }}
//               playsInline
//               muted
//             />
//           </div>
//           <div style={{ height: `${SCROLL_DISTANCE}px` }} />
//         </div>
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