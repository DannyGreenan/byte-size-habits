import { FaCoins } from "react-icons/fa";
import { useState } from "react";

const ItemCard = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <div key={item.id} className="card bg-base-100 shadow-xl">
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn m-4 bg-byteDarkBlue text-white hover:bg-byteLightBlue hover:text-gray-900 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {hover ? <FaCoins className="mr-2" /> : null}
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
