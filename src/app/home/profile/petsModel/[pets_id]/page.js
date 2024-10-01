
import { supabaseServerClient } from '@/lib/supabaseServerClient';

export default async function getPet({params}) {
	const { pet_id } = params;
	const { pet : data, error } = await supabaseServerClient
		.from('pets')
		.select('*')
		.eq('pet_id', pet_id)
		.single();

	if (error) {
		console.error('Error fetching pet:', error);
		return null;
	} else {
		console.log(data);
		return data;
	}
}


