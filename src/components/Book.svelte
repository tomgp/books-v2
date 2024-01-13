<script>
	export let width = 50;
	export let height = 50;
	export let title = 'TITLE';
	export let author = 'AUTHOR';
	export let scheme = {
		mainFill: '#000',
		accentFill: '#0F0',
		text: '#FFF'
	};
	let textMargin = width / 30;
	let fontSize;
	$: fontSize = Math.min(height / 2, width / (title.length / 1.5));
	let decorated = false;
	let entitled = false;
</script>

{#if decorated}
	<rect fill={scheme.mainFill} stroke="none" x="0" y="0" width={textMargin} {height} />
	<rect
		fill={scheme.accentFill}
		stroke="none"
		x={width - width / 10}
		y="0"
		width={width / 10}
		{height}
	/>
	{#if height > 50}
		<rect fill="rgba(0,0,0,0.2)" stroke="none" {width} height={10} x="0" y={height - 10} />
		<rect fill="rgba(255,255,255,0.3)" stroke="none" {width} height={10} x="0" y={0} />
	{/if}
{:else}
	<rect class="book" fill={scheme.mainFill} stroke="none" {width} {height} />
{/if}
{#if title && author && entitled}
	<text
		fill={scheme.text}
		stroke="none"
		font-size="{fontSize}px"
		dy={height / 2 + fontSize / 2}
		dx={textMargin}>{title}</text
	>
	<text
		fill={scheme.text}
		stroke="none"
		font-size="{fontSize}px"
		dy={height / 2 + fontSize / 2}
		dx={width - textMargin}
		text-anchor="end">{author}</text
	>
{/if}
<rect class="book" fill="none" stroke="white" {width} {height} />

<style>
	/* rect{
    fill:black;
    stroke:white;
  } */
</style>
