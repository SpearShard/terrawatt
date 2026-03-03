// "use client";
// import dynamic from "next/dynamic";
// import Navbar from "../components/Navbar";
// import About from "../components/About";
// import Video from "@/components/video";
// import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
// import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";
// import Preloader from "@/components/preloader"
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VideoTextureEffect from "../components/VideoTextureEffect";
// import { useCarLights } from "../components/useCarLights";
// import { Suspense } from "react";
// import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
// import Footer from "@/components/Footer";

// import { useInView } from "react-intersection-observer";

// const DashboardAnimation = dynamic(
//   () => import("../components/DashboardAnimation"),
//   { ssr: false }
// );

// gsap.registerPlugin(ScrollTrigger);

// function Car({
//   rearLightsRef,
//   dashboardRef,
//   scale = 1.2,
// }: {
//   rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   scale?: number;
// }) {
//   const { scene } = useGLTF("/models/final.glb");
//   const [ready, setReady] = useState(false);

//   const memoizedScene = useMemo(() => scene, []);

//   // wire lights immediately (no visuals yet)
//   useCarLights(memoizedScene, rearLightsRef, dashboardRef);

//   // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
//   useLayoutEffect(() => {
//     applyBlueInteriorShader(scene);
//     applyWhiteRimShader(scene);

//     setReady(true); // allow render
//   }, [scene]);

//   // ❌ Nothing renders until shaders are ready
//   if (!ready) return null;

//   return <primitive object={scene} scale={scale} />;
// }

// function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   const { camera } = useThree();

//   useEffect(() => {
//     camera.position.set(0, 50, 450);
//     camera.lookAt(0, 50, 0);

//     const isMobile = window.innerWidth < 768;

//     if (isMobile) {
//       camera.position.set(0, 45, 480);
//       camera.lookAt(0, 35, 0);
//     }

//     const CAMERA_SCROLL_PX = 1900; // 🔑 camera always finishes fast

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#scroll-container",
//         start: "top top",
//         end: `+=${CAMERA_SCROLL_PX}`, // ✅ FIXED distance
//         scrub: 0.5,
//       },
//     });



//     tl.to(camera.position, {
//       z: isMobile ? 10 : 15,
//       y: isMobile ? 20 : 20,
//       duration: 1,
//     });

//     // Animate all rear lights
//     // defensive: ensure we have lights array before animating
//     (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
//       const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//       if (!mat) return;
//       tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
//       // 0 means it starts with the camera animation
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [camera, rearLightsRef]);

//   return null;
// }

// function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   useEffect(() => {
//     if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;

//     // Trigger flicker when scroll reaches the top of the canvas
//     ScrollTrigger.create({
//       trigger: "#scroll-container",
//       start: "top top", // trigger as soon as scrolling starts
//       end: "+=1",       // short duration
//       once: true,       // only trigger once
//       onEnter: () => {
//         rearLightsRef.current?.forEach((light) => {
//           const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
//           if (!mat) return;

//           // Flicker timeline (two quick flashes)
//           gsap.timeline()
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 0, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 10, duration: 0.1 })
//             .to(mat, { emissiveIntensity: 12, duration: 0.2 }); // final steady intensity
//         });
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [rearLightsRef]);

//   return null;
// }

// export default function Home() {
//   const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
//   const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
//   const progressRef = useRef(0); // 👈 add this line
//   const pulseReadyRef = useRef(false);

//   const [carScale, setCarScale] = useState(1.2);
//   const [showPreloader, setShowPreloader] = useState(false);
//   const [ready, setReady] = useState(false);






//   useEffect(() => {
//     const isPulse = window.location.pathname === "/";
//     const wasReload = sessionStorage.getItem("PAGE_WAS_RELOADED") === "true";
//     const hasAction = !!localStorage.getItem("TW_action"); // charge/mart navigation

//     const isFirstVisit = !sessionStorage.getItem("HAS_VISITED_PULSE");

