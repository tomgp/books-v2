import * as fs from 'fs';
import {csvParse} from 'd3';
import { getMD } from '../../lib/get-md.server.js';

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
	const links = csvParse(fs.readFileSync('static/data/links.csv', 'utf-8'))
		.filter(link=>link.bookslug == params.bookSlug);
	const reads = index[params.bookSlug];
	const content = [];

	if(reads){
		reads.forEach((datedBookSlug) => {
			let file = `static/markdown/${datedBookSlug}.md`;
			let readData = getMD(file);
			content.push(readData);
		});
	}
	return {
		slug: params.bookSlug,
		content: content,
		links
	};
}
