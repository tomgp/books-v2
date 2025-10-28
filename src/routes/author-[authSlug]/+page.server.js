import { loadReadingList } from '../../lib/data-load.server.js';
import { authorSlug } from '../../lib/slugger.js';

const list = loadReadingList();

export async function load({ params }) {
	if (!params.authSlug || params.authSlug == '') {
		return { err: 'no slug', slug: params.authSlug };
	}

	let books = list.filter((row) => {
		const authorSlugs = row.authors.map((d) => authorSlug(d));
		return authorSlugs.indexOf(params.authSlug) > -1;
	});

	return {
		books,
		slug: params.authSlug
	};
}
