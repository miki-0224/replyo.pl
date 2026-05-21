export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--background)]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#ffb088] text-xs font-semibold text-white">
            R
          </span>
          <span className="font-serif text-lg italic text-foreground">replyo</span>
          <span className="text-xs text-[var(--muted-foreground)]">
            · AI dla salonów beauty
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--muted-foreground)]">
          <a
            href="mailto:hello@replyo.pl"
            className="transition hover:text-foreground"
          >
            hello@replyo.pl
          </a>
          <a href="/privacy" className="transition hover:text-foreground">
            Polityka prywatności
          </a>
          <a href="/terms" className="transition hover:text-foreground">
            Regulamin
          </a>
        </nav>

        <p className="text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Replyo
        </p>
      </div>
    </footer>
  );
}
