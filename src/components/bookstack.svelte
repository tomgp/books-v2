<script>
  import { scaleLinear, max} from 'd3';

  export let books = [];
  export let title = "books";
  export let maxPages = 1000;
  export let height = 500;
  export let width = 300;
  export let margin = {top:0,left:20,bottom:0,right:20};
  export let jitter = 0.1;

  let plotHeight = height-(margin.top+margin.bottom);
  let plotWidth = width-(margin.left+margin.right);
  let pageCount = books.reduce((count, book)=>{
    return Number(book.pages)+count;
  }, 0);
  let stack = [];
  $:{
    let maxPages = max( books.map(d=>Number(d.pages)) );
    
    let pageScale = scaleLinear()
      .domain([0, pageCount])
      .range([0, plotHeight]);

    let accHeight = 0;;
    books.forEach(book=>{
      stack.push(book);
      book.height = pageScale(Number(book.pages));
      book.x = margin.left;
      book.y = accHeight;
      book.width = plotWidth;
      accHeight += book.height;
    })
  }
</script>
{title}
<svg viewBox="0 0 {width} {height}">
  {#each stack as book}
    <rect fill="none" stroke="black" width={book.width} height={book.height} x={book.x} y={book.y}></rect>
  {/each}
</svg>