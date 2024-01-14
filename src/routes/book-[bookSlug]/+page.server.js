import * as fs from 'fs';

function parseBookData(d){
	d.authors=d.authors.split(',').map(a=>a.trim());
	d.editors=d.editors.split(',').map(a=>a.trim());
	d['non-fiction'] = d['non-fiction']=='TRUE';
	d['comic'] = d['comic']=='TRUE';
	d['re-read'] = d['re-read']=='TRUE';
	d.pages = Number(d.pages);
	d.published= Number(d.published);
	return d;
}

export async function load({ params }) {
	const index = JSON.parse(fs.readFileSync('static/data/readIndex.json', 'utf-8'));
	const pages = index[params.bookSlug];
	console.log('P', pages);
	const content = [];

	pages.forEach((p) => {
		const md = fs.readFileSync(`static/markdown/${p}.md`, 'utf-8');
		const parts = md.split('---');
		content.push({
			markdown: parts[1],
			data: parseBookData(JSON.parse(parts[0]))
		});
	});
	return {
		slug: params.bookSlug,
		content: content
	};
}
