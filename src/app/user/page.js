import { supabaseServerClient } from '@/lib/supabaseServerClient';

export default async function UsersPage() {
	const { data: users, error } = await supabaseServerClient
		.from('users')
		.select('*');

	if (error) {
		return <div>Error fetching users</div>;
	}

	return (
		<div>
			<h1>All Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.user_id}>
						<h2>{user.username}</h2>
						<img src={user.avatar} alt={user.username} />
						<p>Total Progress: {user.total_progress}</p>
						<p>Today's Progress: {user.todays_progress}</p>
						<p>Currency: {user.currency}</p>
						<p>Goal: {user.goal}</p>
						<p>Items: {user.items}</p>
						<p>Streak: {user.streak}</p>
						<p>Difficulty: {user.difficulty}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
