import test from "node:test";
import assert from "node:assert/strict";
import {
  WHATSAPP_NUMBER,
  VR_EXPERIENCES,
  filterExperiences,
  calculateEstimatedTurns,
  validateQuoteForm,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  QuoteFormState,
} from "./booking";

test("WHATSAPP_NUMBER constant is defined with 919403825153", () => {
  assert.equal(WHATSAPP_NUMBER, "919403825153");
});

test("filterExperiences filters VR games accurately by category", () => {
  const all = filterExperiences(VR_EXPERIENCES, "all");
  assert.equal(all.length, 6);

  const weddings = filterExperiences(VR_EXPERIENCES, "weddings");
  assert.ok(weddings.some((g) => g.title === "iB Cricket"));
  assert.ok(weddings.some((g) => g.title === "Walk the Plank"));

  const kids = filterExperiences(VR_EXPERIENCES, "kids");
  assert.ok(kids.some((g) => g.title === "Angry Birds VR: Isle of Pigs"));
  assert.ok(kids.some((g) => g.title === "Fruit Ninja VR"));
});

test("calculateEstimatedTurns computes hourly and total turns from package tier", () => {
  const starter = calculateEstimatedTurns("starter");
  assert.equal(starter.turnsPerHour, 15);
  assert.equal(starter.totalTurns, 38);

  const signature = calculateEstimatedTurns("signature");
  assert.equal(signature.turnsPerHour, 30);
  assert.equal(signature.totalTurns, 90);

  const grand = calculateEstimatedTurns("grand");
  assert.equal(grand.turnsPerHour, 60);
  assert.equal(grand.totalTurns, 240);
});

test("validateQuoteForm requires eventDate and valid guestCountEstimate", () => {
  const invalidState: QuoteFormState = {
    eventType: "Birthday Party",
    packageTier: "signature",
    eventDate: "",
    cityArea: "Pune (Koregaon Park / Baner / Wakad / Kothrud)",
    customNeighborhood: "Baner",
    venueType: "Home",
    guestCountEstimate: 2,
    hostName: "Aarav",
  };

  const res1 = validateQuoteForm(invalidState);
  assert.equal(res1.valid, false);
  assert.ok(res1.errors.eventDate);
  assert.ok(res1.errors.guestCountEstimate);

  const validState: QuoteFormState = {
    ...invalidState,
    eventDate: "2026-12-12",
    guestCountEstimate: 45,
  };
  const res2 = validateQuoteForm(validState);
  assert.equal(res2.valid, true);
  assert.equal(Object.keys(res2.errors).length, 0);
});

test("buildWhatsAppMessage and buildWhatsAppUrl include all selected quote fields", () => {
  const state: QuoteFormState = {
    eventType: "Wedding",
    packageTier: "grand",
    eventDate: "2026-12-20",
    cityArea: "Lonavala & Aamby Valley Resorts",
    customNeighborhood: "Della Adventure Resort",
    venueType: "Banquet Hall",
    guestCountEstimate: 150,
    hostName: "Rohan Sharma",
  };

  const msg = buildWhatsAppMessage(state);
  assert.ok(msg.includes("Rohan Sharma"));
  assert.ok(msg.includes("Wedding"));
  assert.ok(msg.includes("Grand Wedding Arena (₹24,999)"));
  assert.ok(msg.includes("2026-12-20"));
  assert.ok(msg.includes("Lonavala & Aamby Valley Resorts (Della Adventure Resort)"));
  assert.ok(msg.includes("Banquet Hall"));

  const url = buildWhatsAppUrl(msg);
  assert.ok(url.startsWith("https://wa.me/919403825153?text="));
  assert.ok(url.includes(encodeURIComponent("Wedding")));
});

test("packages and experiences omit masks, tournaments, and funfairs and state TV not included (venue TV or laptop stream)", async () => {
  const { PACKAGE_TIERS } = await import("./booking");
  for (const tier of PACKAGE_TIERS) {
    assert.ok(
      tier.displaySpec.includes("TV Not Included"),
      `Expected ${tier.id} displaySpec to mention TV Not Included`
    );
    const serialized = JSON.stringify(tier).toLowerCase();
    assert.equal(serialized.includes("mask"), false);
    assert.equal(serialized.includes("tournament"), false);
    assert.equal(serialized.includes("funfair"), false);
    assert.equal(serialized.includes("mela"), false);
  }
  const serializedGames = JSON.stringify(VR_EXPERIENCES).toLowerCase();
  assert.equal(serializedGames.includes("mask"), false);
  assert.equal(serializedGames.includes("tournament"), false);
  assert.equal(serializedGames.includes("funfair"), false);
  assert.equal(serializedGames.includes("mela"), false);
});

test("buildWhatsAppMessage supports Cafe Pop-Up / Venue Partnership event type", () => {
  const cafeState: QuoteFormState = {
    eventType: "Cafe Pop-Up / Venue Partnership",
    packageTier: "custom",
    eventDate: "2026-12-18",
    cityArea: "Pune (Koregaon Park / Baner / Wakad / Kothrud)",
    customNeighborhood: "Koregaon Park Lane 7",
    venueType: "Clubhouse",
    guestCountEstimate: 80,
    hostName: "Cafe Brew",
  };
  const msg = buildWhatsAppMessage(cafeState);
  assert.ok(msg.includes("Event Type: Cafe Pop-Up / Venue Partnership"));
  assert.ok(msg.includes("Custom / B2B Partner Stall"));
});


