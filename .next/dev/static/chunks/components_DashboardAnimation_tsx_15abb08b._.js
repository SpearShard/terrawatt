(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

C; // "use client";
 // import { useEffect, useRef, useState } from "react";
 // import * as THREE from "three";
 // import { useFrame } from "@react-three/fiber";
 // import CoinAnimation from "./CoinAnimation"; // ⭐ NEW IMPORT
 // function worldToScreenPosition(worldPos: THREE.Vector3, camera: THREE.Camera, size: { width: number; height: number }) {
 //   const projected = worldPos.clone().project(camera);
 //   return {
 //     x: (projected.x * 0.5 + 0.5) * size.width,
 //     y: (1 - (projected.y * 0.5 + 0.5)) * size.height
 //   };
 // }
 // export default function DashboardAnimation({
 //   dashboardRef,
 //   progressRef,
 //   coinRef,
 //   globalState,
 // }: {
 //   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
 //   progressRef: React.MutableRefObject<number>;
 //   coinRef: React.MutableRefObject<THREE.Mesh | null>;
 //   globalState: React.MutableRefObject<{ phase: string }>;
 // }) {
 //   const uiGroup = useRef<THREE.Group>(new THREE.Group());
 //   const planeRef = useRef<THREE.Mesh | null>(null);
 //   const scrollRef = useRef(0);
 //   const smoothScrollRef = useRef(0);
 //   const rafRef = useRef<number | null>(null);
 //   const [textures, setTextures] = useState<THREE.Texture[]>([]);
 //   const totalFrames = 1644;
 //   // Load dashboard frames
 //   useEffect(() => {
 //     const loader = new THREE.TextureLoader();
 //     const frames: THREE.Texture[] = [];
 //     for (let i = 1; i <= totalFrames; i++) {
 //       const fileNumber = i.toString().padStart(5, "0");
 //       const url = `https://ik.imagekit.io/m064cyjlx/dashframes/frame_${fileNumber}.png`;
 //       const tex = loader.load(url);
 //       tex.colorSpace = THREE.SRGBColorSpace;
 //       // 🔥 MAKE EDGES SMOOTH
 //       tex.minFilter = THREE.LinearFilter;
 //       tex.magFilter = THREE.LinearFilter;
 //       tex.generateMipmaps = true;
 //       frames.push(tex);
 //     }
 //     setTextures(frames);
 //     return () => frames.forEach((t) => t.dispose());
 //   }, []);
 //   // Track scroll progress
 //   useEffect(() => {
 //     let ticking = false;
 //     const handleScroll = () => {
 //       if (ticking) return;
 //       ticking = true;
 //       rafRef.current = requestAnimationFrame(() => {
 //         const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
 //         const startHeight = scrollContainer
 //           ? scrollContainer.offsetHeight * 0.7
 //           : window.innerHeight * 2;
 //         const endHeight = scrollContainer
 //           ? scrollContainer.offsetHeight - window.innerHeight
 //           : document.body.scrollHeight - window.innerHeight;
 //         const rawScroll = Math.max(0, window.scrollY - startHeight);
 //         const maxScroll = Math.max(1, endHeight - startHeight);
 //         scrollRef.current = Math.max(0, Math.min(1, rawScroll / maxScroll));
 //         ticking = false;
 //       });
 //     };
 //     window.addEventListener("scroll", handleScroll, { passive: true });
 //     return () => {
 //       window.removeEventListener("scroll", handleScroll);
 //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
 //     };
 //   }, []);
 //   // Attach UI group onto dashboard
 //   useEffect(() => {
 //     const dashboardMesh = dashboardRef.current?.[0];
 //     if (!dashboardMesh) return;
 //     dashboardMesh.add(uiGroup.current);
 //     uiGroup.current.position.set(0, 0.7, 0.17);
 //     uiGroup.current.rotation.set(1.35, 0, 0);
 //     return () => {
 //       dashboardMesh.remove(uiGroup.current);
 //     };
 //   }, [dashboardRef]);
 //   // ⭐ Attach the coin mesh to the dashboard so LCD positioning works
 //   // Frame animation
 //   useFrame((_state, delta) => {
 //     if (!textures.length || !planeRef.current) return;
 //     const lerpFactor = Math.min(delta * 6, 1);
 //     smoothScrollRef.current +=
 //       (scrollRef.current - smoothScrollRef.current) * lerpFactor;
 //     const frameIndex = Math.floor(
 //       smoothScrollRef.current * (textures.length - 1)
 //     );
 //     progressRef.current = smoothScrollRef.current;
 //     const currentTexture = textures[frameIndex];
 //     const mat = planeRef.current.material as THREE.MeshBasicMaterial;
 //     if (mat.map !== currentTexture) {
 //       mat.map = currentTexture;
 //       mat.needsUpdate = true;
 //     }
 //   });
 // // ⭐ OVERLAY COIN ANIMATION (Method 1)
 // useFrame(({ camera, size }, delta) => {
 //   const coin = coinRef.current;
 //   if (!coin) return;
 //   const dashboardMesh = dashboardRef.current?.[0];
 //   if (!dashboardMesh) return;
 //   // 1️⃣ Find LCD mesh
 //   const lcd = dashboardMesh.getObjectByName("LCDs_LCDs0_0");
 //   if (!lcd) return;
 //   // 2️⃣ LCD world position
 //   const worldPos = new THREE.Vector3();
 //   lcd.getWorldPosition(worldPos);
 //   worldPos.y += 0.055; // fine tuning
 //   // 3️⃣ Convert LCD world → screen coordinates
 //   const screen = worldToScreenPosition(worldPos, camera, size);
 //   const xNDC = (screen.x / size.width) * 2 - 1;
 //   const yNDC = -(screen.y / size.height) * 2 + 1;
 //   // 4️⃣ Move overlay coin to screen coordinates
 //   coin.position.set(xNDC, yNDC, -2);
 //   // 5️⃣ Animate scale + rotation
 //   const progress = progressRef.current;
 //   if (progress < 0.9) {
 //     coin.visible = false;
 //     coin.scale.set(0.01, 0.01, 0.01);
 //     return;
 //   }
 //   coin.visible = true;
 //   coin.rotation.y += delta * 5;
 //   coin.rotation.x += delta * 2;
 //   const t = (progress - 0.9) / 0.1;
 //   const s = 10
 //   coin.scale.set(s, s, s);
 //   if (t >= 1) {
 //     globalState.current.phase = "transition";
 //   }
 // });
 //   return (
 //     <group ref={uiGroup}>
 //       {/* TESLA-STYLE SIMPLE TABLET */}
 //       <group position={[0, 0, 0.05]}>
 //         {/* Outer Tablet Shape */}
 //         <mesh position={[0, 0, -0.015]}>
 //           <boxGeometry args={[0.50, 0.33, 0.03]} />
 //           <meshStandardMaterial
 //             color="#111111"
 //             roughness={0.6}
 //             metalness={0.1}
 //           />
 //         </mesh>
 //         {/* Screen Area */}
 //         <mesh position={[0, 0, 0]}>
 //           <planeGeometry args={[0.47, 0.29]} />
 //           <meshBasicMaterial
 //             color="#000"
 //             transparent
 //             opacity={1}
 //           />
 //         </mesh>
 //         {/* Actual Dynamic Dashboard Frames */}
 //         <mesh ref={planeRef} position={[0, 0, 0.001]}>
 //           <planeGeometry args={[0.47, 0.29]} />
 //           <meshBasicMaterial
 //             toneMapped={false}
 //             transparent
 //             opacity={1}
 //           />
 //         </mesh>
 //       </group>
 //       {/* TESLA-STYLE SIMPLE TABLET */}
 //       <group position={[0, 0, 0.05]}>
 //         {/* Outer Tablet Shape */}
 //         <mesh position={[0, 0, -0.015]}>
 //           <boxGeometry args={[0.50, 0.33, 0.03]} />
 //           <meshStandardMaterial
 //             color="#111111"
 //             roughness={0.6}
 //             metalness={0.1}
 //           />
 //         </mesh>
 //         {/* Screen Area */}
 //         <mesh position={[0, 0, 0]}>
 //           <planeGeometry args={[0.47, 0.29]} />
 //           <meshBasicMaterial
 //             color="#000"
 //             transparent
 //             opacity={1}
 //           />
 //         </mesh>
 //         {/* Actual Dynamic Dashboard Frames */}
 //         <mesh ref={planeRef} position={[0, 0, 0.001]}>
 //           <planeGeometry args={[0.47, 0.29]} />
 //           <meshBasicMaterial
 //             toneMapped={false}
 //             transparent
 //             opacity={1}
 //           />
 //         </mesh>
 //       </group>
 //       {/* <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} /> */}
 //     </group>
 //   );
 // }
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_DashboardAnimation_tsx_15abb08b._.js.map