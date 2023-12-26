import { fail } from '@sveltejs/kit';

export const actions = {
	upload: async ({ request }) => {
		const data = await request.formData();
		const file = data.get('file-upload');
		console.log('file', file);

		const fileTypes = ['.jpg', '.webp'];
		let includesFileType = false;

		for (let i = 0; i < fileTypes.length; i++) {
			if (file.endsWith(fileTypes[i])) {
				includesFileType = true;
				break;
			}
		}

		if (!includesFileType) return fail(500, { error: true });

		console.log('UPLOADTEST', file);
		return { success: true };
	}
};
