<script>
	import { bookSlug } from '../../lib/slugger.js';

	export let data;
</script>
<svelte:head>
  <title>Tom's books stack - {data.books[0].authors}</title>
</svelte:head>
<h1>{data.books[0].authors}</h1>
<ul>
	{#each data.books as book}
		<li>
			<a href="book-{bookSlug(book)}">{book.title} ({book.published})</a> Read&nbsp;on:&nbsp;{book.date}
		</li>
	{/each}
</ul>
