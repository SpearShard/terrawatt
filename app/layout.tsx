// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Footer from "../components/Footer";
// import Navbar from "@/components/Navbar";
// import PreloadImages from "@/components/PreloadImages";


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
//   <html lang="en">
//     <head>
//       <link
//         rel="preload"
//         href="/models/lastwala.glb"
//         as="fetch"
//         type="model/gltf-binary"
//         crossOrigin="anonymous"
//       />
//     </head>

//     <body
//       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       suppressHydrationWarning
//     >

//         <PreloadImages />
//         {children}
//         <Footer />
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
    href="/models/final.glb"
    as="fetch"
    type="model/gltf-binary"
    crossOrigin="anonymous"
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