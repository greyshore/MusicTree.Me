export type Instrument =
  // Woodwinds
  | "Bassoon"
  | "Contrabassoon"
  | "English Horn"
  | "Oboe"
  | "Clarinet"
  | "Bass Clarinet"
  | "Flute"
  | "Piccolo"
  | "Alto Saxophone"
  | "Baritone Saxophone"
  | "Soprano Saxophone"
  | "Tenor Saxophone"
  // Keyboards
  | "Harpsichord" 
  | "Organ"
  | "Piano"
  // Brass
  | "Baritone/Euphonium" 
  | "French Horn"
  | "Trombone"
  | "Bass Trombone"
  | "Trumpet/Coronet"
  | "Tuba/Sousaphone"
  // Strings
  | "Bass"
  | "Cello"
  | "Harp"
  | "Viola"
  | "Violin"
  // Percussion
  | "Drum"
  | "Timpani"
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
