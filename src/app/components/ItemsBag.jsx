<<<<<<< HEAD
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
=======
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Image from "next/image";
>>>>>>> 60e8ca71e242d29168a73c821030ff156d1f466f

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
		<div className='p-4 bg-gray-200 rounded-lg'>
			<h2 className='text-2xl font-bold mb-4'>Your Items Bag</h2>
			{storedItems.length > 0 ? (
				<div>
					<img src='/fullbackbag.jpeg' alt='Bag with items' className='mb-4' />
					<ul>
						{storedItems.map((item, index) => (
							<li key={index} className='mb-2'>
								{item}
							</li>
						))}
					</ul>
				</div>
			) : (
				<div>
					<img src='/emptybackbag.jpeg' alt='Empty bag' className='mb-4' />
					<p>Your bag is empty</p>
				</div>
			)}
		</div>
	);
=======
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
>>>>>>> 60e8ca71e242d29168a73c821030ff156d1f466f
};

export default ItemBag;
