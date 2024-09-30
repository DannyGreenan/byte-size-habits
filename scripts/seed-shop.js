import { supabase } from '../src/lib/supabaseClient.js';

export async function seedShop() {
	const shopItems = [
		{
			description: 'Coding book',
			image: '',
			cost: 50,
		},
		{
			description: 'Laptop sticker',
			image: '',
			cost: 10,
		},
		{
			description: 'Keyboard',
			image: '',
			cost: 200,
		},
	];

	const { error } = await supabase.from('shop').insert(shopItems);
	if (error) {
		console.error('Seeding Shop Error:', error);
	} else {
		console.log('Shop Items Seeded Successfully');
	}
}
