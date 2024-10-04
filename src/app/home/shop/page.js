"use client";

import { useState, useEffect } from "react";

import ItemCard from "@/app/components/ItemCard";
import { fetchItems } from "@/app/models/items.model";

const Shop = () => {
  const [items, setAllItems] = useState([]);

  useEffect(() => {
    fetchItems(setAllItems);
  }, []);

  return (
    <div>
      <section
        className="relative py-10"
        style={{
          backgroundImage: `url('/background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container mx-auto p-6">
          <h1 className="font-nunito text-4xl font-bold text-center text-white mb-6">
            Shop Page
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.length > 0
              ? items.map((item, index) => (
                  <div id={index} className=" flex justify-center px-4 py-16">
                    <ItemCard index={index} item={item} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
