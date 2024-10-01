import { supabaseServerClient } from '@/lib/supabaseServerClient';

export default async function UserPage({ params }) {
	const { user_id } = params;

	const { data: user, error } = await supabaseServerClient
		.from('users')
		.select('*')
		.eq('user_id', user_id)
		.single();

	if (error) {
		return <div>Error fetching user</div>;
	}

	return (
		<div>
			<h1>{user.username}</h1>
			<img src={user.avatar} alt={user.username} />
			<p>Total Progress: {user.total_progress}</p>
			<p>Today's Progress: {user.todays_progress}</p>
			<p>Currency: {user.currency}</p>
			<p>Goal: {user.goal}</p>
			<p>Items: {user.items}</p>
			<p>Streak: {user.streak}</p>
			<p>Difficulty: {user.difficulty}</p>
		</div>
	);
}
