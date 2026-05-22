"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import { useEffect, useRef } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Connect() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const primePlayback = async () => {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");

      try {
        if (video.readyState === 0) {
          video.load();
        }

        await video.play();
      } catch {
        // Safari can reject the first autoplay attempt until the media is ready.
      }
    };

    const handleReady = () => {
      void primePlayback();
    };

    void primePlayback();
    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
    };
  }, []);

  return (
    <>
      

      <section className="relative  bg-black min-h-screen  md:min-h-[250vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/Contact_page/connect.png"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/Contact_page/robotenv.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

        <div className="relative z-10 flex min-h-screen [min-height:100svh] items-end md:min-h-[250vh]">
          <div
            className={`w-full px-6 pb-12 pt-28 text-center sm:pb-16 md:pb-[10vw] ${urbanist.className}`}
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl font-semibold leading-tight text-[#00B0FF] md:text-[5vw] md:leading-[100%]">
                Let&apos;s Power the Future,
                <br className="hidden md:block" /> Together
              </h2>

              <p className="mx-auto mt-4 max-w-sm text-base font-medium leading-snug text-[#08638F] md:max-w-none md:text-[38px] md:leading-[100%]">
                Whether you&apos;re an EV owner, a charging partner,
                <br className="hidden md:block" />
                a business, or an investor - we&apos;d love to connect with you.
              </p>

              <p className="mt-8 text-lg leading-normal text-gray-300 md:mt-6 md:text-[37px] md:leading-[46px]">
                Keep in touch with us
              </p>

              <Link
                href="mailto:support@teraawatt.com"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white/20 md:mt-4 md:px-8 md:py-4"
              >
                <span className="h-6 w-6 bg-[url('/Contact_page/mail.svg')] bg-contain bg-no-repeat md:h-[30px] md:w-[30px]" />
                <span className="text-base font-medium text-white md:text-[20px]">
                  support@teraawatt.com
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}