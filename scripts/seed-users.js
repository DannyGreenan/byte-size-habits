import { supabase } from '../src/lib/supabaseServerClient.js/index.js';

export async function seedUsers() {
	const users = [
		{
			username: 'john_doe',
			avatar: '',
			total_progress: 75,
			todays_progress: 20,
			currency: 100,
			goal: 'Complete coding challenges',
			items: 'book, pen',
			streak: 5,
			difficulty: 'medium',
			pet_id: 1,
			linked_site: ['github', 'codewars'],
			last_loggedin: new Date(),
		},
		{
			username: 'jane_doe',
			avatar: '',
			total_progress: 50,
			todays_progress: 10,
			currency: 200,
			goal: 'Read tech articles',
			items: 'notebook, highlighter',
			streak: 7,
			difficulty: 'hard',
			pet_id: 2,
			linked_site: ['leetcode'],
			last_loggedin: new Date(),
		},
	];

	const { error } = await supabase.from('users').insert(users);
	if (error) {
		console.error('Seeding Users Error:', error);
	} else {
		console.log('Users Seeded Successfully');
	}
}
