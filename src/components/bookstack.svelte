<script>
  import { scaleLinear, max} from 'd3';

  export let books = [];
  export let title = "books";
  export let height = 500;
  export let width = 700;
  export let margin = { top:0, left:20, bottom:0, right:20 };
  export let jitter = 0.1;
  export let splitOnKey = book => "book";

  let plotHeight = height-(margin.top+margin.bottom);
  let plotWidth = width-(margin.left+margin.right);

  let stacks = {};
  let biggestStack = 0;
  let stackCount = 0;
  let pageScale = scaleLinear();

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
    console.log(Object.values(stacks).map(d=>d.bookCount));
    //pageScale.domain(biggestStack);
    console.log('>>', stackCount, biggestStack);
  }



  // work out the scales


  $:{
    
    // let pageScale = scaleLinear()
    //   .domain([0, pageCount])
    //   .range([0, plotHeight]);

    // let accHeight = 0;;
    // books.forEach(book=>{
    //   stack.push(book);
    //   book.height = pageScale(Number(book.pages));
    //   book.x = margin.left;
    //   book.y = accHeight;
    //   book.width = plotWidth;
    //   accHeight += book.height;
    // })
  }
</script>
{title}
<svg viewBox="0 0 {width} {height}" height={height} width={width}>
  {#each Object.entries(stacks) as entry}
  <g>
    {#each entry[1].books as book}
      <rect fill="none" stroke="black" width={book.width} height={book.height} x={book.x} y={book.y}></rect>
    {/each}
  </g>
  {/each}
</svg>