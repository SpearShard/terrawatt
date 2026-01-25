"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage

export default function Navbar() {
  const [active, setActive] = useState("Pulse");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Mobile
  const pathname = usePathname();

  // --- NEW: Prevent Body Scroll when Menu is Open ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  // --- Scroll Detection ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- State Initialization & URL Sync ---
  useEffect(() => {
    const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);

    if (storedActive) {
      setActive(storedActive);
      localStorage.removeItem(ACTIVE_NAV_KEY);
      return;
    }

    // Only set default "Pulse" on homepage if no specific tab was requested
    if (pathname === "/") {
      // Check if we arrived with a specific action (TeraaCharge or TeraaMart)
      const action = localStorage.getItem("TW_action");
      if (action === "go_charge") {
        setActive("TeraaCharge");
      } else if (action === "go_mart") {
        setActive("TeraaMart");
      } else {
        setActive("Pulse");
      }
    } else if (pathname.includes("investors")) {
      setActive("Investors & Partners");
    } else if (pathname.includes("insights")) {
      setActive("Insights");
    } else if (pathname.includes("connect")) {
      setActive("Connect");
    }
  }, [pathname]);

  // --- Sync Active Tab From Scroll (page.tsx) ---
useEffect(() => {
  const syncFromScroll = () => {
    const v = localStorage.getItem("TW_ACTIVE_NAV");
    if (v) setActive(v);
  };

  window.addEventListener("storage", syncFromScroll);
  return () => window.removeEventListener("storage", syncFromScroll);
}, []);


  const navItems = [
  { name: "Pulse", href: "/" },

  {
    name: "TeraaCharge",
    href: "/",
    image: "/teraacharge.png",
    width: 90,
    height: 28,
  },

  {
    name: "TeraaMart",
    href: "/",
    image: "/teraamartlogo.png",
    width: 80,
    height: 26,
  },

  { name: "Investors & Partners", href: "/investors-and-partners" },
  { name: "Insights", href: "/insights" },
  { name: "Connect", href: "/connect", isButton: true },
];


  // Function to handle custom routing and setting state
  const handleCustomNavigation = (itemName: string) => {
    sessionStorage.removeItem("PAGE_WAS_RELOADED");


    const isOnPulse = window.location.pathname === "/";








    // Close mobile menu immediately if open
    setIsMobileMenuOpen(false);

    if (itemName === "TeraaCharge") {
      setActive("TeraaCharge");

      if (isOnPulse) {
        // Already on homepage → immediately jump to TeraaCharge frame
        window.dispatchEvent(new CustomEvent("scrollToFrame804"));
      } else {
        // Coming from any other page (Investors, Insights, Connect, etc.)
        // Set flag and redirect to homepage
        localStorage.setItem("TW_action", "go_charge");
        window.location.href = "/";
      }
      return true;
    }

    if (itemName === "TeraaMart") {
      setActive("TeraaMart");

      if (isOnPulse) {
        // Already on homepage → trigger mart jump
        window.dispatchEvent(new Event("triggerVideoJump"));
      } else {
        // Coming from other page
        localStorage.setItem("TW_action", "go_mart");
        window.location.href = "/";
      }
      return true;
    }

    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-black/90 backdrop-blur-xl  shadow-lg"
        : "py-6 bg-transparent"
        }`}
    >

      <div className="flex  lg:p-[0.2vw] items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10">

        {/* Logo and Nav Items Container */}
        <div className="flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center relative z-50"
            onClick={() => {
              sessionStorage.setItem("NAV_SOURCE", "navbar");
              setActive("Pulse");
              setIsMobileMenuOpen(false);
            }}

          >
            <Image
              src="/teraawatt.svg"
              alt="TeraaWatt Logo"
              width={125}
              height={45}
              className="object-contain"
            />
          </Link>

          {/* --- Mobile Hamburger Button (Visible on mobile only) --- */}
          <button
            className="md:hidden relative z-50 text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>

          {/* --- Desktop Nav Items (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center space-x-8 text-white font-normal relative">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-2 py-1 group"
                onClick={(e) => {
                  if (item.name === "Investors & Partners") {
                    e.preventDefault();
                    window.location.href = "/investors-and-partners";
                    return;
                  }

                  const handled = handleCustomNavigation(item.name);
                  if (handled) {
                    e.preventDefault();
                  } else {
                    setActive(item.name);
                  }
                }}
              >
                <span
                  className={`relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name
                    ? "text-white"
                    : "text-neutral-400 group-hover:text-white"
                    }`}
                  onClick={(e) => {
                    const handled = handleCustomNavigation(item.name);
                    if (handled) {
                      e.preventDefault();
                    } else {
                      setActive(item.name);
                    }
                  }}
                >
                  {item.image ? (
  <Image
    src={item.image}
    alt={item.name}
    width={item.width}
    height={item.height}
    className={`transition-all duration-300 ${
      active === item.name
        ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        : "opacity-70 group-hover:opacity-100"
    }`}
  />
) : !item.isButton ? (
  item.name
) : (
  <Image
    src="/Contact_page/connect1.svg"
    alt="Connect"
    width={70}
    height={48}
    className={`transition duration-300 ${
      active === "Connect"
        ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
        : "opacity-80 hover:opacity-100"
    }`}
  />
)}

                </span>

                {/* Desktop Indicator */}
                {!item.isButton && active === item.name && (
                  // <motion.div
                  //   layoutId="navbar-indicator"
                  //   className="absolute inset-0 z-10 rounded-full"
                  //   style={{
                  //     background:
                  //       "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  //     boxShadow:
                  //       "0 5px 20px -8px rgba(34, 211, 238, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  //   }}
                  //   transition={{
                  //     type: "spring",
                  //     bounce: 0.2,
                  //     stiffness: 100,
                  //     damping: 10,
                  //   }}
                  // />
                  <motion.div
    layoutId="navbar-indicator"
    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 30,
    }}
  />
                )}
                {/* Desktop Hover Glow */}
                {/* {!item.isButton && (
                  <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/5" />
                )} */}
              </Link>
            ))}
          </div>
        </div>
      </div>

    
      {/* --- Mobile Menu Overlay --- */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center pt-8 h-screen"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="w-full px-6 space-y-3"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative block"
            onClick={(e) => {
              if (item.name === "Investors & Partners") {
                e.preventDefault();
                window.location.href = "/investors-and-partners";
                setIsMobileMenuOpen(false);
                return;
              }

              const handled = handleCustomNavigation(item.name);
              if (handled) {
                e.preventDefault();
              } else {
                setActive(item.name);
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div
              className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                active === item.name
                  ? "bg-white/5"
                  : "bg-white/0 hover:bg-white/5"
              }`}
            >
              <span
                className={`text-lg font-medium tracking-wide ${
                  active === item.name ? "text-white" : "text-neutral-400"
                }`}
              >
                {!item.isButton ? item.name : "Connect"}
              </span>

              {/* Active red underline */}
              {!item.isButton && active === item.name && (
                <motion.div
                  layoutId="mobile-indicator"
                  className="absolute left-5 right-5 bottom-2 h-[2px] bg-red-500 rounded-full"
                />
              )}
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}




















// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage

// const SECTION_MAP = [
//   { id: "pulse", tab: "Pulse" },
//   { id: "teraacharge", tab: "TeraaCharge" },
//   { id: "teraamart", tab: "TeraaMart" },
// ];


// export default function Navbar() {
//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Mobile
//   const pathname = usePathname();

//   // --- NEW: Prevent Body Scroll when Menu is Open ---
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => { document.body.style.overflow = "auto"; };
//   }, [isMobileMenuOpen]);

//   // --- Scroll Detection ---
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // --- State Initialization & URL Sync ---
//   useEffect(() => {
//     const storedActive = localStorage.getItem(ACTIVE_NAV_KEY);

//     if (storedActive) {
//       setActive(storedActive);
//       localStorage.removeItem(ACTIVE_NAV_KEY);
//       return;
//     }

//     // Only set default "Pulse" on homepage if no specific tab was requested
//     if (pathname === "/") {
//       // Check if we arrived with a specific action (TeraaCharge or TeraaMart)
//       const action = localStorage.getItem("TW_action");
//       if (action === "go_charge") {
//         setActive("TeraaCharge");
//       } else if (action === "go_mart") {
//         setActive("TeraaMart");
//       } else {
//         setActive("Pulse");
//       }
//     } else if (pathname.includes("investors")) {
//       setActive("Investors & Partners");
//     } else if (pathname.includes("insights")) {
//       setActive("Insights");
//     } else if (pathname.includes("connect")) {
//       setActive("Connect");
//     }
//   }, [pathname]);

