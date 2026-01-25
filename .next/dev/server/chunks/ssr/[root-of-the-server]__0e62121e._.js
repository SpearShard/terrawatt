module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

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
    // --- Sync Active Tab From Scroll (page.tsx) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncFromScroll = ()=>{
            const v = localStorage.getItem("TW_ACTIVE_NAV");
            if (v) setActive(v);
        };
        window.addEventListener("storage", syncFromScroll);
        return ()=>window.removeEventListener("storage", syncFromScroll);
    }, []);
    const navItems = [
        {
            name: "Pulse",
            href: "/"
        },
        {
            name: "TeraaCharge",
            href: "/",
            image: "/teraacharge.png",
            width: 90,
            height: 28
        },
        {
            name: "TeraaMart",
            href: "/",
            image: "/teraamartlogo.png",
            width: 80,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl  shadow-lg" : "py-6 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex  lg:p-[0.2vw] items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10",
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
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 169,
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
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 189,
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
                                            children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image,
                                                alt: item.name,
                                                width: item.width,
                                                height: item.height,
                                                className: `transition-all duration-300 ${active === item.name ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" : "opacity-70 group-hover:opacity-100"}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 246,
                                                columnNumber: 3
                                            }, this) : !item.isButton ? item.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Contact_page/connect1.svg",
                                                alt: "Connect",
                                                width: 70,
                                                height: 48,
                                                className: `transition duration-300 ${active === "Connect" ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : "opacity-80 hover:opacity-100"}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 260,
                                                columnNumber: 3
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        !item.isButton && active === item.name && // <motion.div
                                        //   layoutId="navbar-indicator"
                                        //   className="absolute inset-0 z-10 rounded-full"
                                        //   style={{
                                        //     background:
                                        //       "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                                        //     boxShadow:
                                        //       "0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)",
                                        //   }}
                                        //   transition={{
                                        //     type: "spring",
                                        //     bounce: 0.2,
                                        //     stiffness: 100,
                                        //     damping: 10,
                                        //   }}
                                        // />
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "navbar-indicator",
                                            className: "absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full",
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "relative block",
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "bg-white/0 hover:bg-white/5"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                            children: !item.isButton ? item.name : "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "mobile-indicator",
                                            className: "absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 324,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 317,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 315,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
} // "use client";
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
 // const SECTION_MAP = [
 //   { id: "pulse", tab: "Pulse" },
 //   { id: "teraacharge", tab: "TeraaCharge" },
 //   { id: "teraamart", tab: "TeraaMart" },
 // ];
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
 //   useEffect(() => {
 //     const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
 //     if (storedActive) {
 //       setActive(storedActive);
 //       localStorage.removeItem(ACTIVE_NAV_KEY);
 //       return;
 //     }
 //     // Only set default "Pulse" on homepage if no specific tab was requested
 //     if (pathname === "/") {
 //       // Check if we arrived with a specific action (TeraaCharge or TeraaMart)
 //       const action = localStorage.getItem("TW_action");
 //       if (action === "go_charge") {
 //         setActive("TeraaCharge");
 //       } else if (action === "go_mart") {
 //         setActive("TeraaMart");
 //       } else {
 //         setActive("Pulse");
 //       }
 //     } else if (pathname.includes("investors")) {
 //       setActive("Investors & Partners");
 //     } else if (pathname.includes("insights")) {
 //       setActive("Insights");
 //     } else if (pathname.includes("connect")) {
 //       setActive("Connect");
 //     }
 //   }, [pathname]);
 //   // --- Scroll-based Active Tab Sync ---
 //   // useEffect(() => {
 //   //   if (pathname !== "/") return;
 //   //   const triggers: ScrollTrigger[] = [];
 //   //   SECTION_MAP.forEach(({ id, tab }) => {
 //   //     const el = document.getElementById(id);
 //   //     if (!el) return;
 //   //     const trigger = ScrollTrigger.create({
 //   //       trigger: el,
 //   //       start: "top center",
 //   //       end: "bottom center",
 //   //       onEnter: () => setActive(tab),
 //   //       onEnterBack: () => setActive(tab),
 //   //     });
 //   //     triggers.push(trigger);
 //   //   });
 //   //   return () => {
 //   //     triggers.forEach(t => t.kill());
 //   //   };
 //   // }, [pathname]);
 //   // --- Scroll-progress based active tab sync ---
 //   // useEffect(() => {
 //   //   let raf: number;
 //   //   // 🔧 TUNE THESE VALUES
 //   //   const TERAACHARGE_PROGRESS = 0.622;
 //   //   const TERAAMART_PROGRESS = 0.9;
 //   //   const checkProgress = () => {
 //   //     const p = (window as any).__SCROLL_PROGRESS__;
 //   //     if (typeof p === "number") {
 //   //       if (p >= TERAAMART_PROGRESS) {
 //   //         setActive("TeraaMart");
 //   //       } else if (p >= TERAACHARGE_PROGRESS) {
 //   //         setActive("TeraaCharge");
 //   //       } else {
 //   //         setActive("Pulse");
 //   //       }
 //   //     }
 //   //     raf = requestAnimationFrame(checkProgress);
 //   //   };
 //   //   raf = requestAnimationFrame(checkProgress);
 //   //   return () => cancelAnimationFrame(raf);
 //   // }, []);
 //   const navItems = [
 //     { name: "Pulse", href: "/" },
 //     {
 //       name: "TeraaCharge",
 //       href: "/",
 //       image: "/teraacharge.png",
 //       width: 80,
 //       height: 28,
 //     },
 //     {
 //       name: "TeraaMart",
 //       href: "/",
 //       image: "/teraamartlogo.png",
 //       width: 70,
 //       height: 26,
 //     },
 //     { name: "Investors & Partners", href: "/investors-and-partners" },
 //     { name: "Insights", href: "/insights" },
 //     { name: "Connect", href: "/connect", isButton: true },
 //   ];
 //   // Function to handle custom routing and setting state
 //   const handleCustomNavigation = (itemName: string) => {
 //     sessionStorage.removeItem("PAGE_WAS_RELOADED");
 //     const isOnPulse = window.location.pathname === "/";
 //     // Close mobile menu immediately if open
 //     setIsMobileMenuOpen(false);
 //     if (itemName === "TeraaCharge") {
 //       setActive("TeraaCharge");
 //       if (isOnPulse) {
 //         // Already on homepage → immediately jump to TeraaCharge frame
 //         window.dispatchEvent(new CustomEvent("scrollToFrame804"));
 //       } else {
 //         // Coming from any other page (Investors, Insights, Connect, etc.)
 //         // Set flag and redirect to homepage
 //         localStorage.setItem("TW_action", "go_charge");
 //         window.location.href = "/";
 //       }
 //       return true;
 //     }
 //     if (itemName === "TeraaMart") {
 //       setActive("TeraaMart");
 //       if (isOnPulse) {
 //         // Already on homepage → trigger mart jump
 //         window.dispatchEvent(new Event("triggerVideoJump"));
 //       } else {
 //         // Coming from other page
 //         localStorage.setItem("TW_action", "go_mart");
 //         window.location.href = "/";
 //       }
 //       return true;
 //     }
 //     return false;
 //   };
 //   return (
 //     <nav
 //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
 //         ? "bg-black/90  backdrop-blur-xl  shadow-lg"
 //         : "py-6 bg-transparent"
 //         }`}
 //     >
 //       <div className="flex  py-[0.5vw] items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10">
 //         {/* Logo and Nav Items Container */}
 //         <div className="flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start">
 //           {/* Logo */}
 //           <Link
 //             href="/"
 //             className="flex   items-center relative z-50"
 //             onClick={() => {
 //               sessionStorage.setItem("NAV_SOURCE", "navbar");
 //               setActive("Pulse");
 //               setIsMobileMenuOpen(false);
 //             }}
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
 //                 className="relative   lg:h-auto group"
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
 //                   {item.image ? (
 //                     <Image
 //                       src={item.image}
 //                       alt={item.name}
 //                       width={item.width}
 //                       height={item.height}
 //                       className={`transition-all duration-300 ${active === item.name
 //                           ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
 //                           : "opacity-70 group-hover:opacity-100"
 //                         }`}
 //                     />
 //                   ) : !item.isButton ? (
 //                     item.name
 //                   ) : (
 //                     <Image
 //                       src="/Contact_page/connect1.svg"
 //                       alt="Connect"
 //                       width={70}
 //                       height={48}
 //                       className={`transition  duration-300 ${active === "Connect"
 //                           ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
 //                           : "opacity-80 hover:opacity-100"
 //                         }`}
 //                     />
 //                   )}
 //                 </span>
 //                 {/* Desktop Indicator */}
 //                 {!item.isButton && active === item.name && (
 //   <motion.div
 //     layoutId="navbar-indicator"
 //     className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
 //     transition={{
 //       type: "spring",
 //       stiffness: 300,
 //       damping: 30,
 //     }}
 //   />
 // )}
 //                 {/* Desktop Hover Glow */}
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
}),
"[project]/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
"use client";
;
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
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        100,
        -100
    ]);
    const scaleImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.2,
        0.8
    ], [
        0.9,
        1.05
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.1,
        0.3,
        0.8
    ], [
        0,
        1,
        1
    ]);
    const reverse = index % 2 !== 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: data.id,
        className: "min-h-screen flex items-center px-6 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container mx-auto flex flex-col md:flex-row items-center gap-16 ${reverse ? "md:flex-row-reverse" : ""}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        opacity
                    },
                    className: "flex-1 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg max-w-lg",
                            children: data.description
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 pt-4",
                            children: data.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 border-b border-white/10 pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        y: yImg,
                        scale: scaleImg
                    },
                    className: "flex-1 h-[60vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-auto  py-[12vw] max-sm:py-[10vw] flex flex-col items-center justify-center text-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/teraawatt.svg",
                        alt: "Teraawatt",
                        width: 420,
                        height: 120,
                        priority: true,
                        className: " max-sm:h-[12vw]"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-sm:my-[5vw] max-sm:h-[1vw] max-sm:w-[50%] w-36 h-[6px] bg-red-500 rounded-full my-8"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl text-white/90 text-lg leading-relaxed max-sm:py-[5vw]",
                        children: [
                            "Driving electric is just the start.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            "We're building the connected system that powers every part of your EV journey."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductSection, {
                    data: product,
                    index: index
                }, product.id, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 max-sm:p-[5vw] text-center bg-neutral-900 max-sm:m-[5vw] max-sm:rounded-[10vw] max-sm:py-[5vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl max-sm:text-[8vw] font-bold mb-8  max-sm:mb-[5vw]",
                        children: "Join the Revolution"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-gray-400 mb-10 max-sm:text-[4.5vw]  max-sm:mb-[5vw] ",
                        children: "The future of mobility is electric, connected, and rewarding."
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/connect",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "   px-10 py-4 max-sm:px-[10vw] max-sm:py-[1vh] max-sm:text-[5vw]   bg-white/10 backdrop-blur-xl   text-white font-semibold text-lg   border border-white/20   rounded-full   hover:bg-white/20   hover:border-white/30   hover:shadow-[0_8px_32px_rgba(5,223,114,0.2)]   active:scale-95   transition-all duration-300   ",
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 304,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
"use client";
;
;
;
;
/* --------------------------------------------------
   COIN CREATION
-------------------------------------------------- */ function createTexturedCoin(materialsOut, baseColorsOut, baseEmissiveOut) {
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]();
    const frontMap = loader.load("/coins.png");
    const backMap = loader.load("/croppedback.png");
    frontMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    backMap.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    frontMap.flipY = false;
    backMap.flipY = false;
    frontMap.center.set(0.5, 0.5);
    frontMap.rotation = -Math.PI / 2;
    backMap.center.set(0.5, 0.5);
    backMap.rotation = -Math.PI / 2;
    frontMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    frontMap.repeat.x = -1;
    backMap.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    backMap.repeat.x = -1;
    const radius = 0.012;
    const thickness = 0.0025;
    const segments = 96;
    const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](radius, radius, thickness, segments, 1, false);
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
    const gold = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xd29508);
    const matGold = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: gold.clone(),
        metalness: 1,
        roughness: 0.22,
        emissive: gold.clone(),
        emissiveIntensity: 0.5
    });
    const matFront = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: frontMap,
        transparent: true,
        alphaTest: 0.01,
        color: 0xffffff
    });
    const matBack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: backMap,
        transparent: true,
        alphaTest: 0.01,
        color: 0xffffff
    });
    const coin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, [
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
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff)
    ];
    baseEmissiveOut.current = [
        0.5,
        0,
        0
    ];
    return coin;
}
function VideoCoin({ progressRef }) {
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const baseEmissiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
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
    /* ---- precompute quaternions (critical) ---- */ const startQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Euler"](CONFIG.startRotation.x, CONFIG.startRotation.y, CONFIG.startRotation.z));
    const endQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Euler"](CONFIG.finalRotation.x, CONFIG.finalRotation.y, CONFIG.finalRotation.z));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        const g = groupRef.current;
        const p = progressRef.current;
        if (!g || materialsRef.current.length === 0) return;
        if (p < CONFIG.appearAt) {
            g.visible = false;
            return;
        }
        g.visible = true;
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.appearAt) / (CONFIG.disappearAt - CONFIG.appearAt), 0, 1);
        const ease = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(t, 0, 1);
        /* ---------- POSITION & SCALE ---------- */ g.position.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.z, CONFIG.end.z, ease);
        g.position.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.x, CONFIG.end.x, ease);
        g.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.y, CONFIG.end.y, ease);
        g.scale.setScalar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(CONFIG.start.scale, CONFIG.end.scale, ease));
        /* ---------- ROTATION (SINGLE CONTROLLER) ---------- */ if (p < CONFIG.freeSpinStart) {
            // 🔒 LOCKED START
            const lt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.appearAt) / (CONFIG.freeSpinStart - CONFIG.appearAt), 0, 1);
            const le = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(lt, 0, 1);
            g.quaternion.slerp(startQuat, 1 - le);
        } else if (p < CONFIG.freeSpinEnd) {
            // 🌀 FREE SPIN
            g.rotation.y += delta * CONFIG.spinY;
            g.rotation.x += delta * CONFIG.spinX;
        } else {
            // 🔒 LOCKED END
            const lt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp((p - CONFIG.freeSpinEnd) / (CONFIG.disappearAt - CONFIG.freeSpinEnd), 0, 1);
            const le = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(lt, 0, 1);
            g.quaternion.slerp(endQuat, le);
        }
        /* ---------- DARKEN → BRIGHTEN ---------- */ if (p < CONFIG.darkenEnd) {
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp(p / CONFIG.darkenEnd, 0, 1);
            materialsRef.current.forEach((m, i)=>{
                if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                    m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
                } else if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                    m.color.copy(baseColorsRef.current[i]).multiplyScalar(d);
                    m.emissiveIntensity = baseEmissiveRef.current[i] * d;
                }
            });
        } else {
            materialsRef.current.forEach((m, i)=>{
                if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                    m.color.copy(baseColorsRef.current[i]);
                } else if (m instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                    m.color.copy(baseColorsRef.current[i]);
                    m.emissiveIntensity = baseEmissiveRef.current[i];
                }
            });
        }
        if (p > CONFIG.disappearAt) {
            g.visible = false;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
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
}),
"[project]/components/video.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
    const bgVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fgVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rawProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const FG_TOTAL_FRAMES = 405;
    const START_BG_AT_FRAME = 130;
    const targetProgress = 289 / (FG_TOTAL_FRAMES - 1);
    /* ---------------- VIDEO SETUP (Minimal wake-up — your encoding is perfect now) ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const setupVideo = (video, src)=>{
            video.src = src;
            video.muted = true;
            video.playsInline = true;
            video.preload = "auto";
            video.crossOrigin = "anonymous";
            video.load();
            // Very light wake-up — just enough to start decoding
            video.currentTime = 0.01;
            setTimeout(()=>{
                video.currentTime = 0;
            }, 300);
        };
        if (bgVideoRef.current) {
            setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub.mp4");
        }
        if (fgVideoRef.current) {
            setupVideo(fgVideoRef.current, "/iphoneframes/iphonescrub.mp4");
        }
    }, []);
    /* ---------------- ULTRA-PRECISE SCRUBBING LOOP (Optimized for high-keyframe video) ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const bgVideo = bgVideoRef.current;
        const fgVideo = fgVideoRef.current;
        if (!bgVideo || !fgVideo) return;
        let raf;
        let lastTime = performance.now();
        const animate = (time)=>{
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
        };
        raf = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(raf);
    }, []);
    /* ---------------- SCROLLTRIGGER ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            anticipatePin: 1,
            onUpdate: (self)=>{
                rawProgressRef.current = self.progress;
            },
            onRefresh: (self)=>{
                rawProgressRef.current = self.progress;
            }
        });
        scrollTriggerRef.current = st;
        return ()=>st.kill();
    }, []);
    /* ---------------- NAVIGATION JUMPS ---------------- */ // useEffect(() => {
    //   const action = localStorage.getItem("TW_action");
    //   if (action === "go_mart") {
    //     localStorage.removeItem("TW_action");
    //     const jump = () => {
    //       if (scrollTriggerRef.current && fgVideoRef.current?.duration) {
    //         ScrollTrigger.refresh();
    //         const st = scrollTriggerRef.current;
    //         const pos = st.start + targetProgress * (st.end - st.start);
    //         st.scroll(pos);
    //         rawProgressRef.current = targetProgress;
    //         smoothProgressRef.current = targetProgress;
    //         fgVideoRef.current.currentTime = targetProgress * fgVideoRef.current.duration;
    //       } else {
    //         requestAnimationFrame(jump);
    //       }
    //     };
    //     jump();
    //   }
    // }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleTrigger = ()=>{
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
        };
        window.addEventListener("triggerVideoJump", handleTrigger);
        return ()=>window.removeEventListener("triggerVideoJump", handleTrigger);
    }, []);
    /* ---------------- JSX (UNCHANGED LAYOUT) ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky   top-0 h-screen flex items-center justify-center overflow-hidden bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: bgVideoRef,
                    className: "absolute  inset-0 w-full h-full object-cover",
                    style: {
                        pointerEvents: "none"
                    },
                    playsInline: true,
                    muted: true
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: fgVideoRef,
                    className: "relative max-sm:top-[3%] z-10 max-w-full max-h-screen object-contain pointer-events-none",
                    style: {
                        imageRendering: "crisp-edges"
                    },
                    playsInline: true,
                    muted: true
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 183,
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
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/video.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/video.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/video.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/video.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
} // "use client";
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
 //   const scrollProgressRef = useRef(0);
 //   const FG_TOTAL_FRAMES = 405;
 //   const START_BG_AT_FRAME = 130;
 //   const bgStartProgress = START_BG_AT_FRAME / (FG_TOTAL_FRAMES - 1);
 //   const targetProgress = 289 / (FG_TOTAL_FRAMES - 1);
 //   /* ---------------- VIDEO SETUP ---------------- */
 //   useEffect(() => {
 //     const unlockVideo = async (video: HTMLVideoElement) => {
 //       try {
 //         await video.play();
 //         video.pause();
 //       } catch {}
 //     };
 //     const setupVideo = (video: HTMLVideoElement, src: string) => {
 //       video.src = src;
 //       video.muted = true;
 //       video.playsInline = true;
 //       video.preload = "auto";
 //       video.crossOrigin = "anonymous";
 //       video.disablePictureInPicture = true;
 //       video.disableRemotePlayback = true;
 //       video.load();
 //       video.addEventListener("loadeddata", () => unlockVideo(video), { once: true });
 //     };
 //     if (bgVideoRef.current) setupVideo(bgVideoRef.current, "/iphoneframes/bgscrub1.mp4");
 //     if (fgVideoRef.current) setupVideo(fgVideoRef.current, "/iphoneframes/newiphonescrub_small.mp4");
 //   }, []);
 //   /* ---------------- GSAP SCRUB TIMELINES ---------------- */
 //   useEffect(() => {
 //     if (!containerRef.current || !fgVideoRef.current || !bgVideoRef.current) return;
 //     const fgVideo = fgVideoRef.current;
 //     const bgVideo = bgVideoRef.current;
 //     const setupTimelines = () => {
 //       if (!fgVideo.duration || !bgVideo.duration) return false;
 //       ScrollTrigger.refresh(); // ensure accurate measurements
 //       // Foreground: full scrub over the pinned area
 //       const fgTl = gsap.timeline({
 //         scrollTrigger: {
 //           trigger: containerRef.current,
 //           start: "top top",
 //           end: "+=400%", // ← increase to +=500% or +=600% if still too fast
 //           pin: true,
 //           anticipatePin: 1,
 //           scrub: 1, // ← higher = slower/smoother feel (try 1.5 or true for even more lag/smoothness)
 //           invalidateOnRefresh: true,
 //           onUpdate: (self) => {
 //             scrollProgressRef.current = self.progress;
 //           },
 //         },
 //       });
 //       fgTl.to(fgVideo, {
 //         currentTime: fgVideo.duration,
 //         ease: "none",
 //       });
 //       // Background: separate timeline, starts at bgStartProgress
 //       const bgTl = gsap.timeline({
 //         scrollTrigger: {
 //           trigger: containerRef.current,
 //           start: "top top",
 //           end: "+=400%",
 //           scrub: 1, // same as FG for sync
 //           invalidateOnRefresh: true,
 //         },
 //       });
 //       // Force reset to 0 at beginning
 //       bgTl.set(bgVideo, { currentTime: 0 });
 //       // Scrub BG only after start progress
 //       bgTl.to(bgVideo, {
 //         currentTime: bgVideo.duration,
 //         ease: "none",
 //       }, bgStartProgress); // ← position = fraction where BG starts (0–1 scale)
 //       return true;
 //     };
 //     // Poll until durations are available
 //     let rafId: number;
 //     const check = () => {
 //       if (setupTimelines()) {
 //         // Success
 //       } else {
 //         rafId = requestAnimationFrame(check);
 //       }
 //     };
 //     check();
 //     return () => {
 //       cancelAnimationFrame(rafId);
 //       ScrollTrigger.getAll().forEach((t) => t?.kill());
 //     };
 //   }, []);
 //   /* ---------------- NAVIGATION JUMPS ---------------- */
 //   useEffect(() => {
 //     const action = localStorage.getItem("TW_action");
 //     if (action !== "go_mart") return;
 //     localStorage.removeItem("TW_action");
 //     const jump = () => {
 //       if (!fgVideoRef.current?.duration) {
 //         requestAnimationFrame(jump);
 //         return;
 //       }
 //       ScrollTrigger.refresh();
 //       const progress = targetProgress;
 //       // Approximate scroll position (4 = 400%)
 //       const scrollPos = window.innerHeight * 4 * progress;
 //       window.scrollTo({ top: scrollPos, behavior: "instant" });
 //       fgVideoRef.current.currentTime = progress * fgVideoRef.current.duration;
 //       if (bgVideoRef.current) {
 //         const bgProg = Math.max(0, (progress - bgStartProgress) / (1 - bgStartProgress));
 //         bgVideoRef.current.currentTime = bgProg * bgVideoRef.current.duration;
 //       }
 //       scrollProgressRef.current = progress;
 //     };
 //     jump();
 //   }, []);
 //   useEffect(() => {
 //     const handleTrigger = () => {
 //       if (!fgVideoRef.current?.duration) return;
 //       const progress = targetProgress;
 //       const scrollPos = window.innerHeight * 4 * progress;
 //       window.scrollTo({ top: scrollPos, behavior: "instant" });
 //       fgVideoRef.current.currentTime = progress * fgVideoRef.current.duration;
 //       if (bgVideoRef.current) {
 //         const bgProg = Math.max(0, (progress - bgStartProgress) / (1 - bgStartProgress));
 //         bgVideoRef.current.currentTime = bgProg * bgVideoRef.current.duration;
 //       }
 //       scrollProgressRef.current = progress;
 //     };
 //     window.addEventListener("triggerVideoJump", handleTrigger);
 //     return () => window.removeEventListener("triggerVideoJump", handleTrigger);
 //   }, []);
 //   /* ---------------- JSX ---------------- */
 //   return (
 //     <div ref={containerRef} className="relative w-full bg-black">
 //       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
 //         {/* BACKGROUND VIDEO */}
 //         <video
 //           ref={bgVideoRef}
 //           className="absolute inset-0 w-full h-full object-cover"
 //           playsInline
 //           muted
 //           preload="auto"
 //           disablePictureInPicture
 //           disableRemotePlayback
 //         />
 //         {/* FOREGROUND VIDEO */}
 //         <video
 //           ref={fgVideoRef}
 //           className="relative z-10 max-w-full max-h-screen object-contain pointer-events-none"
 //           playsInline
 //           muted
 //           preload="auto"
 //           disablePictureInPicture
 //           disableRemotePlayback
 //         />
 //         {/* 3D COIN */}
 //         <div className="absolute inset-0 z-20 pointer-events-none">
 //           <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
 //             <ScrollingCoin progressRef={scrollProgressRef} />
 //           </Canvas>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // }
}),
"[project]/components/applyWhiteRimShader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyWhiteRimShader",
    ()=>applyWhiteRimShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
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
                mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    uniforms: {
                        baseColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x000000)
                        },
                        rimColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff)
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
}),
"[project]/components/applyBlueInteriorShader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyBlueInteriorShader",
    ()=>applyBlueInteriorShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
