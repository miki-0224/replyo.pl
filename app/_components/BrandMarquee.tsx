import { BrandIcon, brandList } from "./BrandIcons";

export function BrandMarquee() {
  // 3x repeat dla nieskończonego loopu (marquee 50% translate-x = -50%)
  const row = [...brandList, ...brandList, ...brandList];

  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--muted)]/40 py-6">
      {/* Soft side fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent"
      />

      {/* Tiny eyebrow above */}
      <div className="mb-4 flex justify-center text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
        Działa na każdym kanale
      </div>

      <div className="flex w-max gap-10 [animation:marquee_42s_linear_infinite] motion-reduce:animate-none">
        {row.map((b, i) => (
          <div
            key={`${b.key}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 backdrop-blur-md"
          >
            <BrandIcon kind={b.key} className="h-6 w-6 shrink-0" />
            <span className="text-sm font-medium tracking-tight text-foreground">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
