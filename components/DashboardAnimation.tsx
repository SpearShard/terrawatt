// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// export default function DashboardAnimation({
//   dashboardRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const [textures, setTextures] = useState<THREE.Texture[]>([]);
//   const totalFrames = 100; 

//   // 🔹 Load textures once
//   useEffect(() => {
//     const loader = new THREE.TextureLoader();
//     const frames: THREE.Texture[] = [];

//     for (let i = 1; i <= totalFrames; i++) {
//       const fileNumber = i.toString().padStart(4, "0");
//       const url = `/frames/frame_${fileNumber}.jpg`; 
//       frames.push(loader.load(url));
//     }
//     setTextures(frames);

//     return () => {
//       frames.forEach((t) => t.dispose());
//     };
//   }, []);

//   // 🔹 Scroll tracking
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         rafRef.current = requestAnimationFrame(() => {
//           const maxScroll = document.body.scrollHeight - window.innerHeight;
//           scrollRef.current = Math.max(0, Math.min(1, window.scrollY / maxScroll));
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // 🔹 Attach UI group to dashboard mesh
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
//     if (!textures.length || !planeRef.current) return;

//     const lerpFactor = Math.min(delta * 6, 1);
//     smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * lerpFactor;

//     const frameIndex = Math.floor(smoothScrollRef.current * (textures.length - 1));
//     const currentTexture = textures[frameIndex];

//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;
//     if (mat.map !== currentTexture) {
//       mat.map = currentTexture;
//       mat.needsUpdate = true;
//     }
//   });

//   return (
//     <group ref={uiGroup}>
//       <mesh ref={planeRef}>
//         <planeGeometry args={[0.47, 0.28]} />
//         <meshBasicMaterial toneMapped={false} transparent opacity={1} />
//       </mesh>
//     </group>
//   );
// }



"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function DashboardAnimation({
  dashboardRef,
  progressRef,
}: {
  dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  progressRef: React.MutableRefObject<number>;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const planeRef = useRef<THREE.Mesh | null>(null);
  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);
  const totalFrames = 761;

  // 🖼️ Load all dashboard frames
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const frames: THREE.Texture[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const fileNumber = i.toString().padStart(4, "0");
      const url = `/frames/frame_${fileNumber}.jpg`;
      frames.push(loader.load(url));
    }

    setTextures(frames);
    return () => frames.forEach((t) => t.dispose());
  }, []);

  // 🧭 Track scroll progress
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      rafRef.current = requestAnimationFrame(() => {
        const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;

        // 🔹 define when the video starts (30% of scroll-container height)
        const startHeight = scrollContainer
          ? scrollContainer.offsetHeight * 0.8
          : window.innerHeight * 2;





        // const endHeight = document.body.scrollHeight - window.innerHeight;
        // const rawScroll = Math.max(0, window.scrollY - startHeight);
        // const maxScroll = Math.max(1, endHeight - startHeight);
        // scrollRef.current = Math.max(0, Math.min(1, rawScroll / maxScroll));

        const endHeight = scrollContainer
          ? scrollContainer.offsetHeight - window.innerHeight
          : document.body.scrollHeight - window.innerHeight;

        // 🔹 calculate normalized scroll only after startHeight
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

  // 🧩 Attach video plane to the dashboard
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

  // 🎞️ Animate the dashboard texture by scroll
  useFrame((_state, delta) => {
    if (!textures.length || !planeRef.current) return;

    const lerpFactor = Math.min(delta * 6, 1);
    smoothScrollRef.current +=
      (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    const frameIndex = Math.floor(
      smoothScrollRef.current * (textures.length - 1)
    );
    progressRef.current = smoothScrollRef.current;

    const currentTexture = textures[frameIndex];
    const mat = planeRef.current.material as THREE.MeshBasicMaterial;

    if (mat.map !== currentTexture) {
      mat.map = currentTexture;
      mat.needsUpdate = true;
    }
  });

  return (
    <group ref={uiGroup}>
      <mesh ref={planeRef}>
        <planeGeometry args={[0.47, 0.28]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={1} />
      </mesh>
    </group>
  );
}
