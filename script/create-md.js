import * as fs from 'fs';
import * as path from 'path';
import { csvParse } from 'd3';
import { bookSlug, readSlug } from '../src/lib/bookSlug.js';

const dataDir = './static/data';
const mdDir = './static/markdown';

const bookList = csvParse(fs.readFileSync(path.join(dataDir,'reading-list.csv'),'utf-8')).filter(d=>d.title);
const mdFiles = fs.readdirSync(mdDir);
const slugList = {};
bookList.forEach((book,i)=>{
  const fileName = `${readSlug(book)}.md`;
  if(!slugList[bookSlug(book)]){
    slugList[bookSlug(book)] = [];
  }
  slugList[bookSlug(book)].push(readSlug(book));
  if(mdFiles.indexOf(fileName)>-1){
    console.log('read record already exists', book.title, book.published);
  }else{
    const markdown = `
    ---
    title:${book.title}
    authors:${book.authors}
    editors:${book.editors}
    translator:${book.translator}
    date:${book.date}
    rating:${book.rating}
    re-read:${book["re-read"]}
    pages:${book.pages}
    non-fiction:${book["non-fiction"]}
    comic:${book.comic}
    published:${book.published}
    ---

    `;
    fs.writeFileSync(path.join(mdDir,fileName), markdown);
  }
  fs.writeFileSync(path.join(dataDir,'readIndex.json'), JSON.stringify(slugList,null,' '));
});

const markdownCount = fs.readdirSync(mdDir).filter(f=>(f.indexOf('.md')>0)).length

console.log(`${bookList.length} == ${markdownCount} (${bookList.length == markdownCount})`)