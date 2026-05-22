// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "@/components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const scrollHintRef = useRef<HTMLDivElement>(null);
//   const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
//   const loadingFrames = useRef<Set<number>>(new Set());
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);
//   const mobileRafRunningRef = useRef(false);
//   const lastPreloadFrameRef = useRef(-1);

//   const [isMobile, setIsMobile] = useState(false);
//   const [videoReady, setVideoReady] = useState(false);
//   const [framesReady, setFramesReady] = useState(false);

//   const TOTAL_FRAMES = 187;


//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);


//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return TOTAL_FRAMES * 50;
//       if (window.innerWidth < 1024) return TOTAL_FRAMES * 50;
//       return TOTAL_FRAMES * 70;
//     };

//     const update = () => {
//       scrollDistanceRef.current = calc();
//       ScrollTrigger.refresh();
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;

//     loadingFrames.current.add(index);

//     const img = new Image();
//     img.src = `/investwebp/mobileinvestor/frame_${String(index + 1).padStart(4, "0")}.webp`;


//     img.onerror = () => {
//       console.log("Frame failed:", img.src);
//     };

//     img.onload = async () => {
//       try {
//         await img.decode();
//       } catch { }

//       loadingFrames.current.delete(index);

//       frameCache.current.set(index, img);

//       const currentFrame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       if (index === currentFrame || (currentFrame === 0 && index === 0)) {
//         drawFrame(index);
//       }
//     };
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const BUFFER_AHEAD = 8;
//     const BUFFER_BEHIND = 4;

//     const start = Math.max(0, center - BUFFER_BEHIND);
//     const end = Math.min(TOTAL_FRAMES - 1, center + BUFFER_AHEAD);

//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 50;

//     frameCache.current.forEach((_, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         frameCache.current.delete(key);
//       }
//     });
//   };


//   const drawFrame = (index: number) => {
//     const canvas = canvasRef.current;
//     const img = frameCache.current.get(index);
//     if (!canvas || !img) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;

//     const newW = width * dpr;
//     const newH = height * dpr;

//     if (canvas.width !== newW || canvas.height !== newH) {
//       canvas.width = newW;
//       canvas.height = newH;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.globalCompositeOperation = "copy";

//     const scale = Math.min(width / img.width, height / img.height);
//     const x = (width - img.width * scale) / 2;
//     const y = (height - img.height * scale) / 2;

//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
//   };


//   useEffect(() => {
//     if (!isMobile || !framesReady) return;

//     const redraw = () => {
//       const frame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       drawFrame(frame);
//     };

//     window.addEventListener("resize", redraw);
//     return () => window.removeEventListener("resize", redraw);
//   }, [isMobile, framesReady]);


//   useEffect(() => {
//     if (isMobile) return;
//     const video = videoRef.current;
//     if (!video) return;

//     video.src = "/investwebp/invescrub.webm";
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.load();

//     const wake = async () => {
//       try {
//         video.currentTime = 0.01;
//         await video.play().catch(() => { });
//         video.pause();
//         video.currentTime = 0;
//       } catch { }
//       setVideoReady(true);
//     };

//     video.addEventListener("loadeddata", wake, { once: true });
//     return () => video.removeEventListener("loadeddata", wake);
//   }, [isMobile]);


//   useEffect(() => {
//     if (!videoReady || isMobile) return;
//     const video = videoRef.current;
//     if (!video) return;

//     let raf = 0;
//     let last = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       if (!video.duration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const damping = 8;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         (1 - Math.exp(-damping * delta));

//       const target = smoothProgressRef.current * video.duration;

//       if (Math.abs(video.currentTime - target) > 0.04) {
//         video.currentTime = target;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [videoReady, isMobile]);

//   useEffect(() => {
//     if (!isMobile || !framesReady || mobileRafRunningRef.current) return;
//     mobileRafRunningRef.current = true;

//     smoothProgressRef.current = rawProgressRef.current;

//     let raf = 0;
//     let last = performance.now();
//     let lastFrame = -1;
//     let cleanupCounter = 0;

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       const speed = 4;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         Math.min(delta * speed, 1);

