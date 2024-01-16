<script>
  export let rating="";
  let scoreLookup = { "++":5,"+":4,"-":2,"--":1 }
  let score = scoreLookup[rating]?scoreLookup[rating]:3;
</script>
<svg xmlns="http://www.w3.org/2000/svg"
  xml:space="preserve"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5"
  viewBox="0 0 915 301"
  overflow="visible">
  <title>Rating:{score}/5</title>
  <g transform="translate(-100,0)">
  <path d="M0 0h941v301H0z" style="fill:none"/>
  {#if score==1}<path id="pointer1" d="M170 229h20l28-16h46c3.67.85 5.8 3.07 6 7 .49 3.32-.64 6.4-5 9h-32 73c3.7 1.2 6 3.62 6 8-.05 4.13-1.62 7.38-6 9h-40c4.42.94 7.25 3.44 8 8 .7 4.29-4.23 8.2-7 8h-12 4.64c1.62 2.36 2.1 5.26 3.36 9-.74 3.9-1.4 6.65-5 7h-13c3.3 1.74 5.73 5.3 7 9-.14 3.73-2.01 5.47-6 7h-28l-29-15h-19" style="fill:none;stroke:#000;stroke-width:8.5px" transform="scale(1.02841 1) rotate(45 353.1 -30.36)"/>{/if}
  {#if score==2}<path id="pointer2" d="M170 229h20l28-16h46c3.67.85 5.8 3.07 6 7 .49 3.32-.64 6.4-5 9h-32 73c3.7 1.2 6 3.62 6 8-.05 4.13-1.62 7.38-6 9h-40c4.42.94 7.25 3.44 8 8 .7 4.29-4.23 8.2-7 8h-12 4.64c1.62 2.36 2.1 5.26 3.36 9-.74 3.9-1.4 6.65-5 7h-13c3.3 1.74 5.73 5.3 7 9-.14 3.73-2.01 5.47-6 7h-28l-29-15h-19" style="fill:none;stroke:#000;stroke-width:8.5px" transform="scale(1.02841 1) rotate(45 430.1 155.53)"/>{/if}
  {#if score==3}<path id="pointer3" d="M170 229h20l28-16h46c3.67.85 5.8 3.07 6 7 .49 3.32-.64 6.4-5 9h-32 73c3.7 1.2 6 3.62 6 8-.05 4.13-1.62 7.38-6 9h-40c4.42.94 7.25 3.44 8 8 .7 4.29-4.23 8.2-7 8h-12 4.64c1.62 2.36 2.1 5.26 3.36 9-.74 3.9-1.4 6.65-5 7h-13c3.3 1.74 5.73 5.3 7 9-.14 3.73-2.01 5.47-6 7h-28l-29-15h-19" style="fill:none;stroke:#000;stroke-width:8.5px" transform="scale(1.02841 1) rotate(45 513.1 355.91)"/>{/if}
  {#if score==4}<path id="pointer4" d="M170 229h20l28-16h46c3.67.85 5.8 3.07 6 7 .49 3.32-.64 6.4-5 9h-32 73c3.7 1.2 6 3.62 6 8-.05 4.13-1.62 7.38-6 9h-40c4.42.94 7.25 3.44 8 8 .7 4.29-4.23 8.2-7 8h-12 4.64c1.62 2.36 2.1 5.26 3.36 9-.74 3.9-1.4 6.65-5 7h-13c3.3 1.74 5.73 5.3 7 9-.14 3.73-2.01 5.47-6 7h-28l-29-15h-19" style="fill:none;stroke:#000;stroke-width:8.5px" transform="scale(1.02841 1) rotate(45 593.1 549.05)"/>{/if}
  {#if score==5}<path id="pointer5" d="M170 229h20l28-16h46c3.67.85 5.8 3.07 6 7 .49 3.32-.64 6.4-5 9h-32 73c3.7 1.2 6 3.62 6 8-.05 4.13-1.62 7.38-6 9h-40c4.42.94 7.25 3.44 8 8 .7 4.29-4.23 8.2-7 8h-12 4.64c1.62 2.36 2.1 5.26 3.36 9-.74 3.9-1.4 6.65-5 7h-13c3.3 1.74 5.73 5.3 7 9-.14 3.73-2.01 5.47-6 7h-28l-29-15h-19" style="fill:none;stroke:#000;stroke-width:8.5px" transform="scale(1.02841 1) rotate(45 679.1 756.67)"/>{/if}
  <g id="face1" class="face" class:active={score==1}>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:5.66px;stroke-linejoin:miter" transform="matrix(0 -1.41379 1.62833 0 -94.1 767.23)"/>
    <path d="M85 358.04H62" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 111.07 -174)"/>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:5.66px;stroke-linejoin:miter" transform="matrix(0 1.41379 -1.62833 0 403.65 -399.15)"/>
    <path d="M85 358.04H62" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(-1.02842 0 0 -1 198.47 542.07)"/>
    <path d="M9 424h67c-2-18.55-17.6-32.87-35.11-33.1C23.33 390.64 11.63 406.07 9 424Z" style="fill:none;stroke:#000;stroke-width:8.5px" transform="matrix(1.02842 0 0 1 111.07 -174)"/>
  </g>
  <g id="face2" class="face" class:active={score==2}>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(-1.02842 0 0 -1 770.28 350.29)"/>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(-1.02842 0 0 -1 709.6 350.29)"/>
    <path d="m39 234 11.77-11.76H92l12.26 12.25" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 241.68 4.29)"/>
  </g>
  <g id="face3" class="face" class:active={score==3}>
    <path d="M193 98h27" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 234.48 80.76)"/>
    <path d="M193 98h27" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 294.13 80.76)"/>
    <path d="M225 154h17.62c8.54.32 21.01-8.4 20.88-18.49V128" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 234.48 80.76)"/>
  </g>
  <g id="face4" class="face" class:active={score==4}>
    <path d="M411 209c8.57 7.72 22.17 10.13 31.07 10.5 9.94.43 22.14-2.44 31.93-11.5" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:bevel" transform="matrix(1.02842 0 0 1 188.2 14.29)"/>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 188.2 14.29)"/>
    <path d="m398 174 15-12 14 12" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linejoin:miter" transform="matrix(1.02842 0 0 1 248.88 14.29)"/>
  </g>
  <g id="face5" class="face" class:active={score==5}>
    <path d="M321.5 316.37c7.7-4.22 16.93-2.19 22.3 2.92 6.46 6.13 8.45 18.32 2.05 30.58-3.46 6.91-11.88 14.13-19.15 18.73a9.7 9.7 0 0 1-10.4 0c-7.27-4.6-15.7-11.82-19.14-18.71-6.4-12.27-4.42-24.46 2.04-30.6 5.37-5.1 14.6-7.14 22.3-2.92Zm0 14.03c-3.9-7.4-11.68-7.4-15.58-3.7-3.9 3.7-3.9 11.1 0 18.5 2.73 5.55 9.74 11.1 15.58 14.8 5.84-3.7 12.85-9.25 15.58-14.8 3.9-7.4 3.9-14.8 0-18.5-3.9-3.7-11.69-3.7-15.58 3.7Z" transform="matrix(.88444 0 0 .84045 503.93 -105.14)"/>
    <path d="M321.5 316.37c7.7-4.22 16.93-2.19 22.3 2.92 6.46 6.13 8.45 18.32 2.05 30.58-3.46 6.91-11.88 14.13-19.15 18.73a9.7 9.7 0 0 1-10.4 0c-7.27-4.6-15.7-11.82-19.14-18.71-6.4-12.27-4.42-24.46 2.04-30.6 5.37-5.1 14.6-7.14 22.3-2.92Zm0 14.03c-3.9-7.4-11.68-7.4-15.58-3.7-3.9 3.7-3.9 11.1 0 18.5 2.73 5.55 9.74 11.1 15.58 14.8 5.84-3.7 12.85-9.25 15.58-14.8 3.9-7.4 3.9-14.8 0-18.5-3.9-3.7-11.69-3.7-15.58 3.7Z" transform="matrix(.88444 0 0 .84045 568.3 -105.14)"/>
    <path d="M303.5 362h63a173.4 173.4 0 0 1-31.65 28.77c-14.65-10.9-24.53-20.32-31.35-28.77Z" style="fill:none;stroke:#000;stroke-width:8.5px;stroke-linecap:square;stroke-linejoin:bevel" transform="matrix(1.02842 0 0 1 475.74 -140.77)"/>
  </g>
  </g>
</svg>
<style>
  .face{
    opacity: 0.2;
  }
  .face.active{
    opacity: 1;
  }
</style>