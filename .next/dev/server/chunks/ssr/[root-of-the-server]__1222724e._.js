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
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import dynamic from "next/dynamic";
// import Navbar from "../components/Navbar";
// import About from "../components/About";
// import Video from "@/components/video";
// import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
// import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VideoTextureEffect from "../components/VideoTextureEffect";
// import { useCarLights } from "../components/useCarLights";
// import { Suspense } from "react";
// import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
// const DashboardAnimation = dynamic(
//   () => import("../components/DashboardAnimation"),
//   { ssr: false }
// );
// gsap.registerPlugin(ScrollTrigger);
// function Car({
//   rearLightsRef,
//   dashboardRef,
//   scale = 1.2,
// }: {
//   rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   scale?: number;
// }) {
//   const { scene } = useGLTF("/models/lastwala.glb");
//   const [ready, setReady] = useState(false);
//   const memoizedScene = useMemo(() => scene, []);
//   // wire lights immediately (no visuals yet)
//   useCarLights(memoizedScene, rearLightsRef, dashboardRef);
//   // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
//   useLayoutEffect(() => {
//     applyBlueInteriorShader(scene);
//     applyWhiteRimShader(scene);
//     setReady(true); // allow render
//   }, [scene]);
//   // ❌ Nothing renders until shaders are ready
//   if (!ready) return null;
//   return <primitive object={scene} scale={scale} />;
// }
// function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   const { camera } = useThree();
//   useEffect(() => {
//     camera.position.set(0, 50, 480);
//     camera.lookAt(0, 50, 0);
//     const isMobile = window.innerWidth < 768;
//     if(isMobile){
//       camera.position.set(0, 15, 570);
//       camera.lookAt(0, 50, 0);
//     }
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#scroll-container",
//         start: "top top",
//         end: isMobile ? "80% bottom" : "bottom bottom",
//         scrub: 0.5, // Smooth scrubbing (lower = smoother, higher = more responsive)
//       },
//     });
//     // Camera movement
//     // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
//     tl.to(camera.position, {
//       z: isMobile ? 35 : 1,
//       y: isMobile ? 18 : 20,
//       duration: 3,
//     });
//     // Animate all rear lights
//     // defensive: ensure we have lights array before animating
//     (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
//       const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//       if (!mat) return;
//       tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
//       // 0 means it starts with the camera animation
//     });
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [camera, rearLightsRef]);
//   return null;
// }
// function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   useEffect(() => {
//     if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;
//     // Trigger flicker when scroll reaches the top of the canvas
//     ScrollTrigger.create({
//       trigger: "#scroll-container",
//       start: "top top", // trigger as soon as scrolling starts
//       end: "+=1",       // short duration
//       once: true,       // only trigger once
//       onEnter: () => {
//         rearLightsRef.current?.forEach((light) => {
//           const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//           if (!mat) return;
//           // Flicker timeline (two quick flashes)
//           gsap.timeline()
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 0, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 12, duration: 0.2 }); // final steady intensity
//         });
//       },
//     });
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [rearLightsRef]);
//   return null;
// }
// export default function Home() {
//   const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
//   const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
//   const progressRef = useRef(0); // 👈 add this line
//   const [carScale, setCarScale] = useState(1.2);
//   useEffect(() => {
//   const handleChargeJump = () => {
//     const targetProgress = 765 / 1464; // Your exact TeraaCharge frame
//     const scrollContainer = document.getElementById("scroll-container");
//     if (!scrollContainer) return;
//     // Wait a tiny bit for layout to settle (critical after navigation)
//     setTimeout(() => {
//       const containerHeight = scrollContainer.offsetHeight;
//       const windowHeight = window.innerHeight;
//       const startOffset = containerHeight * 0.7; // Same as your original logic
//       const scrollableDistance = containerHeight - windowHeight;
//       const maxProgressDistance = Math.max(1, scrollableDistance - startOffset);
//       const targetScrollY = startOffset + (targetProgress * maxProgressDistance);
//       window.scrollTo({
//         top: targetScrollY,
//         behavior: "smooth",
//       });
//     }, 100);
//   };
//   // Listen for direct event (when already on homepage)
//   window.addEventListener("scrollToFrame804", handleChargeJump);
//   // Handle flag from navigation
//   const action = localStorage.getItem("TW_action");
//   if (action === "go_charge") {
//     localStorage.removeItem("TW_action");
//     handleChargeJump();
//   }
//   return () => {
//     window.removeEventListener("scrollToFrame804", handleChargeJump);
//   };
// }, []);
//   useEffect(() => {
//     const action = localStorage.getItem("TW_action");
//     if (!action) return;
//     localStorage.removeItem("TW_action");
//     if (action === "go_charge") {
//       window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//     }
//     if (action === "go_mart") {
//       const section = document.querySelector("#video-section");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//         setTimeout(() => {
//           window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//         }, 900);
//       }
//     }
//     if (action === "go_mart") {
//       const section = document.querySelector("#video-section");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, []);
//   // Responsive scroll height and car scale
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setCarScale(0.75); // Mobile
//       } else if (width < 1024) {
//         setCarScale(0.9); // Tablet
//       } else {
//         setCarScale(1.2); // Desktop
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "1100vh";
//   const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";
//   return (
//     <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
//       {/* 🧭 Navbar stays fixed at top */}
//       <Navbar />
//       {/* 🚗 3D Car Section */}
//       {/* <div id="scroll-container" style={{ height: scrollHeight }}> */}
//       {/* Wrapper for scroll animation */}
//       <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
//         {/* Sticky 3D Canvas */}
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             width: "100%",
//             overflow: "hidden",
//             zIndex: 1,
//             transformOrigin: "center center"
//           }}
//         >
//           <Canvas
//             camera={{ position: [0, 1.5, 25], fov: 50 }}
//             style={{
//               height: "100vh",
//               width: "100vw",
//               pointerEvents: "none",
//               willChange: "transform",
//             }}
//             dpr={[1, 1.5]}
//             performance={{ min: 0.5, max: 1 }}
//             gl={{
//               antialias: true,
//               powerPreference: "high-performance",
//               alpha: false,
//               stencil: false,
//               depth: true,
//             }}
//           >
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[10, 10, 5]} intensity={1} />
//             <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
//             <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
//             <FlickerLights rearLightsRef={rearLightsRef} />
//             <Suspense fallback={null}>
//               <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
//             </Suspense>
//             <VideoTextureEffect progressRef={progressRef} />
//             <OrbitControls enabled={false} />
//           </Canvas>
//         </div>
//       </div>
//       {/* Normal content appears after scroll section */}
//       <div id='video-section' className="min-h-screen">
//         <Video />
//       </div>
//       <div className="min-h-screen">
//         <About />
//       </div>
//     </main>
//   );
// }
// useGLTF.preload("/models/lastwala.glb");
// "use client";
// import dynamic from "next/dynamic";
// import Navbar from "../components/Navbar";
// import About from "../components/About";
// import Video from "@/components/video";
// import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
// import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VideoTextureEffect from "../components/VideoTextureEffect";
// import { useCarLights } from "../components/useCarLights";
// import { Suspense } from "react";
// import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
// const DashboardAnimation = dynamic(
//   () => import("../components/DashboardAnimation"),
//   { ssr: false }
// );
// gsap.registerPlugin(ScrollTrigger);
// function Car({
//   rearLightsRef,
//   dashboardRef,
//   scale = 1.2,
// }: {
//   rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   scale?: number;
// }) {
//   const { scene } = useGLTF("/models/lastwala.glb");
//   const [ready, setReady] = useState(false);
//   const memoizedScene = useMemo(() => scene, []);
//   // wire lights immediately (no visuals yet)
//   useCarLights(memoizedScene, rearLightsRef, dashboardRef);
//   // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
//   useLayoutEffect(() => {
//     applyBlueInteriorShader(scene);
//     applyWhiteRimShader(scene);
//     setReady(true); // allow render
//   }, [scene]);
//   // ❌ Nothing renders until shaders are ready
//   if (!ready) return null;
//   return <primitive object={scene} scale={scale} />;
// }
// function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   const { camera } = useThree();
//   useEffect(() => {
//     camera.position.set(0, 50, 480);
//     camera.lookAt(0, 50, 0);
//     const isMobile = window.innerWidth < 768;
//     if(isMobile){
//       camera.position.set(0, 15, 570);
//       camera.lookAt(0, 50, 0);
//     }
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#scroll-container",
//         start: "top top",
//         end: isMobile ? "80% bottom" : "bottom bottom",
//         scrub: 0.5, // Smooth scrubbing (lower = smoother, higher = more responsive)
//       },
//     });
//     // Camera movement
//     // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
//     tl.to(camera.position, {
//       z: isMobile ? 35 : 1,
//       y: isMobile ? 18 : 20,
//       duration: 3,
//     });
//     // Animate all rear lights
//     // defensive: ensure we have lights array before animating
//     (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
//       const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//       if (!mat) return;
//       tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
//       // 0 means it starts with the camera animation
//     });
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [camera, rearLightsRef]);
//   return null;
// }
// function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   useEffect(() => {
//     if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;
//     // Trigger flicker when scroll reaches the top of the canvas
//     ScrollTrigger.create({
//       trigger: "#scroll-container",
//       start: "top top", // trigger as soon as scrolling starts
//       end: "+=1",       // short duration
//       once: true,       // only trigger once
//       onEnter: () => {
//         rearLightsRef.current?.forEach((light) => {
//           const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//           if (!mat) return;
//           // Flicker timeline (two quick flashes)
//           gsap.timeline()
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 0, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 12, duration: 0.2 }); // final steady intensity
//         });
//       },
//     });
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [rearLightsRef]);
//   return null;
// }
// export default function Home() {
//   const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
//   const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
//   const progressRef = useRef(0); // 👈 add this line
//   const [carScale, setCarScale] = useState(1.2);
// useEffect(() => {
//   const url = new URL(window.location.href);
//   const tab = url.searchParams.get("tab");
//   const handleChargeJump = () => {
//     const targetProgress = 765 / 1464;
//     const scrollContainer = document.getElementById("scroll-container");
//     if (!scrollContainer) return;
//     setTimeout(() => {
//       const containerHeight = scrollContainer.offsetHeight;
//       const windowHeight = window.innerHeight;
//       const startOffset = containerHeight * 0.7;
//       const scrollableDistance = containerHeight - windowHeight;
//       const maxProgressDistance = Math.max(1, scrollableDistance - startOffset);
//       const targetScrollY = startOffset + (targetProgress * maxProgressDistance);
//       window.scrollTo({
//         top: targetScrollY,
//         behavior: "smooth",
//       });
//     }, 100);
//   };
//   const handleMartJump = () => {
//     const section = document.querySelector("#video-section");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => {
//         window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//       }, 900);
//     }
//   };
//   // Direct event listeners (when already on home)
//   window.addEventListener("scrollToFrame804", handleChargeJump);
//   window.addEventListener("triggerVideoJump", handleMartJump);
//   // On first load from navigation
//   if (tab === "charge") {
//     handleChargeJump();
//   } else if (tab === "mart") {
//     handleMartJump();
//   }
//   return () => {
//     window.removeEventListener("scrollToFrame804", handleChargeJump);
//     window.removeEventListener("triggerVideoJump", handleMartJump);
//   };
// }, []);
//   // useEffect(() => {
//   //   const action = localStorage.getItem("TW_action");
//   //   if (!action) return;
//   //   localStorage.removeItem("TW_action");
//   //   if (action === "go_charge") {
//   //     window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//   //   }
//   //   if (action === "go_mart") {
//   //     const section = document.querySelector("#video-section");
//   //     if (section) {
//   //       section.scrollIntoView({ behavior: "smooth" });
//   //       setTimeout(() => {
//   //         window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//   //       }, 900);
//   //     }
//   //   }
//   //   if (action === "go_mart") {
//   //     const section = document.querySelector("#video-section");
//   //     if (section) {
//   //       section.scrollIntoView({ behavior: "smooth" });
//   //     }
//   //   }
//   // }, []);
//   // Responsive scroll height and car scale
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setCarScale(0.75); // Mobile
//       } else if (width < 1024) {
//         setCarScale(0.9); // Tablet
//       } else {
//         setCarScale(1.2); // Desktop
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "1100vh";
//   const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";
//   return (
//     <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
//       {/* 🧭 Navbar stays fixed at top */}
//       <Navbar />
//       {/* 🚗 3D Car Section */}
//       {/* <div id="scroll-container" style={{ height: scrollHeight }}> */}
//       {/* Wrapper for scroll animation */}
//       <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
//         {/* Sticky 3D Canvas */}
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             width: "100%",
//             overflow: "hidden",
//             zIndex: 1,
//             transformOrigin: "center center"
//           }}
//         >
//           <Canvas
//             camera={{ position: [0, 1.5, 25], fov: 50 }}
//             style={{
//               height: "100vh",
//               width: "100vw",
//               pointerEvents: "none",
//               willChange: "transform",
//             }}
//             dpr={[1, 1.5]}
//             performance={{ min: 0.5, max: 1 }}
//             gl={{
//               antialias: true,
//               powerPreference: "high-performance",
//               alpha: false,
//               stencil: false,
//               depth: true,
//             }}
//           >
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[10, 10, 5]} intensity={1} />
//             <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
//             <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
//             <FlickerLights rearLightsRef={rearLightsRef} />
//             <Suspense fallback={null}>
//               <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
//             </Suspense>
//             <VideoTextureEffect progressRef={progressRef} />
//             <OrbitControls enabled={false} />
//           </Canvas>
//         </div>
//       </div>
//       {/* Normal content appears after scroll section */}
//       <div id='video-section' className="min-h-screen">
//         <Video />
//       </div>
//       <div className="min-h-screen">
//         <About />
//       </div>
//     </main>
//   );
// }
// useGLTF.preload("/models/lastwala.glb");
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1222724e._.js.map