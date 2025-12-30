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
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 134,
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
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 152,
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
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 194,
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
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this),
                                        !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 128,
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
                                            lineNumber: 296,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, this),
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "mobile-indicator",
                                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 304,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 263,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 118,
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
 //   const url = new URL(window.location.href);
 //   const tab = url.searchParams.get("tab");
 //   if (tab === "charge") {
 //     setActive("TeraaCharge");
 //   } else if (tab === "mart") {
 //     setActive("TeraaMart");
 //   } else if (pathname === "/") {
 //     setActive("Pulse");
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
 // const handleCustomNavigation = (itemName: string) => {
 //   const isOnHome = window.location.pathname === "/";
 //   setIsMobileMenuOpen(false);
 //   if (itemName === "TeraaCharge") {
 //     setActive("TeraaCharge");
 //     if (isOnHome) {
 //       window.dispatchEvent(new CustomEvent("scrollToFrame804"));
 //     } else {
 //       // Client-side navigation with search param
 //       window.location.href = "/?tab=charge";
 //     }
 //     return true;
 //   }
 //   if (itemName === "TeraaMart") {
 //     setActive("TeraaMart");
 //     if (isOnHome) {
 //       window.dispatchEvent(new Event("triggerVideoJump"));
 //     } else {
 //       window.location.href = "/?tab=mart";
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
}),
"[project]/app/investors-and-partners/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// type FrameFolder = "investwebp";
// const FRAME_SETS: Record<FrameFolder, number> = {
//   investwebp: 516,
// };
// const sections: { id: FrameFolder; fade: "top" | "bottom" | "both" }[] = [
//   { id: "investwebp", fade: "bottom" },
// ];
// function FrameScroller({
//   folder,
//   frameCount,
// }: {
//   folder: FrameFolder;
//   frameCount: number;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const loadedRef = useRef(false);
//   const frameRef = useRef(0);
//   // Canvas render function
//   const render = (forcedFrame?: number) => {
//     if (!canvasRef.current) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d")!;
//     const index = forcedFrame ?? Math.floor(frameRef.current);
//     const img = imagesRef.current[index];
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     if (img && img.complete) {
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     } else {
//       // Fallback background while loading
//       ctx.fillStyle = "#04111E";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }
//   };
//   // Load all frames
//   useEffect(() => {
//     const images: HTMLImageElement[] = [];
//     let loadedCount = 0;
//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `/${folder}/frame_${String(i).padStart(5, "0")}.webp`;
//       // img.src = `/frames/${folder}/frame_${String(i).padStart(5, "0")}.jpg`;
//       img.onload = () => {
//         loadedCount++;
//         images[i - 1] = img; // Store in correct order
//         if (loadedCount === frameCount) {
//           imagesRef.current = images;
//           loadedRef.current = true;
//           render(0); // Force first frame when fully loaded
//         }
//       };
//       img.onerror = () => {
//         console.error(`Failed to load frame ${i}`);
//       };
//     }
//     // Try to render frame 0 immediately (in case cached)
//     render(0);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [folder, frameCount]);
//   // ScrollTrigger setup
//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = 1080;
//     canvas.height = 1920;
//     // Kill any existing ScrollTriggers to prevent duplicates/ghosts
//     ScrollTrigger.getAll().forEach((st) => st.kill());
//     // Initial render
//     render(0);
//     // Delay trigger creation to let layout & images settle
//     const initTimeout = setTimeout(() => {
//       ScrollTrigger.refresh();
//       const st = ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${frameCount * 6}px`, // Adjust multiplier if needed for smoother pacing
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           if (!loadedRef.current) {
//             frameRef.current = 0;
//             render(0);
//             return;
//           }
//           frameRef.current = self.progress * (frameCount - 1);
//           render();
//         },
//         onRefresh: () => render(),
//       });
//       // Cleanup on unmount
//       return () => {
//         st.kill();
//       };
//     }, 100); // Small delay helps with Next.js navigation quirks
//     return () => {
//       clearTimeout(initTimeout);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, [frameCount]);
//   return (
//     <div ref={containerRef} className="w-full relative">
//       <canvas
//         ref={canvasRef}
//         className="w-full h-screen block sticky top-0"
//       />
//     </div>
//   );
// }
// export default function InvestorsPage() {
//   // Handle scroll restoration properly for client-side navigation
//   useEffect(() => {
//     // Allow browser to restore scroll on back/forward, but force top on direct visit
//     if ("scrollRestoration" in history) {
//       history.scrollRestoration = "auto";
//     }
//     // Always start at top when entering this page
//     window.scrollTo(0, 0);
//     // Refresh ScrollTrigger if page becomes visible again (e.g. tab switch)
//     const handleVisibility = () => {
//       if (!document.hidden) {
//         ScrollTrigger.refresh();
//       }
//     };
//     document.addEventListener("visibilitychange", handleVisibility);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibility);
//     };
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="w-full flex flex-col overflow-hidden bg-[#04111E]">
//         {sections.map((s) => (
//           <div key={s.id} className="w-full">
//             <FrameScroller
//               folder={s.id}
//               frameCount={FRAME_SETS[s.id]}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function InvestorsPage() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const TOTAL_FRAMES = 516;
    const SCROLL_DISTANCE = TOTAL_FRAMES * 6;
    /* ---------------- FORCE HARD RELOAD FROM PROBLEMATIC PAGES ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const problematicPaths = [
            "/pulse",
            "/teraamart",
            "/teraacharge"
        ];
        // Use navigation type if available (for back/forward)
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && "navigation" in window) //TURBOPACK unreachable
        ;
        // Fallback to sessionStorage tracking
        const prevPath = sessionStorage.getItem("prevPath");
        sessionStorage.setItem("prevPath", pathname);
        if (problematicPaths.includes(prevPath || "") && pathname === "/investors") {
            window.location.reload();
        }
        // Always scroll to top
        window.scrollTo(0, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
    }, [
        pathname
    ]);
    /* ---------------- VIDEO SETUP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!videoRef.current) return;
        const video = videoRef.current;
        video.src = "/investwebp/investwebpscrub15.mp4";
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.crossOrigin = "anonymous";
        video.load();
        video.currentTime = 0.01;
        setTimeout(()=>{
            video.currentTime = 0;
        }, 300);
    }, []);
    /* ---------------- SMOOTH SCRUBBING LOOP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        let raf;
        let lastTime = performance.now();
        const animate = (time)=>{
            const delta = Math.min((time - lastTime) / 1000, 0.1);
            lastTime = time;
            if (!video.duration || isNaN(video.duration)) {
                raf = requestAnimationFrame(animate);
                return;
            }
            const lerpFactor = Math.min(delta * 18, 1);
            smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * lerpFactor;
            const targetTime = smoothProgressRef.current * video.duration;
            if (Math.abs(video.currentTime - targetTime) > 0.015) {
                video.currentTime = targetTime;
            }
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
            end: `+=${SCROLL_DISTANCE}px`,
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
    /* ---------------- JSX ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col overflow-hidden bg-[#04111E] min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative w-full bg-[#04111E]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#04111E]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                className: "w-full h-full object-cover",
                                style: {
                                    pointerEvents: "none"
                                },
                                playsInline: true,
                                muted: true
                            }, void 0, false, {
                                fileName: "[project]/app/investors-and-partners/page.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/investors-and-partners/page.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: `${SCROLL_DISTANCE}px`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/investors-and-partners/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/investors-and-partners/page.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__204dbc96._.js.map