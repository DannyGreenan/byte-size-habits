export async function addUser(newUser) {
	const { data, error } = await supabaseServerClient
		.from('users')
		.insert([newUser]);

	if (error) {
		console.error('Error adding user:', error);
	} else {
		console.log('User added successfully:', data);
	}
}
