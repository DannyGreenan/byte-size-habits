import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function getPet(pet_id, setPet = null) {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .select("*")
    .eq("pet_id", pet_id)
    .single();

  if (error) {
    console.error("Error fetching pet:", error);
    return null;
  } else {
    if (setPet) setPet(data);
    return data;
  }
}

export async function patchPet(pet_id, updates, returnFunction, key) {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .update(updates)
    .eq("pet_id", pet_id)
    .select();

  if (error) {
    console.error("Error updating user:", error);
  } else {
    console.log("Pet updated successfully:", data);
    if (key) returnFunction(updates[key]);
    return data[0];
  }
}

export async function addPet() {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .upsert([{}])
    .select();

  if (error) {
    console.error("Error adding user:", error);
  } else {
    console.log("pet added successfully:", data);
    return data[0];
  }
}
