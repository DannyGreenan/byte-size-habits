import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function fetchUser(user_id, setCurrentUser, setTopic) {
  const { data: user, error } = await supabaseServerClient
    .from("users")
    .select("*")
    .eq("user_id", user_id)
    .single();
  if (error) {
    console.error("Error fetching user:", error);
    throw Error("Error loading User");
  } else {
    setCurrentUser(user);
    setTopic(user.goal);
  }
}

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

export async function addUser(newUser) {
  const { data, error } = await supabaseServerClient
    .from("users")
    .insert([newUser]);

  if (error) {
    console.error("Error adding user:", error);
  } else {
    console.log("User added successfully:", data);
  }
}

export async function deleteUser(user_id) {
  const { data, error } = await supabaseServerClient
    .from("users")
    .delete()
    .eq("user_id", user_id);

  if (error) {
    console.error("Error deleting user:", error);
  } else {
    console.log("User deleted successfully:", data);
  }
}
