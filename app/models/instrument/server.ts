import { supabase } from "../user.server";

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

export type InstrumentRelation = {
  instrument: { id: string; name: string };
};

export type InstrumentRecord = {
  id: string;
  name: string;
};

export async function getInstruments(): Promise<InstrumentRecord[]> {
  const { data } = await supabase.from("instruments").select("id, name");
  if (data) return data;

  return [];
}

export async function getInstrumentsByProfileId(
  id: string
): Promise<InstrumentRelation[]> {
  const { data, error } = await supabase
    .from("profile_instruments")
    .select(
      `
      instrument:instrument_id (id, name)
    `
    )
    .eq("profile_id", id);
  if (data) return data as InstrumentRelation[];
  return [];
}
