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
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage

export default function Navbar() {
  const [active, setActive] = useState("Pulse");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // --- Scroll Detection ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- State Initialization & URL Sync (THE FIX) ---
  useEffect(() => {
    // 1. Check for stored intention after a redirect
    const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);
    
    if (storedActive) {
      setActive(storedActive);
      // Clear the key immediately so the state doesn't persist on refresh
      localStorage.removeItem(ACTIVE_NAV_KEY); 
      return; // Stop here, use the stored state
    }

    // 2. Standard URL Sync (if no stored intention)
    if (pathname === "/") {
      // Only default to Pulse if no other special tab is currently active
      if (active !== "TeraaCharge" && active !== "TeraaMart") {
        setActive("Pulse");
      }
    } else if (pathname.includes("investors")) {
      setActive("Investors & Partners");
    } else if (pathname.includes("insights")) {
      setActive("Insights");
    } else if (pathname.includes("connect")) {
      setActive("Connect");
    }
  }, [pathname]); // active is no longer a dependency here for the initial load fix

  const navItems = [
    { name: "Pulse", href: "/" },
    { name: "TeraaCharge", href: "/teraa-charge" },
    { name: "TeraaMart", href: "/teraa-mart" },
    { name: "Investors & Partners", href: "/investors-and-partners" },
    { name: "Insights", href: "/insights" },
    { name: "Connect", href: "/connect", isButton: true },
  ];

  // Function to handle custom routing and setting state
  const handleCustomNavigation = (itemName: string) => {
    const isOnPulse = window.location.pathname === "/";

    if (itemName === "TeraaCharge") {
      setActive("TeraaCharge");
      
      if (!isOnPulse) {
        // Save the intention before redirecting
        localStorage.setItem(ACTIVE_NAV_KEY, "TeraaCharge");
        window.location.href = "/";
      } else {
        // Already on Pulse → trigger animation
        window.dispatchEvent(new CustomEvent("scrollToFrame804"));
      }
      return true; // Navigation handled
    }

    if (itemName === "TeraaMart") {
      setActive("TeraaMart");

      if (!isOnPulse) {
        // Save the intention before redirecting
        localStorage.setItem(ACTIVE_NAV_KEY, "TeraaMart");
        window.location.href = "/";
      } else {
        // Already on Pulse → trigger animation
        ScrollTrigger.getAll().forEach((t) => {
          if (t.vars.id === "carScroll") t.disable();
        });
        const section = document.querySelector("#video-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent("scrollToPhoneFrame598"));
          }, 1800);
        }
      }
      return true; // Navigation handled
    }
    
    return false; // Not a custom route
  };


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="justify-center w-fit mx-auto flex items-center px-10">
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setActive("Pulse")}
          >
            <Image
              src="/teraawatt.svg"
              alt="TeraaWatt Logo"
              width={125}
              height={45}
              className="object-contain"
            />
          </Link>

          {/* Nav Items Container */}
          <div className="hidden md:flex items-center space-x-8 text-white font-normal relative">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-2 py-1 group"
              >
                <span
                  className={`relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${
                    active === item.name
                      ? "text-white"
                      : "text-neutral-400 group-hover:text-white"
                  }`}
                  onClick={(e) => {
                    const handled = handleCustomNavigation(item.name);
                    
                    if (handled) {
                        e.preventDefault();
                    } else {
                        // Standard Navigation
                        setActive(item.name);
                    }
                  }}
                >
                  {/* Render Text or Button Image */}
                  {!item.isButton ? (
                    item.name
                  ) : (
                    <Image
                      src="/Contact_page/connect.svg"
                      alt="Connect"
                      width={130}
                      height={48}
                      className={`transition duration-300 ${
                        active === "Connect"
                          ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    />
                  )}
                </span>

                {/* --- THE REFINED INDICATOR (Cyan/Glassy) --- */}
                {!item.isButton && active === item.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 z-10 rounded-full"
                    style={{
                       // Subtle glassy background gradient
                       background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                       // Subtle cyan bottom glow for activation
                       boxShadow: '0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      stiffness: 100,
                      damping: 10,
                    }}
                  />
                )}
                 {/* Hover Glow Effect */}
                 {!item.isButton && (
                    <div 
                        className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 
                                   group-hover:opacity-100 group-hover:bg-white/5" 
                    />
                 )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}