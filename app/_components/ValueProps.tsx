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
    highlight: "Natychmiast",
    rest: "odpowiada",
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

function Chip({
  prop,
  index,
  compact = false,
}: {
  prop: ValueProp;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 1.2 + index * 0.15,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={
        compact
          ? "pointer-events-auto flex items-center gap-2 rounded-2xl bg-white px-2.5 py-2 text-[11px] font-medium text-zinc-900 shadow-[0_4px_18px_-8px_rgba(15,10,10,0.18)] ring-1 ring-black/5 dark:bg-zinc-50"
          : "pointer-events-auto flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[12.5px] font-medium text-zinc-900 shadow-[0_8px_28px_-10px_rgba(15,10,10,0.18)] ring-1 ring-black/5 backdrop-blur-sm dark:bg-zinc-50"
      }
      style={{
        boxShadow: `0 ${compact ? 6 : 10}px ${compact ? 18 : 32}px -${compact ? 8 : 12}px ${prop.glow}, 0 0 0 1px rgba(0,0,0,0.04)`,
      }}
    >
      <span
        className={`flex ${compact ? "h-5 w-5" : "h-7 w-7"} shrink-0 items-center justify-center rounded-full bg-zinc-50 ${prop.iconClass}`}
      >
        <prop.Icon
          className={compact ? "h-3 w-3" : "h-3.5 w-3.5"}
          strokeWidth={2.4}
        />
      </span>
      <span
        className={
          compact
            ? "min-w-0 flex-1 leading-tight"
            : "whitespace-nowrap pr-1"
        }
      >
        <span className="font-semibold">{prop.highlight}</span>{" "}
        <span className="text-zinc-500">{prop.rest}</span>
      </span>
    </motion.div>
  );
}

/**
 * Desktop variant — pionowy stos chipów ABSOLUTE pozycjonowany po prawej
 * obok telefonu. Overlap z phone right edge (translate-x), bez clip'owania
 * przez overflow-hidden hero.
 *
 * Mobile/tablet variant — chipy w 2x2 grid POD telefonem, inline-flex.
 */
export function ValueProps() {
  return (
    <>
      {/* DESKTOP — vertical stack, absolute right of phone */}
      <div
        aria-label="Co daje Replyo"
        className="pointer-events-none absolute right-0 top-1/2 z-10 hidden w-[210px] -translate-y-1/2 translate-x-[55%] flex-col gap-2.5 md:flex lg:translate-x-[62%] xl:translate-x-[72%]"
      >
        {props.map((p, i) => (
          <Chip key={i} prop={p} index={i} />
        ))}
      </div>

      {/* MOBILE — 2x2 grid below phone */}
      <div className="mt-6 grid grid-cols-2 gap-2 md:hidden">
        {props.map((p, i) => (
          <Chip key={i} prop={p} index={i} compact />
        ))}
      </div>
    </>
  );
}