function applyBlueInteriorShader(scene) {
    const rimColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#010E78");
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
                mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    uniforms: {
                        baseColor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x000000)
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
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                });
                mesh.material.needsUpdate = true;
            }
        }
    });
}
}),
"[project]/components/preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Preloader({ onDone }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = document.getElementById("pulse-preloader-video");
        if (!video) return;
        const handleEnd = ()=>onDone();
        video.addEventListener("ended", handleEnd);
        return ()=>{
            video.removeEventListener("ended", handleEnd);
        };
    }, [
        onDone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
}),
"[project]/components/VideoTextureEffect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
"use client";
;
;
;
function VideoTextureEffect({ progressRef }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasInitialized.current) return;
        /* ---------------- VIDEO SETUP ---------------- */ const videoSources = {
            windscreen_ok_glass0_0001: "/winshieldvideo.mp4"
        };
        const createVideoTexture = (src)=>{
            const video = document.createElement("video");
            video.src = src;
            video.crossOrigin = "anonymous";
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.preload = "metadata";
            video.load(); // important for Safari
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTexture"](video);
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NearestFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NearestFilter"];
            texture.generateMipmaps = false;
            texture.needsUpdate = true;
            return texture;
        };
        const textures = {
            windscreen_ok_glass0_0001: createVideoTexture(videoSources.windscreen_ok_glass0_0001)
        };
        /* ---------------- APPLY TO MESH ---------------- */ const timeoutId = setTimeout(()=>{
            const processedMeshes = new Set();
            scene.traverse((child)=>{
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
                const size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
                bbox.getSize(size);
                const pos = mesh.geometry.attributes.position;
                const uvs = new Float32Array(pos.count * 2);
                for(let i = 0; i < pos.count; i++){
                    const x = pos.getX(i);
                    const y = pos.getY(i);
                    uvs[i * 2] = (x - bbox.min.x) / size.x;
                    uvs[i * 2 + 1] = 1 - (y - bbox.min.y) / size.y; // flip Y
                }
                mesh.geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
                mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    map: texture,
                    transparent: true,
                    opacity: 1,
                    toneMapped: false
                });
            });
            /* ---------------- FRAME SYNC ---------------- */ const syncWithDashboard = ()=>{
                const progress = progressRef.current; // 0 → 1
                const currentFrame = Math.floor(progress * TOTAL_FRAMES);
                const isActive = ACTIVE_RANGES.some(([start, end])=>currentFrame >= start && currentFrame <= end);
                Object.values(textures).forEach((tex)=>{
                    const video = tex.image;
                    if (!video) return;
                    if (isActive) {
                        if (video.paused) {
                            video.play().catch(()=>{});
                        }
                    } else {
                        if (!video.paused) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    }
                });
                rafIdRef.current = requestAnimationFrame(syncWithDashboard);
            };
            syncWithDashboard();
            hasInitialized.current = true;
        }, 1500);
        /* ---------------- CLEANUP ---------------- */ return ()=>{
            clearTimeout(timeoutId);
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
            Object.values(textures).forEach((tex)=>{
                const video = tex.image;
                if (video) {
                    video.pause();
                    video.src = "";
                }
                tex.dispose();
            });
        };
    }, [
        scene,
        progressRef
    ]);
    return null;
}
}),
"[project]/components/useCarLights.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
function useCarLights(scene, rearLightsRef, dashboardRef) {
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    ------------------------------------------------ */ scene.traverse((child)=>{
            if (!(child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"])) return;
            const name = child.name || "";
            // 🚗 Rear lights
            if (rearLightNames.includes(name)) {
                foundRearLights.push(child);
                const originalMat = Array.isArray(child.material) ? child.material[0] : child.material;
                const mat = originalMat.clone();
                mat.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xff0000); // pure red
                mat.emissiveIntensity = 0; // start fully off
                mat.toneMapped = false;
                child.material = mat;
            }
            // 📺 Dashboard candidates
            if (keywordRegex.test(name) || dashboardNames.includes(name)) {
                foundDashboards.push(child);
            }
        });
        /* ------------------------------------------------
       ASSIGN REFS
    ------------------------------------------------ */ if (foundRearLights.length) {
            rearLightsRef.current = foundRearLights;
        }
        if (dashboardRef && foundDashboards.length && !dashboardRef.current?.length) {
            const exact = foundDashboards.find((m)=>m.name === "LCDs_LCDs.0_0");
            dashboardRef.current = exact ? [
                exact
            ] : [
                foundDashboards[0]
            ];
        }
        /* ------------------------------------------------
       🔴🔴 DOUBLE BLINK → ⚫ BLACK → 🔴 STEADY RED
    ------------------------------------------------ */ if (foundRearLights.length) {
            const blinkTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 0.25
            });
            foundRearLights.forEach((mesh)=>{
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
            });
        }
        /* ------------------------------------------------
       SCROLL-BASED BRIGHTENING + COLOR WARMTH
    ------------------------------------------------ */ const baseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xff0000);
        const midColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xff6600);
        const endColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffaa00);
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / maxScroll, 1);
            foundRearLights.forEach((mesh)=>{
                const mat = mesh.material;
                if (!(mat.emissive instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"])) {
                    mat.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xff0000);
                }
                // intensity ramp
                mat.emissiveIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(4, 10, progress);
                // color warmth ramp
                const color = baseColor.clone().lerp(midColor, progress * 0.7).lerp(endColor, progress * 0.3);
                mat.emissive.copy(color);
            });
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        hasInitialized.current = true;
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        scene,
        rearLightsRef,
        dashboardRef
    ]);
}
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
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
//   const { scene } = useGLTF("/models/lastwala.glb");
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
//     camera.position.set(0, 50, 480);
//     camera.lookAt(0, 50, 0);
//     const isMobile = window.innerWidth < 768;
//     if (isMobile) {
//       camera.position.set(0, 45, 580);
//       camera.lookAt(0, 35, 0);
//     }
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#scroll-container",
//         start: "top top",
//         end: isMobile ? "80% bottom" : "bottom bottom",
//         scrub: 0.5, // Smooth scrubbing (lower = smoother, higher = more responsive)
//       },
//     });
//     // Camera movement
//     // tl.to(camera.position, { z: -0.3, y: 20, duration: 3 });
//     tl.to(camera.position, {
//       z: isMobile ? 35 : 1,
//       y: isMobile ? 18 : 20,
//       duration: 3,
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
// useEffect(() => {
//   const isPulse = window.location.pathname === "/";
//   const wasReload = sessionStorage.getItem("PAGE_WAS_RELOADED") === "true";
//   if (isPulse && wasReload) {
//     setShowPreloader(true);
//   } else {
//     setShowPreloader(false);
//   }
//   sessionStorage.removeItem("PAGE_WAS_RELOADED");
//   setReady(true);
// }, []);
//   useEffect(() => {
//     const handleChargeJump = () => {
//       const targetProgress = 765 / 1464;
//       const scrollContainer = document.getElementById("scroll-container");
//       if (!scrollContainer) return;
//       // 🔥 CRITICAL: recalc ScrollTrigger first
//       ScrollTrigger.refresh(true);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           const containerHeight = scrollContainer.offsetHeight;
//           const windowHeight = window.innerHeight;
//           const startOffset = containerHeight * 0.7;
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
//   const scrollHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "150vh" : "1100vh";
//   const contentHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? "120vh" : "300vh";
//   useEffect(() => {
//     const runAction = () => {
//       const action = localStorage.getItem("TW_action");
//       if (!action) return;
//       localStorage.removeItem("TW_action");
//       if (action === "go_charge") {
//         window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       }
//       if (action === "go_mart") {
//         ScrollTrigger.refresh(true);
//         requestAnimationFrame(() => {
//           const section = document.querySelector("#video-section");
//           section?.scrollIntoView({ behavior: "smooth" });
//           setTimeout(() => {
//             window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//           }, 600);
//         });
//       }
//     };
//     if (!showPreloader) {
//       requestAnimationFrame(() => requestAnimationFrame(runAction));
//       return;
//     }
//     window.addEventListener("pulseReady", runAction);
//     return () => window.removeEventListener("pulseReady", runAction);
//   }, [showPreloader]);
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
//   return (
//     <main style={{ background: "black", minHeight: scrollHeight, color: "white" }}>
//       {/* 🧭 Navbar stays fixed at top */}
//       <Navbar />
//       {/* 🚗 3D Car Section */}
//       {/* <div id="scroll-container" style={{ height: scrollHeight }}> */}
//       {/* Wrapper for scroll animation */}
//       <div id="scroll-container" style={{ height: scrollHeight, position: "relative" }}>
//         {/* Sticky 3D Canvas */}
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             width: "100%",
//             overflow: "hidden",
//             zIndex: 1,
//             transformOrigin: "center center"
//           }}
//         >
//           <Canvas
//             camera={{ position: [0, 1.5, 25], fov: 50 }}
//             style={{
//               height: "100vh",
//               width: "100vw",
//               pointerEvents: "none",
//               willChange: "transform",
//             }}
//             dpr={[1, 1.5]}
//             performance={{ min: 0.5, max: 1 }}
//             gl={{
//               antialias: true,
//               powerPreference: "high-performance",
//               alpha: false,
//               stencil: false,
//               depth: true,
//             }}
//           >
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[10, 10, 5]} intensity={1} />
//             <Car rearLightsRef={rearLightsRef} dashboardRef={dashboardRef} scale={carScale} />
//             <ScrollCameraAnimation rearLightsRef={rearLightsRef} />
//             <FlickerLights rearLightsRef={rearLightsRef} />
//             <Suspense fallback={null}>
//               <DashboardAnimation dashboardRef={dashboardRef} progressRef={progressRef} />
//             </Suspense>
//             <VideoTextureEffect progressRef={progressRef} />
//             <OrbitControls enabled={false} />
//           </Canvas>
//         </div>
//       </div>
//       {/* Normal content appears after scroll section */}
//       <div id='video-section' className="min-h-screen">
//         <Video />
//       </div>
//       <div className="min-h-screen">
//         <About />
//       </div>
//     </main>
//   );
// }
// useGLTF.preload("/models/lastwala.glb");
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/About.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/video.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyWhiteRimShader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/applyWhiteRimShader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyBlueInteriorShader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/applyBlueInteriorShader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/preloader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoTextureEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VideoTextureEffect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCarLights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/useCarLights.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
;
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
const DashboardAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/DashboardAnimation.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Car({ rearLightsRef, dashboardRef, scale = 1.2 }) {
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])("/models/final.glb");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const memoizedScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>scene, []);
    // wire lights immediately (no visuals yet)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCarLights$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarLights"])(memoizedScene, rearLightsRef, dashboardRef);
    // 🚨 BLOCK FIRST PAINT UNTIL POLISH IS DONE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyBlueInteriorShader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyBlueInteriorShader"])(scene);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$applyWhiteRimShader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyWhiteRimShader"])(scene);
        setReady(true); // allow render
    }, [
        scene
    ]);
    // ❌ Nothing renders until shaders are ready
    if (!ready) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        object: scene,
        scale: scale
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 405,
        columnNumber: 10
    }, this);
}
function ScrollCameraAnimation({ rearLightsRef }) {
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        camera.position.set(0, 50, 450);
        camera.lookAt(0, 50, 0);
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            camera.position.set(0, 45, 480);
            camera.lookAt(0, 35, 0);
        }
        const CAMERA_SCROLL_PX = 1900; // 🔑 camera always finishes fast
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        (rearLightsRef.current || []).forEach((light)=>{
            const mat = Array.isArray(light.material) ? light.material[0] : light.material;
            if (!mat) return;
            tl.to(mat, {
                emissiveIntensity: 5,
                duration: 1
            }, 0);
        // 0 means it starts with the camera animation
        });
        return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
    }, [
        camera,
        rearLightsRef
    ]);
    return null;
}
function FlickerLights({ rearLightsRef }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!rearLightsRef.current || rearLightsRef.current.length === 0) return;
        // Trigger flicker when scroll reaches the top of the canvas
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: "#scroll-container",
            start: "top top",
            end: "+=1",
            once: true,
            onEnter: ()=>{
                rearLightsRef.current?.forEach((light)=>{
                    const mat = Array.isArray(light.material) ? light.material[0] : light.material;
                    if (!mat) return;
                    // Flicker timeline (two quick flashes)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(mat, {
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
                });
            }
        });
        return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
    }, [
        rearLightsRef
    ]);
    return null;
}
function Home() {
    const rearLightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]); // ref for rear lights
    const dashboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0); // 👈 add this line
    const pulseReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [carScale, setCarScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.2);
    const [showPreloader, setShowPreloader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleChargeJump = ()=>{
            const targetProgress = -0.18;
            const scrollContainer = document.getElementById("scroll-container");
            if (!scrollContainer) return;
            // 🔥 CRITICAL: recalc ScrollTrigger first
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
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
                });
            });
        };
        window.addEventListener("scrollToFrame804", handleChargeJump);
        return ()=>window.removeEventListener("scrollToFrame804", handleChargeJump);
    }, []);
    // Responsive scroll height and car scale
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            const width = window.innerWidth;
            if (width < 640) {
                setCarScale(1); // Mobile
            } else if (width < 1024) {
                setCarScale(0.9); // Tablet
            } else {
                setCarScale(1.2); // Desktop
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const scrollHeight = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 768 ? "TURBOPACK unreachable" : "5000vh";
    const contentHeight = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 768 ? "TURBOPACK unreachable" : "300vh";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const runAction = ()=>{
            const action = localStorage.getItem("TW_action");
            if (!action) return;
            localStorage.removeItem("TW_action");
            if (action === "go_charge") {
                window.dispatchEvent(new CustomEvent("scrollToFrame804"));
            }
            if (action === "go_mart") {
                const scrollContainer = document.getElementById("scroll-container");
                if (!scrollContainer) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        const containerTop = scrollContainer.offsetTop;
                        const containerHeight = scrollContainer.offsetHeight;
                        const windowHeight = window.innerHeight;
                        const targetY = containerTop + containerHeight - windowHeight - 50;
                        window.scrollTo({
                            top: targetY,
                            behavior: "smooth"
                        });
                        setTimeout(()=>{
                            window.dispatchEvent(new Event("triggerVideoJump"));
                        }, 600);
                    });
                });
            }
        };
        if (!showPreloader) {
            requestAnimationFrame(()=>requestAnimationFrame(runAction));
            return;
        }
        window.addEventListener("pulseReady", runAction);
        return ()=>window.removeEventListener("pulseReady", runAction);
    }, [
        showPreloader
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
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
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    if (!ready) return null;
    if (showPreloader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            lineNumber: 677,
            columnNumber: 7
        }, this);
    }
    const isMobile = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768;
    const cameraFov = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 50; // 👈 tweak values here
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            background: "black",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "scroll-container",
                style: {
                    height: scrollHeight,
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        width: "100%",
                        overflow: "hidden",
                        zIndex: 1,
                        transformOrigin: "center center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                intensity: 0.6
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                position: [
                                    10,
                                    10,
                                    5
                                ],
                                intensity: 1
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Car, {
                                rearLightsRef: rearLightsRef,
                                dashboardRef: dashboardRef,
                                scale: carScale
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 740,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollCameraAnimation, {
                                rearLightsRef: rearLightsRef
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 741,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlickerLights, {
                                rearLightsRef: rearLightsRef
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 742,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardAnimation, {
                                    dashboardRef: dashboardRef,
                                    progressRef: progressRef
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoTextureEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                progressRef: progressRef
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                enabled: false
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 747,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 720,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 708,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "video-section",
                className: "min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$video$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 754,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 757,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 756,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 697,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/final.glb");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0e62121e._.js.map