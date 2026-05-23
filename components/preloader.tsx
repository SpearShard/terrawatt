// "use client";

// import { useEffect, useState } from "react";

// export default function Preloader({ onDone }: { onDone: () => void }) {
//   const [src, setSrc] = useState<string | null>(null);

//   useEffect(() => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;

//     setSrc(isMobile ? "/phoneloader.mp4" : "/desktoploader.mp4");
//   }, []);

//   useEffect(() => {
//     if (!src) return;

//     const video = document.getElementById(
//       "pulse-preloader-video"
//     ) as HTMLVideoElement | null;

//     if (!video) return;

//     const handleEnd = () => onDone();
//     video.addEventListener("ended", handleEnd);

//     return () => {
//       video.removeEventListener("ended", handleEnd);
//     };
//   }, [src, onDone]);

//   if (!src) return null; // prevents flashing wrong video

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black">
//       <video
//         id="pulse-preloader-video"
//         src={src}
//         autoPlay
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    setSrc(isMobile ? "https://ik.imagekit.io/0s6dxbeae/loader-mobile-lite.mp4" : "https://ik.imagekit.io/0s6dxbeae/DL.mp4");
  }, []);

  useEffect(() => {
    if (!src) return;

    const video = document.getElementById(
      "pulse-preloader-video"
    ) as HTMLVideoElement | null;

    if (!video) return;

    const handleEnd = () => onDone();
    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, [src, onDone]);

  if (!src) return null; // prevents flashing wrong video

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        id="pulse-preloader-video"
        src={src}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}