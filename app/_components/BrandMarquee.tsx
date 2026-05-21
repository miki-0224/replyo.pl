const items = [
  "Beauty",
  "AI 24/7",
  "Messenger",
  "Instagram",
  "WhatsApp",
  "Email",
  "SMS",
  "Auto-rezerwacje",
];

export function BrandMarquee() {
  const row = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--muted)]/40 py-4">
      <div className="flex w-max gap-12 [animation:marquee_38s_linear_infinite] motion-reduce:animate-none">
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-12 font-serif text-2xl italic text-[var(--muted-foreground)] sm:text-3xl"
          >
            {label}
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-rose)]"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
