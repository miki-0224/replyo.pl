"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

export function WaitlistForm({ source = "landing" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!trimmed) {
      toast.error("Wpisz swój email 💌");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        alreadyOnList?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Coś poszło nie tak. Spróbuj jeszcze raz.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setEmail("");
      toast.success(
        data.alreadyOnList
          ? "Już jesteś na liście 💕"
          : "Dzięki! Sprawdź skrzynkę 💌"
      );
    } catch {
      toast.error("Brak połączenia. Sprawdź internet i spróbuj jeszcze raz.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-1 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 backdrop-blur-md sm:mx-0 sm:items-start">
        <p className="font-serif text-xl italic text-foreground">
          Dzięki, że jesteś.
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">
          Welcome email jest w drodze. Sprawdź skrzynkę (też spam, na wszelki wypadek).
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 text-xs font-medium text-[var(--accent-rose)] hover:underline"
        >
          Zapisz inny email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-2 sm:mx-0 sm:flex-row"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Adres email
      </label>
      <input
        id="waitlist-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="twoj@email.pl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="h-12 flex-1 rounded-full border border-[var(--border)] bg-white/80 px-5 text-base text-foreground placeholder:text-[var(--muted-foreground)]/70 outline-none ring-0 backdrop-blur-md transition focus:border-[var(--accent-rose)]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,157,0.12)] disabled:opacity-50 dark:bg-zinc-900/60 dark:focus:bg-zinc-900"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:scale-[1.02] active:scale-100 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Zapisuję…
          </>
        ) : (
          <>
            Dołącz do listy
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