//       const progress = Math.max(0, Math.min(1, smoothProgressRef.current));

//       const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

//       if (frame !== lastFrame) {


//         cleanupCounter++;
//         if (cleanupCounter > 10) {
//           cleanupFarFrames(frame);
//           cleanupCounter = 0;
//         }

//         drawFrame(frame);
//         lastFrame = frame;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(raf);
//       mobileRafRunningRef.current = false;
//     };
//   }, [isMobile, framesReady]);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     if (isMobile && !framesReady) return;
//     if (!isMobile && !videoReady) return;

//     scrollTriggerRef.current?.kill();

//     scrollTriggerRef.current = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;

//         // hide scroll hint when user scrolls
//   if (scrollHintRef.current) {
//     if (self.progress > 0.02) {
//       gsap.to(scrollHintRef.current, {
//         opacity: 0,
//         y: -40,
//         duration: 0.6,
//         ease: "power2.out",
//         pointerEvents: "none"
//       });
//     } else {
//       gsap.to(scrollHintRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         pointerEvents: "auto"
//       });
//     }
//   }


//         const frame = Math.floor(self.progress * (TOTAL_FRAMES - 1));

//         if (frame !== lastPreloadFrameRef.current) {
//           preloadNearbyFrames(frame);
//           lastPreloadFrameRef.current = frame;
//         }
//       },
//     });

//     return () => scrollTriggerRef.current?.kill();
//   }, [isMobile, framesReady, videoReady]);

//   useEffect(() => {
//     if (!isMobile) return;

//     // preload first frames so scroll starts smooth
//     for (let i = 0; i < 20; i++) {
//       loadFrame(i);
//     }

//     const checkReady = () => {
//       if (frameCache.current.has(0)) {
//         drawFrame(0);
//         setFramesReady(true);
//         ScrollTrigger.refresh();
//       } else {
//         requestAnimationFrame(checkReady);
//       }
//     };

//     checkReady();
//   }, [isMobile]);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100);

//     return () => clearTimeout(t);
//   }, []);


//   return (
//     <>
//       <Navbar />

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center relative">
//             <div className="w-full h-full flex items-center justify-center">
//               {isMobile ? (
//                 <canvas ref={canvasRef} className="w-full h-full" />
//               ) : (
//                 <video
//                   ref={videoRef}
//                   className="w-full h-full object-contain lg:object-fill sm:object-cover"
//                   muted
//                   playsInline
//                 />
//               )}
//             </div>

//             {/* SCROLL INDICATOR */}
//   <div
//     ref={scrollHintRef}
//     className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white z-20"
//   >
//     <p className="text-xs tracking-[0.35em] uppercase opacity-80">
//       Scroll
//     </p>

//     <div className="w-[2px] h-12 bg-white/30 overflow-hidden relative">
//       <div className="absolute top-0 w-full h-4 bg-white rounded-full animate-bounce"></div>
//     </div>
//   </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }













// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "@/components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const scrollHintRef = useRef<HTMLDivElement>(null);
//   const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
//   const loadingFrames = useRef<Set<number>>(new Set());
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);
//   const mobileRafRunningRef = useRef(false);
//   const lastPreloadFrameRef = useRef(-1);

//   const [isMobile, setIsMobile] = useState(false);
//   const [videoReady, setVideoReady] = useState(false);
//   const [framesReady, setFramesReady] = useState(false);

//   const TOTAL_FRAMES = 187;


//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);


//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return TOTAL_FRAMES * 50;
//       if (window.innerWidth < 1024) return TOTAL_FRAMES * 50;
//       return TOTAL_FRAMES * 70;
//     };

//     const update = () => {
//       scrollDistanceRef.current = calc();
//       ScrollTrigger.refresh();
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;

//     loadingFrames.current.add(index);

//     const img = new Image();
//     img.decoding = "async";
//     img.src = `/investwebp/mobileinvestor/frame_${String(index + 1).padStart(4, "0")}.webp`;


//     img.onerror = () => {
//       loadingFrames.current.delete(index);
//       console.log("Frame failed:", img.src);
//     };

