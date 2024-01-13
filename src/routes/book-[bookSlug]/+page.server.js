import * as fs from 'fs';

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
			data: JSON.parse(parts[0])
		});
	});
	return {
		slug: params.bookSlug,
		content: content
	};
}
