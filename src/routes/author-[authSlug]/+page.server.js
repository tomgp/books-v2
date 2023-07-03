import * as fs from 'fs';
import { loadReadingList, rowParser } from '../../lib/data-load.js';
import { csvParse } from 'd3';
import { authorSlug } from '../../lib/slugger.js';

const list = loadReadingList();


export async function load({params}) {
  return {
    books: list.filter(row=>{
        const authorSlugs = row.authors.map(d=>authorSlug(d));
        return(authorSlugs.indexOf(params.authSlug) > -1);
      }),
    slug: params.authSlug
  };
}