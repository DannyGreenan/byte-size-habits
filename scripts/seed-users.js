import { supabaseServerClient } from "../src/lib/supabaseServerClient.js";

export async function seedUsers() {
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
  };

  const date = new Date();
  console.log(date.addDays(1));
  console.log(date.addDays(2));
  const users = [
    {
      username: "john_doe",
      currency: 100,
      goal: "Complete coding challenges",

      streak: 5,
      difficulty: "45",
      pet_id: 1,

      progress: [
        { date: date, time: 60 },
        { date: date.addDays(1), time: 45 },
        { date: date.addDays(2), time: 30 },
        { date: date.addDays(3), time: 60 },
        { date: date.addDays(4), time: 30 },
      ],
    },
    {
      username: "jane_doe",
      currency: 200,
      goal: "Read tech articles",

      streak: 7,
      difficulty: "hard",
      pet_id: 2,

      progress: [
        { date: date, time: 30 },
        { date: date.addDays(1), time: 60 },
        { date: date.addDays(2), time: 60 },
        { date: date.addDays(3), time: 45 },
        { date: date.addDays(4), time: 30 },
      ],
    },
  ];

  const { error } = await supabaseServerClient.from("users").insert(users);
  if (error) {
    console.error("Seeding Users Error:", error);
  } else {
    console.log("Users Seeded Successfully");
  }
}
