import * as fs from 'fs';
import { csvParse } from 'd3';

export function loadReadIndex() {
	return JSON.parse(fs.readFileSync('static/data/readIndex.json', 'utf-8'));
}

export function loadReadingList() {
	console.log('here');
	const list = fs.readFileSync('static/data/reading-list.csv', 'utf-8');
	console.log(list);
	return csvParse(list, rowParser);
}

export function rowParser(row) {
	row.authors = row.authors.split(',').map((a) => a.trim());
	console.log(row.authors);
	return row;
}
