// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect, useCallback } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";

// const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";

// export default function Navbar() {
//   const navRef = useRef<HTMLDivElement>(null);

//   const pathname = usePathname();

//   const [active, setActive] = useState("Pulse");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileMenuOpen]);


//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);


//   useEffect(() => {
//     if (!navRef.current || window.innerWidth < 768) return;

//     const nav = navRef.current;
//     let lastScroll = window.scrollY;

//     const onScroll = () => {
//   const current = window.scrollY;

//   // scrolling down → hide
//   if (current > lastScroll && current > 80) {
//     gsap.to(nav, { y: -120, duration: 0.35, ease: "power2.out" });
//   }

//   // scrolling up → show
//   else if (current < lastScroll) {
//     gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });
//   }

//   lastScroll = current;
// };

//     const show = () =>
//       gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });

//     const topZone = document.createElement("div");
//     Object.assign(topZone.style, {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "20px",
//       zIndex: "40",
//     });

//     document.body.appendChild(topZone);

//     window.addEventListener("scroll", onScroll);
//     nav.addEventListener("mouseenter", show);
//     topZone.addEventListener("mouseenter", show);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       nav.removeEventListener("mouseenter", show);
//       topZone.remove();
//     };
//   }, []);



//   useEffect(() => {
//     if (pathname === "/") {
//       const stored = localStorage.getItem(ACTIVE_NAV_KEY);
//       if (stored) {
//         setActive(stored);
//         localStorage.removeItem(ACTIVE_NAV_KEY);
//         return;
//       }

//       const action = localStorage.getItem("TW_action");

//       if (action === "go_charge") setActive("TeraaCharge");
//       else if (action === "go_mart") setActive("TeraaMart");
//       else setActive("Pulse");

//       return;
//     }

//     if (pathname.includes("investors")) setActive("Investors & Partners");
//     else if (pathname.includes("insights")) setActive("Insights");
//     else if (pathname.includes("connect")) setActive("Connect");

//   }, [pathname]);



//   useEffect(() => {
//     if (pathname !== "/") return;

//     const sync = () => {
//       const v = localStorage.getItem(ACTIVE_NAV_KEY);
//       if (v) setActive(v);
//     };

//     window.addEventListener("storage", sync);
//     return () => window.removeEventListener("storage", sync);
//   }, [pathname]);


//   const handleNavigation = useCallback((name: string) => {
//     setIsMobileMenuOpen(false);

//     const onHome = window.location.pathname === "/";

//     if (name === "Pulse") {
//       setActive("Pulse");
//       localStorage.setItem(ACTIVE_NAV_KEY, "Pulse");
//       localStorage.removeItem("TW_action");
//       return false;
//     }

//     if (name === "TeraaCharge") {
//       setActive(name);

//       if (onHome) window.dispatchEvent(new CustomEvent("scrollToFrame804"));
//       else {
//         localStorage.setItem("TW_action", "go_charge");
//         window.location.href = "/";
//       }

//       return true;
//     }

//     if (name === "TeraaMart") {
//       setActive(name);

//       if (onHome) {
//         const globalWindow = window as Window & { __MART_LOCK__?: boolean };
//         globalWindow.__MART_LOCK__ = true;

//         const videoSection = document.getElementById("video-section");

// if (videoSection) {
//   const currentScroll = window.scrollY;
//   const sectionTop = videoSection.offsetTop;
//   const sectionBottom = sectionTop + videoSection.offsetHeight;

//   // only jump to section if we are OUTSIDE it
//   if (currentScroll < sectionTop || currentScroll > sectionBottom) {
//     window.scrollTo({
//       top: sectionTop,
//       behavior: "auto",
//     });
//   }
// }

//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             window.dispatchEvent(new Event("triggerVideoJump"));
//             setTimeout(() => {
//               globalWindow.__MART_LOCK__ = false;
//             }, 1200);
//           });
//         });
//       } else {
//         localStorage.setItem("TW_action", "go_mart");
//         window.location.href = "/";
//       }

//       return true;
//     }



//     setActive(name);
//     return false;
//   }, []);

