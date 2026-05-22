// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import SmoothScrollProvider from "@/components/SmoothScrollProvider";
// import Script from "next/script";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Teraawatt - EV Charging & Mobility Solutions",
//   description: "Revolutionary EV charging, AI-powered trip planning, and sustainable mobility solutions for the future.",
//   viewport: "width=device-width, initial-scale=1.0",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//   <link
//     rel="preload"
//     href="/models/final.glb"
//     as="fetch"
//     type="model/gltf-binary"
//     crossOrigin="anonymous"
//   />

//   {/* Google Analytics */}
//   <Script
//     src="https://www.googletagmanager.com/gtag/js?id=G-NVFT6GFMX0"
//     strategy="afterInteractive"
//   />

//   <Script id="google-analytics" strategy="afterInteractive">
//     {`
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-NVFT6GFMX0');
//     `}
//   </Script>
// </head>

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         suppressHydrationWarning
//       >

//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//       window.addEventListener("beforeunload", () => {
//         sessionStorage.setItem("PAGE_WAS_RELOADED", "true");
//       });
//     `,
//           }}
//         />


//         <SmoothScrollProvider />
//         {children}


//       </body>

//     </html>
//   );
// }















// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import SmoothScrollProvider from "@/components/SmoothScrollProvider";
// import Script from "next/script";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Teraawatt - EV Charging & Mobility Solutions",
//   description: "Revolutionary EV charging, AI-powered trip planning, and sustainable mobility solutions for the future.",
//   viewport: "width=device-width, initial-scale=1.0",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>

//     <link
//   rel="preload"
//   as="image"
//   href="/investwebp/investpc/atlas_output/atlas1.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/investpc/atlas_output/atlas2.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/investpc/atlas_output/atlas3.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/investpc/atlas_output/atlas4.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/investpc/atlas_output/atlas5.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/mobileinvestor/atlas_output/atlas1.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/investwebp/mobileinvestor/atlas_output/atlas2.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/iphoneframes/potrait_iphone/atlas_output/atlas1.webp"
// />

// <link
//   rel="preload"
//   as="image"
//   href="/iphoneframes/potrait_iphone/atlas_output/atlas2.webp"
// />

//   {/* Google Analytics */}
//   <Script
//     src="https://www.googletagmanager.com/gtag/js?id=G-NVFT6GFMX0"
//     strategy="afterInteractive"
//   />

//   <Script id="google-analytics" strategy="afterInteractive">
//     {`
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-NVFT6GFMX0');
//     `}
//   </Script>
//   <script
//   dangerouslySetInnerHTML={{
//     __html: `
//       window.__INVESTOR_TEXTURES__ = new Map();

//       (() => {
//         const paths = [
//           "/investwebp/investpc/atlas_output/atlas1.webp",
//           "/investwebp/investpc/atlas_output/atlas2.webp",
//           "/investwebp/investpc/atlas_output/atlas3.webp",
//           "/investwebp/investpc/atlas_output/atlas4.webp",
//           "/investwebp/investpc/atlas_output/atlas5.webp",

//           "/investwebp/mobileinvestor/atlas_output/atlas1.webp",
//           "/investwebp/mobileinvestor/atlas_output/atlas2.webp",

//           "/iphoneframes/potrait_iphone/atlas_output/atlas1.webp",
// "/iphoneframes/potrait_iphone/atlas_output/atlas2.webp",
//         ];

//         paths.forEach((src) => {
//           const img = new Image();

//           img.src = src;

//           img.decoding = "async";

//           img.fetchPriority = "high";

//           img.onload = async () => {
//             try {
//               await img.decode();
//             } catch {}

//             window.__INVESTOR_TEXTURES__.set(
//               src,
//               img
//             );
//           };
//         });
//       })();
//     `,
//   }}
// />
// </head>



//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         suppressHydrationWarning
//       >

//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//       window.addEventListener("beforeunload", () => {
//         sessionStorage.setItem("PAGE_WAS_RELOADED", "true");
//       });
//     `,
//           }}
//         />


//         <SmoothScrollProvider />
//         {children}


//       </body>

//     </html>
//   );
// }













import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teraawatt - EV Charging & Mobility Solutions",
  description: "Revolutionary EV charging, AI-powered trip planning, and sustainable mobility solutions for the future.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

    <link
  rel="preload"
  as="image"
  href="/investwebp/investpc/atlas_output/atlas1.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/investpc/atlas_output/atlas2.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/investpc/atlas_output/atlas3.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/investpc/atlas_output/atlas4.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/investpc/atlas_output/atlas5.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/mobileinvestor/atlas_output/atlas1.webp"
/>

<link
  rel="preload"
  as="image"
  href="/investwebp/mobileinvestor/atlas_output/atlas2.webp"
/>

<link
  rel="preload"
  as="image"
  href="/iphoneframes/potrait_iphone/atlas_output/atlas1.webp"
/>

<link
  rel="preload"
  as="image"
  href="/iphoneframes/potrait_iphone/atlas_output/atlas2.webp"
/>

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-NVFT6GFMX0"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NVFT6GFMX0');
    `}
  </Script>
  <script
  dangerouslySetInnerHTML={{
    __html: `
      window.__PRELOADED_BITMAPS__ = new Map();

      (() => {
        const paths = [
          "/investwebp/investpc/atlas_output/atlas1.webp",
          "/investwebp/investpc/atlas_output/atlas2.webp",
          "/investwebp/investpc/atlas_output/atlas3.webp",
          "/investwebp/investpc/atlas_output/atlas4.webp",
          "/investwebp/investpc/atlas_output/atlas5.webp",

          "/investwebp/mobileinvestor/atlas_output/atlas1.webp",
          "/investwebp/mobileinvestor/atlas_output/atlas2.webp",

          "/iphoneframes/potrait_iphone/atlas_output/atlas1.webp",
          "/iphoneframes/potrait_iphone/atlas_output/atlas2.webp",
        ];

        paths.forEach(async (src) => {
          try {
            const img = new Image();

            img.fetchPriority = "high";

            img.loading = "eager";

            img.src = src;

            await new Promise(
              (resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
              }
            );

            const bitmap =
              await createImageBitmap(img);

            window.__PRELOADED_BITMAPS__.set(
              src,
              bitmap
            );

          } catch (err) {
            console.error(
              "Bitmap preload failed:",
              src,
              err
            );
          }
        });
      })();
    `,
  }}
/>

</head>



      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("PAGE_WAS_RELOADED", "true");
      });
    `,
          }}
        />


        <SmoothScrollProvider />
        {children}


      </body>

    </html>
  );
}