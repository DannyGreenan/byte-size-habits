import { seedUsers } from './seed-users.js';
import { seedPets } from './seed-pets.js';
import { seedShop } from './seed-shop.js';

async function runSeed() {
	await seedPets();
	await seedUsers();
	await seedShop();
}

runSeed().catch((error) => console.error('Error running seed script', error));
