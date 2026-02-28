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

//   // Video
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const videoTextureRef = useRef<THREE.VideoTexture | null>(null);

//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const MOBILE_TOTAL_FRAMES = 720; // change if needed

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     if (isMobile) return;
//     const video = document.createElement("video");
//     video.src = "/dashsmaller/scrubbed_dash.mp4";
//     video.muted = true;
//     video.loop = false;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.crossOrigin = "anonymous"; // if needed for CORS

//     // Start paused — we'll control time manually
//     video.pause();

//     const texture = new THREE.VideoTexture(video);
//     texture.colorSpace = THREE.SRGBColorSpace;
//     texture.generateMipmaps = false;
//     texture.minFilter = THREE.LinearFilter;
//     texture.magFilter = THREE.LinearFilter;

//     videoRef.current = video;
//     videoTextureRef.current = texture;

//     // Optional: ensure it's loaded
//     video.load();

//     return () => {
//       video.pause();
//       texture.dispose();
//     };
//   }, [isMobile]);

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;

//     const loader = new THREE.TextureLoader();
//     loader.load(
//       `/dashsmaller/dashframes/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         frameCache.current.set(index, texture);
//       }
//     );
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const AHEAD = 40;
//     const BEHIND = 20;

//     for (
//       let i = Math.max(0, center - BEHIND);
//       i <= Math.min(MOBILE_TOTAL_FRAMES - 1, center + AHEAD);
//       i++
//     ) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 140;

//     frameCache.current.forEach((tex, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         tex.dispose();
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

//         // 🔑 Force enough scroll distance for the video
//         const MIN_SCROLL_PX = window.innerHeight * 3; // 4 screens
//         const maxScroll = Math.max(
//           MIN_SCROLL_PX,
//           endHeight - startHeight
//         );

//         // 🔑 Slow down scrubbing (tweak 1.5–3 for feel)
//         const SCRUB_SLOWDOWN = 1;

//         scrollRef.current = Math.max(
//           0,
//           Math.min(1, (rawScroll / maxScroll) / SCRUB_SLOWDOWN)
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

//     // smooth scroll
//     const lerpFactor = Math.min(delta * 12, 1);
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * lerpFactor;

//     const progress = smoothScrollRef.current;

//     /* ================= MOBILE = FRAME SCRUB ================= */
//     if (isMobile) {
//       const frame = Math.floor(progress * (MOBILE_TOTAL_FRAMES - 1));

//       preloadNearbyFrames(frame);
//       cleanupFarFrames(frame);

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

//   useEffect(() => {
//   if (!isMobile) return;
//   loadFrame(0);
// }, [isMobile]);

//   return (
//     <group ref={uiGroup}>
//       {/* TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Tablet body */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>

//         {/* Black screen bezel */}
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>

//         {/* VIDEO SCREEN */}
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>

//       {/* COINS */}
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

//   // Video
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const videoTextureRef = useRef<THREE.VideoTexture | null>(null);

//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const MOBILE_TOTAL_FRAMES = 720; // change if needed

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     if (isMobile) return;
//     const video = document.createElement("video");
//     video.src = "/dashsmaller/scrubbed_dash.mp4";
//     video.muted = true;
//     video.loop = false;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.crossOrigin = "anonymous"; // if needed for CORS

//     // Start paused — we'll control time manually
//     video.pause();

//     const texture = new THREE.VideoTexture(video);
//     texture.colorSpace = THREE.SRGBColorSpace;
//     texture.generateMipmaps = false;
//     texture.minFilter = THREE.LinearFilter;
//     texture.magFilter = THREE.LinearFilter;

//     videoRef.current = video;
//     videoTextureRef.current = texture;

//     // Optional: ensure it's loaded
//     video.load();

//     return () => {
//       video.pause();
//       texture.dispose();
//     };
//   }, [isMobile]);

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;

//     const loader = new THREE.TextureLoader();
//     loader.load(
//       `/dashsmaller/dashframes/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         frameCache.current.set(index, texture);
//       }
//     );
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const AHEAD = 40;
//     const BEHIND = 20;

//     for (
//       let i = Math.max(0, center - BEHIND);
//       i <= Math.min(MOBILE_TOTAL_FRAMES - 1, center + AHEAD);
//       i++
//     ) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 140;

//     frameCache.current.forEach((tex, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         tex.dispose();
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

//         // 🔑 Force enough scroll distance for the video
//         const MIN_SCROLL_PX = window.innerHeight * 3; // 4 screens
//         const maxScroll = Math.max(
//           MIN_SCROLL_PX,
//           endHeight - startHeight
//         );

