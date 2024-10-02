import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function getPet(pet_id, setPet) {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .select("*")
    .eq("pet_id", pet_id)
    .single();

  if (error) {
    console.error("Error fetching pet:", error);
    return null;
  } else {
    setPet(data);
  }
}

export async function patchPet(pet_id, updates, returnFunction, key) {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .update(updates)
    .eq("pet_id", pet_id);

  if (error) {
    console.error("Error updating user:", error);
  } else {
    console.log("Pet updated successfully:", data);
    console.log(updates[key]);
    returnFunction(updates[key]);
  }
}

export async function addPet(newPet) {
  const { data, error } = await supabaseServerClient
    .from("pets")
    .upsert([newPet]);
  if (error) {
    console.error("Error adding user:", error);
  } else {
    console.log("User added successfully:", data);
  }
}
