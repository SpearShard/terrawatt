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
  const coinRef = useRef<THREE.Mesh | null>(null);
  const fullCoverRef = useRef<THREE.Mesh | null>(null);

  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);
  const totalFrames = 1644;

  // 🖼️ Load dashboard frames
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const frames: THREE.Texture[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const fileNumber = i.toString().padStart(5, "0");
      const url = `https://ik.imagekit.io/m064cyjlx/dashframes/frame_${fileNumber}.png`;

      const tex = loader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      frames.push(tex);
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

  // 🧩 Attach dashboard + coin
  useEffect(() => {
    const dashboardMesh = dashboardRef.current?.[0];
    if (!dashboardMesh) return;

    // Attach UI plane
    dashboardMesh.add(uiGroup.current);
    uiGroup.current.position.set(0, 0.7, 0.17);
    uiGroup.current.rotation.set(1.35, 0, 0);

    // 🪙 Coin geometry
    const coinGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.005, 32);
    const coinMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 1,
      roughness: 0.1,
      emissive: new THREE.Color(0xffd700),
      emissiveIntensity: 0.09,
      envMapIntensity: 1.5,
    });

    const coin = new THREE.Mesh(coinGeometry, coinMaterial);
    coin.visible = false;

    // Try to place on LCD
    const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");

    if (lcdMesh) {
      const lcdWorldPos = new THREE.Vector3();
      lcdMesh.getWorldPosition(lcdWorldPos);
      dashboardMesh.worldToLocal(lcdWorldPos);

      coin.position.copy(lcdWorldPos);
      coin.position.y += 0.05;
      console.log("Coin positioned on LCD:", coin.position);
    } else {
      console.warn("LCD mesh not found, fallback coin placement.");
      coin.position.set(0, 0.3, 0.2);
    }

    dashboardMesh.add(coin);
    coinRef.current = coin;

    return () => {
      dashboardMesh.remove(uiGroup.current);
      dashboardMesh.remove(coin);
    };
  }, [dashboardRef]);

  // 🎞️ FRAME + COIN ANIMATION
  useFrame((_state, delta) => {
    if (!textures.length || !planeRef.current) return;




    // Scroll smoothing
    const lerpFactor = Math.min(delta * 6, 1);
    smoothScrollRef.current +=
      (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    // Frame index
    const frameIndex = Math.floor(
      smoothScrollRef.current * (textures.length - 1)
    );

    progressRef.current = smoothScrollRef.current;

    // Set frame texture
    const currentTexture = textures[frameIndex];
    const mat = planeRef.current.material as THREE.MeshBasicMaterial;

    if (mat.map !== currentTexture) {
      mat.map = currentTexture;
      mat.needsUpdate = true;
    }

    // ------------------------------------
    // 🎥 COIN DROP AT END OF VIDEO
    // ------------------------------------
    const videoProgress = frameIndex / (textures.length - 1);

    // ------------------------------------
// FULLSCREEN WHITE EXPANSION PANEL
// ------------------------------------
if (fullCoverRef.current) {
  const cover = fullCoverRef.current;

  if (videoProgress > 0.97) {
    const expandT = THREE.MathUtils.smoothstep(
      (videoProgress - 0.97) / 0.03,
      0,
      1
    );

    const startScale = 1;
    const endScale = 8; // adjust to fit viewport
    cover.scale.setScalar(
      THREE.MathUtils.lerp(startScale, endScale, expandT)
    );

    const mat = cover.material as THREE.MeshBasicMaterial;
    mat.opacity = THREE.MathUtils.lerp(0, 1, expandT);
  }
}


    


    if (coinRef.current) {
      const coin = coinRef.current;

      // Subtle rotation
      coin.rotation.y += delta * 4;
      coin.rotation.x += delta * 2;

      // Trigger when last 3% of video
      if (videoProgress > 0.97) {
        const progress = (videoProgress - 0.97) / 0.03;
        const eased = THREE.MathUtils.smoothstep(progress, 0, 1);

        coin.visible = true;

        const startY = 0.7;
        const fallY = 0.5;

        // Smooth Y fall
        coin.position.y = THREE.MathUtils.lerp(
          coin.position.y,
          startY - eased * fallY,
          0.08
        );

        // Smooth Z motion
        const startZ = coin.userData.startZ ?? coin.position.z;
        coin.userData.startZ = startZ;

        const towardCamera = -0.6;

        coin.position.z = THREE.MathUtils.lerp(
          coin.position.z,
          startZ + eased * towardCamera,
          0.08
        );
      } else {
        coin.visible = false;
      }
    }
  });

  return (
    <group ref={uiGroup}>
      <mesh ref={planeRef}>
        <planeGeometry args={[0.47, 0.28]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={1.2} />
      </mesh>
      <mesh ref={fullCoverRef} position={[0, 0, 0.2]}>
  <planeGeometry args={[0.47, 0.28]} />
  <meshBasicMaterial color="white" transparent opacity={0} />
</mesh>

    </group>
  );
}
