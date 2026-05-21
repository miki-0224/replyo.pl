import { HeroBackground } from "./HeroBackground";
import { HeroSpotlight } from "./HeroSpotlight";
import { PhoneMockup } from "./PhoneMockup";
import { ValueProps } from "./ValueProps";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section
      id="zapis"
      className="relative isolate flex items-start overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:min-h-[100svh] lg:items-center lg:pt-40"
    >
      <HeroBackground />
      <HeroSpotlight />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--muted-foreground)] backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-rose)]" />
            Wczesny dostęp · Wkrótce
          </span>

          <h1 className="max-w-2xl text-balance text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
            Twoje klientki piszą o{" "}
            <span className="font-serif italic text-[var(--accent-rose)]">
              22:00
            </span>
            .
            <br />
            Niech ktoś odpisuje{" "}
            <span className="font-serif italic">za Ciebie</span>.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Twoja AI recepcjonistka. Czyta wiadomości z Messengera, Instagrama i maila,
            podaje ceny i terminy, potwierdza wizyty —{" "}
            <span className="text-foreground">24 godziny na dobę</span>.
          </p>

          <div className="mt-8 w-full">
            <WaitlistForm source="landing-hero" />
          </div>

          <p className="mt-4 text-xs text-[var(--muted-foreground)]">
            Premiera za 6–8 tygodni · 50% zniżki dla pierwszych 30 salonów · Zero spamu
          </p>
        </div>

        {/* Visual — phone + value props side by side */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[300px] md:max-w-[340px]">
            <PhoneMockup />
            <ValueProps />
          </div>
        </div>
      </div>
    </section>
  );
}
