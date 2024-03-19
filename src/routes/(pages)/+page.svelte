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
	<p class="month-data">{year.count} books {year.pageCount.toLocaleString()}pp</p>
	</div>
	{#each year.months.reverse() as month}
	<h3 class="month-head">{monthName[Number(month.key)]}</h3>
	<ul class="book-list">
	{#each month.data as book}
		<li class="book-item">
			<span class="title" title="{book.title}"><a href="book-{bookSlug(book)}">{book.title}</a></span>
			<div class="authors" title="{book.authors.join(',')}">
			{#each book.authors as author, ia}
			<a href="author-{authorSlug(author)}">{author}</a>{ia == book.authors.length - 1
					? ''
					: ', '}
			{/each}
			</div>
			<span class="pub-date">({book.published})</span>
			<span class="icon"><RatingIcon rating={book.rating} showAverage={false}></RatingIcon></span>
		</li>
	{/each}
	</ul>
	{/each}

	{/each}

<style>
	.year-head{
		border-bottom: 1px solid var(--text);
	}

	.icon{
		display: inline-flex;
	}

	.icon{
		width:1.5rem;
	}

	ul a{
		text-decoration: none;
	}

	ul.book-list{
		margin-left:0px;
		padding-left:0px;
		list-style: none;
	}

	.book-item{
		display:grid;
		grid-template-columns: 3fr 1.5fr 0.5fr 0.2fr;
		gap:3px;
		line-height: 1lh;
	}

	.title{
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
	.authors{
		display: inline-block;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}

	@media (max-width: 490px) {
		.book-item{
			display: block;
		}
		.authors, .title, .pub-date{
			/* display: block; */
			white-space: normal;
			width:100%;
		}
	}

	p.month-data{
		margin-bottom: 0.5lh;
		margin-top:0.8lh;
	}
</style>
