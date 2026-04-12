(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CoinAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoinAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CoinAnimation({ progressRef, dashboardRef }) {
    _s();
    const coinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseEmissiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseEnvRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoinAnimation.useEffect": ()=>{
            const dashboardMesh = dashboardRef?.current?.[0];
            if (!dashboardMesh) return;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const frontMap = loader.load("/croppedback.png");
            const backMap = loader.load("/coins.png");
            frontMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            backMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            frontMap.flipY = false;
            backMap.flipY = false;
            frontMap.center.set(0.5, 0.5);
            frontMap.rotation = Math.PI / 2;
            backMap.center.set(0.5, 0.5);
            backMap.rotation = Math.PI / 2;
            frontMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            frontMap.repeat.x = -1;
            backMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            backMap.repeat.x = -1;
            const envMap = loader.load("https://threejs.org/examples/textures/229/brushed_metal.jpg");
            envMap.mapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EquirectangularReflectionMapping"];
            const radius = 0.012;
            const thickness = 0.0025;
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](radius, radius, thickness, 96, 1);
            const pos = geo.attributes.position;
            for(let i = 0; i < pos.count; i++){
                const y = pos.getY(i);
                if (Math.abs(y) < thickness * 0.49) {
                    const x = pos.getX(i);
                    const z = pos.getZ(i);
                    const a = Math.atan2(z, x);
                    const ridge = Math.sin(a * 120) * 0.0003;
                    pos.setXYZ(i, x + ridge * (x / radius), y, z + ridge * (z / radius));
                }
            }
            pos.needsUpdate = true;
            geo.computeVertexNormals();
            const gold = 0xd29508;
            const matSide = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: gold,
                metalness: 1,
                roughness: 0.22,
                emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gold),
                emissiveIntensity: 0.45,
                envMap,
                envMapIntensity: 1.5
            });
            const matFront = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: frontMap,
                color: 0xffffff,
                metalness: 0,
                roughness: 0.35,
                transparent: true,
                alphaTest: 0.5
            });
            const matBack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: backMap,
                color: 0xffffff,
                metalness: 0,
                roughness: 0.4,
                transparent: true,
                alphaTest: 0.5
            });
            const coin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, [
                matSide,
                matFront,
                matBack
            ]);
            coin.visible = false;
            const mats = coin.material;
            baseColorsRef.current = mats.map({
                "CoinAnimation.useEffect": (m)=>m.color.clone()
            }["CoinAnimation.useEffect"]);
            baseEmissiveRef.current = mats.map({
                "CoinAnimation.useEffect": (m)=>m.emissiveIntensity
            }["CoinAnimation.useEffect"]);
            baseEnvRef.current = mats.map({
                "CoinAnimation.useEffect": (m)=>m.envMapIntensity ?? 1
            }["CoinAnimation.useEffect"]);
            const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");
            if (lcdMesh) {
                const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                lcdMesh.getWorldPosition(p);
                dashboardMesh.worldToLocal(p);
                coin.position.copy(p);
                coin.position.y += 0.055;
            } else {
                coin.position.set(0, 0.32, 0.18);
            }
            dashboardMesh.add(coin);
            coinRef.current = coin;
            return ({
                "CoinAnimation.useEffect": ()=>{
                    coin.removeFromParent();
                    geo.dispose();
                    matSide.dispose();
                    matFront.dispose();
                    matBack.dispose();
                    frontMap.dispose();
                    backMap.dispose();
                    envMap.dispose();
                }
            })["CoinAnimation.useEffect"];
        }
    }["CoinAnimation.useEffect"], [
        dashboardRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CoinAnimation.useFrame": (_, delta)=>{
            if (!coinRef.current) return;
            const coin = coinRef.current;
            const progress = progressRef.current;
            const mats = coin.material;
            if (progress < 0.965) {
                coin.rotation.y += delta * 5;
                coin.rotation.x += delta * 2;
            }
            if (progress > 0.95) {
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.95) / 0.05, 0, 1);
                const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
                coin.visible = true;
                const isMobile = window.innerWidth < 768;
                coin.position.y = isMobile ? 0.63 - e * 0.7 : 0.58 - e * 0.7;
                coin.position.z = isMobile ? 0.196 : 0.165;
                coin.scale.setScalar(1 + e * 1.5);
                if (progress > 0.97) {
                    const faceT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.97) / 0.03, 0, 1);
                    coin.quaternion.slerp(camera.quaternion, faceT * 0.2);
                }
            } else {
                coin.visible = false;
                coin.scale.setScalar(1);
            }
            if (progress > 0.985) {
                const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.985) / 0.015, 0, 1);
                const darkness = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(1, 0.0, d);
                mats.forEach({
                    "CoinAnimation.useFrame": (mat, i)=>{
                        mat.color.copy(baseColorsRef.current[i]).multiplyScalar(darkness);
                        mat.emissiveIntensity = baseEmissiveRef.current[i] * (1 - d);
                        mat.envMapIntensity = baseEnvRef.current[i] * (1 - d);
                    }
                }["CoinAnimation.useFrame"]);
            } else {
                mats.forEach({
                    "CoinAnimation.useFrame": (mat, i)=>{
                        mat.color.copy(baseColorsRef.current[i]);
                        mat.emissiveIntensity = baseEmissiveRef.current[i];
                        mat.envMapIntensity = baseEnvRef.current[i];
                    }
                }["CoinAnimation.useFrame"]);
            }
        }
    }["CoinAnimation.useFrame"]);
    return null;
}
_s(CoinAnimation, "IOMFM682qaGR/PdxZ/X5IBgQDh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CoinAnimation;
var _c;
__turbopack_context__.k.register(_c, "CoinAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";
// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
//   onReady?: () => void;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const textureLoader = useRef(new THREE.TextureLoader());
//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(-1);
//   const targetFrameRef = useRef(-1);
//   const INITIAL_PRELOAD = 800;
//   const loadFrame = (index: number) => {
//     if (frameCache.current.has(index)) return;
//     textureLoader.current.load(
//       `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         texture.anisotropy = 1;
//         frameCache.current.set(index, texture);
// // only apply if this frame is still the one we want
// if (targetFrameRef.current === index || index === 0) {
//   const plane = planeRef.current;
//   if (plane) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     mat.map = texture;
//     mat.needsUpdate = true;
//   }
// }
//       }
//     );
//   };
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.1
//           : window.innerHeight * 2;
//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;
//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const MIN_SCROLL_PX = window.innerHeight * 5;
//         const maxScroll = Math.max(
//           MIN_SCROLL_PX,
//           endHeight - startHeight
//         );
//         scrollRef.current = Math.max(
//           0,
//           Math.min(1, rawScroll / maxScroll)
//         );
//         ticking = false;
//       });
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);
//   useEffect(() => {
//   // warm up first frames so initial scroll is smooth
//   for (let i = 0; i < INITIAL_PRELOAD; i++) {
//     loadFrame(i);
//   }
//   const check = () => {
//     const tex = frameCache.current.get(0);
//     if (!tex) {
//       requestAnimationFrame(check);
//       return;
//     }
//     const plane = planeRef.current;
//     if (plane) {
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       mat.map = tex;
//     }
//   };
//   check();
// }, []);
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
//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;
//     const damping = 4;
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));
//     const progress = smoothScrollRef.current;
//     const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
// const frame = Math.floor(exactFrame);
// const nextFrame = frame + 1;
// const mix = exactFrame - frame;
//     targetFrameRef.current = frame;
//    if (frame !== lastFrameRef.current && frameCache.current.has(frame)) {
//       loadFrame(frame);
// loadFrame(frame + 1);
// loadFrame(frame + 2);
// loadFrame(frame + 3);
// loadFrame(frame + 4);
//      const tex1 = frameCache.current.get(frame);
// const tex2 = frameCache.current.get(nextFrame);
// if (tex1 && tex2) {
//   const mat = plane.material as THREE.MeshBasicMaterial;
//   // simple blend trick
//   mat.map = mix < 0.5 ? tex1 : tex2;
//   mat.needsUpdate = true;
// }
//       lastFrameRef.current = frame;
//     }
//     progressRef.current = progress;
//     (window as any).__SCROLL_PROGRESS__ = progress;
//   });
//   return (
//     <group ref={uiGroup}>
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }
// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";
// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
//   onReady?: () => void;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
//   const textureLoader = useRef(new THREE.TextureLoader());
//   const MOBILE_TOTAL_FRAMES = 1143;
//   const lastFrameRef = useRef(-1);
//   const targetFrameRef = useRef(-1);
//   const INITIAL_PRELOAD = 800;
//   const LATE_PRELOAD_START = Math.floor(MOBILE_TOTAL_FRAMES * 0.86);
//   const loadFrame = (index: number) => {
//   if (index < 0 || index >= MOBILE_TOTAL_FRAMES) return;
//     if (frameCache.current.has(index)) return;
//     textureLoader.current.load(
//       `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
//       (texture) => {
//         texture.colorSpace = THREE.SRGBColorSpace;
//         texture.generateMipmaps = false;
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         texture.anisotropy = 1;
//         frameCache.current.set(index, texture);
// // only apply if this frame is still the one we want
// if (targetFrameRef.current === index || index === 0) {
//   const plane = planeRef.current;
//   if (plane) {
//     const mat = plane.material as THREE.MeshBasicMaterial;
//     mat.map = texture;
//     mat.needsUpdate = true;
//   }
// }
//       }
//     );
//   };
//   useEffect(() => {
//     (window as Window & { __SCROLL_PROGRESS__?: number }).__SCROLL_PROGRESS__ = 0;
//     let ticking = false;
//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.1
//           : window.innerHeight * 2;
//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;
//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const MIN_SCROLL_PX = window.innerHeight * 5;
//         const maxScroll = Math.max(
//           MIN_SCROLL_PX,
//           endHeight - startHeight
//         );
//         scrollRef.current = Math.max(
//           0,
//           Math.min(1, rawScroll / maxScroll)
//         );
//         ticking = false;
//       });
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);
//   useEffect(() => {
//   // warm up first frames so initial scroll is smooth
//   for (let i = 0; i < INITIAL_PRELOAD; i++) {
//     loadFrame(i);
//   }
//   // warm up coin-phase frames too, so first run after reload does not lag
//   // when reaching the end of the dashboard timeline.
//   let latePreloadTimeout: ReturnType<typeof setTimeout> | null = null;
//   latePreloadTimeout = setTimeout(() => {
//     for (let i = LATE_PRELOAD_START; i < MOBILE_TOTAL_FRAMES; i++) {
//       loadFrame(i);
//     }
//   }, 250);
//   const check = () => {
//     const tex = frameCache.current.get(0);
//     if (!tex) {
//       requestAnimationFrame(check);
//       return;
//     }
//     const plane = planeRef.current;
//     if (plane) {
//       const mat = plane.material as THREE.MeshBasicMaterial;
//       mat.map = tex;
//     }
//   };
//   check();
//   return () => {
//     if (latePreloadTimeout) {
//       clearTimeout(latePreloadTimeout);
//     }
//   };
// }, []);
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
//   useFrame((_state, delta) => {
//     const plane = planeRef.current;
//     if (!plane) return;
//     const targetScroll = scrollRef.current;
//     const gap = Math.abs(targetScroll - smoothScrollRef.current);
//     const inCoinPhase = targetScroll > 0.9;
//     const damping = inCoinPhase ? (gap > 0.03 ? 20 : 14) : 4;
//     smoothScrollRef.current +=
//       (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));
//     const progress = smoothScrollRef.current;
//     const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
// const frame = Math.floor(exactFrame);
// const nextFrame = frame + 1;
// const mix = exactFrame - frame;
//     targetFrameRef.current = frame;
//    if (frame !== lastFrameRef.current) {
// loadFrame(frame);
// loadFrame(frame + 1);
// loadFrame(frame + 2);
// loadFrame(frame + 3);
// loadFrame(frame + 4);
// const tex1 = frameCache.current.get(frame);
// const tex2 = frameCache.current.get(nextFrame);
// if (tex1) {
//   const mat = plane.material as THREE.MeshBasicMaterial;
//   if (tex2) {
//     mat.map = mix < 0.5 ? tex1 : tex2;
//   } else {
//     mat.map = tex1;
//   }
//   mat.needsUpdate = true;
// }
// lastFrameRef.current = frame;
//     }
//     progressRef.current = progress;
//     (window as any).__SCROLL_PROGRESS__ = progress;
//   });
//   return (
//     <group ref={uiGroup}>
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.1} />
//           </RoundedBox>
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>
//         <mesh ref={planeRef} position={[0, 0, 0.001]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial toneMapped={false} />
//         </mesh>
//       </group>
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>DashboardAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoinAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CoinAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardAnimation({ dashboardRef, progressRef }) {
    _s();
    const uiGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]());
    const planeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const loadingFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const textureLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]());
    const isMobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            const check = {
                "DashboardAnimation.useEffect.check": ()=>{
                    isMobileRef.current = window.innerWidth < 768;
                }
            }["DashboardAnimation.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "DashboardAnimation.useEffect": ()=>window.removeEventListener("resize", check)
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoTextureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const MOBILE_TOTAL_FRAMES = 286;
    const lastFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const targetFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const INITIAL_PRELOAD = 24;
    const PRELOAD_BEHIND = 5;
    const PRELOAD_AHEAD = 10;
    const MAX_CACHE_DISTANCE = 40;
    const cleanupCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const BASE_URL = "https://ik.imagekit.io/0s6dxbeae/Teraawatt_Dashboard/phone_frames";
    const loadFrame = (index)=>{
        if (index < 0 || index >= MOBILE_TOTAL_FRAMES) return;
        if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;
        loadingFrames.current.add(index);
        textureLoader.current.load(`${BASE_URL}/frame_${String(index + 1).padStart(5, "0")}.webp`, (texture)=>{
            loadingFrames.current.delete(index);
            if (!mountedRef.current) {
                texture.dispose();
                return;
            }
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.generateMipmaps = false;
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            frameCache.current.set(index, texture);
            if (targetFrameRef.current === index || index === 0) {
                const plane = planeRef.current;
                if (plane) {
                    const mat = plane.material;
                    mat.map = texture;
                    mat.needsUpdate = true;
                }
            }
        }, undefined, ()=>{
            loadingFrames.current.delete(index);
        });
    };
    const preloadNearbyFrames = (center)=>{
        const start = Math.max(0, center - PRELOAD_BEHIND);
        const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + PRELOAD_AHEAD);
        for(let i = start; i <= end; i++){
            loadFrame(i);
        }
    };
    const cleanupFarFrames = (center)=>{
        frameCache.current.forEach((texture, key)=>{
            if (key !== 0 && Math.abs(key - center) > MAX_CACHE_DISTANCE) {
                texture.dispose();
                frameCache.current.delete(key);
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            window.__SCROLL_PROGRESS__ = 0;
            let ticking = false;
            const handleScroll = {
                "DashboardAnimation.useEffect.handleScroll": ()=>{
                    if (ticking) return;
                    ticking = true;
                    rafRef.current = requestAnimationFrame({
                        "DashboardAnimation.useEffect.handleScroll": ()=>{
                            const scrollContainer = document.querySelector("#scroll-container");
                            const startHeight = scrollContainer ? scrollContainer.offsetHeight * 0.1 : window.innerHeight * 2;
                            const endHeight = scrollContainer ? scrollContainer.offsetHeight - window.innerHeight : document.body.scrollHeight - window.innerHeight;
                            const rawScroll = Math.max(0, window.scrollY - startHeight);
                            const MIN_SCROLL_PX = window.innerHeight * 5;
                            const maxScroll = Math.max(MIN_SCROLL_PX, endHeight - startHeight);
                            scrollRef.current = Math.max(0, Math.min(1, rawScroll / maxScroll));
                            ticking = false;
                        }
                    }["DashboardAnimation.useEffect.handleScroll"]);
                }
            }["DashboardAnimation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "DashboardAnimation.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                }
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            if (isMobileRef.current) return;
            const video = document.createElement("video");
            video.src = "https://ik.imagekit.io/0s6dxbeae/Teraawatt_Dashboard/dashboard_12-04-2026_scrub.mp4";
            video.crossOrigin = "anonymous";
            video.muted = true;
            video.playsInline = true;
            video.preload = "auto";
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTexture"](video);
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            // ✅ ADD THESE LINES RIGHT HERE
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            videoRef.current = video;
            videoTextureRef.current = texture;
            return ({
                "DashboardAnimation.useEffect": ()=>{
                    video.pause();
                    texture.dispose();
                }
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            mountedRef.current = true;
            let mounted = true;
            setTimeout({
                "DashboardAnimation.useEffect": ()=>{
                    if (isMobileRef.current) {
                        for(let i = 0; i < INITIAL_PRELOAD; i++){
                            loadFrame(i);
                        }
                    }
                }
            }["DashboardAnimation.useEffect"], 0);
            const check = {
                "DashboardAnimation.useEffect.check": ()=>{
                    if (!mounted) return;
                    const tex = frameCache.current.get(0);
                    if (!tex) {
                        requestAnimationFrame(check);
                        return;
                    }
                    const plane = planeRef.current;
                    if (plane) {
                        const mat = plane.material;
                        mat.map = tex;
                    }
                }
            }["DashboardAnimation.useEffect.check"];
            check();
            return ({
                "DashboardAnimation.useEffect": ()=>{
                    mountedRef.current = false;
                    mounted = false;
                    frameCache.current.forEach({
                        "DashboardAnimation.useEffect": (texture)=>texture.dispose()
                    }["DashboardAnimation.useEffect"]);
                    frameCache.current.clear();
                    loadingFrames.current.clear();
                }
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            const dashboardMesh = dashboardRef.current?.[0];
            if (!dashboardMesh) return;
            dashboardMesh.add(uiGroup.current);
            uiGroup.current.position.set(0, 0.7, 0.17);
            uiGroup.current.rotation.set(1.35, 0, 0);
            return ({
                "DashboardAnimation.useEffect": ()=>{
                    dashboardMesh.remove(uiGroup.current);
                }
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], [
        dashboardRef
    ]);
    const lastVideoTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DashboardAnimation.useFrame": (_state, delta)=>{
            const plane = planeRef.current;
            if (!plane) return;
            // 🧠 DESKTOP → VIDEO MODE
            if (!isMobileRef.current && videoRef.current && videoTextureRef.current) {
                const video = videoRef.current;
                if (video.readyState >= 2 && video.duration) {
                    const targetTime = progressRef.current * video.duration;
                    if (Math.abs(targetTime - lastVideoTimeRef.current) > 0.03) {
                        video.currentTime = targetTime;
                        lastVideoTimeRef.current = targetTime;
                    }
                }
                const mat = plane.material;
                if (mat.map !== videoTextureRef.current) {
                    mat.map = videoTextureRef.current;
                    mat.needsUpdate = true;
                }
                // ✅ ADD THIS
                progressRef.current = scrollRef.current;
                window.__SCROLL_PROGRESS__ = scrollRef.current;
                return; // 🚨 skip frame logic
            }
            const targetScroll = scrollRef.current;
            const gap = Math.abs(targetScroll - smoothScrollRef.current);
            const inCoinPhase = targetScroll > 0.9;
            const damping = inCoinPhase ? gap > 0.03 ? 20 : 14 : 4;
            smoothScrollRef.current += (targetScroll - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));
            const progress = smoothScrollRef.current;
            const exactFrame = progress * (MOBILE_TOTAL_FRAMES - 1);
            const frame = Math.floor(exactFrame);
            const nextFrame = frame + 1;
            const mix = exactFrame - frame;
            targetFrameRef.current = frame;
            if (frame !== lastFrameRef.current) {
                preloadNearbyFrames(frame);
                cleanupCounterRef.current += 1;
                if (cleanupCounterRef.current > 10) {
                    cleanupFarFrames(frame);
                    cleanupCounterRef.current = 0;
                }
                const tex1 = frameCache.current.get(frame);
                const tex2 = frameCache.current.get(nextFrame);
                if (tex1) {
                    const mat = plane.material;
                    mat.map = tex2 && mix >= 0.5 ? tex2 : tex1;
                    mat.needsUpdate = true;
                }
                lastFrameRef.current = frame;
            }
            progressRef.current = progress;
            window.__SCROLL_PROGRESS__ = progress;
        }
    }["DashboardAnimation.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: uiGroup,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0,
                    0.05
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            -0.015
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                            args: [
                                0.5,
                                0.33,
                                0.03
                            ],
                            radius: 0.015,
                            smoothness: 4,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#111111",
                                roughness: 0.6,
                                metalness: 0.1
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 816,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardAnimation.tsx",
                            lineNumber: 815,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 814,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    0.47,
                                    0.29
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                color: "#000"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        ref: planeRef,
                        position: [
                            0,
                            0,
                            0.001
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    0.47,
                                    0.29
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 826,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                toneMapped: false
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoinAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                progressRef: progressRef,
                dashboardRef: dashboardRef
            }, void 0, false, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardAnimation.tsx",
        lineNumber: 812,
        columnNumber: 5
    }, this);
}
_s(DashboardAnimation, "TdR1XE3V3kiLHSMjs7mvt2ZhWNY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = DashboardAnimation;
var _c;
__turbopack_context__.k.register(_c, "DashboardAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/DashboardAnimation.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundedBox",
    ()=>RoundedBox,
    "RoundedBoxGeometry",
    ()=>RoundedBoxGeometry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$BufferGeometryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/utils/BufferGeometryUtils.js [app-client] (ecmascript)");
;
;
;
;
const eps = 0.00001;
function createShape(width, height, radius0) {
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    const radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    return shape;
}
const RoundedBox = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function RoundedBox({ args: [width = 1, height = 1, depth = 1] = [], radius = 0.05, steps = 1, smoothness = 4, bevelSegments = 4, creaseAngle = 0.4, children, ...rest }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref
    }, rest), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RoundedBoxGeometry, {
        args: [
            width,
            height,
            depth
        ],
        radius: radius,
        steps: steps,
        smoothness: smoothness,
        bevelSegments: bevelSegments,
        creaseAngle: creaseAngle
    }), children);
});
const RoundedBoxGeometry = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function RoundedBoxGeometry({ args: [width = 1, height = 1, depth = 1] = [], radius = 0.05, steps = 1, smoothness = 4, bevelSegments = 4, creaseAngle = 0.4, ...rest }, ref) {
    const shape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RoundedBoxGeometry.RoundedBoxGeometry.useMemo[shape]": ()=>createShape(width, height, radius)
    }["RoundedBoxGeometry.RoundedBoxGeometry.useMemo[shape]"], [
        width,
        height,
        radius
    ]);
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RoundedBoxGeometry.RoundedBoxGeometry.useMemo[params]": ()=>({
                depth: depth - radius * 2,
                bevelEnabled: true,
                bevelSegments: bevelSegments * 2,
                steps,
                bevelSize: radius - eps,
                bevelThickness: radius,
                curveSegments: smoothness
            })
    }["RoundedBoxGeometry.RoundedBoxGeometry.useMemo[params]"], [
        depth,
        radius,
        smoothness,
        bevelSegments,
        steps
    ]);
    const geomRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "RoundedBoxGeometry.RoundedBoxGeometry.useLayoutEffect": ()=>{
            if (geomRef.current) {
                geomRef.current.center();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$BufferGeometryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCreasedNormals"])(geomRef.current, creaseAngle);
            }
        }
    }["RoundedBoxGeometry.RoundedBoxGeometry.useLayoutEffect"], [
        shape,
        params,
        creaseAngle
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "RoundedBoxGeometry.RoundedBoxGeometry.useImperativeHandle": ()=>geomRef.current
    }["RoundedBoxGeometry.RoundedBoxGeometry.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("extrudeGeometry", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: geomRef,
        args: [
            shape,
            params
        ]
    }, rest));
});
;
}),
]);

//# sourceMappingURL=_6981e273._.js.map