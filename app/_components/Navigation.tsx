"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

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
        <a href="/" className="group transition hover:opacity-85">
          <Logo withBadge size="md" />
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
