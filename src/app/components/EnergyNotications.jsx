'use client';

import { useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EnergyContext } from '../context/EnergyContext.js';


const EnergyNotification = () => {
	const { energy } = useContext(EnergyContext);

	useEffect(() => {
		if (energy === 80) {
			toast.success(
				"My energy has dropped to 80%, would you like to study now?",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/joy.png' />
				}
			)
		}
		else if (energy === 60) {
			toast.warning(
				"My energy has dropped to 60%, maybe you should think about studying soon?",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/peaceful.png' />
				}
			);
		}
		else if (energy === 40) {
			toast.warning(
				"My energy has dropped to 40%... It's time to study!! Go to the home page and start a timer!!",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/worry.png' />
				}
			);
		}
		else if (energy === 20) {
			toast.error(
				"My energy has dropped to 20%... My wellbeing depends on you... Go to the home page and start your study session now!!",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/angry.png' />
				}
			);
		}
		else if (energy === 5) {
			toast.error(
				"My energy has dropped to 5%... *cough* Please study, I don't know how much longer I can hold on for...",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/sad.png' />
				}
			);
		}
		else if (energy === 1) {
			toast.error(
				"*cough* *wheeze* ... I ... Think ... You... *cough* ... Need... To... *wheeze* ... *cough*... code!!!",
				{
					position: 'top-center',
					icon: ({theme, type}) =>  <img alt='Tailwind CSS chat bubble component' src='/dead.png' />
				}
			);
		}

	}, [energy]);

	return (
		<div>
			<ToastContainer />
		</div>
	);
};

export default EnergyNotification;
