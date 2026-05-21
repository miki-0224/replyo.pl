import { Resend } from "resend";

let cached: Resend | null = null;

function getResend(): Resend {
  if (cached) return cached;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Brak RESEND_API_KEY w env. Sprawdź .env.local (lokalnie) lub Project Settings → Environment Variables (Vercel)."
    );
  }

  cached = new Resend(apiKey);
  return cached;
}

const DEFAULT_FROM = "Replyo <hello@replyo.pl>";

export async function sendWaitlistWelcome(to: string) {
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
  return getResend().emails.send({
    from,
    to,
    subject: "Cześć! Jesteś na liście Replyo 💌",
    html: welcomeHtml(),
    text: welcomeText(),
  });
}

function welcomeHtml() {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px 24px; color: #1a0f0f; line-height: 1.55;">
      <h1 style="font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 28px; margin: 0 0 16px; font-weight: 400;">
        Dzięki, że jesteś.
      </h1>
      <p style="font-size: 16px; margin: 0 0 16px;">
        Cześć! Mikołaj tutaj — założyciel <strong>Replyo</strong>.
      </p>
      <p style="font-size: 16px; margin: 0 0 16px;">
        Właśnie dołączyłaś do listy oczekujących. Replyo to AI asystentka dla salonów beauty,
        która 24/7 odpowiada Twoim klientkom z Messengera, Instagrama i maila — i umawia
        wizyty zanim odejdą do konkurencji.
      </p>
      <p style="font-size: 16px; margin: 0 0 16px;">
        Premierę planuję za 6–8 tygodni. Dam znać mailem zanim ruszymy, żebyś miała
        priorytetowy dostęp i 50% zniżki na pierwszy miesiąc dla pierwszych 30 salonów.
      </p>
      <p style="font-size: 16px; margin: 0 0 24px;">
        Gdybyś chciała pogadać wcześniej (15 min, zero sprzedaży — buduję produkt pod Twoje
        realne potrzeby), odpisz na ten mail. Naprawdę czytam każdą odpowiedź.
      </p>
      <p style="font-size: 16px; margin: 0 0 4px;">Do usłyszenia,</p>
      <p style="font-size: 16px; margin: 0; font-weight: 600;">Mikołaj</p>
      <p style="font-size: 13px; color: #6b5450; margin: 24px 0 0;">
        Replyo · Szczecin · <a href="https://replyo.pl" style="color: #ff6b9d; text-decoration: none;">replyo.pl</a>
      </p>
    </div>
  `;
}

function welcomeText() {
  return `Dzięki, że jesteś.

Cześć! Mikołaj tutaj — założyciel Replyo.

Właśnie dołączyłaś do listy oczekujących. Replyo to AI asystentka dla salonów beauty, która 24/7 odpowiada Twoim klientkom z Messengera, Instagrama i maila — i umawia wizyty zanim odejdą do konkurencji.

Premierę planuję za 6–8 tygodni. Dam znać mailem zanim ruszymy, żebyś miała priorytetowy dostęp i 50% zniżki na pierwszy miesiąc dla pierwszych 30 salonów.

Gdybyś chciała pogadać wcześniej (15 min, zero sprzedaży — buduję produkt pod Twoje realne potrzeby), odpisz na ten mail. Naprawdę czytam każdą odpowiedź.

Do usłyszenia,
Mikołaj

Replyo · Szczecin · replyo.pl`;
}
