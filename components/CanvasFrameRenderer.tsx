"use client";

import { useEffect, useRef } from "react";

export default function CanvasFrameRenderer({
  progressRef,
  width = 540,
  height = 960,
  totalFrames = 480
}: {
  progressRef: React.MutableRefObject<number>
  width?: number
  height?: number
  totalFrames?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const images = new Map<number, HTMLImageElement>();

    const loadFrame = (index: number) => {
      if (images.has(index)) return images.get(index)!;

      const img = new Image();
      img.src = `/iphoneframes/iphone_video_frames/frame_${String(index).padStart(4, "0")}.webp`;
      images.set(index, img);
      return img;
    };

    const render = () => {
      const frame = Math.floor(progressRef.current * (totalFrames - 1));
      const img = loadFrame(frame);

      if (img.complete && img.naturalWidth !== 0) {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
      }

      requestAnimationFrame(render);
    };

    render();
  }, [progressRef, width, height, totalFrames]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    />
  );
}