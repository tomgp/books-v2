<script>
  import { scaleLinear, scaleLog, extent } from 'd3';
  export let data;
  let dated = data.list
    .map(read=>{
      return {
        publishedDate:read.published<0 ? '0000' : new Date(read.published).getFullYear(),
        outOfRange:read.published<0?true:false,
        readDate:new Date(read.date),
        pages:read.pages,
        author:read.authors.join(', '),
        title:read.title,
        good:read.rating.indexOf('+')>=0 
      }
    })
  let width = 800;
  let height = 1200;
  let margin = {top:20,left:20,bottom:20,right:20};
  let plotWidth = width-(margin.left+margin.right);
  let plotHeight = height-(margin.top+margin.bottom);
  let publishedExtent = extent(dated, d=>d.outOfRange ? null : d.publishedDate);
  let readExtent = extent(dated, d=>d.outOfRange ? null : d.readDate);

  let pubScale = scaleLinear()
    .range([0,plotWidth])
    .domain(publishedExtent);
  let readScale = scaleLinear()
    .range([0,plotHeight])
    .domain(readExtent);
</script>
<svg viewBox="0 0 {width} {height}">

<g transform="translate({margin.left},{margin.top})">
{#each [1800,1900,2000] as year}
  <line
    x1={pubScale(year)}
    y1={0}
    x2={pubScale(year)}
    y2={plotHeight}
    stroke={'red'} 
  />
{/each}
{#each dated as book}
{#if book.readDate!="Invalid Date"}
<line
x1={pubScale(book.publishedDate)}
y1={readScale(book.readDate)}
x2={pubScale(book.publishedDate)}
y2={plotHeight}
stroke-opacity={0.1}
stroke={'black'} 
/>
<!-- <line
x1={0}
y1={readScale(book.readDate)}
x2={plotHeight}
y2={readScale(book.readDate)}
stroke-opacity={0.1}
stroke={'black'} 
/> -->
{/if}
{/each}

{#each dated as book}
{#if book.readDate!="Invalid Date"}
  <circle 
    r={5}
    cx={pubScale(book.publishedDate)}
    cy={readScale(book.readDate)}
    fill={book.good ? 'red' : 'white'}
    stroke={book.readDate.getFullYear()==book.publishedDate ? 'red' : 'black'}
    on:mouseover={()=>console.log(book.title, book.readDate.getFullYear())}>
  </circle>

  {/if}
{/each}
</g>
</svg>
<pre>
  {publishedExtent}
  {readExtent}
  { JSON.stringify(dated,null, ' ') }
</pre>