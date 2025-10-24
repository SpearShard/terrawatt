"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function DashboardAnimation({
  dashboardRef,
}: {
  dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
}) {
  const uiGroup = useRef<THREE.Group>(new THREE.Group());
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const dashboardMesh = dashboardRef.current?.[0];
    if (!dashboardMesh || videoTextureRef.current) return;

    const video = document.createElement("video");
    video.src = "/dash.mp4"; // file in public folder
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    videoRef.current = video;

    const handleCanPlay = () => {
      console.log("✅ Video ready — creating texture");
      const texture = new THREE.VideoTexture(video);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      videoTextureRef.current = texture;

      // Apply texture directly to the plane’s material (avoid state updates)
      if (planeRef.current) {
        const mat = planeRef.current.material as THREE.MeshBasicMaterial;
        mat.map = texture;
        mat.needsUpdate = true;
      }

      video
        .play()
        .then(() => console.log("▶️ Video playing"))
        .catch((err) => console.warn("Video play error:", err));
    };

    video.addEventListener("canplay", handleCanPlay);
    video.load();

    // Attach UI group once dashboard mesh is ready
    requestAnimationFrame(() => {
      dashboardMesh.add(uiGroup.current);
      uiGroup.current.position.set(0, 0.7, 0.17);
      uiGroup.current.rotation.set(1.35, 0, 0);
    });

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      dashboardMesh?.remove(uiGroup.current);
      if (videoTextureRef.current) {
        videoTextureRef.current.dispose();
        videoTextureRef.current = null;
      }
    };
  }, [dashboardRef]);

  useFrame(() => {
    if (uiGroup.current) {
      uiGroup.current.rotation.y += 0; // optional motion
    }
  });

  return (
    <group ref={uiGroup}>
      <mesh ref={planeRef}>
        <planeGeometry args={[0.37, 0.28]} />
        <meshBasicMaterial
          toneMapped={false}
          transparent
          opacity={1}
          color={"white"} // fallback color until video plays
        />
      </mesh>
    </group>
  );
}