//     // 👇 NEW: check which tab was active before reload
//     const lastActive = localStorage.getItem("TW_ACTIVE_NAV") || "Pulse";
//     const wasPulseTab = lastActive === "Pulse";

//     // Show loader on FIRST visit or REAL reload — ONLY if Pulse tab
//     if (isPulse && wasPulseTab && (isFirstVisit || wasReload) && !hasAction) {
//       setShowPreloader(true);
//     } else {
//       setShowPreloader(false);
//     }

//     // Mark that Pulse has been visited
//     sessionStorage.setItem("HAS_VISITED_PULSE", "true");

//     sessionStorage.removeItem("PAGE_WAS_RELOADED");
//     setReady(true);
//   }, []);




//   useEffect(() => {
//     const handleChargeJump = () => {
//       const targetProgress = -0.18;

//       const scrollContainer = document.getElementById("scroll-container");
//       if (!scrollContainer) return;

//       // 🔥 CRITICAL: recalc ScrollTrigger first
//       ScrollTrigger.refresh(true);

//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           const containerHeight = scrollContainer.offsetHeight;
//           const windowHeight = window.innerHeight;

//           const isMobile = window.innerWidth < 768;
//           const startOffset = containerHeight * (isMobile ? 0.635 : 0.7);

//           const scrollableDistance = containerHeight - windowHeight;
//           const maxProgressDistance = Math.max(1, scrollableDistance - startOffset);

//           const targetScrollY =
//             startOffset + targetProgress * maxProgressDistance;

//           window.scrollTo({
//             top: targetScrollY,
//             behavior: "smooth",
//           });
//         });
//       });
//     };

//     window.addEventListener("scrollToFrame804", handleChargeJump);
//     return () =>
//       window.removeEventListener("scrollToFrame804", handleChargeJump);
//   }, []);


//   // Responsive scroll height and car scale
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setCarScale(1); // Mobile
//       } else if (width < 1024) {
//         setCarScale(0.9); // Tablet
//       } else {
//         setCarScale(1.2); // Desktop
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "850vh" : "5000vh";
//   const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "50vh" : "300vh";

//   useEffect(() => {
//     const runAction = () => {
//       if ((window as any).__MART_LOCK__) return;

//       const action = localStorage.getItem("TW_action");
//       if (!action) return;

//       localStorage.removeItem("TW_action");

//       if (action === "go_charge") {
//         window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       }

//       // if (action === "go_mart") {
//       //   const scrollContainer = document.getElementById("scroll-container");
//       //   if (!scrollContainer) return;

//       //   ScrollTrigger.refresh(true);

//       //   requestAnimationFrame(() => {
//       //     requestAnimationFrame(() => {
//       //       const containerTop = scrollContainer.offsetTop;
//       //       const containerHeight = scrollContainer.offsetHeight;
//       //       const windowHeight = window.innerHeight;

//       //       const targetY = containerTop + containerHeight - windowHeight - 50;

//       //       window.scrollTo({
//       //         top: targetY,
//       //         behavior: "smooth",
//       //       });

//       //       setTimeout(() => {
//       //         window.dispatchEvent(new Event("triggerVideoJump"));
//       //       }, 600);
//       //     });
//       //   });
//       // }

//       if (action === "go_mart") {
//         const jumpToMart = () => {
//           const videoSection = document.getElementById("video-section");
//           if (!videoSection) return;

//           // Recalculate ScrollTrigger to get accurate positions
//           ScrollTrigger.refresh(true);

//           requestAnimationFrame(() => {
//             // Give a tiny moment for layout
//             const container = document.getElementById("scroll-container");
//             const martVideo = videoSection.querySelector("video"); // Just checking existence

//             // We jump to the video section start, then the internal Video component's event handles the frame sync
//             videoSection.scrollIntoView({ behavior: "smooth" });

//             setTimeout(() => {
//               window.dispatchEvent(new Event("triggerVideoJump"));
//             }, 600);
//           });

//           window.removeEventListener("videoReady", jumpToMart);
//         };

