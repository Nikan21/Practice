"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function unique(arr) {
  const map = new Map()

  for (let word of arr){
    let sort = word.toLowerCase().split('').sort().join('')
    map.set(sort, word)
  } 

  return Array.from(map.values())
}

console.log(unique(arr));

