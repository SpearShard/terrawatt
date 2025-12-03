"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export default function Connect() {
  return (
    <>
      <Navbar />
      <div className={`min-h-[300vh] relative bg-[url('/Contact_page/bg.svg')] bg-cover bg-center bg-no-repeat ${urbanist.className}`}>
        
        {/* Contact Section */}
        <div className="absolute bottom-[20vw] w-full text-center  px-6 py-20">

          {/* Top Text */}
          <h2
            className="text-[5vw] leading-[100%] tracking-[0%] font-semibold text-[#00B0FF] font-[urbanist]"
          >
            Let&apos;s Power the Future,<br />Together
          </h2>

          {/* Sub Text */}
          <p
            className="mt-4 text-[38px] leading-[100%] tracking-[0%] font-medium text-[#08638F] font-[urbanist]  mx-auto w-fit "
          >
            Whether you&apos;re an EV owner, a charging partner, <br></br>
            a business, or an investor—we'd love to connect with you.
          </p>

          {/* "Keep in touch" */}
          <p
            className="mt-6 text-[36.98px] leading-[46.22px] tracking-[0.46px] font-normal text-gray-400 font-[urbanist]"
          >
            Keep in touch with us
          </p>

          {/* CLICKABLE Support Button */}
          <Link
            href="mailto:Support@teraawatt.com"
            className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 transition hover:bg-white/20 cursor-pointer"
          >
            <span className="text-white text-2xl h-[30px] w-[30px] bg-[url('/Contact_page/mail.svg')]"></span>
            <span className="text-white font-medium text-[20px]">
              Support@teraawatt.com
            </span>
          </Link>

        </div>
      </div>
    </>
  );
}
