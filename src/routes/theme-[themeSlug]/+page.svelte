<script>
	import { page } from '$app/stores';
	import * as marked from 'marked';
	import { authorSlug } from '$lib/slugger.js';
	export let data;
</script>

<svelte:head>
	<title>Tom's books stack - {data.slug}</title>
	<meta property="og:title" content="Tom's books stack - {data.slug}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={$page.url.origin + '/images/social-placeholder.png'} />
</svelte:head>
<h1>Books on {String(data.slug).toLocaleUpperCase()}</h1>
{#each data.content as readThrough}
	<h3>{readThrough.data.title}</h3>
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
