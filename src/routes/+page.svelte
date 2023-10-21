<script>
import Bookstack from '../components/bookstack.svelte';
import {bookSlug, authorSlug} from '../lib/slugger.js';
export let data;
console.log(data.readingList)

let currentList = data.readingList
  .filter(r=>r.date)
  .reverse()
</script>
<Bookstack
  splitOnKey={book=>String(book.date).split('-')[0]} 
  books={currentList}></Bookstack>

<table>
  {#each currentList as read}
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
<style>
  td{
    vertical-align: top;
    text-align: start;
  }
  td{
    max-width: 33%;
    min-width: 100px;
  }
</style>