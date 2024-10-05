"use client";

import { useState, useEffect } from "react";

import ItemCard from "@/app/components/ItemCard";
import { fetchItems } from "@/app/models/items.model";

const Shop = () => {
  const [items, setAllItems] = useState([]);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    fetchItems(setAllItems);
  }, []);

  return (
    <section className="relative py-10">
      <div className="container mx-auto">
        <h1 className="font-nunito text-4xl font-bold text-center text-white">
          Shop Page
        </h1>
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
};

export default Shop;
