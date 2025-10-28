<script>
	import { page } from '$app/stores';
	import { bookSlug } from '../../lib/slugger.js';

	export let data;
</script>

<svelte:head>
	<title>Tom's books stack - {data.books[0].authors}</title>
	<meta property="og:title" content="Tom's books stack - {data.books[0].authors}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={page.url} />
	<meta property="og:image" content="" />
</svelte:head>
<h1>{data.books[0].authors}</h1>
<ul>
	{#each data.books as book}
		<li>
			<a href="book-{bookSlug(book)}">{book.title} ({book.published})</a>
			{@html book['re-read'] == 'TRUE' ? 'Revisited&nbsp;' : 'Read&nbsp;on&nbsp;'}{book.date}
		</li>
	{/each}
</ul>
