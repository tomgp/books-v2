<script>
	import { page } from '$app/stores';
	import { bookSlug } from '$lib/slugger.js';
	let monthName = [
		'',
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	export let data;
</script>

<svelte:head>
	<title>Tom's books stack - {data.year} - {data.monthName}</title>
	<meta property="og:title" content="Tom's books stack - {data.year}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={page.url} />
	<meta property="og:image" content="" />
</svelte:head>
<h1>{data.year}</h1>
<p>{data.monthName}</p>
<p>
	{data.books.length} books. {data.books
		.reduce((acc, current) => acc + Number(current.pages), 0)
		.toLocaleString()}pp.
</p>
<div class="grid">
	{#each data.books as book}
		<a href="book-{bookSlug(book)}">
			<div class="book-cell">
				{#if book.image}
					<img src={book.image} alt="A hand holding a book, {book.title}" />
				{:else}
					<img alt="a place holder, a generic book" src="/images/book-place-holder.svg" />
				{/if}
				<div class="overlay">
					<p>{book.title}</p>
					<p>{book.authors}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
<div class="month-nav">
	{#each data.months as month}
		{#if Number(month) == Number(data.monthNumber)}
			<a href="/read-{data.year}-{month}" class="current"> {monthName[month]} </a>
		{:else}
			<a href="/read-{data.year}-{month}"> {monthName[month]} </a>
		{/if}
	{/each}
</div>
<div class="year-nav">
	{#each data.years as year}
		{#if year == data.year}
			<a href="/read-{year}" class="current"> {year} </a>
		{:else}
			<a href="/read-{year}"> {year} </a>
		{/if}
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	@media (max-width: 400px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 500px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 700px) {
		.grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.book-cell {
		position: relative;
		display: flex;
		align-items: end;
		height: 100%;
	}
	.book-cell img {
		width: 100%;
	}
	.year-nav,
	.month-nav {
		padding-top: 3rem;
	}
	.year-nav a,
	.month-nav a {
		margin-left: 0.5rem;
	}
	.overlay {
		position: absolute;
		font-family: Helvetica, sans-serif;
		background-color: var(--field);
		opacity: 0;
		top: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-items: center;
		padding: 0.4rem;
		transition-property: opacity;
		transition-duration: 0.1s;
	}
	.overlay:hover {
		opacity: 1;
	}
	.grid a:hover {
		background-color: var(--field);
	}
	a.current {
		text-decoration: none;
		font-weight: bold;
	}
</style>
