import type { InstrumentMap } from "./server";

export const INSTRUMENT_TYPES = {
  WOODWINDS: "Woodwinds" as const,
  KEYBOARD: "Keyboard" as const,
  BRASS: "Brass" as const,
  STRINGS: "Strings" as const,
  PERCUSSION: "Percussion" as const,
};

export const INSTRUMENT_FAMILIES: InstrumentMap = {
  Woodwinds: [
    "Bassoon",
    "Clarinet",
    "Contrabassoon",
    "English Horn",
    "Flute",
    "Oboe",
    "Piccolo",
    "Saxophone",
  ],
  Keyboard: ["Piano"],
  Brass: ["French Horn", "Trombone", "Trumpet", "Tuba"],
  Strings: ["Cello", "Viola", "Violin"],
  Percussion: ["Drum", "Tympani", "Xylophone", "Tubed Percussion"],
};
