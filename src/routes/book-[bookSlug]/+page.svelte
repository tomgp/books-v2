<script>
  import * as marked from 'marked';
  export let data;
  let overViewData = data.content[0].data;
</script>
<h1>{overViewData.title} ({overViewData.published})</h1>
<p>{overViewData.authors}{#if overViewData.translator}. Translated by {overViewData.translator}{/if}</p>

{data.slug}
{#each data.content as readThrough}
  <p>{readThrough.data.date}</p>
  {@html marked.parse(readThrough.markdown)}
{/each}