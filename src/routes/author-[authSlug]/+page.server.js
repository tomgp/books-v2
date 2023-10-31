import { loadReadingList } from '../../lib/data-load.server.js';
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