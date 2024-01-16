<script>
	import Bookstack from '$lib/components/bookstack.svelte';
	import { bookSlug, authorSlug } from '$lib/slugger.js';
	import RatingIcon from '$lib/components/RatingIcon.svelte';
	export let data;

	// only book that have a date (i.e finished reading them)
	let currentList = data.readingList.filter((r) => r.date).reverse();

	// split by year and month

</script>

<Bookstack splitOnKey={(book) => String(book.date).split('-')[0]} books={currentList} />
<ul>
	{#each currentList as read}
		<li>
				<div class="icon"><RatingIcon rating={read.rating} showAverage={false}></RatingIcon></div>
				<div class="details">
				<!-- {read.date} -->
				<a href="book-{bookSlug(read)}">{read.title}</a> 
					&mdash;
				{#each read.authors as author, ia}
					<a href="author-{authorSlug(author)}">{author}</a>{ia == read.authors.length - 1
						? ''
						: ', '}
				{/each}
				({read.published})
				</div>
		</li>
	{/each}
	</ul>

<style>
	li{
		display: grid;
		grid-template-columns: 1fr 15fr;
		margin-bottom: 0.6lh;
	}
	.details, .icon{
		display: inline-block;
	}
	.icon{
		width:1.5rem;
	}
	ul a{
		text-decoration: none;
		color: var(--text);
	}
	ul a:hover{
		color: var(--field);
	}
</style>
