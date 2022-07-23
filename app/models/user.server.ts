import { createClient } from "@supabase/supabase-js";
import invariant from "tiny-invariant";
export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
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
    auth_id: user?.id,
    first_name: firstName,
    last_name: lastName,
    email,
  };
  const { data: profile, error } = await supabase
    .from("profilesv2")
    .upsert(updates);
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
      let newInstrument = { profile_id: profile[0].id, instrument_id: data.id };
      let { error } = await supabase
        .from("profile_instrumentsv2")
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
    .from("profilesv2")
    .select("email, id, first_name, middle_name, last_name, auth_id")
    .eq("id", id)
    .single();

  if (error) return null;
  if (data) return data;
}

export async function getProfileByEmail(email?: string) {
  const { data, error } = await supabase
    .from("profilesv2")
    .select("email, auth_id, id")
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
  const profile = await getOrCreateProfile(formData);
  const newStudent = {
    id: userId,
    student_id: profile?.id,
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
  const profile = await getOrCreateProfile(formData);
  const newTeacher = {
    id: userId,
    teacher_id: profile?.id,
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
    .select("teacher:teacher_id(id, first_name, middle_name, last_name)")
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data as Teacher[];
}

export async function getStudents(userId: string): Promise<Student[]> {
  const { data, error } = await supabase
    .from("profile_students")
    .select("student:student_id(id, first_name, middle_name, last_name)")
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data as Student[];
}

export type Student = {
  student: {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
  };
};

export type Teacher = {
  teacher: {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
  };
};

async function findProfile(
  firstName: string,
  lastName: string
): Promise<User[]> {
  const { data, error } = await supabase
    .from("profilesv2")
    .select()
    .ilike("first_name", firstName)
    .ilike("last_name", lastName);
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

async function findProfileWithMiddle(
  firstName: string,
  lastName: string,
  middleName: string
): Promise<User[]> {
  const { data, error } = await supabase
    .from("profilesv2")
    .select()
    .ilike("first_name", firstName)
    .ilike("last_name", lastName)
    .ilike("middle_name", middleName);
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

async function getOrCreateProfile(formData: FormData): Promise<User> {
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const middleName = formData.get("middleName")?.toString();
  let profiles: User[] = [];
  if (firstName && lastName && middleName) {
    profiles = await findProfileWithMiddle(firstName, lastName, middleName);
  } else if (firstName && lastName) {
    profiles = await findProfile(firstName, lastName);
  }
  let profile: User | null;
  if (profiles.length === 1) {
    profile = profiles[0];
  } else if (profiles.length === 0) {
    const { data, error } = await supabase
      .from("profilesv2")
      .insert({
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
      });
    if (error) {
      throw error;
    }
    profile = data[0] as User;
  } else if (profiles.length > 1) {
    throw new Error("multiple profiles match the given criteria");
  } else {
    throw new Error("unable to find or create profile for student/teacher");
  }
  return profile;
}
