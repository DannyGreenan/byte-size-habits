'use client';

import { useEffect, useState, useContext } from 'react';
import { patchUser } from '@/app/models/profile.model';
import { getPet, patchPet } from '@/app/models/pet.model';
import { UserContext } from '../context/UserContext';
import { EnergyContext } from '../context/EnergyContext.js';
import EnergyNotification from './EnergyNotications';
import ProgressDayFiller from './ProgressDayFiller';


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
				// time / 1000ms / 60s === minutes
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

	const addDateToProgress = () => {
		if (Object.keys(loggedInUser).length === 0) return;
			const newDate = new Date();
			const dateSrt = newDate.toISOString();
			const progressDate = dateSrt.slice(0, 10);

			const totalProgress = loggedInUser.progress;
			let progressUpdate = {};
			const todaysIndex = totalProgress.findIndex(item => item.date === progressDate)
			
			if (todaysIndex !== -1) return
			else {
				progressUpdate = {
					date: progressDate,
					time: 0,
				};
				totalProgress.push(progressUpdate);
			}
			
			const userUpdate = {
				progress: totalProgress,
				last_activity: Date.now(),
			};

			patchUser(loggedInUser.user_id, userUpdate).then((user) => {
				const userStringified = JSON.stringify(user);
				localStorage.setItem('user', userStringified);
				setLoggedInUser(user);
			});
	}

	useEffect(() => {
		if (!timerTrigger) {
			updateEnergy();
			addDateToProgress();
		} else {
			// 60s * 1000ms === 60000ms
			const id = setInterval(updateEnergy, 60000);
			return () => clearInterval(id);
		}
	}, [timerTrigger, pet]);

  return <>
  	<EnergyNotification />
	<ProgressDayFiller />
  </>

}
