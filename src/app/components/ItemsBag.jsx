import { useContext, useEffect, useState } from 'react';

const ItemBag = () => {
	const { loggedInUser } = useContext(UserContext);
	const [storedItems, setStoredItems] = useState([]);

	useEffect(() => {
		if (loggedInUser && loggedInUser.stored_items) {
			setStoredItems(loggedInUser.stored_items);
		}
	}, [loggedInUser]);

	return (
		<div className='p-4 bg-gray-200 rounded-lg'>
			<h2 className='text-2xl font-bold mb-4'>Your Item Bag</h2>
			{storedItems.length > 0 ? (
				<ul>
					{storedItems.map((item, index) => (
						<li key={index} className='mb-2'>
							{item}
						</li>
					))}
				</ul>
			) : (
				<p>Your bag is empty</p>
			)}
		</div>
	);
};

export default ItemBag;
