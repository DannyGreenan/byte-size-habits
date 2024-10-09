'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEnergy } from '../context/EnergyContext.js';

const EnergyNotification = () => {
	const { energy } = useEnergy();

	useEffect(() => {
		if (energy <= 70 && energy > 50) {
			toast.info(
				"Notice: Pet's energy is has demonstrated a reduction! Below 70%",
				{
					position: 'bottom-right',
				}
			);
		} else if (energy <= 50 && energy > 30) {
			toast.warn("Alert: Pet's energy is dropped considerably! Below 50%", {
				position: 'bottom-right',
			});
		} else if (energy <= 30) {
			toast.error("Warning: Pet's energy is dropped considerably! Below 50%", {
				position: 'bottom-right',
			});
		}
	}, [energy]);

	return (
		<div>
			<ToastContainer />
		</div>
	);
};

export default EnergyNotification;
