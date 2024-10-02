"use client";

import ItemCard from "@/app/components/ItemCard";
import { supabaseBrowserClient } from "@/lib/supabaseBrowserClient";
const Shop = () => {
  const items = [
    {
      id: 1,
      name: "Shoes",
      price: "100 Coins",
      image: "/shoes.jpeg",
    },
    {
      id: 2,
      name: "Keyboard",
      price: "160 Coins",
      image: "/keyboard.jpeg",
    },
    {
      id: 3,
      name: "Hat",
      price: "200 Coins",
      image: "/hat.jpeg",
    },
    {
      id: 4,
      name: "Bag",
      price: "180 Coins",
      image: "/bag.jpeg",
    },
    {
      id: 5,
      name: "Sunglasses",
      price: "100 Coins",
      image: "/sunglasses.jpeg",
    },
    {
      id: 6,
      name: "Gloves",
      price: "250 Coins",
      image: "/gloves.jpeg",
    },
  ];

  return (
    <div>
      <section className="relative py-10">
        <div
          className="bottom-auto top-7 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <path
              className="text-byteOrange fill-current"
              d="M0,60 C400,100 1200,0 2560,60 L2560,100 L0,100 Z"></path>
          </svg>
        </div>
        <div className="container mx-auto p-6">
          <h1 className="font-nunito text-4xl font-bold text-center text-white mb-6">
            Shop Page
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <ItemCard id={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
