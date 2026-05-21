"use client";

import { useEffect, useRef } from "react";

/**
 * Spotlight gradient follow cursor — premium effect (Linear/Vercel style).
 * Renderuje warstwę z radial-gradientem podążającym za kursorem.
 * Disable on touch + reduce-motion automatically.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on touch devices + reduce-motion
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = el.parentElement;
    if (!section) return;

    function handleMove(e: MouseEvent) {
      if (!el || !section) return;
      const r = section.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      el.style.opacity = "1";
    }

    function handleLeave() {
      if (!el) return;
      el.style.opacity = "0";
    }

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[5] opacity-0 transition-opacity duration-500 mix-blend-soft-light dark:mix-blend-screen"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,107,157,0.25), rgba(255,176,136,0.08) 35%, transparent 60%)",
      }}
    />
  );
}
