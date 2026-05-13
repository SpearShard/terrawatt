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


//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);


//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const textureLoader = useRef(new THREE.TextureLoader());

//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(-1);
//   const targetFrameRef = useRef(-1);
//   const INITIAL_PRELOAD = 800;

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;


//     textureLoader.current.load(
//       `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         texture.anisotropy = 1;

//         frameCache.current.set(index, texture);

// // only apply if this frame is still the one we want
// if (targetFrameRef.current === index || index === 0) {
//   const plane = planeRef.current;
//   if (plane) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     mat.map = texture;
//     mat.needsUpdate = true;
//   }
// }
//       }
//     );
//   };




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

//         const MIN_SCROLL_PX = window.innerHeight * 5;
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
//   // warm up first frames so initial scroll is smooth
//   for (let i = 0; i < INITIAL_PRELOAD; i++) {
//     loadFrame(i);
//   }

//   const check = () => {
//     const tex = frameCache.current.get(0);
//     if (!tex) {
//       requestAnimationFrame(check);
//       return;
//     }

//     const plane = planeRef.current;
//     if (plane) {
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       mat.map = tex;
//     }
//   };

//   check();
// }, []);


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


//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;


//     const damping = 4;
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));

//     const progress = smoothScrollRef.current;

//     const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
// const frame = Math.floor(exactFrame);
// const nextFrame = frame + 1;
// const mix = exactFrame - frame;

//     targetFrameRef.current = frame;

//    if (frame !== lastFrameRef.current && frameCache.current.has(frame)) {

//       loadFrame(frame);
// loadFrame(frame + 1);
// loadFrame(frame + 2);
// loadFrame(frame + 3);
// loadFrame(frame + 4);

//      const tex1 = frameCache.current.get(frame);
// const tex2 = frameCache.current.get(nextFrame);

// if (tex1 && tex2) {
//   const mat = plane.material as THREE.MeshBasicMaterial;

//   // simple blend trick
//   mat.map = mix < 0.5 ? tex1 : tex2;
//   mat.needsUpdate = true;
// }

//       lastFrameRef.current = frame;
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


//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);


//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const textureLoader = useRef(new THREE.TextureLoader());

//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(-1);
//   const targetFrameRef = useRef(-1);
//   const INITIAL_PRELOAD = 800;
//   const LATE_PRELOAD_START = Math.floor(MOBILE_TOTAL_FRAMES * 0.86);

//   const loadFrame = (index: number) => {
//   if (index < 0 || index >= MOBILE_TOTAL_FRAMES) return;
//     if (frameCache.current.has(index)) return;


//     textureLoader.current.load(
//       `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         texture.anisotropy = 1;

//         frameCache.current.set(index, texture);

// // only apply if this frame is still the one we want
// if (targetFrameRef.current === index || index === 0) {
//   const plane = planeRef.current;
//   if (plane) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     mat.map = texture;
//     mat.needsUpdate = true;
//   }
// }
//       }
//     );
//   };




//   useEffect(() => {
//     (window as Window & { __SCROLL_PROGRESS__?: number }).__SCROLL_PROGRESS__ = 0;

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

//         const MIN_SCROLL_PX = window.innerHeight * 5;
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
//   // warm up first frames so initial scroll is smooth
//   for (let i = 0; i < INITIAL_PRELOAD; i++) {
//     loadFrame(i);
//   }

//   // warm up coin-phase frames too, so first run after reload does not lag
//   // when reaching the end of the dashboard timeline.
//   let latePreloadTimeout: ReturnType<typeof setTimeout> | null = null;
//   latePreloadTimeout = setTimeout(() => {
//     for (let i = LATE_PRELOAD_START; i < MOBILE_TOTAL_FRAMES; i++) {
//       loadFrame(i);
//     }
//   }, 250);

//   const check = () => {
//     const tex = frameCache.current.get(0);
//     if (!tex) {
//       requestAnimationFrame(check);
//       return;
//     }

//     const plane = planeRef.current;
//     if (plane) {
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       mat.map = tex;
//     }
//   };

//   check();

//   return () => {
//     if (latePreloadTimeout) {
//       clearTimeout(latePreloadTimeout);
//     }
//   };
// }, []);


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


//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;


//     const targetScroll = scrollRef.current;
//     const gap = Math.abs(targetScroll - smoothScrollRef.current);
//     const inCoinPhase = targetScroll > 0.9;
//     const damping = inCoinPhase ? (gap > 0.03 ? 20 : 14) : 4;

//     smoothScrollRef.current +=
//       (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));

