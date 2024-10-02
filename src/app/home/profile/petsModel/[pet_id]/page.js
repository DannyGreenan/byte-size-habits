'use client';

import { useEffect, useState } from 'react';
import { getPet } from './pet.model';

export default function AllItems({ params }) {
	const { pet_id } = params;
	const [pet, setPet] = useState(null);

	useEffect(() => {
		const fetchPet = async () => {
			await getPet(pet_id, setPet);
		};
		fetchPet();
	}, [pet_id]);

	if (!pet) return <div>Loading...</div>;

	return (
		<div>
			<h1>Pet ID: {pet.pet_id}</h1>
			<h1>Pet Hunger: {pet.hunger}</h1>
		</div>
	);
}
