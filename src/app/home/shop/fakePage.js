"use client";

import { useContext, useEffect, useState } from "react";
import { fetchItems } from "../../models/items.model";
import Image from "next/image";
import { UserContext } from "@/app/UserContext";
import { patchUser } from "../../models/profile.model";

export default function AllItems() {
  let user = useContext(UserContext);

  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetchItems(setAllItems);
  }, []);
  const handleBuy = (event) => {
    const newItem = event.target.value;
    const currentItems = user.stored_items;
    patchUser(user.user_id, { stored_items: [...currentItems, newItem] });
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
