'use client';

import { useEffect, useState, useContext } from 'react';
import { patchUser } from '@/app/models/profile.model';
import { getPet, patchPet } from '@/app/models/pet.model';
import { UserContext } from '../context/UserContext';
import { EnergyContext } from '../context/EnergyContext.js';
import EnergyNotification from './EnergyNotications';


export default function EnergyTimer() {
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);
	const { energy, setEnergy } = useContext(EnergyContext);
	const [timerTrigger, setTimerTrigger] = useState(0);
  const [pet, setPet] = useState(null);

	useEffect(() => {
		if (Object.keys(loggedInUser).length === 0) return;
		getPet(loggedInUser.pet_id).then((patchedPet) => {
			setPet(patchedPet);
			setEnergy(patchedPet.energy);
			updateEnergy(patchedPet);
		});
	}, [loggedInUser]);

	const updateEnergy = (oldPet = null) => {
    if(pet === undefined || pet === null) return
		const currentTime = Date.now();
    let currentPet = pet
		if (loggedInUser.user_id && (pet || oldPet)) {
			if (oldPet) currentPet = oldPet;
			const timeDifferenceInMinutes =
				(currentTime - loggedInUser.last_activity) / 1000 / 60;
			const minutesElapsed = Math.floor(timeDifferenceInMinutes);
			if (minutesElapsed > 0) {
				const newEnergyLevel =
					energy - minutesElapsed >= 0 ? energy - minutesElapsed : 0;
          patchUser(loggedInUser.user_id, { last_activity: currentTime })
					.then((user) => {
            const userStringified = JSON.stringify(user);
						localStorage.setItem('user', userStringified);
						setLoggedInUser(user);
						return patchPet(currentPet.pet_id, { energy: newEnergyLevel });
					})
					.then((patchedPet) => {
						setEnergy(patchedPet.energy);
            setPet(patchedPet)
					});
			}
		}
		setTimerTrigger(timerTrigger + 1);
	};

	useEffect(() => {
		if (!timerTrigger) {
			updateEnergy();
		} else {
			const id = setInterval(updateEnergy, 60000);
			return () => clearInterval(id);
		}
	}, [timerTrigger, pet]);

  return <EnergyNotification />

}
