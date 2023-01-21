<script>
  import {bookSlug} from '../lib/slugger.js';
  export let data;
</script>
<table>
  <ul>
    {#each data.readingList as read}
    <li>
      <a href="book-{bookSlug(read)}">{read.title} &mdash;
      {read.authors}
      ({read.published})</a>
    </li>
  {/each}
  </ul>
</table>
<pre>
  {JSON.stringify(data,null,' ')}
</pre>