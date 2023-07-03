<script>
	import Bookstack from "../../components/bookstack.svelte";

    export let data;
</script>
Author {data.slug}
{data.books.length} books
<ul>
{#each data.books as book}
<li>{book.title} ({book.published}). Read on: {book.date}</li>
{/each}
</ul>
<Bookstack books={data.books}></Bookstack>