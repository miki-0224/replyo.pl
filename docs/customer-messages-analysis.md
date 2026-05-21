# Analiza WSZYSTKICH 56 rozmów klientek salonu

Źródło: salon dziewczyny Mikołaja + siostry (insider data, prawdziwe konwersacje SMS/iMessage/Instagram DM z klientkami).
Próbka analizowana: **wszystkie 56 screenshotów**.
Data analizy: 2026-05-22.
PII: zachowana — w tym dokumencie żadnych imion ani numerów.

## TL;DR

**Najważniejszy fakt #1**: ~70% wszystkich rozmów to **przełożenie/zmiana terminu wizyty** (reschedule).
**Najważniejszy fakt #2**: Średnia rozmowa to **3-7 wymian** zanim termin ustalony — multi-turn negocjacja to NORMA.
**Najważniejszy fakt #3**: Aż ~30% reschedule wymaga **cascade rebooking** — owner musi pytać innych klientów czy zwolnią slot.

To NIE jest aplikacja do "pierwszego booking" — to **aplikacja do zarządzania kalendarzem + cascade rescheduling + day-of reminders + deposit collection**.

---

## Kategorie wiadomości (% z 56 rozmów)

| Kategoria | % | Przykład |
|-----------|---|----------|
| **Reschedule** (przełożenie) | ~55% | "Czy jest jednak szansa na przepisanie na czwartek 18:00?" |
| **Cancel + future rebook** | ~15% | "Niestety muszę odwołać, odezwę się jak będę mogła" |
| **New booking** (with date range) | ~10% | "Będziesz miała termin na brwi w środę, piątek lub poniedziałek wieczorem?" |
| **Same-day confirm** | ~7% | "Czy nasza wizyta dzisiaj aktualna?" |
| **Service info/price question** | ~5% | "Czy wykonujesz zabiegi stymulatory na twarzy? Ile kosztuje?" |
| **Medical/contraindication** | ~3% | "Czy powiększanie ust między depilacjami laserowymi jest przeciwwskazaniem?" |
| **Address/location** | ~2% | "Mogę prosić adres?" |
| **Add-on to existing visit** | ~2% | "Mam depilację 30. Czy moglibyśmy też laminację brwi? Mam imprezę w sobotę" |
| **Late arrival notification** | ~1% | "Spóźnię się 2 minutki" |

## Wiadomości inicjowane przez salon (owner-initiated)

| Typ | % rozmów | Przykład |
|-----|----------|----------|
| **Day-of reminder + confirm request** | ~40% rozmów ma | "hej, przypominam dzisiaj na 10:00, proszę o potwierdzenie" |
| **Slot consolidation** (free slot → ping waitlist) | ~15% | "Zwolniło mi się miejsce na jutro na 14:00, czy mogłybyśmy zmienić?" |
| **Owner reschedule** (illness, doctor, vacation, school) | ~10% | "Mi właśnie wpisali lekarza i nie dam rady" |
| **Cascade rebook** (asking other clients to move) | ~8% | "Potrzebuję chwili żeby zapytać klientki" |
| **Follow-up after silence** | ~5% | "Hej, jutrzejszy termin aktualny?" |
| **Deposit (zadatek) request** | ~7% | "Prosiłabym o przelanie zadatku 50 zł na numer XXX blikiem" |

---

## Profile klientek (3 typy współistniejące)

### 1. Formal "Pani Olu" (~25%)
```
"Dzień dobry Pani Olu, mam wizytę u Pani w środę..."
"Pozdrawiam, [imię]"
```
- Pełne zdania, formalne
- "Pani" + imię
- "Dzień dobry / Pozdrawiam"
- Tłumaczy kontekst formalnie

### 2. Casual "hejka kochana" (~50%)
```
"Hej, będziesz miała termin?"
"Hejka 🥰"
"Kochana, mogłabyś jednak..."
```
- "hej / hejka / kochana / Olcia"
- Diminutivy imion ("Olcia" zamiast "Ola")
- Dużo emoji 💗 ❤️ 🥰 🤗 🌸
- Casual flow, mid-sentence requests

### 3. Practical no-fuss (~25%)
```
"Oki"
"Pasuje"
"Dzięki ❤️"
```
- Krótkie odpowiedzi
- Bezpośrednie potwierdzenia/odrzucenia

**Implikacja dla AI**: **automatycznie dostosowuje ton** do tonu klientki. Jak "Dzień dobry Pani" → odpowiada formalnie. Jak "hejka" → odpowiada "hejka 🤍".

---

## Słownictwo branżowe (do system promptu)

### Zabiegi wymieniane przez klientki
**Brwi / rzęsy:**
- laminacja brwi (+ z farbką / z koloryzacją / sama)
- regulacja brwi
- henna brwi
- kolor brwi
- lifting rzęs
- laminacja rzęs
- brwi i rzęsy (bundle)

