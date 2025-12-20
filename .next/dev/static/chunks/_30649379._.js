(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage
function Navbar() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pulse");
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // --- Scroll Detection ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // --- State Initialization & URL Sync (THE FIX) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
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
        }
    }["Navbar.useEffect"], [
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
            href: "/"
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
            if (!isOnPulse) {
                localStorage.setItem(ACTIVE_NAV_KEY, "TeraaMart");
                localStorage.setItem("TW_action", "go_mart");
                window.location.href = "/";
            } else {
                localStorage.setItem("TW_action", "go_mart");
                window.dispatchEvent(new Event("triggerVideoJump"));
            }
            // window.location.href = "/teraamart";
            return true;
        }
        return false; // Not a custom route
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "py-6 bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "justify-center w-fit mx-auto flex items-center px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        onClick: ()=>setActive("Pulse"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8 text-white font-normal relative",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "relative px-2 py-1 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        children: !item.isButton ? item.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Navbar, "EfjU9GUtnrUW3kbCDAJHShdrXpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/investors-and-partners/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// type FrameFolder = "investpartner";
// const FRAME_SETS: Record<FrameFolder, number> = {
//   investpartner: 776,
// };
// const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
//   { id: "investpartner", fade: "bottom" }
// ];
// function FrameScroller({
//   folder,
//   frameCount,
//   fadeType,
// }: {
//   folder: FrameFolder;
//   frameCount: number;
//   fadeType: "top" | "bottom" | "both";
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const loadedRef = useRef(false);
//   const frameRef = useRef(0);
//   // Load frames
//   useEffect(() => {
//     let loaded = 0;
//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `https://ik.imagekit.io/m064cyjlx/${folder}/frame_${String(
//         i
//       ).padStart(5, "0")}.jpg`;
//       img.onload = () => {
//         loaded++;
//         if (loaded === frameCount) {
//           loadedRef.current = true;
//         }
//       };
//       imagesRef.current.push(img);
//     }
//   }, [folder, frameCount]);
//   // Scroll → frame animation WITH PINNING
//   useEffect(() => {
//     const section = containerRef.current;
//     const canvas = canvasRef.current;
//     if (!section || !canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = 1080;
//     canvas.height = 1920;
//     const render = () => {
//       const index = Math.floor(frameRef.current);
//       const img = imagesRef.current[index];
//       if (!img) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };
//     const ST = ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: `+=${frameCount * 6}px`, // 👈 stay longer the more frames there are
//       scrub: 1,
//       pin: true,
//       onUpdate: (self) => {
//         if (!loadedRef.current) return;
//         const progress = self.progress; // 0 → 1
//         frameRef.current = progress * (frameCount - 1);
//         render();
//       },
//     });
//     return () => ST.kill();
//   }, [frameCount]);
//   // Fade mask
//   return (
//     <div ref={containerRef} className="w-full">
//       <canvas
//         ref={canvasRef}
//         className={`w-full h-[100vh] block `}
//       />
//     </div>
//   );
// }
// export default function SimpleVideo() {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full  flex flex-col overflow-hidden bg-[#04111E]">
//         {sections.map((s) => (
//           <div key={s.id} className="w-full ">
//             <FrameScroller
//               folder={s.id}
//               frameCount={FRAME_SETS[s.id]}
//               fadeType={s.fade}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>InvestorsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const FRAME_SETS = {
    investpartner: 776
};
const sections = [
    {
        id: "investpartner",
        fade: "bottom"
    }
];
function FrameScroller({ folder, frameCount }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Canvas render function
    const render = (forcedFrame)=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const index = forcedFrame ?? Math.floor(frameRef.current);
        const img = imagesRef.current[index];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (img && img.complete) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
            // Fallback background while loading
            ctx.fillStyle = "#04111E";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    };
    // Load all frames
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FrameScroller.useEffect": ()=>{
            const images = [];
            let loadedCount = 0;
            for(let i = 1; i <= frameCount; i++){
                const img = new Image();
                img.src = `https://ik.imagekit.io/yv4cjaya8/${folder}/frame_${String(i).padStart(5, "0")}.jpg`;
                // img.src = `/frames/${folder}/frame_${String(i).padStart(5, "0")}.jpg`;
                img.onload = ({
                    "FrameScroller.useEffect": ()=>{
                        loadedCount++;
                        images[i - 1] = img; // Store in correct order
                        if (loadedCount === frameCount) {
                            imagesRef.current = images;
                            loadedRef.current = true;
                            render(0); // Force first frame when fully loaded
                        }
                    }
                })["FrameScroller.useEffect"];
                img.onerror = ({
                    "FrameScroller.useEffect": ()=>{
                        console.error(`Failed to load frame ${i}`);
                    }
                })["FrameScroller.useEffect"];
            }
            // Try to render frame 0 immediately (in case cached)
            render(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FrameScroller.useEffect"], [
        folder,
        frameCount
    ]);
    // ScrollTrigger setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FrameScroller.useEffect": ()=>{
            if (!containerRef.current || !canvasRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            canvas.width = 1080;
            canvas.height = 1920;
            // Kill any existing ScrollTriggers to prevent duplicates/ghosts
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                "FrameScroller.useEffect": (st)=>st.kill()
            }["FrameScroller.useEffect"]);
            // Initial render
            render(0);
            // Delay trigger creation to let layout & images settle
            const initTimeout = setTimeout({
                "FrameScroller.useEffect.initTimeout": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${frameCount * 6}px`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "FrameScroller.useEffect.initTimeout.st": (self)=>{
                                if (!loadedRef.current) {
                                    frameRef.current = 0;
                                    render(0);
                                    return;
                                }
                                frameRef.current = self.progress * (frameCount - 1);
                                render();
                            }
                        }["FrameScroller.useEffect.initTimeout.st"],
                        onRefresh: {
                            "FrameScroller.useEffect.initTimeout.st": ()=>render()
                        }["FrameScroller.useEffect.initTimeout.st"]
                    });
                    // Cleanup on unmount
                    return ({
                        "FrameScroller.useEffect.initTimeout": ()=>{
                            st.kill();
                        }
                    })["FrameScroller.useEffect.initTimeout"];
                }
            }["FrameScroller.useEffect.initTimeout"], 100); // Small delay helps with Next.js navigation quirks
            return ({
                "FrameScroller.useEffect": ()=>{
                    clearTimeout(initTimeout);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "FrameScroller.useEffect": (st)=>st.kill()
                    }["FrameScroller.useEffect"]);
                }
            })["FrameScroller.useEffect"];
        }
    }["FrameScroller.useEffect"], [
        frameCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-screen block sticky top-0"
        }, void 0, false, {
            fileName: "[project]/app/investors-and-partners/page.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/investors-and-partners/page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s(FrameScroller, "m/BEgA2TqYXKfVNI8lmsgpUJxms=");
_c = FrameScroller;
function InvestorsPage() {
    _s1();
    // Handle scroll restoration properly for client-side navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvestorsPage.useEffect": ()=>{
            // Allow browser to restore scroll on back/forward, but force top on direct visit
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "auto";
            }
            // Always start at top when entering this page
            window.scrollTo(0, 0);
            // Refresh ScrollTrigger if page becomes visible again (e.g. tab switch)
            const handleVisibility = {
                "InvestorsPage.useEffect.handleVisibility": ()=>{
                    if (!document.hidden) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    }
                }
            }["InvestorsPage.useEffect.handleVisibility"];
            document.addEventListener("visibilitychange", handleVisibility);
            return ({
                "InvestorsPage.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibility);
                }
            })["InvestorsPage.useEffect"];
        }
    }["InvestorsPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col overflow-hidden bg-[#04111E]",
                children: sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameScroller, {
                            folder: s.id,
                            frameCount: FRAME_SETS[s.id]
                        }, void 0, false, {
                            fileName: "[project]/app/investors-and-partners/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    }, s.id, false, {
                        fileName: "[project]/app/investors-and-partners/page.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(InvestorsPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = InvestorsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "FrameScroller");
__turbopack_context__.k.register(_c1, "InvestorsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_30649379._.js.map