//   // --- Scroll-based Active Tab Sync ---
//   // useEffect(() => {
//   //   if (pathname !== "/") return;

//   //   const triggers: ScrollTrigger[] = [];

//   //   SECTION_MAP.forEach(({ id, tab }) => {
//   //     const el = document.getElementById(id);
//   //     if (!el) return;

//   //     const trigger = ScrollTrigger.create({
//   //       trigger: el,
//   //       start: "top center",
//   //       end: "bottom center",
//   //       onEnter: () => setActive(tab),
//   //       onEnterBack: () => setActive(tab),
//   //     });

//   //     triggers.push(trigger);
//   //   });

//   //   return () => {
//   //     triggers.forEach(t => t.kill());
//   //   };
//   // }, [pathname]);

//   // --- Scroll-progress based active tab sync ---
//   // useEffect(() => {
//   //   let raf: number;

//   //   // 🔧 TUNE THESE VALUES
//   //   const TERAACHARGE_PROGRESS = 0.622;
//   //   const TERAAMART_PROGRESS = 0.9;

//   //   const checkProgress = () => {
//   //     const p = (window as any).__SCROLL_PROGRESS__;

//   //     if (typeof p === "number") {
//   //       if (p >= TERAAMART_PROGRESS) {
//   //         setActive("TeraaMart");
//   //       } else if (p >= TERAACHARGE_PROGRESS) {
//   //         setActive("TeraaCharge");
//   //       } else {
//   //         setActive("Pulse");
//   //       }
//   //     }

//   //     raf = requestAnimationFrame(checkProgress);
//   //   };

//   //   raf = requestAnimationFrame(checkProgress);

//   //   return () => cancelAnimationFrame(raf);
//   // }, []);



//   const navItems = [
//     { name: "Pulse", href: "/" },

//     {
//       name: "TeraaCharge",
//       href: "/",
//       image: "/teraacharge.png",
//       width: 80,
//       height: 28,
//     },

//     {
//       name: "TeraaMart",
//       href: "/",
//       image: "/teraamartlogo.png",
//       width: 70,
//       height: 26,
//     },

//     { name: "Investors & Partners", href: "/investors-and-partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Connect", href: "/connect", isButton: true },
//   ];


//   // Function to handle custom routing and setting state
//   const handleCustomNavigation = (itemName: string) => {
//     sessionStorage.removeItem("PAGE_WAS_RELOADED");


//     const isOnPulse = window.location.pathname === "/";








//     // Close mobile menu immediately if open
//     setIsMobileMenuOpen(false);

//     if (itemName === "TeraaCharge") {
//       setActive("TeraaCharge");

//       if (isOnPulse) {
//         // Already on homepage → immediately jump to TeraaCharge frame
//         window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       } else {
//         // Coming from any other page (Investors, Insights, Connect, etc.)
//         // Set flag and redirect to homepage
//         localStorage.setItem("TW_action", "go_charge");
//         window.location.href = "/";
//       }
//       return true;
//     }

//     if (itemName === "TeraaMart") {
//       setActive("TeraaMart");

//       if (isOnPulse) {
//         // Already on homepage → trigger mart jump
//         window.dispatchEvent(new Event("triggerVideoJump"));
//       } else {
//         // Coming from other page
//         localStorage.setItem("TW_action", "go_mart");
//         window.location.href = "/";
//       }
//       return true;
//     }

//     return false;
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
//         ? "bg-black/90  backdrop-blur-xl  shadow-lg"
//         : "py-6 bg-transparent"
//         }`}
//     >

//       <div className="flex  py-[0.5vw] items-center w-full px-6 justify-between md:w-fit md:mx-auto md:justify-center md:px-10">

