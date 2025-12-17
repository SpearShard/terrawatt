module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage
function Navbar() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Pulse");
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // --- Scroll Detection ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // --- State Initialization & URL Sync (THE FIX) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Check for stored intention after a redirect
        const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
        if (storedActive) {
            setActive(storedActive);
            // Clear the key immediately so the state doesn't persist on refresh
            localStorage.removeItem(ACTIVE_NAV_KEY);
            return; // Stop here, use the stored state
        }
        // 2. Standard URL Sync (if no stored intention)
        if (pathname === "/") {
            // Only default to Pulse if no other special tab is currently active
            if (active !== "TeraaCharge" && active !== "TeraaMart") {
                setActive("Pulse");
            }
        } else if (pathname.includes("investors")) {
            setActive("Investors & Partners");
        } else if (pathname.includes("insights")) {
            setActive("Insights");
        } else if (pathname.includes("connect")) {
            setActive("Connect");
        }
    }, [
        pathname
    ]); // active is no longer a dependency here for the initial load fix
    const navItems = [
        {
            name: "Pulse",
            href: "/"
        },
        {
            name: "TeraaCharge",
            href: "/"
        },
        {
            name: "TeraaMart",
            href: "/teraamart"
        },
        {
            name: "Investors & Partners",
            href: "/investors-and-partners"
        },
        {
            name: "Insights",
            href: "/insights"
        },
        {
            name: "Connect",
            href: "/connect",
            isButton: true
        }
    ];
    // Function to handle custom routing and setting state
    const handleCustomNavigation = (itemName)=>{
        const isOnPulse = window.location.pathname === "/";
        if (itemName === "TeraaCharge") {
            setActive("TeraaCharge");
            if (!isOnPulse) {
                // Save the intention before redirecting
                localStorage.setItem(ACTIVE_NAV_KEY, "TeraaCharge");
                localStorage.setItem("TW_action", "go_charge");
                window.location.href = "/";
            } else {
                // Already on Pulse → trigger animation
                window.dispatchEvent(new CustomEvent("scrollToFrame804"));
            }
            return true; // Navigation handled
        }
        if (itemName === "TeraaMart") {
            setActive("TeraaMart");
            // if (!isOnPulse) {
            //   localStorage.setItem(ACTIVE_NAV_KEY, "TeraaMart");
            //   localStorage.setItem("TW_action", "go_mart");
            //   window.location.href = "/";
            // } else {
            //   localStorage.setItem("TW_action", "go_mart");
            //   window.dispatchEvent(new Event("triggerVideoJump"));
            // }
            window.location.href = "/teraamart";
            return true;
        }
        return false; // Not a custom route
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "py-6 bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "justify-center w-fit mx-auto flex items-center px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        onClick: ()=>setActive("Pulse"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/teraawatt.svg",
                            alt: "TeraaWatt Logo",
                            width: 125,
                            height: 45,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8 text-white font-normal relative",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "relative px-2 py-1 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400 group-hover:text-white"}`,
                                        onClick: (e)=>{
                                            const handled = handleCustomNavigation(item.name);
                                            if (handled) {
                                                e.preventDefault();
                                            } else {
                                                // Standard Navigation
                                                setActive(item.name);
                                            }
                                        },
                                        children: !item.isButton ? item.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/Contact_page/connect.svg",
                                            alt: "Connect",
                                            width: 130,
                                            height: 48,
                                            className: `transition duration-300 ${active === "Connect" ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : "opacity-80 hover:opacity-100"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "navbar-indicator",
                                        className: "absolute inset-0 z-10 rounded-full",
                                        style: {
                                            // Subtle glassy background gradient
                                            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                            // Subtle cyan bottom glow for activation
                                            boxShadow: '0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)'
                                        },
                                        transition: {
                                            type: "spring",
                                            bounce: 0.2,
                                            stiffness: 100,
                                            damping: 10
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, this),
                                    !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300    group-hover:opacity-100 group-hover:bg-white/5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ScrollingCoin.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// function createRealisticCoin() {
//   /* --- normal map --- */
//   const normalMap = new THREE.TextureLoader().load("/bump.png");
//   normalMap.colorSpace = THREE.SRGBColorSpace;
//   /* --- geometry with ridges --- */
//   const radius = 0.012;
//   const thickness = 0.0025;
//   const radialSegments = 96;
//   const geo = new THREE.CylinderGeometry(
//     radius,
//     radius,
//     thickness,
//     radialSegments,
//     1,
//     false
//   );
//   const pos = geo.attributes.position;
//   for (let i = 0; i < pos.count; i++) {
//     const y = pos.getY(i);
//     const isSide = Math.abs(y) < thickness * 0.49;
//     if (isSide) {
//       const x = pos.getX(i);
//       const z = pos.getZ(i);
//       const angle = Math.atan2(z, x);
//       const ridge = Math.sin(angle * 120) * 0.0003;
//       pos.setXYZ(
//         i,
//         x + ridge * (x / radius),
//         y,
//         z + ridge * (z / radius)
//       );
//     }
//   }
//   pos.needsUpdate = true;
//   geo.computeVertexNormals();
//   /* --- materials --- */
//   const matSide = new THREE.MeshStandardMaterial({
//     color: 0xD29508,
//     metalness: 1.0,
//     roughness: 0.22,
//     emissive: new THREE.Color(0xD29508),
//     emissiveIntensity: 0.5,
//   });
//   const matFace = new THREE.MeshStandardMaterial({
//     color: 0xD29508,
//     metalness: 1.0,
//     roughness: 0.18,
//     normalMap,
//     normalScale: new THREE.Vector2(1.3, 1.3),
//     emissive: new THREE.Color(0xD29508),
//     emissiveIntensity: 0.5,
//   });
//   return new THREE.Mesh(geo, [matSide, matFace, matFace]);
// }
// export default function VideoCoin({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const meshRef = useRef<THREE.Group>(null!);
//   // Tweak these values to control the animation exactly how you want
//   const CONFIG = {
//     // When does the coin animation start & finish? (0–1 scroll progress)
//     startProgress: 0.0,
//     endProgress: 0.12,
//     // Starting position & scale (when scroll = 0)
//     start: {
//       z: 3,       // How close to your face (higher = closer)
//       y: -0.1,       // Vertical offset at start
//       x: -0.04,       // Vertical offset at start
//       scale: 3.8,   // How HUGE it appears at the beginning
//     },
//     // Final position & scale (when coin lands on phone)
//     end: {
//       z: 0.01,      // Final depth (0 = on phone screen, 0.01 = slightly in front)
//       x: 0.2,
//       y: 0.4,       // Final vertical position
//       scale: 0.45,  // Final size on phone
//     },
//     // Spin speed
//     spinY: 4,
//     spinX: 1.8,
//   };
//   useFrame((_, delta) => {
//     const mesh = meshRef.current;
//     const p = progressRef.current;
//     // Always spin
//     mesh.rotation.y += delta * CONFIG.spinY;
//     mesh.rotation.x += delta * CONFIG.spinX;
//     // Only animate during our defined window
//     if (p >= CONFIG.startProgress && p <= CONFIG.endProgress) {
//       const localProgress = (p - CONFIG.startProgress) / (CONFIG.endProgress - CONFIG.startProgress);
//       const t = THREE.MathUtils.clamp(localProgress, 0, 1);
//       const ease = THREE.MathUtils.smoothstep(t, 0, 1); // buttery smooth
//       mesh.visible = true;
//       // Interpolate position
//       mesh.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
//       mesh.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
//       mesh.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);
//       // Interpolate scale
//       const scale = THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease);
//       mesh.scale.set(scale, scale, scale);
//     }
//     // After animation ends → lock in final state (or hide)
//     else if (p > CONFIG.endProgress) {
//       mesh.visible = false; // change to false if coin should disappear
//       mesh.position.z = CONFIG.end.z;
//       mesh.position.y = CONFIG.end.y;
//       mesh.scale.set(CONFIG.end.scale, CONFIG.end.scale, CONFIG.end.scale);
//     }
//     // Before animation starts → completely hidden
//     else {
//       mesh.visible = false;
//     }
//   });
//   return (
//     <group ref={meshRef}>
//       {/* Main golden coin */}
//       {/* <mesh castShadow receiveShadow>
//         <cylinderGeometry args={[0.12, 0.12, 0.022, 72]} />
//         <meshStandardMaterial
//           color="#ffdd33"
//           metalness={1}
//           roughness={0.08}
//           envMapIntensity={3}
//         />
//       </mesh> */}
//       <primitive object={(() => {
//         const m = createRealisticCoin();
//         m.castShadow = true;
//         m.receiveShadow = true;
//         return m;
//       })()} />
//       {/* Optional glowing ring (uncomment opacity to see) */}
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[0.125, 0.15, 48]} />
//         <meshBasicMaterial color="#05DF72" opacity={0} transparent />
//       </mesh>
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <ringGeometry args={[0.118, 0.122, 64]} />
//         <meshBasicMaterial color="#ffffff" opacity={0} transparent />
//       </mesh>
//     </group>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>VideoCoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
"use client";
;
;
;
;
function createRealisticCoin() {
    /* --- geometry with ridges --- */ const radius = 0.012;
    const thickness = 0.0025;
    const radialSegments = 96;
    const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](radius, radius, thickness, radialSegments, 1, false);
    const pos = geo.attributes.position;
    for(let i = 0; i < pos.count; i++){
        const y = pos.getY(i);
        const isSide = Math.abs(y) < thickness * 0.49;
        if (isSide) {
            const x = pos.getX(i);
            const z = pos.getZ(i);
            const angle = Math.atan2(z, x);
            const ridge = Math.sin(angle * 120) * 0.0003;
            pos.setXYZ(i, x + ridge * (x / radius), y, z + ridge * (z / radius));
        }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    /* --- materials (NO normal map) --- */ const matSide = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xD29508,
        metalness: 1.0,
        roughness: 0.22,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xD29508),
        emissiveIntensity: 0.5
    });
    const matFace = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xD29508,
        metalness: 1.0,
        roughness: 0.18,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xD29508),
        emissiveIntensity: 0.5
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, [
        matSide,
        matFace,
        matFace
    ]);
}
function VideoCoin({ progressRef }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Tweak these values to control the animation exactly how you want
    const CONFIG = {
        // When does the coin animation start & finish? (0–1 scroll progress)
        startProgress: 0.0,
        endProgress: 0.12,
        // Starting position & scale (when scroll = 0)
        start: {
            z: 2.46,
            y: 0,
            x: 0,
            scale: 3.8
        },
        // Final position & scale (when coin lands on phone)
        end: {
            z: 0.01,
            x: 0.2,
            y: 0.4,
            scale: 0.45
        },
        // Spin speed
        spinY: 4,
        spinX: 1.8
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        const mesh = meshRef.current;
        const p = progressRef.current;
        // BEFORE animation starts — hide coin
        if (p < CONFIG.startProgress) {
            mesh.visible = false;
            return;
        }
        // FIRST MOMENT — coin appears facing you, no spin
        if (p >= CONFIG.startProgress && p < CONFIG.startProgress + 0.02) {
            mesh.visible = true;
            mesh.rotation.set(Math.PI / 2, 0, 0); // rotate 90° so the face points forward
            mesh.position.set(CONFIG.start.x, CONFIG.start.y, CONFIG.start.z);
            mesh.scale.set(CONFIG.start.scale, CONFIG.start.scale, CONFIG.start.scale);
            return;
        }
        // If inside animation range → spin + move toward phone
        if (p >= CONFIG.startProgress && p <= CONFIG.endProgress) {
            const local = (p - CONFIG.startProgress) / (CONFIG.endProgress - CONFIG.startProgress);
            const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp(local, 0, 1);
            const ease = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
            mesh.visible = true;
            // Start spinning only AFTER leaving the face
            if (p > CONFIG.startProgress + 0.02) {
                mesh.rotation.y += delta * CONFIG.spinY;
                mesh.rotation.x += delta * CONFIG.spinX;
            }
            // Move
            mesh.position.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.z, CONFIG.end.z, ease);
            mesh.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.y, CONFIG.end.y, ease);
            mesh.position.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.x, CONFIG.end.x, ease);
            // Scale
            const s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.scale, CONFIG.end.scale, ease);
            mesh.scale.set(s, s, s);
            return;
        }
        // AFTER animation ends → lock final position or hide
        if (p > CONFIG.endProgress) {
            mesh.visible = false;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: meshRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: (()=>{
                    const m = createRealisticCoin();
                    m.castShadow = true;
                    m.receiveShadow = true;
                    return m;
                })()
            }, void 0, false, {
                fileName: "[project]/components/ScrollingCoin.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.125,
                            0.15,
                            48
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ScrollingCoin.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#05DF72",
                        opacity: 0,
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/components/ScrollingCoin.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ScrollingCoin.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.118,
                            0.122,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ScrollingCoin.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffffff",
                        opacity: 0,
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/components/ScrollingCoin.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ScrollingCoin.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScrollingCoin.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/video.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";
// gsap.registerPlugin(ScrollTrigger);
// export default function Video() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fgCanvasRef = useRef<HTMLCanvasElement>(null);
//   const bgCanvasRef = useRef<HTMLCanvasElement>(null);
//   const fgFrameRef = useRef(0);
//   const bgFrameRef = useRef(0);
//   const scrollProgressRef = useRef(0);
//   const [loaded, setLoaded] = useState(false);
//   const fgImagesRef = useRef<HTMLImageElement[]>([]);
//   const bgImagesRef = useRef<HTMLImageElement[]>([]);
//   const FG_FRAMES = 810;
//   const BG_FRAMES = 191;
//   const START_BG_AT = 130;
//   const CANVAS_W = 1080;
//   const CANVAS_H = 1920;
//   // Load all images
//   useEffect(() => {
//     let loadedCount = 0;
//     const total = FG_FRAMES + BG_FRAMES;
//     const loadImage = (url: string, arr: HTMLImageElement[]) => {
//       const img = new Image();
//       img.crossOrigin = "anonymous";
//       img.src = url;
//       img.onload = img.onerror = () => {
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       arr.push(img);
//     };
//     for (let i = 1; i <= FG_FRAMES; i++) {
//       loadImage(
//         `https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`,
//         fgImagesRef.current
//       );
//     }
//     for (let i = 1; i <= BG_FRAMES; i++) {
//       loadImage(
//         `https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`,
//         bgImagesRef.current
//       );
//     }
//   }, []);
//   // MAIN ANIMATION — FIXED & PERFECT
//   useEffect(() => {
//     if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;
//     const fgCanvas = fgCanvasRef.current;
//     const bgCanvas = bgCanvasRef.current;
//     const fgCtx = fgCanvas.getContext("2d")!;
//     const bgCtx = bgCanvas.getContext("2d")!;
//     fgCanvas.width = bgCanvas.width = CANVAS_W;
//     fgCanvas.height = bgCanvas.height = CANVAS_H;
//     const render = () => {
//       // FOREGROUND (phone)
//       const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001)); // +0.0001 forces update
//       const fgImg = fgImagesRef.current[fgIndex];
//       if (fgImg?.complete) {
//         fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//       // BACKGROUND (tickets)
//       const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
//       const bgImg = bgImagesRef.current[bgIndex];
//       if (bgImg?.complete) {
//         bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//     };
//     // THE ONLY SCROLLTRIGGER YOU NEED
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=800%",
//       scrub: 1,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         // THIS LINE WAS BROKEN — NOW FIXED
//         fgFrameRef.current = progress * (FG_FRAMES - 1);  // ← This was the bug!
//         if (fgFrameRef.current >= START_BG_AT) {
//           const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
//           bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
//         } else {
//           bgFrameRef.current = 0;
//         }
//         scrollProgressRef.current = progress;
//         render(); // ← Call render every update
//       },
//     });
//     render();
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [loaded]);
// useEffect(() => {
//   if (!loaded) return;
//   const jumpToTerramart = () => {
//     const targetFrame = 589;
//     const progress = targetFrame / (FG_FRAMES - 1);
//     const st = ScrollTrigger.getAll().find(
//       (t) => t.trigger === containerRef.current
//     );
//     if (!st) return;
//     const scrollStart = st.start as number;
//     const scrollEnd = st.end as number;
//     window.scrollTo({
//       top: scrollStart + progress * (scrollEnd - scrollStart),
//       behavior: "smooth",
//     });
//   };
//   // 🔹 Case 1: Coming from another page (Connect / Investors / Insights)
//   const action = localStorage.getItem("TW_action");
//   if (action === "go_mart") {
//     requestAnimationFrame(jumpToTerramart);
//     localStorage.removeItem("TW_action");
//   }
//   // 🔹 Case 2: Already on Pulse / TerraCharge
//   window.addEventListener("triggerVideoJump", jumpToTerramart);
//   return () => {
//     window.removeEventListener("triggerVideoJump", jumpToTerramart);
//   };
// }, [loaded]);
//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
//         <canvas
//           ref={bgCanvasRef}
//           className="absolute inset-0 w-full h-full object-fit"
//         />
//         <canvas
//           ref={fgCanvasRef}
//           className="relative z-10 max-w-full h-auto max-h-screen pointer-events-none"
//         />
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 2.5], near:0.001, far:1000, fov: 50 }}>
//             {/* <ambientLight intensity={3} />
//             <directionalLight position={[5, 5, 5]} intensity={4} />
//             <pointLight position={[0, 1, 3]} intensity={3} /> */}
//             <ScrollingCoin progressRef={scrollProgressRef} />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>Video
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollingCoin$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollingCoin.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Video() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fgCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fgFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bgFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Critical: store the ScrollTrigger instance
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fgImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bgImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const FG_FRAMES = 810;
    const BG_FRAMES = 191;
    const START_BG_AT = 130;
    const CANVAS_W = 1080;
    const CANVAS_H = 1920;
    const targetProgress = 589 / (FG_FRAMES - 1);
    // Load all images with batching to prevent network congestion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let loadedCount = 0;
        const total = FG_FRAMES + BG_FRAMES;
        const batchSize = 50; // Load 50 images at a time
        const delayBetweenBatches = 100; // ms
        const loadImage = (url, arr)=>{
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = url;
            img.onload = img.onerror = ()=>{
                loadedCount++;
                if (loadedCount >= total) setLoaded(true);
            };
            arr.push(img);
        };
        const loadBatch = (start, end, urls, arr)=>{
            for(let i = start; i < Math.min(end, urls.length); i++){
                loadImage(urls[i], arr);
            }
        };
        const fgUrls = [];
        for(let i = 1; i <= FG_FRAMES; i++){
            fgUrls.push(`https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`);
        }
        const bgUrls = [];
        for(let i = 1; i <= BG_FRAMES; i++){
            bgUrls.push(`https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
        }
        let fgBatchIndex = 0;
        let bgBatchIndex = 0;
        const loadNextBatch = ()=>{
            if (fgBatchIndex < fgUrls.length) {
                const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
                loadBatch(fgBatchIndex, end, fgUrls, fgImagesRef.current);
                fgBatchIndex = end;
            }
            if (bgBatchIndex < bgUrls.length) {
                const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
                loadBatch(bgBatchIndex, end, bgUrls, bgImagesRef.current);
                bgBatchIndex = end;
            }
            if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length) {
                setTimeout(loadNextBatch, delayBetweenBatches);
            }
        };
        loadNextBatch();
    }, []);
    // Main scroll-triggered animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;
        const fgCanvas = fgCanvasRef.current;
        const bgCanvas = bgCanvasRef.current;
        const fgCtx = fgCanvas.getContext("2d");
        const bgCtx = bgCanvas.getContext("2d");
        fgCanvas.width = bgCanvas.width = CANVAS_W;
        fgCanvas.height = bgCanvas.height = CANVAS_H;
        const render = ()=>{
            const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001));
            const fgImg = fgImagesRef.current[fgIndex];
            if (fgImg?.complete) {
                fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
                fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
            }
            const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
            const bgImg = bgImagesRef.current[bgIndex];
            if (bgImg?.complete) {
                bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
                bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
            }
        };
        // Kill any old trigger
        if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
        }
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self)=>{
                const progress = self.progress;
                fgFrameRef.current = progress * (FG_FRAMES - 1);
                if (fgFrameRef.current >= START_BG_AT) {
                    const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
                    bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
                } else {
                    bgFrameRef.current = 0;
                }
                scrollProgressRef.current = progress;
                render();
            }
        });
        scrollTriggerRef.current = st;
        render();
        return ()=>{
            st.kill();
            scrollTriggerRef.current = null;
        };
    }, [
        loaded
    ]);
    // Handle navigation from other pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const action = localStorage.getItem("TW_action");
        if (action === "go_mart") {
            localStorage.removeItem("TW_action");
            const waitAndJump = ()=>{
                if (scrollTriggerRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    const st = scrollTriggerRef.current;
                    const scrollPos = st.start + targetProgress * (st.end - st.start);
                    st.scroll(scrollPos);
                } else {
                    requestAnimationFrame(waitAndJump);
                }
            };
            waitAndJump();
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loaded) return;
        const handleTrigger = ()=>{
            window.scrollTo(0, 0);
            const st = scrollTriggerRef.current;
            if (st) {
                const scrollPos = st.start + targetProgress * (st.end - st.start);
                window.scrollTo({
                    top: scrollPos
                });
            }
        };
        window.addEventListener("triggerVideoJump", handleTrigger);
        return ()=>{
            window.removeEventListener("triggerVideoJump", handleTrigger);
        };
    }, [
        loaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: bgCanvasRef,
                    className: "absolute inset-0 w-full h-full object-fit"
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: fgCanvasRef,
                    className: "relative z-10 max-w-full h-auto max-h-screen pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-20 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                        camera: {
                            position: [
                                0,
                                0,
                                2.5
                            ],
                            near: 0.001,
                            far: 1000,
                            fov: 50
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollingCoin$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            progressRef: scrollProgressRef
                        }, void 0, false, {
                            fileName: "[project]/components/video.tsx",
                            lineNumber: 417,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/video.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/video.tsx",
            lineNumber: 404,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/video.tsx",
        lineNumber: 403,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/teraamart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeraaMartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/video.tsx [app-ssr] (ecmascript)"); // We'll create this
"use client";
;
;
;
function TeraaMartPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/teraamart/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/teraamart/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/app/teraamart/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__87093f1e._.js.map