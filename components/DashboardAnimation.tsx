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












"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);


  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);


  const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
  const textureLoader = useRef(new THREE.TextureLoader());

  const MOBILE_TOTAL_FRAMES = 1143;
  const lastFrameRef = useRef(-1);
  const targetFrameRef = useRef(-1);
  const INITIAL_PRELOAD = 800;
  const LATE_PRELOAD_START = Math.floor(MOBILE_TOTAL_FRAMES * 0.86);

  const loadFrame = (index: number) => {
  if (index < 0 || index >= MOBILE_TOTAL_FRAMES) return;
    if (frameCache.current.has(index)) return;


    textureLoader.current.load(
      `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 1;

        frameCache.current.set(index, texture);

// only apply if this frame is still the one we want
if (targetFrameRef.current === index || index === 0) {
  const plane = planeRef.current;
  if (plane) {
    const mat = plane.material as THREE.MeshBasicMaterial;
    mat.map = texture;
    mat.needsUpdate = true;
  }
}
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
  // warm up first frames so initial scroll is smooth
  for (let i = 0; i < INITIAL_PRELOAD; i++) {
    loadFrame(i);
  }

  // warm up coin-phase frames too, so first run after reload does not lag
  // when reaching the end of the dashboard timeline.
  let latePreloadTimeout: ReturnType<typeof setTimeout> | null = null;
  latePreloadTimeout = setTimeout(() => {
    for (let i = LATE_PRELOAD_START; i < MOBILE_TOTAL_FRAMES; i++) {
      loadFrame(i);
    }
  }, 250);

  const check = () => {
    const tex = frameCache.current.get(0);
    if (!tex) {
      requestAnimationFrame(check);
      return;
    }

    const plane = planeRef.current;
    if (plane) {
      const mat = plane.material as THREE.MeshBasicMaterial;
      mat.map = tex;
    }
  };

  check();

  return () => {
    if (latePreloadTimeout) {
      clearTimeout(latePreloadTimeout);
    }
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


  useFrame((_state, delta) => {
    const plane = planeRef.current;
    if (!plane) return;


    const targetScroll = scrollRef.current;
    const gap = Math.abs(targetScroll - smoothScrollRef.current);
    const inCoinPhase = targetScroll > 0.9;
    const damping = inCoinPhase ? (gap > 0.03 ? 20 : 14) : 4;

    smoothScrollRef.current +=
      (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));

    const progress = smoothScrollRef.current;

    const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
const frame = Math.floor(exactFrame);
const nextFrame = frame + 1;
const mix = exactFrame - frame;

    targetFrameRef.current = frame;

   if (frame !== lastFrameRef.current) {

loadFrame(frame);
loadFrame(frame + 1);
loadFrame(frame + 2);
loadFrame(frame + 3);
loadFrame(frame + 4);

const tex1 = frameCache.current.get(frame);
const tex2 = frameCache.current.get(nextFrame);

if (tex1) {
  const mat = plane.material as THREE.MeshBasicMaterial;

  if (tex2) {
    mat.map = mix < 0.5 ? tex1 : tex2;
  } else {
    mat.map = tex1;
  }

  mat.needsUpdate = true;
}

lastFrameRef.current = frame;
    }

    progressRef.current = progress;
    (window as any).__SCROLL_PROGRESS__ = progress;
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






















