import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendWaitlistWelcome } from "@/lib/resend";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Nieprawidłowy adres email"),
  source: z.string().trim().max(32).optional().default("landing"),
});

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Nieprawidłowe dane wejściowe." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Sprawdź formularz.";
    return NextResponse.json(
      { ok: false, error: firstIssue },
      { status: 400 }
    );
  }

  const { email, source } = parsed.data;

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (err) {
    console.error("[waitlist] supabase init error", err);
    return NextResponse.json(
      { ok: false, error: "Serwer nie jest jeszcze skonfigurowany. Spróbuj za chwilę." },
      { status: 500 }
    );
  }

  const { error: dbError } = await supabase
    .from("waitlist")
    .insert({ email, source });

  if (dbError) {
    // Unique violation = email już jest na liście. Traktuj jako sukces.
    if (dbError.code === "23505") {
      return NextResponse.json(
        { ok: true, alreadyOnList: true },
        { status: 200 }
      );
    }
    console.error("[waitlist] supabase insert error", dbError);
    return NextResponse.json(
      { ok: false, error: "Coś poszło nie tak. Spróbuj jeszcze raz." },
      { status: 500 }
    );
  }

  try {
    await sendWaitlistWelcome(email);
  } catch (mailError) {
    // Nie blokujemy konwersji jeśli welcome email padnie — log i jedziemy.
    console.error("[waitlist] resend send error", mailError);
  }

  return NextResponse.json({ ok: true, alreadyOnList: false }, { status: 200 });
}
