import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /** Jeśli true — chmurka z kropkami, bez tła. */
  transparent?: boolean;
};

/**
 * Replyo logo mark — speech bubble z 3 kropkami (typing dots / AI odpowiada).
 * Bez liter (świadomie — żeby nie kojarzyć z literą "R" / Revolut).
 *
 * Wariant domyślny: bubble w białym, gradientowe tło (rounded square).
 * Wariant transparent: sam bubble w gradiencie, bez tła (do dark/jasnych kontekstów).
 */
export function LogoMark({ className, transparent = false }: LogoMarkProps) {
  if (transparent) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <defs>
          <linearGradient
            id="replyo-mark-transparent"
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="55%" stopColor="#ff8b78" />
            <stop offset="100%" stopColor="#ffb088" />
          </linearGradient>
        </defs>
        <path
          d="M32 8C18.7 8 8 17.4 8 29.2C8 35.1 10.6 40.4 14.8 44.3L11.5 55.3C11.1 56.7 12.6 57.8 13.9 57.1L24.6 51C26.9 51.7 29.4 52 32 52C45.3 52 56 42.6 56 30.8C56 19 45.3 8 32 8Z"
          fill="url(#replyo-mark-transparent)"
        />
        <circle cx="22" cy="30" r="3" fill="#fff" />
        <circle cx="32" cy="30" r="3" fill="#fff" />
        <circle cx="42" cy="30" r="3" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="replyo-mark"
          x1="8"
          y1="8"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="55%" stopColor="#ff8b78" />
          <stop offset="100%" stopColor="#ffb088" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#replyo-mark)" />
      <path
        d="M32 14C22.5 14 15 20.5 15 28.5C15 32.5 16.8 36.1 19.6 38.7L17.5 45.8C17.2 47 18.4 48 19.5 47.4L26.3 43.8C28.1 44.3 30 44.6 32 44.6C41.5 44.6 49 38.1 49 30.1C49 22.1 41.5 14 32 14Z"
        fill="#fff"
      />
      <circle cx="24" cy="29" r="2.5" fill="#ff6b9d" />
      <circle cx="32" cy="29" r="2.5" fill="#ff8b78" />
      <circle cx="40" cy="29" r="2.5" fill="#ffb088" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Pokaż wordmark "replyo" obok marka. Domyślnie true. */
  withWordmark?: boolean;
  /** Pokaż badge "soon" / "beta". Domyślnie false. */
  withBadge?: boolean;
  /** Rozmiar marka. */
  size?: "sm" | "md";
};

const sizeMap = {
  sm: { mark: "h-6 w-6", text: "text-base" },
  md: { mark: "h-7 w-7", text: "text-xl" },
};

/**
 * Pełne logo Replyo — mark + wordmark.
 */
export function Logo({
  className,
  withWordmark = true,
  withBadge = false,
  size = "md",
}: LogoProps) {
  const s = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={s.mark} />
      {withWordmark && (
        <span
          className={cn(
            "font-serif italic tracking-tight text-foreground leading-none",
            s.text
          )}
        >
          replyo
        </span>
      )}
      {withBadge && (
        <span className="hidden rounded-full border border-[var(--border)] bg-[var(--card)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted-foreground)] backdrop-blur-md sm:inline-block">
          soon
        </span>
      )}
    </span>
  );
}