//         {/* Logo and Nav Items Container */}
//         <div className="flex items-center w-full md:w-auto md:space-x-10 justify-between md:justify-start">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex   items-center relative z-50"
//             onClick={() => {
//               sessionStorage.setItem("NAV_SOURCE", "navbar");
//               setActive("Pulse");
//               setIsMobileMenuOpen(false);
//             }}

//           >
//             <Image
//               src="/teraawatt.svg"
//               alt="TeraaWatt Logo"
//               width={125}
//               height={45}
//               className="object-contain"
//             />
//           </Link>

//           {/* --- Mobile Hamburger Button (Visible on mobile only) --- */}
//           <button
//             className="md:hidden relative z-50 text-white p-2 focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//               <span
//                 className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
//                   }`}
//               />
//               <span
//                 className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
//                   }`}
//               />
//               <span
//                 className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                   }`}
//               />
//             </div>
//           </button>

//           {/* --- Desktop Nav Items (Hidden on Mobile) --- */}
//           <div className="hidden md:flex items-center space-x-8 text-white font-normal relative">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="relative   lg:h-auto group"
//                 onClick={(e) => {
//                   if (item.name === "Investors & Partners") {
//                     e.preventDefault();
//                     window.location.href = "/investors-and-partners";
//                     return;
//                   }

//                   const handled = handleCustomNavigation(item.name);
//                   if (handled) {
//                     e.preventDefault();
//                   } else {
//                     setActive(item.name);
//                   }
//                 }}
//               >
//                 <span
//                   className={`relative z-20 transition-colors duration-300 text-sm font-medium tracking-wide ${active === item.name
//                     ? "text-white"
//                     : "text-neutral-400 group-hover:text-white"
//                     }`}
//                   onClick={(e) => {
//                     const handled = handleCustomNavigation(item.name);
//                     if (handled) {
//                       e.preventDefault();
//                     } else {
//                       setActive(item.name);
//                     }
//                   }}
//                 >
//                   {item.image ? (
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={item.width}
//                       height={item.height}
//                       className={`transition-all duration-300 ${active === item.name
//                           ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
//                           : "opacity-70 group-hover:opacity-100"
//                         }`}
//                     />
//                   ) : !item.isButton ? (
//                     item.name
//                   ) : (
//                     <Image
//                       src="/Contact_page/connect1.svg"
//                       alt="Connect"
//                       width={70}
//                       height={48}
//                       className={`transition  duration-300 ${active === "Connect"
//                           ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
//                           : "opacity-80 hover:opacity-100"
//                         }`}
//                     />
//                   )}

//                 </span>

//                 {/* Desktop Indicator */}
//                 {!item.isButton && active === item.name && (
//   <motion.div
//     layoutId="navbar-indicator"
//     className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
//     transition={{
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//     }}
//   />
// )}

//                 {/* Desktop Hover Glow */}
                
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- Mobile Menu Overlay --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center pt-10 h-screen"
//           >
//             <div className="flex flex-col space-y-6 text-center">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="relative px-4 py-2"
//                   onClick={(e) => {
//                     if (item.name === "Investors & Partners") {
//                       e.preventDefault();
//                       window.location.href = "/investors-and-partners";
//                       setIsMobileMenuOpen(false);
//                       return;
//                     }

//                     const handled = handleCustomNavigation(item.name);
//                     if (handled) {
//                       e.preventDefault();
//                     } else {
//                       setActive(item.name);
//                       setIsMobileMenuOpen(false);
//                     }
//                   }}
//                 >
//                   <span
//                     className={`text-xl font-medium tracking-wide ${active === item.name
//                       ? "text-white"
//                       : "text-neutral-400"
//                       }`}
//                   >
//                     {!item.isButton ? (
//                       item.name
//                     ) : (
//                       // Simplified Connect button for Mobile
//                       <span className={`${active === "Connect" ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]" : ""}`}>
//                         Connect
//                       </span>
//                     )}
//                   </span>

//                   {/* Mobile Active Indicator (Simple Underline) */}
//                   {!item.isButton && active === item.name && (
//                     <motion.div
//                       layoutId="mobile-indicator"
//                       className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
//                     />
//                   )}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



















