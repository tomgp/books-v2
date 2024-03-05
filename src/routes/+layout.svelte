<script>
  import { page } from '$app/stores';
  let data = $page.data;
</script>
<svelte:head>
  <link rel="alternate" type="application/atom+xml" href="/feed/atom" title="Tom's book stack">
</svelte:head>
<div class="alignment">
  <main data-sveltekit-reload>
  <nav><span><a href="/"><strong>books</strong> index</a>, <a href="about">about</a>, <a href="feed/atom">feed</a> </span></nav>
  <slot />
  </main>
  <footer>
    <p>
    All text and photographs are &#169; <a href="https://www.toffeemilkshake.co.uk">Tom Pearson 2009-2024</a> unless otherwise noted.
    </p>
    <p>
      🚧 Permananetly under construction, please excuse the debris and dead ends. 🚧
    </p>
    <!-- <pre>{JSON.stringify(data)}</pre> -->
  </footer>
</div>
<style>
  /* debug */
  /* :global(*){
    border: 1px solid red;
  } */
  :root{
    --text: rgb(51, 51, 51);
    --highlight: rgb(189, 88, 0);
    --field:rgb(255, 255, 255);
    --accent:rgb(69, 243, 231);
  }

  @media (prefers-color-scheme: dark) {
    :root{
      --primary:#62b8ff;
      --text:rgb(255, 255, 255);
      --field:rgb(51, 51, 51);
      --accent: rgb(189, 88, 0);
      --highlight:rgb(69, 243, 231);
    }
  }

  nav{
    display: flex;
    width:100%;
    padding-right:1lh;
    padding-top: 1lh;
  }
  
  :global(body){
    color: var(--text);
    background-color: var(--field);
    font-size: 16px;
    font-family: Newsreader, serif;
    padding: 0;
    margin: 0;
  }

  :global(a){
    color: var(--highlight, blue);
  }


  :global(a:hover){
    color: var(--text, black);
    background-color: var(--accent, blue);
  }

  :global(h1,h2){
    margin-top: 2lh;
    font-family: Helvetica, sans-serif;
  }

  :global(h2){
    margin-bottom: 0.4lh;
  }

  :global(h3){
    font-weight: bold;
    font-size: 1rem;
    margin-top: 2lh;
  }

  .alignment{
    display: flex;
    flex-direction: column;
    align-items:center;
    min-height: 100vh;
  }
  nav a{
    font-style: italic;
  }


  a strong{
    font-style:normal;
  }

  main{
    width:100%;
    max-width: 640px;
    background-color: var(--field);
    padding-left:1lh;
    padding-right:1lh; 
  }
  footer{
    width:100%;
    max-width: 640px;
    padding: 2lh;
    padding-left:1lh;
    padding-right:1lh; 
  }

</style>