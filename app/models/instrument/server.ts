export type Instrument =
  // Woodwinds
  | "Bassoon"
  | "Clarinet"
  | "Contrabassoon"
  | "English Horn"
  | "Flute"
  | "Oboe"
  | "Piccolo"
  | "Saxophone"
  // Keyboards
  | "Piano"
  // Brass
  | "French Horn"
  | "Trombone"
  | "Trumpet"
  | "Tuba"
  // Strings
  | "Cello"
  | "Viola"
  | "Violin"
  // Percussion
  | "Drum"
  | "Tympani"
  | "Xylophone"
  | "Tubed Percussion";

export type InstrumentFamily =
  | "Woodwinds"
  | "Keyboard"
  | "Brass"
  | "Strings"
  | "Percussion";

export type InstrumentMap = {
  [K in InstrumentFamily]: Instrument[];
};
