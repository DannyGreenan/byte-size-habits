import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';

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
};

export default ItemBag;
