import slugify from 'slugify';

export default function(book){
  return slugify(`${book.title}-${book.authors}-${book.published}`)
}