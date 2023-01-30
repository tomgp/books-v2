<script>
import Bookstack from '../components/bookstack.svelte';
import {bookSlug, authorSlug} from '../lib/slugger.js';
export let data;
</script>
<Bookstack books={data.readingList}></Bookstack>
<table>
  <ul>
    {#each data.readingList as read}
    <li>
      <a href="book-{bookSlug(read)}">{read.title}</a> &mdash;
      <a href="author-{authorSlug(read.authors)}">{read.authors}</a>
      ({read.published})
    </li>
  {/each}
  </ul>
</table>
<pre>
  {JSON.stringify(data,null,' ')}
</pre>