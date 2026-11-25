import * as fs from "node:fs";

// The Funniest Sick-Day Excuse — revised: cut the throat-clearing
// ("today", "first thing this morning", "on the living room floor",
// "for the rest of the day", "quietly") so every word earns its place
// and the twist lands on the last word. Deterministic: one fixed line,
// no network, no clock, no randomness.
const ENTRY =
  "Morning, sorry \u2014 can't come in. I threw my back out sneezing, and my physio says the only cure is lying completely still and resenting the sneeze.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
