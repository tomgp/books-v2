<script>
	import { isIterable } from '$lib/utils.js';
	import { page } from '$app/stores';
	import * as marked from 'marked';
	import { authorSlug, tagSlug } from '$lib/slugger.js';
	import RatingMeter from '$lib/components/RatingMeter.svelte';
	export let data;
	let overViewData = data ? data.content[0].data : {};

	let tagCollection = [];

	data.content.forEach((d) => {
		if (isIterable(d.data.tags)) {
			tagCollection = [...tagCollection, ...d.data.tags];
		}
	});
</script>

<svelte:head>
	<title>Tom's books stack - {overViewData.title}</title>
	<meta name="description" content="A website cataloguing and annotating books that I've read" />
	<meta property="og:title" content="Tom's books stack - {overViewData.title}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={$page.url.href} />
	<meta
		property="og:image"
		content={overViewData.image
			? overViewData.image.replace('bookshot', 'socialfacebook')
			: $page.url.origin + '/images/social-placeholder.png'}
	/>
</svelte:head>
<h1>{overViewData.title}&nbsp;({overViewData.published})</h1>

<div class="start-grid">
	<img
		class:photo={overViewData.image}
		src={overViewData.image ? overViewData.image : 'images/book-place-holder.svg'}
		alt=""
		role="presentation"
	/>
	<div>
		<p>
			By
			{#each overViewData.authors as author, i}
				{#if author != ''}
					<a href="author-{authorSlug(author)}">{author}</a
					>{#if i < overViewData.authors.length - 1}{@html ',&#x20;'}{/if}
				{/if}
			{/each}
			{#if overViewData.translator}. Translated by {overViewData.translator}{/if}
		</p>
		<p>{overViewData.pages}pp, {overViewData['non-fiction'] ? 'Non fiction' : 'Fiction'}</p>
		<p><RatingMeter rating={overViewData.rating} /></p>
		{#if data.links.length > 0}
			<h2>links</h2>
			{#each data.links as link}
				<p>
					<a href={link.url}>{link.title}</a>
					{link.extract}
				</p>
			{/each}
		{/if}
	</div>
</div>
<h2>Notes</h2>
{#each data.content as readThrough}
	<p>{readThrough.data.date}</p>
	{@html marked.parse(readThrough.markdown)}
{/each}

<style>
	.start-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	img {
		width: 100%;
		margin-left: -1lh;
	}
	img.photo {
		filter: drop-shadow(5px -5px 10px rgba(0, 0, 0, 1));
	}
</style>
