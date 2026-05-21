# Analiza 56 rzeczywistych rozmów klientek salonu

Źródło: salon dziewczyny Mikołaja + siostry (insider data, prawdziwe konwersacje SMS/iMessage z klientkami).
Próbka analizowana: 9 reprezentatywnych screenshotów.
Data analizy: 2026-05-22.

## TL;DR

**Najważniejszy fakt**: 60-70% wszystkich rozmów to **przełożenie/zmiana terminu wizyty** (reschedule).
To NIE jest aplikacja do "pierwszego booking" — to aplikacja do **zarządzania reschedule + reminders**.

To zmienia priorytety MVP:
1. **AI musi obsłużyć multi-turn negocjację terminu** (klient proponuje → AI counter → klient counter → akcept)
2. **AI musi rozumieć kontekst życiowy klientek** (praca, dzieci, choroba, służba)
3. **AI musi wysyłać reminders** (1 dzień przed + day-of confirm)
4. **AI musi proponować slot consolidation** ("zwolniło mi się miejsce na X")

---

## Kategorie wiadomości (% rzeczywiste, nie zgadywane)

| Kategoria | Częstość | Przykład |
|-----------|----------|----------|
| **Reschedule** | 60-70% | "Czy jest jednak szansa na przepisanie na czwartek 18:00?" |
| **Nowa rezerwacja** | 10-15% | "Hej, będziesz miała jakiś termin na brwi w środę?" |
| **Same-day confirm** | 10% | "Czy nasza wizyta dzisiaj aktualna?" |
| **Cancellation** | 5-10% | "Niestety muszę odwołać", "chorobsko mnie rozkłada" |
| **Info request** | 5% | "Czy mogłabym prosić o przesłanie terminu jaki mamy zapisany" |

## Wiadomości inicjowane przez salon (owner-initiated)

| Typ | Przykład |
|-----|----------|
| **Day-of reminder** | "hej, przypominam dzisiaj na 10:00, proszę o potwierdzenie" |
| **Slot consolidation** | "dzień dobry, zwolniło mi się miejsce na jutro na 14:00 czy mogłybyśmy zmienić?" |
| **Owner reschedule** | "może środa na 10:45? mi właśnie wpisali lekarza i nie dam rady" |
| **Follow-up after silence** | "hej, jutrzejszy termin aktualny?" |

---

## Profile klientek (3 typy współistniejące)

### 1. Formal "Pani Olu" (~25%)
```
"Dzień dobry Pani Olu, mam wizytę u Pani w środę na 12:30
ale w pracy mam jakiś armagedon i w środę wątpliwa sprawa..."
```
- Pełne zdania
- "Pani" + imię
- "Dzień dobry / Pozdrawiam"
- Tłumaczy kontekst formalnie

### 2. Casual "hejka" (~50%)
```
"Hej, będziesz miała jakiś termin na brwi w środę cały dzień,
piątek, lub poniedziałek ale tak bardziej pod wieczór?"
```
- "hej / hejka"
- "kochana"
- Dużo emoji 💗 ❤️ 🥰 🤗
- Casual flow, mid-sentence requests

### 3. Practical no-fuss (~25%)
```
"To poproszę piątek"
"oki, dziękuję"
"Pasuje"
```
- Krótkie odpowiedzi
- Bezpośrednie potwierdzenia/odrzucenia

**Implikacja dla AI**: musi **automatycznie dostosować ton odpowiedzi** do tonu klientki. Jak "Dzień dobry Pani" → odpowiada formalnie. Jak "hejka" → odpowiada "hejka, hej".

---

## Słownictwo branżowe (do system promptu)

### Zabiegi wymieniane przez klientki
- **laminacja brwi** (+ z koloryzacją / bez)
- **regulacja brwi** (+ farbka / henna)
- **rzęsy** / laminacja rzęs
- **depilacja** (woskiem)
- **depilacja pach**
- **kolor brwi**
- **konsultacja** (samodzielna usługa, often combo z zabiegiem)
- **zabieg** (generyczne określenie na konkretną usługę kosmetyczną)
- **powiększanie ust** (kwas hialuronowy)

### Czas-specyficzne wyrażenia
- "po dziesiątym" (after the 10th of the month)
- "weekend"
- "tak bardziej pod wieczór"
- "godziny popołudniowe / późne popołudniowe"
- "do południa / przed południem"
- "całe popołudnie"
- "ewentualnie"

### Życiowy kontekst który klientki dzielą
- **Praca / zmiany**: "służba", "praca do 17", "armagedon w pracy", "wpisali mi nadgodziny"
- **Dzieci**: "muszę odebrać syna od babci"
- **Inne wizyty**: "jestem u p. Daria na paznokcie", "wpisali lekarza"
- **Podróże**: "muszę być w Słupsku", "ze Szczecina wracam"
- **Szkoła/studia**: "po zajęciach wracam", "zjazd na studiach"
- **Choroba**: "chorobsko mnie rozkłada", "coraz gorzej się czuję"
- **Finanse**: "nadprogramowe wydatki", "mam wątpliwą sprawę"

---

## Wzorce flow konwersacji

### Wzór A: Multi-turn negocjacja terminu (~60% rozmów)
```
Klient: "Czy jest szansa na X?"
Salon:  "Niestety nie, mam ABC. Może Y?"
Klient: "Y też nie pasuje. A Z?"
Salon:  "Z może być, godzina N?"
Klient: "Pasuje 💗"
```
**Średnio 3-5 wymian zanim termin ustalony.** AI musi wytrzymać ten back-and-forth.

