"use strict";

const array = [5, 3, 8, 1, 1, 2, 5, 9, 22, 1, 40];

function filterRangeInPlace(arr, a, b) {
  arr.sort( function(a, b) {
    return a - b 
  })

  let lessNum = 0
  let highNum = 0 

  for (let number of arr) {
    if (number <= a) lessNum += 1
    if (number >= b) highNum += 1
  }

  arr.splice(0, lessNum)
  arr.splice(-highNum)
}

filterRangeInPlace(array, 2, 6)

console.log(array)
