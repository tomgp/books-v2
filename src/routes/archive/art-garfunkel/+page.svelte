<script>
	import { browser } from '$app/environment';
	export let data;
	let displayData = data.booklist;

	function filterFavorites() {
		displayData = data.booklist.filter((book) => book.favorite);
	}
	function clearFilter() {
		displayData = data.booklist;
	}
	function filterBooks(start, end) {
		displayData = data.booklist.filter((book) => {
			let order = Number(book.order.replace(/\./, ''));
			return order >= start && order < end;
		});
		return false;
	}
</script>

<p>
	One of the <a href="/about#other-libraries">inspirations for building this site</a> to record my
	reading was Art Garfunkel's personal home page. Until recently it had some charming, hand wrought,
	HTML tables containing lists of his reading from 1968 onwards. Sadly as of about start of 2024 the
	pages are no longer live. Thankfully as is often the case
	<a
		href="https://web.archive.org/web/20240222103529/http://www.artgarfunkel.com/library/list1.html"
		>The Wayback Machine has archived the pages</a
	>.
</p>
<p>
	But: Things can be retroactively removed from The Wayback Machine and in a situation where pages
	have already been lost I feel like that's much more likely to happen. For that reason I've knocked
	up this copy of the pages' contents. I've recreated the idiosyncratic navigation of the list as
	per the original site but by default you just see everything.
</p>
<p>Anyway, here it is...</p>
<hr />
<h1>Art Garfunkel's Book List (archive)</h1>
<div class="original-intro">
	<figure>
		<img
			class="mono"
			src="https://static.2x2.graphics/assets/books/agbooks.png"
			alt="A cartoon of Art Garfunkel sitting cross-legged in a high backed armchair reading a book and surrounded by piles of books"
		/>
		<figcaption>Illustration: Tom Bachtell</figcaption>
	</figure>
	<p>
		Since the 1960's, Art Garfunkel has been a voracious reader. We are pleased to present a listing
		of every book Art has read since 1968. To view a list of Art Garfunkel's favorite books, go to
		<a href="#the-books" on:click={filterFavorites}>Favorites</a>. Books [in bold] are favorites.
	</p>
</div>
<h2 id="the-books">Book List</h2>
<nav>
	<a href="#the-books" on:click={filterFavorites}>Favorites</a>
	<a href="#the-books" on:click={clearFilter}>All</a>
	<span class="separator">&#10043;</span>
	<a href={browser ? '#the-books' : '#book-1'} on:click={() => filterBooks(1, 148)}>1968 - 1978</a>
	<a href={browser ? '#the-books' : '#book-148'} on:click={() => filterBooks(148, 278)}
		>1979 - 1983</a
	>
	<a href={browser ? '#the-books' : '#book-278'} on:click={() => filterBooks(278, 439)}
		>1984 - 1987</a
	>
	<a href={browser ? '#the-books' : '#book-439'} on:click={() => filterBooks(439, 572)}
		>1988 - 1991</a
	>
	<a href={browser ? '#the-books' : '#book-572'} on:click={() => filterBooks(572, 726)}
		>1992 - 1996</a
	>
	<a href={browser ? '#the-books' : '#book-726'} on:click={() => filterBooks(726, 883)}
		>1997 - 2002</a
	>
	<a href={browser ? '#the-books' : '#book-883'} on:click={() => filterBooks(883, 1058)}
		>2003 - 2008</a
	>
	<a href={browser ? '#the-books' : '#book-1058'} on:click={() => filterBooks(1059, 1214)}
		>2009 - 2014</a
	>
	<a href={browser ? '#the-books' : '#book-1214'} on:click={() => filterBooks(1214, 1229)}>2015</a>
	<a href={browser ? '#the-books' : '#book-1229'} on:click={() => filterBooks(1229, 1272)}
		>2016 - 2017</a
	>
	<a href={browser ? '#the-books' : '#book-1272'} on:click={() => filterBooks(1272, 1325)}
		>2018 - 2021</a
	>
	<a href={browser ? '#the-books' : '#book-1325'} on:click={() => filterBooks(1325, 2000)}
		>2022 - 2023</a
	>
</nav>
<div class="list">
	<table>
		<thead>
			<tr>
				<th />
				<th>date</th>
				<th>author</th>
				<th>title</th>
				<th>published</th>
				<th>pages</th>
			</tr>
		</thead>
		<tbody>
			{#each displayData as book}
				<tr id="book-{book.order.replace(/\./, '')}" class={book.favorite ? 'favorite' : ''}>
					<td>{book.order}</td>
					<td>{@html book.date.replace(/\s/, '&nbsp;')}</td>
					<td>{book.author}</td>
					<td>{book.title}</td>
					<td>{@html book.published.replace(/\s/, '&nbsp;')}</td>
					<td>{@html book.pages.replace(/\s/, '&nbsp;')}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<hr />
<p>
	Note: I have no permission to republish this content. I figure seeing it's just a list of books
	this shouldn't be a problem but if it is then please get in touch <a
		href="mailto:tom.g.pearson@gmail.com">tom.g.pearson@gmail.com</a
	>
</p>

<style>
	table {
		border-collapse: collapse;
	}

	thead {
		position: sticky;
		top: 4.9rem;
		background-color: var(--field);
	}

	.favorite {
		font-weight: bold;
	}
	.favorite td {
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
	}
	td {
		vertical-align: top;
	}
	th {
		font-family: Helvetica, sans-serif;
		font-weight: normal;
		text-align: left;
		border-bottom: 1px solid var(--text);
	}

	td,
	th {
		padding: 0.25rem;
	}

	th {
		padding-bottom: 0.5rem;
	}

	/* odd table rows */
	tbody tr:nth-child(odd) {
		background-color: rgba(18, 0, 109, 0.05);
	}
	tbody tr:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.05);
	}
	figure {
		margin: 0;
		float: left;
	}
	figcaption {
		font-family: Helvetica, sans-serif;
		font-style: italic;
		font-size: 0.6rem;
	}
	.original-intro {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.original-intro p {
		font-size: 1.2rem;
		line-height: 2rem;
	}
	hr {
		border: none;
		border-bottom: 1px solid var(--text);
	}
	nav {
		padding: 1rem;
		position: sticky;
		top: 0;
		background-color: var(--field);
		z-index: 1;
	}
	nav a,
	.separator {
		margin-right: 1rem;
		white-space: nowrap;
	}
	.list {
		min-height: 70vh;
	}
	.mono {
		background-color: white;
	}
</style>
