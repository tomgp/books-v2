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

export function getMD(location){
	const md = fs.readFileSync(location, 'utf-8');
	const parts = md.split('---');
	let data = parseBookData(JSON.parse(parts[0]));
	return {
		markdown: parts[1],
		data
	};
}
			