'use client';

import { supabaseBrowserClient } from '@/lib/supabaseBrowserClient';
import { useParams } from 'next/navigation';

export default async function userById() {
	const { user_id } = useParams();

	let { data: users } = await supabaseBrowserClient
		.from('users')
		.select('*')
		.eq('user_id', user_id);

	return (
		<ul>
			{users.map((user) => {
				return <li>{user.user_id}</li>;
			})}
		</ul>
	);
}