//     const progress = smoothScrollRef.current;

//     const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
// const frame = Math.floor(exactFrame);
// const nextFrame = frame + 1;
// const mix = exactFrame - frame;

//     targetFrameRef.current = frame;

//    if (frame !== lastFrameRef.current) {

// loadFrame(frame);
// loadFrame(frame + 1);
// loadFrame(frame + 2);
// loadFrame(frame + 3);
// loadFrame(frame + 4);

// const tex1 = frameCache.current.get(frame);
// const tex2 = frameCache.current.get(nextFrame);

// if (tex1) {
//   const mat = plane.material as THREE.MeshBasicMaterial;

//   if (tex2) {
//     mat.map = mix < 0.5 ? tex1 : tex2;
//   } else {
//     mat.map = tex1;
//   }

//   mat.needsUpdate = true;
// }

// lastFrameRef.current = frame;
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









// "use client";

// import { useEffect, useRef } from "react";
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


//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);


//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const loadingFrames = useRef<Set<number>>(new Set());
//   const textureLoader = useRef(new THREE.TextureLoader());
// THREE.Cache.enabled = true;

//   const isMobileRef = useRef<boolean>(false);

//   useEffect(() => {
//     const check = () => {
//       isMobileRef.current = window.innerWidth < 768;
//     };

//     check();
//     window.addEventListener("resize", check);

//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
//   const mountedRef = useRef(false);

//   const MOBILE_TOTAL_FRAMES = 286;
//   const lastFrameRef = useRef(-1);
//   const targetFrameRef = useRef(-1);
//   const INITIAL_PRELOAD = 10;
//   const PRELOAD_BEHIND = 2;
//   const PRELOAD_AHEAD = 4;
//   const MAX_CACHE_DISTANCE = 20;
//   const cleanupCounterRef = useRef(0);

//   const BASE_URL = "https://ik.imagekit.io/0s6dxbeae/Teraawatt_Dashboard/phone_frames";

//   const loadFrame = (index: number) => {
//     if (index < 0 || index >= MOBILE_TOTAL_FRAMES) return;
//     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;

//     loadingFrames.current.add(index);

//     textureLoader.current.load(
//       `${BASE_URL}/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         loadingFrames.current.delete(index);

//         if (!mountedRef.current) {
//           texture.dispose();
//           return;
//         }

//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;


//         frameCache.current.set(index, texture);

//         if (targetFrameRef.current === index || index === 0) {
//           const plane = planeRef.current;
//           if (plane) {
//             const mat = plane.material as THREE.MeshBasicMaterial;
//             mat.map = texture;
//             mat.needsUpdate = true;
//           }
//         }
//       },
//       undefined,
//       () => {
//         loadingFrames.current.delete(index);
//       }
//     );
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const start = Math.max(0, center - PRELOAD_BEHIND);
//     const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + PRELOAD_AHEAD);

//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     frameCache.current.forEach((texture, key) => {
//       if (key !== 0 && Math.abs(key - center) > MAX_CACHE_DISTANCE) {
//         texture.dispose();
//         frameCache.current.delete(key);
//       }
//     });
//   };


//   useEffect(() => {
//     (window as Window & { __SCROLL_PROGRESS__?: number }).__SCROLL_PROGRESS__ = 0;

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

//         const MIN_SCROLL_PX = window.innerHeight * 5;
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
//     if (isMobileRef.current) return;

//     const video = document.createElement("video");
//     video.src = "https://ik.imagekit.io/0s6dxbeae/Teraawatt_Dashboard/dashboard_12-04-2026_scrub.mp4";

//     video.crossOrigin = "anonymous";
//     video.muted = true;
// video.playsInline = true;
// video.preload = "metadata";
// video.pause();

//     const texture = new THREE.VideoTexture(video);
// texture.colorSpace = THREE.SRGBColorSpace;

// // ✅ ADD THESE LINES RIGHT HERE
// texture.minFilter = THREE.LinearFilter;
// texture.magFilter = THREE.LinearFilter;
// texture.generateMipmaps = false;

//     videoRef.current = video;
//     videoTextureRef.current = texture;



//     return () => {
//       video.pause();
//       texture.dispose();
//     };
//   }, []);

//   useEffect(() => {
//     mountedRef.current = true;
//     let mounted = true;

//     setTimeout(() => {
//   if (isMobileRef.current) {
//     for (let i = 0; i < INITIAL_PRELOAD; i++) {
//       loadFrame(i);
//     }
//   }
// }, 0);

//     const check = () => {
//       if (!mounted) return;

