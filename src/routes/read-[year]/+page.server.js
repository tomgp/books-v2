import { loadReadingList } from '../../lib/data-load.server.js';
import { getMD } from '$lib/get-md.server.js';

const list = loadReadingList();

export async function load({ params }) {
	if(!params.year || params.year == ""){
		return {err:'no year', slug: params.authSlug};
	}
	let years = {};
	list.forEach(row=>{
		let y = (new Date(row.date)).getFullYear();
		if(!isNaN(y)){
			years[String(y)] = true;
		}

	})

	let file = `static/markdown/_review-${params.year}.md`;
	let readData = getMD(file).markdown;
	return {
		books: list.filter((row) => {
      return ((new Date(row.date)).getFullYear() == params.year);
		}),
		year: params.year, 
		years: Object.keys(years),
		text: readData
	};
}
