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
//   /* ---------------- body lock ---------------- */
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileMenuOpen]);
//   /* ---------------- scroll bg ---------------- */
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   /* -------- desktop hide / reveal -------- */
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
//   /* ---------------- route syncing ---------------- */
//   useEffect(() => {
//     const stored = localStorage.getItem(ACTIVE_NAV_KEY);
//     if (stored) {
//       setActive(stored);
//       localStorage.removeItem(ACTIVE_NAV_KEY);
//       return;
//     }
//     if (pathname === "/") {
//       const action = localStorage.getItem("TW_action");
//       if (action === "go_charge") setActive("TeraaCharge");
//       else if (action === "go_mart") setActive("TeraaMart");
//       else setActive("Pulse");
//     } else if (pathname.includes("investors")) setActive("Investors & Partners");
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
//   /* ---------------- navigation ---------------- */
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
//       if (onHome) window.dispatchEvent(new Event("triggerVideoJump"));
//       else {
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
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${
//         isScrolled || isMobileMenuOpen
//           ? "bg-black/90 backdrop-blur-xl shadow-lg"
//           : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10">
//         <Link href="/" onClick={() => handleNavigation("Pulse")}>
//           <Image
//             src="/teraawatt.svg"
//             alt="logo"
//             width={125}
//             height={45}
//             className="p-[1vw] mr-[1vw]"
//           />
//         </Link>
//         {/* hamburger */}
//         <button
//           className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
//           onClick={() => setIsMobileMenuOpen((v) => !v)}
//         >
//           <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
//                 isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
//               }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
//                 isMobileMenuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
//                 isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
//               }`}
//             />
//           </div>
//         </button>
//         {/* desktop */}
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
//                   className={`relative top-[6%] ${
//                     active === item.name ? "opacity-100" : "opacity-90"
//                   }`}
//                 />
//               ) : item.isButton ? (
//                 <Image src="/Contact_page/connect1.svg" alt="connect" width={70} height={48} />
//               ) : (
//                 item.name
//               )}
//               {!item.isButton && active === item.name && (
//                 <motion.div
//                   layoutId="navbar-indicator"
//                   className="absolute left-0 right-0 h-[2px] bg-red-500"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>
//       {/* mobile menu */}
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
//                     className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
//                       active === item.name ? "bg-white/5" : "hover:bg-white/5"
//                     }`}
//                   >
//                     <span
//                       className={`text-lg font-medium tracking-wide ${
//                         active === item.name ? "text-white" : "text-neutral-400"
//                       }`}
//                     >
//                       {!item.isButton ? item.name : "Connect"}
//                     </span>
//                     {!item.isButton && active === item.name && (
//                       <motion.div
//                         layoutId="mobile-indicator"
//                         className="absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
//                       />
//                     )}
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
    /* ---------------- body lock ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    /* ---------------- scroll bg ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    /* -------- desktop hide / reveal -------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!navRef.current || window.innerWidth < 768) return;
            const nav = navRef.current;
            let lastScroll = window.scrollY;
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    const current = window.scrollY;
                    if (current > lastScroll && current > 80) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                            y: -120,
                            duration: 0.4,
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
    /* ---------------- route syncing ---------------- */ // useEffect(() => {
    //   const stored = localStorage.getItem(ACTIVE_NAV_KEY);
    //   if (stored) {
    //     setActive(stored);
    //     localStorage.removeItem(ACTIVE_NAV_KEY);
    //     return;
    //   }
    //   if (pathname === "/") {
    //     const action = localStorage.getItem("TW_action");
    //     if (action === "go_charge") setActive("TeraaCharge");
    //     else if (action === "go_mart") setActive("TeraaMart");
    //     else setActive("Pulse");
    //   } else if (pathname.includes("investors")) setActive("Investors & Partners");
    //   else if (pathname.includes("insights")) setActive("Insights");
    //   else if (pathname.includes("connect")) setActive("Connect");
    // }, [pathname]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // ⭐ Only read scroll-based active tab when on home page
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
            // ⭐ For other routes, use route matching ONLY
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
    /* ---------------- navigation ---------------- */ const handleNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
                    // (window as any).__TERAAMART_PENDING__ = true;
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
                            src: "/teraawatt.svg",
                            alt: "logo",
                            width: 125,
                            height: 45,
                            className: "p-[1vw] mr-[1vw]"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 520,
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
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 531,
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
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, this) : item.isButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Contact_page/connect1.svg",
                                        alt: "connect",
                                        width: 70,
                                        height: 48
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 572,
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
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 518,
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
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                            children: !item.isButton ? item.name : "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 618,
                                            columnNumber: 21
                                        }, this),
                                        !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "mobile-indicator",
                                            className: "absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 626,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 614,
                                    columnNumber: 19
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 607,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 599,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 592,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 511,
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
"[project]/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const products = [
    {
        id: "charge",
        num: "01",
        label: "Infrastructure",
        titleImage: "/teraacharge.png",
        description: "Access the fastest and most reliable EV charging network. Real-time availability, seamless sessions, and high-speed delivery. Real-time data \n Ultra-fast charging \n 24/7 Support ",
        image: "/About/teraacharge.jpg",
        accentColor: "#22D3EE",
        href: "/app"
    },
    {
        id: "coins",
        num: "02",
        label: "Rewards",
        titleImage: "/teraacoins.png",
        description: "Turn every charge into rewards. Earn coins as you power up, drive smart, and stay active. Redeem for exclusive EV benefits and services. Reward on every charge Redeem for EV perks Instant in-app tracking ",
        image: "/About/teraacoins.png",
        accentColor: "#FFD700",
        href: "/coins"
    },
    {
        id: "vouchers",
        num: "03",
        label: "Payments",
        titleImage: "/teraavouchers.png",
        description: "Power that makes a thoughtful gift. TeraaVouchers make EV charging simple, shareable, and always useful. Easy to purchase Send to anyone Hassle-free redemption ",
        image: "/About/teraavoucher.png",
        accentColor: "#05DF72",
        href: "/vouchers"
    },
    {
        id: "mart",
        num: "04",
        label: "Marketplace",
        titleImage: "/teraamartlogo.png",
        description: "A curated collection of premium EV accessories and home charging solutions. Every product quality-verified for your peace of mind.",
        image: "/About/teraamart.png",
        accentColor: "#00BFFF",
        href: "/mart"
    }
];
function About() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "About.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About.useLayoutEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".about-row").forEach({
                        "About.useLayoutEffect.ctx": (row)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(row, {
                                opacity: 0,
                                y: 48
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 0.9,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: row,
                                    start: "top 85%",
                                    once: true
                                }
                            });
                        }
                    }["About.useLayoutEffect.ctx"]);
                }
            }["About.useLayoutEffect.ctx"], containerRef);
            return ({
                "About.useLayoutEffect": ()=>ctx.revert()
            })["About.useLayoutEffect"];
        }
    }["About.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-32 pb-20 text-center px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs bg-[red] font-mono tracking-[0.5em] text-gray-500 uppercase mb-8",
                        children: "The Ecosystem"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-3xl mx-auto aspect-[16/4]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/teraawattart.svg",
                            alt: "Teraawatt",
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-px bg-white/10"
            }, void 0, false, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 md:px-12",
                children: products.map((p, i)=>{
                    const isEven = i % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `about-row py-24 md:py-32 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: p.image,
                                            alt: p.label,
                                            fill: true,
                                            className: "object-cover hover:scale-105 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-1/2 flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono text-gray-600",
                                                        children: p.num
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/About.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px flex-1 bg-white/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/About.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono tracking-widest uppercase",
                                                        style: {
                                                            color: p.accentColor
                                                        },
                                                        children: p.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/About.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/About.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-14 w-56",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: p.titleImage,
                                                    alt: p.label,
                                                    fill: true,
                                                    className: "object-contain object-left"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/About.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-lg leading-relaxed font-light",
                                                children: p.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: p.href,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mt-2 flex items-center gap-3 text-white text-sm font-semibold tracking-wide group w-fit border-b border-white/20 pb-1 hover:border-white transition-colors duration-300",
                                                    children: [
                                                        "Learn more",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/About.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/About.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            i < products.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-px bg-white/5"
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 157,
                                columnNumber: 43
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 text-center px-6 border-t border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono tracking-[0.5em] text-gray-600 uppercase mb-6",
                        children: "Ready to start?"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-bold tracking-tight text-white mb-10",
                        children: "The smarter way to drive electric starts here."
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/connect",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm tracking-wide",
                            children: "Join TeraaWatt"
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(About, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollingCoin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* --------------------------------------------------
   COIN CREATION
-------------------------------------------------- */ function createTexturedCoin(materialsOut, baseColorsOut, baseEmissiveOut) {
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
    const frontMap = loader.load("/coins.png");
    const backMap = loader.load("/croppedback.png");
    frontMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    backMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    frontMap.flipY = false;
    backMap.flipY = false;
    frontMap.center.set(0.5, 0.5);
    frontMap.rotation = -Math.PI / 2;
    backMap.center.set(0.5, 0.5);
    backMap.rotation = -Math.PI / 2;
    frontMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    frontMap.repeat.x = -1;
    backMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    backMap.repeat.x = -1;
    const radius = 0.012;
    const thickness = 0.0025;
    const segments = 96;
    const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](radius, radius, thickness, segments, 1, false);
    /* ---- ridged edge ---- */ const pos = geo.attributes.position;
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
    const gold = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xd29508);
    const matGold = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: gold.clone(),
        metalness: 1,
        roughness: 0.22,
        emissive: gold.clone(),
        emissiveIntensity: 0.5
    });
    const matFront = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: frontMap,
        transparent: true,
        alphaTest: 0.01,
        color: 0xffffff
    });
    const matBack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: backMap,
        transparent: true,
        alphaTest: 0.01,
        color: 0xffffff
    });
    const coin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, [
        matGold,
        matFront,
        matBack
    ]);
    // deterministic initial orientation
    coin.rotation.x = Math.PI / 2;
    materialsOut.current = [
        matGold,
        matFront,
        matBack
    ];
    baseColorsOut.current = [
        gold.clone(),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff)
    ];
    baseEmissiveOut.current = [
        0.5,
        0,
        0
    ];
    return coin;
}
function VideoCoin({ progressRef }) {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseEmissiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const CONFIG = {
        appearAt: 0,
        disappearAt: 0.18,
        darkenEnd: 0.03,
        start: {
            z: 2.47,
            x: 0,
            y: -0.02,
            scale: 3.8
        },
        end: {
            z: 0.01,
            x: 0.20,
            y: 0.41,
            scale: 6.2
        },
        /* ---- rotation phases ---- */ freeSpinStart: 0.03,
        freeSpinEnd: 0.14,
        startRotation: {
            x: Math.PI / 20,
            y: 0,
            z: 0
        },
        finalRotation: {
            x: -Math.PI / 4,
            y: Math.PI / 12490,
            z: 0
        },
        spinY: 4,
        spinX: 1.8
    };
    /* ---- precompute quaternions (critical) ---- */ const startQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](CONFIG.startRotation.x, CONFIG.startRotation.y, CONFIG.startRotation.z));
    const endQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](CONFIG.finalRotation.x, CONFIG.finalRotation.y, CONFIG.finalRotation.z));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "VideoCoin.useFrame": (_, delta)=>{
            const g = groupRef.current;
            const p = progressRef.current;
            if (!g || materialsRef.current.length === 0) return;
            if (p < CONFIG.appearAt) {
                g.visible = false;
                return;
            }
            g.visible = true;
            const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.appearAt) / (CONFIG.disappearAt - CONFIG.appearAt), 0, 1);
            const ease = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
            /* ---------- POSITION & SCALE ---------- */ g.position.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.z, CONFIG.end.z, ease);
            g.position.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.x, CONFIG.end.x, ease);
            g.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.y, CONFIG.end.y, ease);
            g.scale.setScalar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.scale, CONFIG.end.scale, ease));
            /* ---------- ROTATION (SINGLE CONTROLLER) ---------- */ if (p < CONFIG.freeSpinStart) {
                // 🔒 LOCKED START
                const lt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.appearAt) / (CONFIG.freeSpinStart - CONFIG.appearAt), 0, 1);
                const le = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(lt, 0, 1);
                g.quaternion.slerp(startQuat, 1 - le);
            } else if (p < CONFIG.freeSpinEnd) {
                // 🌀 FREE SPIN
                g.rotation.y += delta * CONFIG.spinY;
                g.rotation.x += delta * CONFIG.spinX;
            } else {
                // 🔒 LOCKED END
                const lt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.freeSpinEnd) / (CONFIG.disappearAt - CONFIG.freeSpinEnd), 0, 1);
                const le = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(lt, 0, 1);
                g.quaternion.slerp(endQuat, le);
            }
            /* ---------- DARKEN → BRIGHTEN ---------- */ if (p < CONFIG.darkenEnd) {
                const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(p / CONFIG.darkenEnd, 0, 1);
                materialsRef.current.forEach({
                    "VideoCoin.useFrame": (m, i)=>{
                        if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                            m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
                        } else if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                            m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
                            m.emissiveIntensity = baseEmissiveRef.current[i] * d;
                        }
                    }
                }["VideoCoin.useFrame"]);
            } else {
                materialsRef.current.forEach({
                    "VideoCoin.useFrame": (m, i)=>{
                        if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                            m.color.copy(baseColorsRef.current[i]);
                        } else if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                            m.color.copy(baseColorsRef.current[i]);
                            m.emissiveIntensity = baseEmissiveRef.current[i];
                        }
                    }
                }["VideoCoin.useFrame"]);
            }
            if (p > CONFIG.disappearAt) {
                g.visible = false;
            }
        }
    }["VideoCoin.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
            object: createTexturedCoin(materialsRef, baseColorsRef, baseEmissiveRef)
        }, void 0, false, {
            fileName: "[project]/components/ScrollingCoin.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollingCoin.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useRef } from "react";
 // import * as THREE from "three";
 // import { useFrame } from "@react-three/fiber";
 // /* --------------------------------------------------
 //    COIN CREATION
 // -------------------------------------------------- */
 // function createTexturedCoin(
 //   materialsOut: React.MutableRefObject<THREE.Material[]>,
 //   baseColorsOut: React.MutableRefObject<THREE.Color[]>,
 //   baseEmissiveOut: React.MutableRefObject<number[]>
 // ) {
 //   const loader = new THREE.TextureLoader();
 //   const frontMap = loader.load("/coins.png");
 //   const backMap  = loader.load("/croppedback.png");
 //   frontMap.colorSpace = THREE.SRGBColorSpace;
 //   backMap.colorSpace  = THREE.SRGBColorSpace;
 //   frontMap.flipY = false;
 //   backMap.flipY  = false;
 //   frontMap.center.set(0.5, 0.5);
 //   frontMap.rotation = -Math.PI / 2;
 //   backMap.center.set(0.5, 0.5);
 //   backMap.rotation  = -Math.PI / 2;
 //   frontMap.wrapS = THREE.RepeatWrapping;
 //   frontMap.repeat.x = -1;
 //   backMap.wrapS = THREE.RepeatWrapping;
 //   backMap.repeat.x  = -1;
 //   const radius = 0.012;
 //   const thickness = 0.0025;
 //   const segments = 96;
 //   const geo = new THREE.CylinderGeometry(
 //     radius,
 //     radius,
 //     thickness,
 //     segments,
 //     1,
 //     false
 //   );
 //   const pos = geo.attributes.position;
 //   for (let i = 0; i < pos.count; i++) {
 //     const y = pos.getY(i);
 //     if (Math.abs(y) < thickness * 0.49) {
 //       const x = pos.getX(i);
 //       const z = pos.getZ(i);
 //       const a = Math.atan2(z, x);
 //       const ridge = Math.sin(a * 120) * 0.0003;
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
 //   const gold = new THREE.Color(0xd29508);
 //   const matGold = new THREE.MeshStandardMaterial({
 //     color: gold.clone(),
 //     metalness: 1,
 //     roughness: 0.22,
 //     emissive: gold.clone(),
 //     emissiveIntensity: 0.5,
 //   });
 //   const matFront = new THREE.MeshBasicMaterial({
 //     map: frontMap,
 //     transparent: true,
 //     alphaTest: 0.01,
 //     color: 0xffffff,
 //   });
 //   const matBack = new THREE.MeshBasicMaterial({
 //     map: backMap,
 //     transparent: true,
 //     alphaTest: 0.01,
 //     color: 0xffffff,
 //   });
 //   const coin = new THREE.Mesh(geo, [matGold, matFront, matBack]);
 //   coin.rotation.x = Math.PI / 2;
 //   materialsOut.current = [matGold, matFront, matBack];
 //   baseColorsOut.current = [
 //     gold.clone(),
 //     new THREE.Color(0xffffff),
 //     new THREE.Color(0xffffff),
 //   ];
 //   baseEmissiveOut.current = [0.5, 0, 0];
 //   return coin;
 // }
 // /* --------------------------------------------------
 //    COMPONENT
 // -------------------------------------------------- */
 // export default function VideoCoin({
 //   progressRef,
 // }: {
 //   progressRef: React.MutableRefObject<number>;
 // }) {
 //   const groupRef = useRef<THREE.Group>(null!);
 //   const materialsRef = useRef<THREE.Material[]>([]);
 //   const baseColorsRef = useRef<THREE.Color[]>([]);
 //   const baseEmissiveRef = useRef<number[]>([]);
 //   const spinQuatRef = useRef(new THREE.Quaternion()); // ⭐ spin accumulator
 //   const CONFIG = {
 //     appearAt: 0,
 //     disappearAt: 0.18,
 //     darkenEnd: 0.03,
 //     start: { z: 2.47, x: 0, y: -0.02, scale: 3.8 },
 //     end:   { z: 0.01, x: 0.20, y: 0.41, scale: 6.2 },
 //     freeSpinStart: 0.03,
 //     freeSpinEnd: 0.14,
 //     startRotation: { x: Math.PI / 20, y: 0, z: 0 },
 //     finalRotation: { x: -Math.PI / 4, y: Math.PI / 12490, z: 0 },
 //     spinY: 4,
 //     spinX: 1.8,
 //   };
 //   const startQuat = new THREE.Quaternion().setFromEuler(
 //     new THREE.Euler(
 //       CONFIG.startRotation.x,
 //       CONFIG.startRotation.y,
 //       CONFIG.startRotation.z
 //     )
 //   );
 //   const endQuat = new THREE.Quaternion().setFromEuler(
 //     new THREE.Euler(
 //       CONFIG.finalRotation.x,
 //       CONFIG.finalRotation.y,
 //       CONFIG.finalRotation.z
 //     )
 //   );
 //   useFrame((_, delta) => {
 //     const g = groupRef.current;
 //     const p = progressRef.current;
 //     if (!g || materialsRef.current.length === 0) return;
 //     if (p < CONFIG.appearAt) {
 //       g.visible = false;
 //       return;
 //     }
 //     g.visible = true;
 //     const t = THREE.MathUtils.clamp(
 //       (p - CONFIG.appearAt) /
 //         (CONFIG.disappearAt - CONFIG.appearAt),
 //       0,
 //       1
 //     );
 //     const ease = THREE.MathUtils.smoothstep(t, 0, 1);
 //     /* ---------- POSITION & SCALE ---------- */
 //     g.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
 //     g.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);
 //     g.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
 //     g.scale.setScalar(
 //       THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease)
 //     );
 //     /* ---------- ROTATION ---------- */
 //     if (p < CONFIG.freeSpinStart) {
 //       spinQuatRef.current.identity();
 //       g.quaternion.copy(startQuat);
 //     }
 //     else if (p < CONFIG.freeSpinEnd) {
 //       const spinEuler = new THREE.Euler(
 //         delta * CONFIG.spinX,
 //         delta * CONFIG.spinY,
 //         0
 //       );
 //       const spinQuat = new THREE.Quaternion().setFromEuler(spinEuler);
 //       spinQuatRef.current.multiply(spinQuat);
 //       g.quaternion.copy(spinQuatRef.current);
 //     }
 //     else {
 //       spinQuatRef.current.identity();
 //       const lt = THREE.MathUtils.clamp(
 //         (p - CONFIG.freeSpinEnd) /
 //         (CONFIG.disappearAt - CONFIG.freeSpinEnd),
 //         0,
 //         1
 //       );
 //       const le = THREE.MathUtils.smoothstep(lt, 0, 1);
 //       g.quaternion.slerpQuaternions(
 //         g.quaternion,
 //         endQuat,
 //         le
 //       );
 //     }
 //     /* ---------- DARKEN / BRIGHTEN ---------- */
 //     if (p < CONFIG.darkenEnd) {
 //       const d = THREE.MathUtils.clamp(p / CONFIG.darkenEnd, 0, 1);
 //       materialsRef.current.forEach((m, i) => {
 //         if (m instanceof THREE.MeshBasicMaterial) {
 //           m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
 //         } else if (m instanceof THREE.MeshStandardMaterial) {
 //           m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
 //           m.emissiveIntensity = baseEmissiveRef.current[i] * d;
 //         }
 //       });
 //     } else {
 //       materialsRef.current.forEach((m, i) => {
 //         if (m instanceof THREE.MeshBasicMaterial) {
 //           m.color.copy(baseColorsRef.current[i]);
 //         } else if (m instanceof THREE.MeshStandardMaterial) {
 //           m.color.copy(baseColorsRef.current[i]);
 //           m.emissiveIntensity = baseEmissiveRef.current[i];
 //         }
 //       });
 //     }
 //     if (p > CONFIG.disappearAt) {
 //       g.visible = false;
 //     }
 //   });
 //   return (
 //     <group ref={groupRef}>
 //       <primitive
 //         object={createTexturedCoin(
 //           materialsRef,
 //           baseColorsRef,
 //           baseEmissiveRef
 //         )}
 //       />
 //     </group>
 //   );
 // }
_s(VideoCoin, "IwBk4RhZHdhuVND1snC1s0F9FyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = VideoCoin;
var _c;
__turbopack_context__.k.register(_c, "VideoCoin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ScrollingCoin from "./ScrollingCoin";
// gsap.registerPlugin(ScrollTrigger);
// export default function Video() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const bgVideoRef = useRef<HTMLVideoElement>(null);
//   const fgVideoRef = useRef<HTMLVideoElement>(null);
//   useEffect(() => {
//     (window as any).__VIDEO_READY__ = false;
//   }, []);
//   const scrollProgressRef = useRef(0);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
//   const FG_TOTAL_FRAMES = 480;
//   const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
//   const START_BG_AT_FRAME = 250;
//   const targetProgress = 180 / FG_FRAME_MAX;
//   /* ---------------- VIDEO SETUP ---------------- */
//   useEffect(() => {
//     const fg = fgVideoRef.current;
//     const bg = bgVideoRef.current;
//     if (!fg || !bg) return;
//     // Check if we need to wake (already loaded?)
//     const wake = async (video: HTMLVideoElement) => {
//       try {
//         await video.play();
//         video.pause();
//         video.currentTime = 0;
//       } catch (e) {
//         // Autoplay blocked or not ready, try silencing to be safe
//         video.currentTime = 0.1;
//         setTimeout(() => (video.currentTime = 0), 200);
//       }
//     };
//     const setup = (video: HTMLVideoElement, src: string) => {
//       video.src = src;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "auto";
//       video.crossOrigin = "anonymous";
//       video.load();
//       // Try to wake it when data loads
//       video.addEventListener("loadeddata", () => wake(video), { once: true });
//     };
//     setup(bg, "/iphoneframes/whitetickets.mp4");
//     setup(fg, "/iphoneframes/out.mp4");
//     const onReady = () => {
//       if (!(window as any).__VIDEO_READY__) {
//         (window as any).__VIDEO_READY__ = true;
//         window.dispatchEvent(new Event("videoReady"));
//       }
//     };
//     if (fg.readyState >= 1) onReady();
//     fg.addEventListener("loadedmetadata", onReady);
//     return () => {
//       fg.removeEventListener("loadedmetadata", onReady);
//     };
//   }, []);
//   /* ---------------- ULTRA OPTIMIZED RAF LOOP ---------------- */
//   useEffect(() => {
//     const bgVideo = bgVideoRef.current;
//     const fgVideo = fgVideoRef.current;
//     if (!bgVideo || !fgVideo) return;
//     let raf = 0;
//     let lastTime = performance.now();
//     let lastRender = 0;
//     // cache durations once
//     let fgDuration = 0;
//     let bgDuration = 0;
//     const animate = (time: number) => {
//       // hard cap ~60fps
//       if (time - lastRender < 33) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       lastRender = time;
//       const delta = Math.min((time - lastTime) / 1000, 0.1);
//       lastTime = time;
//       if (!fgDuration && fgVideo.duration) {
//         fgDuration = fgVideo.duration;
//         bgDuration = bgVideo.duration || 0;
//         if (!(window as any).__VIDEO_READY__) {
//           (window as any).__VIDEO_READY__ = true;
//           window.dispatchEvent(new Event("videoReady"));
//         }
//       }
//       if (!fgDuration) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       // physically-smooth damping (better than lerp)
//       const damping = 1 - Math.exp(-delta * 18);
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) * damping;
//       const smooth = smoothProgressRef.current;
//       /* ---------- FOREGROUND ---------- */
//       const fgTargetTime = smooth * fgDuration;
//       const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);
//       // only seek if meaningful (~1 frame @30fps)
//       if (fgDiff > 0.03) {
//         fgVideo.currentTime = fgTargetTime;
//       }
//       /* ---------- BACKGROUND ---------- */
//       const currentFgFrame = smooth * FG_FRAME_MAX;
//       if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
//         const bgProgress =
//           (currentFgFrame - START_BG_AT_FRAME) /
//           (FG_FRAME_MAX - START_BG_AT_FRAME);
//         const bgTargetTime = bgProgress * bgDuration;
//         const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);
//         if (bgDiff > 0.03) {
//           bgVideo.currentTime = bgTargetTime;
//         }
//       } else if (bgVideo.currentTime > 0.03) {
//         bgVideo.currentTime = 0;
//       }
//       scrollProgressRef.current = smooth;
//       raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, []);
//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;
//     if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=400%",
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//       onRefresh: (self) => {
//         rawProgressRef.current = self.progress;
//       },
//     });
//     scrollTriggerRef.current = st;
//     return () => st.kill();
//   }, []);
//   /* ---------------- EXTERNAL JUMP ---------------- */
//   useEffect(() => {
//     const jump = () => {
//       const st = scrollTriggerRef.current;
//       if (!st) return;
//       ScrollTrigger.refresh();
//       requestAnimationFrame(() => {
//         const scrollPos = st.start + targetProgress * (st.end - st.start);
//         window.scrollTo({ top: scrollPos, behavior: "smooth" });
//         rawProgressRef.current = targetProgress;
//       });
//     };
//     const handler = () => {
//       // If video is ready, jump immediately
//       if ((window as any).__VIDEO_READY__) {
//         jump();
//       } else {
//         // Otherwise wait for ready event (handled in page.tsx mostly, but safety here)
//         const onReady = () => {
//           jump();
//           window.removeEventListener("videoReady", onReady);
//         };
//         window.addEventListener("videoReady", onReady);
//       }
//     };
//     window.addEventListener("triggerVideoJump", handler);
//     // Initial check in case it's pending
//     if ((window as any).__TERAAMART_PENDING__) {
//       handler();
//       (window as any).__TERAAMART_PENDING__ = false;
//     }
//     return () => {
//       window.removeEventListener("triggerVideoJump", handler);
//     };
//   }, []);
//   /* ---------------- JSX ---------------- */
//   return (
//     <div ref={containerRef} className="relative w-full bg-black">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
//         {/* BACKGROUND */}
//         <video
//           ref={bgVideoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ pointerEvents: "none" }}
//           playsInline
//           muted
//         />
//         {/* FOREGROUND */}
//         <video
//           ref={fgVideoRef}
//           className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
//           style={{ imageRendering: "crisp-edges" }}
//           playsInline
//           muted
//         />
//         {/* 3D COIN */}
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 2.5], near: 0.001, far: 1000, fov: 50 }}>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollingCoin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollingCoin.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Video() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fgVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            window.__VIDEO_READY__ = false;
        }
    }["Video.useEffect"], []);
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rawProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const FG_TOTAL_FRAMES = 480;
    const FG_FRAME_MAX = FG_TOTAL_FRAMES - 1;
    const START_BG_AT_FRAME = 251;
    const targetProgress = 326 / FG_FRAME_MAX;
    /* ---------------- VIDEO SETUP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const fg = fgVideoRef.current;
            const bg = bgVideoRef.current;
            if (!fg || !bg) return;
            // Check if we need to wake (already loaded?)
            const wake = {
                "Video.useEffect.wake": async (video)=>{
                    try {
                        await video.play();
                        video.pause();
                        video.currentTime = 0;
                    } catch (e) {
                        // Autoplay blocked or not ready, try silencing to be safe
                        video.currentTime = 0.1;
                        setTimeout({
                            "Video.useEffect.wake": ()=>video.currentTime = 0
                        }["Video.useEffect.wake"], 200);
                    }
                }
            }["Video.useEffect.wake"];
            const setup = {
                "Video.useEffect.setup": (video, src)=>{
                    video.src = src;
                    video.muted = true;
                    video.playsInline = true;
                    video.preload = "auto";
                    video.crossOrigin = "anonymous";
                    video.load();
                    // Try to wake it when data loads
                    video.addEventListener("loadeddata", {
                        "Video.useEffect.setup": ()=>wake(video)
                    }["Video.useEffect.setup"], {
                        once: true
                    });
                }
            }["Video.useEffect.setup"];
            setup(bg, "/iphoneframes/whitetickets.mp4");
            setup(fg, "/iphoneframes/scrub_ultra_android.mp4");
            const onReady = {
                "Video.useEffect.onReady": ()=>{
                    if (!window.__VIDEO_READY__) {
                        window.__VIDEO_READY__ = true;
                        window.dispatchEvent(new Event("videoReady"));
                    }
                }
            }["Video.useEffect.onReady"];
            let fgReady = false;
            let bgReady = false;
            const checkReady = {
                "Video.useEffect.checkReady": ()=>{
                    if (fgReady && bgReady && !window.__VIDEO_READY__) {
                        window.__VIDEO_READY__ = true;
                        window.dispatchEvent(new Event("videoReady"));
                    }
                }
            }["Video.useEffect.checkReady"];
            fg.addEventListener("loadedmetadata", {
                "Video.useEffect": ()=>{
                    fgReady = true;
                    checkReady();
                }
            }["Video.useEffect"]);
            bg.addEventListener("loadedmetadata", {
                "Video.useEffect": ()=>{
                    bgReady = true;
                    checkReady();
                }
            }["Video.useEffect"]);
            return ({
                "Video.useEffect": ()=>{
                    fg.removeEventListener("loadedmetadata", onReady);
                }
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- ULTRA OPTIMIZED RAF LOOP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const bgVideo = bgVideoRef.current;
            const fgVideo = fgVideoRef.current;
            if (!bgVideo || !fgVideo) return;
            let raf = 0;
            let lastTime = performance.now();
            let lastRender = 0;
            // cache durations once
            let fgDuration = 0;
            let bgDuration = 0;
            const animate = {
                "Video.useEffect.animate": (time)=>{
                    // hard cap ~60fps
                    if (time - lastRender < 33) {
                        raf = requestAnimationFrame(animate);
                        return;
                    }
                    lastRender = time;
                    const delta = Math.min((time - lastTime) / 1000, 0.1);
                    lastTime = time;
                    if (!fgDuration && fgVideo.duration) {
                        fgDuration = fgVideo.duration;
                        bgDuration = bgVideo.duration || 0;
                        if (!window.__VIDEO_READY__) {
                            window.__VIDEO_READY__ = true;
                            window.dispatchEvent(new Event("videoReady"));
                        }
                    }
                    if (!fgDuration) {
                        raf = requestAnimationFrame(animate);
                        return;
                    }
                    // physically-smooth damping (better than lerp)
                    const damping = 1 - Math.exp(-delta * 18);
                    smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * damping;
                    const smooth = smoothProgressRef.current;
                    /* ---------- FOREGROUND ---------- */ const fgTargetTime = smooth * fgDuration;
                    const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);
                    // only seek if meaningful (~1 frame @30fps)
                    if (fgDiff > 0.03) {
                        fgVideo.currentTime = fgTargetTime;
                    }
                    /* ---------- BACKGROUND ---------- */ const currentFgFrame = smooth * FG_FRAME_MAX;
                    if (currentFgFrame >= START_BG_AT_FRAME && bgDuration) {
                        const bgProgress = (currentFgFrame - START_BG_AT_FRAME) / (FG_FRAME_MAX - START_BG_AT_FRAME);
                        const bgTargetTime = bgProgress * bgDuration;
                        const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);
                        if (bgDiff > 0.03) {
                            bgVideo.currentTime = bgTargetTime;
                        }
                    } else if (bgVideo.currentTime > 0.03) {
                        bgVideo.currentTime = 0;
                    }
                    scrollProgressRef.current = smooth;
                    raf = requestAnimationFrame(animate);
                }
            }["Video.useEffect.animate"];
            raf = requestAnimationFrame(animate);
            return ({
                "Video.useEffect": ()=>cancelAnimationFrame(raf)
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- SCROLLTRIGGER ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            if (!containerRef.current) return;
            if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=400%",
                pin: true,
                anticipatePin: 1,
                onUpdate: {
                    "Video.useEffect.st": (self)=>{
                        rawProgressRef.current = self.progress;
                    }
                }["Video.useEffect.st"],
                onRefresh: {
                    "Video.useEffect.st": (self)=>{
                        rawProgressRef.current = self.progress;
                    }
                }["Video.useEffect.st"]
            });
            scrollTriggerRef.current = st;
            window.dispatchEvent(new Event("videoScrollReady"));
            return ({
                "Video.useEffect": ()=>st.kill()
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- EXTERNAL JUMP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const jump = {
                "Video.useEffect.jump": ()=>{
                    const st = scrollTriggerRef.current;
                    if (!st) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    requestAnimationFrame({
                        "Video.useEffect.jump": ()=>{
                            const scrollPos = st.start + targetProgress * (st.end - st.start);
                            window.scrollTo({
                                top: scrollPos,
                                behavior: "smooth"
                            });
                            rawProgressRef.current = targetProgress;
                        }
                    }["Video.useEffect.jump"]);
                }
            }["Video.useEffect.jump"];
            const handler = {
                "Video.useEffect.handler": ()=>{
                    // If video is ready, jump immediately
                    if (window.__VIDEO_READY__) {
                        jump();
                    } else {
                        // Otherwise wait for ready event (handled in page.tsx mostly, but safety here)
                        const onReady = {
                            "Video.useEffect.handler.onReady": ()=>{
                                jump();
                                window.removeEventListener("videoReady", onReady);
                            }
                        }["Video.useEffect.handler.onReady"];
                        window.addEventListener("videoReady", onReady);
                    }
                }
            }["Video.useEffect.handler"];
            window.addEventListener("triggerVideoJump", handler);
            // Initial check in case it's pending
            if (window.__TERAAMART_PENDING__) {
                handler();
                window.__TERAAMART_PENDING__ = false;
            }
            return ({
                "Video.useEffect": ()=>{
                    window.removeEventListener("triggerVideoJump", handler);
                }
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- JSX ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: bgVideoRef,
                    className: "absolute inset-0 w-full h-full object-cover",
                    style: {
                        pointerEvents: "none"
                    },
                    playsInline: true,
                    muted: true
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 535,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: fgVideoRef,
                    className: "relative z-10 max-w-full max-h-screen object-contain pointer-events-none",
                    style: {
                        imageRendering: "crisp-edges"
                    },
                    playsInline: true,
                    muted: true
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-20 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollingCoin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            progressRef: scrollProgressRef
                        }, void 0, false, {
                            fileName: "[project]/components/video.tsx",
                            lineNumber: 555,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/video.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/video.tsx",
            lineNumber: 533,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/video.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
_s(Video, "Yw6zT5D1NH+5lHOl8ValZ8kOwYA=");
_c = Video;
var _c;
__turbopack_context__.k.register(_c, "Video");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/applyWhiteRimShader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyWhiteRimShader",
    ()=>applyWhiteRimShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function applyWhiteRimShader(scene) {
    const processedMeshes = new Set();
    scene.traverse((child)=>{
        if (child.isMesh) {
            const mesh = child;
            const name = mesh.name.toLowerCase();
            if (name.includes("boot_primary") || name.includes("body_primary") || name.includes("whiteleather_Putih") || name.includes("glass_glass") || name.includes("JUST_BLACK") || name.includes("tembus_boot_ok_tembus") || name.includes("tembus_belakang_tembus")) {
                if (processedMeshes.has(mesh)) return;
                processedMeshes.add(mesh);
                mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    uniforms: {
                        baseColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000)
                        },
                        rimColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff)
                        },
                        rimStrength: {
                            value: 4.5
                        },
                        fadeHeight: {
                            value: 2.8
                        }
                    },
                    vertexShader: `
              varying vec3 vNormal;
              varying vec3 vWorldPosition;
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
              }
            `,
                    fragmentShader: `
              uniform vec3 baseColor;
              uniform vec3 rimColor;
              uniform float rimStrength;
              uniform float fadeHeight;

              varying vec3 vNormal;
              varying vec3 vWorldPosition;

              void main() {
                vec3 viewDir = normalize(cameraPosition - vWorldPosition);
                float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
                rim = smoothstep(0.80, 0.98, rim);
                float fade = smoothstep(0.0, fadeHeight, vWorldPosition.y);
                float silhouette = rim * fade * rimStrength;
                if (dot(vNormal, viewDir) < 0.0) silhouette = 0.0;
                vec3 finalColor = mix(baseColor, rimColor, silhouette);
                gl_FragColor = vec4(finalColor, 1.0);
              }
            `,
                    transparent: false
                });
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/applyBlueInteriorShader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyBlueInteriorShader",
    ()=>applyBlueInteriorShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function applyBlueInteriorShader(scene) {
    const rimColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#010E78");
    const processedMeshes = new Set(); // Track processed meshes
    scene.traverse((child)=>{
        if (child.isMesh) {
            const mesh = child;
            const name = mesh.name.toLowerCase();
            if (name.includes("movsteer") || name.includes("plastic") || name.includes("whiteleather") || name.includes("door") || name.includes("leather_white") || name.includes("bodysills") || name.includes("belt_belt") || name.includes("Putih.0_0") || name.includes("chrome__movsteer") || name.includes("texture_leather")) {
                if (processedMeshes.has(mesh)) return; // Skip if already processed
                processedMeshes.add(mesh);
                if (("TURBOPACK compile-time value", "development") === 'development') {
                // console.log("💙 Applying solid blue silhouette to:", mesh.name);
                }
                mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    uniforms: {
                        baseColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000)
                        },
                        rimColor: {
                            value: rimColor
                        },
                        rimStrength: {
                            value: 3.5
                        }
                    },
                    vertexShader: `
              varying vec3 vNormal;
              varying vec3 vWorldPosition;
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
              }
            `,
                    fragmentShader: `
              uniform vec3 baseColor;
              uniform vec3 rimColor;
              uniform float rimStrength;

              varying vec3 vNormal;
              varying vec3 vWorldPosition;

              void main() {
                vec3 viewDir = normalize(cameraPosition - vWorldPosition);
                float rim = 1.0 - abs(dot(viewDir, vNormal)); // absolute fixes transparency on backfaces
                rim = pow(rim, 3.0);
                float silhouette = rim * rimStrength;

                // Don't make backfaces transparent — just dim them slightly
                if (dot(vNormal, viewDir) < 0.0) silhouette *= 0.4;

                vec3 finalColor = baseColor + rimColor * silhouette;
                gl_FragColor = vec4(finalColor, 1.0);
              }
            `,
                    transparent: false,
                    depthWrite: true,
                    depthTest: true,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                });
                mesh.material.needsUpdate = true;
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/preloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect } from "react";
// export default function Preloader({ onDone }: { onDone: () => void }) {
//   useEffect(() => {
//     const video = document.getElementById(
//       "pulse-preloader-video"
//     ) as HTMLVideoElement | null;
//     if (!video) return;
//     const handleEnd = () => onDone();
//     video.addEventListener("ended", handleEnd);
//     return () => {
//       video.removeEventListener("ended", handleEnd);
//     };
//   }, [onDone]);
//   return (
//     <div className="fixed inset-0 z-[9999] bg-black">
//       <video
//         id="pulse-preloader-video"
//         src="/preloader.mp4"
//         autoPlay
//         muted
//         playsInline
//         className="w-full max-sm:object-fill h-full object-cover"
//       />
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Preloader({ onDone }) {
    _s();
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            setSrc(isMobile ? "/phoneloader.mp4" : "/desktoploader.mp4");
        }
    }["Preloader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            if (!src) return;
            const video = document.getElementById("pulse-preloader-video");
            if (!video) return;
            const handleEnd = {
                "Preloader.useEffect.handleEnd": ()=>onDone()
            }["Preloader.useEffect.handleEnd"];
            video.addEventListener("ended", handleEnd);
            return ({
                "Preloader.useEffect": ()=>{
                    video.removeEventListener("ended", handleEnd);
                }
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], [
        src,
        onDone
    ]);
    if (!src) return null; // prevents flashing wrong video
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            id: "pulse-preloader-video",
            src: src,
            autoPlay: true,
            muted: true,
            playsInline: true,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/components/preloader.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/preloader.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(Preloader, "OzYdcpIVUji+Tf/lRkOvKdR7W3U=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/VideoTextureEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";
// export default function VideoTextureEffect() {
//   const { scene } = useThree();
//   const hasInitialized = useRef(false);
//   useEffect(() => {
//     if (hasInitialized.current) return; // Prevent re-running
//     const videoSources = {
//       windscreen_ok_glass0_0001: "/winshieldvideo.mp4",
//     };
//     const createVideoTexture = (src: string) => {
//       const video = document.createElement("video");
//       video.src = src;
//       video.crossOrigin = "anonymous";
//       video.loop = true;
//       video.muted = true;
//       video.playsInline = true;
//       video.autoplay = true;
//       video.preload = "metadata"; // Changed from "auto" for faster load
//       // Reduce video quality for performance
//       video.setAttribute('playbackRate', '1');
//       video.play().catch((err) => console.warn("Autoplay blocked:", err));
//       const tex = new THREE.VideoTexture(video);
//       tex.colorSpace = THREE.SRGBColorSpace;
//       // Use NearestFilter for better performance (less GPU processing)
//       tex.minFilter = THREE.NearestFilter;
//       tex.magFilter = THREE.NearestFilter;
//       tex.format = THREE.RGBFormat;
//       tex.generateMipmaps = false; // Disable mipmaps for performance
//       tex.needsUpdate = true;
//       return tex;
//     };
//     const textures = {
//       windscreen_ok_glass0_0001: createVideoTexture(videoSources.windscreen_ok_glass0_0001),
//     };
//     const timeoutId = setTimeout(() => {
//       const processedMeshes = new Set<THREE.Mesh>(); // Track processed meshes
//       scene.traverse((child) => {
//         if ((child as THREE.Mesh).isMesh) {
//           const mesh = child as THREE.Mesh;
//           const tex = textures[mesh.name as keyof typeof textures];
//           if (tex && !processedMeshes.has(mesh)) {
//             processedMeshes.add(mesh);
//             if (process.env.NODE_ENV === 'development') {
//               console.log("✅ Applying video to:", mesh.name);
//             }
//             mesh.geometry.computeBoundingBox();
//             const bbox = mesh.geometry.boundingBox!;
//             const size = new THREE.Vector3();
//             bbox.getSize(size);
//             const positions = mesh.geometry.attributes.position;
//             const uvs = new Float32Array(positions.count * 2);
//             for (let i = 0; i < positions.count; i++) {
//               const x = positions.getX(i);
//               const y = positions.getY(i);
//               uvs[i * 2] = (x - bbox.min.x) / size.x;
//              uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y;
//             }
//             mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
//             // Use MeshBasicMaterial instead of MeshStandardMaterial for better performance
//             mesh.material = new THREE.MeshBasicMaterial({
//               map: tex,
//               transparent: true,
//               opacity: 1,
//               toneMapped: false,
//             });
//             mesh.material.needsUpdate = true;
//           }
//         }
//       });
//       hasInitialized.current = true;
//     }, 1500);
//     return () => {
//       clearTimeout(timeoutId);
//       // Clean up video elements
//       Object.values(textures).forEach(tex => {
//         const video = tex.image as HTMLVideoElement;
//         if (video) {
//           video.pause();
//           video.src = "";
//         }
//         tex.dispose();
//       });
//     };
//   }, [scene]);
//   return null;
// } 
// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";
// export default function VideoTextureEffect({
//   progressRef,
// }: {
//   progressRef: React.MutableRefObject<number>;
// }) {
//   const { scene } = useThree();
//   const hasInitialized = useRef(false);
//   const rafIdRef = useRef<number | null>(null);
//   const TOTAL_FRAMES = 598;
//   const ACTIVE_RANGES: readonly [number, number][] = [
//     [79,156],
// [239,373],
// [471,535],
//   ];
//   useEffect(() => {
//     if (hasInitialized.current) return;
//     /* ---------------- VIDEO SETUP ---------------- */
//     const videoSources = {
//       windscreen_ok_glass0_0001: "/winshieldvideo.mp4",
//     };
//     const createVideoTexture = (src: string) => {
//       const video = document.createElement("video");
//       video.src = src;
//       video.crossOrigin = "anonymous";
//       video.loop = true;
//       video.muted = true;
//       video.playsInline = true;
//       video.preload = "metadata";
//       video.load(); // important for Safari
//       const texture = new THREE.VideoTexture(video);
//       texture.colorSpace = THREE.SRGBColorSpace;
//       texture.minFilter = THREE.NearestFilter;
//       texture.magFilter = THREE.NearestFilter;
//       texture.generateMipmaps = false;
//       texture.needsUpdate = true;
//       return texture;
//     };
//     const textures = {
//       windscreen_ok_glass0_0001: createVideoTexture(
//         videoSources.windscreen_ok_glass0_0001
//       ),
//     };
//     /* ---------------- APPLY TO MESH ---------------- */
//     const timeoutId = setTimeout(() => {
//       const processedMeshes = new Set<THREE.Mesh>();
//       scene.traverse((child) => {
//         if (!(child as THREE.Mesh).isMesh) return;
//         const mesh = child as THREE.Mesh;
//         const texture = textures[mesh.name as keyof typeof textures];
//         if (!texture || processedMeshes.has(mesh)) return;
//         processedMeshes.add(mesh);
//         if (process.env.NODE_ENV === "development") {
//           console.log("🎥 Windshield video applied to:", mesh.name);
//         }
//         mesh.geometry.computeBoundingBox();
//         const bbox = mesh.geometry.boundingBox!;
//         const size = new THREE.Vector3();
//         bbox.getSize(size);
//         const pos = mesh.geometry.attributes.position;
//         const uvs = new Float32Array(pos.count * 2);
//         for (let i = 0; i < pos.count; i++) {
//           const x = pos.getX(i);
//           const y = pos.getY(i);
//           uvs[i * 2] = (x - bbox.min.x) / size.x;
//           uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y; // flip Y
//         }
//         mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
//         mesh.material = new THREE.MeshBasicMaterial({
//           map: texture,
//           transparent: true,
//           opacity: 1,
//           toneMapped: false,
//         });
//       });
//       /* ---------------- FRAME SYNC ---------------- */
//       const syncWithDashboard = () => {
//         const progress = progressRef.current; // 0 → 1
//         const currentFrame = Math.floor(progress * TOTAL_FRAMES);
//         const isActive = ACTIVE_RANGES.some(
//           ([start, end]) => currentFrame >= start && currentFrame <= end
//         );
//         Object.values(textures).forEach((tex) => {
//           const video = tex.image as HTMLVideoElement;
//           if (!video) return;
//           if (isActive) {
//             if (video.paused) {
//               video.play().catch(() => {});
//             }
//           } else {
//             if (!video.paused) {
//               video.pause();
//               video.currentTime = 0;
//             }
//           }
//         });
//         rafIdRef.current = requestAnimationFrame(syncWithDashboard);
//       };
//       syncWithDashboard();
//       hasInitialized.current = true;
//     }, 1500);
//     /* ---------------- CLEANUP ---------------- */
//     return () => {
//       clearTimeout(timeoutId);
//       if (rafIdRef.current !== null) {
//         cancelAnimationFrame(rafIdRef.current);
//       }
//       Object.values(textures).forEach((tex) => {
//         const video = tex.image as HTMLVideoElement;
//         if (video) {
//           video.pause();
//           video.src = "";
//         }
//         tex.dispose();
//       });
//     };
//   }, [scene, progressRef]);
//   return null;
// }
__turbopack_context__.s([
    "default",
    ()=>VideoTextureEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoTextureEffect({ progressRef }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const TOTAL_FRAMES = 598;
    const ACTIVE_RANGES = [
        [
            79,
            156
        ],
        [
            239,
            372
        ],
        [
            471,
            535
        ]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoTextureEffect.useEffect": ()=>{
            if (hasInitialized.current) return;
            /* ---------------- VIDEO SETUP ---------------- */ const createVideoTexture = {
                "VideoTextureEffect.useEffect.createVideoTexture": (src)=>{
                    const video = document.createElement("video");
                    video.src = src;
                    video.crossOrigin = "anonymous";
                    video.loop = false; // important now
                    video.muted = true;
                    video.playsInline = true;
                    video.preload = "metadata";
                    video.load();
                    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTexture"](video);
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
                    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
                    texture.generateMipmaps = false;
                    texture.needsUpdate = true;
                    return texture;
                }
            }["VideoTextureEffect.useEffect.createVideoTexture"];
            const videoTexture = createVideoTexture("/windshieldvideo.mp4");
            /* ---------------- APPLY TO MESH ---------------- */ const timeoutId = setTimeout({
                "VideoTextureEffect.useEffect.timeoutId": ()=>{
                    const processedMeshes = new Set();
                    scene.traverse({
                        "VideoTextureEffect.useEffect.timeoutId": (child)=>{
                            if (!child.isMesh) return;
                            const mesh = child;
                            if (mesh.name !== "windscreen_ok_glass0_0001") return;
                            if (processedMeshes.has(mesh)) return;
                            processedMeshes.add(mesh);
                            mesh.geometry.computeBoundingBox();
                            const bbox = mesh.geometry.boundingBox;
                            const size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                            bbox.getSize(size);
                            const pos = mesh.geometry.attributes.position;
                            const uvs = new Float32Array(pos.count * 2);
                            for(let i = 0; i < pos.count; i++){
                                const x = pos.getX(i);
                                const y = pos.getY(i);
                                uvs[i * 2] = (x - bbox.min.x) / size.x;
                                uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y;
                            }
                            mesh.geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
                            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: videoTexture,
                                toneMapped: false
                            });
                            mesh.material = mat;
                            materialRef.current = mat;
                        }
                    }["VideoTextureEffect.useEffect.timeoutId"]);
                    /* ---------------- FRAME SYNC + SPEED RAMP ---------------- */ let wasActive = false;
                    const syncWithDashboard = {
                        "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard": ()=>{
                            const progress = progressRef.current;
                            const currentFrame = Math.floor(progress * TOTAL_FRAMES);
                            const activeRange = ACTIVE_RANGES.find({
                                "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard.activeRange": ([start, end])=>currentFrame >= start && currentFrame <= end
                            }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard.activeRange"]);
                            const mat = materialRef.current;
                            if (mat) {
                                const video = videoTexture.image;
                                if (activeRange) {
                                    if (video.paused) video.play().catch({
                                        "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard": ()=>{}
                                    }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard"]);
                                    const [start, end] = activeRange;
                                    const rangeLength = end - start;
                                    const localFrame = currentFrame - start;
                                    const t = localFrame / rangeLength;
                                    const ramp = 0.12;
                                    let speed = 1;
                                    if (t < ramp) {
                                        speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t / ramp, 0, 1);
                                    } else if (t > 1 - ramp) {
                                        speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep((1 - t) / ramp, 0, 1);
                                    }
                                    // Safari-safe minimum (~0.25)
                                    video.playbackRate = Math.max(0.25, speed);
                                    wasActive = true;
                                } else {
                                    // outside range → gently stop on last frame
                                    if (wasActive) {
                                        video.pause();
                                    }
                                    wasActive = false;
                                }
                                mat.needsUpdate = true;
                            }
                            rafIdRef.current = requestAnimationFrame(syncWithDashboard);
                        }
                    }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard"];
                    syncWithDashboard();
                    hasInitialized.current = true;
                }
            }["VideoTextureEffect.useEffect.timeoutId"], 1500);
            /* ---------------- CLEANUP ---------------- */ return ({
                "VideoTextureEffect.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    if (rafIdRef.current !== null) {
                        cancelAnimationFrame(rafIdRef.current);
                    }
                    const video = videoTexture.image;
                    if (video) {
                        video.pause();
                        video.src = "";
                    }
                    videoTexture.dispose();
                }
            })["VideoTextureEffect.useEffect"];
        }
    }["VideoTextureEffect.useEffect"], [
        scene,
        progressRef
    ]);
    return null;
}
_s(VideoTextureEffect, "aDCnUsAbZQW2g3F0vByJsUSWCwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = VideoTextureEffect;
var _c;
__turbopack_context__.k.register(_c, "VideoTextureEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/useCarLights.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // useCarLights.ts
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import gsap from "gsap";
// export function useCarLights(
//     scene: THREE.Object3D,
//     rearLightsRef: React.MutableRefObject<THREE.Mesh[] | undefined>,
//     dashboardRef?: React.MutableRefObject<THREE.Mesh[] | undefined>
// ) {
//     const hasInitialized = useRef(false);
//     useEffect(() => {
//         if (hasInitialized.current) return;
//         // 🔧 Explicitly defined target meshes (no regex)
//         const rearLightNames = [
//             "rear_lightsl_left_rear_light_0",
//             "rear_lightsr_right_rear_light_0",
//             "rear_lights_right_rear_light_0",
//         ];
//         const dashboardNames = ["LCDs_LCDs.0_0"];
//         const foundRearLights: THREE.Mesh[] = [];
//         const foundDashboards: THREE.Mesh[] = [];
//         const allMeshNames: string[] = [];
//         const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;
//         // Traverse scene once
//         scene.traverse((child) => {
//             if (!(child instanceof THREE.Mesh)) return;
//             const name = child.name || "";
//             allMeshNames.push(name);
//             // 🎯 Rear Lights
//             if (rearLightNames.includes(name)) {
//                 foundRearLights.push(child);
//                 // console.log("💡 Found rear light:", name);
//                 // Apply emissive yellow material
//                 const mat = new THREE.MeshStandardMaterial({
//                     color: 0xff6600,
//                     emissive: new THREE.Color(0xff6600), // yellow
//                     emissiveIntensity: 0, // start off
//                     toneMapped: false,
//                 });
//                 child.material = mat;
//                 child.material.needsUpdate = true;
//             }
//             // 🧭 Dashboard candidates
//             if (keywordRegex.test(name) || dashboardNames.includes(name)) {
//                 foundDashboards.push(child);
//             }
//         });
//         // --- 🧩 Rear Lights Ref ---
//         if (foundRearLights.length) {
//             rearLightsRef.current = foundRearLights;
//         }
//         // --- ⚙️ Dashboard Logic (Restored) ---
//         if (dashboardRef && !dashboardRef.current?.length) {
//             if (foundDashboards.length > 0) {
//                 const exact = foundDashboards.find(
//                     (n) => n.name === "LCDs_LCDs.0_0"
//                 ) as THREE.Mesh | undefined;
//                 const pick = exact || (foundDashboards[0] as THREE.Mesh);
//                 if (pick && pick.type === "Mesh") {
//                     const mesh = pick as THREE.Mesh;
//                     const mat: any = Array.isArray(mesh.material)
//                         ? mesh.material[0]
//                         : mesh.material;
//                     if (!mat.emissive) mat.emissive = new THREE.Color(0x00aaff);
//                     mat.emissiveIntensity = 0;
//                     dashboardRef.current = [mesh];
//                     console.info("[Car] Assigned dashboardRef to:", pick.name || "(unnamed)");
//                 }
//             } else {
//                 console.warn(
//                     "[Car] No dashboard/display candidates found. Sample mesh names:",
//                     allMeshNames.slice(0, 40)
//                 );
//             }
//         }
//         // --- ⚡ Flicker Animation on Page Load ---
//         foundRearLights.forEach((mesh) => {
//             const mat = mesh.material as THREE.MeshStandardMaterial;
//             gsap.fromTo(
//                 mat,
//                 { emissiveIntensity: 0 },
//                 {
//                     emissiveIntensity: 3,
//                     duration: 0.1,
//                     repeat: 6,
//                     yoyo: true,
//                     ease: "power1.inOut",
//                     onComplete: () => {
//   mat.emissive.set(0xff0000); // switch emissive color back to red
//   mat.emissiveIntensity = 1; // keep the red glow on
// },
//                 }
//             );
//         });
//         // --- 🌟 Scroll-based gradual brightness ---
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             const maxScroll = document.body.scrollHeight - window.innerHeight;
//             const scrollProgress = Math.min(scrollY / maxScroll, 1);
//             foundRearLights.forEach((mesh) => {
//                 const mat = mesh.material as THREE.MeshStandardMaterial;
//                 gsap.to(mat, {
//                     emissiveIntensity: THREE.MathUtils.lerp(1, 4, scrollProgress),
//                     duration: 0.2,
//                     ease: "power1.out",
//                     onUpdate: () => {
//                         // Blend color from red → yellow based on scroll progress
//                         const color = new THREE.Color(0xff0000).lerp(
//                             new THREE.Color(0xff6600),
//                             scrollProgress
//                         );
//                         mat.emissive.copy(color);
//                     },
//                 });
//             });
//         };
//         window.addEventListener("scroll", handleScroll);
//         hasInitialized.current = true;
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [scene, rearLightsRef, dashboardRef]);
// }
// useCarLights.ts
__turbopack_context__.s([
    "useCarLights",
    ()=>useCarLights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
function useCarLights(scene, rearLightsRef, dashboardRef) {
    _s();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCarLights.useEffect": ()=>{
            if (hasInitialized.current) return;
            const rearLightNames = [
                "rear_lightsl_left_rear_light_0001",
                "rear_lightsr_right_rear_light_0001",
                "rear_lights_right_rear_light_0001"
            ];
            const dashboardNames = [
                "LCDs_LCDs.0_0"
            ];
            const keywordRegex = /lcd|screen|display|panel|monitor|gui|ui|dash/i;
            const foundRearLights = [];
            const foundDashboards = [];
            /* ------------------------------------------------
       FIND MESHES + PREP MATERIALS
    ------------------------------------------------ */ scene.traverse({
                "useCarLights.useEffect": (child)=>{
                    if (!(child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"])) return;
                    const name = child.name || "";
                    // 🚗 Rear lights
                    if (rearLightNames.includes(name)) {
                        foundRearLights.push(child);
                        const originalMat = Array.isArray(child.material) ? child.material[0] : child.material;
                        const mat = originalMat.clone();
                        mat.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000); // pure red
                        mat.emissiveIntensity = 0; // start fully off
                        mat.toneMapped = false;
                        child.material = mat;
                    }
                    // 📺 Dashboard candidates
                    if (keywordRegex.test(name) || dashboardNames.includes(name)) {
                        foundDashboards.push(child);
                    }
                }
            }["useCarLights.useEffect"]);
            /* ------------------------------------------------
       ASSIGN REFS
    ------------------------------------------------ */ if (foundRearLights.length) {
                rearLightsRef.current = foundRearLights;
            }
            if (dashboardRef && foundDashboards.length && !dashboardRef.current?.length) {
                const exact = foundDashboards.find({
                    "useCarLights.useEffect.exact": (m)=>m.name === "LCDs_LCDs.0_0"
                }["useCarLights.useEffect.exact"]);
                dashboardRef.current = exact ? [
                    exact
                ] : [
                    foundDashboards[0]
                ];
            }
            /* ------------------------------------------------
       🔴🔴 DOUBLE BLINK → ⚫ BLACK → 🔴 STEADY RED
    ------------------------------------------------ */ if (foundRearLights.length) {
                const blinkTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    delay: 0.25
                });
                foundRearLights.forEach({
                    "useCarLights.useEffect": (mesh)=>{
                        const mat = mesh.material;
                        blinkTl// --- Blink 1 ON (RED) ---
                        .set(mat.emissive, {
                            r: 1,
                            g: 0,
                            b: 0
                        }, 0).to(mat, {
                            emissiveIntensity: 12,
                            duration: 0.12
                        }, 0)// --- Blink 1 OFF (BLACK) ---
                        .to(mat, {
                            emissiveIntensity: 0,
                            duration: 0.12
                        }, 0.18)// --- Blink 2 ON (RED) ---
                        .set(mat.emissive, {
                            r: 1,
                            g: 0,
                            b: 0
                        }, 0.36).to(mat, {
                            emissiveIntensity: 12,
                            duration: 0.12
                        }, 0.36)// --- Blink 2 OFF (BLACK) ---
                        .to(mat, {
                            emissiveIntensity: 0,
                            duration: 0.12
                        }, 0.54)// --- Settle to steady RED ---
                        .set(mat.emissive, {
                            r: 1,
                            g: 0,
                            b: 0
                        }, 0.72).to(mat, {
                            emissiveIntensity: 4,
                            duration: 0.35
                        }, 0.72);
                    }
                }["useCarLights.useEffect"]);
            }
            /* ------------------------------------------------
       SCROLL-BASED BRIGHTENING + COLOR WARMTH
    ------------------------------------------------ */ const baseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000);
            const midColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff6600);
            const endColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffaa00);
            const handleScroll = {
                "useCarLights.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    const maxScroll = document.body.scrollHeight - window.innerHeight;
                    const progress = Math.min(scrollY / maxScroll, 1);
                    foundRearLights.forEach({
                        "useCarLights.useEffect.handleScroll": (mesh)=>{
                            const mat = mesh.material;
                            if (!(mat.emissive instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"])) {
                                mat.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000);
                            }
                            // intensity ramp
                            mat.emissiveIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(4, 10, progress);
                            // color warmth ramp
                            const color = baseColor.clone().lerp(midColor, progress * 0.7).lerp(endColor, progress * 0.3);
                            mat.emissive.copy(color);
                        }
                    }["useCarLights.useEffect.handleScroll"]);
                }
            }["useCarLights.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            hasInitialized.current = true;
            return ({
                "useCarLights.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["useCarLights.useEffect"];
        }
    }["useCarLights.useEffect"], [
        scene,
        rearLightsRef,
        dashboardRef
    ]);
}
_s(useCarLights, "xlWU9WGpPOGbTJN+8jcj+vweDBA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // components/Footer.tsx
// "use client";
// import Image from "next/image";
// export default function Footer() {
//   return (
//     <footer className="bg-[#E5E7EB] p-4 sm:p-6 md:p-[5vw] text-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8">
//         {/* Left side logo */}
//         <div className="relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center gap-4">
//           <Image
//             src="/tblack.svg"
//             alt="Teraawatt Logo"
//             fill
//             className="object-contain"
//           />
//         </div>
//         {/* Middle links */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start text-base sm:text-lg font-medium mt-4 md:mt-0">
//           <a href="#" className="hover:text-green-600 transition">
//             Pulse
//           </a>
//           <a href="#" className="hover:text-green-600 transition">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-green-600 transition">
//             Terms & Conditions
//           </a>
//         </div>
//       </div>
//       {/* Faint horizontal line */}
//       <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"></div>
//       {/* Bottom row */}
//       <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
//         <div>© 2025 Teraawatt. All rights reserved.</div>
//         <div className="mt-2 sm:mt-0">
//           Hyderabad, Telangana &nbsp;•&nbsp; info@teraawatt.com
//         </div>
//       </div>
//     </footer>
//   );
// }
// components/Footer.tsx
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                        className: " relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/terlogo.png",
                            alt: "Teraawatt Logo",
                            fill: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 95,
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
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                className: "hover:text-green-600 transition",
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 110,
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
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    isComplianceOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 bottom-full mb-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50",
                                        onMouseEnter: openDropdown,
                                        onMouseLeave: closeDropdownWithDelay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-2 right-6 w-0 h-0    border-l-8 border-l-transparent   border-r-8 border-r-transparent   border-t-8 border-t-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dcs",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Data and Security Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/isc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Industry-Specific Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 160,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pgc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Payment Gateway Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 168,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cgln",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Corporate Governance and Legal Notice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 176,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "© 2026 Teraawatt. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Hyderabad, Telangana • info@teraawatt.com"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 91,
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyWhiteRimShader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/applyWhiteRimShader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyBlueInteriorShader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/applyBlueInteriorShader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$preloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/preloader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoTextureEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VideoTextureEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCarLights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/useCarLights.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DashboardAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = DashboardAnimation;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Car({ rearLightsRef, dashboardRef, scale = 1.2 }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/models/final.glb");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const memoizedScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Car.useMemo[memoizedScene]": ()=>scene
    }["Car.useMemo[memoizedScene]"], []);
    // wire lights immediately (no visuals yet)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCarLights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarLights"])(memoizedScene, rearLightsRef, dashboardRef);
    // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Car.useLayoutEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyBlueInteriorShader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBlueInteriorShader"])(scene);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyWhiteRimShader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyWhiteRimShader"])(scene);
            setReady(true); // allow render
        }
    }["Car.useLayoutEffect"], [
        scene
    ]);
    // ❌ Nothing renders until shaders are ready
    if (!ready) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        object: scene,
        scale: scale
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 555,
        columnNumber: 10
    }, this);
}
_s(Car, "vidHKlpJia0ol7PtFk9y4UbbkGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCarLights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarLights"]
    ];
});
_c1 = Car;
function ScrollCameraAnimation({ rearLightsRef }) {
    _s1();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollCameraAnimation.useEffect": ()=>{
            camera.position.set(0, 50, 450);
            camera.lookAt(0, 50, 0);
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                camera.position.set(0, 45, 480);
                camera.lookAt(0, 35, 0);
            }
            const CAMERA_SCROLL_PX = 1900; // 🔑 camera always finishes fast
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: "#scroll-container",
                    start: "top top",
                    end: `+=${CAMERA_SCROLL_PX}`,
                    scrub: 0.5
                }
            });
            tl.to(camera.position, {
                z: isMobile ? 10 : 15,
                y: isMobile ? 20 : 20,
                duration: 1
            });
            // Animate all rear lights
            // defensive: ensure we have lights array before animating
            (rearLightsRef.current || []).forEach({
                "ScrollCameraAnimation.useEffect": (light)=>{
                    const mat = Array.isArray(light.material) ? light.material[0] : light.material;
                    if (!mat) return;
                    tl.to(mat, {
                        emissiveIntensity: 5,
                        duration: 1
                    }, 0);
                // 0 means it starts with the camera animation
                }
            }["ScrollCameraAnimation.useEffect"]);
            return ({
                "ScrollCameraAnimation.useEffect": ()=>{
                    tl.scrollTrigger?.kill();
                    tl.kill();
                }
            })["ScrollCameraAnimation.useEffect"];
        }
    }["ScrollCameraAnimation.useEffect"], [
        camera,
        rearLightsRef
    ]);
    return null;
}
_s1(ScrollCameraAnimation, "Wo14/kl28HhoRfDX+Cg7MK2EhFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c2 = ScrollCameraAnimation;
function FlickerLights({ rearLightsRef }) {
    _s2();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlickerLights.useEffect": ()=>{
            if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;
            // Trigger flicker when scroll reaches the top of the canvas
            const flickerTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: "#scroll-container",
                start: "top top",
                end: "+=1",
                once: true,
                onEnter: {
                    "FlickerLights.useEffect.flickerTrigger": ()=>{
                        rearLightsRef.current?.forEach({
                            "FlickerLights.useEffect.flickerTrigger": (light)=>{
                                const mat = Array.isArray(light.material) ? light.material[0] : light.material;
                                if (!mat) return;
                                // Flicker timeline (two quick flashes)
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(mat, {
                                    emissiveIntensity: 10,
                                    duration: 0.1
                                }).to(mat, {
                                    emissiveIntensity: 0,
                                    duration: 0.1
                                }).to(mat, {
                                    emissiveIntensity: 10,
                                    duration: 0.1
                                }).to(mat, {
                                    emissiveIntensity: 12,
                                    duration: 0.2
                                }); // final steady intensity
                            }
                        }["FlickerLights.useEffect.flickerTrigger"]);
                    }
                }["FlickerLights.useEffect.flickerTrigger"]
            });
            return ({
                "FlickerLights.useEffect": ()=>{
                    flickerTrigger.kill();
                }
            })["FlickerLights.useEffect"];
        }
    }["FlickerLights.useEffect"], [
        rearLightsRef
    ]);
    return null;
}
_s2(FlickerLights, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c3 = FlickerLights;
function Home() {
    _s3();
    const rearLightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // ref for rear lights
    const dashboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // 👈 add this line
    const pulseReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const navActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const layoutReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const videoReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pulseReadyLocalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const videoScrollReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [carScale, setCarScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.2);
    const [showPreloader, setShowPreloader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tryRunAction = ()=>{
        if (!layoutReadyRef.current) return;
        if (!videoReadyRef.current) return;
        if (!videoScrollReadyRef.current) return; // ⭐ NEW
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
            // 2️⃣ Wait for refresh to finish
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    // 3️⃣ INSTANT jump (NO smooth scroll)
                    window.scrollTo({
                        top: videoSection.offsetTop,
                        behavior: "auto"
                    });
                    // 4️⃣ Let ScrollTrigger sync internal progress
                    requestAnimationFrame(()=>{
                        requestAnimationFrame(()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
                            // 5️⃣ Now jump video frame
                            window.dispatchEvent(new Event("triggerVideoJump"));
                        });
                    });
                });
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!ready) return;
            requestAnimationFrame({
                "Home.useEffect": ()=>{
                    requestAnimationFrame({
                        "Home.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
                            layoutReadyRef.current = true;
                            tryRunAction();
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], [
        ready
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onVideoReady = {
                "Home.useEffect.onVideoReady": ()=>{
                    videoReadyRef.current = true;
                    tryRunAction();
                }
            }["Home.useEffect.onVideoReady"];
            const onVideoScrollReady = {
                "Home.useEffect.onVideoScrollReady": ()=>{
                    videoScrollReadyRef.current = true;
                    tryRunAction();
                }
            }["Home.useEffect.onVideoScrollReady"];
            const onPulseReady = {
                "Home.useEffect.onPulseReady": ()=>{
                    pulseReadyLocalRef.current = true;
                    tryRunAction();
                }
            }["Home.useEffect.onPulseReady"];
            window.addEventListener("videoReady", onVideoReady);
            window.addEventListener("videoScrollReady", onVideoScrollReady);
            window.addEventListener("pulseReady", onPulseReady);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("videoReady", onVideoReady);
                    window.removeEventListener("videoScrollReady", onVideoScrollReady);
                    window.removeEventListener("pulseReady", onPulseReady);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (showPreloader) return;
            requestAnimationFrame({
                "Home.useEffect": ()=>{
                    requestAnimationFrame({
                        "Home.useEffect": ()=>{
                            pulseReadyLocalRef.current = true;
                            window.dispatchEvent(new Event("pulseReady"));
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], [
        showPreloader
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleChargeJump = {
                "Home.useEffect.handleChargeJump": ()=>{
                    const targetProgress = -0.18;
                    const scrollContainer = document.getElementById("scroll-container");
                    if (!scrollContainer) return;
                    // 🔥 CRITICAL: recalc ScrollTrigger first
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
                    requestAnimationFrame({
                        "Home.useEffect.handleChargeJump": ()=>{
                            requestAnimationFrame({
                                "Home.useEffect.handleChargeJump": ()=>{
                                    const containerHeight = scrollContainer.offsetHeight;
                                    const windowHeight = window.innerHeight;
                                    const isMobile = window.innerWidth < 768;
                                    const startOffset = containerHeight * (isMobile ? 0.635 : 0.7);
                                    const scrollableDistance = containerHeight - windowHeight;
                                    const maxProgressDistance = Math.max(1, scrollableDistance - startOffset);
                                    const targetScrollY = startOffset + targetProgress * maxProgressDistance;
                                    window.scrollTo({
                                        top: targetScrollY,
                                        behavior: "smooth"
                                    });
                                }
                            }["Home.useEffect.handleChargeJump"]);
                        }
                    }["Home.useEffect.handleChargeJump"]);
                }
            }["Home.useEffect.handleChargeJump"];
            window.addEventListener("scrollToFrame804", handleChargeJump);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("scrollToFrame804", handleChargeJump)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Responsive scroll height and car scale
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleResize = {
                "Home.useEffect.handleResize": ()=>{
                    const width = window.innerWidth;
                    if (width < 640) {
                        setCarScale(1); // Mobile
                    } else if (width < 1024) {
                        setCarScale(0.9); // Tablet
                    } else {
                        setCarScale(1.2); // Desktop
                    }
                }
            }["Home.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const scrollHeight = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768 ? "850vh" : "5000vh";
    const contentHeight = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768 ? "50vh" : "300vh";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    if (window.__MART_LOCK__) return;
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
                }
            }["Home.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    if (!ready) return null;
    if (showPreloader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$preloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onDone: ()=>{
                setShowPreloader(false);
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        pulseReadyRef.current = true;
                        window.dispatchEvent(new Event("pulseReady"));
                    });
                });
            }
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 901,
            columnNumber: 7
        }, this);
    }
    const isMobile = ("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth < 768;
    const cameraFov = isMobile ? 70 : 50; // 👈 tweak values here
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            background: "black",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "scroll-container",
                style: {
                    height: scrollHeight,
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollCanvasWrapper, {
                    cameraFov: cameraFov,
                    rearLightsRef: rearLightsRef,
                    dashboardRef: dashboardRef,
                    carScale: carScale,
                    progressRef: progressRef
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 930,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 928,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "video-section",
                className: "min-h-screen relative z-10 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 934,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen relative z-10 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 938,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 937,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 941,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 923,
        columnNumber: 5
    }, this);
}
_s3(Home, "IHfzJx24IrEGXR4C/WklNg0l0uo=");
_c4 = Home;
// Separate component to handle InView logic cleanly
function ScrollCanvasWrapper({ cameraFov, rearLightsRef, dashboardRef, carScale, progressRef }) {
    _s4();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0,
        rootMargin: "200px 0px 200px 0px" // give some buffer so it doesn't pop in/out harshly
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            zIndex: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            frameloop: inView ? "always" : "never",
            camera: {
                position: [
                    0,
                    1.5,
                    25
                ],
                fov: cameraFov
            },
            style: {
                height: "100vh",
                width: "100vw",
                pointerEvents: "none",
                willChange: "transform"
            },
            dpr: [
                1,
                1.5
            ],
            // Lower performance mode when scrolling fast or not focused?
            // keeping default for now but disabling when out of view
            performance: {
                min: 0.5,
                max: 1
            },
            gl: {
                antialias: true,
                powerPreference: "high-performance",
                alpha: false,
                stencil: false,
                depth: true
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.6
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 993,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        10,
                        10,
                        5
                    ],
                    intensity: 1
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 994,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Car, {
                    rearLightsRef: rearLightsRef,
                    dashboardRef: dashboardRef,
                    scale: carScale
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 995,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollCameraAnimation, {
                    rearLightsRef: rearLightsRef
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 996,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlickerLights, {
                    rearLightsRef: rearLightsRef
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 997,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardAnimation, {
                        dashboardRef: dashboardRef,
                        progressRef: progressRef
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 999,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 998,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoTextureEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    progressRef: progressRef
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                    enabled: false
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1002,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 972,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_s4(ScrollCanvasWrapper, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c5 = ScrollCanvasWrapper;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/final.glb");
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "DashboardAnimation");
__turbopack_context__.k.register(_c1, "Car");
__turbopack_context__.k.register(_c2, "ScrollCameraAnimation");
__turbopack_context__.k.register(_c3, "FlickerLights");
__turbopack_context__.k.register(_c4, "Home");
__turbopack_context__.k.register(_c5, "ScrollCanvasWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d3123cdf._.js.map