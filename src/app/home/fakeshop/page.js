"use client";

import { useEffect, useState } from "react";
import { fetchItems } from "../shop/itemsAPI";
import Image from "next/image";

export default function AllItems() {
  const [allItems, setAllItems] = useState([]);
  const [buyItem, setBuyItem] = useState("");
  useEffect(() => {
    fetchItems(setAllItems);
  }, []);
  const handleBuy = (event) => {
    setBuyItem(event.target.value);
  };
  console.log(buyItem);
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
