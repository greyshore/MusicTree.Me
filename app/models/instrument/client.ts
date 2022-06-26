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
    "Contrabassoon",
    "English Horn",
    "Oboe",
    "Clarinet",
    "Bass Clarinet",
    "Flute",
    "Piccolo",
    "Alto Saxophone",
    "Baritone Saxophone",
    "Soprano Saxophone",
    "Tenor Saxophone"
  ],
  Keyboard: ["Harpsichord", "Organ", "Piano"],
  Brass: ["Baritone/Euphonium", "French Horn", "Trombone", "Bass Trombone", "Trumpet/Coronet", "Tuba/Sousaphone"],
  Strings: ["Bass", "Cello", "Harp", "Viola", "Violin"],
  Percussion: ["Drum", "Timpani", "Xylophone", "Tubed Percussion"],
};
