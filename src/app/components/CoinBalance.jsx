'use client';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

const CoinBalance = () => {
	const { loggedInUser } = useContext(UserContext);
	const [coins, setCoins] = useState(loggedInUser.currency);

	useEffect(() => {
		setCoins(loggedInUser.currency);
	}),
		[loggedInUser.currency];

	return (
		<div className='fex items-center space-x-2'>
			<span className='text-lg font-bold'>{coins !== undefined ? coins : <span className="loading loading-spinner loading-md"></span>}</span>
		</div>
	);
};

export default CoinBalance;
