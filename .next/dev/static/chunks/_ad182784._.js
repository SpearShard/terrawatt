(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }
// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage
// export default function Navbar() {
//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Mobile
//   const pathname = usePathname();
//   // --- NEW: Prevent Body Scroll when Menu is Open ---
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => { document.body.style.overflow = "auto"; };
//   }, [isMobileMenuOpen]);
//   // --- Scroll Detection ---
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   // --- State Initialization & URL Sync ---
// useEffect(() => {
//   const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
//   if (storedActive) {
//     setActive(storedActive);
//     localStorage.removeItem(ACTIVE_NAV_KEY);
//     return;
//   }
//   // Only set default "Pulse" on homepage if no specific tab was requested
//   if (pathname === "/") {
//     // Check if we arrived with a specific action (TeraaCharge or TeraaMart)
//     const action = localStorage.getItem("TW_action");
//     if (action === "go_charge") {
//       setActive("TeraaCharge");
//     } else if (action === "go_mart") {
//       setActive("TeraaMart");
//     } else {
//       setActive("Pulse");
//     }
//   } else if (pathname.includes("investors")) {
//     setActive("Investors & Partners");
//   } else if (pathname.includes("insights")) {
//     setActive("Insights");
//   } else if (pathname.includes("connect")) {
//     setActive("Connect");
//   }
// }, [pathname]);
//   const navItems = [
//     { name: "Pulse", href: "/" },
//     { name: "TeraaCharge", href: "/" },
//     { name: "TeraaMart", href: "/" },
//     { name: "Investors & Partners", href: "/investors-and-partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Connect", href: "/connect", isButton: true },
//   ];
//   // Function to handle custom routing and setting state
// const handleCustomNavigation = (itemName: string) => {
//   const isOnPulse = window.location.pathname === "/";
// // Only mark navbar navigation if we're leaving the page
// if (!isOnPulse) {
//   sessionStorage.setItem("NAV_SOURCE", "navbar");
// }
//   // 🔑 MARK THAT THIS NAVIGATION CAME FROM NAVBAR
//   sessionStorage.setItem("NAV_SOURCE", "navbar");
//   // Close mobile menu immediately if open
//   setIsMobileMenuOpen(false);
//   if (itemName === "TeraaCharge") {
//     setActive("TeraaCharge");
//     if (isOnPulse) {
//       // Already on homepage → immediately jump to TeraaCharge frame
//       window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//     } else {
//       // Coming from any other page (Investors, Insights, Connect, etc.)
//       // Set flag and redirect to homepage
//       localStorage.setItem("TW_action", "go_charge");
//       window.location.href = "/";
//     }
//     return true;
//   }
//   if (itemName === "TeraaMart") {
//     setActive("TeraaMart");
//     if (isOnPulse) {
//       // Already on homepage → trigger mart jump
//       window.dispatchEvent(new Event("triggerVideoJump"));
//     } else {
//       // Coming from other page
//       localStorage.setItem("TW_action", "go_mart");
//       window.location.href = "/";
//     }
//     return true;
//   }
//   return false;
// };
//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
//         ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
//         : "py-6 bg-transparent"
//         }`}
//     >
//       {/* Responsive Container Logic:
//         Mobile: w-full, justify-between, px-6 (Spreads logo and hamburger)
//         Desktop (md): w-fit, mx-auto, justify-center, px-10 (Restores your original centered layout)
//       */}
//       <div className="flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10">
//         {/* Logo and Nav Items Container */}
//         <div className="flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center relative z-50"
//             onClick={() => {
//   sessionStorage.setItem("NAV_SOURCE", "navbar");
//   setActive("Pulse");
//   setIsMobileMenuOpen(false);
// }}
//           >
//             <Image
//               src="/teraawatt.svg"
//               alt="TeraaWatt Logo"
//               width={125}
//               height={45}
//               className="object-contain"
//             />
//           </Link>
//           {/* --- Mobile Hamburger Button (Visible on mobile only) --- */}
//           <button
//             className="md:hidden relative z-50 text-white p-2 focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//               <span
//                 className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
//                   }`}
//               />
//               <span
//                 className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
//                   }`}
//               />
//               <span
//                 className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                   }`}
//               />
//             </div>
//           </button>
//           {/* --- Desktop Nav Items (Hidden on Mobile) --- */}
//           <div className="hidden md:flex items-center space-x-8 text-white font-normal relative">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="relative px-2 py-1 group"
//                 onClick={(e) => {
//                   if (item.name === "Investors & Partners") {
//                     e.preventDefault();
//                     window.location.href = "/investors-and-partners";
//                     return;
//                   }
//                   const handled = handleCustomNavigation(item.name);
//                   if (handled) {
//                     e.preventDefault();
//                   } else {
//                     setActive(item.name);
//                   }
//                 }}
//               >
//                 <span
//                   className={`relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name
//                     ? "text-white"
//                     : "text-neutral-400 group-hover:text-white"
//                     }`}
//                   onClick={(e) => {
//                     const handled = handleCustomNavigation(item.name);
//                     if (handled) {
//                       e.preventDefault();
//                     } else {
//                       setActive(item.name);
//                     }
//                   }}
//                 >
//                   {!item.isButton ? (
//                     item.name
//                   ) : (
//                     <Image
//                       src="/Contact_page/connect.svg"
//                       alt="Connect"
//                       width={130}
//                       height={48}
//                       className={`transition duration-300 ${active === "Connect"
//                         ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
//                         : "opacity-80 hover:opacity-100"
//                         }`}
//                     />
//                   )}
//                 </span>
//                 {/* Desktop Indicator */}
//                 {!item.isButton && active === item.name && (
//                   <motion.div
//                     layoutId="navbar-indicator"
//                     className="absolute inset-0 z-10 rounded-full"
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
//                       boxShadow:
//                         "0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)",
//                     }}
//                     transition={{
//                       type: "spring",
//                       bounce: 0.2,
//                       stiffness: 100,
//                       damping: 10,
//                     }}
//                   />
//                 )}
//                 {/* Desktop Hover Glow */}
//                 {!item.isButton && (
//                   <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/5" />
//                 )}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* --- Mobile Menu Overlay --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center pt-10 h-screen"
//           >
//             <div className="flex flex-col space-y-6 text-center">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="relative px-4 py-2"
//                   onClick={(e) => {
//                     if (item.name === "Investors & Partners") {
//                       e.preventDefault();
//                       window.location.href = "/investors-and-partners";
//                       setIsMobileMenuOpen(false);
//                       return;
//                     }
//                     const handled = handleCustomNavigation(item.name);
//                     if (handled) {
//                       e.preventDefault();
//                     } else {
//                       setActive(item.name);
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <span
//                     className={`text-xl font-medium tracking-wide ${active === item.name
//                       ? "text-white"
//                       : "text-neutral-400"
//                       }`}
//                   >
//                     {!item.isButton ? (
//                       item.name
//                     ) : (
//                       // Simplified Connect button for Mobile
//                       <span className={`${active === "Connect" ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : ""}`}>
//                         Connect
//                       </span>
//                     )}
//                   </span>
//                   {/* Mobile Active Indicator (Simple Underline) */}
//                   {!item.isButton && active === item.name && (
//                     <motion.div
//                       layoutId="mobile-indicator"
//                       className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
//                     />
//                   )}
//                 </Link>
//               ))}
//             </div>
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New State for Mobile
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // --- NEW: Prevent Body Scroll when Menu is Open ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isMobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isMobileMenuOpen
    ]);
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
    // --- State Initialization & URL Sync ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
            if (storedActive) {
                setActive(storedActive);
                localStorage.removeItem(ACTIVE_NAV_KEY);
                return;
            }
            // Only set default "Pulse" on homepage if no specific tab was requested
            if (pathname === "/") {
                // Check if we arrived with a specific action (TeraaCharge or TeraaMart)
                const action = localStorage.getItem("TW_action");
                if (action === "go_charge") {
                    setActive("TeraaCharge");
                } else if (action === "go_mart") {
                    setActive("TeraaMart");
                } else {
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
    ]);
    const navItems = [
        {
            name: "Pulse",
            href: "/"
        },
        {
            name: "TeraaCharge",
            href: "/",
            image: "/teraacharge.png",
            width: 110,
            height: 28
        },
        {
            name: "TeraaMart",
            href: "/",
            image: "/teraamartlogo.png",
            width: 100,
            height: 26
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
        sessionStorage.removeItem("PAGE_WAS_RELOADED");
        const isOnPulse = window.location.pathname === "/";
        // Close mobile menu immediately if open
        setIsMobileMenuOpen(false);
        if (itemName === "TeraaCharge") {
            setActive("TeraaCharge");
            if (isOnPulse) {
                // Already on homepage → immediately jump to TeraaCharge frame
                window.dispatchEvent(new CustomEvent("scrollToFrame804"));
            } else {
                // Coming from any other page (Investors, Insights, Connect, etc.)
                // Set flag and redirect to homepage
                localStorage.setItem("TW_action", "go_charge");
                window.location.href = "/";
            }
            return true;
        }
        if (itemName === "TeraaMart") {
            setActive("TeraaMart");
            if (isOnPulse) {
                // Already on homepage → trigger mart jump
                window.dispatchEvent(new Event("triggerVideoJump"));
            } else {
                // Coming from other page
                localStorage.setItem("TW_action", "go_mart");
                window.location.href = "/";
            }
            return true;
        }
        return false;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl  shadow-lg" : "py-6 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center relative z-50",
                            onClick: ()=>{
                                sessionStorage.setItem("NAV_SOURCE", "navbar");
                                setActive("Pulse");
                                setIsMobileMenuOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/teraawatt.svg",
                                alt: "TeraaWatt Logo",
                                width: 125,
                                height: 45,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden relative z-50 text-white p-2 focus:outline-none",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 flex flex-col justify-center space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8 text-white font-normal relative",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "relative px-2 py-1 group",
                                    onClick: (e)=>{
                                        if (item.name === "Investors & Partners") {
                                            e.preventDefault();
                                            window.location.href = "/investors-and-partners";
                                            return;
                                        }
                                        const handled = handleCustomNavigation(item.name);
                                        if (handled) {
                                            e.preventDefault();
                                        } else {
                                            setActive(item.name);
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400 group-hover:text-white"}`,
                                            onClick: (e)=>{
                                                const handled = handleCustomNavigation(item.name);
                                                if (handled) {
                                                    e.preventDefault();
                                                } else {
                                                    setActive(item.name);
                                                }
                                            },
                                            children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image,
                                                alt: item.name,
                                                width: item.width,
                                                height: item.height,
                                                className: `transition-all duration-300 ${active === item.name ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" : "opacity-70 group-hover:opacity-100"}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 589,
                                                columnNumber: 3
                                            }, this) : !item.isButton ? item.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Contact_page/connect.svg",
                                                alt: "Connect",
                                                width: 130,
                                                height: 48,
                                                className: `transition duration-300 ${active === "Connect" ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : "opacity-80 hover:opacity-100"}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 603,
                                                columnNumber: 3
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 574,
                                            columnNumber: 17
                                        }, this),
                                        !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "navbar-indicator",
                                            className: "absolute inset-0 z-10 rounded-full",
                                            style: {
                                                background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                                                boxShadow: "0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)"
                                            },
                                            transition: {
                                                type: "spring",
                                                bounce: 0.2,
                                                stiffness: 100,
                                                damping: 10
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 620,
                                            columnNumber: 19
                                        }, this),
                                        !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 639,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 553,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center pt-10 h-screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-6 text-center",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "relative px-4 py-2",
                                onClick: (e)=>{
                                    if (item.name === "Investors & Partners") {
                                        e.preventDefault();
                                        window.location.href = "/investors-and-partners";
                                        setIsMobileMenuOpen(false);
                                        return;
                                    }
                                    const handled = handleCustomNavigation(item.name);
                                    if (handled) {
                                        e.preventDefault();
                                    } else {
                                        setActive(item.name);
                                        setIsMobileMenuOpen(false);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xl font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                        children: !item.isButton ? item.name : // Simplified Connect button for Mobile
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${active === "Connect" ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : ""}`,
                                            children: "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 690,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 680,
                                        columnNumber: 19
                                    }, this),
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "mobile-indicator",
                                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 698,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 659,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 657,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 499,
        columnNumber: 5
    }, this);
}
_s(Navbar, "unDhPaJyAYBY0Al1lTNYVZCnaEQ=", false, function() {
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

// "use client";
// import Image from "next/image";
// import { useRef } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// export default function About() {
//   // motion values
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     mouseX.set(x);
//     mouseY.set(y);
//   };
//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };
//   // create transforms for tilt effect
//   const rotateX = useTransform(mouseY, (y) => -y / 70); // tilt up/down
//   const rotateY = useTransform(mouseX, (x) => x / 70);  // tilt left/right
// //   const translateX = useTransform(mouseX, (x) => x / 60);
// //   const translateY = useTransform(mouseY, (y) => y / 60);
//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 gap-8 sm:gap-12 md:gap-16"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Logo with tilt effect */}
//       <motion.div
//         style={{ rotateX, rotateY, }}
//         className="relative w-[60vw] sm:w-[45vw] md:w-[30vw] h-[30vh] perspective-1000"
//       >
//         <Image
//           src="./teraawatt.svg"
//           alt="Teraawatt Logo"
//           fill
//           className="object-contain"
//         />
//       </motion.div>
//       {/* Intro Text */}
//       {/* <motion.p
//         style={{ rotateX, rotateY,}}
//         className="text-center max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2"
//       >
//       </motion.p> */}
//       {/* Green Button */}
//       <motion.button
//         style={{ rotateX, rotateY,  }}
//         whileHover={{ scale: 1.1 }}
//         className="bg-green-500 hover:bg-green-600 transition-all text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base"
//       >
//         Explore our solutions
//       </motion.button>
//       {/* Recharge Image */}
//       {/* <motion.div
//         style={{ rotateX, rotateY,  }}
//         className="relative w-full max-w-3xl h-40 sm:h-64 md:h-96"
//       >
//         <Image
//           src="https://teraawatt.com/recharge.png"
//           alt="Recharge"
//           fill
//           className="object-contain"
//         />
//       </motion.div> */}
//       {/* Text Sections */}
//       <motion.div
//         style={{ rotateX, rotateY,  }}
//         className="flex text-center flex-col gap-6 sm:gap-8 md:gap-10 max-w-4xl px-2"
//       >
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//           We make EV driving easier with seamless charging, AI-powered trip planning, and a vision to make EVs as accessible as petrol cars for cities and beyond
//         </p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-bold">Our <span className="text-[#05DF72]">Products</span></h2>
//         <p className="text-xs sm:text-sm md:text-base">Comprehensive solutions for the future of electric mobility</p>
//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaCoins</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Our digital currency system that rewards sustainable driving behavior. Earn coins for using our charging network, reducing carbon footprint, and participating in our green mobility ecosystem.
//         </p>
//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaVouchers</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Flexible payment solutions for EV charging and services. Prepaid vouchers that make EV ownership more accessible and provide discounts for frequent users of our charging network.
//         </p>
//         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[4vw] font-bold">TeraaMart</h3>
//         <p className="text-xs sm:text-sm md:text-base leading-relaxed">
//           Your one-stop marketplace for EV accessories, charging equipment, and sustainable mobility products. Quality products curated specifically for electric vehicle owners and enthusiasts.
//         </p>
//       </motion.div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* =======================
   Data (ORDER MATTERS)
======================= */ const products = [
    {
        id: "charge",
        titleImage: "/teraaCharge.png",
        subtitle: "The Charging Network",
        description: "Access the fastest and most reliable EV charging network. Find stations, manage charging sessions, and view real-time availability all from one seamless platform.",
        image: "/About/teraacharge.jpg",
        accentColor: "#22D3EE",
        features: [
            "Real-time station availability",
            "Fast & Ultra-fast charging",
            "Seamless app integration",
            "24/7 support"
        ]
    },
    {
        id: "coins",
        titleImage: "/teraacoins.png",
        subtitle: "Digital Currency",
        description: "A reward system for sustainable driving. Earn coins for charging, eco-driving, and participating in the green mobility ecosystem.",
        image: "/About/teraacoins.png",
        accentColor: "#FFD700",
        features: [
            "Earn while you drive",
            "Redeem for charging",
            "Marketplace access",
            "Secure & digital"
        ]
    },
    {
        id: "vouchers",
        titleImage: "/teraavouchers.png",
        subtitle: "Flexible Payment",
        description: "Prepaid vouchers that make EV ownership more accessible with discounts and corporate-friendly options.",
        image: "/About/teraavoucher.png",
        accentColor: "#05DF72",
        features: [
            "Prepaid flexibility",
            "Corporate gifting",
            "Bulk discounts",
            "Instant delivery"
        ]
    },
    {
        id: "mart",
        titleImage: "/teraamartlogo.png",
        subtitle: "EV Marketplace",
        description: "A curated marketplace for EV accessories, charging equipment, and sustainable mobility products.",
        image: "/About/teraamart.png",
        accentColor: "#00BFFF",
        features: [
            "EV accessories",
            "Home chargers",
            "Verified quality",
            "Eco products"
        ]
    }
];
/* =======================
   Product Section
======================= */ const ProductSection = ({ data, index })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        100,
        -100
    ]);
    const scaleImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.2,
        0.8
    ], [
        0.9,
        1.05
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.1,
        0.3,
        0.8
    ], [
        0,
        1,
        1
    ]);
    const reverse = index % 2 !== 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: data.id,
        className: "min-h-screen flex items-center px-6 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container mx-auto flex flex-col md:flex-row items-center gap-16 ${reverse ? "md:flex-row-reverse" : ""}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        opacity
                    },
                    className: "flex-1 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#05DF72] font-mono text-sm tracking-widest",
                            children: [
                                "0",
                                index + 1,
                                " — ",
                                data.subtitle
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: data.titleImage,
                            alt: "image",
                            width: 420,
                            height: 120,
                            className: "mb-2",
                            priority: index === 0
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg max-w-lg",
                            children: data.description
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 pt-4",
                            children: data.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 border-b border-white/10 pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 bg-[#05DF72] rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        f
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        y: yImg,
                        scale: scaleImg
                    },
                    className: "flex-1 h-[60vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: data.image,
                        alt: "image",
                        className: "w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/About.tsx",
            lineNumber: 246,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductSection, "AoRU5SWjdh1ZwGPHNmptrKmKl0M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ProductSection;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-auto py-[12vw] flex flex-col items-center justify-center text-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/teraawatt.svg",
                        alt: "Teraawatt",
                        width: 420,
                        height: 120,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-36 h-[6px] bg-red-500 rounded-full my-8"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-white/90 text-lg leading-relaxed",
                        children: [
                            "Driving electric is just the start.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            "We're building the connected system that powers every part of your EV journey."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductSection, {
                    data: product,
                    index: index
                }, product.id, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 text-center bg-neutral-900/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl font-bold mb-8",
                        children: "Join the Revolution"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-gray-400 mb-10",
                        children: "The future of mobility is electric, connected, and rewarding."
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/connect",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[#05DF72] transition",
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c1 = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductSection");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollingCoin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useRef } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// function createRealisticCoin() {
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
//   /* --- materials (NO normal map) --- */
//   const matSide = new THREE.MeshStandardMaterial({
//     color: 0xd29508,
//     metalness: 1.0,
//     roughness: 0.22,
//     emissive: new THREE.Color(0xd29508),
//     emissiveIntensity: 0.5,
//   });
//   const matFace = new THREE.MeshStandardMaterial({
//     color: 0xd29508,
//     metalness: 1.0,
//     roughness: 0.18,
//     emissive: new THREE.Color(0xd29508),
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
//   const coinMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
//   // Tweak these values to control the animation exactly how you want
//   const CONFIG = {
//     // When does the coin animation start & finish? (0–1 scroll progress)
//     startProgress: 0.0,
//     endProgress: 0.12,
//     // Starting position & scale (when scroll = 0)
//     start: {
//       z: 2.46, // How close to your face (higher = closer)
//       y: 0, // Vertical offset at start
//       x: 0, // Vertical offset at start
//       scale: 3.8, // How HUGE it appears at the beginning
//     },
//     // Final position & scale (when coin lands on phone)
//     end: {
//       z: 0.01, // Final depth (0 = on phone screen, 0.01 = slightly in front)
//       x: 0.2,
//       y: 0.4, // Final vertical position
//       scale: 0.45, // Final size on phone
//     },
//     // Spin speed
//     spinY: 4,
//     spinX: 1.8,
//     // Fade from black to gold settings
//     goldEndProgress: 0.02, // When to finish fading to gold (0.02 = first 17% of animation)
//   };
//   useFrame((_, delta) => {
//     const mesh = meshRef.current;
//     const p = progressRef.current;
//     // BEFORE animation starts — hide coin
//     if (p < CONFIG.startProgress) {
//       mesh.visible = false;
//       return;
//     }
//     // FIRST MOMENT — coin appears facing you, BLACK at first
//     if (p >= CONFIG.startProgress && p < CONFIG.startProgress + 0.02) {
//       mesh.visible = true;
//       mesh.rotation.set(Math.PI / 2, 0, 0); // rotate 90° so the face points forward
//       mesh.position.set(CONFIG.start.x, CONFIG.start.y, CONFIG.start.z);
//       mesh.scale.set(CONFIG.start.scale, CONFIG.start.scale, CONFIG.start.scale);
//       // Start with black color
//       if (coinMaterialsRef.current.length > 0) {
//         coinMaterialsRef.current.forEach((mat) => {
//           mat.color.setHex(0x000000);
//           mat.emissive.setHex(0x000000);
//           mat.emissiveIntensity = 0;
//         });
//       }
//       return;
//     }
//     // If inside animation range → spin + move toward phone
//     if (p >= CONFIG.startProgress && p <= CONFIG.endProgress) {
//       const local = (p - CONFIG.startProgress) / (CONFIG.endProgress - CONFIG.startProgress);
//       const t = THREE.MathUtils.clamp(local, 0, 1);
//       const ease = THREE.MathUtils.smoothstep(t, 0, 1);
//       mesh.visible = true;
//       // Start spinning only AFTER leaving the face
//       if (p > CONFIG.startProgress + 0.02) {
//         mesh.rotation.y += delta * CONFIG.spinY;
//         mesh.rotation.x += delta * CONFIG.spinX;
//       }
//       // Move
//       mesh.position.z = THREE.MathUtils.lerp(CONFIG.start.z, CONFIG.end.z, ease);
//       mesh.position.y = THREE.MathUtils.lerp(CONFIG.start.y, CONFIG.end.y, ease);
//       mesh.position.x = THREE.MathUtils.lerp(CONFIG.start.x, CONFIG.end.x, ease);
//       // Scale
//       const s = THREE.MathUtils.lerp(CONFIG.start.scale, CONFIG.end.scale, ease);
//       mesh.scale.set(s, s, s);
//       // Fade FROM black TO gold at the beginning
//       if (p < CONFIG.goldEndProgress) {
//         const goldLocal = (p - CONFIG.startProgress) / (CONFIG.goldEndProgress - CONFIG.startProgress);
//         const goldProgress = THREE.MathUtils.clamp(goldLocal, 0, 1);
//         const blackColor = new THREE.Color(0x000000);
//         const goldColor = new THREE.Color(0xd29508);
//         const fadedColor = blackColor.clone().lerp(goldColor, goldProgress);
//         // Update materials to fade from black to gold
//         if (coinMaterialsRef.current.length > 0) {
//           coinMaterialsRef.current.forEach((mat) => {
//             mat.color.copy(fadedColor);
//             mat.emissive.copy(fadedColor);
//             mat.emissiveIntensity = 0.5 * goldProgress; // Increase glow as it becomes gold
//           });
//         }
//       } else {
//         // Keep full gold color after fade completes
//         if (coinMaterialsRef.current.length > 0) {
//           coinMaterialsRef.current.forEach((mat) => {
//             mat.color.setHex(0xd29508);
//             mat.emissive.setHex(0xd29508);
//             mat.emissiveIntensity = 0.5;
//           });
//         }
//       }
//       return;
//     }
//     // AFTER animation ends → lock final position or hide
//     if (p > CONFIG.endProgress) {
//       mesh.visible = false;
//     }
//   });
//   return (
//     <group ref={meshRef}>
//       <primitive
//         object={(() => {
//           const m = createRealisticCoin();
//           m.castShadow = true;
//           m.receiveShadow = true;
//           // Store material references for color manipulation
//           const materials = Array.isArray(m.material) ? m.material : [m.material];
//           coinMaterialsRef.current = materials.filter(
//             (mat): mat is THREE.MeshStandardMaterial => mat instanceof THREE.MeshStandardMaterial
//           );
//           return m;
//         })()}
//       />
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
        appearAt: 0.0,
        disappearAt: 0.18,
        darkenEnd: 0.03,
        start: {
            z: 2.46,
            x: 0,
            y: 0,
            scale: 3.8
        },
        end: {
            z: 0.01,
            x: 0.13,
            y: 0.47,
            scale: 6
        },
        /* ---- rotation phases ---- */ freeSpinStart: 0.03,
        freeSpinEnd: 0.14,
        startRotation: {
            x: Math.PI / 20,
            y: 0,
            z: 0
        },
        finalRotation: {
            x: -Math.PI / 5,
            y: -Math.PI / 45,
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
            lineNumber: 495,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollingCoin.tsx",
        lineNumber: 494,
        columnNumber: 5
    }, this);
}
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
//   // Critical: store the ScrollTrigger instance
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
//   const [loaded, setLoaded] = useState(false);
//   const fgImagesRef = useRef<HTMLImageElement[]>([]);
//   const bgImagesRef = useRef<HTMLImageElement[]>([]);
//   const FG_FRAMES = 405;
//   const BG_FRAMES = 191;
//   const START_BG_AT = 130;
//   const CANVAS_W = 1080;
//   const CANVAS_H = 1920;
//   const targetProgress = 289 / (FG_FRAMES - 1);
//   // Load all images with batching to prevent network congestion
//   useEffect(() => {
//     let loadedCount = 0;
//     const total = FG_FRAMES + BG_FRAMES;
//     const batchSize = 50; // Load 50 images at a time
//     const delayBetweenBatches = 100; // ms
//     const loadImage = (url: string, arr: HTMLImageElement[]) => {
//       const img = new Image();
//       img.crossOrigin = "anonymous";
//       img.src = url;
//       img.onload = () => {
//         (img as any).loaded = true;
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       img.onerror = () => {
//         (img as any).loaded = false;
//         loadedCount++;
//         if (loadedCount >= total) setLoaded(true);
//       };
//       arr.push(img);
//     };
//     const loadBatch = (start: number, end: number, urls: string[], arr: HTMLImageElement[]) => {
//       for (let i = start; i < Math.min(end, urls.length); i++) {
//         loadImage(urls[i], arr);
//       }
//     };
//     const fgUrls: string[] = [];
//     for (let i = 1; i <= FG_FRAMES; i++) {
//       fgUrls.push(`/iphoneframes/frame_${String(i).padStart(5, "0")}.webp`);
//     }
//     const bgUrls: string[] = [];
//     for (let i = 1; i <= BG_FRAMES; i++) {
//       bgUrls.push(`https://ik.imagekit.io/yv4cjaya8/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
//     }
//     let fgBatchIndex = 0;
//     let bgBatchIndex = 0;
//     const loadNextBatch = () => {
//       if (fgBatchIndex < fgUrls.length) {
//         const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
//         loadBatch(fgBatchIndex, end, fgUrls, fgImagesRef.current);
//         fgBatchIndex = end;
//       }
//       if (bgBatchIndex < bgUrls.length) {
//         const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
//         loadBatch(bgBatchIndex, end, bgUrls, bgImagesRef.current);
//         bgBatchIndex = end;
//       }
//       if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length) {
//         setTimeout(loadNextBatch, delayBetweenBatches);
//       }
//     };
//     loadNextBatch();
//   }, []);
//   // Main scroll-triggered animation
//   useEffect(() => {
//     if (!loaded || !containerRef.current || !fgCanvasRef.current || !bgCanvasRef.current) return;
//     const fgCanvas = fgCanvasRef.current;
//     const bgCanvas = bgCanvasRef.current;
//     const fgCtx = fgCanvas.getContext("2d")!;
//     const bgCtx = bgCanvas.getContext("2d")!;
//     fgCanvas.width = bgCanvas.width = CANVAS_W;
//     fgCanvas.height = bgCanvas.height = CANVAS_H;
//     const render = () => {
//       const fgIndex = Math.min(FG_FRAMES - 1, Math.floor(fgFrameRef.current + 0.0001));
//       const fgImg = fgImagesRef.current[fgIndex];
//       if ((fgImg as any)?.loaded) {
//         fgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         fgCtx.drawImage(fgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//       const bgIndex = Math.min(BG_FRAMES - 1, Math.floor(bgFrameRef.current));
//       const bgImg = bgImagesRef.current[bgIndex];
//       if ((bgImg as any)?.loaded) {
//         bgCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
//         bgCtx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
//       }
//     };
//     // Kill any old trigger
//     if (scrollTriggerRef.current) {
//       scrollTriggerRef.current.kill();
//     }
//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "+=400%",
//       scrub: 1,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         fgFrameRef.current = progress * (FG_FRAMES - 1);
//         if (fgFrameRef.current >= START_BG_AT) {
//           const bgProgress = (fgFrameRef.current - START_BG_AT) / (FG_FRAMES - START_BG_AT);
//           bgFrameRef.current = bgProgress * (BG_FRAMES - 1);
//         } else {
//           bgFrameRef.current = 0;
//         }
//         scrollProgressRef.current = progress;
//         render();
//       },
//     });
//     scrollTriggerRef.current = st;
//     render();
//     return () => {
//       st.kill();
//       scrollTriggerRef.current = null;
//     };
//   }, [loaded]);
//   // Handle navigation from other pages
//   useEffect(() => {
//     const action = localStorage.getItem("TW_action");
//     if (action === "go_mart") {
//       localStorage.removeItem("TW_action");
//       const waitAndJump = () => {
//         if (scrollTriggerRef.current) {
//           ScrollTrigger.refresh();
//           const st = scrollTriggerRef.current;
//           const scrollPos = st.start + targetProgress * (st.end - st.start);
//           st.scroll(scrollPos);
//         } else {
//           requestAnimationFrame(waitAndJump);
//         }
//       };
//       waitAndJump();
//     }
//   }, []);
//     useEffect(() => {
//     if (!loaded) return;
//     const handleTrigger = () => {
//       window.scrollTo(0, 0);
//       const st = scrollTriggerRef.current;
//       if (st) {
//         const scrollPos = st.start + targetProgress * (st.end - st.start);
//           window.scrollTo({ top: scrollPos });
//       }
//     };
//     window.addEventListener("triggerVideoJump", handleTrigger);
//     return () => {
//       window.removeEventListener("triggerVideoJump", handleTrigger);
//     };
//   }, [loaded]);
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
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rawProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const FG_TOTAL_FRAMES = 405;
    const START_BG_AT_FRAME = 130;
    const targetProgress = 289 / (FG_TOTAL_FRAMES - 1);
    /* ---------------- VIDEO SETUP (Minimal wake-up — your encoding is perfect now) ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const setupVideo = {
                "Video.useEffect.setupVideo": (video, src)=>{
                    video.src = src;
                    video.muted = true;
                    video.playsInline = true;
                    video.preload = "auto";
                    video.crossOrigin = "anonymous";
                    video.load();
                    // Very light wake-up — just enough to start decoding
                    video.currentTime = 0.01;
                    setTimeout({
                        "Video.useEffect.setupVideo": ()=>{
                            video.currentTime = 0;
                        }
                    }["Video.useEffect.setupVideo"], 300);
                }
            }["Video.useEffect.setupVideo"];
            if (bgVideoRef.current) {
                setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub.mp4");
            }
            if (fgVideoRef.current) {
                setupVideo(fgVideoRef.current, "/iphoneframes/scrub.mp4");
            }
        }
    }["Video.useEffect"], []);
    /* ---------------- ULTRA-PRECISE SCRUBBING LOOP (Optimized for high-keyframe video) ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const bgVideo = bgVideoRef.current;
            const fgVideo = fgVideoRef.current;
            if (!bgVideo || !fgVideo) return;
            let raf;
            let lastTime = performance.now();
            const animate = {
                "Video.useEffect.animate": (time)=>{
                    const delta = Math.min((time - lastTime) / 1000, 0.1);
                    lastTime = time;
                    if (!fgVideo.duration || isNaN(fgVideo.duration)) {
                        raf = requestAnimationFrame(animate);
                        return;
                    }
                    // Very strong lerp — instant response with silky smoothing
                    // Your high-keyframe video can handle this perfectly
                    const lerpFactor = Math.min(delta * 25, 1); // 25 = ultra-snappy (feels immediate)
                    smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * lerpFactor;
                    // Foreground — ultra-precise seeking
                    const fgTargetTime = smoothProgressRef.current * fgVideo.duration;
                    const fgDiff = Math.abs(fgVideo.currentTime - fgTargetTime);
                    if (fgDiff > 0.008) {
                        fgVideo.currentTime = fgTargetTime;
                    }
                    // Background — same precision
                    const currentFgFrame = smoothProgressRef.current * (FG_TOTAL_FRAMES - 1);
                    if (currentFgFrame >= START_BG_AT_FRAME) {
                        const bgProgress = (currentFgFrame - START_BG_AT_FRAME) / (FG_TOTAL_FRAMES - START_BG_AT_FRAME);
                        const bgTargetTime = bgProgress * bgVideo.duration;
                        const bgDiff = Math.abs(bgVideo.currentTime - bgTargetTime);
                        if (bgDiff > 0.008) {
                            bgVideo.currentTime = bgTargetTime;
                        }
                    } else if (bgVideo.currentTime > 0.008) {
                        bgVideo.currentTime = 0;
                    }
                    scrollProgressRef.current = smoothProgressRef.current;
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
            return ({
                "Video.useEffect": ()=>st.kill()
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- NAVIGATION JUMPS ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const action = localStorage.getItem("TW_action");
            if (action === "go_mart") {
                localStorage.removeItem("TW_action");
                const jump = {
                    "Video.useEffect.jump": ()=>{
                        if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                            const st = scrollTriggerRef.current;
                            const pos = st.start + targetProgress * (st.end - st.start);
                            st.scroll(pos);
                            rawProgressRef.current = targetProgress;
                            smoothProgressRef.current = targetProgress;
                            fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
                        } else {
                            requestAnimationFrame(jump);
                        }
                    }
                }["Video.useEffect.jump"];
                jump();
            }
        }
    }["Video.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            const handleTrigger = {
                "Video.useEffect.handleTrigger": ()=>{
                    if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
                        window.scrollTo(0, 0);
                        const st = scrollTriggerRef.current;
                        const pos = st.start + targetProgress * (st.end - st.start);
                        window.scrollTo({
                            top: pos,
                            behavior: "instant"
                        });
                        rawProgressRef.current = targetProgress;
                        smoothProgressRef.current = targetProgress;
                        fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
                    }
                }
            }["Video.useEffect.handleTrigger"];
            window.addEventListener("triggerVideoJump", handleTrigger);
            return ({
                "Video.useEffect": ()=>window.removeEventListener("triggerVideoJump", handleTrigger)
            })["Video.useEffect"];
        }
    }["Video.useEffect"], []);
    /* ---------------- JSX (UNCHANGED LAYOUT) ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 418,
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
                    lineNumber: 427,
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
                            lineNumber: 438,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/video.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/video.tsx",
            lineNumber: 416,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/video.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_s(Video, "yXCIlVs/mMxtyAIvSoDM8ibcwuY=");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
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
        onDone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            id: "pulse-preloader-video",
            src: "/preloader.mp4",
            autoPlay: true,
            muted: true,
            playsInline: true,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/components/preloader.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/preloader.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Preloader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
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
__turbopack_context__.s([
    "default",
    ()=>VideoTextureEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
    const TOTAL_FRAMES = 1464;
    const ACTIVE_RANGES = [
        [
            55,
            238
        ],
        [
            420,
            763
        ],
        [
            1090,
            1251
        ]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoTextureEffect.useEffect": ()=>{
            if (hasInitialized.current) return;
            /* ---------------- VIDEO SETUP ---------------- */ const videoSources = {
                windscreen_ok_glass0_0001: "/winshieldvideo.mp4"
            };
            const createVideoTexture = {
                "VideoTextureEffect.useEffect.createVideoTexture": (src)=>{
                    const video = document.createElement("video");
                    video.src = src;
                    video.crossOrigin = "anonymous";
                    video.loop = true;
                    video.muted = true;
                    video.playsInline = true;
                    video.preload = "metadata";
                    video.load(); // important for Safari
                    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTexture"](video);
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
                    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
                    texture.generateMipmaps = false;
                    texture.needsUpdate = true;
                    return texture;
                }
            }["VideoTextureEffect.useEffect.createVideoTexture"];
            const textures = {
                windscreen_ok_glass0_0001: createVideoTexture(videoSources.windscreen_ok_glass0_0001)
            };
            /* ---------------- APPLY TO MESH ---------------- */ const timeoutId = setTimeout({
                "VideoTextureEffect.useEffect.timeoutId": ()=>{
                    const processedMeshes = new Set();
                    scene.traverse({
                        "VideoTextureEffect.useEffect.timeoutId": (child)=>{
                            if (!child.isMesh) return;
                            const mesh = child;
                            const texture = textures[mesh.name];
                            if (!texture || processedMeshes.has(mesh)) return;
                            processedMeshes.add(mesh);
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log("🎥 Windshield video applied to:", mesh.name);
                            }
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
                                uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y; // flip Y
                            }
                            mesh.geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: texture,
                                transparent: true,
                                opacity: 1,
                                toneMapped: false
                            });
                        }
                    }["VideoTextureEffect.useEffect.timeoutId"]);
                    /* ---------------- FRAME SYNC ---------------- */ const syncWithDashboard = {
                        "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard": ()=>{
                            const progress = progressRef.current; // 0 → 1
                            const currentFrame = Math.floor(progress * TOTAL_FRAMES);
                            const isActive = ACTIVE_RANGES.some({
                                "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard.isActive": ([start, end])=>currentFrame >= start && currentFrame <= end
                            }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard.isActive"]);
                            Object.values(textures).forEach({
                                "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard": (tex)=>{
                                    const video = tex.image;
                                    if (!video) return;
                                    if (isActive) {
                                        if (video.paused) {
                                            video.play().catch({
                                                "VideoTextureEffect.useEffect.timeoutId.syncWithDashboard": ()=>{}
                                            }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard"]);
                                        }
                                    } else {
                                        if (!video.paused) {
                                            video.pause();
                                            video.currentTime = 0;
                                        }
                                    }
                                }
                            }["VideoTextureEffect.useEffect.timeoutId.syncWithDashboard"]);
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
                    Object.values(textures).forEach({
                        "VideoTextureEffect.useEffect": (tex)=>{
                            const video = tex.image;
                            if (video) {
                                video.pause();
                                video.src = "";
                            }
                            tex.dispose();
                        }
                    }["VideoTextureEffect.useEffect"]);
                }
            })["VideoTextureEffect.useEffect"];
        }
    }["VideoTextureEffect.useEffect"], [
        scene,
        progressRef
    ]);
    return null;
}
_s(VideoTextureEffect, "iVTMtGYGgzrhbdS/4uYgu8lgKSM=", false, function() {
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_ad182784._.js.map