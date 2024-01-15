
<div class="alignment">
  <nav><strong>books</strong> <a href="/">index</a>, <a href="about">about</a></nav>
  <div class="border">
  <main>
  <slot />
  </main>
  </div>

  <footer>
    TGP 
  </footer>
</div>
<style>
  :root{
    --text: black;
    --highlight: blue;
    --field:rgb(252, 239, 211);
  }
  
  :global(body){
    color: var(--text, black);
    background-color: var(--field, white);
    font-size: 16px;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    :global(body){
      font-size:10px;
    } 
  }

  :global(a){
    color: var(--highlight, blue);
  }


  :global(a:hover){
    color: var(--field, white);
    background-color: var(--highlight, blue);
  }

  .alignment{
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  nav a{
    font-style: italic;
  }
  .border{
    background-color: aqua;
    background: linear-gradient(315deg, rgba(250,74,74,1) 0%, rgba(250,145,103,1) 14%, rgba(250,210,74,1) 27%, rgba(255,252,241,0) 37%, rgba(255,255,255,0) 69%, rgba(253,187,45,1) 79%, rgba(106,201,91,1) 89%, rgba(34,193,195,1) 100%);
    display: inline-flex;
    padding: 3lh;
    min-height: 70vh;
    width: 40lh;
    max-width: 100dvw;
  }
  main{
    width: 100%;
    padding: 2lh;
    background-color: var(--field);
  }
  footer, nav{
    max-width:800px;
    padding: 2lh;
  }
</style>