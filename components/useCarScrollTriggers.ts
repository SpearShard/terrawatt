// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function useCarScrollTriggers() {
//   useEffect(() => {
//     const video = document.querySelector("video");
//     if (!video) return;

//     // 1️⃣ Zoom-in / enter the car
//     gsap.to(".camera-zoom", {
//       scrollTrigger: {
//         trigger: "#car-section",
//         start: "top top",
//         end: "1000vh top",
//         scrub: 1,
//       },
//     });

//     // 2️⃣ Scrub video while canvas is sticky
//     ScrollTrigger.create({
//       trigger: "#car-section",
//       start: "1000vh top",
//       end: "1300vh top",
//       scrub: 1,
//       onUpdate: (self) => {
//         if (video.duration > 0) {
//           video.currentTime = video.duration * self.progress;
//         }
//       },
//     });

//     // 3️⃣ Release sticky after video finishes
//     ScrollTrigger.create({
//       trigger: "#car-section",
//       start: "1300vh top",
//       end: "bottom top",
//       onEnter: () => {
//         document.querySelector(".sticky-canvas")?.classList.remove("sticky");
//       },
//       onLeaveBack: () => {
//         document.querySelector(".sticky-canvas")?.classList.add("sticky");
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);
// }






import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../app/lib/gsap";

export function useCarScrollTriggers() {
  useEffect(() => {
    const video = document.querySelector("video");
    if (!video) return;

    /* ---------- store local triggers ---------- */
    const localTriggers: ScrollTrigger[] = [];

    // 1️⃣ Zoom-in / enter the car
    const zoomTween = gsap.to(".camera-zoom", {
      scrollTrigger: {
        trigger: "#car-section",
        start: "top top",
        end: "1000vh top",
        scrub: 1,
      },
    });

    if (zoomTween.scrollTrigger) {
      localTriggers.push(zoomTween.scrollTrigger);
    }

    // 2️⃣ Scrub video while canvas is sticky
    const scrubTrigger = ScrollTrigger.create({
      trigger: "#car-section",
      start: "1000vh top",
      end: "1300vh top",
      scrub: 1,
      onUpdate: (self) => {
        if (video.duration > 0) {
          video.currentTime = video.duration * self.progress;
        }
      },
    });

    localTriggers.push(scrubTrigger);

    // 3️⃣ Release sticky after video finishes
    const releaseTrigger = ScrollTrigger.create({
      trigger: "#car-section",
      start: "1300vh top",
      end: "bottom top",
      onEnter: () => {
        document.querySelector(".sticky-canvas")?.classList.remove("sticky");
      },
      onLeaveBack: () => {
        document.querySelector(".sticky-canvas")?.classList.add("sticky");
      },
    });

    localTriggers.push(releaseTrigger);

    /* ---------- cleanup ONLY local triggers ---------- */
    return () => {
      localTriggers.forEach((t) => t.kill());
    };

  }, []);
}