module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error('Could not parse module \'[project]/components/Navbar.tsx\'\n\nExpected \'</\', got \' {active === item.name ? "opacity-100" : "opacity-70"}\r\n                />\r\n              ) : item.isButton ? (\r\n                <Image\r\n                  src="/Contact_page/connect1.svg"\r\n                  alt="connect"\r\n                  width={70}\r\n                  height={48}\r\n                />\r\n              ) : (\r\n                item.name\r\n              )}\r\n\r\n              {!item.isButton && active === item.name && (\r\n                <motion.div\r\n                  layoutId="navbar-indicator"\r\n                  className="absolute left-0 right-0  h-[2px] bg-red-500"\r\n                />\r\n              )}\r\n            </Link>\r\n          ))}\r\n        </div>\r\n      </div>\r\n\r\n      {/* mobile */}\r\n      <AnimatePresence>\r\n        {isMobileMenuOpen && (\r\n          <motion.div\r\n            initial={{ opacity: 0 }}\r\n            animate={{ opacity: 1 }}\r\n            exit={{ opacity: 0 }}\r\n            className="fixed inset-0 top-[70px] bg-black/95 md:hidden"\r\n          >\r\n            {navItems.map((item) => (\r\n              <Link\r\n                key={item.name}\r\n                href={item.href}\r\n                onClick={(e) => {\r\n                  if (handleNavigation(item.name)) e.preventDefault();\r\n                }}\r\n                className="block px-6 py-4"\r\n              >\r\n                {item.name}\r\n              </Link>\r\n            ))}\r\n          </motion.div>\r\n        )}\r\n      </AnimatePresence>\r\n    </nav>\r\n  );\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// "use client";\r\n// import Image from "next/image";\r\n// import Link from "next/link";\r\n// import { useState,useRef, useEffect } from "react";\r\n// import { usePathname } from "next/navigation";\r\n// import { motion, AnimatePresence } from "framer-motion";\r\n// import gsap from "gsap";\r\n// import { ScrollTrigger } from "gsap/ScrollTrigger";\r\n\r\n// if (typeof window !== "undefined") {\r\n//   gsap.registerPlugin(ScrollTrigger);\r\n// }\r\n\r\n// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage\r\n\r\n\r\n\r\n// export default function Navbar() {\r\n//   const navRef = useRef<HTMLDivElement>(null);\r\n//   const [active, setActive] = useState("Pulse");\r\n//   const [isScrolled, setIsScrolled] = useState(false);\r\n//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Mobile\r\n//   const pathname = usePathname();\r\n\r\n//   // --- NEW: Prevent Body Scroll when Menu is Open ---\r\n//   useEffect(() => {\r\n//     if (isMobileMenuOpen) {\r\n//       document.body.style.overflow = "hidden";\r\n//     } else {\r\n//       document.body.style.overflow = "auto";\r\n//     }\r\n//     return () => { document.body.style.overflow = "auto"; };\r\n//   }, [isMobileMenuOpen]);\r\n\r\n//   // --- Scroll Detection ---\r\n//   useEffect(() => {\r\n//     const handleScroll = () => setIsScrolled(window.scrollY > 20);\r\n//     window.addEventListener("scroll", handleScroll);\r\n//     return () => window.removeEventListener("scroll", handleScroll);\r\n//   }, []);\r\n\r\n//   useEffect(() => {\r\n//   if (!navRef.current) return;\r\n\r\n//   // Desktop only\r\n//   if (window.innerWidth < 768) return;\r\n\r\n//   const nav = navRef.current;\r\n\r\n//   gsap.set(nav, { y: 0 });\r\n\r\n//   let lastScroll = window.scrollY;\r\n\r\n//   const onScroll = () => {\r\n//     const current = window.scrollY;\r\n\r\n//     if (current > lastScroll && current > 80) {\r\n//       // scrolling down → hide\r\n//       gsap.to(nav, { y: -120, duration: 0.4, ease: "power2.out" });\r\n//      } // else {\r\n//       // scrolling up → show\r\n//     //   gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });\r\n//     // }\r\n\r\n//     lastScroll = current;\r\n//   };\r\n\r\n//   window.addEventListener("scroll", onScroll);\r\n\r\n//   // Reveal on hover\r\n//   const show = () =>\r\n//     gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });\r\n\r\n//   nav.addEventListener("mouseenter", show);\r\n\r\n//   // Invisible top trigger zone\r\n//   const topZone = document.createElement("div");\r\n//   topZone.style.position = "fixed";\r\n//   topZone.style.top = "0";\r\n//   topZone.style.left = "0";\r\n//   topZone.style.width = "100%";\r\n//   topZone.style.height = "20px";\r\n//   topZone.style.zIndex = "40";\r\n//   document.body.appendChild(topZone);\r\n\r\n//   topZone.addEventListener("mouseenter", show);\r\n\r\n//   return () => {\r\n//     window.removeEventListener("scroll", onScroll);\r\n//     nav.removeEventListener("mouseenter", show);\r\n//     topZone.remove();\r\n//   };\r\n// }, []);\r\n\r\n\r\n//   // --- State Initialization & URL Sync ---\r\n//   useEffect(() => {\r\n//     const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);\r\n\r\n//     if (storedActive) {\r\n//       setActive(storedActive);\r\n//       localStorage.removeItem(ACTIVE_NAV_KEY);\r\n//       return;\r\n//     }\r\n\r\n//     // Only set default "Pulse" on homepage if no specific tab was requested\r\n//     if (pathname === "/" && !localStorage.getItem("TW_action")) {\r\n//       // Check if we arrived with a specific action (TeraaCharge or TeraaMart)\r\n//       const action = localStorage.getItem("TW_action");\r\n//       if (action === "go_charge") {\r\n//         setActive("TeraaCharge");\r\n//       } else if (action === "go_mart") {\r\n//         setActive("TeraaMart");\r\n//       } else {\r\n//         setActive("Pulse");\r\n//       }\r\n//     } else if (pathname.includes("investors")) {\r\n//       setActive("Investors & Partners");\r\n//     } else if (pathname.includes("insights")) {\r\n//       setActive("Insights");\r\n//     } else if (pathname.includes("connect")) {\r\n//       setActive("Connect");\r\n//     }\r\n//   }, [pathname]);\r\n\r\n//   // --- Sync Active Tab From Scroll (page.tsx) ---\r\n// useEffect(() => {\r\n//   if (pathname !== "/") return;\r\n\r\n//   const syncFromScroll = () => {\r\n//     const v = localStorage.getItem("TW_ACTIVE_NAV");\r\n//     if (v) setActive(v);\r\n//   };\r\n\r\n//   window.addEventListener("storage", syncFromScroll);\r\n//   return () => window.removeEventListener("storage", syncFromScroll);\r\n// }, [pathname]);\r\n\r\n\r\n\r\n//   const navItems = [\r\n//   { name: "Pulse", href: "/" },\r\n\r\n//   {\r\n//     name: "TeraaCharge",\r\n//     href: "/",\r\n//     image: "/teraacharge.png",\r\n//     width: 90,\r\n//     height: 28,\r\n//   },\r\n\r\n//   {\r\n//     name: "TeraaMart",\r\n//     href: "/",\r\n//     image: "/teraamartlogo.png",\r\n//     width: 80,\r\n//     height: 26,\r\n//   },\r\n\r\n//   { name: "Investors & Partners", href: "/investors-and-partners" },\r\n//   { name: "Insights", href: "/insights" },\r\n//   { name: "Connect", href: "/connect", isButton: true },\r\n// ];\r\n\r\n\r\n//   // Function to handle custom routing and setting state\r\n//   const handleCustomNavigation = (itemName: string) => {\r\n//     sessionStorage.removeItem("PAGE_WAS_RELOADED");\r\n\r\n\r\n//     const isOnPulse = window.location.pathname === "/";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//     // Close mobile menu immediately if open\r\n//     setIsMobileMenuOpen(false);\r\n\r\n//     if (itemName === "TeraaCharge") {\r\n//       setActive("TeraaCharge");\r\n\r\n//       if (isOnPulse) {\r\n//         // Already on homepage → immediately jump to TeraaCharge frame\r\n//         window.dispatchEvent(new CustomEvent("scrollToFrame804"));\r\n//       } else {\r\n//         // Coming from any other page (Investors, Insights, Connect, etc.)\r\n//         // Set flag and redirect to homepage\r\n//         localStorage.setItem("TW_action", "go_charge");\r\n//         window.location.href = "/";\r\n//       }\r\n//       return true;\r\n//     }\r\n\r\n//     if (itemName === "TeraaMart") {\r\n//       setActive("TeraaMart");\r\n\r\n//       if (isOnPulse) {\r\n//         // Already on homepage → trigger mart jump\r\n//         window.dispatchEvent(new Event("triggerVideoJump"));\r\n//       } else {\r\n//         // Coming from other page\r\n//         localStorage.setItem("TW_action", "go_mart");\r\n//         window.location.href = "/";\r\n//       }\r\n//       return true;\r\n//     }\r\n\r\n//     return false;\r\n//   };\r\n\r\n//   return (\r\n//     <nav\r\n//       ref={navRef}\r\n//       className={\'');
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
function Footer() {
    const [isComplianceOpen, setIsComplianceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#E5E7EB] p-4 sm:p-6 md:p-[5vw] text-gray-800 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-[12vh] sm:h-[15vh] w-[40vw] sm:w-[30vw] md:w-[25vw] items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/tblack.svg",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 md:gap-12 justify-center md:justify-start text-base sm:text-lg mt-4 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy-policy",
                                className: "hover:text-green-600 transition",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                className: "hover:text-green-600 transition",
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                onMouseEnter: openDropdown,
                                onMouseLeave: closeDropdownWithDelay,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1 hover:text-green-600 transition focus:outline-none whitespace-nowrap",
                                        onClick: ()=>isComplianceOpen ? closeDropdownImmediately() : openDropdown(),
                                        "aria-expanded": isComplianceOpen,
                                        "aria-haspopup": "true",
                                        children: [
                                            "Compliance",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                                    isComplianceOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50",
                                        onMouseEnter: openDropdown,
                                        onMouseLeave: closeDropdownWithDelay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dcs",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Data and Security Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/isc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Industry-Specific Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pgc",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Payment Gateway Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cgln",
                                                className: "block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-green-600 transition",
                                                onClick: closeDropdownImmediately,
                                                children: "Corporate Governance and Legal Notice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-300 mx-4 sm:mx-6 md:mx-0"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "© 2025 Teraawatt. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Hyderabad, Telangana • info@teraawatt.com"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 91,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
const dynamic = "force-dynamic";
;
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
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 325,
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
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 339,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 leading-tight",
                                            children: [
                                                "Stories for a Smarter",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/insights/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "Electric Journey"
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-cyan-100/80 text-base md:text-xl max-w-3xl mx-auto font-light",
                                            children: "Discover the latest innovations, expert insights, and inspiring stories shaping the future of electric mobility"
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid ${gridCols} gap-6 md:gap-8 mb-20 max-sm:grid-cols-1`,
                                    children: loading ? Array.from({
                                        length: PAGE_SIZE
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, i, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 21
                                        }, this)) : items.map((blog, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogCard, {
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
                                            lineNumber: 389,
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
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/insights/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 433,
                columnNumber: 9
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
                                lineNumber: 453,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white group-hover:text-cyan-400 transition-colors",
                            children: blog.title
                        }, void 0, false, {
                            fileName: "[project]/app/insights/page.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    lineNumber: 490,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/insights/page.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-24 bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-full bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/page.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__2254d548._.js.map