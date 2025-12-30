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
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);

//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const [textures, setTextures] = useState<THREE.Texture[]>([]);
//   const totalFrames = 732;

//   // Load dashboard frames
//   useEffect(() => {
//     const loadTextures = async () => {
//       const loader = new THREE.TextureLoader();
//       const promises: Promise<THREE.Texture>[] = [];

//       for (let i = 1; i <= totalFrames; i++) {
//         const fileNumber = i.toString().padStart(5, "0");
//         const url = `/dashsmaller/frame_${fileNumber}.jpg`;

//         const promise = new Promise<THREE.Texture>((resolve) => {
//           const tex = loader.load(url, () => resolve(tex));
//           tex.colorSpace = THREE.SRGBColorSpace;
//           tex.minFilter = THREE.LinearFilter;
//           tex.magFilter = THREE.LinearFilter;
//           tex.generateMipmaps = true;
//         });
//         promises.push(promise);
//       }

//       const frames = await Promise.all(promises);
//       setTextures(frames);
//     };

//     loadTextures();

//     return () => {
//       // Dispose textures on unmount
//       textures.forEach((t) => t.dispose());
//     };
//   }, []);

//   // Scroll tracking
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

//   // Attach to dashboard
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

//   // Main animation: display frame based on scroll progress
//   useFrame((_state, delta) => {
//     if (!textures.length || !planeRef.current) return;

//     const targetProgress = scrollRef.current;
//     const lerpFactor = Math.min(delta * 10, 1);
//     smoothScrollRef.current += (targetProgress - smoothScrollRef.current) * lerpFactor;

//     const frameIndex = Math.floor(
//       smoothScrollRef.current * (textures.length - 1)
//     );

//     progressRef.current = smoothScrollRef.current;

//     const currentTexture = textures[frameIndex];
//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;

//     if (mat.map !== currentTexture) {
//       mat.map = currentTexture;
//       mat.needsUpdate = true;
//     }
//   });

//   return (
//     <group ref={uiGroup}>
//       {/* TESLA-STYLE SIMPLE TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Outer Tablet Shape */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.50, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
//         </mesh>

//         {/* Screen Area */}
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial
//             color="#000"
//             transparent
//             opacity={1}
//           />
//         </mesh>

//         {/* Actual Dynamic Dashboard Frames */}
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
          
//           <meshBasicMaterial
//             toneMapped={false}
//             transparent
//             opacity={1}
//           />
//         </mesh>
//       </group>

//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }






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
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);

//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const [textures, setTextures] = useState<THREE.Texture[]>([]);
//   const totalFrames = 732;

//   // Load dashboard frames
// useEffect(() => {
//   const loader = new THREE.TextureLoader();
//   let mounted = true;

//   const INITIAL_FRAMES = 60; // 👈 shows almost instantly
//   const loadedFrames: THREE.Texture[] = [];

//   const loadFrame = (i: number) =>
//     new Promise<THREE.Texture>((resolve) => {
//       const fileNumber = i.toString().padStart(5, "0");
//       const url = `/dashsmaller/dashwebp/frame_${fileNumber}.webp`;

//       const tex = loader.load(url, () => resolve(tex));
//       tex.colorSpace = THREE.SRGBColorSpace;

//       // 🔥 performance critical
//       tex.generateMipmaps = false;
//       tex.minFilter = THREE.LinearFilter;
//       tex.magFilter = THREE.LinearFilter;
//     });

//   (async () => {
//     // 1️⃣ Load first frames FAST
//     for (let i = 1; i <= INITIAL_FRAMES; i++) {
//       const tex = await loadFrame(i);
//       if (!mounted) return;
//       loadedFrames.push(tex);
//     }

//     setTextures([...loadedFrames]); // 👈 SCREEN APPEARS HERE

//     // 2️⃣ Load rest quietly in background
//     for (let i = INITIAL_FRAMES + 1; i <= totalFrames; i++) {
//       const tex = await loadFrame(i);
//       if (!mounted) return;
//       loadedFrames.push(tex);
//       setTextures([...loadedFrames]); // progressively improves
//     }
//   })();

//   return () => {
//     mounted = false;
//     loadedFrames.forEach((t) => t.dispose());
//   };
// }, []);


//   // Scroll tracking
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

//   // Attach to dashboard
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

//   // Main animation: display frame based on scroll progress
//   useFrame((_state, delta) => {
//     if (!textures.length || !planeRef.current) return;