//     img.onload = async () => {
//       try {
//         await img.decode();
//       } catch { }

//       loadingFrames.current.delete(index);

//       frameCache.current.set(index, img);

//       const currentFrame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       if (index === currentFrame || (currentFrame === 0 && index === 0)) {
//         drawFrame(index);
//       }
//     };
//   };

//   const preloadNearbyFrames = (center: number) => {
//     const BUFFER_AHEAD = 8;
//     const BUFFER_BEHIND = 4;

//     const start = Math.max(0, center - BUFFER_BEHIND);
//     const end = Math.min(TOTAL_FRAMES - 1, center + BUFFER_AHEAD);

//     for (let i = start; i <= end; i++) {
//       loadFrame(i);
//     }
//   };

//   const cleanupFarFrames = (center: number) => {
//     const MAX_DISTANCE = 50;

//     frameCache.current.forEach((_, key) => {
//       if (Math.abs(key - center) > MAX_DISTANCE) {
//         frameCache.current.delete(key);
//       }
//     });
//   };


//   const drawFrame = (index: number) => {
//     const canvas = canvasRef.current;
//     const img = frameCache.current.get(index);
//     if (!canvas || !img) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;

//     const newW = width * dpr;
//     const newH = height * dpr;

//     if (canvas.width !== newW || canvas.height !== newH) {
//       canvas.width = newW;
//       canvas.height = newH;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.globalCompositeOperation = "copy";

//     const scale = Math.min(width / img.width, height / img.height);
//     const x = (width - img.width * scale) / 2;
//     const y = (height - img.height * scale) / 2;

//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
//   };


//   useEffect(() => {
//     if (!isMobile || !framesReady) return;

//     const redraw = () => {
//       const frame = Math.floor(rawProgressRef.current * (TOTAL_FRAMES - 1));
//       drawFrame(frame);
//     };

//     window.addEventListener("resize", redraw);
//     return () => window.removeEventListener("resize", redraw);
//   }, [isMobile, framesReady]);


//   useEffect(() => {
//     if (isMobile || window.innerWidth < 640) return;
//     const video = videoRef.current;
//     if (!video) return;

//     video.src = "/investwebp/invescrub.webm";
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.load();

//     const wake = async () => {
//       try {
//         video.currentTime = 0.01;
//         await video.play().catch(() => { });
//         video.pause();
//         video.currentTime = 0;
//       } catch { }
//       setVideoReady(true);
//     };

//     video.addEventListener("loadeddata", wake, { once: true });
//     return () => video.removeEventListener("loadeddata", wake);
//   }, [isMobile]);


//   useEffect(() => {
//     if (!videoReady || isMobile) return;
//     const video = videoRef.current;
//     if (!video) return;

//     let raf = 0;
//     let last = performance.now();

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       if (!video.duration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }

//       const damping = 8;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         (1 - Math.exp(-damping * delta));

//       const target = smoothProgressRef.current * video.duration;

//       if (Math.abs(video.currentTime - target) > 0.04) {
//         video.currentTime = target;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [videoReady, isMobile]);

//   useEffect(() => {
//     if (!isMobile || !framesReady || mobileRafRunningRef.current) return;
//     mobileRafRunningRef.current = true;

//     smoothProgressRef.current = rawProgressRef.current;

//     let raf = 0;
//     let last = performance.now();
//     let lastFrame = -1;
//     let cleanupCounter = 0;

//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;

//       const speed = 4;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         Math.min(delta * speed, 1);

//       const progress = Math.max(0, Math.min(1, smoothProgressRef.current));

//       const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

//       if (frame !== lastFrame) {


//         cleanupCounter++;
//         if (cleanupCounter > 10) {
//           cleanupFarFrames(frame);
//           cleanupCounter = 0;
//         }

//         drawFrame(frame);
//         lastFrame = frame;
//       }

//       raf = requestAnimationFrame(animate);
//     };

//     raf = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(raf);
//       mobileRafRunningRef.current = false;
//     };
//   }, [isMobile, framesReady]);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     if (isMobile && !framesReady) return;
//     if (!isMobile && !videoReady) return;

