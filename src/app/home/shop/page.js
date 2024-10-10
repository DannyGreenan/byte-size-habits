"use client";

import { useState, useEffect } from "react";
import ItemCard from "@/app/components/ItemCard";
import { fetchItems } from "@/app/models/items.model";

function Shop() {
  const [items, setAllItems] = useState([]);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    fetchItems(setAllItems);
  }, []);

  return (
    <section className="relative py-10">
      <div className="container mx-auto">
        <div className="mockup-window bg-neutral  border-2 border-accent">
          <div className="bg-base-200 flex text-base-content font-nunito font-extrabold text-3xl justify-center px-4 py-4">
            Item Shop
          </div>
        </div>
        <h1 className="font-nunito text-4xl font-bold text-center text-white"></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.length > 0
            ? items.map((item, index) => (
                <div id={index} className=" flex justify-center px-4 py-2">
                  <ItemCard index={index} item={item} />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default Shop;
