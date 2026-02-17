"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollingCoin from "./ScrollingCoin";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    (window as any).__VIDEO_READY__ = false;
  }, []);

  const scrollProgressRef = useRef(0);
  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const FG_TOTAL_FRAMES = 405;
  const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
  const START_BG_AT_FRAME = 130;
  const targetProgress = 289 / FG_FRAME_MAX;

  /* ---------------- VIDEO SETUP ---------------- */
  useEffect(() => {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;
    if (!fg || !bg) return;

    const setup = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.crossOrigin = "anonymous";
      video.load();
    };

    setup(bg, "/iphoneframes/whitetickets.mp4");
    setup(fg, "/iphoneframes/iphonefullvid.mp4");

    const onReady = () => {
      if (!(window as any).__VIDEO_READY__) {
        (window as any).__VIDEO_READY__ = true;
        window.dispatchEvent(new Event("videoReady"));
      }
    };

    // 🔥 THIS is what you were missing
    fg.addEventListener("loadedmetadata", onReady);

    return () => {
      fg.removeEventListener("loadedmetadata", onReady);
    };
  }, []);


  /* ---------------- ULTRA OPTIMIZED RAF LOOP ---------------- */
  useEffect(() => {
    const bgVideo = bgVideoRef.current;
    const fgVideo = fgVideoRef.current;
    if (!bgVideo || !fgVideo) return;

    let raf = 0;
    let lastTime = performance.now();
    let lastRender = 0;

    // cache durations once
    let fgDuration = 0;
    let bgDuration = 0;

    const animate = (time: number) => {
      // hard cap ~60fps
      if (time - lastRender < 33) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastRender = time;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!fgDuration && fgVideo.duration) {
        fgDuration = fgVideo.duration;
        bgDuration = bgVideo.duration || 0;

        if (!(window as any).__VIDEO_READY__) {
          (window as any).__VIDEO_READY__ = true;
          window.dispatchEvent(new Event("videoReady"));
        }
      }

      if (!fgDuration) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // physically-smooth damping (better than lerp)
      const damping = 1 - Math.exp(-delta * 18);
      smoothProgressRef.current +=
        (rawProgressRef.current - smoothProgressRef.current) * damping;

      const smooth = smoothProgressRef.current;

      /* ---------- FOREGROUND ---------- */
      const fgTargetTime = smooth * fgDuration;
      const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);

      // only seek if meaningful (~1 frame @30fps)
      if (fgDiff > 0.03) {
        fgVideo.currentTime = fgTargetTime;
      }

      /* ---------- BACKGROUND ---------- */
      const currentFgFrame = smooth * FG_FRAME_MAX;

      if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
        const bgProgress =
          (currentFgFrame - START_BG_AT_FRAME) /
          (FG_FRAME_MAX - START_BG_AT_FRAME);

        const bgTargetTime = bgProgress * bgDuration;
        const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);

        if (bgDiff > 0.03) {
          bgVideo.currentTime = bgTargetTime;
        }
      } else if (bgVideo.currentTime > 0.03) {
        bgVideo.currentTime = 0;
      }

      scrollProgressRef.current = smooth;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ---------------- SCROLLTRIGGER ---------------- */
  useEffect(() => {
    if (!containerRef.current) return;

    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%",
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        rawProgressRef.current = self.progress;
      },
      onRefresh: (self) => {
        rawProgressRef.current = self.progress;
      },
    });

    scrollTriggerRef.current = st;

    return () => st.kill();
  }, []);

  /* ---------------- EXTERNAL JUMP ---------------- */
  useEffect(() => {
    const jump = () => {
      const fg = fgVideoRef.current;
      const st = scrollTriggerRef.current;
      if (!fg || !st || !fg.duration) return;

      (window as any).__MART_LOCK__ = true;
      // isProgrammaticJump.current = true; // Use if you have this ref, otherwise ignore

      // Force refresh to ensure start/end are correct
      ScrollTrigger.refresh();

      requestAnimationFrame(() => {
        const scrollPos = st.start + targetProgress * (st.end - st.start);

        // Scroll the window to the correct position within the pinned area
        window.scrollTo({ top: scrollPos, behavior: "auto" });

        // Sync internal refs
        rawProgressRef.current = targetProgress;
        smoothProgressRef.current = targetProgress;
        scrollProgressRef.current = targetProgress;

        // Sync video immediately
        fg.currentTime = targetProgress * fg.duration;
        if (bgVideoRef.current && bgVideoRef.current.duration) {
          // Logic for BG sync if needed, mostly handled by RAF loop but good to set roughly
          // omitted for simplicity as RAF will catch up
        }

        requestAnimationFrame(() => {
          (window as any).__MART_LOCK__ = false;
        });
      });
    };

    const handler = () => {
      // If video is ready, jump immediately
      if ((window as any).__VIDEO_READY__) {
        jump();
      } else {
        // Otherwise wait for ready event (handled in page.tsx mostly, but safety here)
        const onReady = () => {
          jump();
          window.removeEventListener("videoReady", onReady);
        };
        window.addEventListener("videoReady", onReady);
      }
    };

    window.addEventListener("triggerVideoJump", handler);

    // Initial check in case it's pending
    if ((window as any).__TERAAMART_PENDING__) {
      handler();
      (window as any).__TERAAMART_PENDING__ = false;
    }

    return () => {
      window.removeEventListener("triggerVideoJump", handler);
    };
  }, []);


  /* ---------------- JSX ---------------- */
  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND */}
        <video
          ref={bgVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
          playsInline
          muted
        />

        {/* FOREGROUND */}
        <video
          ref={fgVideoRef}
          className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
          style={{ imageRendering: "crisp-edges" }}
          playsInline
          muted
        />

        {/* 3D COIN */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
            <ScrollingCoin progressRef={scrollProgressRef} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}