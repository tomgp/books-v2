<script>
	import * as marked from 'marked';
	import { authorSlug } from '../../lib/slugger.js';
	export let data;
	let overViewData = data.content[0].data;
	console.log(overViewData);
</script>

<h1>{overViewData.title}&nbsp;({overViewData.published})</h1>
<p>
	By <a href="author-{authorSlug(String(overViewData.authors))}">{overViewData.authors}</a
	>{#if overViewData.translator}. Translated by {overViewData.translator}{/if}
</p>

<!-- <a href="/{data.slug}">LINK {data.slug}</a> -->

{#each data.content as readThrough}
	<p>Read on {readThrough.data.date}</p>
	{@html marked.parse(readThrough.markdown)}
{/each}
