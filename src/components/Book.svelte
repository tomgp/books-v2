<script>
  export let width = 50;
  export let height = 50;
  export let title = "TITLE";
  export let author = "AUTHOR";
  let textMargin = width/30;
  let fontSize 
  $: fontSize = Math.min(height/2, width/(title.length/1.5));
  let decorated = true;

  function choose(a){
    const index = Math.floor(Math.random() * a.length);
    return a[index];
  }

  let schemes =[
    {
      background: "#92E8F8",
      top:"#F5B65B",
      bottom:"#34C2B1",
      text:"black"
    },
    {
      background: "#92E8F8",
      top:"#F5B65B",
      bottom:"#34C2B1",
      text:"white"
    }
  ];
  let scheme = choose(schemes);
</script>

<rect class="book" fill={scheme.background} stroke="none" width={width} height={height}></rect>
{#if decorated}
  <rect fill={scheme.top} stroke="none" x=0 y=0 width={textMargin} height={height}></rect>
  <rect fill={scheme.bottom} stroke="none" x={width-width/10} y=0 width={width/10} height={height}></rect>
  {#if height>50}
  <rect fill="rgba(0,0,0,0.2)" stroke="none" width={width} height={10} x=0 y={height-10}></rect>
  <rect fill="rgba(255,255,255,0.3)" stroke="none" width={width} height={10} x=0 y={0}></rect>
  {/if}
{/if}
{#if title && author}
  <text fill={scheme.text} stroke="none" font-size="{fontSize}px" dy={height/2 + fontSize/2} dx={textMargin}>{title}</text>
  <text fill={scheme.text} stroke="none" font-size="{fontSize}px" dy={height/2 + fontSize/2} dx={width - textMargin} text-anchor="end">{author}</text>
{/if}
<rect class="book" fill="none" stroke="white" width={width} height={height}></rect>
<style>
  /* rect{
    fill:black;
    stroke:white;
  } */
</style>

