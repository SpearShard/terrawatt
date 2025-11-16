"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const scrollProgressRef = useRef(0);

  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const frameCount = 450;

  
  useEffect(() => {
    const frames: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = document.createElement("img"); 
      img.src = `/phone_frames/frame_${String(i).padStart(4, "0")}.jpg`;
      frames.push(img);
    }

    imagesRef.current = frames;

    
    frames[0].onload = () => {
      setLoaded(true);
    };
  }, []);

  
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    canvas.width = 1080;
    canvas.height = 1920;

    const render = () => {
      const frameIndex = Math.floor(frameRef.current);
      const img = imagesRef.current[frameIndex];
      if (!img) return;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    gsap.to(frameRef, {
      current: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress;
          render();
        },
      },
    });

    render();
    ScrollTrigger.refresh();
  }, [loaded]);

  return (
    <div className="scroll-container relative w-full min-h-[500vh] bg-white">

      <div className="sticky top-0 h-screen flex justify-center items-center bg-[#FFF9EF]">

        
        <canvas ref={canvasRef} className="absolute w-auto h-full" />

        
        <div className="pointer-events-none absolute inset-0 z-20">
          <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={4} />
            <directionalLight position={[-5, 5, 5]} intensity={2} />
            <pointLight position={[0, 1, 3]} intensity={3} />
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>

      </div>
    </div>
  );
}

