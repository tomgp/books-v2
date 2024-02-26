import slugify from 'slugify';

export function readSlug(book) {
	return slugify(`${book.title}(${book.published})-${book.date}`, {
		remove: /[:\!\?;,\.\#*&%\\"\\\/]/g
	});
}

export function bookSlug(book) {
	return slugify(`${book.title}(${book.published})`, { remove: /[:\!\?;,\.\#*&%\\"\\\/]/g });
}

export function authorSlug(author) {
	return slugify(author, { remove: /[:\!\?;,\.\#*&%\\"\\\/]/g });
}

export function tagSlug(tag){
	return slugify(tag.trim(), { remove: /[:\!\?;,\.\#*&%\\"\\\/]/g });
}