//     scrollTriggerRef.current?.kill();

//     scrollTriggerRef.current = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;

//         // hide scroll hint when user scrolls
//   if (scrollHintRef.current) {
//     if (self.progress > 0.02) {
//       gsap.to(scrollHintRef.current, {
//         opacity: 0,
//         y: -40,
//         duration: 0.6,
//         ease: "power2.out",
//         pointerEvents: "none"
//       });
//     } else {
//       gsap.to(scrollHintRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         pointerEvents: "auto"
//       });
//     }
//   }


//         const frame = Math.floor(self.progress * (TOTAL_FRAMES - 1));

//         if (frame !== lastPreloadFrameRef.current) {
//           preloadNearbyFrames(frame);
//           lastPreloadFrameRef.current = frame;
//         }
//       },
//     });

//     return () => scrollTriggerRef.current?.kill();
//   }, [isMobile, framesReady, videoReady]);

//   useEffect(() => {
//     if (!isMobile) return;

//     // preload first frames so scroll starts smooth
//     for (let i = 0; i < 20; i++) {
//       loadFrame(i);
//     }

//     const checkReady = () => {
//       if (frameCache.current.has(0)) {
//         drawFrame(0);
//         setFramesReady(true);
//         ScrollTrigger.refresh();
//       } else {
//         requestAnimationFrame(checkReady);
//       }
//     };

//     checkReady();
//   }, [isMobile]);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100);

//     return () => clearTimeout(t);
//   }, []);


//   return (
//     <>
//       <Navbar />

//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center relative">
//             <div className="w-full h-full flex items-center justify-center">
//               {isMobile ? (
//                 <canvas ref={canvasRef} className="w-full h-full" />
//               ) : (
//                 <video
//                   ref={videoRef}
//                   className="w-full h-full object-contain lg:object-fill sm:object-cover"
//                   muted
//                   playsInline
//                 />
//               )}
//             </div>

//             {/* SCROLL INDICATOR */}
//   <div
//     ref={scrollHintRef}
//     className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white z-20"
//   >
//     <p className="text-xs tracking-[0.35em] uppercase opacity-80">
//       Scroll
//     </p>

//     <div className="w-[2px] h-12 bg-white/30 overflow-hidden relative">
//       <div className="absolute top-0 w-full h-4 bg-white rounded-full animate-bounce"></div>
//     </div>
//   </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }










// "use client";

// import { useEffect, useMemo, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"
// import * as THREE from "three";

// export default function InvestorAnimation() {
//   const mountRef = useRef<HTMLDivElement>(null);

//   const progress = useRef(0);

//   const loaded = useRef(false);
//   const firstFrameReady = useRef(false);

//   const currentAtlas = useRef(-1);

//   const raf = useRef<number | null>(null);

//   const textures = useRef<THREE.Texture[]>([]);

//   const isMobile = useMemo(
//     () =>
//       typeof window !== "undefined" &&
//       window.innerWidth < 768,
//     []
//   );

