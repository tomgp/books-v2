import { loadReadingList } from '$lib/data-load.server.js';

const list = loadReadingList();

export async function load({ params }) {
	if (!params.year || params.year == '') {
		return { err: 'no year', slug: '' };
	}
	if (!params.month || params.month == '') {
		return { err: 'no month', slug: '' };
	}
	let months = {};
	let years = {};
	list.forEach((row) => {
		let y = new Date(row.date).getFullYear();
		let m = new Date(row.date).getMonth() + 1;
		if (!isNaN(y) && !isNaN(m)) {
			years[String(y)] = true;
			if (y == params.year) {
				months[`${String(m)}`] = true;
			}
		}
	});

	return {
		books: list.filter((row) => {
			let d = new Date(row.date);
			return d.getFullYear() == Number(params.year) && d.getMonth() + 1 == Number(params.month);
		}),
		year: params.year,
		monthName: new Date(params.year, params.month - 1).toLocaleString('default', { month: 'long' }),
		monthNumber: params.month,
		years: Object.keys(years),
		months: Object.keys(months)
	};
}
