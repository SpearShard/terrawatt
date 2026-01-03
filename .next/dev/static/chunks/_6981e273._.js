(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CoinAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// export default function CoinAnimation({
//   progressRef,
//   dashboardRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
// }) {
//   const coinRef = useRef<THREE.Mesh | null>(null);
//   const initialPositionRef = useRef<THREE.Vector3>(new THREE.Vector3());
//   // Create and attach coin
//   useEffect(() => {
//     const dashboardMesh = dashboardRef?.current?.[0];
//     if (!dashboardMesh) return;
//     /* --------------------------------------------------
//        LOAD NORMAL MAP (your logo / bump.png)
//     ----------------------------------------------------- */
//     const normalMap = new THREE.TextureLoader().load("/bump.png");
//     normalMap.colorSpace = THREE.SRGBColorSpace;
//     /* --------------------------------------------------
//        LOAD METAL ENV MAP (for shiny gold reflections)
//     ----------------------------------------------------- */
//     const envMap = new THREE.TextureLoader().load(
//       "https://threejs.org/examples/textures/229/brushed_metal.jpg"
//     );
//     envMap.mapping = THREE.EquirectangularReflectionMapping;
//     /* --------------------------------------------------
//        RIDGED SIDE GEOMETRY (ONLY SIDE GETS RIDGES)
//     ----------------------------------------------------- */
//     const radius = 0.012;
//     const thickness = 0.0025;
//     const radialSegments = 96;
//     const geo = new THREE.CylinderGeometry(
//       radius,
//       radius,
//       thickness,
//       radialSegments,
//       1,
//       false
//     );
//     const pos = geo.attributes.position;
//     for (let i = 0; i < pos.count; i++) {
//       const y = pos.getY(i);
//       // Only modify SIDE vertices
//       const isSide = Math.abs(y) < thickness * 0.49;
//       if (isSide) {
//         const x = pos.getX(i);
//         const z = pos.getZ(i);
//         const angle = Math.atan2(z, x);
//         const ridge = Math.sin(angle * 120) * 0.0003;
//         pos.setXYZ(
//           i,
//           x + ridge * (x / radius),
//           y,
//           z + ridge * (z / radius)
//         );
//       }
//     }
//     pos.needsUpdate = true;
//     geo.computeVertexNormals();
//     /* ---------------------------
//        GOLD SELF-LIT MATERIALS (#DC9608)
//     ----------------------------*/
//     const matSide = new THREE.MeshStandardMaterial({
//       color: 0xd29508, // your gold color
//       metalness: 1.0,
//       roughness: 0.22,
//       emissive: new THREE.Color(0xd29508), // glowing gold
//       emissiveIntensity: 0.5, // strong glow
//     });
//     const matFace = new THREE.MeshStandardMaterial({
//       color: 0xd29508, // same color on faces
//       metalness: 1.0,
//       roughness: 0.18,
//       normalMap,
//       normalScale: new THREE.Vector2(1.3, 1.3),
//       emissive: new THREE.Color(0xd29508),
//       emissiveIntensity: 0.5, // faces glow slightly more for a premium look
//     });
//     /* --------------------------------------------------
//        MESH (3 MATERIALS: SIDE, TOP, BOTTOM)
//     ----------------------------------------------------- */
//     const coin = new THREE.Mesh(geo, [matSide, matFace, matFace]);
//     coin.visible = false;
//     coin.castShadow = true;
//     coin.receiveShadow = true;
//     /* --------------------------------------------------
//        POSITIONING (same as before)
//     ----------------------------------------------------- */
//     const lcdMesh = dashboardMesh.getObjectByName("LCDs_LCDs.0_0");
//     if (lcdMesh) {
//       const p = new THREE.Vector3();
//       lcdMesh.getWorldPosition(p);
//       dashboardMesh.worldToLocal(p);
//       coin.position.copy(p);
//       coin.position.y += 0.055;
//     } else {
//       coin.position.set(0, 0.32, 0.18);
//     }
//     // Store initial position
//     initialPositionRef.current.copy(coin.position);
//     dashboardMesh.add(coin);
//     coinRef.current = coin;
//     return () => {
//       coin.removeFromParent();
//     };
//   }, [dashboardRef]);
//   // Animate coin
//   useFrame((_, delta) => {
//     if (!coinRef.current) return;
//     const coin = coinRef.current;
//     const progress = progressRef.current;
//     // Spin normally
//     if (progress < 0.97) {
//       coin.rotation.y += delta * 5;
//       coin.rotation.x += delta * 2;
//     }
//     // Animate only at end (like your original - starts at 0.9)
//     if (progress > 0.9) {
//       const t = (progress - 0.9) / 0.1;
//       const eased = THREE.MathUtils.smoothstep(t, 0, 1);
//       coin.visible = true;
//       const isMobile = window.innerWidth < 768;
//       // Move toward camera (your original motion)
//       coin.position.y = 0.7 - eased * 0.7;
//       coin.position.z = 0.165;
//       if(isMobile){
//         coin.position.y = 0.25 - eased * 0.7;
//         coin.position.z = 0.235;
//       }
//       // Optional: Scale up as it approaches
//       const scale = 1 + eased * 1.5;
//       coin.scale.setScalar(scale);
//     } else {
//       coin.visible = false;
//       coin.scale.setScalar(1);
//     }
//     // When close to camera, stop spinning, face user, and fade to black
//     if (progress > 0.97) {
//       // Stop rotation and face camera
//       coin.rotation.set(0, 0, 0);
//       // Fade to black (0.97 to 1.0)
//       const blackProgress = Math.min((progress - 0.97) / 0.03, 1); // Normalize 0.97-1.0 to 0-1
//       const goldColor = new THREE.Color(0xd29508);
//       const blackColor = new THREE.Color(0x000000);
//       const fadedColor = goldColor.clone().lerp(blackColor, blackProgress);
//       // Update all materials
//       const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
//       materials.forEach((mat) => {
//         if (mat instanceof THREE.MeshStandardMaterial) {
//           mat.color.copy(fadedColor);
//           mat.emissive.copy(fadedColor);
//           mat.emissiveIntensity = 0.5 * (1 - blackProgress);
//         }
//       });
//     } else if (progress > 0.9) {
//       // Reset colors to gold during animation
//       const materials = Array.isArray(coin.material) ? coin.material : [coin.material];
//       materials.forEach((mat) => {
//         if (mat instanceof THREE.MeshStandardMaterial) {
//           mat.color.setHex(0xd29508);
//           mat.emissive.setHex(0xd29508);
//           mat.emissiveIntensity = 0.5;
//         }
//       });
//     }
//   });
//   return null;
// }
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
    /* --------------------------------------------------
     CREATE + ATTACH COIN
  -------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoinAnimation.useEffect": ()=>{
            const dashboardMesh = dashboardRef?.current?.[0];
            if (!dashboardMesh) return;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const frontMap = loader.load("/croppedfront.png");
            const backMap = loader.load("/croppedback.png");
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
            // Ridged edge
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
            // 🔐 Store original values
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
    /* --------------------------------------------------
     ANIMATION
  -------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CoinAnimation.useFrame": (_, delta)=>{
            if (!coinRef.current) return;
            const coin = coinRef.current;
            const progress = progressRef.current;
            const mats = coin.material;
            /* 🌀 Spin until VERY late */ if (progress < 0.985) {
                coin.rotation.y += delta * 5;
                coin.rotation.x += delta * 2;
            }
            /* 🚀 Approach camera */ if (progress > 0.9) {
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.9) / 0.1, 0, 1);
                const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
                coin.visible = true;
                const isMobile = window.innerWidth < 768;
                coin.position.y = isMobile ? 0.40 - e * 0.7 : 0.7 - e * 0.7;
                coin.position.z = isMobile ? 0.170 : 0.165;
                coin.scale.setScalar(1 + e * 1.5);
                if (progress > 0.96) {
                    const faceT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.96) / 0.04, 0, 1);
                    coin.quaternion.slerp(camera.quaternion, faceT * 0.2);
                }
            } else {
                coin.visible = false;
                coin.scale.setScalar(1);
            }
            /* 🌑 DEFINITIVE BLACKOUT VERY CLOSE */ if (progress > 0.985) {
                const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.985) / 0.015, 0, 1);
                const darkness = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(1, 0.0, d); // ← goes almost black
                mats.forEach({
                    "CoinAnimation.useFrame": (mat, i)=>{
                        mat.color.copy(baseColorsRef.current[i]).multiplyScalar(darkness);
                        mat.emissiveIntensity = baseEmissiveRef.current[i] * (1 - d);
                        mat.envMapIntensity = baseEnvRef.current[i] * (1 - d);
                    }
                }["CoinAnimation.useFrame"]);
            } else {
                // 🔁 Restore fully when scrolling back
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
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const [textures, setTextures] = useState<THREE.Texture[]>([]);
//   const totalFrames = 732;
//   // Load dashboard frames
//   useEffect(() => {
//     const loadTextures = async () => {
//       const loader = new THREE.TextureLoader();
//       const promises: Promise<THREE.Texture>[] = [];
//       for (let i = 1; i <= totalFrames; i++) {
//         const fileNumber = i.toString().padStart(5, "0");
//         const url = `/dashsmaller/frame_${fileNumber}.jpg`;
//         const promise = new Promise<THREE.Texture>((resolve) => {
//           const tex = loader.load(url, () => resolve(tex));
//           tex.colorSpace = THREE.SRGBColorSpace;
//           tex.minFilter = THREE.LinearFilter;
//           tex.magFilter = THREE.LinearFilter;
//           tex.generateMipmaps = true;
//         });
//         promises.push(promise);
//       }
//       const frames = await Promise.all(promises);
//       setTextures(frames);
//     };
//     loadTextures();
//     return () => {
//       // Dispose textures on unmount
//       textures.forEach((t) => t.dispose());
//     };
//   }, []);
//   // Scroll tracking
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
//   // Attach to dashboard
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
//   // Main animation: display frame based on scroll progress
//   useFrame((_state, delta) => {
//     if (!textures.length || !planeRef.current) return;
//     const targetProgress = scrollRef.current;
//     const lerpFactor = Math.min(delta * 10, 1);
//     smoothScrollRef.current += (targetProgress - smoothScrollRef.current) * lerpFactor;
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
//   return (
//     <group ref={uiGroup}>
//       {/* TESLA-STYLE SIMPLE TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Outer Tablet Shape */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.50, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
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
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }
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
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const [textures, setTextures] = useState<THREE.Texture[]>([]);
//   const totalFrames = 732;
//   // Load dashboard frames
// useEffect(() => {
//   const loader = new THREE.TextureLoader();
//   let mounted = true;
//   const INITIAL_FRAMES = 60; // 👈 shows almost instantly
//   const loadedFrames: THREE.Texture[] = [];
//   const loadFrame = (i: number) =>
//     new Promise<THREE.Texture>((resolve) => {
//       const fileNumber = i.toString().padStart(5, "0");
//       const url = `/dashsmaller/dashwebp/frame_${fileNumber}.webp`;
//       const tex = loader.load(url, () => resolve(tex));
//       tex.colorSpace = THREE.SRGBColorSpace;
//       // 🔥 performance critical
//       tex.generateMipmaps = false;
//       tex.minFilter = THREE.LinearFilter;
//       tex.magFilter = THREE.LinearFilter;
//     });
//   (async () => {
//     // 1️⃣ Load first frames FAST
//     for (let i = 1; i <= INITIAL_FRAMES; i++) {
//       const tex = await loadFrame(i);
//       if (!mounted) return;
//       loadedFrames.push(tex);
//     }
//     setTextures([...loadedFrames]); // 👈 SCREEN APPEARS HERE
//     // 2️⃣ Load rest quietly in background
//     for (let i = INITIAL_FRAMES + 1; i <= totalFrames; i++) {
//       const tex = await loadFrame(i);
//       if (!mounted) return;
//       loadedFrames.push(tex);
//       setTextures([...loadedFrames]); // progressively improves
//     }
//   })();
//   return () => {
//     mounted = false;
//     loadedFrames.forEach((t) => t.dispose());
//   };
// }, []);
//   // Scroll tracking
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
//   // Attach to dashboard
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
//   // Main animation: display frame based on scroll progress
//   useFrame((_state, delta) => {
//     if (!textures.length || !planeRef.current) return;
//     const targetProgress = scrollRef.current;
//     const lerpFactor = Math.min(delta * 10, 1);
//     smoothScrollRef.current += (targetProgress - smoothScrollRef.current) * lerpFactor;
//     const frameIndex = Math.min(
//   textures.length - 1,
//   Math.floor(smoothScrollRef.current * totalFrames)
// );
//     progressRef.current = smoothScrollRef.current;
//     const currentTexture = textures[frameIndex];
//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;
//     if (mat.map !== currentTexture) {
//       mat.map = currentTexture;
//       mat.needsUpdate = true;
//     }
//   });
//   return (
//     <group ref={uiGroup}>
//       {/* TESLA-STYLE SIMPLE TABLET */}
//       <group position={[0, 0, 0.05]}>
//         {/* Outer Tablet Shape */}
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.50, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
//         </mesh>
//         {/* Screen Area */}
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial
//   color="#000"
//   transparent
//   opacity={textures.length ? 1 : 0}
// />
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
//       <CoinAnimation progressRef={progressRef} dashboardRef={dashboardRef} />
//     </group>
//   );
// }
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { RoundedBox } from "@react-three/drei";
// import CoinAnimation from "./CoinAnimation";
// const TOTAL_FRAMES = 732;
// const COLS = 8;
// const ROWS = 9;
// const FRAMES_PER_SHEET = COLS * ROWS;
// export default function DashboardAnimation({
//   dashboardRef,
//   progressRef,
// }: {
//   dashboardRef: React.MutableRefObject<THREE.Mesh[] | undefined>;
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const uiGroup = useRef<THREE.Group>(new THREE.Group());
//   const planeRef = useRef<THREE.Mesh | null>(null);
//   const scrollRef = useRef(0);
//   const smoothScrollRef = useRef(0);
//   const rafRef = useRef<number | null>(null);
//   const [sheets, setSheets] = useState<THREE.Texture[]>([]);
//   /* ---------------- LOAD SPRITE SHEETS ---------------- */
//   useEffect(() => {
//     const loader = new THREE.TextureLoader();
//     const sheetCount = Math.ceil(TOTAL_FRAMES / FRAMES_PER_SHEET);
//     const loaded: THREE.Texture[] = [];
//     let mounted = true;
//     (async () => {
//       for (let i = 0; i < sheetCount; i++) {
//         const tex = await new Promise<THREE.Texture>((resolve) => {
//           const t = loader.load(
//             `/dashsmaller/dashwebp/dashsprites/sheet_${i.toString().padStart(2, "0")}.webp`,
//             () => resolve(t)
//           );
//           t.colorSpace = THREE.SRGBColorSpace;
//           t.generateMipmaps = false;
//           t.minFilter = THREE.LinearFilter;
//           t.magFilter = THREE.LinearFilter;
//           t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
//         });
//         if (!mounted) return;
//         loaded.push(tex);
//         setSheets([...loaded]); // progressive load
//       }
//     })();
//     return () => {
//       mounted = false;
//       loaded.forEach((t) => t.dispose());
//     };
//   }, []);
//   /* ---------------- SCROLL TRACKING ---------------- */
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (ticking) return;
//       ticking = true;
//       rafRef.current = requestAnimationFrame(() => {
//         const scrollContainer = document.querySelector(
//           "#scroll-container"
//         ) as HTMLElement | null;
//         const startHeight = scrollContainer
//           ? scrollContainer.offsetHeight * 0.7
//           : window.innerHeight * 2;
//         const endHeight = scrollContainer
//           ? scrollContainer.offsetHeight - window.innerHeight
//           : document.body.scrollHeight - window.innerHeight;
//         const rawScroll = Math.max(0, window.scrollY - startHeight);
//         const maxScroll = Math.max(1, endHeight - startHeight);
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
//   /* ---------------- ATTACH TO DASHBOARD ---------------- */
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
//   /* ---------------- MAIN ANIMATION ---------------- */
//   useFrame((_state, delta) => {
//     if (!sheets.length || !planeRef.current) return;
//     const lerp = Math.min(delta * 10, 1);
//     smoothScrollRef.current +=
//       (scrollRef.current - smoothScrollRef.current) * lerp;
//     progressRef.current = smoothScrollRef.current;
//     const frame = Math.min(
//       TOTAL_FRAMES - 1,
//       Math.floor(smoothScrollRef.current * TOTAL_FRAMES)
//     );
//     const sheetIndex = Math.floor(frame / FRAMES_PER_SHEET);
//     const localFrame = frame % FRAMES_PER_SHEET;
//     const col = localFrame % COLS;
//     const row = Math.floor(localFrame / COLS);
//     const tex = sheets[sheetIndex];
//     if (!tex) return;
//     tex.repeat.set(1 / COLS, 1 / ROWS);
//     tex.offset.set(col / COLS, 1 - (row + 1) / ROWS);
//     const mat = planeRef.current.material as THREE.MeshBasicMaterial;
//     if (mat.map !== tex) {
//       mat.map = tex;
//       mat.needsUpdate = true;
//     }
//   });
//   return (
//     <group ref={uiGroup}>
//       {/* TABLET */}
//       <group position={[0, 0, 0.05]}>
//         <mesh position={[0, 0, -0.015]}>
//           <RoundedBox args={[0.5, 0.33, 0.03]} radius={0.015} smoothness={4}>
//             <meshStandardMaterial
//               color="#111111"
//               roughness={0.6}
//               metalness={0.1}
//             />
//           </RoundedBox>
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <planeGeometry args={[0.47, 0.29]} />
//           <meshBasicMaterial color="#000" />
//         </mesh>
//         {/* SPRITE SHEET DASHBOARD */}
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
    // Scroll state
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Video
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoTextureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------------- VIDEO SETUP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            const video = document.createElement("video");
            video.src = "/dashsmaller/dashboardframe.mp4";
            video.muted = true;
            video.loop = false;
            video.playsInline = true;
            video.preload = "auto";
            video.crossOrigin = "anonymous"; // if needed for CORS
            // Start paused — we'll control time manually
            video.pause();
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTexture"](video);
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.generateMipmaps = false;
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            videoRef.current = video;
            videoTextureRef.current = texture;
            // Optional: ensure it's loaded
            video.load();
            return ({
                "DashboardAnimation.useEffect": ()=>{
                    video.pause();
                    texture.dispose();
                }
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    /* ---------------- SCROLL TRACKING ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "DashboardAnimation.useEffect.handleScroll": ()=>{
                    if (ticking) return;
                    ticking = true;
                    rafRef.current = requestAnimationFrame({
                        "DashboardAnimation.useEffect.handleScroll": ()=>{
                            const scrollContainer = document.querySelector("#scroll-container");
                            const startHeight = scrollContainer ? scrollContainer.offsetHeight * 0.7 : window.innerHeight * 2;
                            const endHeight = scrollContainer ? scrollContainer.offsetHeight - window.innerHeight : document.body.scrollHeight - window.innerHeight;
                            const rawScroll = Math.max(0, window.scrollY - startHeight);
                            const maxScroll = Math.max(1, endHeight - startHeight);
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
    /* ---------------- ATTACH TO DASHBOARD ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    /* ---------------- MAIN ANIMATION LOOP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DashboardAnimation.useFrame": (_state, delta)=>{
            const video = videoRef.current;
            const texture = videoTextureRef.current;
            const plane = planeRef.current;
            if (!video || !texture || !plane || !video.duration || isNaN(video.duration)) return;
            // Smooth scroll progress (adjust 12–15 for feel — higher = snappier but still smooth)
            const lerpFactor = Math.min(delta * 12, 1);
            smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * lerpFactor;
            // Direct scrubbing: set exact frame based on scroll
            const targetTime = smoothScrollRef.current * video.duration;
            if (Math.abs(video.currentTime - targetTime) > 0.016) {
                video.currentTime = targetTime;
            }
            // Sync coin animation progress perfectly
            progressRef.current = smoothScrollRef.current;
            // Ensure video texture updates every frame during scrubbing
            texture.needsUpdate = true;
            // Assign texture once (safe check)
            const mat = plane.material;
            if (mat.map !== texture) {
                mat.map = texture;
                mat.needsUpdate = true;
            }
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
                                lineNumber: 713,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardAnimation.tsx",
                            lineNumber: 712,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 711,
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
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                color: "#000"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 718,
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
                                lineNumber: 725,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                toneMapped: false
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 726,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 709,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoinAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                progressRef: progressRef,
                dashboardRef: dashboardRef
            }, void 0, false, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 731,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardAnimation.tsx",
        lineNumber: 707,
        columnNumber: 5
    }, this);
}
_s(DashboardAnimation, "RZRLf7HumgVM+ZPIkeSTvJwauXs=", false, function() {
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