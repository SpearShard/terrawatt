// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }


// export default function Navbar() {
//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Pulse", href: "/" },
//     { name: "TeraaCharge", href: "/teraa-charge" },
//     { name: "TeraaMart", href: "/teraa-mart" },
//     { name: "Investors & Partners", href: "/investors-and-partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Connect", href: "/connect", isButton: true }, // Still part of nav
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? " bg-black/70 backdrop-blur-md" : "py-6 bg-transparent"
//         }`}
//     >
//       <div className="justify-center w-fit mx-auto flex items-center px-10">

//         {/* Logo + Nav Items */}
//         <div className="flex items-center space-x-10">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/teraawatt.svg"
//               alt="TeraaWatt Logo"
//               width={125}
//               height={45}
//               className="object-contain"
//             />
//           </Link>

//           {/* Nav Items */}
//           <div className="hidden md:flex items-center space-x-10 text-white font-normal">
//             {navItems.map((item) => (
//               <Link key={item.name} href={item.href}>
//                 <span
//                   onClick={(e) => {
//                     if (item.name === "TeraaCharge") {
//                       e.preventDefault();
//                       window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//                     }
//                     if (item.name === "TeraaMart") {
//                       e.preventDefault();

//                       // 1️⃣ Disable all car ScrollTriggers
//                       ScrollTrigger.getAll().forEach(t => {
//                         if (t.vars.id === "carScroll") t.disable();
//                       });

//                       // 2️⃣ Scroll smoothly to the Video section
//                       const section = document.querySelector("#video-section");
//                       if (section) {
//                         section.scrollIntoView({ behavior: "smooth" });

//                         // 3️⃣ After scroll, jump to frame 598
//                         setTimeout(() => {
//                           window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
//                         }, 800);
//                       }

//                       return;
//                     }


//                     else {
//                       setActive(item.name);
//                     }

//                   }}

//                   className={`relative cursor-pointer transition-all duration-200 ${item.isButton
//                     ? "" // SVG will handle styling
//                     : active === item.name
//                       ? "text-white"
//                       : "text-[#C9C9C9] hover:text-white"
//                     }`}
//                 >
//                   {/* If it's NOT the button → show text */}
//                   {!item.isButton && (
//                     <>
//                       {item.name}
//                       {active === item.name && (
//                         <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FD4E2D]" />
//                       )}
//                     </>
//                   )}

//                   {/* If it IS the Connect button → show SVG */}
//                   {item.isButton && (
//                     <Image
//                       src="/Contact_page/connect.svg"
//                       alt="Connect"
//                       width={130}          // bigger
//                       height={48}
//                       className={`transition duration-300 ${active === "Connect"
//                         ? "opacity-100"  // Removed glow
//                         : "opacity-80 hover:opacity-100"
//                         }`}
//                     />
//                   )}

//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }










"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export default function Navbar() {
  const [active, setActive] = useState("Pulse");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Pulse", href: "/" },
    { name: "TeraaCharge", href: "/teraa-charge" },
    { name: "TeraaMart", href: "/teraa-mart" },
    { name: "Investors & Partners", href: "/investors-and-partners" },
    { name: "Insights", href: "/insights" },
    { name: "Connect", href: "/connect", isButton: true }, // Still part of nav
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? " bg-black/70 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
    >
      <div className="justify-center w-fit mx-auto flex items-center px-10">

        {/* Logo + Nav Items */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/teraawatt.svg"
              alt="TeraaWatt Logo"
              width={125}
              height={45}
              className="object-contain"
            />
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-10 text-white font-normal">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  onClick={async (e) => {
                    // Check current path
                    const isOnPulse = window.location.pathname === "/";

                    if (item.name === "TeraaCharge") {
                      e.preventDefault();

                      if (!isOnPulse) {
                        // Store intention
                        localStorage.setItem("TW_action", "go_charge");

                        // Navigate to Pulse
                        window.location.href = "/";
                        return;
                      }

                      // Already on Pulse → trigger animation
                      window.dispatchEvent(new CustomEvent("scrollToFrame804"));
                      return;
                    }

                    if (item.name === "TeraaMart") {
                      e.preventDefault();

                      if (!isOnPulse) {
                        // Store intention
                        localStorage.setItem("TW_action", "go_mart");

                        // Navigate to Pulse
                        window.location.href = "/";
                        return;
                      }

                      // Already on Pulse → normal behavior
                      ScrollTrigger.getAll().forEach((t) => {
                        if (t.vars.id === "carScroll") t.disable();
                      });

                      const section = document.querySelector("#video-section");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setTimeout(() => {
                          window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
                        }, 800);
                      }

                      return;
                    }

                    setActive(item.name);
                  }}

                >
                  {/* If it's NOT the button → show text */}
                  {!item.isButton && (
                    <>
                      {item.name}
                      {active === item.name && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] " />
                      )}
                    </>
                  )}

                  {/* If it IS the Connect button → show SVG */}
                  {item.isButton && (
                    <Image
                      src="/Contact_page/connect.svg"
                      alt="Connect"
                      width={130}          // bigger
                      height={48}
                      className={`transition duration-300 ${active === "Connect"
                        ? "opacity-100"  // Removed glow
                        : "opacity-80 hover:opacity-100"
                        }`}
                    />
                  )}

                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}




