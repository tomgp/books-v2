import * as fs from 'fs';

function parseBookData(d){
	d.authors=d.authors.split(',').map(a=>a.trim());
	d.editors=d.editors.split(',').map(a=>a.trim());
	d['non-fiction'] = d['non-fiction']=='TRUE';
	d['comic'] = d['comic']=='TRUE';
	d['re-read'] = d['re-read']=='TRUE';
	d.pages = Number(d.pages);
	d.published= Number(d.published);
	d.tags = d.tags ? d.tags.split(",") : [];
	return d;
}

export function getMD(location){
	let md = ''
	try{
		md = fs.readFileSync(location, 'utf-8');
	}catch(err){
		md = "#NONONONO"
	}

	const parts = md.split('---');

	return {
		markdown: parts.length > 1 ? parts[1] : parts[0],
		data: parts.length > 1 ? parseBookData(JSON.parse(parts[0])) : {},
	};
}
			