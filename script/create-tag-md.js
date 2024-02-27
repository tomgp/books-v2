import * as fs from 'fs';
import * as path from 'path';
import { csvParse } from 'd3';
import { bookSlug, readSlug, tagSlug } from '../src/lib/slugger.js';

const dataDir = './static/data';
const mdDir = './static/markdown/tags';

const tagList = {};

const mdFiles = fs.readdirSync(mdDir);

csvParse(fs.readFileSync(path.join(dataDir, 'reading-list.csv'), 'utf-8'))
  .filter(book => book.tags )
    .forEach(book => {
      book.tags.split(',')
        .forEach(tag=>{
          console.log(tag)
          let slug = tagSlug(tag);
          if(!tagList[slug]){
            tagList[slug] = {
              tag,
              count:0,
              bookSlugs:[],
              readSlugs:[],
            };
          } 
          tagList[slug].count = tagList[slug].count + 1;
          tagList[slug].bookSlugs.push(bookSlug(book));
          tagList[slug].readSlugs.push(readSlug(book));
        });
    }
  );
  

const slugList = {};

fs.writeFileSync(path.join(dataDir, 'tagIndex.json'), JSON.stringify(tagList, null, ' ')); //a index of tags and associated "reads"

// bookList.forEach((book, i) => {
// 	const fileName = `${readSlug(book)}.md`;
// 	if (!slugList[bookSlug(book)]) {
// 		slugList[bookSlug(book)] = [];
// 	}
// 	slugList[bookSlug(book)].push(readSlug(book));
// 	if (mdFiles.indexOf(fileName) > -1) {
// 		console.log('read record already exists', book.title, book.published);
// 	} else {
// 		const markdown = `${JSON.stringify(book, null, ' ')}
// ---

// `;
// 		fs.writeFileSync(path.join(mdDir, fileName), markdown);
// 	}
// 	fs.writeFileSync(path.join(dataDir, 'readIndex.json'), JSON.stringify(slugList, null, ' ')); //a index of times a books was read
// });

// const markdownCount = fs.readdirSync(mdDir).filter((f) => f.indexOf('.md') > 0).length;

// console.log(`${bookList.length} == ${markdownCount} (${bookList.length == markdownCount})`);
