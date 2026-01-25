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

//   // Scroll state
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   // Video
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const videoTextureRef = useRef<THREE.VideoTexture | null>(null);

//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     const video = document.createElement("video");
//     video.src = "/dashsmaller/dashscrub.webm";
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
//   }, []);

//   /* ---------------- SCROLL TRACKING ---------------- */
//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;

//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;

//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.7
//           : window.innerHeight * 2;

//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;

//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const maxScroll = Math.max(1, endHeight - startHeight);

//         scrollRef.current = Math.max(0, Math.min(1, rawScroll / maxScroll));

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
//     const video = videoRef.current;
//     const texture = videoTextureRef.current;
//     const plane = planeRef.current;

//     if (!video || !texture || !plane || !video.duration || isNaN(video.duration)) return;

//     // Smooth scroll progress (adjust 12–15 for feel — higher = snappier but still smooth)
//     const lerpFactor = Math.min(delta * 12, 1);
//     smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * lerpFactor;

//     // Direct scrubbing: set exact frame based on scroll
//     const targetTime = smoothScrollRef.current * video.duration;
//     if (Math.abs(video.currentTime - targetTime) > 0.016) { // ~1 frame threshold
//       video.currentTime = targetTime;
//     }

//     // Sync coin animation progress perfectly
//     progressRef.current = smoothScrollRef.current;

//     // Ensure video texture updates every frame during scrubbing
//     texture.needsUpdate = true;

//     // Assign texture once (safe check)
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     if (mat.map !== texture) {
//       mat.map = texture;
//       mat.needsUpdate = true;
//     }
//   });

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
  onReady?: () => void;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const planeRef = useRef<THREE.Mesh | null>(null);

  // Scroll state
  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Video
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null);

  /* ---------------- VIDEO SETUP ---------------- */
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/dashsmaller/newdashvid.mp4";
    video.muted = true;
    video.loop = false;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous"; // if needed for CORS

    // Start paused — we'll control time manually
    video.pause();

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    videoRef.current = video;
    videoTextureRef.current = texture;

    // Optional: ensure it's loaded
    video.load();

    return () => {
      video.pause();
      texture.dispose();
    };
  }, []);

  /* ---------------- SCROLL TRACKING ---------------- */
  useEffect(() => {
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

// 🔑 Force enough scroll distance for the video
const MIN_SCROLL_PX = window.innerHeight * 3; // 4 screens
const maxScroll = Math.max(
  MIN_SCROLL_PX,
  endHeight - startHeight
);

// 🔑 Slow down scrubbing (tweak 1.5–3 for feel)
const SCRUB_SLOWDOWN = 1;

scrollRef.current = Math.max(
  0,
  Math.min(1, (rawScroll / maxScroll) / SCRUB_SLOWDOWN)
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

  /* ---------------- ATTACH TO DASHBOARD ---------------- */
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

  /* ---------------- MAIN ANIMATION LOOP ---------------- */
  useFrame((_state, delta) => {
    const video = videoRef.current;
    const texture = videoTextureRef.current;
    const plane = planeRef.current;

    if (!video || !texture || !plane || !video.duration || isNaN(video.duration)) return;

    // Smooth scroll progress (adjust 12–15 for feel — higher = snappier but still smooth)
    const lerpFactor = Math.min(delta * 12, 1);
    smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    // Direct scrubbing: set exact frame based on scroll
    const targetTime = smoothScrollRef.current * video.duration;
    if (Math.abs(video.currentTime - targetTime) > 0.016) { // ~1 frame threshold
      video.currentTime = targetTime;
    }

    // Sync coin animation progress perfectly
    progressRef.current = smoothScrollRef.current;
    (window as any).__SCROLL_PROGRESS__ = progressRef.current;

    



    





    // Ensure video texture updates every frame during scrubbing
    texture.needsUpdate = true;

    // Assign texture once (safe check)
    const mat = plane.material as THREE.MeshBasicMaterial;
    if (mat.map !== texture) {
      mat.map = texture;
      mat.needsUpdate = true;
    }
  });

  return (
    <group ref={uiGroup}>
      {/* TABLET */}
      <group position={[0, 0, 0.05]}>
        {/* Tablet body */}
        <mesh position={[0, 0, -0.015]}>
          <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
            <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
          </RoundedBox>
        </mesh>

        {/* Black screen bezel */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.47, 0.29]} />
          <meshBasicMaterial color="#000" />
        </mesh>

        {/* VIDEO SCREEN */}
        <mesh ref={planeRef} position={[0, 0, 0.001]}>
          <planeGeometry args={[0.47, 0.29]} />
          <meshBasicMaterial toneMapped={false} />
        </mesh>
      </group>

      {/* COINS */}
      <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
    </group>
  );
}