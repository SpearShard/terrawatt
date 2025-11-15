"use client";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Coin() {
  const coinRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const coin = coinRef.current;
    if (!coin) return;

    // Scroll-triggered falling animation
    gsap.timeline({
      scrollTrigger: {
        trigger: "#coin-trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .fromTo(
      coin.position,
      { y: 5, z: 0 },
      { y: -3, z: -1, ease: "power2.inOut" }
    )
    .to(
      coin.rotation,
      { y: "+=6", x: "+=1", ease: "none" },
      0 // sync rotation with fall
    );
  }, []);

  // make it spin smoothly even outside scroll
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={coinRef}>
      <cylinderGeometry args={[1, 1, 0.2, 64]} />
      <meshStandardMaterial
        color="#FFD700"
        metalness={1}
        roughness={0.25}
        emissive="#b8860b"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function CoinAnimation() {
  return (
    <div
      id="coin-trigger"
      style={{
        height: "200vh",
        background: "linear-gradient(black, #111)",
      }}
    >
      <Canvas
        style={{ position: "sticky", top: 0, height: "100vh" }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Coin />
      </Canvas>

      <section
        style={{
          height: "100vh",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        🎬 The next page (your video/image) goes here!
      </section>
    </div>
  );
}
