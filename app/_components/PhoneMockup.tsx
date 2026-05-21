"use client";

import { motion } from "motion/react";

function CameraGlyph({ className }: { className?: string }) {
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

type Bubble = {
  from: "client" | "ai";
  text: string;
  delay: number;
};

const conversation: Bubble[] = [
  { from: "client", text: "Cześć, czy macie wolne jutro na powiększanie ust?", delay: 0.2 },
  { from: "ai", text: "Witaj 💋 Jutro mamy wolne 14:30 lub 17:00. Która godzina pasuje?", delay: 1.4 },
  { from: "client", text: "17:00 super, ile to kosztuje?", delay: 2.6 },
  { from: "ai", text: "Powiększanie ust kwasem hialuronowym 0,5 ml — 750 zł. Zarezerwowałam Ci 17:00 ✨", delay: 3.8 },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
      {/* Soft glow behind phone */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.35) 0%, rgba(255,176,136,0.2) 50%, transparent 70%)",
        }}
      />

      {/* Phone frame */}
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.4rem] border-[12px] border-[#1a0f0f] bg-white shadow-[0_24px_80px_-20px_rgba(26,15,15,0.35)] dark:border-[#2a1f1f]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1a0f0f] dark:bg-[#2a1f1f]" />

        {/* Chat header */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-white px-3 pb-2 pt-7 dark:bg-zinc-50">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff6b9d] via-[#ff8b78] to-[#ffb088]">
            <CameraGlyph className="h-3.5 w-3.5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold text-zinc-900">salon_aura_szczecin</div>
            <div className="text-[9px] text-emerald-600">● aktywne teraz</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex h-full flex-col gap-2 bg-gradient-to-b from-white to-[#fff8f3] px-3 py-3">
          {conversation.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: b.delay,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                b.from === "client"
                  ? "max-w-[80%] self-start rounded-2xl rounded-tl-md bg-zinc-100 px-3 py-1.5 text-[11px] leading-snug text-zinc-900"
                  : "max-w-[80%] self-end rounded-2xl rounded-tr-md bg-gradient-to-br from-[#ff6b9d] to-[#ff8b78] px-3 py-1.5 text-[11px] leading-snug text-white shadow-sm"
              }
            >
              {b.text}
            </motion.div>
          ))}

          {/* AI typing indicator (loops) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              delay: 5,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className="flex max-w-[80%] items-center gap-1 self-end rounded-2xl bg-gradient-to-br from-[#ff6b9d]/70 to-[#ff8b78]/70 px-3 py-2"
          >
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          </motion.div>
        </div>
      </div>

      {/* Floating badge: "AI odpowiedziała w 3 sek" */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 4.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-4 bottom-12 hidden rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-900 shadow-lg shadow-rose-200/40 ring-1 ring-black/5 md:block"
      >
        Odpowiedź w <span className="text-[#ff6b9d]">3 sek</span> ✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 4.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-6 top-24 hidden rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-900 shadow-lg shadow-peach-200/40 ring-1 ring-black/5 md:block"
      >
        Wizyta zarezerwowana 📅
      </motion.div>
    </div>
  );
}