**Depilacja:**
- depilacja laserowa (laser)
- depilacja woskiem
- depilacja pach
- depilacja twarzy

**Pielęgnacja twarzy:**
- mezoterapia
- mezoterapia mikroigłowa
- mezoterapia igłowa
- stymulatory na twarzy
- konsultacja przed zabiegiem (samodzielna usługa)

**Makijaż:**
- makijaż permanentny (+ usuwanie laserem)
- makijaż okolicznościowy / event

**Inne:**
- powiększanie ust (kwas hialuronowy)
- zabieg (generyczne, treatment)
- pakiet (service combo / package)

### Czas-specyficzne wyrażenia (POLISH-SPECIFIC)
- "po dziesiątym" / "do dziesiątego"
- "ten weekend" / "przyszły weekend"
- "tak bardziej pod wieczór"
- "godziny popołudniowe / poranne / późne popołudniowe"
- "do południa / przed południem"
- "całe popołudnie" / "cały dzień"
- "ewentualnie / chyba że"
- "z samego rana"
- "po pracy" (after work, usually ~17:00+)
- "po zajęciach" (after school/uni)
- "tej drugiej połowy tygodnia"

### Życiowy kontekst który klientki dzielą (constraints)
- **Praca / zmiany**: "służba" (uniformed service like military/police), "praca do 17", "wpisali nadgodziny", "armagedon w pracy", "zamiana zmian", "muszę pracować w sobotę"
- **Dzieci**: "muszę odebrać syna od babci", "córka chce zostać sama", "mąż musi do pracy, mogę z córką przyjść?"
- **Inne wizyty / koordynacja**: "jestem u p. Daria na paznokcie", "wpisali lekarza", "mam wizytę u lekarza"
- **Podróże**: "muszę być w Słupsku", "ze Szczecina wracam", "dojazd ze Stargardu", "muszę zrezygnować z podróży"
- **Szkoła/studia**: "po zajęciach wracam", "zjazd na studiach", "studia w Poznaniu"
- **Choroba**: "chorobsko mnie rozkłada", "przeziębiłam się", "rozłożyło mnie", "nie chcę zarazić", "lekarz dał zwolnienie"
- **Finanse**: "nadprogramowe wydatki", "trochę napiętą sytuację"
- **Eventy**: "impreza w sobotę", "komunia z córką", "wesele", "integracja w pracy", "święta"
- **Awarie**: "wypadła naprawa auta", "mam problem z dojazdem"

---

## Wzorce flow konwersacji

### Wzór A: Multi-turn negocjacja terminu (DOMINUJĄCY, ~55%)
```
Klient: "Czy jest szansa na X?"
Salon:  "Niestety nie, mam ABC. Może Y?"
Klient: "Y też nie pasuje, a Z?"
Salon:  "Z może być, godzina N?"
Klient: "Pasuje 💗"
```
**3-7 wymian zanim termin ustalony.** AI MUSI wytrzymać back-and-forth bez frustracji.

### Wzór B: Cascade rebook (~30% reschedule wymaga tego)
```
Klient1: "Czy mogę przesunąć moją wizytę na popołudnie?"
Salon:  "Potrzebuję chwili żeby zapytać klientki..."
[Salon → Klient2]: "Czy mogłabyś przesunąć z popołudnia na rano?"
Klient2: "OK, mogę"
[Salon → Klient1]: "Tak, mogę przesunąć, popołudnie wolne"
```
KLUCZOWY pattern. AI musi **automatycznie pingnąć innych klientów** żeby ustalić cascade.

### Wzór C: Long-running rebook chain (~15%)
```
[Tydzień 1] Klient: cancel (choroba/praca)
[Tydzień 2-3] Cisza
[Tydzień 4] Salon: "zwolniło mi się X, czy mogłabyś?"
[Tydzień 4] Klient: "Pasuje, dzięki"
```

### Wzór D: Day-of confirmation + tweak
```
[Rano] Salon: "przypominam dzisiaj na X, proszę o potwierdzenie"
[Rano] Klient: "Będę 🤗 / Tak tak pamiętam"
[Albo] Klient: "Czy nasza wizyta aktualna?" (klient pierwszy pyta)
[Albo] Klient: "Mam pytanie, mogłabym chwilę szybciej? Mam X po pracy"
```

### Wzór E: First-time inquiry → sales consultation
```
Klient: "Czy wykonujesz X?"
Salon:  "Tak, oraz Y i Z. Jaki efekt Panią interesuje?"
Klient: "Chciałabym A, ale nie chcę B"
Salon:  "Pewnie zrobimy C, najlepiej w serii. Jeden zabieg X zł, seria 3 — Y zł"
Klient: "OK to się decyduję, czy w czwartek byłaby możliwość?"
```

