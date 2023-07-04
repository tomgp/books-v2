<script>
  import Book from './Book.svelte';

  import { scaleLinear, max, scaleOrdinal,scaleBand, range} from 'd3';

  export let books = [];
  export let title = "books";
  export let height = 400;
  export let width = 700;
  export let margin = { top:50, left:20, bottom:10, right:20 };
  export let jitter = 0.1;
  export let splitOnKey = book => "books";

  let meanAspectRatio = 3000; // if 1 page is 1 pixel thick the length of the books spine should be this number of px
  let meanSpineLength = meanAspectRatio;

  let plotHeight = height-(margin.top+margin.bottom);
  let plotWidth = width-(margin.left+margin.right);

  let stacks = {};
  let biggestStack = 0;
  let stackCount = 0;
  let pageScale = scaleLinear();
  let stackScale = scaleBand();

  $:{
    books.forEach(book=>{
      if(!stacks[splitOnKey(book)]){
        stacks[splitOnKey(book)] = {
          pages:0,
          bookCount:0,
          books:[]
        };
      }

      stacks[splitOnKey(book)].pages += Number(book.pages);
      if(biggestStack < stacks[splitOnKey(book)].pages){
        biggestStack = stacks[splitOnKey(book)].pages;
      }
      stacks[splitOnKey(book)].bookCount ++;
      stacks[splitOnKey(book)].books.push(book);
    });
  
    // how many stacks are there...
    stackCount = Object.keys(stacks).length;
    // console.log(Object.values(stacks).map(d=>d.bookCount));
    // console.log('>>', stackCount, biggestStack);
    // console.log(stacks);
  }



  // work out the scales
  $:{
    
    pageScale
      .domain([0, biggestStack])
      .range([0, plotHeight]);

    stackScale
      .domain(Object.keys(stacks))
      .range([0,plotWidth])
      .paddingInner(0.15);


    meanSpineLength = pageScale(1) * meanAspectRatio;
    console.log('S', meanSpineLength);
    Object.entries(stacks).forEach(layoutStack);

  }

  function layoutStack([key, stack], i){    
    let acc = 0;
    stack.key = key;
    stack.books = stack.books.map((book,j)=>{
      if(!book.pages || book.pages==''){
        book.ignore = true;
      }
      let jitterwidth = stackScale.bandwidth()/20
      let jitter = Math.random()*(jitterwidth) - jitterwidth/2;
      book.x = 0 + jitter;
      book.width = Math.min(stackScale.bandwidth(), meanSpineLength + jitter)
      book.height = pageScale(Number(book.pages));
      acc+= book.height;
      book.y = plotHeight-acc
      return book;
    })
  }

</script>
{title}
chart...
<div>
<svg viewBox="0 0 {width} {height}" height={height} width={width}>
  <g class="plot" transform="translate({margin.left}, {margin.top})">
    {#each Object.entries(stacks) as entry, i}
    <g class="stack" transform="translate({i*plotWidth/stackCount},0)">
      <text dy="-5">{entry[1].key}</text>
      {#each entry[1].books as book}
        {#if !book.ignore}
        <g transform="translate({book.x},{book.y})">
          <Book width={book.width} height={book.height} title={book.title} author={" "}></Book>
        </g>
        {/if}
      {/each}
    </g>
    {/each}
  </g>
</svg>
</div>
<style>
  .book{
    fill:black;
    stroke:white;
  }
  .stack{
    font-family: sans-serif;
    font-weight: bold;
    fill:none;
    stroke:black;
  }

</style>