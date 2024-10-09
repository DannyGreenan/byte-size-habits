import { FaCoins } from 'react-icons/fa';
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { UserContext } from '@/app/context/UserContext';
import { patchUser } from '../models/profile.model';

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
			localStorage.setItem('user', userStringified);
			setLoggedInUser(user);
			setItemPurchased(true);
		});
	};

	return (
		<div
			id={index}
			className='mockup-browser bg-base-100 border font-nunito font-extrabold text-byteDark'
		>
			<div className='mockup-browser-toolbar'>
				<div className='input text-white'>{`/${item.description}`}</div>
			</div>
			<figure className='flex flex-col lg:flex-row items-center bg-gray-100 py-4 px-6'>
				<div className={`relative ${itemPurchased ? 'opacity-25' : ''}`}>
					<Image
						src={item.image}
						alt={item.description}
						width={200}
						height={200}
						className='rounded-3xl w-40 h-40 lg:w-64 lg:h-64'
					/>
					{itemPurchased ? (
						<span className='absolute inset-0 flex items-center justify-center text-byteDark font-bold'>
							Purchased
						</span>
					) : null}
				</div>

				<div className='card-body flex flex-col justify-start text-left lg:text-left mt-4 lg:mt-0 lg:ml-1'>
					{itemPurchased ? null : (
						<p className='text-lg mb-4'>{item.cost + ' ' + 'Coins'}</p>
					)}
					{itemPurchased ? null : (
						<div className='card-actions'>
							<button
								onClick={handleBuy}
								value={item.description}
								className={`btn bg-byteDarkBlue text-white hover:bg-byteLightBlue hover:text-gray-900 hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<FaCoins className='mr-2' />
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
