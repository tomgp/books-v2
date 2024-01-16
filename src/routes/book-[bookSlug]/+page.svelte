<script>
	import * as marked from 'marked';
	import { authorSlug } from '$lib/slugger.js';
	import RatingMeter from '$lib/components/RatingMeter.svelte';
	export let data;
	let overViewData = data.content[0].data;
	console.log(overViewData);
</script>

<h1>{overViewData.title}&nbsp;({overViewData.published})</h1>

<div class="start-grid">
	{#if overViewData.image}
	<img src={overViewData.image} alt="" role="presentation">
	{/if}
	<div>
	<p>
	By 
	{#each overViewData.authors as author, i}
		<a href="author-{authorSlug(author)}">{author}</a>{#if i<overViewData.authors.length-1}{@html ',&#x20;'}{/if}
	{/each}
	{#if overViewData.translator}. Translated by {overViewData.translator}{/if}
	</p>
	<p>{overViewData['non-fiction'] ? "Non fiction":"Fiction"}</p>
	<p><RatingMeter rating={overViewData.rating}></RatingMeter></p>
	<h2>links</h2>
	</div>
</div>
<h2>Notes</h2>
{#each data.content as readThrough}
	<p>Read on {readThrough.data.date}</p>
	{@html marked.parse(readThrough.markdown)}
{/each}

<style>
	.start-grid{
		display:grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid black;
	}
	img{
		width:100%;
		margin-left: -2lh;
		margin-bottom: -1px;
		filter: drop-shadow(0px 0px 10px 10px rgba(0,0,0,0.55));
		clip: rect(0,0,0,0);
	}
</style>