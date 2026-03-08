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
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
//   // Mobile frames
//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const MOBILE_TOTAL_FRAMES = 731;
//   /* ---------------- VIDEO SETUP (DESKTOP ONLY) ---------------- */
//   useEffect(() => {
//     if (isMobile) return;
//     const video = document.createElement("video");
//     video.src = "/dashsmaller/dash.mp4";
//     video.muted = true;
//     video.loop = false;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.crossOrigin = "anonymous";
//     video.pause();
//     const texture = new THREE.VideoTexture(video);
//     texture.colorSpace = THREE.SRGBColorSpace;
//     texture.generateMipmaps = false;
//     texture.minFilter = THREE.LinearFilter;
//     texture.magFilter = THREE.LinearFilter;
//     videoRef.current = video;
//     videoTextureRef.current = texture;
//     video.load();
//     return () => {
//       video.pause();
//       texture.dispose();
//     };
//   }, [isMobile]);
//   /* ---------------- FRAME LOADER (MOBILE) ---------------- */
//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;
//     const loader = new THREE.TextureLoader();
//     loader.load(
//       `/dashsmaller/dashkiframes/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         frameCache.current.set(index, texture);
//       }
//     );
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
//     const lerpFactor = Math.min(delta * 12, 1);
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * lerpFactor;
//     const progress = smoothScrollRef.current;
//     /* ================= MOBILE = RAW FRAME SCRUB ================= */
//     if (isMobile) {
//       const frame = Math.floor(progress * (MOBILE_TOTAL_FRAMES - 1));
//       if (!frameCache.current.has(frame)) {
//         loadFrame(frame);
//       }
//       const texture = frameCache.current.get(frame);
//       if (!texture) return;
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       if (mat.map !== texture) {
//         mat.map = texture;
//         mat.needsUpdate = true;
//       }
//     }
//     /* ================= DESKTOP = VIDEO SCRUB ================= */
//     else {
//       const video = videoRef.current;
//       const texture = videoTextureRef.current;
//       if (!video || !texture || !video.duration) return;
//       const targetTime = progress * video.duration;
//       if (Math.abs(video.currentTime - targetTime) > 0.016) {
//         video.currentTime = targetTime;
//       }
//       texture.needsUpdate = true;
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       if (mat.map !== texture) {
//         mat.map = texture;
//         mat.needsUpdate = true;
//       }
//     }
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