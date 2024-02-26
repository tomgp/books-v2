<script>
	import { page } from '$app/stores';
	import * as marked from 'marked';
	import { authorSlug } from '$lib/slugger.js';
	import RatingMeter from '$lib/components/RatingMeter.svelte';
	export let data;

</script>
<svelte:head>
  <title>Tom's books stack - {data.content.tag}</title>
	<meta property="og:title" content="Tom's books stack - {data.content.tag}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={$page.url.origin+'/images/social-placeholder.png'} />
</svelte:head>
<h1>Theme {data.content.tag}</h1>

<div class="start-grid">
	<pre>
		{JSON.stringify(data,null,' ')}
	</pre>
</div>
<h2>Notes</h2>
{#each data.content as readThrough}
	<p>{readThrough.data.date}</p>
	{@html marked.parse(readThrough.markdown)}
{/each}

<style>
	.start-grid{
		display:grid;
		grid-template-columns: 1fr 1fr;

	}
	img{
		width:100%;
		margin-left: -1lh;
	}
	img.photo{
		filter: drop-shadow(5px -5px 10px rgba(0,0,0,1));
	}
</style>