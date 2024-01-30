<script>
  import { page } from '$app/stores';
  let data = $page.data;
</script>
<svelte:head>
  <link rel="alternate" type="application/atom+xml" href="/feed/atom" title="Tom's book stack">
</svelte:head>
<div class="alignment">
  <nav><span><a href="/"><strong>books</strong> index</a>, <a href="about">about</a>, <a href="feed/atom">feed</a> </span></nav>
  <main data-sveltekit-reload>
  <slot />
  </main>
  <footer>
    All text and photographs are &#169; <a href="https://www.toffeemilkshake.co.uk">Tom Pearson 2009-2024</a> unless otherwise noted
    <!-- <pre>{JSON.stringify(data)}</pre> -->
  </footer>
</div>
<style>
  /* debug */
  /* :global(*){
    border: 1px solid red;
  } */
  :root{
    --text: black;
    --highlight: rgb(165, 22, 22);
    --field:rgb(252, 245, 231);
    --accent:rgb(61, 206, 172);
  }
  nav{
    display: flex;
    max-width: 640px;
    padding-left:1lh;
    padding-right:1lh;
    justify-items: center;
  }
  
  :global(body){
    color: var(--text, black);
    background-color: var(--field, white);
    font-size: 16px;
    font-family: Newsreader, serif;
    padding: 0;
    margin: 0;
  }

  :global(a){
    color: var(--highlight, blue);
  }


  :global(a:hover){
    color: var(--field, white);
    background-color: var(--highlight, blue);
  }

  :global(h1,h2,h3){
    font-family: Newsreader, serif;
  }
  :global(ul){
    padding: 0;
    list-style: none;
    line-height: 1.3rem;
  }

  .alignment{
    background: rgb(250,74,74);
background: linear-gradient(
  270deg, 
  rgba(250,74,74,1) 0%,
  rgba(250,145,103,1) 15%,
  rgba(250,210,74,1) 30%,
  rgba(255,255,255,0) 40%,
  rgba(255,255,255,0) 60%,
  rgba(253,187,45,1) 70%,
  rgba(106,201,91,1) 85%,
  rgba(34,193,195,1) 100%); 
    display: flex;
    flex-direction: column;
    align-items:center;
    min-height: 100vh;
  }
  nav a{
    font-style: italic;
  }

  nav a:hover{
    color: var(--text);
    background-color: var(--accent);
  }
  nav span{
    background-color: var(--field);
  }


  a strong{
    font-style:normal;
  }

  main{
    max-width: 640px;
    background-color: var(--field);
    padding-left:1lh;
    padding-right:1lh; 
  }
  footer, nav{
    /* max-width:800px; */
    padding: 2lh;
  }
</style>