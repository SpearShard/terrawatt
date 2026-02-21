"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  videoSrc: string;
  framePath: string;     // "/frames/frame_"
  frameCount: number;
  fps?: number;
  progressRef: React.MutableRefObject<number>;
};

export default function CRFInvestor({
  videoSrc,
  framePath,
  frameCount,
  fps = 30,
  progressRef
}: Props) {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [useImages, setUseImages] = useState(false);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());

  const FRAME_TIME = 1 / fps;

  // how many frames to keep in memory around current frame
const MEMORY_WINDOW = 30;

// how far ahead to preload
const PRELOAD_AHEAD = 10;

  /* ---------------- DEVICE DETECTION ---------------- */

  useEffect(() => {

  const ua = navigator.userAgent;

  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const isAndroid = /Android/i.test(ua);

  const isSafari =
    /^((?!chrome|android).)*safari/i.test(ua);

  if (isIOS || isAndroid || isSafari) {
    setUseImages(true);
  }

}, []);

  /* ---------------- IMAGE PRELOAD ---------------- */

  useEffect(() => {
  if (!useImages) return;

  const loadFrame = (index: number) => {
    if (index < 0 || index >= frameCount) return;
    if (imagesRef.current.has(index)) return;

    const img = new Image();
    img.decoding = "async";
    img.src = `${framePath}${String(index + 1).padStart(4, "0")}.webp`;

    imagesRef.current.set(index, img);
  };

  const manageMemory = (centerIndex: number) => {
    const min = centerIndex - MEMORY_WINDOW;
    const max = centerIndex + MEMORY_WINDOW;

    for (const key of imagesRef.current.keys()) {
      if (key < min || key > max) {
        imagesRef.current.delete(key);
      }
    }
  };

  let raf = 0;

  const preloadLoop = () => {
    const current = Math.floor(progressRef.current * frameCount);

    // preload current frame
    loadFrame(current);

    // preload ahead
    for (let i = 1; i <= PRELOAD_AHEAD; i++) {
      loadFrame(current + i);
      loadFrame(current - i);
    }

    manageMemory(current);

    raf = requestAnimationFrame(preloadLoop);
  };

  raf = requestAnimationFrame(preloadLoop);

  return () => cancelAnimationFrame(raf);

}, [useImages, frameCount, framePath, progressRef]);

  /* ---------------- CANVAS RENDER LOOP ---------------- */

  useEffect(() => {
  if (!useImages) return;

  const canvas = canvasRef.current!;
  const ctx = canvas.getContext("2d")!;

  let raf = 0;

  const render = () => {
    const index = Math.min(
      frameCount - 1,
      Math.floor(progressRef.current * frameCount)
    );

    const img = imagesRef.current.get(index);

    if (img?.complete && img.naturalWidth !== 0) {

      if (!canvas.width) {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }

    raf = requestAnimationFrame(render);
  };

  raf = requestAnimationFrame(render);
  return () => cancelAnimationFrame(raf);

}, [useImages, frameCount, progressRef]);

  /* ---------------- VIDEO SCRUB LOOP ---------------- */

  useEffect(() => {
    if (useImages) return;

    const video = videoRef.current!;
    const seeking = { current: false };

    const seek = (time: number) => {
      if (seeking.current) return;

      const snapped = Math.round(time / FRAME_TIME) * FRAME_TIME;

      if (Math.abs(video.currentTime - snapped) < FRAME_TIME * 0.5) return;

      seeking.current = true;

      const done = () => {
        seeking.current = false;
        video.removeEventListener("seeked", done);
      };

      video.addEventListener("seeked", done);

      const v = video as HTMLVideoElement & { fastSeek?: (t:number)=>void };
      if (v.fastSeek) v.fastSeek(snapped);
      else video.currentTime = snapped;
    };

    let raf = 0;

    const render = () => {
      if (video.duration) {
        const target = progressRef.current * video.duration;
        seek(target);
      }
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);

  }, [useImages, progressRef]);

  /* ---------------- RENDER ---------------- */

  return (
    <>
      {useImages ? (
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
        />
      )}
    </>
  );
}