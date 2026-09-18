"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      // Lerp produces true weighted inertia (0.05 - 0.07 is the luxury sweet spot)
      lerp: 0.06,
      // Slow down wheel step distance to prevent aggressive jumping
      wheelMultiplier: 0.72,
      touchMultiplier: 1.2,
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Attach to window so modals/drawers can pause it if needed
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}