//   const S = isMobile
//     ? {
//       total: 187,
//       per: 143,
//       cols: 13,
//       rows: 11,
//       paths: [
//         "/investwebp/mobileinvestor/atlas_output/atlas1.webp",
//         "/investwebp/mobileinvestor/atlas_output/atlas2.webp",
//       ],
//     }
//     : {
//       total: 612,
//       per: 143,
//       cols: 13,
//       rows: 11,
//       paths: [
//         "/investwebp/investpc/atlas_output/atlas1.webp",
//         "/investwebp/investpc/atlas_output/atlas2.webp",
//         "/investwebp/investpc/atlas_output/atlas3.webp",
//         "/investwebp/investpc/atlas_output/atlas4.webp",
//         "/investwebp/investpc/atlas_output/atlas5.webp",
//       ],
//     };

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const onScroll = () => {
//       const max =
//         document.documentElement.scrollHeight -
//         window.innerHeight;

//       progress.current =
//         max > 0
//           ? Math.min(
//             1,
//             Math.max(
//               0,
//               window.scrollY / max
//             )
//           )
//           : 0;
//     };

//     window.addEventListener(
//       "scroll",
//       onScroll,
//       { passive: true }
//     );

//     onScroll();

//     const w = window.innerWidth;

//     const h = window.innerHeight;

//     const aspect = w / h;

//     const scene = new THREE.Scene();

//     const camera =
//       new THREE.OrthographicCamera(
//         -aspect,
//         aspect,
//         1,
//         -1,
//         0.1,
//         10
//       );

//     camera.position.z = 1;

//     const renderer =
//       new THREE.WebGLRenderer({
//         antialias: true,
//         alpha: false,
//       });

//     renderer.setClearColor(0x000000, 1);

//     renderer.setSize(w, h);

//     renderer.setPixelRatio(
//       Math.min(window.devicePixelRatio, 2)
//     );





//     mountRef.current.appendChild(
//       renderer.domElement
//     );

//     const geometry =
//       new THREE.PlaneGeometry(
//         aspect * 2,
//         2
//       );

//     const material =
//       new THREE.MeshBasicMaterial({
//         transparent: true,
//       });

//     const mesh = new THREE.Mesh(
//       geometry,
//       material
//     );

//     scene.add(mesh);

//     const applyTexture = (
//       tex: THREE.Texture
//     ) => {
//       material.map = tex;

//       tex.repeat.set(
//         1 / S.cols,
//         1 / S.rows
//       );

//       tex.offset.set(
//         0,
//         1 - 1 / S.rows
//       );

//       material.needsUpdate = true;
//     };



//     const globalCache = (
//       window as Window & {
//         __INVESTOR_TEXTURES__?: Map<
//           string,
//           HTMLImageElement
//         >;
//       }
//     ).__INVESTOR_TEXTURES__;

//     let count = 0;

//     const loadTexture = (
//       path: string
//     ) => {
//       return new Promise<THREE.Texture>(
//         (resolve, reject) => {
//           const cachedImg =
//             globalCache?.get(path);

//           // USE PRELOADED IMAGE
//           if (cachedImg) {
//             const tex =
//               new THREE.Texture(cachedImg);

//             tex.needsUpdate = true;

//             tex.colorSpace =
//               THREE.SRGBColorSpace;

//             tex.minFilter =
//               THREE.LinearFilter;

//             tex.magFilter =
//               THREE.LinearFilter;

//             tex.generateMipmaps =
//               false;

//             tex.wrapS =
//               THREE.ClampToEdgeWrapping;

//             tex.wrapT =
//               THREE.ClampToEdgeWrapping;

//             renderer.initTexture(tex);

//             resolve(tex);

//             return;
//           }

//           // FALLBACK DIRECT LOAD
//           new THREE.TextureLoader().load(
//             path,
//             (tex) => {
//               tex.colorSpace =
//                 THREE.SRGBColorSpace;

//               tex.minFilter =
//                 THREE.LinearFilter;

//               tex.magFilter =
//                 THREE.LinearFilter;

//               tex.generateMipmaps =
//                 false;

//               tex.wrapS =
//                 THREE.ClampToEdgeWrapping;

//               tex.wrapT =
//                 THREE.ClampToEdgeWrapping;

//               renderer.initTexture(tex);

//               resolve(tex);
//             },
//             undefined,
//             reject
//           );
//         }
//       );
//     };

//     (async () => {
//       // LOAD FIRST ATLAS IMMEDIATELY
//       const firstTex =
//         await loadTexture(
//           S.paths[0]
//         );

//       textures.current[0] =
//         firstTex;

//       applyTexture(firstTex);

//       currentAtlas.current = 0;

//       loaded.current = true;

//       renderer.render(scene, camera);

//       // LOAD REST IN BACKGROUND
//       Promise.all(
//         S.paths
//           .slice(1)
//           .map(async (path, i) => {
//             const tex =
//               await loadTexture(path);

//             textures.current[i + 1] =
//               tex;
//           })
//       ).catch(console.error);
//     })();


//     const animate = () => {
//       if (!loaded.current) {
//         raf.current =
//           requestAnimationFrame(animate);

//         return;
//       }

//       if (
//         loaded.current &&
//         material.map
//       ) {
//         const frame = Math.floor(
//           progress.current *
//           (S.total - 1)
//         );

//         const atlas = Math.min(
//           S.paths.length - 1,
//           Math.floor(frame / S.per)
//         );

//         const local = Math.min(
//           frame - atlas * S.per,
//           S.per - 1
//         );

//         const tex =
//           textures.current[atlas];

//         if (tex) {
//           if (
//             currentAtlas.current !==
//             atlas
//           ) {
//             applyTexture(tex);

//             currentAtlas.current =
//               atlas;
//           }



//           const col =
//             local % S.cols;

//           const row = Math.floor(
//             local / S.cols
//           );

//           material.map.offset.x =
//             col / S.cols;

//           material.map.offset.y =
//             1 -
//             (row + 1) / S.rows;
//         }
//       }

//       renderer.render(scene, camera);

//       raf.current =
//         requestAnimationFrame(animate);
//     };

//     animate();

//     const onResize = () => {
//       const w = window.innerWidth;

//       const h = window.innerHeight;

//       const aspect = w / h;

//       renderer.setSize(w, h);

//       camera.left = -aspect;

//       camera.right = aspect;

//       camera.updateProjectionMatrix();

//       mesh.scale.set(aspect, 1, 1);
//     };

//     window.addEventListener(
//       "resize",
//       onResize
//     );

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         onScroll
//       );

//       window.removeEventListener(
//         "resize",
//         onResize
//       );

//       if (raf.current)
//         cancelAnimationFrame(
//           raf.current
//         );

//       geometry.dispose();

//       material.dispose();

//       textures.current.forEach((t) =>
//         t.dispose()
//       );

//       renderer.dispose();

//       mountRef.current?.removeChild(
//         renderer.domElement
//       );
//     };
//   }, [S]);

//   return (
//     <>
//       <Navbar />

//       <div
//         ref={mountRef}
//         className="fixed inset-0 -z-10 pointer-events-none"
//       />

//       <div className="h-[1200vh]" />

//       <Footer />
//     </>
//   );
// }




















"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

export default function InvestorsPage() {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const videoRef =
    useRef<HTMLVideoElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const scrollHintRef =
    useRef<HTMLDivElement>(null);

  const scrollTriggerRef =
    useRef<ScrollTrigger | null>(
      null
    );

  const rawProgressRef =
    useRef(0);

  const smoothProgressRef =
    useRef(0);

  const scrollDistanceRef =
    useRef(0);

  const mobileRafRef =
    useRef<number | null>(null);

  const atlasImages =
    useRef<HTMLImageElement[]>(
      []
    );

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  const [
    videoReady,
    setVideoReady,
  ] = useState(false);

  const [
    mobileReady,
    setMobileReady,
  ] = useState(false);

  // =====================================
  // MOBILE ATLAS CONFIG
  // =====================================

  const MOBILE_ATLAS = {
    total: 187,

    per: 143,

    cols: 13,

    rows: 11,

    

    

    paths: [
      "/investwebp/mobileinvestor/atlas_output/atlas1.webp",

      "/investwebp/mobileinvestor/atlas_output/atlas2.webp",
    ],
  };

  // =====================================
  // MOBILE DETECTION
  // =====================================

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 640
      );

    check();

    window.addEventListener(
      "resize",
      check
    );

    return () =>
      window.removeEventListener(
        "resize",
        check
      );
  }, []);

  // =====================================
  // SCROLL DISTANCE
  // =====================================

  useEffect(() => {
    const calc = () => {
      if (
        window.innerWidth < 640
      )
        return (
          MOBILE_ATLAS.total * 50
        );

      if (
        window.innerWidth < 1024
      )
        return (
          MOBILE_ATLAS.total * 60
        );

      return (
        MOBILE_ATLAS.total * 70
      );
    };

    const update = () => {
      scrollDistanceRef.current =
        calc();

      ScrollTrigger.refresh();
    };

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  // =====================================
  // MOBILE CANVAS RENDERER
  // =====================================

  const drawFrame = (
    frame: number
  ) => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    const atlasIndex =
      Math.min(
        atlasImages.current
          .length - 1,
        Math.floor(
          frame /
            MOBILE_ATLAS.per
        )
      );

    const atlas =
      atlasImages.current[
        atlasIndex
      ];

    if (!atlas) return;

    const localFrame =
      frame -
      atlasIndex *
        MOBILE_ATLAS.per;

    const col =
      localFrame %
      MOBILE_ATLAS.cols;

    const row =
      Math.floor(
        localFrame /
          MOBILE_ATLAS.cols
      );

    const frameWidth =
  atlas.width /
  MOBILE_ATLAS.cols;

const frameHeight =
  atlas.height /
  MOBILE_ATLAS.rows;

const sx =
  col * frameWidth;

const sy =
  row * frameHeight;

    const dpr =
      window.devicePixelRatio ||
      1;

    const width =
      canvas.clientWidth;

    const height =
      canvas.clientHeight;

    if (
      canvas.width !==
        width * dpr ||
      canvas.height !==
        height * dpr
    ) {
      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;
    }

    ctx.setTransform(
  1,
  0,
  0,
  1,
  0,
  0
);

ctx.scale(dpr, dpr);

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    const scale =
      Math.min(
        width / frameWidth,
        height / frameHeight
      );

    const drawWidth =
  frameWidth * scale;

const drawHeight =
  frameHeight * scale;

    const dx =
      (width - drawWidth) / 2;

    const dy =
      (height - drawHeight) /
      2;

    ctx.drawImage(
      atlas,
      sx,
      sy,
      frameWidth,
frameHeight,
      dx,
      dy,
      drawWidth,
      drawHeight
    );
  };

  // =====================================
  // LOAD MOBILE ATLASES
  // =====================================

  useEffect(() => {
    if (!isMobile) return;

    Promise.all(
      MOBILE_ATLAS.paths.map(
        (src) => {
          return new Promise<HTMLImageElement>(
            (
              resolve,
              reject
            ) => {
              const cached =
  (
    window as any
  ).__INVESTOR_TEXTURES__?.get(
    src
  );

if (cached) {
  resolve(cached);

  return;
}

const img =
  new Image();

img.src = src;

              img.decoding =
                "async";

              img.onload =
                async () => {
                  try {
                    await img.decode();
                  } catch {}

                  resolve(img);
                };

              img.onerror =
                reject;
            }
          );
        }
      )
    )
      .then((imgs) => {
        atlasImages.current =
          imgs;

        drawFrame(0);

        setMobileReady(
          true
        );

        ScrollTrigger.refresh();
      })
      .catch(console.error);
  }, [isMobile]);

  // =====================================
  // DESKTOP VIDEO
  // =====================================

  useEffect(() => {
    if (
      isMobile ||
      window.innerWidth < 640
    )
      return;

    const video =
      videoRef.current;

    if (!video) return;

    video.src =
      "/investwebp/invescrub.webm";

    video.muted = true;

    video.playsInline =
      true;

    video.preload = "auto";

    video.load();

    const wake =
      async () => {
        try {
          video.currentTime =
            0.01;

          await video
            .play()
            .catch(() => {});

          video.pause();

          video.currentTime = 0;
        } catch {}

        setVideoReady(true);
      };

    video.addEventListener(
      "loadeddata",
      wake,
      { once: true }
    );

    return () =>
      video.removeEventListener(
        "loadeddata",
        wake
      );
  }, [isMobile]);

  // =====================================
  // DESKTOP VIDEO SCRUB
  // =====================================

  useEffect(() => {
    if (
      !videoReady ||
      isMobile
    )
      return;

    const video =
      videoRef.current;

    if (!video) return;

    let raf = 0;

    let last =
      performance.now();

    const animate = (
      time: number
    ) => {
      const delta =
        Math.min(
          (time - last) / 1000,
          0.1
        );

      last = time;

      if (!video.duration) {
        raf =
          requestAnimationFrame(
            animate
          );

        return;
      }

      const damping = 8;

      smoothProgressRef.current +=
        (rawProgressRef.current -
          smoothProgressRef.current) *
        (1 -
          Math.exp(
            -damping * delta
          ));

      const target =
        smoothProgressRef.current *
        video.duration;

      if (
        Math.abs(
          video.currentTime -
            target
        ) > 0.04
      ) {
        video.currentTime =
          target;
      }

      raf =
        requestAnimationFrame(
          animate
        );
    };

    raf =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        raf
      );
  }, [videoReady, isMobile]);

  // =====================================
  // MOBILE RAF LOOP
  // =====================================

  useEffect(() => {
    if (
      !isMobile ||
      !mobileReady
    )
      return;

    let last =
      performance.now();

    let lastFrame = -1;

    const animate = (
      time: number
    ) => {
      const delta =
        Math.min(
          (time - last) / 1000,
          0.1
        );

      last = time;

      const speed = 5;

      smoothProgressRef.current +=
        (rawProgressRef.current -
          smoothProgressRef.current) *
        Math.min(
          delta * speed,
          1
        );

      const progress =
        Math.max(
          0,
          Math.min(
            1,
            smoothProgressRef.current
          )
        );

      const frame =
        Math.floor(
          progress *
            (MOBILE_ATLAS.total -
              1)
        );

      if (
        frame !== lastFrame
      ) {
        drawFrame(frame);

        lastFrame = frame;
      }

      mobileRafRef.current =
        requestAnimationFrame(
          animate
        );
    };

    mobileRafRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        mobileRafRef.current
      ) {
        cancelAnimationFrame(
          mobileRafRef.current
        );
      }
    };
  }, [isMobile, mobileReady]);

  // =====================================
  // SCROLLTRIGGER
  // =====================================

  useEffect(() => {
    if (
      !containerRef.current
    )
      return;

    if (
      isMobile &&
      !mobileReady
    )
      return;

    if (
      !isMobile &&
      !videoReady
    )
      return;

    scrollTriggerRef.current?.kill();

    scrollTriggerRef.current =
      ScrollTrigger.create({
        trigger:
          containerRef.current,

        start: "top top",

        end: `+=${scrollDistanceRef.current}px`,

        pin: true,

        anticipatePin: 1,

        onUpdate: (self) => {
          rawProgressRef.current =
            self.progress;

          if (
            scrollHintRef.current
          ) {
            if (
              self.progress >
              0.02
            ) {
              gsap.to(
                scrollHintRef.current,
                {
                  opacity: 0,
                  y: -40,
                  duration: 0.6,
                  ease:
                    "power2.out",
                  pointerEvents:
                    "none",
                }
              );
            } else {
              gsap.to(
                scrollHintRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease:
                    "power2.out",
                  pointerEvents:
                    "auto",
                }
              );
            }
          }
        },
      });

    return () =>
      scrollTriggerRef.current?.kill();
  }, [
    isMobile,
    mobileReady,
    videoReady,
  ]);

  // =====================================
  // REFRESH
  // =====================================

  useEffect(() => {
    const t = setTimeout(
      () => {
        ScrollTrigger.refresh();
      },
      100
    );

    return () =>
      clearTimeout(t);
  }, []);

  return (
    <>
      

      <div className="relative w-full min-h-screen bg-black overflow-hidden">

        <div
          ref={containerRef}
          className="relative z-10 w-full overflow-hidden"
        >
          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center relative">

            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">

              {isMobile ? (
                <canvas
  ref={canvasRef}
  className="absolute inset-0 w-full h-full overflow-hidden"
/>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain lg:object-fill sm:object-cover"
                  muted
                  playsInline
                />
              )}
            </div>

            {/* SCROLL INDICATOR */}

            <div
              ref={scrollHintRef}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white z-20"
            >
              <p className="text-xs tracking-[0.35em] uppercase opacity-80">
                Scroll
              </p>

              <div className="w-[2px] h-12 bg-white/30 overflow-hidden relative">
                <div className="absolute top-0 w-full h-4 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