//         if ((window as any).__VIDEO_READY__) {
//           jumpToMart();
//         } else {
//           window.addEventListener("videoReady", jumpToMart);
//         }
//       }









//     };

//     if (!showPreloader) {
//   requestAnimationFrame(() => requestAnimationFrame(runAction));
// }

// window.addEventListener("pulseReady", runAction);
// // window.addEventListener("storage", runAction);

// return () => {
//   window.removeEventListener("pulseReady", runAction);
//   window.removeEventListener("storage", runAction);
// };

//   }, [showPreloader]);

//   useEffect(() => {
//     const onScroll = () => {
//       if ((window as any).__MART_LOCK__) return;
//       const scrollY = window.scrollY;

//       const scrollContainer = document.getElementById("scroll-container");
//       const videoSection = document.getElementById("video-section");

//       if (!scrollContainer) return;

//       const containerTop = scrollContainer.offsetTop;
//       const containerHeight = scrollContainer.offsetHeight;

//       // 🔁 SAME math used by TeraaCharge jump
//       const isMobile = window.innerWidth < 768;
//       const startOffset = containerHeight * (isMobile ? 0.588 : 0.649);
//       const chargeTriggerY = containerTop + startOffset;

//       const martTriggerY = videoSection?.offsetTop ?? Infinity;

//       if (scrollY >= martTriggerY - 20) {
//         localStorage.setItem("TW_ACTIVE_NAV", "TeraaMart");
//         window.dispatchEvent(new Event("storage"));
//         return;
//       }

//       if (scrollY >= chargeTriggerY) {
//         localStorage.setItem("TW_ACTIVE_NAV", "TeraaCharge");
//         window.dispatchEvent(new Event("storage"));
//         return;
//       }

//       localStorage.setItem("TW_ACTIVE_NAV", "Pulse");
//       window.dispatchEvent(new Event("storage"));
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);


//   if (!ready) return null;

//   if (showPreloader) {
//     return (
//       <Preloader
//         onDone={() => {
//           setShowPreloader(false);
//           requestAnimationFrame(() => {
//             requestAnimationFrame(() => {
//               pulseReadyRef.current = true;
//               window.dispatchEvent(new Event("pulseReady"));
//             });
//           });
//         }}
//       />
//     );
//   }

//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
//   const cameraFov = isMobile ? 70 : 50; // 👈 tweak values here


//   return (

//     <main style={{ background: "black", color: "white" }}>
//       {/* 🧭 Navbar stays fixed at top */}
//       <Navbar />

//       {/* 🚗 3D Car Section */}
//       <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
//         {/* Sticky 3D Canvas */}
//         <ScrollCanvasWrapper cameraFov={cameraFov} rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} carScale={carScale} progressRef={progressRef} />
//       </div>

//       {/* Normal content appears after scroll section */}
//       <div id='video-section' className="min-h-screen relative z-10 bg-black">
//         <Video />
//       </div>
//       <div className="min-h-screen relative z-10 bg-black">
//         <About />
//       </div>

//       <Footer />

//     </main>
//   );
// }

// // Separate component to handle InView logic cleanly
// function ScrollCanvasWrapper({ cameraFov, rearLightsRef, dashboardRef, carScale, progressRef }: any) {
//   const { ref, inView } = useInView({
//     threshold: 0,
//     rootMargin: "200px 0px 200px 0px" // give some buffer so it doesn't pop in/out harshly
//   });

//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "sticky",
//         top: 0,
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//         zIndex: 1,
//         // transformOrigin: "center center"
//       }}
//     >
//       {/* 
//           Only render Canvas if inView or close to it. 
//           Using frameloop="demand" when not in view is better than unmounting 
//           to avoid re-loading models. 
//       */}
//       <Canvas
//         frameloop={inView ? "always" : "never"}
//         camera={{ position: [0, 1.5, 25], fov: cameraFov }}
//         style={{
//           height: "100vh",
//           width: "100vw",
//           pointerEvents: "none",
//           willChange: "transform",
//         }}
//         dpr={[1, 1.5]}
//         // Lower performance mode when scrolling fast or not focused?
//         // keeping default for now but disabling when out of view
//         performance={{ min: 0.5, max: 1 }}
//         gl={{
//           antialias: true,
//           powerPreference: "high-performance",
//           alpha: false,
//           stencil: false,
//           depth: true,
//         }}
//       >
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
//         <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
//         <FlickerLights rearLightsRef={rearLightsRef} />
//         <Suspense fallback={null}>
//           <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
//         </Suspense>
//         <VideoTextureEffect progressRef={progressRef} />
//         <OrbitControls enabled={false} />
//       </Canvas>
//     </div>
//   );
// }
// useGLTF.preload("/models/final.glb");














