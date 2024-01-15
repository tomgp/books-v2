<script>
	import * as marked from 'marked';
	import { authorSlug } from '../../lib/slugger.js';
	export let data;
	let overViewData = data.content[0].data;
	console.log(overViewData);
</script>

<h1>{overViewData.title}&nbsp;({overViewData.published})</h1>

<div class="start-grid">
	<img src="https://imagedelivery.net/j9Jow5yhb9rJLKWa-j_yTg/d739211a-a3a5-4855-dfc6-247ed0f89d00/bookshot" alt="" role="presentation">
	<div>
	<p>
	By 
	{#each overViewData.authors as author, i}
		<a href="author-{authorSlug(author)}">{author}</a>{#if i<overViewData.authors.length-1}{@html ',&#x20;'}{/if}
	{/each}
	{#if overViewData.translator}. Translated by {overViewData.translator}{/if}
	</p>
	<p>{overViewData['non-fiction'] ? "Non fiction":"Fiction"}</p>
	</div>
</div>
<h2>Notes</h2>
{#each data.content as readThrough}
	<p>Read on {readThrough.data.date}</p>
	{@html marked.parse(readThrough.markdown)}
{/each}
<h2>Elsewhere</h2>
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