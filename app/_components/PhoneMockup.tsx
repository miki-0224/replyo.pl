"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/* ─────────── Status bar icons (iOS-ish, subtle) ─────────── */

function SignalIcon() {
  return (
    <svg viewBox="0 0 18 12" width="16" height="11" fill="currentColor" aria-hidden>
      <rect x="0" y="8" width="3" height="4" rx="0.5" />
      <rect x="5" y="6" width="3" height="6" rx="0.5" />
      <rect x="10" y="3" width="3" height="9" rx="0.5" />
      <rect x="15" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor" aria-hidden>
      <path d="M8 11.5L9.5 10A2.1 2.1 0 0 0 6.5 10L8 11.5z" />
      <path
        d="M4 7.2A6 6 0 0 1 12 7.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M1.5 4.5A9.5 9.5 0 0 1 14.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 26 12" width="22" height="10" aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="22"
        height="11"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect
        x="23.5"
        y="3.5"
        width="2"
        height="5"
        rx="1"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/* ─────────── Other small icons ─────────── */

function PaperclipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.93 8.8L9.41 17.32a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function VerifiedBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Z" fill="#0095f6" />
      <path
        d="m6.5 12.2 3.7 3.7 7.3-7.3"
        fill="none"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────── Conversation ─────────── */

type Bubble = {
  from: "client" | "ai";
  text: string;
  delay: number;
};

const conversation: Bubble[] = [
  {
    from: "client",
    text: "Cześć! Widziałam Wasze stories z laminacji brwi 😍 Macie wolne w sobotę po 16?",
    delay: 0.3,
  },
  {
    from: "ai",
    text: "Cześć! W sobotę po 16 wolne 17:00 lub 18:30. Laminacja + koloryzacja 180 zł, sama laminacja 140 zł 🤍",
    delay: 1.6,
  },
  {
    from: "client",
    text: "17:00 z koloryzacją proszę",
    delay: 3.0,
  },
  {
    from: "ai",
    text: "Świetnie! Zapisuję: sobota 17:00, laminacja + koloryzacja, 180 zł. Szczegóły poszły SMS-em 💌",
    delay: 4.0,
  },
];

/* ─────────── Main component ─────────── */

export function PhoneMockup() {
  /* 3D tilt — mouse follow with smooth spring */
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10]);
  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const sRotateX = useSpring(rotateX, springConfig);
  const sRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[300px] md:max-w-[340px] [perspective:1400px]"
    >
      {/* Soft glow behind phone */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3.5rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(255,176,136,0.22) 50%, transparent 72%)",
        }}
      />

      {/* Phone frame — iPhone 15 Pro proportions + 3D tilt */}
      <motion.div
        style={{
          rotateX: sRotateX,
          rotateY: sRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.6rem] border-[9px] border-[#0d0d0d] bg-white shadow-[0_30px_70px_-20px_rgba(15,10,10,0.55),0_0_0_1px_rgba(255,255,255,0.08)_inset] will-change-transform motion-reduce:!rotate-0">
        {/* Subtle frame shine (top) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-[#0d0d0d]" />

        {/* Status bar */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-10 items-center justify-between px-5 pt-2 text-[11px] font-semibold text-zinc-900">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* Chat area */}
        <div className="absolute inset-x-0 bottom-0 top-10 flex flex-col bg-white">
          {/* Chat header */}
          <div className="flex items-center gap-2.5 border-b border-black/5 bg-white/95 px-3 py-2.5 backdrop-blur">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff6b9d] via-[#ff8b78] to-[#ffb088]">
              <InstagramGlyph className="h-4 w-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1 text-[12px] font-semibold text-zinc-900">
                salon.beauty
                <VerifiedBadge className="h-3 w-3" />
              </div>
              <div className="text-[10px] text-emerald-600">● aktywne teraz</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-2 overflow-hidden bg-gradient-to-b from-white to-[#fff8f3] px-3 py-3">
            {conversation.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: b.delay,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  b.from === "client"
                    ? "max-w-[82%] self-start rounded-2xl rounded-tl-md bg-zinc-100 px-3 py-1.5 text-[11px] leading-snug text-zinc-900"
                    : "max-w-[82%] self-end rounded-2xl rounded-tr-md bg-gradient-to-br from-[#ff6b9d] to-[#ff8b78] px-3 py-1.5 text-[11px] leading-snug text-white shadow-[0_2px_8px_-2px_rgba(255,107,157,0.5)]"
                }
              >
                {b.text}
              </motion.div>
            ))}
          </div>

          {/* iMessage-style input bar — wypełnia pustą plamę na dole realistycznie */}
          <div className="border-t border-black/5 bg-white px-2.5 py-2.5">
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-400">
              <PaperclipIcon />
              <span className="flex-1 text-[10.5px]">Wiadomość…</span>
              <MicIcon />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge: response time — TOP-LEFT corner peek-out, NEVER over content */}
      <motion.div
        initial={{ opacity: 0, x: 12, y: -12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-3 -left-2 z-20 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-900 shadow-[0_10px_30px_-10px_rgba(255,107,157,0.55)] ring-1 ring-black/5 sm:-top-4 sm:-left-6"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        Odpowiedź w <span className="text-[#ff6b9d]">3&nbsp;sek</span>
      </motion.div>

      {/* Floating badge: visit saved — BOTTOM-RIGHT corner peek-out, NEVER over content */}
      <motion.div
        initial={{ opacity: 0, x: -12, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 4.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-3 -right-2 z-20 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-900 shadow-[0_10px_30px_-10px_rgba(255,176,136,0.55)] ring-1 ring-black/5 sm:-bottom-4 sm:-right-6"
      >
        <CalendarIcon className="h-3.5 w-3.5 text-emerald-500" />
        Wizyta <span className="text-zinc-500">zapisana</span>
      </motion.div>
    </div>
  );
}