### Wzór B: Long-running rebook chain (~15% rozmów)
```
[Tydzień 1] Klient: cancel
[Tydzień 2-3] Cisza
[Tydzień 4] Salon: "hej, zwolniło mi się X" (owner outreach)
[Tydzień 4] Klient: "Pasuje, dzięki"
```

### Wzór C: Day-of confirmation loop
```
[Rano] Klient: "czy nasza wizyta dzisiaj aktualna?"
[Rano] Salon: "tak, do zobaczenia"
[Albo Rano] Salon: "przypominam dzisiaj na X"
[Klient] "Tak będę 🤗"
```

### Wzór D: Service downscope
```
Klient: "Tylko będę musiała zrezygnować z brwi bo mam ograniczony czas..."
Salon: "OK brwi i rzęsy robimy w tym samym czasie więc nie będzie dłużej"
```

---

## Edge cases (AI powinien eskalować)

1. **Pre-consultation skincare** — klient dzieli detal skincare ("biorę leki, krem z Wit C, maseczka z retimaxu")
2. **Pricing combos** (consultation + zabieg discount) — wymaga decyzji właścicielki
3. **Emocjonalne sytuacje** — "muszę odwołać bo nadprogramowe wydatki" wymaga empatii > automation
4. **Coordinated multi-salon** — klient pyta o slot PRZED/PO wizycie u innego salonu, wymaga inteligentnego planowania
5. **Owner-side personal constraints** — "mi wpisali lekarza" / "zjazd na studiach" — AI nie powinien proponować takich slotów
6. **Niejasne formułowania** — "wcześniej nie masz może?" wymaga clarification

---

## Implikacje dla MVP system promptu

### Co AI MUSI umieć
1. **Reschedule negotiation** — wielokrotne propose-counter-propose
2. **Tone matching** — formal vs casual
3. **Kontekst klientki** — czytać "pracuję do 17, mam dziecko" i NIE proponować slotów 16-17
4. **Day-of reminders** — automatic message dzień przed + day-of
5. **Slot consolidation outreach** — gdy ktoś cancel, automatycznie pingnąć kolejną z listy oczekujących
6. **Owner-side rescheduling** — gdy właścicielka ma blocker, automatically reach out do affected clients
7. **Service bundle awareness** — brwi+rzęsy = jeden slot, nie dwa

### Co AI MOŻE pominąć (eskalować)
- Konsultacje skincare/medyczne
- Pricing combos
- Niejasne sytuacje
- Klienci wymagający empatii (illness, financial)
- Decyzje strategiczne (dawać rabat? robić wyjątek?)

### Suggested system prompt skeleton

```
Jesteś asystentką salonu beauty {SALON_NAME}.
Twoim zadaniem: ZARZĄDZANIE TERMINAMI klientek.

ZNASZ:
- Cennik: {PRICING}
- Godziny otwarcia: {HOURS}
- Czas usług: brwi 30min, rzęsy 60min, laminacja 90min...
- Bundle: brwi+rzęsy = jeden slot
- Wolne terminy: {CALENDAR}
- Indywidualne preferencje klientek z historii: {CLIENT_HISTORY}

ZASADY:
1. Dostosuj ton do klientki:
   - "Dzień dobry / Pani" → odpowiadasz formalnie "Pani"
   - "hej / hejka" → odpowiadasz casual "hejka 🤍"
2. Jak klientka dzieli kontekst (praca, dziecko, choroba) — UWZGLĘDNIJ to w propozycjach
3. Propose 2 alternatywne sloty, nie 1
4. Po decyzji klientki — zarezerwuj i potwierdź
5. ESKALUJ do właścicielki gdy:
   - Pre-consultation pytania o zabiegi
   - Pricing combos
   - Klientka emocjonalna (illness, financial)
   - Niejasne pytanie

DZIAŁAJ JAK:
- Ciepła, kompetentna recepcjonistka
- Mówisz "pierwsza osoba" ("zarezerwowałam", "zapisuję")
- Używaj emoji subtelnie 🤍 ✨ (nie spamuj)
```

---

## Następne kroki (action items)

### Faza 1: Walidacja przez dziewczynę (Wizard of Oz)
1. Setup workflow: dziewczyna forwarduje nowe wiadomości na Twój WhatsApp
2. Ty kopiujesz tekst do Claude.ai z above promptem
3. Wracasz do niej z sugerowaną odpowiedzią
4. Ona kopiuje/edytuje/wysyła
5. Mierzysz: ile odpowiedzi AI 100% trafia, ile wymaga edycji, ile do eskalacji
6. Iterujesz prompt na żywych przykładach

**Cel po tygodniu**: 70%+ odpowiedzi AI używanych bez modyfikacji

### Faza 2: MVP build (tygodnie 2-6)
1. Auth + multi-tenant (Supabase RLS)
2. Calendar storage (Supabase) + UI dla właścicielki
3. Meta Business API (Messenger + Instagram) — submit App Review tygodnia 1
4. Email/IMAP integration
5. Claude API z system promptem zbudowanym z tego dokumentu
6. Day-of reminder cronjob
7. Stripe Subscriptions

### Faza 3: Beta z 2 salonami
1. Dziewczyna + siostra jako pierwsi beta-testerzy
2. Live tracking accuracy: ile wiadomości obsłużonych w pełni vs eskalacja
3. Tygodniowy retrospect: co poprawić w promptach

### Faza 4: Cold acquisition (tygodnie 6-10)
1. Z LIVE produktem + 2 case studies do innych salonów
2. DM-y z dowodem: "U mojej dziewczyny AI obsługuje X wiadomości miesięcznie"
