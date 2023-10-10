<script>
  import Book from './Book.svelte';

  import { scaleLinear, scaleBand} from 'd3';

  export let books = [];
  export let title = "books";
  export let height = 350;
  export let width = 700;
  export let margin = { top:50, left:0, bottom:0, right:0 };
  export let jitter = 0.18;
  export let minPages = 100;
  export let splitOnKey = book => "books";

  console.log(jitter);

  let meanAspectRatio = 3000; // if 1 page is 1 pixel thick the length of the books spine should be this number of px
  let meanSpineLength = meanAspectRatio;

  let plotHeight = height-(margin.top+margin.bottom);
  let plotWidth = width-(margin.left+margin.right);

  let stacks = {};
  let biggestStack = 0;
  let stackCount = 0;
  let pageScale = scaleLinear();
  let stackScale = scaleBand();

  // split into stacks
  $:{
    books.forEach(book=>{
      if(!stacks[splitOnKey(book)]){
        stacks[splitOnKey(book)] = {
          pages:0,
          bookCount:0,
          books:[]
        };
      }

      stacks[splitOnKey(book)].pages += Math.max(Number(book.pages), minPages);
      if(biggestStack < stacks[splitOnKey(book)].pages){
        biggestStack = stacks[splitOnKey(book)].pages;
      }
      stacks[splitOnKey(book)].bookCount ++;
      stacks[splitOnKey(book)].books.push(book);
    });
    stackCount = Object.keys(stacks).length;
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
      let jitterwidth = stackScale.bandwidth() * jitter;
      let bookJitter = Math.random()*(jitterwidth) - jitterwidth/2;
      book.x = 0 + bookJitter;
      book.width = Math.min(stackScale.bandwidth(), meanSpineLength + bookJitter)
      book.height = pageScale(Math.max(Number(book.pages),minPages));
      acc+= book.height;
      book.y = plotHeight-acc
      return book;
    })
  }

</script>
{title}
<div class="chart">
  <svg viewBox="0 0 {width} {height}">
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
  .chart{
    width:100%;
  }
  .stack{
    font-family: sans-serif;
    font-weight: bold;
    fill:none;
    stroke:black;
  }

</style>