//         // 🔑 Slow down scrubbing (tweak 1.5–3 for feel)
//         const SCRUB_SLOWDOWN = 1;

//         scrollRef.current = Math.max(
//           0,
//           Math.min(1, (rawScroll / maxScroll) / SCRUB_SLOWDOWN)
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

//     // smooth scroll
//     const lerpFactor = Math.min(delta * 12, 1);
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * lerpFactor;

//     const progress = smoothScrollRef.current;

//     /* ================= MOBILE = FRAME SCRUB ================= */
//     if (isMobile) {
//       const frame = Math.floor(progress * (MOBILE_TOTAL_FRAMES - 1));

//       preloadNearbyFrames(frame);
//       cleanupFarFrames(frame);

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

//   useEffect(() => {
//   if (!isMobile) return;
//   loadFrame(0);
// }, [isMobile]);

//   return (
//     <group ref={uiGroup}>
//       {/* TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Tablet body */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>

//         {/* Black screen bezel */}
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>

//         {/* VIDEO SCREEN */}
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>

//       {/* COINS */}
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
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const planeRef = useRef<THREE.Mesh | null>(null);

  /* ================= CONFIG ================= */

  const TOTAL_FRAMES = 1461; // change if needed
  const PRELOAD_AHEAD = 65;
  const PRELOAD_BEHIND = 56;
  const CLEANUP_DISTANCE = 180;

  const frameCache = useRef<Map<number, THREE.Texture>>(new Map());

  /* ================= SCROLL ================= */

  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      rafRef.current = requestAnimationFrame(() => {
        const scrollContainer =
          document.querySelector("#scroll-container") as HTMLElement | null;

        const startHeight = scrollContainer
          ? scrollContainer.offsetHeight * 0.1
          : window.innerHeight * 2;

        const endHeight = scrollContainer
          ? scrollContainer.offsetHeight - window.innerHeight
          : document.body.scrollHeight - window.innerHeight;

        const rawScroll = Math.max(0, window.scrollY - startHeight);

        const MIN_SCROLL_PX = window.innerHeight * 3;
        const maxScroll = Math.max(MIN_SCROLL_PX, endHeight - startHeight);

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

  /* ================= FRAME LOADER ================= */

  const textureLoader = new THREE.TextureLoader();

  const loadFrame = (index: number) => {
    if (frameCache.current.has(index)) return;

    textureLoader.load(
      `/dashsmaller/dashnewframes/frame_${String(index + 1).padStart(5, "0")}.webp`,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        frameCache.current.set(index, texture);
      }
    );
  };

  const preloadNearbyFrames = (center: number) => {
    for (
      let i = Math.max(0, center - PRELOAD_BEHIND);
      i <= Math.min(TOTAL_FRAMES - 1, center + PRELOAD_AHEAD);
      i++
    ) {
      loadFrame(i);
    }
  };

  const cleanupFarFrames = (center: number) => {
    frameCache.current.forEach((tex, key) => {
      if (Math.abs(key - center) > CLEANUP_DISTANCE) {
        tex.dispose();
        frameCache.current.delete(key);
      }
    });
  };

  /* ================= ATTACH TO DASHBOARD ================= */

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

  /* ================= MAIN LOOP ================= */

  useFrame((_state, delta) => {
    const plane = planeRef.current;
    if (!plane) return;

    const lerpFactor = Math.min(delta * 12, 1);

    smoothScrollRef.current +=
      (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    const progress = smoothScrollRef.current;
    const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

    preloadNearbyFrames(frame);
    cleanupFarFrames(frame);

    const texture = frameCache.current.get(frame);
    if (!texture) return;

    const mat = plane.material as THREE.MeshBasicMaterial;
    if (mat.map !== texture) {
      mat.map = texture;
      mat.needsUpdate = true;
    }

    progressRef.current = progress;
    (window as any).__SCROLL_PROGRESS__ = progress;
  });

  /* Load first frame immediately */
  useEffect(() => {
    loadFrame(0);
  }, []);

  /* ================= JSX ================= */

  return (
    <group ref={uiGroup}>
      <group position={[0, 0, 0.05]}>
        <mesh position={[0, 0, -0.015]}>
          <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
            <meshStandardMaterial
              color="#111111"
              roughness={0.6}
              metalness={0.1}
            />
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

      <CoinAnimation
        progressRef={progressRef}
        dashboardRef={dashboardRef}
      />
    </group>
  );
}