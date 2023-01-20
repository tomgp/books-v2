import * as fs from 'fs';
import { csvParse } from 'd3';
import bookSlug from '../src/lib/bookSlug.js';

const bookList = csvParse(fs.readFileSync('./static/data/reading-list.csv','utf-8')).filter(d=>d.title);
const mdFiles = fs.readdirSync('./static/markdown');

bookList.forEach((book)=>{
  const fileName = `${bookSlug(book)}.md`;
  if(mdFiles.indexOf(fileName)>-1){
    console.log('book found');
  }else{
    console.log('new book ', book.title, book.published);
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
  }
})
