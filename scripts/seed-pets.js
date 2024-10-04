import { supabaseServerClient } from "../src/lib/supabaseServerClient.js";

export async function seedPets() {
  const pets = [
    { hunger: 50, energy: 80, daily_habit_complete: true },
    { hunger: 30, energy: 60, daily_habit_complete: false },
    { hunger: 90, energy: 40, daily_habit_complete: true },
  ];

  const { error } = await supabaseServerClient.from("pets").insert(pets);
  if (error) {
    console.error("Seeding Pets Error:", error);
  } else {
    console.log("Pets Seeded Successfully");
  }
}
