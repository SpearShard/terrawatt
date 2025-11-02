"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function DashboardAnimation({
  dashboardRef,
}: {
  dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const planeRef = useRef<THREE.Mesh | null>(null);
  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);
  const totalFrames = 100; 

  // 🔹 Load textures once
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const frames: THREE.Texture[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const fileNumber = i.toString().padStart(4, "0");
      const url = `/frames/frame_${fileNumber}.jpg`; 
      frames.push(loader.load(url));
    }
    setTextures(frames);

    return () => {
      frames.forEach((t) => t.dispose());
    };
  }, []);

  // 🔹 Scroll tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          scrollRef.current = Math.max(0, Math.min(1, window.scrollY / maxScroll));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // 🔹 Attach UI group to dashboard mesh
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
    if (!textures.length || !planeRef.current) return;

    const lerpFactor = Math.min(delta * 6, 1);
    smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    const frameIndex = Math.floor(smoothScrollRef.current * (textures.length - 1));
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



