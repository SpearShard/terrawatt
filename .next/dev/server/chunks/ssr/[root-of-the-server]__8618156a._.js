module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/PreloadImages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreloadImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function PreloadImages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const FG_FRAMES = 810;
        const BG_FRAMES = 191;
        const PERCENTAGE_FRAMES = 1464;
        const batchSize = 20; // Smaller batches for preloading
        const delayBetweenBatches = 200; // Longer delay
        const preloadImage = (url)=>{
            const img = new Image();
            img.src = url;
        // No onload needed, just preload
        };
        const fgUrls = [];
        for(let i = 1; i <= FG_FRAMES; i++){
            fgUrls.push(`https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`);
        }
        const bgUrls = [];
        for(let i = 1; i <= BG_FRAMES; i++){
            bgUrls.push(`https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
        }
        const percentageUrls = [];
        for(let i = 1; i <= PERCENTAGE_FRAMES; i++){
            percentageUrls.push(`https://ik.imagekit.io/m064cyjlx/percentage/frame_${String(i).padStart(5, "0")}.jpg`);
        }
        let fgBatchIndex = 0;
        let bgBatchIndex = 0;
        let percentageBatchIndex = 0;
        const preloadNextBatch = ()=>{
            if (fgBatchIndex < fgUrls.length) {
                const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
                for(let i = fgBatchIndex; i < end; i++){
                    preloadImage(fgUrls[i]);
                }
                fgBatchIndex = end;
            }
            if (bgBatchIndex < bgUrls.length) {
                const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
                for(let i = bgBatchIndex; i < end; i++){
                    preloadImage(bgUrls[i]);
                }
                bgBatchIndex = end;
            }
            if (percentageBatchIndex < percentageUrls.length) {
                const end = Math.min(percentageBatchIndex + batchSize, percentageUrls.length);
                for(let i = percentageBatchIndex; i < end; i++){
                    preloadImage(percentageUrls[i]);
                }
                percentageBatchIndex = end;
            }
            if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length || percentageBatchIndex < percentageUrls.length) {
                setTimeout(preloadNextBatch, delayBetweenBatches);
            }
        };
        preloadNextBatch();
    }, []);
    return null; // This component doesn't render anything
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8618156a._.js.map