//   const navItems = [
//     { name: "Pulse", href: "/" },
//     { name: "TeraaCharge", href: "/", image: "/teraacharge.png", w: 90, h: 28 },
//     { name: "TeraaMart", href: "/", image: "/teraamartlogo.png", w: 80, h: 26 },
//     { name: "Investors & Partners", href: "/investors-and-partners" },
//     { name: "Insights", href: "/insights" },
//     { name: "Connect", href: "/connect", isButton: true },
//   ];

//   return (
//     <nav
//       ref={navRef}
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled || isMobileMenuOpen
//         ? "bg-black/90 backdrop-blur-xl shadow-lg"
//         : "py-6 bg-transparent"
//         }`}
//     >
//       <div className="flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10">

//         <Link href="/" onClick={() => handleNavigation("Pulse")}>
//           <Image
//             src="/teraawatt-white.svg"
//             alt="logo"
//             width={125}
//             height={45}
//             className="p-[1vw] mr-[1vw]"
//           />
//         </Link>

//         <button
//           className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
//           onClick={() => setIsMobileMenuOpen((v) => !v)}
//         >
//           <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
//                 }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
//                 }`}
//             />
//             <span
//               className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
//                 }`}
//             />
//           </div>
//         </button>

//         <div className="hidden md:flex space-x-8 text-white">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={(e) => {
//                 if (handleNavigation(item.name)) e.preventDefault();
//               }}
//               className={`relative ${active === item.name ? "opacity-100" : "opacity-60"}`}
//             >
//               {item.image ? (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={item.w}
//                   height={item.h}
//                   className={`relative top-[6%] ${active === item.name ? "opacity-100" : "opacity-90"
//                     }`}
//                 />
//               ) : item.isButton ? (
//                 <Image src="/Contact_page/connect1.svg" alt="connect" width={70} height={48} />
//               ) : (
//                 item.name
//               )}

