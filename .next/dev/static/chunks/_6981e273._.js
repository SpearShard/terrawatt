(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CoinAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useFrame, useThree } from "@react-three/fiber";
// export default function CoinAnimation({
//   progressRef,
//   dashboardRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
//   dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>;
// }) {
//   const coinRef = useRef<THREE.Mesh | null>(null);
//   const baseColorsRef = useRef<THREE.Color[]>([]);
//   const baseEmissiveRef = useRef<number[]>([]);
//   const baseEnvRef = useRef<number[]>([]);
//   const { camera } = useThree();
//   const APPROACH_START = 0.9;
//   const APPROACH_END = 0.965;
//   const FACE_START = 0.94;
//   const BLACKOUT_START = 0.972;
//   const BLACKOUT_END = 0.995;
//   useEffect(() => {
//     const dashboardMesh = dashboardRef?.current?.[0];
//     if (!dashboardMesh) return;
//     const loader = new THREE.TextureLoader();
//     const frontMap = loader.load("/croppedback.png");
//     const backMap = loader.load("/coins.png");
//     frontMap.colorSpace = THREE.SRGBColorSpace;
//     backMap.colorSpace = THREE.SRGBColorSpace;
//     frontMap.flipY = false;
//     backMap.flipY = false;
//     frontMap.center.set(0.5, 0.5);
//     frontMap.rotation = Math.PI / 2;
//     backMap.center.set(0.5, 0.5);
//     backMap.rotation = Math.PI / 2;
//     frontMap.wrapS = THREE.RepeatWrapping;
//     frontMap.repeat.x = -1;
//     backMap.wrapS = THREE.RepeatWrapping;
//     backMap.repeat.x = -1;
//     const envMap = loader.load(
//       "https://threejs.org/examples/textures/229/brushed_metal.jpg"
//     );
//     envMap.mapping = THREE.EquirectangularReflectionMapping;
//     const radius = 0.012;
//     const thickness = 0.0025;
//     const geo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1);
//     const pos = geo.attributes.position;
//     for (let i = 0; i < pos.count; i++) {
//       const y = pos.getY(i);
//       if (Math.abs(y) < thickness * 0.49) {
//         const x = pos.getX(i);
//         const z = pos.getZ(i);
//         const a = Math.atan2(z, x);
//         const ridge = Math.sin(a * 120) * 0.0003;
//         pos.setXYZ(i, x + ridge * (x / radius), y, z + ridge * (z / radius));
//       }
//     }
//     pos.needsUpdate = true;
//     geo.computeVertexNormals();
//     const gold = 0xd29508;
//     const matSide = new THREE.MeshStandardMaterial({
//       color: gold,
//       metalness: 1,
//       roughness: 0.22,
//       emissive: new THREE.Color(gold),
//       emissiveIntensity: 0.45,
//       envMap,
//       envMapIntensity: 1.5,
//     });
//     const matFront = new THREE.MeshStandardMaterial({
//       map: frontMap,
//       color: 0xffffff,
//       metalness: 0,
//       roughness: 0.35,
//       transparent: true,
//       alphaTest: 0.5,
//     });
//     const matBack = new THREE.MeshStandardMaterial({
//       map: backMap,
//       color: 0xffffff,
//       metalness: 0,
//       roughness: 0.4,
//       transparent: true,
//       alphaTest: 0.5,
//     });
//     const coin = new THREE.Mesh(geo, [matSide, matFront, matBack]);
//     coin.visible = false;
//     const mats = coin.material as THREE.MeshStandardMaterial[];
//     baseColorsRef.current = mats.map((m) => m.color.clone());
//     baseEmissiveRef.current = mats.map((m) => m.emissiveIntensity);
//     baseEnvRef.current = mats.map((m) => m.envMapIntensity ?? 1);
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
//     dashboardMesh.add(coin);
//     coinRef.current = coin;
//     return () => {
//       coin.removeFromParent();
//       geo.dispose();
//       matSide.dispose();
//       matFront.dispose();
//       matBack.dispose();
//       frontMap.dispose();
//       backMap.dispose();
//       envMap.dispose();
//     };
//   }, [dashboardRef]);
//   useFrame((_, delta) => {
//     if (!coinRef.current) return;
//     const coin = coinRef.current;
//     const progress = progressRef.current;
//     const mats = coin.material as THREE.MeshStandardMaterial[];
//     if (progress < APPROACH_START) {
//       coin.rotation.y += delta * 5;
//       coin.rotation.x += delta * 2;
//     }
//     if (progress > APPROACH_START) {
//       const t = THREE.MathUtils.clamp(
//         (progress - APPROACH_START) / (APPROACH_END - APPROACH_START),
//         0,
//         1
//       );
//       const e = THREE.MathUtils.smoothstep(t, 0, 1);
//       coin.visible = true;
//       const isMobile = window.innerWidth < 768;
//       coin.position.y = isMobile ? 0.63 - e * 0.7 : 0.58 - e * 0.7;
//       coin.position.z = isMobile ? 0.196 : 0.165;
//       coin.scale.setScalar(1 + e * 1.5);
//       if (progress > FACE_START) {
//         const faceT = THREE.MathUtils.clamp(
//           (progress - FACE_START) / (APPROACH_END - FACE_START),
//           0,
//           1
//         );
//         coin.quaternion.slerp(camera.quaternion, faceT * 0.2);
//       }
//     } else {
//       coin.visible = false;
//       coin.scale.setScalar(1);
//     }
//     if (progress > BLACKOUT_START) {
//       const d = THREE.MathUtils.clamp(
//         (progress - BLACKOUT_START) / (BLACKOUT_END - BLACKOUT_START),
//         0,
//         1
//       );
//       const darkness = THREE.MathUtils.lerp(1, 0.0, d);
//       mats.forEach((mat, i) => {
//         mat.color.copy(baseColorsRef.current[i]).multiplyScalar(darkness);
//         mat.emissiveIntensity = baseEmissiveRef.current[i] * (1 - d);
//         mat.envMapIntensity = baseEnvRef.current[i] * (1 - d);
//       });
//     } else {
//       mats.forEach((mat, i) => {
//         mat.color.copy(baseColorsRef.current[i]);
//         mat.emissiveIntensity = baseEmissiveRef.current[i];
//         mat.envMapIntensity = baseEnvRef.current[i];
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
            /* 🌀 Spin until VERY late */ if (progress < 0.965) {
                coin.rotation.y += delta * 5;
                coin.rotation.x += delta * 2;
            }
            /* 🚀 Approach camera */ if (progress > 0.9) {
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((progress - 0.9) / 0.1, 0, 1);
                const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
                coin.visible = true;
                const isMobile = window.innerWidth < 768;
                coin.position.y = isMobile ? 0.63 - e * 0.7 : 0.58 - e * 0.7;
                coin.position.z = isMobile ? 0.196 : 0.165;
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
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAnimation.useEffect": ()=>{
            const check = {
                "DashboardAnimation.useEffect.check": ()=>setIsMobile(window.innerWidth < 640)
            }["DashboardAnimation.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "DashboardAnimation.useEffect": ()=>window.removeEventListener("resize", check)
            })["DashboardAnimation.useEffect"];
        }
    }["DashboardAnimation.useEffect"], []);
    // Scroll state
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Video (Desktop only)
    // const videoRef = useRef<HTMLVideoElement | null>(null);
    // const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
    // Mobile frames
    const frameCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const loadingFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const MOBILE_TOTAL_FRAMES = 1143;
    const lastFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const cleanupCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* ---------------- VIDEO SETUP (DESKTOP ONLY) ---------------- */ // useEffect(() => {
    //   if (isMobile) return;
    //   const video = document.createElement("video");
    //   video.src = "/dashsmaller/scrubbed-dash.webm";
    //   video.muted = true;
    //   video.loop = false;
    //   video.playsInline = true;
    //   video.preload = "auto";
    //   video.crossOrigin = "anonymous";
    //   video.pause();
    //   const texture = new THREE.VideoTexture(video);
    //   texture.colorSpace = THREE.SRGBColorSpace;
    //   texture.generateMipmaps = false;
    //   texture.minFilter = THREE.LinearFilter;
    //   texture.magFilter = THREE.LinearFilter;
    //   videoRef.current = video;
    //   videoTextureRef.current = texture;
    //   video.load();
    //   return () => {
    //     video.pause();
    //     texture.dispose();
    //   };
    // }, [isMobile]);
    /* ---------------- FRAME LOADER (MOBILE) ---------------- */ const loadFrame = (index)=>{
        if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;
        loadingFrames.current.add(index);
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
        loader.load(`/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`, (texture)=>{
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.generateMipmaps = false;
            texture.anisotropy = 1;
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            loadingFrames.current.delete(index);
            frameCache.current.set(index, texture);
        }, undefined, ()=>{
            loadingFrames.current.delete(index);
        });
    };
    const preloadNearbyFrames = (center)=>{
        const BUFFER_AHEAD = 40;
        const BUFFER_BEHIND = 20;
        const start = Math.max(0, center - BUFFER_BEHIND);
        const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + BUFFER_AHEAD);
        for(let i = start; i <= end; i++){
            loadFrame(i);
        }
    };
    const cleanupFarFrames = (center)=>{
        const MAX_DISTANCE = 180;
        frameCache.current.forEach((_, key)=>{
            if (Math.abs(key - center) > MAX_DISTANCE) {
                const tex = frameCache.current.get(key);
                tex?.dispose();
                frameCache.current.delete(key);
            }
        });
    };
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
                            const startHeight = scrollContainer ? scrollContainer.offsetHeight * 0.1 : window.innerHeight * 2;
                            const endHeight = scrollContainer ? scrollContainer.offsetHeight - window.innerHeight : document.body.scrollHeight - window.innerHeight;
                            const rawScroll = Math.max(0, window.scrollY - startHeight);
                            const MIN_SCROLL_PX = window.innerHeight * 3;
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
            for(let i = 0; i < 60; i++){
                loadFrame(i);
            }
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
            const plane = planeRef.current;
            if (!plane) return;
            // Smooth scroll
            // Cinematic scroll smoothing (delta corrected)
            const damping = 8;
            smoothScrollRef.current += (scrollRef.current - smoothScrollRef.current) * (1 - Math.exp(-damping * delta));
            const progress = smoothScrollRef.current;
            /* ================= MOBILE = RAW FRAME SCRUB ================= */ const eased = progress * progress * (3 - 2 * progress); // smoothstep
            const frame = Math.round(eased * (MOBILE_TOTAL_FRAMES - 1));
            if (frame !== lastFrameRef.current) {
                preloadNearbyFrames(frame);
                cleanupCounterRef.current++;
                if (cleanupCounterRef.current > 10) {
                    cleanupFarFrames(frame);
                    cleanupCounterRef.current = 0;
                }
                const texture = frameCache.current.get(frame);
                if (texture) {
                    const mat = plane.material;
                    if (mat.map !== texture) {
                        mat.map = texture;
                        mat.needsUpdate = true;
                    }
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
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardAnimation.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 239,
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
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                color: "#000"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 245,
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
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                toneMapped: false
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardAnimation.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardAnimation.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoinAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                progressRef: progressRef,
                dashboardRef: dashboardRef
            }, void 0, false, {
                fileName: "[project]/components/DashboardAnimation.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardAnimation.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
} // "use client";
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
 //   // Scroll state
 //   const scrollRef = useRef(0);
 //   const smoothScrollRef = useRef(0);
 //   const rafRef = useRef<number | null>(null);
 //   // Video (Desktop only)
 //   // const videoRef = useRef<HTMLVideoElement | null>(null);
 //   // const videoTextureRef = useRef<THREE.VideoTexture | null>(null);
 //   // Mobile frames
 //   const frameCache = useRef<Map<number, THREE.Texture>>(new Map());
 //   const loadingFrames = useRef<Set<number>>(new Set());
 //   const MOBILE_TOTAL_FRAMES = 1143;
 //   const lastFrameRef = useRef(0);
 //   const cleanupCounterRef = useRef(0);
 //   const lastRenderRef = useRef(0);
 //   const textureLoader = useRef(new THREE.TextureLoader());
 //   /* ---------------- FRAME LOADER (MOBILE) ---------------- */
 //   const loadFrame = (index: number) => {
 //     if (frameCache.current.has(index) || loadingFrames.current.has(index)) return;
 //     loadingFrames.current.add(index);
 // textureLoader.current.load(      `/dashsmaller/dashframes_16-03-2026/frame_${String(index + 1).padStart(5, "0")}.webp`,
 //       (texture) => {
 //         texture.colorSpace = THREE.SRGBColorSpace;
 //         texture.generateMipmaps = false;
 //         texture.anisotropy = 1;
 //         texture.minFilter = THREE.LinearFilter;
 //         texture.magFilter = THREE.LinearFilter;
 //         loadingFrames.current.delete(index);
 //         frameCache.current.set(index, texture);
 //       },
 //       undefined,
 //       () => {
 //         loadingFrames.current.delete(index);
 //       }
 //     );
 //   };
 //   const preloadNearbyFrames = (center: number) => {
 //     const BUFFER_AHEAD = 10;
 //     const BUFFER_BEHIND = 6;
 //     const start = Math.max(0, center - BUFFER_BEHIND);
 //     const end = Math.min(MOBILE_TOTAL_FRAMES - 1, center + BUFFER_AHEAD);
 //     for (let i = start; i <= end; i++) {
 //       loadFrame(i);
 //     }
 //   };
 //   const cleanupFarFrames = (center: number) => {
 //     const MAX_DISTANCE = 70;
 //     frameCache.current.forEach((_, key) => {
 //       if (Math.abs(key - center) > MAX_DISTANCE) {
 //         const tex = frameCache.current.get(key);
 //         tex?.dispose();
 //         frameCache.current.delete(key);
 //       }
 //     });
 //   };
 //   /* ---------------- SCROLL TRACKING ---------------- */
 //   // useEffect(() => {
 //   //   let ticking = false;
 //   //   const handleScroll = () => {
 //   //     if (ticking) return;
 //   //     ticking = true;
 //   //     rafRef.current = requestAnimationFrame(() => {
 //   //       const scrollContainer = document.querySelector("#scroll-container") as HTMLElement | null;
 //   //       const startHeight = scrollContainer
 //   //         ? scrollContainer.offsetHeight * 0.1
 //   //         : window.innerHeight * 2;
 //   //       const endHeight = scrollContainer
 //   //         ? scrollContainer.offsetHeight - window.innerHeight
 //   //         : document.body.scrollHeight - window.innerHeight;
 //   //       const rawScroll = Math.max(0, window.scrollY - startHeight);
 //   //       const MIN_SCROLL_PX = window.innerHeight * 6;
 //   //       const maxScroll = Math.max(
 //   //         MIN_SCROLL_PX,
 //   //         endHeight - startHeight
 //   //       );
 //   //       scrollRef.current = Math.max(
 //   //         0,
 //   //         Math.min(1, rawScroll / maxScroll)
 //   //       );
 //   //       ticking = false;
 //   //     });
 //   //   };
 //   //   window.addEventListener("scroll", handleScroll, { passive: true });
 //   //   return () => {
 //   //     window.removeEventListener("scroll", handleScroll);
 //   //     if (rafRef.current) cancelAnimationFrame(rafRef.current);
 //   //   };
 //   // }, []);
 //   useEffect(() => {
 //     for (let i = 0; i < 30; i++) {
 //       loadFrame(i);
 //     }
 //   }, []);
 //   /* ---------------- ATTACH TO DASHBOARD ---------------- */
 //   useEffect(() => {
 //   const dashboardMesh = dashboardRef.current?.[0];
 //   if (!dashboardMesh) return;
 //   dashboardMesh.add(uiGroup.current);
 //   uiGroup.current.position.set(0, 0.7, 0.17);
 //   uiGroup.current.rotation.set(1.35, 0, 0);
 //   // 🔧 Sync scroll position when entering from video section
 //   const scrollRatio = window.scrollY / document.body.scrollHeight;
 //   scrollRef.current = scrollRatio;
 //   smoothScrollRef.current = scrollRatio;
 //   progressRef.current = scrollRatio;
 //   return () => {
 //     dashboardMesh.remove(uiGroup.current);
 //   };
 // }, [dashboardRef]);
 //   /* ---------------- MAIN ANIMATION LOOP ---------------- */
 //   useFrame((state, delta) => {
 //     const plane = planeRef.current;
 //     if (!plane) return;
 //     const time = state.clock.elapsedTime * 1000;
 // if (time - lastRenderRef.current < 16) return;
 // lastRenderRef.current = time;
 //     // Smooth scroll
 //    // Cinematic scroll smoothing (delta corrected)
 // const damping = 1 - Math.exp(-delta * 18);const sourceProgress =
 //   (window as any).__SCROLL_PROGRESS__ ?? scrollRef.current;
 // smoothScrollRef.current +=
 //   (sourceProgress - smoothScrollRef.current) * damping;
 // const MAX_DELTA = 0.03;
 // const previous = progressRef.current;
 // let progress =
 //   (window as any).__SCROLL_PROGRESS__ ?? smoothScrollRef.current;
 // const diff = progress - previous;
 // // allow big jumps (like nav clicks)
 // if (Math.abs(diff) < 0.3 && Math.abs(diff) > MAX_DELTA) {
 //   progress = previous + Math.sign(diff) * MAX_DELTA;
 // }  
 // /* ================= MOBILE = RAW FRAME SCRUB ================= */
 //     const eased = progress * progress * (3 - 2 * progress); // smoothstep
 // const targetFrame = Math.round(eased * (MOBILE_TOTAL_FRAMES - 1));
 // let frame = targetFrame;
 // // only limit frame speed for small scroll changes
 // if (Math.abs(targetFrame - lastFrameRef.current) < 30) {
 //   const frameStep = 4;
 //   frame = lastFrameRef.current;
 //   if (targetFrame > frame) frame = Math.min(frame + frameStep, targetFrame);
 //   if (targetFrame < frame) frame = Math.max(frame - frameStep, targetFrame);
 // }
 // if (Math.abs(frame - lastFrameRef.current) >= 1) {
 //   preloadNearbyFrames(frame);
 //   cleanupCounterRef.current++;
 //   if (cleanupCounterRef.current > 10) {
 //     cleanupFarFrames(frame);
 //     cleanupCounterRef.current = 0;
 //   }
 //   const texture =
 //   frameCache.current.get(frame) ??
 //   frameCache.current.get(0);
 //   if (texture) {
 //     const mat = plane.material as THREE.MeshBasicMaterial;
 //     if (mat.map !== texture) {
 //       mat.map = texture;
 //       mat.needsUpdate = true;
 //     }
 //   }
 //   lastFrameRef.current = frame;
 // }
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
_s(DashboardAnimation, "C1omgJ/n79ijsGzEMZF2VzfSN+M=", false, function() {
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