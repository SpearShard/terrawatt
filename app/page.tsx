"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Video from "@/components/video";
import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";
import PhoneVideo from "@/components/video";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoTextureEffect from "../components/VideoTextureEffect";
import { useCarLights } from "../components/useCarLights";
import { Suspense } from "react";
import { useEffect, useRef, useState, useMemo } from "react";
const DashboardAnimation = dynamic(
  () => import("../components/DashboardAnimation"),
  { ssr: false }
);




gsap.registerPlugin(ScrollTrigger);

function Car({
  rearLightsRef,
  dashboardRef,
  scale = 1.2,
}: {
  rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
  dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
  scale?: number;
}) {
  const { scene } = useGLTF("/models/lastwala.glb");



  const memoizedScene = useMemo(() => scene, []); // ✅ prevents re-traversal

  useCarLights(memoizedScene, rearLightsRef, dashboardRef);


  // this is the useEffect for the blue silhouette got the interiors of the car
  const hasAppliedBlueShader = useRef(false);

  useEffect(() => {
    if (hasAppliedBlueShader.current) return;
    applyBlueInteriorShader(scene)

    hasAppliedBlueShader.current = true;
  }, [scene]);


  // ✨ Apply silhouette + rim glow shader
  // ✨ Apply silhouette shader only to outer body meshes
  const hasAppliedWhiteShader = useRef(false);

  useEffect(() => {
    if (hasAppliedWhiteShader.current) return;
    applyWhiteRimShader(scene);

    hasAppliedWhiteShader.current = true;
  }, [scene]);


  return <primitive object={scene} scale={scale} />;
}



function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 50, 480);
    camera.lookAt(0, 50, 0);

    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: isMobile ? "80% bottom" : "bottom bottom",
        scrub: 0.5, // Smooth scrubbing (lower = smoother, higher = more responsive)
      },
    });

    // Camera movement
    // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
    tl.to(camera.position, {
      z: isMobile ? 15 : 1,
      y: isMobile ? 18 : 20,
      duration: 3,
    });

    // Animate all rear lights
    // defensive: ensure we have lights array before animating
    (rearLightsRef.current || []).forEach((light: THREE.Mesh) => {
      const mat: any = Array.isArray(light.material) ? light.material[0] : light.material;
      if (!mat) return;
      tl.to(mat, { emissiveIntensity: 5, duration: 1 }, 0);
      // 0 means it starts with the camera animation
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [camera, rearLightsRef]);

  return null;
}

