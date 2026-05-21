"use client";

import { motion } from "motion/react";
import {
  Zap,
  CalendarCheck2,
  Moon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ValueProp = {
  Icon: LucideIcon;
  iconClass: string;
  glow: string;
  highlight: string;
  rest: string;
};

const props: ValueProp[] = [
  {
    Icon: Zap,
    iconClass: "text-[#ff6b9d]",
    glow: "rgba(255,107,157,0.45)",
    highlight: "3 sek",
    rest: "odpowiedzi",
  },
  {
    Icon: CalendarCheck2,
    iconClass: "text-emerald-500",
    glow: "rgba(16,185,129,0.4)",
    highlight: "Sama",
    rest: "umawia wizyty",
  },
  {
    Icon: Moon,
    iconClass: "text-indigo-500",
    glow: "rgba(99,102,241,0.4)",
    highlight: "24/7",
    rest: "też w nocy",
  },
  {
    Icon: Sparkles,
    iconClass: "text-[#ff8b78]",
    glow: "rgba(255,139,120,0.45)",
    highlight: "Mniej",
    rest: "traconych klientek",
  },
];

/**
 * Zalety produktu — pionowy stos chipów obok telefonu po prawej.
 * Animacje wpadania z prawej, staggered. Hidden na mobile (telefon wystarczy).
 */
export function ValueProps() {
  return (
    <div
      aria-label="Co daje Replyo"
      className="pointer-events-none absolute left-full top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 pl-3 md:flex lg:pl-5"
    >
      {props.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 1.4 + i * 0.18,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[12.5px] font-medium text-zinc-900 shadow-[0_8px_28px_-10px_rgba(15,10,10,0.18)] ring-1 ring-black/5 backdrop-blur-sm dark:bg-zinc-50"
          style={{
            boxShadow: `0 10px 32px -12px ${p.glow}, 0 0 0 1px rgba(0,0,0,0.04)`,
          }}
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-50 ${p.iconClass}`}
          >
            <p.Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className="whitespace-nowrap pr-1">
            <span className="font-semibold">{p.highlight}</span>{" "}
            <span className="text-zinc-500">{p.rest}</span>
          </span>
        </motion.div>
      ))}
    </div>
  );
}
