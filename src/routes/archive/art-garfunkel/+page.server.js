import fs from 'node:fs';
import { csvParse } from 'd3';
let booklist = csvParse(fs.readFileSync('static/data/garfunkel-books.csv', 'utf-8'));
export async function load() {
	return { booklist };
}
