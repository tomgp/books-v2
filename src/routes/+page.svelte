<script>
	import Bookstack from '$lib/components/bookstack.svelte';
	import { bookSlug, authorSlug } from '$lib/slugger.js';
	import RatingIcon from '$lib/components/RatingIcon.svelte';
	export let data;

	// only book that have a date (i.e finished reading them)
	let currentList = data.readingList.filter((r) => r.date).reverse();
	let monthName = [null,'January','February','March','April','May','June','July','August','September','October','November','December'];
	// split by year and month
	function splitBy(array, splitter){
    const subarrays = {};
    array.forEach(d => {
        if( !subarrays[splitter(d)] ){
            subarrays[splitter(d)] = {key:splitter(d), data:[]};
        }
        subarrays[splitter(d)].data.push(d);
    });
    return  Object.entries(subarrays).sort((a,b)=>(a[0]-b[0])).map(d=>(d[1]));;
	}

	const years = splitBy(currentList, (d) => d.date.split('-')[0]);

	const structuredData = years.map(year=>{
    year.months = splitBy(year.data, (d) => d.date.split('-')[1]);
    year.count = year.data.length;
    year.pageCount = year.data.reduce((sum,current)=>(sum + Number(current.pages)), 0)
    return year;
	}).filter(d=>d.key!='0');
</script>
<svelte:head>
  <title>Tom's books stack</title>
</svelte:head>
<Bookstack splitOnKey={(book) => String(book.date).split('-')[0]} books={currentList} />
	{#each Object.entries(structuredData).reverse() as [index, year]}
	<div class="year-head">
	<h2>{year.key}</h2>
	<p>{year.count} books {year.pageCount.toLocaleString()}pp</p>
	</div>
	{#each year.months.reverse() as month}
	<h3 class="month-head">{monthName[Number(month.key)]}</h3>
	<ul>
	{#each month.data as book}
		<li>

			<span class="details">
			<!-- {read.date} -->
			<a href="book-{bookSlug(book)}">{book.title}</a> 
				&mdash;
			{#each book.authors as author, ia}
				<a href="author-{authorSlug(author)}">{author}</a>{ia == book.authors.length - 1
					? ''
					: ', '}
			{/each}
			({book.published})
			</span>
			<div class="icon"><RatingIcon rating={book.rating} showAverage={false}></RatingIcon></div>
		</li>
	{/each}
	</ul>
	{/each}

	{/each}

<style>
	.year-head{
		border-bottom: 1px solid var(--text);
	}
	.month-head{
		font-weight: 100;
		font-size: 1rem;
		/* margin-left: 2rem; */
	}
	li{
		/* display: grid;
		grid-template-columns: 15fr 1fr; */
		margin-bottom: 0.6lh;
	}

	.details, .icon{
		display: inline-block;
	}
	.icon{
		width:1.5rem;
	}
	ul a{
		text-decoration: none;
		/* color: var(--text); */
	}
	ul a:hover{
		color: var(--field);
	}
</style>
