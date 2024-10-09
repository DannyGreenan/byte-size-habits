'user client';

import React, { useEffect, useState, useContext } from 'react';
import { patchUser } from '@/app/models/profile.model';
import { getPet, patchPet } from '@/app/models/pet.model';
import { useEnergy } from '../context/EnergyContext.js'
import { UserContext } from '../context/UserContext';

useEnergy

export default function EnergyBar({ pet, setPet }) {
	const { energy, setEnergy } = useEnergy(); 
	const [timerTrigger, setTimerTrigger] = useState(0);
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);

	useEffect(() => {
		if (Object.keys(loggedInUser).length === 0) return;
		getPet(loggedInUser.pet_id).then((patchedPet) => {
			setPet(patchedPet);
			setEnergy(patchedPet.energy);
			updateEnergy(patchedPet);
		});
	}, [loggedInUser]);

	const updateEnergy = (oldPet = null) => {
		const currentTime = Date.now();
		if (loggedInUser.user_id && (pet || oldPet)) {
			if (oldPet) pet = oldPet;
			const timeDifferenceInMinutes =
				(currentTime - loggedInUser.last_activity) / 1000 / 60;
			const minutesElapsed = Math.floor(timeDifferenceInMinutes);
			if (minutesElapsed > 0) {
				const newEnergyLevel =
					pet.energy - minutesElapsed >= 0 ? pet.energy - minutesElapsed : 0;
				patchUser(loggedInUser.user_id, { last_activity: currentTime })
					.then((user) => {
						const userStringified = JSON.stringify(user);
						localStorage.setItem('user', userStringified);
						setLoggedInUser(user);
						return patchPet(pet.pet_id, { energy: newEnergyLevel });
					})
					.then((patchedPet) => {
						setPet(patchedPet);
						setEnergy(patchedPet.energy); // Update global energy
					});
			}
		}
		setTimerTrigger(timerTrigger + 1);
	};

	useEffect(() => {
		if (!timerTrigger) {
			updateEnergy();
		} else {
			const id = setInterval(updateEnergy, 10000);
			return () => clearInterval(id);
		}
	}, [timerTrigger, pet]);

	return (
		<>
			<div className='flex justify-between'>
				<h3>Energy:</h3>
				<span>{energy}%</span>
			</div>
			<div className='flex items-center justify-center'>
				<div>
					{energy === null ? (
						<span>Loading</span>
					) : (
						<progress
							className={`progress ${energy < 25 ? 'progress-error' : ''} ${
								energy > 25 && energy < 60
									? 'progress-warning'
									: 'progress-success'
							} w-56 h-6`}
							value={energy}
							max='100'
						></progress>
					)}
				</div>
			</div>
			{energy === 0 ? (
				<p className='label-text font-extrabold text-red-600'>
					Please charge me... I'm out of juice!!
				</p>
			) : null}
		</>
	);
}
