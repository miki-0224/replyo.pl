"use client";

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,107,157,0.18),transparent_60%)]" />

      {/* Peach blob */}
      <div
        className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,176,136,0.55) 0%, rgba(255,176,136,0) 70%)",
          animation: "mesh-shift 18s ease-in-out infinite",
        }}
      />

      {/* Rose blob */}
      <div
        className="absolute right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.5) 0%, rgba(255,107,157,0) 70%)",
          animation: "mesh-shift 22s ease-in-out infinite reverse",
        }}
      />

      {/* Beige bottom blob */}
      <div
        className="absolute bottom-[-20%] left-1/3 h-[640px] w-[640px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,213,196,0.6) 0%, rgba(232,213,196,0) 70%)",
          animation: "mesh-shift 26s ease-in-out infinite",
        }}
      />

      {/* Subtle grain for premium feel */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-multiply"
        aria-hidden
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>
    </div>
  );
}
