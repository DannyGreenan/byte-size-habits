import { supabaseServerClient } from "@/lib/supabaseServerClient";

export async function fetchItems(setAllItems) {
  const { data: shopItems, error } = await supabaseServerClient
    .from("shop")
    .select("*");
  if (error) {
    console.error("Error fetching shop items:", error);
    throw Error("Error loading shop items");
  } else {
    setAllItems(shopItems);
  }
}

export async function fetchItemsByID() {
  const { data: shopItems, error } = await supabaseServerClient
    .from("shop")
    .select("*")
    .eq("shopItems_id", shopItems_id)
    .single();
  if (error) {
    console.error("Error fetching shop items:", error);
    throw Error("Error loading shop items");
  }
}
