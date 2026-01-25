(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PreloadImages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreloadImages
]);
"use client";
function PreloadImages() {
    // useEffect(() => {
    //   const FG_FRAMES = 810;
    //   const BG_FRAMES = 191;
    //   const PERCENTAGE_FRAMES = 1464;
    //   const batchSize = 20; // Smaller batches for preloading
    //   const delayBetweenBatches = 200; // Longer delay
    //   const preloadImage = (url: string) => {
    //     const img = new Image();
    //     img.src = url;
    //     // No onload needed, just preload
    //   };
    //   const fgUrls: string[] = [];
    //   for (let i = 1; i <= FG_FRAMES; i++) {
    //     fgUrls.push(`https://ik.imagekit.io/m064cyjlx/iphone/frame_${String(i).padStart(5, "0")}.jpg`);
    //   }
    //   const bgUrls: string[] = [];
    //   for (let i = 1; i <= BG_FRAMES; i++) {
    //     bgUrls.push(`https://ik.imagekit.io/m064cyjlx/phonebgtickets/frame_${String(i).padStart(5, "0")}.png`);
    //   }
    //   const percentageUrls: string[] = [];
    //   for (let i = 1; i <= PERCENTAGE_FRAMES; i++) {
    //     percentageUrls.push(`https://ik.imagekit.io/m064cyjlx/percentage/frame_${String(i).padStart(5, "0")}.jpg`);
    //   }
    //   let fgBatchIndex = 0;
    //   let bgBatchIndex = 0;
    //   let percentageBatchIndex = 0;
    //   const preloadNextBatch = () => {
    //     if (fgBatchIndex < fgUrls.length) {
    //       const end = Math.min(fgBatchIndex + batchSize, fgUrls.length);
    //       for (let i = fgBatchIndex; i < end; i++) {
    //         preloadImage(fgUrls[i]);
    //       }
    //       fgBatchIndex = end;
    //     }
    //     if (bgBatchIndex < bgUrls.length) {
    //       const end = Math.min(bgBatchIndex + batchSize, bgUrls.length);
    //       for (let i = bgBatchIndex; i < end; i++) {
    //         preloadImage(bgUrls[i]);
    //       }
    //       bgBatchIndex = end;
    //     }
    //     if (percentageBatchIndex < percentageUrls.length) {
    //       const end = Math.min(percentageBatchIndex + batchSize, percentageUrls.length);
    //       for (let i = percentageBatchIndex; i < end; i++) {
    //         preloadImage(percentageUrls[i]);
    //       }
    //       percentageBatchIndex = end;
    //     }
    //     if (fgBatchIndex < fgUrls.length || bgBatchIndex < bgUrls.length || percentageBatchIndex < percentageUrls.length) {
    //       setTimeout(preloadNextBatch, delayBetweenBatches);
    //     }
    //   };
    //   preloadNextBatch();
    // }, []);
    return null; // This component doesn't render anything
}
_c = PreloadImages;
var _c;
__turbopack_context__.k.register(_c, "PreloadImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_PreloadImages_tsx_b3c917c0._.js.map