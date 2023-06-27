<script>
import Bookstack from '../components/bookstack.svelte';
import {bookSlug, authorSlug} from '../lib/slugger.js';
export let data;
console.log(data.readingList)
let top = data.readingList.filter(d=>d.rating=="++");
</script>
<Bookstack
  splitOnKey={book=>String(book.date).split('-')[0]} 
  books={data.readingList}></Bookstack>
<table>

    {#each data.readingList as read}
    <tr>
    <td>{read.date}</td>
    <td>
      <a href="book-{bookSlug(read)}">{read.title}</a>
    </td>
    <td>
      {#each read.authors as author, ia}
      <a href="author-{authorSlug(author)}">{author}</a>{(ia==read.authors.length - 1) ? '':', '}
      {/each}
    </td>
    <td>{read.published}</td>
  </tr>
  {/each}
</table>
<!-- <pre>
  {JSON.stringify(data,null,' ')}
</pre> -->
<style>
  td{
    vertical-align: top;
    text-align: start;
  }
</style>