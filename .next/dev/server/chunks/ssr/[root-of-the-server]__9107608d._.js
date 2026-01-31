module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";
function Navbar() {
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Pulse");
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ---------------- body lock ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        return ()=>{
            document.body.style.overflow = "auto";
        };
    }, [
        isMobileMenuOpen
    ]);
    /* ---------------- scroll bg ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    /* -------- desktop hide / reveal -------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!navRef.current || window.innerWidth < 768) return;
        const nav = navRef.current;
        let lastScroll = window.scrollY;
        const onScroll = ()=>{
            const current = window.scrollY;
            if (current > lastScroll && current > 80) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                    y: -120,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
            lastScroll = current;
        };
        const show = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(nav, {
                y: 0,
                duration: 0.25,
                ease: "power2.out"
            });
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
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            nav.removeEventListener("mouseenter", show);
            topZone.remove();
        };
    }, []);
    /* ---------------- route syncing ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem(ACTIVE_NAV_KEY);
        if (stored) {
            setActive(stored);
            localStorage.removeItem(ACTIVE_NAV_KEY);
            return;
        }
        if (pathname === "/") {
            const action = localStorage.getItem("TW_action");
            if (action === "go_charge") setActive("TeraaCharge");
            else if (action === "go_mart") setActive("TeraaMart");
            else setActive("Pulse");
        } else if (pathname.includes("investors")) setActive("Investors & Partners");
        else if (pathname.includes("insights")) setActive("Insights");
        else if (pathname.includes("connect")) setActive("Connect");
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname !== "/") return;
        const sync = ()=>{
            const v = localStorage.getItem(ACTIVE_NAV_KEY);
            if (v) setActive(v);
        };
        window.addEventListener("storage", sync);
        return ()=>window.removeEventListener("storage", sync);
    }, [
        pathname
    ]);
    /* ---------------- navigation ---------------- */ const handleNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name)=>{
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
            if (onHome) window.dispatchEvent(new Event("triggerVideoJump"));
            else {
                localStorage.setItem("TW_action", "go_mart");
                window.location.href = "/";
            }
            return true;
        }
        setActive(name);
        return false;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: `fixed top-0 left-0 w-full z-50 transition-all ${isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-xl shadow-lg" : "py-6 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        onClick: ()=>handleNavigation("Pulse"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/teraawatt.svg",
                            alt: "logo",
                            width: 125,
                            height: 45,
                            className: "p-[1vw] mr-[1vw]"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden relative z-50 w-10 h-10 flex items-center justify-center",
                        onClick: ()=>setIsMobileMenuOpen((v)=>!v),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 flex flex-col justify-center space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex space-x-8 text-white",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: (e)=>{
                                    if (handleNavigation(item.name)) e.preventDefault();
                                },
                                className: `relative ${active === item.name ? "opacity-100" : "opacity-60"}`,
                                children: [
                                    item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: item.name,
                                        width: item.w,
                                        height: item.h,
                                        className: `relative top-[6%] ${active === item.name ? "opacity-100" : "opacity-90"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this) : item.isButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Contact_page/connect1.svg",
                                        alt: "connect",
                                        width: 70,
                                        height: 48
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this) : item.name,
                                    !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: "navbar-indicator",
                                        className: "absolute left-0 right-0 h-[2px] bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 168,
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
                                onClick: (e)=>{
                                    if (handleNavigation(item.name)) e.preventDefault();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "hover:bg-white/5"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"}`,
                                            children: !item.isButton ? item.name : "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this),
                                        !item.isButton && active === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "mobile-indicator",
                                            className: "absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 281,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 19
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 260,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
} // "use client";
 // import Image from "next/image";
 // import Link from "next/link";
 // import { useState,useRef, useEffect } from "react";
 // import { usePathname } from "next/navigation";
 // import { motion, AnimatePresence } from "framer-motion";
 // import gsap from "gsap";
 // import { ScrollTrigger } from "gsap/ScrollTrigger";
 // if (typeof window !== "undefined") {
 //   gsap.registerPlugin(ScrollTrigger);
 // }
 // const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage
 // export default function Navbar() {
 //   const navRef = useRef<HTMLDivElement>(null);
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
 //   useEffect(() => {
 //   if (!navRef.current) return;
 //   // Desktop only
 //   if (window.innerWidth < 768) return;
 //   const nav = navRef.current;
 //   gsap.set(nav, { y: 0 });
 //   let lastScroll = window.scrollY;
 //   const onScroll = () => {
 //     const current = window.scrollY;
 //     if (current > lastScroll && current > 80) {
 //       // scrolling down → hide
 //       gsap.to(nav, { y: -120, duration: 0.4, ease: "power2.out" });
 //      } // else {
 //       // scrolling up → show
 //     //   gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
 //     // }
 //     lastScroll = current;
 //   };
 //   window.addEventListener("scroll", onScroll);
 //   // Reveal on hover
 //   const show = () =>
 //     gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });
 //   nav.addEventListener("mouseenter", show);
 //   // Invisible top trigger zone
 //   const topZone = document.createElement("div");
 //   topZone.style.position = "fixed";
 //   topZone.style.top = "0";
 //   topZone.style.left = "0";
 //   topZone.style.width = "100%";
 //   topZone.style.height = "20px";
 //   topZone.style.zIndex = "40";
 //   document.body.appendChild(topZone);
 //   topZone.addEventListener("mouseenter", show);
 //   return () => {
 //     window.removeEventListener("scroll", onScroll);
 //     nav.removeEventListener("mouseenter", show);
 //     topZone.remove();
 //   };
 // }, []);
 //   // --- State Initialization & URL Sync ---
 //   useEffect(() => {
 //     const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
 //     if (storedActive) {
 //       setActive(storedActive);
 //       localStorage.removeItem(ACTIVE_NAV_KEY);
 //       return;
 //     }
 //     // Only set default "Pulse" on homepage if no specific tab was requested
 //     if (pathname === "/" && !localStorage.getItem("TW_action")) {
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
 //   // --- Sync Active Tab From Scroll (page.tsx) ---
 // useEffect(() => {
 //   if (pathname !== "/") return;
 //   const syncFromScroll = () => {
 //     const v = localStorage.getItem("TW_ACTIVE_NAV");
 //     if (v) setActive(v);
 //   };
 //   window.addEventListener("storage", syncFromScroll);
 //   return () => window.removeEventListener("storage", syncFromScroll);
 // }, [pathname]);
 //   const navItems = [
 //   { name: "Pulse", href: "/" },
 //   {
 //     name: "TeraaCharge",
 //     href: "/",
 //     image: "/teraacharge.png",
 //     width: 90,
 //     height: 28,
 //   },
 //   {
 //     name: "TeraaMart",
 //     href: "/",
 //     image: "/teraamartlogo.png",
 //     width: 80,
 //     height: 26,
 //   },
 //   { name: "Investors & Partners", href: "/investors-and-partners" },
 //   { name: "Insights", href: "/insights" },
 //   { name: "Connect", href: "/connect", isButton: true },
 // ];
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
 //       ref={navRef}
 //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
 //         ? "bg-black/90 backdrop-blur-xl  shadow-lg"
 //         : "py-6 bg-transparent"
 //         }`}
 //     >
 //       <div className="flex  lg:p-[0.2vw] items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10">
 //         {/* Logo and Nav Items Container */}
 //         <div className="flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start">
 //           {/* Logo */}
 //           <Link
 //             href="/"
 //             className="flex items-center relative z-50"
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
 //                 className="relative px-2 py-1 group"
 //                 onClick={(e) => {
 //                   if (item.name === "Investors & Partners") {
 //                     // e.preventDefault();
 //                     setActive("Investors & Partners");
 //                     // window.location.href = "/investors-and-partners";
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
 //   <Image
 //     src={item.image}
 //     alt={item.name}
 //     width={item.width}
 //     height={item.height}
 //     className={`transition-all duration-300 ${
 //       active === item.name
 //         ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
 //         : "opacity-70 group-hover:opacity-100"
 //     }`}
 //   />
 // ) : !item.isButton ? (
 //   item.name
 // ) : (
 //   <Image
 //     src="/Contact_page/connect1.svg"
 //     alt="Connect"
 //     width={70}
 //     height={48}
 //     className={`transition duration-300 ${
 //       active === "Connect"
 //         ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
 //         : "opacity-80 hover:opacity-100"
 //     }`}
 //   />
 // )}
 //                 </span>
 //                 {/* Desktop Indicator */}
 //                 {!item.isButton && active === item.name && (
 //                   <motion.div
 //     layoutId="navbar-indicator"
 //     className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
 //     transition={{
 //       type: "spring",
 //       stiffness: 300,
 //       damping: 30,
 //     }}
 //   />
 //                 )}
 //               </Link>
 //             ))}
 //           </div>
 //         </div>
 //       </div>
 //       {/* --- Mobile Menu Overlay --- */}
 // <AnimatePresence>
 //   {isMobileMenuOpen && (
 //     <motion.div
 //       initial={{ opacity: 0 }}
 //       animate={{ opacity: 1 }}
 //       exit={{ opacity: 0 }}
 //       transition={{ duration: 0.25 }}
 //       className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center pt-8 h-screen"
 //     >
 //       <motion.div
 //         initial={{ y: 20, opacity: 0 }}
 //         animate={{ y: 0, opacity: 1 }}
 //         exit={{ y: 20, opacity: 0 }}
 //         transition={{ type: "spring", stiffness: 120, damping: 18 }}
 //         className="w-full px-6 space-y-3"
 //       >
 //         {navItems.map((item) => (
 //           <Link
 //             key={item.name}
 //             href={item.href}
 //             className="relative block"
 //             onClick={(e) => {
 //               if (item.name === "Investors & Partners") {
 //                 // e.preventDefault();
 //                 setActive("Investors & Partners");
 //                 // window.location.href = "/investors-and-partners";
 //                 setIsMobileMenuOpen(false);
 //                 return;
 //               }
 //               const handled = handleCustomNavigation(item.name);
 //               if (handled) {
 //                 e.preventDefault();
 //               } else {
 //                 setActive(item.name);
 //                 setIsMobileMenuOpen(false);
 //               }
 //             }}
 //           >
 //             <div
 //               className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
 //                 active === item.name
 //                   ? "bg-white/5"
 //                   : "bg-white/0 hover:bg-white/5"
 //               }`}
 //             >
 //               <span
 //                 className={`text-lg font-medium tracking-wide ${
 //                   active === item.name ? "text-white" : "text-neutral-400"
 //                 }`}
 //               >
 //                 {!item.isButton ? item.name : "Connect"}
 //               </span>
 //               {/* Active red underline */}
 //               {!item.isButton && active === item.name && (
 //                 <motion.div
 //                   layoutId="mobile-indicator"
 //                   className="absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
 //                 />
 //               )}
 //             </div>
 //           </Link>
 //         ))}
 //       </motion.div>
 //     </motion.div>
 //   )}
 // </AnimatePresence>
 //     </nav>
 //   );
 // }
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
"[project]/app/investors-and-partners/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "@/components/Footer";
// gsap.registerPlugin(ScrollTrigger);
// export default function InvestorsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const bgVideoRef = useRef<HTMLVideoElement>(null);
//   const rawProgressRef = useRef(0);
//   const smoothProgressRef = useRef(0);
//   const scrollDistanceRef = useRef(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const TOTAL_FRAMES = 516;
//   /* ---------------- MOBILE DETECTION ---------------- */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   /* ---------------- SCROLL DISTANCE ---------------- */
//   useEffect(() => {
//     const calc = () => {
//       if (window.innerWidth < 640) return TOTAL_FRAMES * 2;
//       if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
//       return TOTAL_FRAMES * 6;
//     };
//     scrollDistanceRef.current = calc();
//     ScrollTrigger.refresh();
//   }, []);
//   /* ---------------- VIDEO SETUP + WAKE ---------------- */
//   /* ---------------- VIDEO SETUP + HARD WAKE ---------------- */
// useEffect(() => {
//   if (!videoRef.current || !bgVideoRef.current) return;
//   const wake = async (video: HTMLVideoElement) => {
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     try {
//       await video.play();   // 🔥 forces decode
//       video.pause();        // stop immediately
//       video.currentTime = 0;
//     } catch {
//       // autoplay blocked? fallback
//       video.currentTime = 0.01;
//       setTimeout(() => (video.currentTime = 0), 200);
//     }
//   };
//   const fg = videoRef.current;
//   fg.src = "/investwebp/invest.mp4";
//   fg.load();
//   wake(fg);
//   const bg = bgVideoRef.current;
//   bg.src = "/investwebp/invest.mp4";
//   bg.loop = true;
//   bg.load();
//   wake(bg);
// }, []);
//   /* ---------------- SCRUB LOOP ---------------- */
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     let raf: number;
//     let last = performance.now();
//     const animate = (time: number) => {
//       const delta = Math.min((time - last) / 1000, 0.1);
//       last = time;
//       if (!video.duration || isNaN(video.duration)) {
//         raf = requestAnimationFrame(animate);
//         return;
//       }
//       const speed = isMobile ? 8 : 18;
//       smoothProgressRef.current +=
//         (rawProgressRef.current - smoothProgressRef.current) *
//         Math.min(delta * speed, 1);
//       const target = smoothProgressRef.current * video.duration;
//       if (Math.abs(video.currentTime - target) > 0.015) {
//         video.currentTime = target;
//       }
//       raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [isMobile]);
//   /* ---------------- SCROLLTRIGGER ---------------- */
//   useEffect(() => {
//     if (!containerRef.current) return;
//     ScrollTrigger.getAll().forEach(st => st.kill());
//     const st = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: `+=${scrollDistanceRef.current}px`,
//       pin: true,
//       anticipatePin: 1,
//       onUpdate: self => (rawProgressRef.current = self.progress),
//     });
//     return () => st.kill();
//   }, []);
//   /* ---------------- JSX ---------------- */
//   return (
//     <>
//       <Navbar />
//       <div className="relative w-full min-h-screen bg-black overflow-hidden">
//         {/* MOBILE BLURRED BACKGROUND */}
//         <div className="fixed inset-0 z-0 sm:hidden">
//           <video
//             ref={bgVideoRef}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-screen h-screen object-cover blur-2xl opacity-70"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//         {/* FOREGROUND */}
//         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
//           <div className="sticky top-0 h-screen flex items-center justify-center">
//             <div className="w-full h-full max-h-screen flex items-center justify-center">
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-contain sm:object-cover"
//                 muted
//                 playsInline
//               />
//             </div>
//           </div>
//           <div style={{ height: `${scrollDistanceRef.current}px` }} />
//         </div>
//       </div>
//       <div className="relative">
//         <Footer />
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
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
    const bgVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const TOTAL_FRAMES = 516;
    /* ---------------- MOBILE ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, []);
    /* ---------------- SCROLL DISTANCE ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const calc = ()=>{
            if (window.innerWidth < 640) return TOTAL_FRAMES * 2;
            if (window.innerWidth < 1024) return TOTAL_FRAMES * 4;
            return TOTAL_FRAMES * 6;
        };
        scrollDistanceRef.current = calc();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
    }, []);
    /* ---------------- VIDEO HARD WAKE ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!videoRef.current || !bgVideoRef.current) return;
        const fg = videoRef.current;
        const bg = bgVideoRef.current;
        fg.src = "/investwebp/invest.mp4";
        fg.muted = true;
        fg.playsInline = true;
        fg.preload = "auto";
        bg.src = "/investwebp/invest.mp4";
        bg.muted = true;
        bg.playsInline = true;
        bg.loop = true;
        bg.preload = "auto";
        fg.load();
        bg.load();
        const wake = async ()=>{
            try {
                await fg.play();
                fg.pause();
                fg.currentTime = 0;
                await bg.play();
                bg.pause();
                bg.currentTime = 0;
            } catch  {
                fg.currentTime = 0.01;
                bg.currentTime = 0.01;
                setTimeout(()=>{
                    fg.currentTime = 0;
                    bg.currentTime = 0;
                }, 200);
            }
            setReady(true); // 🔥 now safe to scrub
        };
        fg.addEventListener("loadeddata", wake, {
            once: true
        });
    }, []);
    /* ---------------- SCRUB LOOP ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        const video = videoRef.current;
        if (!video) return;
        let raf = 0;
        let last = performance.now();
        const animate = (time)=>{
            const delta = Math.min((time - last) / 1000, 0.1);
            last = time;
            if (!video.duration || isNaN(video.duration)) {
                raf = requestAnimationFrame(animate);
                return;
            }
            const speed = isMobile ? 8 : 18;
            smoothProgressRef.current += (rawProgressRef.current - smoothProgressRef.current) * Math.min(delta * speed, 1);
            const target = smoothProgressRef.current * video.duration;
            if (Math.abs(video.currentTime - target) > 0.015) {
                video.currentTime = target;
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(raf);
    }, [
        isMobile,
        ready
    ]);
    /* ---------------- SCROLLTRIGGER ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || !ready) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((st)=>st.kill());
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollDistanceRef.current}px`,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self)=>rawProgressRef.current = self.progress
        });
        return ()=>st.kill();
    }, [
        ready
    ]);
    /* ---------------- JSX ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full min-h-screen bg-black overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-0 sm:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: bgVideoRef,
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                className: "w-screen h-screen object-cover blur-2xl opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/app/investors-and-partners/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inset-0 bg-black/40"
                            }, void 0, false, {
                                fileName: "[project]/app/investors-and-partners/page.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/investors-and-partners/page.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "relative z-10 w-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 h-screen flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: videoRef,
                                    className: "w-full h-full object-contain lg:object-fill sm:object-cover",
                                    muted: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/app/investors-and-partners/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/investors-and-partners/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/investors-and-partners/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/investors-and-partners/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/investors-and-partners/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/investors-and-partners/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
} // Optimized version 
 // "use client";
 // import { useEffect, useRef, useState } from "react";
 // import Navbar from "@/components/Navbar";
 // import gsap from "gsap";
 // import { ScrollTrigger } from "gsap/ScrollTrigger";
 // import Footer from "@/components/Footer";
 // gsap.registerPlugin(ScrollTrigger);
 // export default function InvestorsPage() {
 //   const containerRef = useRef<HTMLDivElement>(null);
 //   const videoRef = useRef<HTMLVideoElement>(null);
 //   const bgVideoRef = useRef<HTMLVideoElement>(null);
 //   const rawProgressRef = useRef(0);
 //   const smoothProgressRef = useRef(0);
 //   const scrollDistanceRef = useRef(0);
 //   const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
 //   const [isMobile, setIsMobile] = useState(false);
 //   /* ---------------- MOBILE DETECTION ---------------- */
 //   useEffect(() => {
 //     const check = () => setIsMobile(window.innerWidth < 640);
 //     check();
 //     window.addEventListener("resize", check);
 //     return () => window.removeEventListener("resize", check);
 //   }, []);
 //   /* ---------------- SCROLL DISTANCE ---------------- */
 //   useEffect(() => {
 //     const calc = () => {
 //       if (window.innerWidth < 640) return 1000;
 //       if (window.innerWidth < 1024) return 2000;
 //       return 3000;
 //     };
 //     const update = () => {
 //       scrollDistanceRef.current = calc();
 //       ScrollTrigger.refresh();
 //     };
 //     update();
 //     window.addEventListener("resize", update);
 //     return () => window.removeEventListener("resize", update);
 //   }, []);
 //   /* ---------------- VIDEO SETUP ---------------- */
 //   useEffect(() => {
 //     if (!videoRef.current || !bgVideoRef.current) return;
 //     const fg = videoRef.current;
 //     fg.src = "/investwebp/invest.mp4";
 //     fg.muted = true;
 //     fg.playsInline = true;
 //     fg.preload = "auto";
 //     fg.load();
 //     // Safari warmup
 //     fg.currentTime = 0.01;
 //     setTimeout(() => (fg.currentTime = 0), 200);
 //     const bg = bgVideoRef.current;
 //     bg.src = "/investwebp/invest.mp4";
 //   }, []);
 //   /* ---------------- SCRUB LOOP ---------------- */
 //   useEffect(() => {
 //     const video = videoRef.current;
 //     if (!video) return;
 //     let raf = 0;
 //     let lastTime = performance.now();
 //     let lastRender = 0;
 //     let duration = 0;
 //     const animate = (time: number) => {
 //       // cap ~60fps
 //       if (time - lastRender < 16) {
 //         raf = requestAnimationFrame(animate);
 //         return;
 //       }
 //       lastRender = time;
 //       const delta = Math.min((time - lastTime) / 1000, 0.1);
 //       lastTime = time;
 //       if (!duration && video.duration) duration = video.duration;
 //       if (!duration) {
 //         raf = requestAnimationFrame(animate);
 //         return;
 //       }
 //       // exponential smoothing
 //       const damping = 1 - Math.exp(-delta * (isMobile ? 8 : 18));
 //       smoothProgressRef.current +=
 //         (rawProgressRef.current - smoothProgressRef.current) * damping;
 //       const target = smoothProgressRef.current * duration;
 //       const diff = Math.abs(video.currentTime - target);
 //       // avoid micro seeks
 //       if (diff > 0.03) {
 //         video.currentTime = target;
 //       }
 //       raf = requestAnimationFrame(animate);
 //     };
 //     raf = requestAnimationFrame(animate);
 //     return () => cancelAnimationFrame(raf);
 //   }, [isMobile]);
 //   /* ---------------- SCROLLTRIGGER ---------------- */
 //   useEffect(() => {
 //     if (!containerRef.current) return;
 //     scrollTriggerRef.current?.kill();
 //     const st = ScrollTrigger.create({
 //       trigger: containerRef.current,
 //       start: "top top",
 //       end: `+=${scrollDistanceRef.current}px`,
 //       pin: true,
 //       anticipatePin: 1,
 //       onUpdate: (self) => {
 //         rawProgressRef.current = self.progress;
 //       },
 //     });
 //     scrollTriggerRef.current = st;
 //     return () => st.kill();
 //   }, []);
 //   /* ---------------- JSX ---------------- */
 //   return (
 //     <>
 //       <Navbar />
 //       <div className="relative w-full min-h-screen bg-black overflow-hidden">
 //         {/* MOBILE BLUR BG */}
 //         <div className="fixed inset-0 z-0 sm:hidden">
 //           <video
 //             ref={bgVideoRef}
 //             autoPlay
 //             muted
 //             loop
 //             playsInline
 //             className="w-screen h-screen object-cover blur-2xl opacity-70"
 //           />
 //           <div className="absolute inset-0 bg-black/40" />
 //         </div>
 //         {/* FOREGROUND */}
 //         <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
 //           <div className="sticky top-0 h-screen flex items-center justify-center">
 //             <video
 //               ref={videoRef}
 //               className="w-full h-full object-contain sm:object-cover"
 //               muted
 //               playsInline
 //             />
 //           </div>
 //           <div style={{ height: `${scrollDistanceRef.current}px` }} />
 //         </div>
 //       </div>
 //       <Footer />
 //     </>
 //   );
 // }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9107608d._.js.map