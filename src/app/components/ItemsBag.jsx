"use clinet";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Image from "next/image";

const ItemBag = () => {
  const { loggedInUser } = useContext(UserContext);
  const [storedItems, setStoredItems] = useState([]);

  useEffect(() => {
    if (loggedInUser && loggedInUser.stored_items) {
      setStoredItems(loggedInUser.stored_items);
    }
  }, [loggedInUser]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center "
      style={{
        transform: "skewY(-2deg) translateX(30px) translateY(-215px)",
      }}>
      {storedItems.length > 0 ? (
        <div>
          <ul className="grid grid-cols-3 gap-2">
            {storedItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="relative flex flex-col justify-center items-center py-2 group">
                  <div className="indicator relative">
                    <span className="indicator-item badge badge-primary absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {item}
                    </span>

                    <Image
                      src={`/${item.toLowerCase()}.jpeg`}
                      alt="Bag with items"
                      className="rounded-lg border-black border-solid"
                      width={115}
                      height={115}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p className="lg:mt-10 mt-24">Your bag is empty</p>
        </div>
      )}
    </div>
  );
};

export default ItemBag;
