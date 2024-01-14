<nav><a href="/">index</a>, <a href="/">about</a></nav>
<main>
<slot />
</main>
<footer>
  TGP 
</footer>
<style>
  :root{
    --text: black;
    --highlight: blue;
    --field:white;
  }
  
  :global(body){
    color: var(--text, black);
    background-color: var(--field, white);
    font-size: 16px;
    font-family: sans-serif;
  }
  :global(a){
    color: var(--highlight, blue);
  }
  :global(a:hover){
    color: var(--field, white);
    background-color: var(--highlight, blue);
  }

  main{
    max-width:800px;
    border: 1px solid var(--text,black);
    padding: 2lh;
  }
  footer, nav{
    max-width:800px;
    padding: 2lh;
  }
</style>