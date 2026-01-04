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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "py-6 bg-transparent"}`,
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
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 134,
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
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            children: !item.isButton ? item.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this),
                                        !item.isButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 296,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, this),
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
"[project]/app/dcs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataSecurityCompliancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
"use client";
;
;
function DataSecurityCompliancePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/dcs/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-black text-white min-h-screen px-6 py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold",
                                    children: "Data & Security Compliance"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: [
                                        "Last Updated: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "[Insert Date]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 17,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: [
                                "At ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Teraawatt PowerLabs Private Limited"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 16
                                }, this),
                                ", we are committed to safeguarding your personal information and ensuring the highest standards of data protection and security. Our practices comply with India’s ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Digital Personal Data Protection (DPDP) Act, 2023"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 21
                                }, this),
                                " ",
                                "and the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Information Technology Act, 2000"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 21
                                }, this),
                                ", along with applicable rules on reasonable security practices."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-3",
                                    children: "1. Data Protection & Security Policy"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-2",
                                    children: "How We Protect Your Data"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Encryption:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                " Sensitive data such as login credentials, payment information, and location data is encrypted during transmission and storage using industry-standard protocols (SSL/TLS and AES)."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Payment Security:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                " We work exclusively with RBI-compliant and PCI-DSS certified payment gateways. We do not store your card or banking details on our servers."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Cloud Storage Compliance:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                " User data is stored on secure cloud infrastructure compliant with ISO/IEC 27001 or equivalent international security standards."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Access Control:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                " Access to personal data is restricted to authorized personnel only and governed by strict confidentiality obligations."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Data Breach Response:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                " In the event of a data breach, we will promptly notify affected users and relevant authorities as required by law."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Regular Audits:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                " We conduct periodic internal and third-party security audits to maintain compliance with evolving data protection standards."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-2",
                                    children: "Your Rights"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "You may request access to, correction of, or deletion of your personal data at any time."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "You may withdraw consent for data collection and usage. Upon withdrawal, we will stop processing your data unless retention is legally required."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-3",
                                    children: "2. Cookie Policy"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: "Teraawatt PowerLabs Private Limited uses cookies and similar tracking technologies to enhance user experience, improve services, and provide personalized recommendations."
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mt-4 mb-2",
                                    children: "What Are Cookies?"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: "Cookies are small text files stored on your device when you access our website or application. They help us remember preferences, analyze usage patterns, and deliver a smoother experience."
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mt-4 mb-2",
                                    children: "Types of Cookies We Use"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Essential Cookies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                " Required for core platform functionality such as login sessions and navigation."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Analytics Cookies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                " Help us understand usage behavior, performance metrics, and service improvements."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Functional Cookies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                " Remember user preferences such as language, region, or saved settings."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Advertising / Marketing Cookies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                " Enable delivery of relevant offers, promotions, and partner advertisements."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Location Tracking:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dcs/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                " With your consent, GPS and location-based data may be used for EV services such as locating charging stations and navigation assistance."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-2",
                                    children: "Managing Cookies"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "You can manage or disable cookies through your browser or app settings."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Disabling certain cookies may affect the functionality and performance of our services."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dcs/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-2",
                                    children: "Third-Party Tools"
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: "We may use trusted third-party services such as analytics providers, payment gateways, and advertising networks. These providers may use cookies or tracking technologies in compliance with applicable laws and their respective privacy policies."
                                }, void 0, false, {
                                    fileName: "[project]/app/dcs/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dcs/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dcs/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dcs/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DataSecurityCompliancePage;
var _c;
__turbopack_context__.k.register(_c, "DataSecurityCompliancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_65a5239d._.js.map