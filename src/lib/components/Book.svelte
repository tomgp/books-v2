<script>
	export let width = 50;
	export let height = 50;
	export let rating = ""
</script>

<rect class="book" class:highlight1={rating=="+"} class:highlight2={rating=="++"} stroke="none" {width} {height} />
<rect class="book-outline" class:highlight1={rating=="+"} class:highlight2={rating=="++"} fill="none" {width} {height} />

<style>

	.book{
		fill:var(--text, black);
	}
	.book-outline{
		stroke: var(--field, white);
	}
	.book.highlight1{
		fill:var(--accent,rgb(56, 255, 208));
	}
	.book.highlight2{
		fill:var(--highlight, rgb(112, 112, 112));
	}
	/* .book-outline.highlight1{
		stroke: var(--text, black);
	} */
</style>
