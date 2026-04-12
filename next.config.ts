// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "teraawatt.com",
//       },
//       {
//         protocol: "https",
//         hostname: "ik.imagekit.io",
//       },
//       {
//         protocol: "https",
//         hostname: "teraawattdev.blob.core.windows.net",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;















import type { NextConfig } from "next";

const immutableAssetHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teraawatt.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "teraawattdev.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      { source: "/dashsmaller/:path*", headers: immutableAssetHeaders },
      { source: "/iphoneframes/:path*", headers: immutableAssetHeaders },
      { source: "/investwebp/:path*", headers: immutableAssetHeaders },
      { source: "/models/:path*", headers: immutableAssetHeaders },
      { source: "/Contact_page/:path*", headers: immutableAssetHeaders },
      { source: "/insight/:path*", headers: immutableAssetHeaders },
      { source: "/env/:path*", headers: immutableAssetHeaders },
      { source: "/fonts/:path*", headers: immutableAssetHeaders },
      { source: "/About/:path*", headers: immutableAssetHeaders },
      { source: "/phoneloader.mp4", headers: immutableAssetHeaders },
      { source: "/desktoploader.mp4", headers: immutableAssetHeaders },
      { source: "/preloader.mp4", headers: immutableAssetHeaders },
      { source: "/windshieldvideo.mp4", headers: immutableAssetHeaders },
      { source: "/winshieldvideo.mp4", headers: immutableAssetHeaders },
      { source: "/bump.png", headers: immutableAssetHeaders },
    ];
  },
};

export default nextConfig;
