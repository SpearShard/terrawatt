"use client";

import { useScroll } from "framer-motion";

export default function useGlobalScroll() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}