//       const tex = frameCache.current.get(0);
//       if (!tex) {
//         requestAnimationFrame(check);
//         return;
//       }

//       const plane = planeRef.current;
//       if (plane) {
//         const mat = plane.material as THREE.MeshBasicMaterial;
//         mat.map = tex;
//       }
//     };

//     check();

//     return () => {
//       mountedRef.current = false;
//       mounted = false;
//       frameCache.current.forEach((texture) => texture.dispose());
//       frameCache.current.clear();
//       loadingFrames.current.clear();
//     };
//   }, []);


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


//   const lastVideoTimeRef = useRef(0);


//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;

//     // 🧠 DESKTOP → VIDEO MODE
//     if (!isMobileRef.current && videoRef.current && videoTextureRef.current) {
//       const video = videoRef.current;

//       if (video.readyState >= 2 && video.duration) {
//         const targetTime = progressRef.current * video.duration;

//         if (Math.abs(targetTime - lastVideoTimeRef.current) > 0.08) {
//           video.currentTime = targetTime;
//           lastVideoTimeRef.current = targetTime;
//         }

//       }

//       const mat = plane.material as THREE.MeshBasicMaterial;
//       if (mat.map !== videoTextureRef.current) {
//         mat.map = videoTextureRef.current;
//         mat.needsUpdate = true;
//       }

//       // ✅ ADD THIS
//   progressRef.current = scrollRef.current;
//   (window as any).__SCROLL_PROGRESS__ = scrollRef.current;

//       return; // 🚨 skip frame logic
//     }


//     const targetScroll = scrollRef.current;
//     const gap = Math.abs(targetScroll - smoothScrollRef.current);
//     const inCoinPhase = targetScroll > 0.9;
//     const damping = inCoinPhase ? (gap > 0.03 ? 20 : 14) : 4;

//     smoothScrollRef.current +=
//       (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));

//     const progress = smoothScrollRef.current;

//     const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
//     const frame = Math.floor(exactFrame);
//     const nextFrame = frame + 1;
//     const mix = exactFrame - frame;

//     targetFrameRef.current = frame;

//     if (Math.abs(frame - lastFrameRef.current) >= 2) {
//       preloadNearbyFrames(frame);

//       cleanupCounterRef.current += 1;
//       if (cleanupCounterRef.current > 10) {
//         cleanupFarFrames(frame);
//         cleanupCounterRef.current = 0;
//       }

//       const tex1 = frameCache.current.get(frame);
//       const tex2 = frameCache.current.get(nextFrame);

//       if (tex1) {
//         const mat = plane.material as THREE.MeshBasicMaterial;
//         mat.map = tex2 && mix >= 0.5 ? tex2 : tex1;
//         mat.needsUpdate = true;
//       }

//       lastFrameRef.current = frame;
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









"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import CoinAnimation from "./CoinAnimation";

