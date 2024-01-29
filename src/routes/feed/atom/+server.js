import { loadReadingList } from '$lib/data-load.server.js';
import { bookSlug } from '$lib/slugger.js';
export const prerender = true;

let rootURL = "https://books.toffeemilkshake.co.uk";
let feedLength = 20;

export async function GET() {
  const list = loadReadingList().filter(b=>b.date).reverse().slice(0, feedLength);
  return  new Response(feed(list));
}

function feed(posts){
  return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
  <title>Tom's book stack</title>
    <subtitle>Books I've read and my notes on them</subtitle>
    <link href="${rootURL}" />
    <link rel="self" href="${rootURL}/feed"/>
    <updated>${posts[0].date}Z</updated>
    <category term="books"/>
    <category term="personal"/>
    <category term="notes"/>
    <rights>
      Tom Pearson ©${(new Date().getFullYear())}
    </rights>
    <author>
      <name>Tom Pearson</name>
    </author>
    <id>${rootURL}</id>
    ${entries(posts)}
  </feed>`;
}

function entries(posts){
  return posts.map(post => 
  `<entry>
    <title type="html"><![CDATA[${post.title}]]></title>
    <link href="${rootURL}/${bookSlug(post)}"/>
    <id>${rootURL}/${bookSlug(post)}</id>
    <updated>${post.date}T00:00:00Z</updated>
    <content type="html"><![CDATA[ <p>${post.title} by ${post.authors.join(' ')}. ${post['non-fiction']?'Non fiction':'Fiction'}, first published ${post.published}. <a href="${rootURL}/${bookSlug(post)}">Notes</a></p> ]]>
    </content>
  </entry>`).join('\n');
}
/*
  `<item>
    <title>${post.title}</title>
    <link>${rootURL}/${bookSlug(post)}</link>
    <guid>${rootURL}/${bookSlug(post)}</guid>
    <pubDate>${RFC822Date(post.date)}</pubDate>
    <content><![CDATA[ <p>${post.title} by ${post.authors.join(' ')}. ${post['non-fiction']?'Non fiction':'Fiction'}, first published ${post.published}. <a href="${rootURL}/${bookSlug(post)}">Notes</a></p> ]]></content>
  </item>`).join('\n');
*/