### Wzór F: Service add-on / scope change
```
Klient: "Mam depilację 30. Czy moglibyśmy też laminację brwi? Mam imprezę"
Salon:  "Tak, dam radę dorzucić w jednym slocie"
```

### Wzór G: Photo consultation (IG DM)
```
Klient: "Hej kochana, prześlę zdjęcie rzęs bo mam wizytę. Czy uważasz że już robić czy poczekać?"
[zdjęcie]
Salon:  "Lepiej poczekać, niech naturalne podrosną"
```

---

## Edge cases — AI eskaluje do właścicielki

1. **Medical/contraindication questions** — "Czy zabieg X jest przeciwwskazaniem przy Y?"
2. **Pre-consultation skincare intake** — kosmetyki, leki, suplementy
3. **Pricing dla combo/serii** (consultation + zabieg discount, seria 3 zabiegów cena)
4. **Service recommendations** — "co mi polecisz przy X problem?"
5. **Photo evaluations** — klient wysyła zdjęcie i pyta o ocenę
6. **Emocjonalne sytuacje** — illness, financial hardship, family emergency
7. **B2B inquiries** — wynajem gabinetu, kolaboracje
8. **Coordinated multi-salon** — slot pomiędzy wizytami w 2 różnych miejscach
9. **Owner-side personal constraints conflict** — gdy klient chce slot kolidujący z osobistymi planami owner
10. **Standing wait-list management** — "zapisz mnie, jak coś będę pisała"

---

## Implikacje dla MVP system promptu

### Co AI MUSI umieć (Tier 1 — core)

1. **Multi-turn reschedule negotiation** — wielokrotne propose-counter-propose
2. **Tone matching** — formal "Pani" vs casual "hejka" vs no-fuss
3. **Kontekst klientki** — czytać "pracuję do 17, mam dziecko" → NIE proponować slotów 16-17
4. **Day-of reminders** — automatic message dzień przed + day-of z prośbą o confirm
5. **Slot consolidation** — gdy zwolni się slot, ping wait-list / klientki z gorszym slotem
6. **Cascade rebook orchestration** — propose to multiple clients to find common ground
7. **Service bundle awareness** — brwi+rzęsy = jeden slot, nie dwa
8. **Service duration awareness** — laminacja 90min, brwi 30min, etc.
9. **Day-of-week patterns** — owner ma "sobota = makijaże", "wtorek wolne" itd.
10. **Travel time awareness** — owner z drugiego miasta (np. 30-40 min dojazd)
11. **Day-of arrival updates** — "spóźnię się 5 min" → confirm, no escalation

### Co AI MUSI umieć (Tier 2 — important)

12. **Address sharing** — automatyczne wysłanie adresu z landmarkiem
13. **Basic service info** — co, ile czasu, ile kosztuje, czy bundle z czym
14. **Deposit (zadatek) request** — po confirm wizyty, prośba o BLIK
15. **Standing wait-list** — klient flexible "zapisz mnie, dam znać jak coś będę"
16. **New booking with date range** — klient daje wiele opcji, AI sprawdza calendar
17. **Owner vacation/away periods** — w okresie urlopu nie umawiać

### Co AI MUSI eskalować (Tier 3 — ALWAYS human)

- Medical/contraindication questions
- Pre-consultation skincare intake
- Pricing combos / serie / promocje
- Photo evaluations
- Emotional situations (illness, family emergency, financial)
- B2B inquiries (gabinet rental)
- First-time service recommendations
- Complex multi-salon coordination

---

## Suggested system prompt skeleton

