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
            {items.length > 0
              ? items.map((item, index) => <ItemCard id={index} item={item} />)
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
