"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const scrollProgressRef = useRef(0);

  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    const container = containerRef.current;
    if (!v1 || !v2 || !container) return;

    v1.pause();
    v2.pause();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress;

          if (v1.duration) {
            v1.currentTime = self.progress * v1.duration;
          }
          if (v2.duration) {
            v2.currentTime = self.progress * v2.duration;
          }

          if (self.progress > 0.01) {
            if (!hasScrolledPast) setHasScrolledPast(true);
          } else {
            if (hasScrolledPast) setHasScrolledPast(false);
          }
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [hasScrolledPast]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Background Video (TeraaMart loop) */}
      <video
        ref={video1Ref}
        src="/dashsmaller/dash_ultra_android_HQ.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        muted
        playsInline
        preload="auto"
      />

      {/* Foreground Video (TeraaMart sync) */}
      <video
        ref={video2Ref}
        src="/dashsmaller/dash_ultra_android_HQ.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        muted
        playsInline
        preload="auto"
        style={{
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      {/* 3D Coin Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <ScrollingCoin progressRef={scrollProgressRef} />
        </Canvas>
      </div>

      {/* Text Overlays */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none text-white px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">
          TERAAMART
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light">
          Your premium marketplace for EV accessories and home charging
          infrastructure.
        </p>
      </div>
    </div>
  );
}
