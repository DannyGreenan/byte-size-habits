import { FaCoins } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const ItemCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  const handleBuy = (event) => {
    const newItem = event.target.value;
    const currentItems = user.stored_items;
    patchUser(user.user_id, { stored_items: [...currentItems, newItem] });
  };

  return (
    <div className="mockup-browser bg-byteOrange border font-nunito font-extrabold text-byteDark">
      <div className="mockup-browser-toolbar">
        <div className="input text-white">{`/${item.description}`}</div>
      </div>
      <figure className="flex flex-col lg:flex-row items-center bg-white py-4 px-6">
        <Image
          src={item.image}
          alt={item.description}
          width={200}
          height={200}
          className="rounded-3xl w-40 h-40 lg:w-64 lg:h-64"
        />

        <div className="card-body flex flex-col justify-center text-center lg:text-left mt-4 lg:mt-0 lg:ml-8">
          <p className="text-lg mb-4">
            <FaCoins className="mr-2" />
            {item.cost}
          </p>
          <div className="card-actions">
            <button
              onClick={handleBuy}
              value={item.description}
              className="btn bg-byteDarkBlue text-white hover:bg-byteLightBlue hover:text-gray-900 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              {hover ? <FaCoins className="mr-2" /> : null}
              Buy
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ItemCard;
