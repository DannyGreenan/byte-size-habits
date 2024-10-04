import { supabaseServerClient } from "../src/lib/supabaseServerClient.js";

export async function seedShop() {
  const shopItems = [
    {
      description: "Shoes",
      cost: 100,
      image: "/shoes.jpeg",
    },
    {
      description: "Keyboard",
      cost: 160,
      image: "/keyboard.jpeg",
    },
    {
      description: "Hat",
      cost: 200,
      image: "/hat.jpeg",
    },
    {
      description: "Bag",
      cost: 180,
      image: "/bag.jpeg",
    },
    {
      description: "Sunglasses",
      cost: 100,
      image: "/sunglasses.jpeg",
    },
    {
      description: "Gloves",
      cost: 250,
      image: "/gloves.jpeg",
    },
  ];

  const { error } = await supabaseServerClient.from("shop").insert(shopItems);
  if (error) {
    console.error("Seeding Shop Error:", error);
  } else {
    console.log("Shop Items Seeded Successfully");
  }
}
