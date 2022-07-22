import { createClient } from "@supabase/supabase-js";
import invariant from "tiny-invariant";
export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

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

export async function createStudent(userId: string, formData: FormData) {
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const profile = await findProfile(firstName, lastName);
  // todo: handle case when profile is not found
  const newStudent = {
    id: userId,
    student_id: profile.id,
    instrument_id: formData.get("instrument"),
    start_year: formData.get("startYear"),
    end_year: formData.get("endYear"),
  };
  const { error } = await supabase.from("profile_students").insert(newStudent);
  if (error) {
    throw error;
  }
}

export async function createTeacher(userId: string, formData: FormData) {
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const profile = await findProfile(firstName, lastName);
  const newTeacher = {
    id: userId,
    teacher_id: profile.id,
    instrument_id: formData.get("instrument"),
    start_year: formData.get("startYear"),
    end_year: formData.get("endYear"),
  };
  const { error } = await supabase.from("profile_teachers").insert(newTeacher);
  if (error) {
    throw error;
  }
}

export async function deleteStudent(userId: string, studentId: string) {
  const { error } = await supabase
    .from("profile_students")
    .delete()
    .eq("id", userId)
    .eq("student_id", studentId);
  if (error) {
    throw error;
  }
}

export async function deleteTeacher(userId: string, teacherId: string) {
  const { error } = await supabase
    .from("profile_teachers")
    .delete()
    .eq("id", userId)
    .eq("teacher_id", teacherId);
  if (error) {
    throw error;
  }
}

export async function getTeachers(userId: string): Promise<Teacher[]> {
  const { data, error } = await supabase
    .from("profile_teachers")
    .select("teacher:teacher_id(id, firstName, lastName)")
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data as Teacher[];
}

export async function getStudents(userId: string): Promise<Student[]> {
  const { data, error } = await supabase
    .from("profile_students")
    .select("student:student_id(id, firstName, lastName)")
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data as Student[];
}

export type Student = {
  student: { id: string; firstName: string; lastName: string };
};

export type Teacher = {
  teacher: { id: string; firstName: string; lastName: string };
};

async function findProfile(
  firstName: string | undefined,
  lastName: string | undefined
): Promise<User> {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("firstName", firstName)
    .eq("lastName", lastName)
    .single();
  if (error) {
    console.log(error);
  }
  return data;
}
