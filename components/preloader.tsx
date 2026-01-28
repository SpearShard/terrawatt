"use client";

import { useEffect } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const video = document.getElementById(
      "pulse-preloader-video"
    ) as HTMLVideoElement | null;

    if (!video) return;

    const handleEnd = () => onDone();
    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        id="pulse-preloader-video"
        src="/preloader.mp4"
        autoPlay
        muted
        playsInline
        className="w-full max-sm:object-fill h-full object-cover"
      />
    </div>
  );
}
