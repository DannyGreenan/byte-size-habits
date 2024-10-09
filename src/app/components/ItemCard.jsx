import { FaCoins } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { UserContext } from "@/app/context/UserContext";
import { patchUser } from "../models/profile.model";

const ItemCard = ({ item, index }) => {
  const [hover, setHover] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [itemPurchased, setItemPurchased] = useState(false);

  useEffect(() => {
    if (loggedInUser.stored_items.length > 0) {
      const foundItem = loggedInUser.stored_items.filter(
        (value) => value === item.description
      );
      if (foundItem.length === 1) {
        setItemPurchased(true);
      }
    }
  }, []);

  const handleBuy = (event) => {
    const newItem = item.description;
    const currentItems = loggedInUser.stored_items;
    const newCurrency = loggedInUser.currency - item.cost;

    patchUser(loggedInUser.user_id, {
      stored_items: [...currentItems, newItem],
      currency: newCurrency,
    }).then((user) => {
      const userStringified = JSON.stringify(user);
      localStorage.setItem("user", userStringified);
      setLoggedInUser(user);
      setItemPurchased(true);
    });
  };

  return (
    <div
      id={index}
      className="mockup-browser bg-neutral border-2 border-accent">
      <div className="mockup-browser-toolbar text-neutral-content">
        <div className="input text-accent">{`/${item.description}`}</div>
        <button className="btn btn-square btn-error btn-outline ml-1 btn-sm -mr-4">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <figure
        className="flex flex-col lg:flex-row items-center py-4 px-6"
        style={{
          backgroundImage: "url('/profile-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}>
        <div className={`relative ${itemPurchased ? "filter grayscale" : ""}`}>
          <Image
            src={item.image}
            alt={item.description}
            width={200}
            height={200}
            className="rounded-3xl w-40 h-40 lg:w-64 lg:h-64"
          />
          {itemPurchased ? (
            <p className="absolute inset-0 text-4xl flex items-center justify-center text-base-300 font-bold rotate-45 bg-red-500 m-6 my-24 rounded-2xl">
              Purchased
            </p>
          ) : null}
        </div>

        <div className="card-body flex flex-col justify-start text-left lg:text-left mt-4 lg:mt-0 lg:ml-1">
          {itemPurchased ? null : (
            <p className="text-lg text-base-200 mb-4">
              {item.cost + " " + "Coins"}
            </p>
          )}
          {itemPurchased ? null : (
            <div className="card-actions">
              <button
                onClick={handleBuy}
                value={item.description}
                className={`btn btn-primary text-white hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <FaCoins className="mr-2" />
                Buy
              </button>
            </div>
          )}
        </div>
      </figure>
    </div>
  );
};

export default ItemCard;
