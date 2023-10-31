<script>
    import { bookSlug } from '../../lib/slugger.js';

    export let data;
</script>
<h1>{data.books[0].authors}</h1>
{data.books.length} book{#if data.books.length>1}s{/if} read:
<ul>
{#each data.books as book}
<li><a href="book-{bookSlug(book)}">{book.title} ({book.published})</a>. Read on: {book.date}</li>
{/each}
</ul>