<script>
  export let rating="";
  export let showAverage = true;
  function getNumericalRating(r){
    if(isNaN(r)){
      let scoreLookup = { "++":5,"+":4,"-":2,"--":1 }
      return scoreLookup[r] ? scoreLookup[r] : 3;
    }
    return r;
  }
  let score = getNumericalRating(rating);
</script>
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5" viewBox="0 0 125 115">
  <g id="Artboard1" class="face" transform="translate(-87 -152)">
    <!-- <path d="M87 152h125v115H87z" style="fill:none"/> -->
    {#if score==1}
    <g id="face1">
      <path d="m398 174 15-12 14 12"  transform="matrix(0 -1.41379 1.58333 0 -91.5 767.23)"/>
      <path d="M85 358.04H62"  transform="translate(108 -174)"/>
      <path d="m398 174 15-12 14 12"  transform="matrix(0 1.41379 -1.58333 0 392.5 -399.15)"/>
      <path d="M85 358.04H62"  transform="rotate(180 96.5 271.04)"/>
      <path d="M9 424h67c-2-18.55-17.6-32.87-35.11-33.1C23.33 390.64 11.63 406.07 9 424Z" style="stroke-linejoin:round" transform="translate(108 -174)"/>
    </g>
    {/if}
    {#if score==2}
    <g id="face2">
      <path d="m398 174 15-12 14 12"  transform="rotate(-180 296.25 175.73)"/><path d="m398 174 15-12 14 12"  transform="rotate(-180 266.75 175.73)"/><path d="m39 234 11.77-11.76H92l12.26 12.25"  transform="translate(78.5 5.45)"/>
    </g>
    {/if}
    {#if score==3 && showAverage}
    <g id="face3">
      <path d="M193 98h27"  transform="translate(-86.5 85.94)"/><path d="M193 98h27"  transform="translate(-28.5 85.94)"/><path d="M225 154h17.62c8.54.32 21.01-8.4 20.88-18.49V128"  transform="translate(-86.5 85.94)"/>
    </g>
    {/if}
    {#if score==4}
    <g id="face4">
      <path d="M411 209c8.57 7.72 22.17 10.13 31.07 10.5 9.94.43 22.14-2.44 31.93-11.5"  transform="translate(-294.5 17.93)"/><path d="m398 174 15-12 14 12"  transform="translate(-294.5 17.93)"/><path d="m398 174 15-12 14 12"  transform="translate(-235.5 17.93)"/>
    </g>
    {/if}
    {#if score==5}
    <g id="face5">
      <path class="heart-eye" d="M321.5 316.37c7.7-4.22 16.93-2.19 22.3 2.92 6.46 6.13 8.45 18.32 2.05 30.58-3.46 6.91-11.88 14.13-19.15 18.73a9.7 9.7 0 0 1-10.4 0c-7.27-4.6-15.7-11.82-19.14-18.71-6.4-12.27-4.42-24.46 2.04-30.6 5.37-5.1 14.6-7.14 22.3-2.92Zm0 14.03c-3.9-7.4-11.68-7.4-15.58-3.7-3.9 3.7-3.9 11.1 0 18.5 2.73 5.55 9.74 11.1 15.58 14.8 5.84-3.7 12.85-9.25 15.58-14.8 3.9-7.4 3.9-14.8 0-18.5-3.9-3.7-11.69-3.7-15.58 3.7Z" transform="matrix(.86 0 0 .84045 -158.8 -101.9)"/>
      <path class="heart-eye" d="M321.5 316.37c7.7-4.22 16.93-2.19 22.3 2.92 6.46 6.13 8.45 18.32 2.05 30.58-3.46 6.91-11.88 14.13-19.15 18.73a9.7 9.7 0 0 1-10.4 0c-7.27-4.6-15.7-11.82-19.14-18.71-6.4-12.27-4.42-24.46 2.04-30.6 5.37-5.1 14.6-7.14 22.3-2.92Zm0 14.03c-3.9-7.4-11.68-7.4-15.58-3.7-3.9 3.7-3.9 11.1 0 18.5 2.73 5.55 9.74 11.1 15.58 14.8 5.84-3.7 12.85-9.25 15.58-14.8 3.9-7.4 3.9-14.8 0-18.5-3.9-3.7-11.69-3.7-15.58 3.7Z" transform="matrix(.86 0 0 .84045 -96.2 -101.9)"/>
      <path d="M303.5 362h63a173.4 173.4 0 0 1-31.65 28.77c-14.65-10.9-24.53-20.32-31.35-28.77Z" transform="translate(-186.21 -137.53)"/>
    </g>
    {/if}
  </g>
  </svg>
  <style>
    svg{
      width:100%;
    }
    .face{
      stroke:var(--text, white);
      fill:none;
      stroke-width:8.5px;
    }
    .heart-eye{
      fill:var(--text);
      stroke:none;
    }
    .mouth{
      stroke: var(--text);
    }
  </style>