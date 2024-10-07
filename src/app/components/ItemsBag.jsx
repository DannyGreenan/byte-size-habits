import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Image from "next/image";

const ItemBag = () => {
  const { loggedInUser } = useContext(UserContext);
  const [storedItems, setStoredItems] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    if (loggedInUser && loggedInUser.stored_items) {
      setStoredItems(loggedInUser.stored_items);
    }
  }, [loggedInUser]);

  return (
    <div className="flex">
      {storedItems.length > 0 ? (
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3">
            {storedItems.map((item, index) => (
              <li key={index} className="mb-2 flex justify-center px-4 py-2">
                <Image
                  src={`/${item.toLowerCase()}.jpeg`}
                  alt="Bag with items"
                  className="mb-4"
                  width={100}
                  height={100}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {/* <img src="/emptybackbag.jpeg" alt="Empty bag" className="mb-4" /> */}
          <p>Your bag is empty</p>
        </div>
      )}
    </div>
  );
};

export default ItemBag;
