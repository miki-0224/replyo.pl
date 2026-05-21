import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://replyo.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Replyo — AI recepcjonistka dla salonów beauty",
    template: "%s · Replyo",
  },
  description:
    "AI, która 24/7 odpowiada Twoim klientkom z Messengera, Instagrama i maila — i umawia wizyty zanim odejdą do konkurencji. Dla kosmetyczek, brwi/rzęsy, paznokci i makijażu permanentnego.",
  keywords: [
    "AI dla salonu beauty",
    "auto odpowiedzi Messenger",
    "automatyczne rezerwacje",
    "kosmetyczka",
    "brwi rzęsy",
    "Booksy AI",
    "Replyo",
  ],
  authors: [{ name: "Mikołaj Iwasiuk" }],
  creator: "Replyo",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Replyo",
    title: "Replyo — AI recepcjonistka dla salonów beauty",
    description:
      "24/7 odpowiada na Messengerze, Instagramie i mailu. Umawia wizyty zanim klientka odejdzie do konkurencji.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replyo — AI dla salonów beauty",
    description:
      "24/7 odpowiedzi i rezerwacje z Messengera, Instagrama, maila.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="bottom-center"
          richColors
          theme="system"
          toastOptions={{
            style: {
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
