"use client";

import { useContext, useEffect, useState } from "react";
import { fetchItems } from "../shop/itemsAPI";
import Image from "next/image";
import { UserContext } from "@/app/providers";
import { patchUser } from "../profile/profileAPI";

export default function AllItems() {
  let user_id = useContext(UserContext);

  const [allItems, setAllItems] = useState([]);
  const [buyItem, setBuyItem] = useState("");
  useEffect(() => {
    fetchItems(setAllItems);
  }, []);
  const handleBuy = (event) => {
    setBuyItem(event.target.value);
    patchUser(user_id, { items: event.target.value });
  };

  return (
    <div>
      {allItems.map((item) => {
        return (
          <ul key={item.item_id}>
            <li>{item.description}</li>
            <Image src={item.image} alt={item.item_id} />
            <li>Cost: {item.cost}</li>
            <button onClick={handleBuy} value={item.description}>
              Buy now!
            </button>
          </ul>
        );
      })}
    </div>
  );
}
