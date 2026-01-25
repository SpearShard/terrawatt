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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // New State for Mobile
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // --- NEW: Prevent Body Scroll when Menu is Open ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return ()=>{
            document.body.style.overflow = "auto";
        };
    }, [
        isMobileMenuOpen
    ]);
    // --- Scroll Detection ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // --- State Initialization & URL Sync ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        pathname
    ]);
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
        // Only mark navbar navigation if we're leaving the page
        // if (!isOnPulse) {
        //   sessionStorage.setItem("NAV_SOURCE", "navbar");
        // }
        // 🔑 MARK THAT THIS NAVIGATION CAME FROM NAVBAR
        sessionStorage.setItem("NAV_SOURCE", "navbar");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "py-6 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center relative z-50",
                            onClick: ()=>{
                                sessionStorage.setItem("NAV_SOURCE", "navbar");
                                setActive("Pulse");
                                setIsMobileMenuOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/teraawatt.svg",
                                alt: "TeraaWatt Logo",
                                width: 125,
                                height: 45,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden relative z-50 text-white p-2 focus:outline-none",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 flex flex-col justify-center space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8 text-white font-normal relative",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400 group-hover:text-white"}`,
                                            onClick: (e)=>{
                                                const handled = handleCustomNavigation(item.name);
                                                if (handled) {
                                                    e.preventDefault();
                                                } else {
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
                                                lineNumber: 578,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this),
                                        !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            lineNumber: 593,
                                            columnNumber: 19
                                        }, this),
                                        !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-6 text-center",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xl font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                        children: !item.isButton ? item.name : // Simplified Connect button for Mobile
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${active === "Connect" ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : ""}`,
                                            children: "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 663,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 653,
                                        columnNumber: 19
                                    }, this),
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "mobile-indicator",
                                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 671,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 632,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 630,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 623,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 483,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/insights/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
const dynamic = "force-dynamic";
;
;
;
const PAGE_SIZE = 6;
function InsightsPage() {
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(`${("TURBOPACK compile-time value", "https://devapi.teraawatt.com/api/v1/users/blog/all")}`).then((r)=>r.json()).then((data)=>{
            setBlogs(data.data?.blogs || []);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);
    const showPagination = totalPages > 1;
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const items = blogs.slice(startIndex, endIndex);
    /** 🔑 GRID LOGIC (THIS IS THE MAGIC) */ const itemCount = items.length;
    const gridCols = itemCount === 1 ? "grid-cols-1" : itemCount === 2 ? "grid-cols-2" : "grid-cols-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: styles
                }
            }, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-screen bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "absolute top-0 left-0 w-full h-[60vh] md:h-screen object-cover object-top",
                        src: "/insight/insightfb.mp4"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 min-h-screen flex flex-col justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-16 pt-32 md:pt-44",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-20 space-y-6 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 border border-cyan-500/30 backdrop-blur-sm mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400 text-xs font-semibold tracking-wider uppercase",
                                                    children: "EV Insights & Stories"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/insights/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 leading-tight",
                                            children: [
                                                "Stories for a Smarter",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "Electric Journey"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-cyan-100/80 text-base md:text-xl max-w-3xl mx-auto font-light",
                                            children: "Discover the latest innovations, expert insights, and inspiring stories shaping the future of electric mobility"
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid ${gridCols} gap-6 md:gap-8 mb-20`,
                                    children: loading ? Array.from({
                                        length: PAGE_SIZE
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, i, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 21
                                        }, this)) : items.map((blog, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogCard, {
                                            blog: blog,
                                            index: i
                                        }, blog.id, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                showPagination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row justify-center items-center gap-6 pb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: page === 1,
                                            onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                            className: `px-8 py-3 rounded-full transition-all ${page === 1 ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800" : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"}`,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-6",
                                            children: Array.from({
                                                length: totalPages
                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setPage(i + 1),
                                                    className: `h-2 rounded-full transition-all ${page === i + 1 ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400" : "w-2 bg-neutral-700 hover:bg-neutral-600"}`
                                                }, i, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: page === totalPages,
                                            onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                            className: `px-8 py-3 rounded-full transition-all ${page === totalPages ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800" : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"}`,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/insights/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
/* ------------------ CARDS ------------------ */ function BlogCard({ blog, index }) {
    const thumb = blog.images?.[0]?.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/insights/${blog.slug}`,
        className: "group block",
        style: {
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-56 overflow-hidden",
                    children: thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: thumb,
                                alt: "",
                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/app/insights/page.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/insights/page.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-cyan-400 text-xs font-semibold uppercase",
                            children: new Date(blog.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white group-hover:text-cyan-400 transition-colors",
                            children: blog.title
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm line-clamp-3",
                            children: blog.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/insights/page.tsx",
            lineNumber: 447,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/insights/page.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
function ShimmerCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-white/5 border border-white/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-56 bg-neutral-900 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/insights/page.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-24 bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-full bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-full bg-white/5 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/insights/page.tsx",
        lineNumber: 485,
        columnNumber: 5
    }, this);
}
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__59e0815b._.js.map