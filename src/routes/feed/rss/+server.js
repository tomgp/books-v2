import { loadReadingList } from '$lib/data-load.server.js';
import { bookSlug } from '$lib/slugger.js';

let rootURL = "https://books.toffeemilkshake.co.uk";
let feedLength = 20;

export async function GET() {
  const list = loadReadingList().filter(b=>b.date).reverse().slice(0, feedLength);
  return  new Response(feed(list));
}

function RFC822Date(str){
  return (new Date(str)).toUTCString()
}

function feed(posts){
  return `<?xml version="1.0"?>
  <rss version="2.0">
     <channel>
        <title>Tom's book stack</title>
        <link>${rootURL}</link>
        <description>Notes and books I've read</description>
        <language>en-gb</language>
        <pubDate>${RFC822Date(posts[0].date)}</pubDate>
        <lastBuildDate>${RFC822Date(posts[0].date)}</lastBuildDate>
        ${entries(posts)}
    </channel>
  </rss>`;
}

function entries(posts){
  return posts.map(post => 
  `<item>
    <title>${post.title}</title>
    <link>${rootURL}/${bookSlug(post)}</link>
    <guid>${rootURL}/${bookSlug(post)}</guid>
    <pubDate>${RFC822Date(post.date)}</pubDate>
    <content><![CDATA[ <p>${post.title} by ${post.authors.join(' ')}. ${post['non-fiction']?'Non fiction':'Fiction'}, first published ${post.published}. <a href="${rootURL}/${bookSlug(post)}">Notes</a></p> ]]></content>
  </item>`).join('\n');
}