//     const targetProgress = scrollRef.current;
//     const lerpFactor = Math.min(delta * 10, 1);
//     smoothScrollRef.current += (targetProgress - smoothScrollRef.current) * lerpFactor;

//     const frameIndex = Math.min(
//   textures.length - 1,
//   Math.floor(smoothScrollRef.current * totalFrames)
// );


//     progressRef.current = smoothScrollRef.current;

//     const currentTexture = textures[frameIndex];
//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;

//     if (mat.map !== currentTexture) {
//       mat.map = currentTexture;
//       mat.needsUpdate = true;
//     }
//   });

//   return (
//     <group ref={uiGroup}>
//       {/* TESLA-STYLE SIMPLE TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Outer Tablet Shape */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.50, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
//         </mesh>

//         {/* Screen Area */}
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial
//   color="#000"
//   transparent
//   opacity={textures.length ? 1 : 0}
// />

//         </mesh>

//         {/* Actual Dynamic Dashboard Frames */}
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
          
//           <meshBasicMaterial
//             toneMapped={false}
//             transparent
//             opacity={1}
//           />
//         </mesh>
//       </group>

//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }






// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";

// const TOTAL_FRAMES = 732;
// const COLS = 8;
// const ROWS = 9;
// const FRAMES_PER_SHEET = COLS * ROWS;

// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);

//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const [sheets, setSheets] = useState<THREE.Texture[]>([]);

//   /* ---------------- LOAD SPRITE SHEETS ---------------- */
//   useEffect(() => {
//     const loader = new THREE.TextureLoader();
//     const sheetCount = Math.ceil(TOTAL_FRAMES / FRAMES_PER_SHEET);
//     const loaded: THREE.Texture[] = [];
//     let mounted = true;

//     (async () => {
//       for (let i = 0; i < sheetCount; i++) {
//         const tex = await new Promise<THREE.Texture>((resolve) => {
//           const t = loader.load(
//             `/dashsmaller/dashwebp/dashsprites/sheet_${i.toString().padStart(2, "0")}.webp`,
//             () => resolve(t)
//           );
          
//           t.colorSpace = THREE.SRGBColorSpace;
//           t.generateMipmaps = false;
//           t.minFilter = THREE.LinearFilter;
//           t.magFilter = THREE.LinearFilter;
//           t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
//         });

//         if (!mounted) return;
//         loaded.push(tex);
//         setSheets([...loaded]); // progressive load
//       }
//     })();

//     return () => {
//       mounted = false;
//       loaded.forEach((t) => t.dispose());
//     };
//   }, []);

//   /* ---------------- SCROLL TRACKING ---------------- */
//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;

//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector(
//           "#scroll-container"
//         ) as HTMLElement | null;

//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.7
//           : window.innerHeight * 2;

//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;

//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const maxScroll = Math.max(1, endHeight - startHeight);

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

//   /* ---------------- MAIN ANIMATION ---------------- */
//   useFrame((_state, delta) => {
//     if (!sheets.length || !planeRef.current) return;

//     const lerp = Math.min(delta * 10, 1);
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * lerp;

//     progressRef.current = smoothScrollRef.current;

//     const frame = Math.min(
//       TOTAL_FRAMES - 1,
//       Math.floor(smoothScrollRef.current * TOTAL_FRAMES)
//     );

//     const sheetIndex = Math.floor(frame / FRAMES_PER_SHEET);
//     const localFrame = frame % FRAMES_PER_SHEET;

//     const col = localFrame % COLS;
//     const row = Math.floor(localFrame / COLS);

//     const tex = sheets[sheetIndex];
//     if (!tex) return;

//     tex.repeat.set(1 / COLS, 1 / ROWS);
//     tex.offset.set(col / COLS, 1 - (row + 1) / ROWS);

//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;
//     if (mat.map !== tex) {
//       mat.map = tex;
//       mat.needsUpdate = true;
//     }
//   });

//   return (
//     <group ref={uiGroup}>
//       {/* TABLET */}
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
//         </mesh>

//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>

//         {/* SPRITE SHEET DASHBOARD */}
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
    video.src = "/dashsmaller/dashboardframe.mp4";
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
          ? scrollContainer.offsetHeight * 0.7
          : window.innerHeight * 2;

        const endHeight = scrollContainer
          ? scrollContainer.offsetHeight - window.innerHeight
          : document.body.scrollHeight - window.innerHeight;

        const rawScroll = Math.max(0, window.scrollY - startHeight);
        const maxScroll = Math.max(1, endHeight - startHeight);

        scrollRef.current = Math.max(0, Math.min(1, rawScroll / maxScroll));

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