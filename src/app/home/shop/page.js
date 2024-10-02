"use client";

import ItemCard from "@/app/components/ItemCard";
import { supabaseBrowserClient } from "@/lib/supabaseBrowserClient";
const Shop = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Item 2",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Item 3",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Item 4",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Item 5",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Item 6",
      price: "10 Coins",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-nunito text-4xl font-bold text-center text-white mb-6">
        Shop Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
