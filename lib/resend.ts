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

const DEFAULT_FROM = "Mikołaj z Replyo <hello@replyo.pl>";

type WaitlistKind = "new" | "already-on-list";

export async function sendWaitlistWelcome(to: string, kind: WaitlistKind = "new") {
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
  return getResend().emails.send({
    from,
    to,
    replyTo: "mikolaj@replyo.pl",
    subject:
      kind === "already-on-list"
        ? "Już jesteś na liście Replyo 💕"
        : "Cześć! Jesteś na liście Replyo 💌",
    html: welcomeHtml(kind),
    text: welcomeText(kind),
  });
}

function welcomeHtml(kind: WaitlistKind) {
  const isReturning = kind === "already-on-list";

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Replyo</title>
</head>
<body style="margin:0;padding:0;background:#fff8f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff8f3;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 1px 0 rgba(26,15,15,0.04),0 8px 28px -8px rgba(255,107,157,0.18);">

          <!-- Gradient hero banner -->
          <tr>
            <td height="180" align="center" valign="middle" style="background-color:#ff6b9d;background-image:linear-gradient(135deg,#ff6b9d 0%,#ff8b78 50%,#ffb088 100%);padding:44px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <tr>
                  <td align="center" style="padding-bottom:14px;">
                    <!-- Speech bubble mark with 3 typing dots -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                      <tr>
                        <td width="56" height="40" align="center" valign="middle" style="background-color:#ffffff;border-radius:18px;line-height:0;padding:0 8px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                            <tr>
                              <td width="8" height="8" style="background-color:#ff6b9d;border-radius:50%;font-size:0;line-height:0;">&nbsp;</td>
                              <td width="6" style="font-size:0;line-height:0;">&nbsp;</td>
                              <td width="8" height="8" style="background-color:#ff8b78;border-radius:50%;font-size:0;line-height:0;">&nbsp;</td>
                              <td width="6" style="font-size:0;line-height:0;">&nbsp;</td>
                              <td width="8" height="8" style="background-color:#ffb088;border-radius:50%;font-size:0;line-height:0;">&nbsp;</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-family:'Instrument Serif',Georgia,'Times New Roman',serif;font-style:italic;font-size:46px;color:#ffffff;line-height:1;letter-spacing:-0.02em;">
                    replyo
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.34em;color:#ffffff;text-transform:uppercase;">
                    AI dla salonów beauty
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:24px 36px 0;">
              <h1 style="font-family:'Instrument Serif',Georgia,'Times New Roman',serif;font-style:italic;font-size:36px;font-weight:400;line-height:1.15;color:#1a0f0f;margin:0;">
                ${isReturning ? "Wciąż jesteś z nami." : "Dzięki, że jesteś."}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:20px 36px 0;font-size:16px;line-height:1.6;color:#1a0f0f;">
              <p style="margin:0 0 16px;">
                ${isReturning
                  ? "Zapisałaś się jakiś czas temu — Twój email wciąż siedzi na liście, tak jak miał ✨"
                  : "Tu Mikołaj. Buduję <strong>Replyo</strong> — AI asystentkę dla salonów beauty, która 24/7 odpowiada Twoim klientkom z Messengera, Instagrama i maila i umawia wizyty zanim odejdą do konkurencji."}
              </p>

              <p style="margin:0 0 16px;">
                Premierę planuję za <strong>6–8 tygodni</strong>. Dam znać mailem zanim ruszymy — pierwszych 30 salonów dostanie 50% zniżki na pierwszy miesiąc.
              </p>

              <p style="margin:0 0 8px;">
                Gdybyś chciała pogadać wcześniej — 15 min, zero sprzedaży, po prostu chcę zrozumieć z czym Wasz salon się dziś mierzy — po prostu odpisz na ten mail. Czytam każdą odpowiedź sam.
              </p>
            </td>
          </tr>

          <!-- Signoff -->
          <tr>
            <td style="padding:24px 36px 8px;font-size:16px;line-height:1.5;color:#1a0f0f;">
              <p style="margin:0;">Trzymaj się,</p>
              <p style="margin:4px 0 0;font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-size:22px;color:#1a0f0f;">— Mikołaj</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:24px 36px 0;">
              <div style="height:1px;background:rgba(26,15,15,0.08);line-height:1px;font-size:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 36px 32px;font-size:13px;line-height:1.6;color:#6b5450;">
              <strong style="color:#1a0f0f;font-weight:500;">Mikołaj Iwasiuk</strong> · założyciel Replyo<br>
              <a href="mailto:mikolaj@replyo.pl" style="color:#ff6b9d;text-decoration:none;">mikolaj@replyo.pl</a>
              &nbsp;·&nbsp;
              <a href="https://replyo.pl" style="color:#6b5450;text-decoration:none;">replyo.pl</a>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

function welcomeText(kind: WaitlistKind) {
  const isReturning = kind === "already-on-list";

  if (isReturning) {
    return `Wciąż jesteś z nami.

Zapisałaś się jakiś czas temu — Twój email wciąż siedzi na liście, tak jak miał.

Premierę planuję za 6–8 tygodni. Dam znać mailem zanim ruszymy — pierwszych 30 salonów dostanie 50% zniżki na pierwszy miesiąc.

Gdybyś chciała pogadać wcześniej — 15 min, zero sprzedaży — po prostu odpisz na ten mail. Czytam każdą odpowiedź sam.

Trzymaj się,
— Mikołaj

—
Mikołaj Iwasiuk · założyciel Replyo
mikolaj@replyo.pl · replyo.pl`;
  }

  return `Dzięki, że jesteś.

Tu Mikołaj. Buduję Replyo — AI asystentkę dla salonów beauty, która 24/7 odpowiada Twoim klientkom z Messengera, Instagrama i maila i umawia wizyty zanim odejdą do konkurencji.

Premierę planuję za 6–8 tygodni. Dam znać mailem zanim ruszymy — pierwszych 30 salonów dostanie 50% zniżki na pierwszy miesiąc.

Gdybyś chciała pogadać wcześniej — 15 min, zero sprzedaży, po prostu chcę zrozumieć z czym Wasz salon się dziś mierzy — po prostu odpisz na ten mail. Czytam każdą odpowiedź sam.

Trzymaj się,
— Mikołaj

—
Mikołaj Iwasiuk · założyciel Replyo
mikolaj@replyo.pl · replyo.pl`;
}
