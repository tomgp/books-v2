<script>
	import Book from './Book.svelte';

	import { scaleLinear, scaleBand, randomUniform, randomLcg  } from 'd3';

	export let books = [];
	export let title = '';
	export let height = 350;
	export let width = 700;
	export let margin = { top: 50, left: 0, bottom: 20, right: 0 };
	export let jitter = 2.5;
	export let minPages = 100;
	export let splitOnKey = (book) => 'books';

	let random = randomUniform.source(randomLcg(111177))(-jitter, jitter)

	let booksCopy = [...books].reverse();
	let meanAspectRatio = 3000; // if 1 page is 1 pixel thick the length of the books spine should be this number of px
	let meanSpineLength = meanAspectRatio;

	let plotHeight = height - (margin.top + margin.bottom);
	let plotWidth = width - (margin.left + margin.right);

	let stacks = {};
	let biggestStack = 0;
	let stackCount = 0;
	let pageScale = scaleLinear();
	let stackScale = scaleBand();



	// split into stacks
	$: {
		booksCopy.forEach((book) => {
			if (!stacks[splitOnKey(book)]) {
				stacks[splitOnKey(book)] = {
					pages: 0,
					bookCount: 0,
					books: []
				};
			}

			stacks[splitOnKey(book)].pages += Math.max(Number(book.pages), minPages);
			if (biggestStack < stacks[splitOnKey(book)].pages) {
				biggestStack = stacks[splitOnKey(book)].pages;
			}
			stacks[splitOnKey(book)].bookCount++;
			stacks[splitOnKey(book)].books.push(book);
		});
		stackCount = Object.keys(stacks).length;
	}

	// work out the scales
	$: {
		pageScale.domain([0, biggestStack]).range([0, plotHeight]);
		stackScale.domain(Object.keys(stacks)).range([0, plotWidth]).paddingInner(0.15);
		meanSpineLength = pageScale(1) * meanAspectRatio;
		Object.entries(stacks).forEach(layoutStack);
	}

	function layoutStack([key, stack], i) {
		let acc = 0;
		stack.key = key;
		stack.books = stack.books.map((book, j) => {
			if (!book.pages || book.pages == '') {
				book.ignore = true;
			}

			let bookJitter = random();
			console.log('JIT', bookJitter *10, stackScale.bandwidth(), bookJitter * stackScale.bandwidth());
			book.x = 0 + bookJitter;
			book.width = Math.min(stackScale.bandwidth(), meanSpineLength + random());
			book.height = pageScale(Math.max(Number(book.pages), minPages));
			acc += book.height;
			book.y = plotHeight - acc;
			return book;
		});
	}
	let toolTipHTML = "TOOLTIP"
	let toolTipActive = false;
	let tipPos = {x:0, y:0};
	function toolTip(ev, book){
		toolTipActive = true;
		toolTipHTML = `<p>${book.title}&nbsp;&mdash; ${book.authors[0]} ${book.authors[1]?`+${book.authors.length-1}`:''}</p>`

		tipPos= {x:ev.layerX, y:ev.layerY}
	}

	function toolTipOff(){
		toolTipActive = false;
	}

</script>

{#if title != ''}<h1>{title}</h1>{/if}
<div class="chart">
	<svg viewBox="0 0 {width} {height}">
		<g class="plot" transform="translate({margin.left}, {margin.top})">
			{#each Object.entries(stacks) as entry, i}
				<g class="stack" transform="translate({(i * plotWidth) / stackCount},0)">
					<!-- <text dy="-5">{entry[1].key}</text> -->
					{#each entry[1].books as book}
						{#if !book.ignore}
							<g transform="translate({book.x},{book.y})">
								<Book width={book.width} height={book.height} rating={book.rating} />
							</g>
						{/if}
					{/each}
				</g>
				<text class="stack-title" 
					transform="translate({(i * plotWidth) / stackCount},{height - 55})">{entry[1].key}</text>
			{/each}
		</g>
	</svg>
	<div style="--y:{tipPos.y}px; --x:{tipPos.x}px" class="tooltip" class:active={toolTipActive}>{@html toolTipHTML}</div>
</div>

<style>

	.tooltip{
		position:absolute;
		display: inline-block;
		visibility:hidden;
		pointer-events: none;
		border: 1px solid var(--text);
		padding: 1lh;
		top: var(--y);
		left: var(--x);
		background-color: var(--field);
		max-width:10lh;
	}

	.tooltip.active{
		visibility:visible;
	}

	.chart {
		width: 100%;
		position: relative;
	}

	.stack {
		font-family: sans-serif;
		font-weight: bold;
		fill: none;
		stroke: var(--text, black);
	}


	.stack-title{
		fill: var(--text, black);
		font-size: 14px;
	}



</style>
