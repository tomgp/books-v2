import slugify from 'slugify';

export function readSlug(book){
  return slugify(`${book.title}(${book.published})-${book.date}`,{remove: /[:!;,\.\#*&%\\"\\\/]/g})
}

export function bookSlug(book){
  return slugify(`${book.title}(${book.published})`,{remove: /[:!;,\.\#*&%\\"\\\/]/g})
}

export function authorSlug(authorList){
  return slugify(authorList.split(',')[0].trim(), {remove: /[:!;,\.\#*&%\\"\\\/]/g})
}