//               {!item.isButton && active === item.name && (
//                 <motion.div
//                   layoutId="navbar-indicator"
//                   transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
//                   className="absolute left-0 right-0 h-[2px] bg-red-500"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center pt-8 h-screen"
//           >
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 120, damping: 18 }}
//               className="w-full px-6 space-y-3"
//             >
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => {
//                     if (handleNavigation(item.name)) e.preventDefault();
//                   }}
//                 >
//                   <div
//                     className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "hover:bg-white/5"
//                       }`}
//                   >
//                     <span
//                       className={`relative inline-block text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"
//                         }`}
//                     >
//                       {!item.isButton ? item.name : "Connect"}

//                       {!item.isButton && active === item.name && (
//                         <motion.div
//                           layoutId="mobile-indicator"
//                           className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
//                         />
//                       )}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }






















"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const ACTIVE_NAV_KEY = "TW_ACTIVE_NAV";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const [active, setActive] = useState("Pulse");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    if (!navRef.current || window.innerWidth < 768) return;

    const nav = navRef.current;
    let lastScroll = window.scrollY;

    const onScroll = () => {
  const current = window.scrollY;

  // scrolling down → hide
  if (current > lastScroll && current > 80) {
    gsap.to(nav, { y: -120, duration: 0.35, ease: "power2.out" });
  }

  // scrolling up → show
  else if (current < lastScroll) {
    gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });
  }

  lastScroll = current;
};

    const show = () =>
      gsap.to(nav, { y: 0, duration: 0.25, ease: "power2.out" });

    const topZone = document.createElement("div");
    Object.assign(topZone.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "20px",
      zIndex: "40",
    });

    document.body.appendChild(topZone);

    window.addEventListener("scroll", onScroll);
    nav.addEventListener("mouseenter", show);
    topZone.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("scroll", onScroll);
      nav.removeEventListener("mouseenter", show);
      topZone.remove();
    };
  }, []);



  useEffect(() => {
    if (pathname === "/") {
      const stored = localStorage.getItem(ACTIVE_NAV_KEY);
      if (stored) {
        setActive(stored);
        localStorage.removeItem(ACTIVE_NAV_KEY);
        return;
      }

      const action = localStorage.getItem("TW_action");

      if (action === "go_charge") setActive("TeraaCharge");
      else if (action === "go_mart") setActive("TeraaMart");
      else setActive("Pulse");

      return;
    }

    if (pathname.includes("investors")) setActive("Investors & Partners");
    else if (pathname.includes("insights")) setActive("Insights");
    else if (pathname.includes("connect")) setActive("Connect");

  }, [pathname]);



  useEffect(() => {
    if (pathname !== "/") return;

    const sync = () => {
      const v = localStorage.getItem(ACTIVE_NAV_KEY);
      if (v) setActive(v);
    };

    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [pathname]);


  const handleNavigation = useCallback((name: string) => {
    setIsMobileMenuOpen(false);

    const onHome = window.location.pathname === "/";

    if (name === "Pulse") {
      setActive("Pulse");
      localStorage.setItem(ACTIVE_NAV_KEY, "Pulse");
      localStorage.removeItem("TW_action");
      return false;
    }

    if (name === "TeraaCharge") {
      setActive(name);

      if (onHome) window.dispatchEvent(new CustomEvent("scrollToFrame804"));
      else {
        localStorage.setItem("TW_action", "go_charge");
        window.location.href = "/";
      }

      return true;
    }

    if (name === "TeraaMart") {
      setActive(name);

      if (onHome) {
        const globalWindow = window as Window & {
          __MART_LOCK__?: boolean;
          __SCROLL_PROGRESS__?: number;
          __COIN_LOCK__?: boolean;
        };
        globalWindow.__MART_LOCK__ = true;
        globalWindow.__SCROLL_PROGRESS__ = 1;
        globalWindow.__COIN_LOCK__ = false;

        const videoSection = document.getElementById("video-section");

if (videoSection) {
  const currentScroll = window.scrollY;
  const sectionTop = videoSection.offsetTop;
  const sectionBottom = sectionTop + videoSection.offsetHeight;

  // only jump to section if we are OUTSIDE it
  if (currentScroll < sectionTop || currentScroll > sectionBottom) {
    window.scrollTo({
      top: sectionTop,
      behavior: "auto",
    });
  }
}

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.dispatchEvent(new Event("triggerVideoJump"));
            setTimeout(() => {
              globalWindow.__MART_LOCK__ = false;
            }, 1200);
          });
        });
      } else {
        localStorage.setItem("TW_action", "go_mart");
        window.location.href = "/";
      }

      return true;
    }



    setActive(name);
    return false;
  }, []);

  const navItems = [
    { name: "Pulse", href: "/" },
    { name: "TeraaCharge", href: "/", image: "/teraacharge.png", w: 90, h: 28 },
    { name: "TeraaMart", href: "/", image: "/teraamartlogo.png", w: 80, h: 26 },
    { name: "Investors & Partners", href: "/investors-and-partners" },
    { name: "Insights", href: "/insights" },
    { name: "Connect", href: "/connect", isButton: true },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled || isMobileMenuOpen
        ? "bg-black/90 backdrop-blur-xl shadow-lg"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="flex items-center w-full px-6 justify-between md:w-fit md:mx-auto md:px-10">

        <Link href="/" onClick={() => handleNavigation("Pulse")}>
          <Image
            src="/teraawatt-white.svg"
            alt="logo"
            width={125}
            height={45}
            className="p-[1vw] mr-[1vw]"
          />
        </Link>

        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            />
          </div>
        </button>

        <div className="hidden md:flex space-x-8 text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (handleNavigation(item.name)) e.preventDefault();
              }}
              className={`relative ${active === item.name ? "opacity-100" : "opacity-60"}`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.w}
                  height={item.h}
                  className={`relative top-[6%] ${active === item.name ? "opacity-100" : "opacity-90"
                    }`}
                />
              ) : item.isButton ? (
                <Image src="/Contact_page/connect1.svg" alt="connect" width={70} height={48} />
              ) : (
                item.name
              )}

              {!item.isButton && active === item.name && (
                <motion.div
                  layoutId="navbar-indicator"
                  transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 right-0 h-[2px] bg-red-500"
                />
              )}
            </Link>
          ))}
        </div>
      </div>

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
                  onClick={(e) => {
                    if (handleNavigation(item.name)) e.preventDefault();
                  }}
                >
                  <div
                    className={`relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${active === item.name ? "bg-white/5" : "hover:bg-white/5"
                      }`}
                  >
                    <span
                      className={`relative inline-block text-lg font-medium tracking-wide ${active === item.name ? "text-white" : "text-neutral-400"
                        }`}
                    >
                      {!item.isButton ? item.name : "Connect"}

                      {!item.isButton && active === item.name && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full"
                        />
                      )}
                    </span>
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