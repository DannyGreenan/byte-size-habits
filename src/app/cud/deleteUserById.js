export async function deleteUser(user_id) {
	const { data, error } = await supabaseServerClient
		.from('users')
		.delete()
		.eq('user_id', user_id);

	if (error) {
		console.error('Error deleting user:', error);
	} else {
		console.log('User deleted successfully:', data);
	}
}
