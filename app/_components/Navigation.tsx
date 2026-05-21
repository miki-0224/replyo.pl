"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/" className="group flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#ffb088]">
            <span className="text-xs font-semibold text-white">R</span>
          </span>
          <span className="font-serif text-xl italic tracking-tight text-foreground">
            replyo
          </span>
          <span className="hidden rounded-full border border-[var(--border)] bg-[var(--card)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted-foreground)] backdrop-blur-md sm:inline-block">
            soon
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-4 text-sm">
          <a
            href="mailto:hello@replyo.pl"
            className="hidden text-[var(--muted-foreground)] transition hover:text-foreground sm:inline-block"
          >
            kontakt
          </a>
          <a
            href="#zapis"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-xs font-medium text-background transition hover:scale-[1.03]"
          >
            Dołącz do listy
          </a>
        </nav>
      </div>
    </header>
  );
}
