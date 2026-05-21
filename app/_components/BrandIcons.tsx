/**
 * Inline SVG icons for platforms Replyo integrates with.
 * Designed for marquee use — 24x24, with brand colors.
 * Premium, recognizable, no external image dependencies.
 */

export function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="msg-gr" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00B2FF" />
          <stop offset="1" stopColor="#006AFF" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5C7.7 1.5 1 7.8 1 15.6c0 4.4 2.1 8.3 5.4 11v5.4l5-2.7c1.4.4 2.9.6 4.6.6 8.3 0 15-6.3 15-14.1S24.3 1.5 16 1.5Z"
        fill="url(#msg-gr)"
      />
      <path
        d="m6.8 19.9 4.4-7 4.6 4 4-4 4.4 7-4.4-2-4 4-4.6-4-4.4 2Z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="ig-gr" cx="0.3" cy="1" r="1.1">
          <stop offset="0" stopColor="#FFDC80" />
          <stop offset="0.2" stopColor="#FCAF45" />
          <stop offset="0.4" stopColor="#F77737" />
          <stop offset="0.55" stopColor="#F56040" />
          <stop offset="0.7" stopColor="#FD1D1D" />
          <stop offset="0.85" stopColor="#E1306C" />
          <stop offset="1" stopColor="#833AB4" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ig-gr)" />
      <circle cx="16" cy="16" r="6.2" fill="none" stroke="#fff" strokeWidth="2.4" />
      <circle cx="23.5" cy="8.5" r="1.6" fill="#fff" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="wa-gr" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5BD066" />
          <stop offset="1" stopColor="#27B43E" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5C7.9 1.5 1.3 8 1.3 16c0 2.7.7 5.3 2.2 7.6L1.5 30.5l7.1-1.9c2.3 1.2 4.8 1.9 7.4 1.9 8.1 0 14.7-6.5 14.7-14.6S24.1 1.5 16 1.5Z"
        fill="url(#wa-gr)"
      />
      <path
        d="M22.6 19.1c-.3-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-2.1-1-3.5-1.9-5-4.3-.4-.7.4-.6 1.1-2 .1-.2.1-.5 0-.6-.1-.2-.8-2-1.2-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.9.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.4Z"
        fill="#fff"
      />
    </svg>
  );
}

export function GmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="2" y="6" width="28" height="20" rx="2.5" fill="#fff" stroke="#dadce0" strokeWidth="0.5" />
      <path d="M2 7.5L16 18 30 7.5v-1A1.5 1.5 0 0 0 28.5 5H29l-13 9.5L3 5h.5A1.5 1.5 0 0 0 2 6.5v1Z" fill="#EA4335" />
      <path d="M30 8.5v15A2.5 2.5 0 0 1 27.5 26H30V8.5Z" fill="#34A853" />
      <path d="M2 8.5v15A2.5 2.5 0 0 0 4.5 26H2V8.5Z" fill="#4285F4" />
      <path d="M30 6.5v2L16 19 2 8.5v-2A1.5 1.5 0 0 1 3.5 5h.5l12 8.8L28 5h.5A1.5 1.5 0 0 1 30 6.5Z" fill="#EA4335" />
      <path d="M30 6.5L16 17 2 6.5A1.5 1.5 0 0 1 3.5 5h25A1.5 1.5 0 0 1 30 6.5Z" fill="#C5221F" />
    </svg>
  );
}

export function SmsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="sms-gr" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#34D058" />
          <stop offset="1" stopColor="#28A745" />
        </linearGradient>
      </defs>
      <path
        d="M16 4C8.3 4 2 9.3 2 15.8c0 2.5 1 4.8 2.6 6.7L3 28l5.7-2c2.2 1 4.7 1.6 7.3 1.6 7.7 0 14-5.3 14-11.8S23.7 4 16 4Z"
        fill="url(#sms-gr)"
      />
      <circle cx="10" cy="15.8" r="1.4" fill="#fff" />
      <circle cx="16" cy="15.8" r="1.4" fill="#fff" />
      <circle cx="22" cy="15.8" r="1.4" fill="#fff" />
    </svg>
  );
}

export function BooksyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="28" height="28" rx="7" fill="#0F1419" />
      <path
        d="M9 8h6.5c3.2 0 5.2 1.7 5.2 4.2 0 1.6-.8 2.8-2 3.5 1.7.6 2.8 2 2.8 3.9 0 2.7-2.1 4.4-5.5 4.4H9V8Zm3.4 6.4h2.7c1.5 0 2.3-.7 2.3-1.9s-.8-1.9-2.3-1.9h-2.7v3.8Zm0 6.7H15c1.7 0 2.5-.7 2.5-2s-.8-2-2.5-2h-2.6v4Z"
        fill="#fff"
      />
    </svg>
  );
}

export type BrandKey =
  | "messenger"
  | "instagram"
  | "whatsapp"
  | "gmail"
  | "sms"
  | "booksy";

export const brandList: { key: BrandKey; name: string }[] = [
  { key: "instagram", name: "Instagram DM" },
  { key: "messenger", name: "Messenger" },
  { key: "whatsapp", name: "WhatsApp" },
  { key: "gmail", name: "Gmail" },
  { key: "sms", name: "SMS" },
  { key: "booksy", name: "Booksy" },
];

export function BrandIcon({ kind, className }: { kind: BrandKey; className?: string }) {
  switch (kind) {
    case "messenger":
      return <MessengerIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    case "gmail":
      return <GmailIcon className={className} />;
    case "sms":
      return <SmsIcon className={className} />;
    case "booksy":
      return <BooksyIcon className={className} />;
    default:
      return null;
  }
}
