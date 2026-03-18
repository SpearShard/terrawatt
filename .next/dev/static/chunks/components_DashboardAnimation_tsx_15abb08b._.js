(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";
// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
//   onReady?: () => void;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   // Scroll state
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   // Video (Desktop only)
//   // const videoRef = useRef<HTMLVideoElement | null>(null);
//   // const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
//   // Mobile frames
//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const loadingFrames = useRef<Set<number>>(new Set());
//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(-1);
//   const cleanupCounterRef = useRef(0);
//   /* ---------------- VIDEO SETUP (DESKTOP ONLY) ---------------- */
//   // useEffect(() => {
//   //   if (isMobile) return;
//   //   const video = document.createElement("video");
//   //   video.src = "/dashsmaller/scrubbed-dash.webm";
//   //   video.muted = true;
//   //   video.loop = false;
//   //   video.playsInline = true;
//   //   video.preload = "auto";
//   //   video.crossOrigin = "anonymous";
//   //   video.pause();
//   //   const texture = new THREE.VideoTexture(video);
//   //   texture.colorSpace = THREE.SRGBColorSpace;
//   //   texture.generateMipmaps = false;
//   //   texture.minFilter = THREE.LinearFilter;
//   //   texture.magFilter = THREE.LinearFilter;
//   //   videoRef.current = video;
//   //   videoTextureRef.current = texture;
//   //   video.load();
//   //   return () => {
//   //     video.pause();
//   //     texture.dispose();
//   //   };
//   // }, [isMobile]);
//   /* ---------------- FRAME LOADER (MOBILE) ---------------- */
//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;
//     loadingFrames.current.add(index);
//     const loader = new THREE.TextureLoader();
//     loader.load(
//       `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.anisotropy = 1;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         loadingFrames.current.delete(index);
//         frameCache.current.set(index, texture);
//       },
//       undefined,
//       () => {
//         loadingFrames.current.delete(index);
//       }
//     );
//   };
//   const preloadNearbyFrames = (center: number) => {
//     const BUFFER_AHEAD = 40;
//     const BUFFER_BEHIND = 20;
//     const start = Math.max(0, center - BUFFER_BEHIND);
//     const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + BUFFER_AHEAD);
//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };
//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 180;
//     frameCache.current.forEach((_, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         const tex = frameCache.current.get(key);
//         tex?.dispose();
//         frameCache.current.delete(key);
//       }
//     });
//   };
//   /* ---------------- SCROLL TRACKING ---------------- */
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.1
//           : window.innerHeight * 2;
//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;
//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const MIN_SCROLL_PX = window.innerHeight * 3;
//         const maxScroll = Math.max(
//           MIN_SCROLL_PX,
//           endHeight - startHeight
//         );
//         scrollRef.current = Math.max(
//           0,
//           Math.min(1, rawScroll / maxScroll)
//         );
//         ticking = false;
//       });
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);
//   useEffect(() => {
//     for (let i = 0; i < 60; i++) {
//       loadFrame(i);
//     }
//   }, []);
//   /* ---------------- ATTACH TO DASHBOARD ---------------- */
//   useEffect(() => {
//     const dashboardMesh = dashboardRef.current?.[0];
//     if (!dashboardMesh) return;
//     dashboardMesh.add(uiGroup.current);
//     uiGroup.current.position.set(0, 0.7, 0.17);
//     uiGroup.current.rotation.set(1.35, 0, 0);
//     return () => {
//       dashboardMesh.remove(uiGroup.current);
//     };
//   }, [dashboardRef]);
//   /* ---------------- MAIN ANIMATION LOOP ---------------- */
//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;
//     // Smooth scroll
//    // Cinematic scroll smoothing (delta corrected)
// const damping = 8; 
// smoothScrollRef.current += 
//   (scrollRef.current - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));
// const progress = smoothScrollRef.current;
//     /* ================= MOBILE = RAW FRAME SCRUB ================= */
//     const eased = progress * progress * (3 - 2 * progress); // smoothstep
// const frame = Math.round(eased * (MOBILE_TOTAL_FRAMES - 1));
// if (frame !== lastFrameRef.current) {
//   preloadNearbyFrames(frame);
//   cleanupCounterRef.current++;
//   if (cleanupCounterRef.current > 10) {
//     cleanupFarFrames(frame);
//     cleanupCounterRef.current = 0;
//   }
//   const texture = frameCache.current.get(frame);
//   if (texture) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     if (mat.map !== texture) {
//       mat.map = texture;
//       mat.needsUpdate = true;
//     }
//   }
//   lastFrameRef.current = frame;
// }
//     progressRef.current = progress;
//     (window as any).__SCROLL_PROGRESS__ = progress;
//   });
//   return (
//     <group ref={uiGroup}>
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// } 
// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";
// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
//   onReady?: () => void;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   // Scroll state
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   // Video (Desktop only)
//   // const videoRef = useRef<HTMLVideoElement | null>(null);
//   // const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
//   // Mobile frames
//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const loadingFrames = useRef<Set<number>>(new Set());
//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(0);
//   const cleanupCounterRef = useRef(0);
//   const lastRenderRef = useRef(0);
//   const textureLoader = useRef(new THREE.TextureLoader());
//   /* ---------------- FRAME LOADER (MOBILE) ---------------- */
//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;
//     loadingFrames.current.add(index);
// textureLoader.current.load(      `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.anisotropy = 1;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         loadingFrames.current.delete(index);
//         frameCache.current.set(index, texture);
//       },
//       undefined,
//       () => {
//         loadingFrames.current.delete(index);
//       }
//     );
//   };
//   const preloadNearbyFrames = (center: number) => {
//     const BUFFER_AHEAD = 10;
//     const BUFFER_BEHIND = 6;
//     const start = Math.max(0, center - BUFFER_BEHIND);
//     const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + BUFFER_AHEAD);
//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };
//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 70;
//     frameCache.current.forEach((_, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         const tex = frameCache.current.get(key);
//         tex?.dispose();
//         frameCache.current.delete(key);
//       }
//     });
//   };
//   /* ---------------- SCROLL TRACKING ---------------- */
//   // useEffect(() => {
//   //   let ticking = false;
//   //   const handleScroll = () => {
//   //     if (ticking) return;
//   //     ticking = true;
//   //     rafRef.current = requestAnimationFrame(() => {
//   //       const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
//   //       const startHeight = scrollContainer
//   //         ? scrollContainer.offsetHeight * 0.1
//   //         : window.innerHeight * 2;
//   //       const endHeight = scrollContainer
//   //         ? scrollContainer.offsetHeight - window.innerHeight
//   //         : document.body.scrollHeight - window.innerHeight;
//   //       const rawScroll = Math.max(0, window.scrollY - startHeight);
//   //       const MIN_SCROLL_PX = window.innerHeight * 6;
//   //       const maxScroll = Math.max(
//   //         MIN_SCROLL_PX,
//   //         endHeight - startHeight
//   //       );
//   //       scrollRef.current = Math.max(
//   //         0,
//   //         Math.min(1, rawScroll / maxScroll)
//   //       );
//   //       ticking = false;
//   //     });
//   //   };
//   //   window.addEventListener("scroll", handleScroll, { passive: true });
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//   //   };
//   // }, []);
//   useEffect(() => {
//     for (let i = 0; i < 30; i++) {
//       loadFrame(i);
//     }
//   }, []);
//   /* ---------------- ATTACH TO DASHBOARD ---------------- */
//   useEffect(() => {
//   const dashboardMesh = dashboardRef.current?.[0];
//   if (!dashboardMesh) return;
//   dashboardMesh.add(uiGroup.current);
//   uiGroup.current.position.set(0, 0.7, 0.17);
//   uiGroup.current.rotation.set(1.35, 0, 0);
//   // 🔧 Sync scroll position when entering from video section
//   const scrollRatio = window.scrollY / document.body.scrollHeight;
//   scrollRef.current = scrollRatio;
//   smoothScrollRef.current = scrollRatio;
//   progressRef.current = scrollRatio;
//   return () => {
//     dashboardMesh.remove(uiGroup.current);
//   };
// }, [dashboardRef]);
//   /* ---------------- MAIN ANIMATION LOOP ---------------- */
//   useFrame((state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;
//     const time = state.clock.elapsedTime * 1000;
// if (time - lastRenderRef.current < 16) return;
// lastRenderRef.current = time;
//     // Smooth scroll
//    // Cinematic scroll smoothing (delta corrected)
// const damping = 1 - Math.exp(-delta * 18);const sourceProgress =
//   (window as any).__SCROLL_PROGRESS__ ?? scrollRef.current;
// smoothScrollRef.current +=
//   (sourceProgress - smoothScrollRef.current) * damping;
// const MAX_DELTA = 0.03;
// const previous = progressRef.current;
// let progress =
//   (window as any).__SCROLL_PROGRESS__ ?? smoothScrollRef.current;
// const diff = progress - previous;
// // allow big jumps (like nav clicks)
// if (Math.abs(diff) < 0.3 && Math.abs(diff) > MAX_DELTA) {
//   progress = previous + Math.sign(diff) * MAX_DELTA;
// }  
// /* ================= MOBILE = RAW FRAME SCRUB ================= */
//     const eased = progress * progress * (3 - 2 * progress); // smoothstep
// const targetFrame = Math.round(eased * (MOBILE_TOTAL_FRAMES - 1));
// let frame = targetFrame;
// // only limit frame speed for small scroll changes
// if (Math.abs(targetFrame - lastFrameRef.current) < 30) {
//   const frameStep = 4;
//   frame = lastFrameRef.current;
//   if (targetFrame > frame) frame = Math.min(frame + frameStep, targetFrame);
//   if (targetFrame < frame) frame = Math.max(frame - frameStep, targetFrame);
// }
// if (Math.abs(frame - lastFrameRef.current) >= 1) {
//   preloadNearbyFrames(frame);
//   cleanupCounterRef.current++;
//   if (cleanupCounterRef.current > 10) {
//     cleanupFarFrames(frame);
//     cleanupCounterRef.current = 0;
//   }
//   const texture =
//   frameCache.current.get(frame) ??
//   frameCache.current.get(0);
//   if (texture) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     if (mat.map !== texture) {
//       mat.map = texture;
//       mat.needsUpdate = true;
//     }
//   }
//   lastFrameRef.current = frame;
// }
//     progressRef.current = progress;
//     (window as any).__SCROLL_PROGRESS__ = progress;
//   });
//   return (
//     <group ref={uiGroup}>
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_DashboardAnimation_tsx_15abb08b._.js.map