"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Video from "@/components/video";
import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";
import Preloader from "@/components/preloader"
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoTextureEffect from "../components/VideoTextureEffect";
import { useCarLights } from "../components/useCarLights";
import { Suspense } from "react";
import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
import Footer from "@/components/Footer";

import { useInView } from "react-intersection-observer";

const DashboardAnimation = dynamic(
  () => import("../components/DashboardAnimation"),
  { ssr: false }
);

// gsap.registerPlugin(ScrollTrigger);

function Car({
  rearLightsRef,
  dashboardRef,
  scale = 1.2,
}: {
  rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
  scale?: number;
}) {
  const { scene } = useGLTF("/models/final.glb");
  const [ready, setReady] = useState(false);


  const memoizedScene = useMemo(() => scene, []);

  // wire lights immediately (no visuals yet)
  useCarLights(memoizedScene, rearLightsRef, dashboardRef);

  // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
  useLayoutEffect(() => {
    applyBlueInteriorShader(scene);
    applyWhiteRimShader(scene);

    setReady(true); // allow render
  }, [scene]);

  // ❌ Nothing renders until shaders are ready
  if (!ready) return null;

  return <primitive object={scene} scale={scale} />;
}

function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 50, 450);
    camera.lookAt(0, 50, 0);

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      camera.position.set(0, 45, 480);
      camera.lookAt(0, 35, 0);
    }

    const CAMERA_SCROLL_PX = 1900; // 🔑 camera always finishes fast

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: `+=${CAMERA_SCROLL_PX}`, // ✅ FIXED distance
        scrub: 0.5,
      },
    });



    tl.to(camera.position, {
      z: isMobile ? 10 : 15,
      y: isMobile ? 20 : 20,
      duration: 1,
    });

    // Animate all rear lights
    // defensive: ensure we have lights array before animating
    (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
      const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
      if (!mat) return;
      tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
      // 0 means it starts with the camera animation
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [camera, rearLightsRef]);

  return null;
}

function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  useEffect(() => {
    if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;

    // Trigger flicker when scroll reaches the top of the canvas
    const flickerTrigger = ScrollTrigger.create({
      trigger: "#scroll-container",
      start: "top top", // trigger as soon as scrolling starts
      end: "+=1",       // short duration
      once: true,       // only trigger once
      onEnter: () => {
        rearLightsRef.current?.forEach((light) => {
          const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
          if (!mat) return;

          // Flicker timeline (two quick flashes)
          gsap.timeline()
            .to(mat, { emissiveIntensity: 10, duration: 0.1 })
            .to(mat, { emissiveIntensity: 0, duration: 0.1 })
            .to(mat, { emissiveIntensity: 10, duration: 0.1 })
            .to(mat, { emissiveIntensity: 12, duration: 0.2 }); // final steady intensity
        });
      },
    });

    return () => {
      flickerTrigger.kill();
    };
  }, [rearLightsRef]);

  return null;
}

