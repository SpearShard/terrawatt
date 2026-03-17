(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect, useCallback } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";
// export default function Navbar() {
//   const navRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileMenuOpen]);
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   useEffect(() => {
//     if (!navRef.current || window.innerWidth < 768) return;
//     const nav = navRef.current;
//     let lastScroll = window.scrollY;
//     const onScroll = () => {
//       const current = window.scrollY;
//       if (current > lastScroll && current > 80) {
//         gsap.to(nav, { y: -120, duration: 0.4, ease: "power2.out" });
//       }
//       lastScroll = current;
//     };
//     const show = () =>
//       gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });
//     const topZone = document.createElement("div");
//     Object.assign(topZone.style, {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "20px",
//       zIndex: "40",
//     });
//     document.body.appendChild(topZone);
//     window.addEventListener("scroll", onScroll);
//     nav.addEventListener("mouseenter", show);
//     topZone.addEventListener("mouseenter", show);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       nav.removeEventListener("mouseenter", show);
//       topZone.remove();
//     };
//   }, []);
//   useEffect(() => {
//     if (pathname === "/") {
//       const stored = localStorage.getItem(ACTIVE_NAV_KEY);
//       if (stored) {
//         setActive(stored);
//         localStorage.removeItem(ACTIVE_NAV_KEY);
//         return;
//       }
//       const action = localStorage.getItem("TW_action");
//       if (action === "go_charge") setActive("TeraaCharge");
//       else if (action === "go_mart") setActive("TeraaMart");
//       else setActive("Pulse");
//       return;
//     }
//     if (pathname.includes("investors")) setActive("Investors & Partners");
//     else if (pathname.includes("insights")) setActive("Insights");
//     else if (pathname.includes("connect")) setActive("Connect");
//   }, [pathname]);
//   useEffect(() => {
//     if (pathname !== "/") return;
//     const sync = () => {
//       const v = localStorage.getItem(ACTIVE_NAV_KEY);
//       if (v) setActive(v);
//     };
//     window.addEventListener("storage", sync);
//     return () => window.removeEventListener("storage", sync);
//   }, [pathname]);
//   const handleNavigation = useCallback((name: string) => {
//     setIsMobileMenuOpen(false);
//     const onHome = window.location.pathname === "/";
//     if (name === "TeraaCharge") {
//       setActive(name);
//       if (onHome) window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       else {
//         localStorage.setItem("TW_action", "go_charge");
//         window.location.href = "/";
//       }
//       return true;
//     }
//     if (name === "TeraaMart") {
//       setActive(name);
//       if (onHome) {
//         window.dispatchEvent(new Event("triggerVideoJump"));
//       } else {
//         localStorage.setItem("TW_action", "go_mart");
//         window.location.href = "/";
//       }
//       return true;
//     }
//     setActive(name);
//     return false;
//   }, []);
//   const navItems = [
//     { name: "Pulse", href: "/" },
//     { name: "TeraaCharge", href: "/", image: "/teraacharge.png", w: 90, h: 28 },
//     { name: "TeraaMart", href: "/", image: "/teraamartlogo.png", w: 80, h: 26 },
//     { name: "Investors & Partners", href: "/investors-and-partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Connect", href: "/connect", isButton: true },
//   ];
//   return (
//     <nav
//       ref={navRef}
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled || isMobileMenuOpen
//         ? "bg-black/90 backdrop-blur-xl shadow-lg"
//         : "py-6 bg-transparent"
//         }`}
//     >
//       <div className="flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10">
//         <Link href="/" onClick={() => handleNavigation("Pulse")}>
//           <Image
//             src="/teraawatt-white.svg"
//             alt="logo"
//             width={125}
//             height={45}
//             className="p-[1vw] mr-[1vw]"
//           />
//         </Link>
//         <button
//           className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
//           onClick={() => setIsMobileMenuOpen((v) => !v)}
//         >
//           <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
//                 }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
//                 }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
//                 }`}
//             />
//           </div>
//         </button>
//         <div className="hidden md:flex space-x-8 text-white">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={(e) => {
//                 if (handleNavigation(item.name)) e.preventDefault();
//               }}
//               className={`relative ${active === item.name ? "opacity-100" : "opacity-60"}`}
//             >
//               {item.image ? (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={item.w}
//                   height={item.h}
//                   className={`relative top-[6%] ${active === item.name ? "opacity-100" : "opacity-90"
//                     }`}
//                 />
//               ) : item.isButton ? (
//                 <Image src="/Contact_page/connect1.svg" alt="connect" width={70} height={48} />
//               ) : (
//                 item.name
//               )}
//               {!item.isButton && active === item.name && (
//                 <motion.div
//                   layoutId="navbar-indicator"
//                   transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
//                   className="absolute left-0 right-0 h-[2px] bg-red-500"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center pt-8 h-screen"
//           >
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 120, damping: 18 }}
//               className="w-full px-6 space-y-3"
//             >
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => {
//                     if (handleNavigation(item.name)) e.preventDefault();
//                   }}
//                 >
//                   <div
//                     className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "hover:bg-white/5"
//                       }`}
//                   >
//                     <span
//                       className={`relative inline-block text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"
//                         }`}
//                     >
//                       {!item.isButton ? item.name : "Connect"}
//                       {!item.isButton && active === item.name && (
//                         <motion.div
//                           layoutId="mobile-indicator"
//                           className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
//                         />
//                       )}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";
function Navbar() {
    _s();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pulse");
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isMobileMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setIsScrolled(window.scrollY > 20)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!navRef.current || window.innerWidth < 768) return;
            const nav = navRef.current;
            let lastScroll = window.scrollY;
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    const current = window.scrollY;
                    // scrolling down → hide
                    if (current > lastScroll && current > 80) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                            y: -120,
                            duration: 0.35,
                            ease: "power2.out"
                        });
                    } else if (current < lastScroll) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                            y: 0,
                            duration: 0.25,
                            ease: "power2.out"
                        });
                    }
                    lastScroll = current;
                }
            }["Navbar.useEffect.onScroll"];
            const show = {
                "Navbar.useEffect.show": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                        y: 0,
                        duration: 0.25,
                        ease: "power2.out"
                    })
            }["Navbar.useEffect.show"];
            const topZone = document.createElement("div");
            Object.assign(topZone.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "20px",
                zIndex: "40"
            });
            document.body.appendChild(topZone);
            window.addEventListener("scroll", onScroll);
            nav.addEventListener("mouseenter", show);
            topZone.addEventListener("mouseenter", show);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    nav.removeEventListener("mouseenter", show);
                    topZone.remove();
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (pathname === "/") {
                const stored = localStorage.getItem(ACTIVE_NAV_KEY);
                if (stored) {
                    setActive(stored);
                    localStorage.removeItem(ACTIVE_NAV_KEY);
                    return;
                }
                const action = localStorage.getItem("TW_action");
                if (action === "go_charge") setActive("TeraaCharge");
                else if (action === "go_mart") setActive("TeraaMart");
                else setActive("Pulse");
                return;
            }
            if (pathname.includes("investors")) setActive("Investors & Partners");
            else if (pathname.includes("insights")) setActive("Insights");
            else if (pathname.includes("connect")) setActive("Connect");
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (pathname !== "/") return;
            const sync = {
                "Navbar.useEffect.sync": ()=>{
                    const v = localStorage.getItem(ACTIVE_NAV_KEY);
                    if (v) setActive(v);
                }
            }["Navbar.useEffect.sync"];
            window.addEventListener("storage", sync);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("storage", sync)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const handleNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[handleNavigation]": (name)=>{
            setIsMobileMenuOpen(false);
            const onHome = window.location.pathname === "/";
            if (name === "TeraaCharge") {
                setActive(name);
                if (onHome) window.dispatchEvent(new CustomEvent("scrollToFrame804"));
                else {
                    localStorage.setItem("TW_action", "go_charge");
                    window.location.href = "/";
                }
                return true;
            }
            if (name === "TeraaMart") {
                setActive(name);
                if (onHome) {
                    window.dispatchEvent(new Event("triggerVideoJump"));
                } else {
                    localStorage.setItem("TW_action", "go_mart");
                    window.location.href = "/";
                }
                return true;
            }
            setActive(name);
            return false;
        }
    }["Navbar.useCallback[handleNavigation]"], []);
    const navItems = [
        {
            name: "Pulse",
            href: "/"
        },
        {
            name: "TeraaCharge",
            href: "/",
            image: "/teraacharge.png",
            w: 90,
            h: 28
        },
        {
            name: "TeraaMart",
            href: "/",
            image: "/teraamartlogo.png",
            w: 80,
            h: 26
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: `fixed top-0 left-0 w-full z-50 transition-all ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl shadow-lg" : "py-6 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        onClick: ()=>handleNavigation("Pulse"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/teraawatt-white.svg",
                            alt: "logo",
                            width: 125,
                            height: 45,
                            className: "p-[1vw] mr-[1vw]"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden relative z-50 w-10 h-10 flex items-center justify-center",
                        onClick: ()=>setIsMobileMenuOpen((v)=>!v),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 flex flex-col justify-center space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex space-x-8 text-white",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: (e)=>{
                                    if (handleNavigation(item.name)) e.preventDefault();
                                },
                                className: `relative ${active === item.name ? "opacity-100" : "opacity-60"}`,
                                children: [
                                    item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: item.name,
                                        width: item.w,
                                        height: item.h,
                                        className: `relative top-[6%] ${active === item.name ? "opacity-100" : "opacity-90"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, this) : item.isButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Contact_page/connect1.svg",
                                        alt: "connect",
                                        width: 70,
                                        height: 48
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this) : item.name,
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "navbar-indicator",
                                        transition: {
                                            type: "tween",
                                            duration: 0.25,
                                            ease: "easeOut"
                                        },
                                        className: "absolute left-0 right-0 h-[2px] bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 556,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center pt-8 h-screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 20,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 120,
                            damping: 18
                        },
                        className: "w-full px-6 space-y-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: (e)=>{
                                    if (handleNavigation(item.name)) e.preventDefault();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "hover:bg-white/5"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `relative inline-block text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                        children: [
                                            !item.isButton ? item.name : "Connect",
                                            !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "mobile-indicator",
                                                className: "absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 602,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 595,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 591,
                                    columnNumber: 19
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 584,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 576,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 569,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
}
_s(Navbar, "0lRvTdPAAjxhxEz1oSQtLYlWAkc=", false, function() {
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
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import { ChevronDown } from "lucide-react";
// export default function Footer() {
//   const [isComplianceOpen, setIsComplianceOpen] = useState(false);
//   const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const openDropdown = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setIsComplianceOpen(true);
//   };
//   const closeDropdownWithDelay = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setIsComplianceOpen(false);
//     }, 300); // ⏱️ adjust to taste (200–400ms feels best)
//   };
//   const closeDropdownImmediately = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setIsComplianceOpen(false);
//   };
//   return (
//     <footer className="bg-[#FFFFFF] lg:p-0 p-4 sm:p-6 md:p-[5vw] text-gray-800 ">
//       <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8">
//         {/* Logo */}
//         <div className=" relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center">
//           <Image
//             src="/teraawatt-black.svg"
//             alt="Teraawatt Logo"
//             fill
//             className="object-contain"
//           />
//         </div>
//         {/* Links */}
//         <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center md:justify-start text-base sm:text-lg mt-4 md:mt-0 lg:align-middle">
//           <Link href="/privacy-policy" className="hover:text-green-600 transition">
//             Privacy Policy
//           </Link>
//           <Link href="/terms" className="hover:text-green-600 transition">
//             Terms & Conditions
//           </Link>
//           {/* Compliance Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={openDropdown}
//             onMouseLeave={closeDropdownWithDelay}
//           >
//             <button
//               className="flex items-center gap-1 hover:text-green-600 transition focus:outline-none whitespace-nowrap"
//               onClick={() =>
//                 isComplianceOpen
//                   ? closeDropdownImmediately()
//                   : openDropdown()
//               }
//               aria-expanded={isComplianceOpen}
//               aria-haspopup="true"
//             >
//               Compliance
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-200 ${isComplianceOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </button>
//             {/* Dropdown Menu */}
//             {isComplianceOpen && (
//               <div
//                 className="absolute right-0 bottom-full mb-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50"
//                 onMouseEnter={openDropdown}
//                 onMouseLeave={closeDropdownWithDelay}
//               >
//                 {/* ▼ Triangle Pointer */}
//                 <div className="absolute -bottom-2 left-6 md:left-auto md:right-6 w-0 h-0 
//   border-l-8 border-l-transparent
//   border-r-8 border-r-transparent
//   border-t-8 border-t-white"
//                 />
//                 <Link
//                   href="/dcs"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Data and Security Compliance
//                 </Link>
//                 <Link
//                   href="/isc"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Industry-Specific Compliance
//                 </Link>
//                 <Link
//                   href="/pgc"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Payment Gateway Compliance
//                 </Link>
//                 <Link
//                   href="/cgln"
//                   className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition"
//                   onClick={closeDropdownImmediately}
//                 >
//                   Corporate Governance and Legal Notice
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Divider */}
//       <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0" />
//       {/* Bottom Row */}
//       <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2">
//         <div>© 2026 Teraawatt. All rights reserved.</div>
//         <div>Hyderabad, Telangana • info@teraawatt.com</div>
//       </div>
//     </footer>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Footer() {
    _s();
    const [isComplianceOpen, setIsComplianceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openDropdown = ()=>{
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsComplianceOpen(true);
    };
    const closeDropdownWithDelay = ()=>{
        closeTimeoutRef.current = setTimeout(()=>{
            setIsComplianceOpen(false);
        }, 300); // ⏱️ adjust to taste (200–400ms feels best)
    };
    const closeDropdownImmediately = ()=>{
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsComplianceOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#FFFFFF] lg:p-0 p-4 sm:p-6 md:p-[5vw] text-gray-800 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center max-sm:flex-col  gap-6 max-sm:gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative  flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw]  max-sm:mr-auto  items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/teraawatt-black.svg",
                                    alt: "Teraawatt Logo",
                                    fill: true,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center  gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/coming-soon",
                                        target: "_blank",
                                        className: "hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/apple.svg",
                                            alt: "Download on App Store",
                                            width: 130,
                                            height: 40,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/coming-soon",
                                        target: "_blank",
                                        className: "hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/google.svg",
                                            alt: "Get it on Google Play",
                                            width: 140,
                                            height: 40,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 md:gap-12 justify-center md:justify-start text-base sm:text-lg mt-4 md:mt-0 lg:align-middle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy-policy",
                                className: "hover:text-green-600 transition",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                className: "hover:text-green-600 transition",
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                onMouseEnter: openDropdown,
                                onMouseLeave: closeDropdownWithDelay,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1 hover:text-green-600 transition focus:outline-none whitespace-nowrap",
                                        onClick: ()=>isComplianceOpen ? closeDropdownImmediately() : openDropdown(),
                                        "aria-expanded": isComplianceOpen,
                                        "aria-haspopup": "true",
                                        children: [
                                            "Compliance",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-4 h-4 transition-transform duration-200 ${isComplianceOpen ? "rotate-180" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    isComplianceOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 bottom-full mb-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50",
                                        onMouseEnter: openDropdown,
                                        onMouseLeave: closeDropdownWithDelay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-2 left-6 md:left-auto md:right-6 w-0 h-0    border-l-8 border-l-transparent   border-r-8 border-r-transparent   border-t-8 border-t-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dcs",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Data and Security Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/isc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Industry-Specific Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pgc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Payment Gateway Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cgln",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Corporate Governance and Legal Notice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 max-w-xl leading-relaxed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-800",
                                children: "Recharge • Renew • Repurpose"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            " — Building the next big thing in EV tech. For drivers, dreamers & disruptors who believe the future is electric."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-[0.25em] uppercase text-gray-500",
                        children: "Stay Charged"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://in.linkedin.com/company/teraawatt",
                                target: "_blank",
                                className: "group p-3 rounded-full bg-gray-100 hover:bg-[#0077B5]/10 transition-all duration-300 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                    size: 18,
                                    className: "text-gray-600 group-hover:text-[#0077B5] transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://www.instagram.com/teraawatt",
                                target: "_blank",
                                className: "group p-3 rounded-full bg-gray-100 hover:bg-pink-500/10 transition-all duration-300 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                    size: 18,
                                    className: "text-gray-600 group-hover:text-pink-500 transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://x.com/teraawatt",
                                target: "_blank",
                                className: "group p-3 rounded-full bg-gray-100 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiX"], {
                                    size: 18,
                                    className: "text-gray-600 group-hover:text-black transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://www.youtube.com/@teraawatt",
                                target: "_blank",
                                className: "group p-3 rounded-full bg-gray-100 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                    size: 18,
                                    className: "text-gray-600 group-hover:text-red-500 transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://www.facebook.com/teraawatt",
                                target: "_blank",
                                className: "group p-3 rounded-full bg-gray-100 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                                    size: 18,
                                    className: "text-gray-600 group-hover:text-blue-600 transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "© 2026 Teraawatt. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Hyderabad, Telangana • info@teraawatt.com"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s(Footer, "fCaalBy/pc+/dGDaQn23CLBLqEk=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/insights/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// export const dynamic = "force-dynamic";
// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// interface Blog {
//   id: string;
//   slug: string;
//   title: string;
//   shortDescription: string;
//   content?: string;
//   publishDate: string;
//   images: { url: string }[];
// }
// const PAGE_SIZE = 6;
// const TOTAL_PAGES = 2;
// export default function InsightsPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setBlogs(data.data?.blogs || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);
//   let items: (Blog | null)[] = [];
//   if (page === 1) {
//     const realBlogs = blogs.slice(0, PAGE_SIZE);
//     items = [
//       ...realBlogs,
//       ...Array(Math.max(0, PAGE_SIZE - realBlogs.length)).fill(null),
//     ];
//   }
//   if (page === 2) {
//     items = Array(4).fill(null);
//   }
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: styles }} />
//       <Navbar />
//       <div className="relative min-h-screen bg-black">
//         {/* Responsive Background Image */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full object-cover object-top absolute top-0 left-0 h-[60vh] md:h-screen"
//           src="/insight/insightfb.mp4"
//         />
//         {/* GRADIENT OVERLAY */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)",
//           }}
//         />
//         {/* CONTENT */}
//         <div className="relative z-10 min-h-screen flex flex-col justify-end">
//           <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-12 md:pb-20 pt-28 md:pt-40">
//             {/* HEADER SECTION */}
//             <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6 animate-fade-in">
//               <div className="inline-block">
//                 <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-4 py-1 md:px-6 md:py-2 border border-cyan-500/30 backdrop-blur-sm mb-4 md:mb-6">
//                   <span className="text-cyan-400 text-[10px] md:text-sm font-semibold tracking-wider uppercase">
//                     EV Insights & Stories
//                   </span>
//                 </div>
//               </div>
//               <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 mb-4 md:mb-6 leading-[1.1]">
//                 Stories for a Smarter
//                 <br />
//                 <span className="text-white">Electric Journey</span>
//               </h1>
//               <p className="text-cyan-100/80 text-base md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed px-4">
//                 Discover the latest innovations, expert insights, and inspiring stories shaping the future of electric mobility
//               </p>
//               {/* DECORATIVE LINE */}
//               <div className="flex items-center justify-center gap-3 pt-6 md:pt-8">
//                 <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
//                 <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyan-400/60"></div>
//                 <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
//               </div>
//             </div>
//             {/* BLOG GRID */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
//               {items.map((blog, i) =>
//                 blog ? (
//                   <BlogCard key={blog.id} blog={blog} index={i} />
//                 ) : (
//                   <ShimmerCard key={`placeholder-${i}`} />
//                 )
//               )}
//             </div>
//             {/* PAGINATION */}
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10">
//               <button
//                 disabled={page === 1}
//                 onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 className={`w-full sm:w-auto px-8 py-3 rounded-full font-medium transition-all duration-300 ${page === 1
//                     ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
//                     : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
//                   }`}
//               >
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                   Previous
//                 </span>
//               </button>
//               <div className="flex items-center gap-2 px-6">
//                 {[...Array(TOTAL_PAGES)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setPage(i + 1)}
//                     className={`h-2 rounded-full transition-all duration-300 ${page === i + 1
//                         ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400"
//                         : "w-2 bg-neutral-700 hover:bg-neutral-600"
//                       }`}
//                   />
//                 ))}
//               </div>
//               <button
//                 disabled={page === TOTAL_PAGES}
//                 onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
//                 className={`w-full sm:w-auto px-8 py-3 rounded-full font-medium transition-all duration-300 ${page === TOTAL_PAGES
//                     ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
//                     : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
//                   }`}
//               >
//                 <span className="flex items-center justify-center gap-2">
//                   Next
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* DECORATIVE GLOWS - Hidden on small mobile to improve performance */}
//         <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
//       </div>
//     </>
//   );
// }
// function BlogCard({ blog, index }: { blog: Blog; index: number }) {
//   const thumb = blog.images?.[0]?.url;
//   return (
//     <Link
//       href={`/insights/${blog.slug}`}
//       className="group block"
//       style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
//     >
//       <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 md:hover:scale-[1.02]">
//         <div className="relative h-48 md:h-56 overflow-hidden">
//           {thumb ? (
//             <>
//               <img src={thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//             </>
//           ) : (
//             <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-black relative">
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;...')] opacity-30"></div>
//             </div>
//           )}
//         </div>
//         <div className="p-5 md:p-6 space-y-3">
//           <div className="flex items-center gap-2">
//             <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
//             <p className="text-cyan-400 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
//               {new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
//             </p>
//           </div>
//           <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
//             {blog.title}
//           </h3>
//           <p className="text-gray-400 text-xs md:text-sm line-clamp-3 leading-relaxed">
//             {blog.shortDescription}
//           </p>
//           <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium pt-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
//             <span>Read More</span>
//             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }
// function ShimmerCard() {
//   return (
//     <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden">
//       <div className="h-48 md:h-56 bg-neutral-900 relative">
//         <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
//       </div>
//       <div className="p-6 space-y-3">
//         <div className="h-3 w-24 bg-white/10 rounded-full" />
//         <div className="h-6 w-full bg-white/10 rounded" />
//         <div className="h-3 w-full bg-white/5 rounded" />
//       </div>
//     </div>
//   );
// }
// const styles = `
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 1s ease-out; }
// .animate-shimmer { animation: shimmer 2s infinite; }
// `;
__turbopack_context__.s([
    "default",
    ()=>InsightsPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
const dynamic = "force-dynamic";
;
;
;
;
const PAGE_SIZE = 6;
function InsightsPage() {
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InsightsPage.useEffect": ()=>{
            fetch(`${("TURBOPACK compile-time value", "https://devapi.teraawatt.com/api/v1/users/blog/all")}`).then({
                "InsightsPage.useEffect": (r)=>r.json()
            }["InsightsPage.useEffect"]).then({
                "InsightsPage.useEffect": (data)=>{
                    setBlogs(data.data?.blogs || []);
                    setLoading(false);
                }
            }["InsightsPage.useEffect"]).catch({
                "InsightsPage.useEffect": ()=>setLoading(false)
            }["InsightsPage.useEffect"]);
        }
    }["InsightsPage.useEffect"], []);
    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);
    const showPagination = totalPages > 1;
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const items = blogs.slice(startIndex, endIndex);
    /** 🔑 GRID LOGIC (THIS IS THE MAGIC) */ const itemCount = items.length;
    const gridCols = itemCount === 1 ? "grid-cols-1" : itemCount === 2 ? "grid-cols-2" : "grid-cols-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: styles
                }
            }, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-screen bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "absolute top-0 left-0 w-full h-[60vh] md:h-screen object-cover object-top",
                        src: "/insight/insightfb.mp4"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 min-h-screen flex flex-col justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-16 pt-32 md:pt-44",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-20 space-y-6 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 border border-cyan-500/30 backdrop-blur-sm mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400 text-xs font-semibold tracking-wider uppercase",
                                                    children: "EV Insights & Stories"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/insights/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl lg:text-[3vw] sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 leading-tight",
                                            children: [
                                                "Inside the Future of Electric Mobility",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "Infrastructure, innovation, and insights powering what's next."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-cyan-100/80 text-base md:text-xl max-w-3xl mx-auto font-light",
                                            children: "At Teraawatt, we're creating India's most trusted EV ecosystem — uniting technology, convenience, and sustainability. Our mission is to make every charge smarter, every drive cleaner, and every user's experience seamless. Because the future of mobility deserves more than just power, it deserves purpose."
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid ${gridCols} gap-6 md:gap-8 mb-20 max-sm:grid-cols-1`,
                                    children: loading ? Array.from({
                                        length: PAGE_SIZE
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, i, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 21
                                        }, this)) : items.map((blog, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogCard, {
                                            blog: blog,
                                            index: i
                                        }, blog.id, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                showPagination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row justify-center items-center gap-6 pb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: page === 1,
                                            onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                            className: `px-8 py-3 rounded-full transition-all ${page === 1 ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800" : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-6",
                                            children: Array.from({
                                                length: totalPages
                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setPage(i + 1),
                                                    className: `h-2 rounded-full transition-all ${page === i + 1 ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400" : "w-2 bg-neutral-700 hover:bg-neutral-600"}`
                                                }, i, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: page === totalPages,
                                            onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                            className: `px-8 py-3 rounded-full transition-all ${page === totalPages ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800" : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"}`,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 433,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(InsightsPage, "49MbUx3cpw4uKWgAMHfhpoqXoNw=");
_c = InsightsPage;
/* ------------------ CARDS ------------------ */ function BlogCard({ blog, index }) {
    const thumb = blog.images?.[0]?.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/insights/${blog.slug}`,
        className: "group block",
        style: {
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-56 overflow-hidden",
                    children: thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: thumb,
                                alt: "",
                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/app/insights/page.tsx",
                                lineNumber: 453,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/insights/page.tsx",
                                lineNumber: 458,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-cyan-400 text-xs font-semibold uppercase",
                            children: new Date(blog.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white group-hover:text-cyan-400 transition-colors",
                            children: blog.title
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm line-clamp-3",
                            children: blog.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/insights/page.tsx",
            lineNumber: 449,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/insights/page.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_c1 = BlogCard;
function ShimmerCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-white/5 border border-white/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-56 bg-neutral-900 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-24 bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-full bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-full bg-white/5 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/insights/page.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_c2 = ShimmerCard;
/* ------------------ ANIMATIONS ------------------ */ const styles = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-fade-in {
  animation: fadeInUp 1s ease-out;
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
`;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InsightsPage");
__turbopack_context__.k.register(_c1, "BlogCard");
__turbopack_context__.k.register(_c2, "ShimmerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_97df09be._.js.map