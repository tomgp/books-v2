<script>
  import { page } from '$app/stores';
  let data = $page.data;
</script>
<nav><a href="/"><strong>books</strong> index</a>, <a href="about">about</a></nav>
<div class="alignment">


  <main>
  <slot />
  </main>
  <footer>
    All text and photographs are &#169; <a href="https://www.toffeemilkshake.co.uk">Tom Pearson 2009-2024</a> unless otherwise noted
    <!-- <pre>{JSON.stringify(data)}</pre> -->
  </footer>
</div>
<style>
  :root{
    --text: black;
    --highlight: rgb(165, 22, 22);
    --field:rgb(252, 245, 231);
    --accent:rgb(61, 206, 172);
  }
  nav{
    width:100%;
    background-color: var(--text);
  }
  
  :global(body){
    color: var(--text, black);
    background-color: var(--field, white);
    font-size: 16px;
    font-family: sans-serif;
    font-family: Newsreader,serif;
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
    font-family: Newsreader,serif;
  }
  :global(ul){
    padding: 0;
    list-style: none;
    line-height: 1.3rem;
  }

  .alignment{
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  nav a{
    font-style: italic;
    color: var(--accent);
  }

  nav a:hover{
    color: var(--text);
    background-color: var(--accent);
  }


  a strong{
    font-style:normal;
  }

  main{
    width: 100%;
    max-width: 640px;
    padding: 2lh;
    background-color: var(--field);
  }
  footer, nav{
    /* max-width:800px; */
    padding: 2lh;
  }
</style>