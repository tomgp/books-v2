<script>
	import Bookstack from '$lib/components/bookstack.svelte';
	import { bookSlug, authorSlug } from '$lib/slugger.js';
	import RatingIcon from '$lib/components/RatingIcon.svelte';
	export let data;
	console.log(data.readingList);

	let currentList = data.readingList.filter((r) => r.date).reverse();
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
		display: flex;
	}
	.details, .icon{
		display: inline-block;
	}
</style>
