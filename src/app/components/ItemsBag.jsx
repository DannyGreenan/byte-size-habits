import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
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
    <div className="flex">
      {storedItems.length > 0 ? (
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {storedItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`relative flex flex-col justify-center items-center py-2`}>
                  <Image
                    src={`/${item.toLowerCase()}.jpeg`}
                    alt="Bag with items"
                    className="rounded-lg border-black border-solid"
                    width={115}
                    height={115}
                    style={{
                      transform: "skewX(-2deg)",
                    }}
                  />
                  <button className="btn glass absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-base-200 text-xs leading-tight">
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p>Your bag is empty</p>
        </div>
      )}
    </div>
  );
};

export default ItemBag;