export default function Home() {

  
  


  const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
  const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
  const progressRef = useRef(0); // 👈 add this line
  const pulseReadyRef = useRef(false);

  const navActionRef = useRef<string | null>(null);
  const layoutReadyRef = useRef(false);
  const videoReadyRef = useRef(false);
  const pulseReadyLocalRef = useRef(false);
  const videoScrollReadyRef = useRef(false);

  const [carScale, setCarScale] = useState(1.2);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ready, setReady] = useState(false);

  const tryRunAction = () => {
    if (!layoutReadyRef.current) return;
    if (!videoReadyRef.current) return;
    if (!videoScrollReadyRef.current) return;  // ⭐ NEW
    if (!pulseReadyLocalRef.current) return;

    if (!navActionRef.current) {
      navActionRef.current = localStorage.getItem("TW_action");
      localStorage.removeItem("TW_action");
    }

    const action = navActionRef.current;
    if (!action) return;

    navActionRef.current = null;

    if (action === "go_charge") {
      window.dispatchEvent(new CustomEvent("scrollToFrame804"));
    }

    if (action === "go_mart") {
      const videoSection = document.getElementById("video-section");
      if (!videoSection) return;

      // 1️⃣ Force full layout + pin calculation
      ScrollTrigger.refresh(true);

      // 2️⃣ Wait for refresh to finish
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {

          // 3️⃣ INSTANT jump (NO smooth scroll)
          window.scrollTo({
            top: videoSection.offsetTop,
            behavior: "auto"
          });

          // 4️⃣ Let ScrollTrigger sync internal progress
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {

              ScrollTrigger.refresh(true);

              // 5️⃣ Now jump video frame
              window.dispatchEvent(new Event("triggerVideoJump"));

            });
          });

        });
      });
    }
  };






  useEffect(() => {
    const isPulse = window.location.pathname === "/";
    const wasReload = sessionStorage.getItem("PAGE_WAS_RELOADED") === "true";
    const hasAction = !!localStorage.getItem("TW_action"); // charge/mart navigation

    const isFirstVisit = !sessionStorage.getItem("HAS_VISITED_PULSE");

    // 👇 NEW: check which tab was active before reload
    const lastActive = localStorage.getItem("TW_ACTIVE_NAV") || "Pulse";
    const wasPulseTab = lastActive === "Pulse";

    // Show loader on FIRST visit or REAL reload — ONLY if Pulse tab
    if (isPulse && wasPulseTab && (isFirstVisit || wasReload) && !hasAction) {
      setShowPreloader(true);
    } else {
      setShowPreloader(false);
    }

    // Mark that Pulse has been visited
    sessionStorage.setItem("HAS_VISITED_PULSE", "true");

    sessionStorage.removeItem("PAGE_WAS_RELOADED");
    setReady(true);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!ready || isMobile) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
        layoutReadyRef.current = true;
        tryRunAction();
      });
    });
  }, [ready]);

  useEffect(() => {
    const onVideoReady = () => {
      videoReadyRef.current = true;
      tryRunAction();
    };

    const onVideoScrollReady = () => {
      videoScrollReadyRef.current = true;
      tryRunAction();
    };

    const onPulseReady = () => {
      pulseReadyLocalRef.current = true;
      tryRunAction();
    };

    window.addEventListener("videoReady", onVideoReady);
    window.addEventListener("videoScrollReady", onVideoScrollReady);
    window.addEventListener("pulseReady", onPulseReady);

    return () => {
      window.removeEventListener("videoReady", onVideoReady);
      window.removeEventListener("videoScrollReady", onVideoScrollReady);
      window.removeEventListener("pulseReady", onPulseReady);
    };
  }, []);

  useEffect(() => {
    if (showPreloader) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pulseReadyLocalRef.current = true;
        window.dispatchEvent(new Event("pulseReady"));
      });
    });
  }, [showPreloader]);




  useEffect(() => {
    const handleChargeJump = () => {
      const targetProgress = -0.28;

      const scrollContainer = document.getElementById("scroll-container");
      if (!scrollContainer) return;

      // 🔥 CRITICAL: recalc ScrollTrigger first
      ScrollTrigger.refresh(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const containerHeight = scrollContainer.offsetHeight;
          const windowHeight = window.innerHeight;

          const isMobile = window.innerWidth < 768;
          const startOffset = containerHeight * (isMobile ? 0.635 : 0.7);

          const scrollableDistance = containerHeight - windowHeight;
          const maxProgressDistance = Math.max(1, scrollableDistance - startOffset);

          const targetScrollY =
            startOffset + targetProgress * maxProgressDistance;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        });
      });
    };

    window.addEventListener("scrollToFrame804", handleChargeJump);
    return () =>
      window.removeEventListener("scrollToFrame804", handleChargeJump);
  }, []);


  // Responsive scroll height and car scale
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarScale(1); // Mobile
      } else if (width < 1024) {
        setCarScale(0.9); // Tablet
      } else {
        setCarScale(1.2); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "850vh" : "5000vh";
  const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "50vh" : "300vh";



  useEffect(() => {
    const onScroll = () => {
      if ((window as any).__MART_LOCK__) return;
      const scrollY = window.scrollY;

      const scrollContainer = document.getElementById("scroll-container");
      const videoSection = document.getElementById("video-section");

      if (!scrollContainer) return;

      const containerTop = scrollContainer.offsetTop;
      const containerHeight = scrollContainer.offsetHeight;

      // 🔁 SAME math used by TeraaCharge jump
      const isMobile = window.innerWidth < 768;
      const startOffset = containerHeight * (isMobile ? 0.588 : 0.649);
      const chargeTriggerY = containerTop + startOffset;

      const martTriggerY = videoSection?.offsetTop ?? Infinity;

      if (scrollY >= martTriggerY - 20) {
        localStorage.setItem("TW_ACTIVE_NAV", "TeraaMart");
        window.dispatchEvent(new Event("storage"));
        return;
      }

      if (scrollY >= chargeTriggerY) {
        localStorage.setItem("TW_ACTIVE_NAV", "TeraaCharge");
        window.dispatchEvent(new Event("storage"));
        return;
      }

      localStorage.setItem("TW_ACTIVE_NAV", "Pulse");
      window.dispatchEvent(new Event("storage"));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  if (!ready) return null;

  if (showPreloader) {
    return (
      <Preloader
        onDone={() => {
          setShowPreloader(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              pulseReadyRef.current = true;
              window.dispatchEvent(new Event("pulseReady"));
            });
          });
        }}
      />
    );
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const cameraFov = isMobile ? 70 : 50; // 👈 tweak values here




  return (

    <main style={{ background: "black", color: "white" }}>
      {/* 🧭 Navbar stays fixed at top */}
      <Navbar />

      {/* 🚗 3D Car Section */}
      <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
        {/* Sticky 3D Canvas */}
        <ScrollCanvasWrapper cameraFov={cameraFov} rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} carScale={carScale} progressRef={progressRef} />
      </div>

      {/* Normal content appears after scroll section */}
      <div id='video-section' className="min-h-screen relative z-10 bg-black">
        <Video />
      </div>
      <div className="min-h-screen relative z-10 bg-black">
        <About />
      </div>

      <Footer />

    </main>
  );
}

// Separate component to handle InView logic cleanly
function ScrollCanvasWrapper({ cameraFov, rearLightsRef, dashboardRef, carScale, progressRef }: any) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px 200px 0px" // give some buffer so it doesn't pop in/out harshly
  });

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        zIndex: 1,
        // transformOrigin: "center center"
      }}
    >
      {/* 
          Only render Canvas if inView or close to it. 
          Using frameloop="demand" when not in view is better than unmounting 
          to avoid re-loading models. 
      */}
      <Canvas
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 1.5, 25], fov: cameraFov }}
        style={{
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
          willChange: "transform",
        }}
        dpr={[1, 1.5]}
        // Lower performance mode when scrolling fast or not focused?
        // keeping default for now but disabling when out of view
        performance={{ min: 0.5, max: 1 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
        <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
        <FlickerLights rearLightsRef={rearLightsRef} />
        <Suspense fallback={null}>
          <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
        </Suspense>
        <VideoTextureEffect progressRef={progressRef} />
        <OrbitControls enabled={false} />
      </Canvas>
    </div>
  );
}
useGLTF.preload("/models/final.glb");






























