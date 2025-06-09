import * as fs from 'fs';
import * as path from 'path';
import { csvParse } from 'd3';
import { bookSlug, readSlug, tagSlug } from '../src/lib/slugger.js';

const dataDir = './static/data';
const mdDir = './static/markdown/tags';

const tagList = {};

const mdFiles = fs.readdirSync(mdDir);

csvParse(fs.readFileSync(path.join(dataDir, 'reading-list.csv'), 'utf-8'))
	.filter((book) => book.tags)
	.forEach((book) => {
		book.tags.split(',').forEach((tag) => {
			console.log(tag);
			let slug = tagSlug(tag);
			if (!tagList[slug]) {
				tagList[slug] = {
					tag,
					count: 0,
					bookSlugs: [],
					readSlugs: []
				};
			}
			tagList[slug].count = tagList[slug].count + 1;
			tagList[slug].bookSlugs.push(bookSlug(book));
			tagList[slug].readSlugs.push(readSlug(book));
		});
	});

const slugList = {};

fs.writeFileSync(path.join(dataDir, 'tagIndex.json'), JSON.stringify(tagList, null, ' ')); //a index of tags and associated "reads"
