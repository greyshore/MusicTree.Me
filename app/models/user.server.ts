import { createClient } from "@supabase/supabase-js";
import invariant from "tiny-invariant";
export type User = { id: string; email: string };

// Abstract this away
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

invariant(
  supabaseUrl,
  "SUPABASE_URL must be set in your environment variables."
);
invariant(
  supabaseAnonKey,
  "SUPABASE_URL must be set in your environment variables."
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signUp(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  instruments: string
): Promise<User> {
  const { data: existingProfile } = await getProfileByEmail(email);
  if (existingProfile) throw new Error("User already exists, please log in");

  const { user, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (signUpError) {
    throw signUpError;
  }
  const updates = {
    id: user?.id,
    firstName,
    lastName,
    email,
    created_at: new Date(),
  };
  const { error } = await supabase.from("profiles").upsert(updates);
  if (error) {
    throw error;
  }
  instruments.split(",").forEach(async (instrument) => {
    if (instrument.trim().length > 0) {
      // adding debug for issue in dev
      console.log(instrument.trim());
      let { data, error: instrumentError } = await supabase
        .from("instruments")
        .select("id")
        .eq("name", instrument.trim())
        .single();
      if (instrumentError) throw instrumentError;
      let newInstrument = { profile_id: user?.id, instrument_id: data.id };
      let { error } = await supabase
        .from("profile_instruments")
        .insert(newInstrument);
      if (error) throw error;
    }
  });
  // get the user profile after created
  const { data: newProfile, error: fetchError } = await getProfileByEmail(
    user?.email
  );
  if (fetchError) throw fetchError;

  return newProfile;
}

export async function getProfileById(id: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("email, id, firstName, lastName")
    .eq("id", id)
    .single();

  if (error) return null;
  if (data) return data;
}

export type InstrumentName = {
  instrument: { name: string };
};

export async function getInstrumentsByProfileId(
  id: string
): Promise<InstrumentName[]> {
  const { data, error } = await supabase
    .from("profile_instruments")
    .select(
      `
      instrument:instrument_id (name)
    `
    )
    .eq("profile_id", id);
  if (data) return data as InstrumentName[];
  return [];
}

export async function getProfileByEmail(email?: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("email, id")
    .eq("email", email)
    .single();

  return { data, error };
}

export async function verifyLogin(email: string, password: string) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) throw error;
  const { data: profile, error: fetchError } = await getProfileByEmail(
    user?.email
  );
  if (fetchError) throw fetchError;

  return profile;
}

export async function createStudent(userId: string, studentEmail: string) {
  const { data } = await getProfileByEmail(studentEmail);
  const newStudent = { id: userId, student_id: data.id };
  const { error } = await supabase.from("profile_students").insert(newStudent);
  if (error) {
    throw error;
  }
}
