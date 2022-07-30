"use strict";

function concat(arrays) {
    const length = arrays.reduce((accum, currentItem) => {
         return accum + currentItem.length
    }, 0)
    const result = new Uint8Array(length)

    if(!arrays.length) return result

    let offSet = 0
    for(let array of arrays) {
        result.set(array, offSet)
        offSet += array.length
    }

    return result
  }
  
  let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
  ];
  
  console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
  
  console.log(concat(chunks).constructor.name); // Uint8Array