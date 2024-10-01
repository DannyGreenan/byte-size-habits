import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function patchUser(user_id, updates) {
  const { data, error } = await supabaseServerClient
    .from("users")
    .update(updates)
    .eq("user_id", user_id);

  if (error) {
    console.error("Error updating user:", error);
  } else {
    console.log("User updated successfully:", data);
  }
}
