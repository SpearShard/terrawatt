"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  return (
    <div className="relative w-full min-h-[200vh] bg-white">

      {/* Your original video */}
      <div className="sticky top-0 bg-linear-to-b from-white via-[#F5FCFF] to-[#E6E4E2] flex justify-center h-screen">
        <video
          src="/ticket1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full z-10 relative"
        />
      </div>

      {/* Coin overlay */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
          <ambientLight intensity={2} />
          <pointLight position={[2, 3, 3]} intensity={3} />
          <ScrollingCoin />
        </Canvas>
      </div>
    </div>
  );
}

/* ---------------- COIN COMPONENT ---------------- */

function ScrollingCoin() {
  const coinRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0);

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 1,
    roughness: 0.1,
  });

  /* ---------------- GSAP SCROLL LISTENER ---------------- */
  useEffect(() => {
    const obj = { p: 0 };

    gsap.to(obj, {
      p: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      onUpdate: () => {
        progressRef.current = obj.p;
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  /* ---------------- THREE.JS ANIMATION ---------------- */
  useFrame(() => {
    const coin = coinRef.current;
    if (!coin) return;

    const p = progressRef.current; // 0 → 1

    /* ---------------- ENTRANCE FALL ---------------- */
    const startY = 2.2;      // off-screen top
    const midY = 0.2;        // slight drop below center

    let y;
    if (p <= 0.4) {
      const t = p / 0.4;  // 0 → 1 between 0%–40%
      y = startY + (midY - startY) * t; // fall-in
    } else {
      y = midY;  // hold position
    }
    coin.position.y = y;

    /* ---------------- FADE + SHRINK OUT ---------------- */
   /* ---------------- FADE + SHRINK OUT ---------------- */
if (p > 0.4) {
  const fadeProgress = (p - 0.4) / 0.6; // 0 → 1 fade

  // scale out
  const scale = THREE.MathUtils.lerp(1, 0, fadeProgress * 1.2);
  coin.scale.set(scale, scale, scale);

  // fade all materials on the coin
  const materials = Array.isArray(coin.material)
    ? coin.material
    : [coin.material];

  materials.forEach((m) => {
    m.transparent = true;
    m.opacity = 1 - fadeProgress;
  });
}


    /* ---------------- SPIN ---------------- */
    coin.rotation.y += 0.12;
    coin.rotation.x += 0.05;
  });

  return (
    <mesh ref={coinRef} position={[0, 2.2, 0]}>
      <cylinderGeometry args={[0.07, 0.07, 0.01, 64]} />
      <meshStandardMaterial {...goldMaterial} />
    </mesh>
  );
}