```
Jesteś asystentką salonu beauty {SALON_NAME}.
Twoim zadaniem: ZARZĄDZANIE TERMINAMI klientek przez Messenger, Instagram, SMS, email.

═══════════════════════════════════════════
ZNASZ:
═══════════════════════════════════════════
- Cennik: {PRICING_TABLE}
- Godziny otwarcia: {WORKING_HOURS}
- Czas usług: brwi 30min, rzęsy 60min, laminacja brwi 90min, laser 30-60min, etc.
- Bundle: brwi+rzęsy = 1 slot, henna+regulacja = 1 slot
- Wolne terminy: {LIVE_CALENDAR}
- Owner constraints: dojazd 30-40min ze Szczecina, sobota = makijaże, wtorek do 14
- Owner vacation: {VACATION_PERIODS}
- Klientka historia (jeśli zna): {CLIENT_HISTORY} — preferred times, services, payment, contact channel

═══════════════════════════════════════════
ZASADY KOMUNIKACJI:
═══════════════════════════════════════════
1. **Dostosuj ton do klientki**:
   - "Dzień dobry / Pani" → odpowiadasz formalnie "Pani / Pani Olu"
   - "hej / hejka / kochana" → odpowiadasz casual "hejka 🤍 / hej 💗"
   - Krótka odpowiedź klientki → krótka odpowiedź Twoja

2. **Mów w 1. osobie żeńskiej**:
   - "Zapisuję Cię na…"
   - "Mogę zaproponować…"
   - "Sprawdzam terminy…"
   - "Zarezerwowałam Ci…"

3. **Używaj emoji subtelnie** — 💗 ❤️ 🤍 🥰 — nie spamuj

═══════════════════════════════════════════
ZASADY OPERACYJNE:
═══════════════════════════════════════════
4. **Reschedule = 80% wiadomości**. Zawsze gotowa pomóc, NIE robi problemu.

5. **Klient dzieli kontekst (praca, dziecko, choroba) — UWZGLĘDNIJ** w propozycjach:
   - "pracuję do 17" → NIE proponuj 16:30
   - "mam dziecko od babci, muszę odebrać" → krótkie wizyty
   - "ze Stargardu mam dojazd" → wcześniej info o czasie

6. **Proponuj 2 alternatywne sloty**, nie 1. Dwa to wybór, jeden to ultimatum.

7. **Po decyzji klientki** — zarezerwuj i potwierdź ze szczegółami:
   "Świetnie! Zapisuję: [dzień] [godzina], [usługa], [cena]. [Szczegóły płatności / SMS]"

8. **Cascade rebook**: jeśli klientka chce slot zajęty przez kogoś innego, sprawdź wait-list i zaproponuj propozycję drugiej klientce.

9. **Day-of reminder** wysyłaj rano (8:00-10:00) z prośbą o potwierdzenie:
   "hej, przypominam dzisiaj na [godzina], proszę o potwierdzenie 🤍"

10. **Slot consolidation**: gdy ktoś cancel, automatycznie ping wait-list:
    "Cześć! Zwolniło mi się miejsce na [data] [godzina], czy interesowałaby Cię?"

═══════════════════════════════════════════
ESKALUJ DO {OWNER_NAME} GDY:
═══════════════════════════════════════════
- Pytanie medyczne / przeciwwskazania
- Pre-consultation skincare intake (kosmetyki, leki, suplementy)
- Pricing combos / promocje / serie
- Klientka wysyła zdjęcie z pytaniem
- Emocjonalna sytuacja (choroba, śmierć, problemy finansowe)
- B2B (wynajem gabinetu, kolaboracje)
- First-time consultation o nowym zabiegu
- Klientka emocjonalna / niezadowolona

W przypadku eskalacji powiedz:
"Pozwól, że dopytam właścicielkę i wrócę do Ciebie 🤍"
Następnie wyślij {OWNER_NAME} powiadomienie z kontekstem.
```

---

## Następne kroki

### Faza 1: Walidacja przez dziewczynę (Wizard of Oz) — 1 tydzień

**Setup**:
1. Dziewczyna forwarduje nowe wiadomości na Twój WhatsApp/Slack
2. Ty (lub Claude) z system promptem powyżej generuje sugestię odpowiedzi
3. Ona kopiuje / edytuje / wysyła
4. Mierzysz: % używanych bez modyfikacji, % wymagających edycji, % do eskalacji

**Cel po tygodniu**: 65%+ odpowiedzi AI używanych bez modyfikacji, system prompt iterowany na żywych przykładach.

### Faza 2: MVP build (tygodnie 2-6)

1. Auth + multi-tenant (Supabase RLS)
2. Calendar storage (Supabase) + UI dla właścicielki + cennik / godziny / usługi config
3. Meta Business API (Messenger + Instagram) — submit App Review w tygodniu 1
4. IMAP/Gmail integration
5. SMS bramka (SerwerSMS / SMSAPI)
6. Claude API z system promptem z tego dokumentu (per-tenant override)
7. **Cascade rebook orchestrator** — Tier 1 priorytet (30% reschedule wymaga tego)
8. Day-of reminder cronjob (8:00-10:00 outreach)
9. Slot consolidation pinger (gdy ktoś cancel, auto-ping wait-list)
10. Deposit BLIK integration (Stripe / Przelewy24)
11. Eskalacja queue dla właścicielki + push notification

### Faza 3: Beta z 2 salonami (tygodnie 7-9)

Dziewczyna + siostra jako pierwsi beta-testerzy. Live tracking:
- accuracy %
- escalations / day
- average response time
- klientka satisfaction (czasami zapytać)

### Faza 4: Cold acquisition (tygodnie 10+)

Z LIVE produktem + 2 case studies. DM-y z proof.
