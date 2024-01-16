export function getNumericalRating(r){
  let scoreLookup = { "++":5,"+":4,"-":2,"--":1 }
  return scoreLookup[r] ? scoreLookup[r] : 3;
}