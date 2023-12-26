import { Session, SupabaseClient } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export interface FileObject {
	name: string;
}

export type PageServerLoad = {
	props: {
		produtos: FileObject[];
	};
} & App.PageData;