export default function DashboardAnimation({
  dashboardRef,
  progressRef,
}: {
  dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  progressRef: React.MutableRefObject<number>;
  onReady?: () => void;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const planeRef = useRef<THREE.Mesh | null>(null);


  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);


  const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
  const loadingFrames = useRef<Set<number>>(new Set());
  const textureLoader = useRef(new THREE.TextureLoader());
  THREE.Cache.enabled = true;

  const isMobileRef = useRef<boolean>(false);

  useEffect(() => {
    const check = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
  const MOBILE_TOTAL_FRAMES = 300;

const lastFrameRef = useRef(-1);

const loadFrame = (frameIndex: number) => {
  if (
    frameIndex < 0 ||
    frameIndex >= MOBILE_TOTAL_FRAMES ||
    loadingFrames.current.has(frameIndex) ||
    frameCache.current.has(frameIndex)
  ) {
    return;
  }

  loadingFrames.current.add(frameIndex);

  const framePath = `/dashsmaller/frames/frame_${String(frameIndex).padStart(4, "0")}.jpg`;

  textureLoader.current.load(
    framePath,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      frameCache.current.set(frameIndex, texture);
      loadingFrames.current.delete(frameIndex);
    },
    undefined,
    () => {
      loadingFrames.current.delete(frameIndex);
    }
  );
};










  useEffect(() => {
    (window as Window & { __SCROLL_PROGRESS__?: number }).__SCROLL_PROGRESS__ = 0;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      rafRef.current = requestAnimationFrame(() => {
        const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;

        const startHeight = scrollContainer
          ? scrollContainer.offsetHeight * 0.1
          : window.innerHeight * 2;

        const endHeight = scrollContainer
          ? scrollContainer.offsetHeight - window.innerHeight
          : document.body.scrollHeight - window.innerHeight;

        const rawScroll = Math.max(0, window.scrollY - startHeight);

        const MIN_SCROLL_PX = window.innerHeight * 5;
        const maxScroll = Math.max(
          MIN_SCROLL_PX,
          endHeight - startHeight
        );

        scrollRef.current = Math.max(
          0,
          Math.min(1, rawScroll / maxScroll)
        );

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {


    const video = document.createElement("video");
    video.src = isMobileRef.current
      ? "/dashsmaller/dashboard_mobile.mp4"
      : "/dashsmaller/dashboard_desktop.mp4";

    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.pause();

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;

    // ✅ ADD THESE LINES RIGHT HERE
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    videoRef.current = video;
    videoTextureRef.current = texture;



    return () => {
      video.pause();
      texture.dispose();
    };
  }, []);

  


  useEffect(() => {
    const dashboardMesh = dashboardRef.current?.[0];
    if (!dashboardMesh) return;

    dashboardMesh.add(uiGroup.current);
    uiGroup.current.position.set(0, 0.7, 0.17);
    uiGroup.current.rotation.set(1.35, 0, 0);

    return () => {
      dashboardMesh.remove(uiGroup.current);
    };
  }, [dashboardRef]);


  const lastVideoTimeRef = useRef(0);


    useFrame((_state, delta) => {
        const plane = planeRef.current;
        if (!plane) return;

        // Optimized frame loading - reduce lookahead and throttle updates
        const exactFrame = progressRef.current * (MOBILE_TOTAL_FRAMES - 1);
        const frame = Math.floor(exactFrame);
        const nextFrame = frame + 1;
        const mix = exactFrame - frame;

        // 🧠 DESKTOP → VIDEO MODE
        if (videoRef.current && videoTextureRef.current) {
            const video = videoRef.current;

            if (video.readyState >= 2 && video.duration) {
                const targetTime = progressRef.current * video.duration;
                // Increased responsiveness for video smoothing
                const nextTime =
                    video.currentTime + (targetTime - video.currentTime) * 0.15;

                // Reduced threshold for more frequent updates
                if (Math.abs(nextTime - lastVideoTimeRef.current) > 0.008) {
                    video.currentTime = nextTime;
                    lastVideoTimeRef.current = nextTime;
                }

            }

            const mat = plane.material as THREE.MeshBasicMaterial;
            if (mat.map !== videoTextureRef.current) {
                mat.map = videoTextureRef.current;
                mat.needsUpdate = true;
            }

            // ✅ ADD THIS
            progressRef.current = scrollRef.current;
            (window as any).__SCROLL_PROGRESS__ = scrollRef.current;

            return; // 🚨 skip frame logic
        }


        const targetScroll = scrollRef.current;
        const gap = Math.abs(targetScroll - smoothScrollRef.current);
        const inCoinPhase = targetScroll > 0.9;
        // Optimized damping for smoother scroll responsiveness
        const damping = inCoinPhase ? (gap > 0.02 ? 18 : 12) : 3;

        smoothScrollRef.current +=
            (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));

        const progress = smoothScrollRef.current;

        progressRef.current = progress;
        (window as any).__SCROLL_PROGRESS__ = progress;

        // Optimized frame loading - reduce lookahead and throttle updates
        if (frame !== lastFrameRef.current) {
            // Only load current and next frame, reduce lookahead
            loadFrame(frame);
            loadFrame(frame + 1);
            
            const tex1 = frameCache.current.get(frame);
            const tex2 = frameCache.current.get(nextFrame);
            
            if (tex1) {
                const mat = plane.material as THREE.MeshBasicMaterial;
                if (tex2) {
                    // Simple blend without creating new objects
                    mat.map = mix < 0.5 ? tex1 : tex2;
                } else {
                    mat.map = tex1;
                }
                mat.needsUpdate = true;
            }
            
            lastFrameRef.current = frame;
        }
    });

  return (
    <group ref={uiGroup}>
      <group position={[0, 0, 0.05]}>
        <mesh position={[0, 0, -0.015]}>
          <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
            <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
          </RoundedBox>
        </mesh>

        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.47, 0.29]} />
          <meshBasicMaterial color="#000" />
        </mesh>

        <mesh ref={planeRef} position={[0, 0, 0.001]}>
          <planeGeometry args={[0.47, 0.29]} />
          <meshBasicMaterial toneMapped={false} />
        </mesh>
      </group>

      <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
    </group>
  );
}


