function FlickerLights({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
  useEffect(() => {
    if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;

    // Trigger flicker when scroll reaches the top of the canvas
    ScrollTrigger.create({
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [rearLightsRef]);

  return null;
}






export default function Home() {
  const rearLightsRef = useRef<THREE.Mesh[]>([]); // ref for rear lights
  const dashboardRef = useRef<THREE.Mesh[] | undefined>(undefined);
  const progressRef = useRef(0); // 👈 add this line

  const [carScale, setCarScale] = useState(1.2);


  useEffect(() => {
    function handleJump() {
      const targetProgress = 774 / 1464; // frame / total frames

      // Smoothly scroll the window to the correct point
      const scrollContainer = document.getElementById("scroll-container");
      if (!scrollContainer) return;

      const startHeight = scrollContainer.offsetHeight * 0.7;
      const endHeight = scrollContainer.offsetHeight - window.innerHeight;

      const targetScrollY = startHeight + targetProgress * (endHeight - startHeight);

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }

    window.addEventListener("scrollToFrame804", handleJump);
    return () => window.removeEventListener("scrollToFrame804", handleJump);
  }, []);



  useEffect(() => {
    const action = localStorage.getItem("TW_action");
    if (!action) return;

    localStorage.removeItem("TW_action");

    if (action === "go_charge") {
      window.dispatchEvent(new CustomEvent("scrollToFrame804"));
    }

    if (action === "go_mart") {
      const section = document.querySelector("#video-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
        }, 900);
      }
    }

    if (action === "go_mart") {
      const section = document.querySelector("#video-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

  }, []);



  // Responsive scroll height and car scale
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarScale(0.6); // Mobile
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

  const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "1100vh";
  const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";

  // useCarScrollTriggers();


  return (
    <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
      {/* 🧭 Navbar stays fixed at top */}
      <Navbar />

      {/* 🚗 3D Car Section */}
      {/* <div id="scroll-container" style={{ height: scrollHeight }}> */}


      {/* Wrapper for scroll animation */}
      <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
        {/* Sticky 3D Canvas */}
        <div

          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
            transformOrigin: "center center"
          }}
        >
          <Canvas
            camera={{ position: [0, 1.5, 25], fov: 50 }}
            style={{
              height: "100vh",
              width: "100vw",
              pointerEvents: "none",
              willChange: "transform",
            }}
            dpr={[1, 1.5]}
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

      </div>

      {/* Normal content appears after scroll section */}
      <div id='video-section' className="min-h-screen">
        <Video />
      </div>
      <div className="min-h-screen">
        <About />
      </div>

    </main>
  );
}



useGLTF.preload("/models/lastwala.glb");










































// "use client";
// import dynamic from "next/dynamic";
// import Navbar from "../components/Navbar";
// import About from "../components/About";
// import Video from "@/components/video";
// import { applyWhiteRimShader } from "@/components/applyWhiteRimShader";
// import { applyBlueInteriorShader } from "@/components/applyBlueInteriorShader";

// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VideoTextureEffect from "../components/VideoTextureEffect";
// import { useCarLights } from "../components/useCarLights";
// import { Suspense } from "react";
// import { useEffect, useRef, useState, useMemo } from "react";
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
//   const { scene } = useGLTF("/models/lastwala.glb");



//   const memoizedScene = useMemo(() => scene, []); // ✅ prevents re-traversal

//   useCarLights(memoizedScene, rearLightsRef, dashboardRef);


//   // this is the useEffect for the blue silhouette got the interiors of the car
//   const hasAppliedBlueShader = useRef(false);

//   useEffect(() => {
//     if (hasAppliedBlueShader.current) return;
//     applyBlueInteriorShader(scene)

//     hasAppliedBlueShader.current = true;
//   }, [scene]);


//   // ✨ Apply silhouette + rim glow shader
//   // ✨ Apply silhouette shader only to outer body meshes
//   const hasAppliedWhiteShader = useRef(false);

//   useEffect(() => {
//     if (hasAppliedWhiteShader.current) return;
//     applyWhiteRimShader(scene);

//     hasAppliedWhiteShader.current = true;
//   }, [scene]);


//   return <primitive object={scene} scale={scale} />;
// }



// function ScrollCameraAnimation({ rearLightsRef }: { rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined> }) {
//   const { camera } = useThree();

//   useEffect(() => {
//     camera.position.set(0, 50, 480);
//     camera.lookAt(0, 50, 0);

//     const isMobile = window.innerWidth < 768;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#scroll-container",
//         start: "top top",
//         end: isMobile ? "80% bottom" : "bottom bottom",
//         scrub: 0.5, // Smooth scrubbing (lower = smoother, higher = more responsive)
//       },
//     });

//     // Camera movement
//     // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
//     tl.to(camera.position, {
//       z: isMobile ? 15 : 1,
//       y: isMobile ? 18 : 20,
//       duration: 3,
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

//   const [carScale, setCarScale] = useState(1.2);


//   useEffect(() => {
//     function handleJump() {
//       const targetProgress = 774 / 1464; // frame / total frames

//       // Smoothly scroll the window to the correct point
//       const scrollContainer = document.getElementById("scroll-container");
//       if (!scrollContainer) return;

//       const startHeight = scrollContainer.offsetHeight * 0.7;
//       const endHeight = scrollContainer.offsetHeight - window.innerHeight;

//       const targetScrollY = startHeight + targetProgress * (endHeight - startHeight);

//       window.scrollTo({
//         top: targetScrollY,
//         behavior: "smooth",
//       });
//     }

//     window.addEventListener("scrollToFrame804", handleJump);
//     return () => window.removeEventListener("scrollToFrame804", handleJump);
//   }, []);



//   useEffect(() => {
//     const action = localStorage.getItem("TW_action");
//     if (!action) return;

//     localStorage.removeItem("TW_action");

//     if (action === "go_charge") {
//       window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//     }

//     // if (action === "go_mart") {
//     //   const section = document.querySelector("#video-section");
//     //   if (section) {
//     //     section.scrollIntoView({ behavior: "smooth" });
//     //     setTimeout(() => {
//     //       window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//     //     }, 900);
//     //   }
//     // }

//     if (action === "go_mart") {
//       const section = document.querySelector("#video-section");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }

//   }, []);



//   // Responsive scroll height and car scale
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setCarScale(0.6); // Mobile
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

//   const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "1100vh";
//   const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";

//   // useCarScrollTriggers();


//   return (
//     <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
//       {/* 🧭 Navbar stays fixed at top */}
//       <Navbar />

//       {/* 🚗 3D Car Section */}
//       {/* <div id="scroll-container" style={{ height: scrollHeight }}> */}


//       {/* Wrapper for scroll animation */}
//       <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
//         {/* Sticky 3D Canvas */}
//         <div

//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             width: "100%",
//             overflow: "hidden",
//             zIndex: 1,
//             transformOrigin: "center center"
//           }}
//         >
//           <Canvas
//             camera={{ position: [0, 1.5, 25], fov: 50 }}
//             style={{
//               height: "100vh",
//               width: "100vw",
//               pointerEvents: "none",
//               willChange: "transform",
//             }}
//             dpr={[1, 1.5]}
//             performance={{ min: 0.5, max: 1 }}
//             gl={{
//               antialias: true,
//               powerPreference: "high-performance",
//               alpha: false,
//               stencil: false,
//               depth: true,
//             }}
//           >
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[10, 10, 5]} intensity={1} />
//             <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
//             <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
//             <FlickerLights rearLightsRef={rearLightsRef} />
//             <Suspense fallback={null}>
//               <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
//             </Suspense>
//             <VideoTextureEffect progressRef={progressRef} />
//             <OrbitControls enabled={false} />
//           </Canvas>
//         </div>

//       </div>

//       {/* Normal content appears after scroll section */}
//       <div id='video-section' className="min-h-screen">
//         <Video />
//       </div>
//       <div className="min-h-screen">
//         <About />
//       </div>

//     </main>
//   );
// }



// useGLTF.preload("/models/lastwala.glb");










































