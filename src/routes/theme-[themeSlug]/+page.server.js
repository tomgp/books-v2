import * as fs from 'fs';
import { getMD } from '$lib/get-md.server.js';
import {csvParse} from 'd3';


export async function load({ params }) {
	const index = JSON.parse(fs.readFileSync('static/data/tagIndex.json', 'utf-8'));
	console.log(params, index);
	let content = [];
	index[params.themeSlug].readSlugs.forEach(readSlug => {
		let readData = getMD(`static/markdown/${readSlug}.md`);
		content.push(readData);
	});

	return {
		slug: params.themeSlug,
		books:[],
		content: content,
	};
}
