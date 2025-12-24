module.exports = [
"[project]/app/connect/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import { Urbanist } from "next/font/google";
// import { useRef } from "react";
// const urbanist = Urbanist({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });
// export default function Connect() {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-[300vh] overflow-hidden">
//         {/* 🔥 Smooth Looping Video Background */}
//         <video
//           ref={videoRef}
//           src="/Contact_page/robotenv.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         {/* Subtle dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/20" />
//         {/* MAIN CONTENT */}
//         <div
//           className={`absolute bottom-[20vw] w-full text-center px-6 py-20 ${urbanist.className}`}
//         >
//           {/* Title */}
//           <h2 className="text-[5vw] font-semibold text-[#00B0FF] leading-[100%]">
//             Let&apos;s Power the Future,<br />Together
//           </h2>
//           {/* Subtitle */}
//           <p className="mt-4 text-[38px] font-medium text-[#08638F] leading-[100%]">
//             Whether you&apos;re an EV owner, a charging partner,<br />
//             a business, or an investor—we'd love to connect with you.
//           </p>
//           {/* Keep in touch */}
//           <p className="mt-6 text-[37px] text-gray-300 leading-[46px]">
//             Keep in touch with us
//           </p>
//           {/* Contact Button */}
//           <Link
//             href="mailto:Support@teraawatt.com"
//             className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition"
//           >
//             <span className="h-[30px] w-[30px] bg-[url('/Contact_page/mail.svg')] bg-contain bg-no-repeat" />
//             <span className="text-white text-[20px] font-medium">
//               Support@teraawatt.com
//             </span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import urbanist from 'next/font/google/target.css?{"path":"page.tsx","import":"Urbanist","arguments":[{"subsets":["latin"],"weight":["400","500","600"]}],"variableName":"urbanist"}';
import { useRef } from "react";
export default function Connect() {
    const videoRef = useRef(null);
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "[project]/app/connect/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "relative w-full h-[100dvh] md:h-auto md:min-h-[200vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ _jsxDEV("video", {
                        ref: videoRef,
                        src: "/Contact_page/robotenv.mp4",
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        preload: "auto",
                        className: "absolute inset-0 w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/connect/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute inset-0 bg-black/40 md:bg-black/20"
                    }, void 0, false, {
                        fileName: "[project]/app/connect/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `
            relative z-10 w-full h-full flex flex-col justify-center items-center px-4 
            md:absolute md:block md:h-auto md:bottom-[20vw] md:py-20
            text-center ${urbanist.className}
          `,
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] font-semibold text-[#00B0FF] leading-tight drop-shadow-lg",
                                children: [
                                    "Let's Power the Future,",
                                    /*#__PURE__*/ _jsxDEV("br", {
                                        className: "block md:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/app/connect/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 41
                                    }, this),
                                    " Together"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/connect/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "mt-4 max-w-[90%] md:max-w-none mx-auto text-[20px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium text-[#08638F] leading-tight drop-shadow-md",
                                children: [
                                    "Whether you're an EV owner, a charging partner,",
                                    /*#__PURE__*/ _jsxDEV("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/app/connect/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 65
                                    }, this),
                                    "a business, or an investor—we'd love to connect with you."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/connect/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "mt-6 md:mt-8 text-[18px] sm:text-[30px] md:text-[37px] text-gray-200 md:text-gray-300 leading-relaxed font-light",
                                children: "Keep in touch with us"
                            }, void 0, false, {
                                fileName: "[project]/app/connect/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Link, {
                                href: "mailto:Support@teraawatt.com",
                                className: "mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "h-[24px] w-[24px] sm:h-[30px] sm:w-[30px] bg-[url('/Contact_page/mail.svg')] bg-contain bg-no-repeat opacity-90 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/connect/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-white font-medium text-[16px] sm:text-[20px]",
                                        children: "Support@teraawatt.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/connect/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/connect/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/connect/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/connect/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=app_connect_page_tsx_ab56c42a._.js.map