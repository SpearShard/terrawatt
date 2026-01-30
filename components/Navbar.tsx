// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";

// const navItems = [
//   { name: "Pulse", href: "/" },
//   { name: "TeraaCharge", href: "/", image: "/teraacharge.png", width: 90, height: 28 },
//   { name: "TeraaMart", href: "/", image: "/teraamartlogo.png", width: 80, height: 26 },
//   { name: "Investors & Partners", href: "/investors-and-partners" },
//   { name: "Insights", href: "/insights" },
//   { name: "Connect", href: "/connect", isButton: true },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Scroll + body lock
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileMenuOpen]);

//   // Path sync
//   useEffect(() => {
//     const stored = localStorage.getItem(ACTIVE_NAV_KEY);
//     const action = localStorage.getItem("TW_action");

//     if (stored) {
//       setActive(stored);
//       localStorage.removeItem(ACTIVE_NAV_KEY);
//       return;
//     }

//     if (pathname === "/") {
//       if (action === "go_charge") setActive("TeraaCharge");
//       else if (action === "go_mart") setActive("TeraaMart");
//       else setActive("Pulse");
//     } else if (pathname.includes("investors")) setActive("Investors & Partners");
//     else if (pathname.includes("insights")) setActive("Insights");
//     else if (pathname.includes("connect")) setActive("Connect");
//   }, [pathname]);

//   // Sync from homepage scroll
//   useEffect(() => {
//     if (pathname !== "/") return;
//     const sync = () => {
//       const v = localStorage.getItem(ACTIVE_NAV_KEY);
//       if (v) setActive(v);
//     };
//     window.addEventListener("storage", sync);
//     return () => window.removeEventListener("storage", sync);
//   }, [pathname]);

//   const handleNav = (name: string) => {
//     sessionStorage.removeItem("PAGE_WAS_RELOADED");
//     setIsMobileMenuOpen(false);

//     const isHome = window.location.pathname === "/";

//     if (name === "TeraaCharge") {
//       setActive(name);
//       if (isHome) window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       else {
//         localStorage.setItem("TW_action", "go_charge");
//         window.location.href = "/";
//       }
//       return true;
//     }

//     if (name === "TeraaMart") {
//       setActive(name);
//       if (isHome) window.dispatchEvent(new Event("triggerVideoJump"));
//       else {
//         localStorage.setItem("TW_action", "go_mart");
//         window.location.href = "/";
//       }
//       return true;
//     }

//     setActive(name);
//     return false;
//   };

//   const renderLabel = (item: any) => {
//     if (item.image)
//       return (
//         <Image
//           src={item.image}
//           alt={item.name}
//           width={item.width}
//           height={item.height}
//           className={`transition-all ${
//             active === item.name
//               ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
//               : "opacity-70 group-hover:opacity-100"
//           }`}
//         />
//       );

//     if (item.isButton)
//       return (
//         <Image
//           src="/Contact_page/connect1.svg"
//           alt="Connect"
//           width={70}
//           height={48}
//           className={`transition ${
//             active === "Connect"
//               ? "opacity-100 drop-shadow-[0_0_8px_rgba(5,223,114,0.5)]"
//               : "opacity-80 hover:opacity-100"
//           }`}
//         />
//       );

//     return item.name;
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all ${
//         isScrolled || isMobileMenuOpen
//           ? "bg-black/90 backdrop-blur-xl shadow-lg"
//           : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="flex px-6 items-center justify-between md:justify-center">
//         <Link
//           href="/"
//           onClick={() => {
//             setActive("Pulse");
//             setIsMobileMenuOpen(false);
//           }}
//         >
//           <Image src="/teraawatt.svg" alt="logo" width={125} height={45} />
//         </Link>

//         {/* Hamburger */}
//         <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(v => !v)}>
//           <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//             <span className={`h-0.5 bg-white ${isMobileMenuOpen && "rotate-45 translate-y-2"}`} />
//             <span className={`h-0.5 bg-white ${isMobileMenuOpen && "opacity-0"}`} />
//             <span className={`h-0.5 bg-white ${isMobileMenuOpen && "-rotate-45 -translate-y-2"}`} />
//           </div>
//         </button>

//         {/* Desktop */}
//         <div className="hidden md:flex space-x-8 text-white">
//           {navItems.map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="relative group"
//               onClick={e => handleNav(item.name) && e.preventDefault()}
//             >
//               <span className={`${active === item.name ? "text-white" : "text-neutral-400 group-hover:text-white"}`}>
//                 {renderLabel(item)}
//               </span>

//               {!item.isButton && active === item.name && (
//                 <motion.div
//                   layoutId="navbar-indicator"
//                   className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Mobile */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div className="fixed inset-0 top-[70px] bg-black/95 md:hidden">
//             <div className="px-6 pt-8 space-y-3">
//               {navItems.map(item => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={e => handleNav(item.name) && e.preventDefault()}
//                 >
//                   <div className={`px-5 py-4 rounded-2xl ${active === item.name && "bg-white/5"}`}>
//                     {item.isButton ? "Connect" : item.name}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }






















"use client";
import Image from "next/image";
import Link from "next/link";
import { useState,useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV"; // Key for localStorage



export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
  if (!navRef.current) return;

  // Desktop only
  if (window.innerWidth < 768) return;

  const nav = navRef.current;

  gsap.set(nav, { y: 0 });

  let lastScroll = window.scrollY;

  const onScroll = () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 80) {
      // scrolling down → hide
      gsap.to(nav, { y: -120, duration: 0.4, ease: "power2.out" });
     } // else {
      // scrolling up → show
    //   gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
    // }

    lastScroll = current;
  };

  window.addEventListener("scroll", onScroll);

  // Reveal on hover
  const show = () =>
    gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });

  nav.addEventListener("mouseenter", show);

  // Invisible top trigger zone
  const topZone = document.createElement("div");
  topZone.style.position = "fixed";
  topZone.style.top = "0";
  topZone.style.left = "0";
  topZone.style.width = "100%";
  topZone.style.height = "20px";
  topZone.style.zIndex = "40";
  document.body.appendChild(topZone);

  topZone.addEventListener("mouseenter", show);

  return () => {
    window.removeEventListener("scroll", onScroll);
    nav.removeEventListener("mouseenter", show);
    topZone.remove();
  };
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
    if (pathname === "/" && !localStorage.getItem("TW_action")) {
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
  if (pathname !== "/") return;

  const syncFromScroll = () => {
    const v = localStorage.getItem("TW_ACTIVE_NAV");
    if (v) setActive(v);
  };

  window.addEventListener("storage", syncFromScroll);
  return () => window.removeEventListener("storage", syncFromScroll);
}, [pathname]);



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
      ref={navRef}
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
                    // e.preventDefault();
                    setActive("Investors & Partners");
                    // window.location.href = "/investors-and-partners";
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
                // e.preventDefault();
                setActive("Investors & Partners");
                // window.location.href = "/investors-and-partners";
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



















