import { useState, useEffect } from 'react';

const EnergyNotification = ({ energy }) => {
	const [notification, setNotification] = useState('');

	useEffect(() => {
		if (energy <= 30) {
			setNotification("Warning: Pet's energy is below 30%");
		} else if (energy <= 50) {
			setNotification("Alert: Pet's energy is below 50%");
		} else if (energy <= 70) {
			setNotification("Notice: Pet's energy is below 70%");
		} else {
			setNotification('');
		}
	}, [energy]);

	return notification ? <div>{notification}</div> : null;
};

export default EnergyNotification;
