"use client";
import Navbar from "@/components/Navbar";

export default function SimpleVideo() {
  const videos = ["/hs4k.mp4", "/tp4k.mp4", "/thp4k.mp4", "/lp4k.mp4"];
  const fadeColor = "rgba(4,17,30"; // Base fade color

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden bg-[#04111E]">
        {videos.map((src, i) => {
          let maskStyle = "";

          if (i === 0) {
            // First video → Bottom fade only
            maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,1)_80%,rgba(4,17,30,0)_100%)]";
          } else if (i === videos.length - 1) {
            // Last video → Top fade only
            maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_20%,rgba(4,17,30,1)_100%)]";
          } else {
            // Middle videos → Both sides fade
            maskStyle = "[mask-image:linear-gradient(to_bottom,rgba(4,17,30,0)_0%,rgba(4,17,30,1)_25%,rgba(4,17,30,1)_75%,rgba(4,17,30,0)_100%)]";
          }

          return (
            <video
              key={i}
              autoPlay
              muted
              playsInline
              preload="auto"
              className={`w-full h-full object-cover ${maskStyle}`}
            >
              <source src={src} type="video/mp4" />
            </video>
          );
        })}
      </div>
    </>
  );
}




