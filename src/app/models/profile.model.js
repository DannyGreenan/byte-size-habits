import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function fetchUser(username) {
  const { data: user, error } = await supabaseServerClient
    .from("users")
    .select("*")
    .eq("username", username)
    .single();
  if (error) {
    console.error("Error fetching user:", error);
    throw Error("Error loading User");
  } else {
    return user;
  }
}

export async function fetchAllUsers() {
  const { data: users, error } = await supabaseServerClient
    .from("users")
    .select("*");
  if (error) {
    console.error("Error fetching users:", error);
    throw Error("Error loading Users");
  } else {
    return users;
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

export async function addUser(userPlaceholder) {
  const { data, error } = await supabaseServerClient
    .from("users")
    .upsert([userPlaceholder])
    .select();
  if (error) {
    console.error("Error adding user:", error);
  } else {
    console.log("User added successfully:", data);
    return data[0];
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
