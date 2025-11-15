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
  const scrollRef = useRef(0);
  const smoothScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);
  const totalFrames = 1456;

  const coinStartScroll = 0.98; // when the coin starts falling
  const coinFallRange = 0.2; // fraction of scroll used for coin fall
  const maxCoinFall = -2; // how far down the coin goes

  // 🖼️ Load dashboard frames
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const frames: THREE.Texture[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const fileNumber = i.toString().padStart(4, "0");
      const url = `/frames1/frame_${fileNumber}.jpg`;
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

  // 🧩 Attach dashboard and coin
  useEffect(() => {
  const dashboardMesh = dashboardRef.current?.[0];
  if (!dashboardMesh) return;

  // Add UI plane to dashboard
  dashboardMesh.add(uiGroup.current);
  uiGroup.current.position.set(0, 0.7, 0.17);
  uiGroup.current.rotation.set(1.35, 0, 0);

  // 🪙 Coin geometry & material
  const coinGeometry = new THREE.CylinderGeometry(0.03,0.03,0.005, 32);
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

  // 🔍 Try to find the LCD mesh in the dashboard
  const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");

  if (lcdMesh) {
    // Get the LCD's world position
    const lcdWorldPos = new THREE.Vector3();
    lcdMesh.getWorldPosition(lcdWorldPos);

    // Convert world position into dashboard space
    dashboardMesh.worldToLocal(lcdWorldPos);

    // Place coin right above that point
    coin.position.copy(lcdWorldPos);
    coin.position.y += 0.05; // offset slightly upward
    console.log("✅ Coin positioned at LCD:", coin.position);
  } else {
    console.warn("⚠️ LCD mesh not found, placing coin at fallback position.");
    coin.position.set(0, 0.3, 0.2);
  }

  // Attach the coin directly to the dashboard mesh
  dashboardMesh.add(coin);
  coinRef.current = coin;

  return () => {
    dashboardMesh.remove(uiGroup.current);
    dashboardMesh.remove(coin);
  };
}, [dashboardRef]);


  // 🎞️ Scroll-driven dashboard + coin
  useFrame((_state, delta) => {
    if (!textures.length || !planeRef.current) return;

    const lerpFactor = Math.min(delta * 6, 1);
    smoothScrollRef.current +=
      (scrollRef.current - smoothScrollRef.current) * lerpFactor;

    const frameIndex = Math.floor(
      Math.min(smoothScrollRef.current, coinStartScroll) * (textures.length - 1)
    );





    progressRef.current = smoothScrollRef.current;

    const currentTexture = textures[frameIndex];
    const mat = planeRef.current.material as THREE.MeshBasicMaterial;

    if (mat.map !== currentTexture) {
      mat.map = currentTexture;
      mat.needsUpdate = true;
    }

    // 🪙 COIN BEHAVIOR (fall straight down in world space)
if (coinRef.current) {
  const coin = coinRef.current;
  coin.rotation.y += delta * 5;
  coin.rotation.x += delta * 2;

  if (smoothScrollRef.current > coinStartScroll) {
    const coinProgress = Math.min(
      (smoothScrollRef.current - coinStartScroll) / coinFallRange,
      1
    );

  if (!coin.userData.startLocalPos) {
  coin.userData.startLocalPos = coin.position.clone(); // LOCAL START
}

const startLocal = coin.userData.startLocalPos.clone();
const fallDistance = 1;

coin.position.y = startLocal.y - coinProgress * fallDistance;




    coin.visible = true;
  } else {
    coin.visible = false;
  }
}



    // 🪙 Coin Animation (after dashboard finishes)
    // if (coinRef.current) {
    //   if (smoothScrollRef.current > 0.9) {
    //     const progress = (smoothScrollRef.current - 0.9) / 0.08;
    //     coinRef.current.visible = true;
    //     coinRef.current.position.y = 0.7 - progress * 0.7; 
    //     coinRef.current.rotation.y += delta * 7; 
    //   } else {
    //     coinRef.current.visible = false;
    //   }
    // }


    if (coinRef.current) {
  if (smoothScrollRef.current > 0.9) {
    const progress = (smoothScrollRef.current - 0.9) / 0.08;

    coinRef.current.visible = true;

    // 🔥 vertical fall
    const startY = 0.7;
    const fallY = 0.5;           // how much it falls vertically
    coinRef.current.position.y = startY - progress * fallY;

    // 🔥 projectile towards camera
    const startZ = coinRef.current.userData.startZ ?? coinRef.current.position.z;
    coinRef.current.userData.startZ = startZ;

    const towardCamera = -0.8;   // reduce this to reduce projectile depth
    coinRef.current.position.z = startZ + progress * towardCamera;

    // spin
    coinRef.current.rotation.y += delta * 7;
  } else {
    coinRef.current.visible = false;
  }
}


    // 🎬 Fade in next section when coin lands
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      const opacity = Math.min(1, Math.max(0, (smoothScrollRef.current - 0.95) / 0.05));
      nextSection.style.opacity = opacity.toString();
    }



  });

  return (
    <group ref={uiGroup}>
      <mesh ref={planeRef}>
        <planeGeometry args={[0.47, 0.28]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={1.2} />
      </mesh>
    </group>
  );
}


