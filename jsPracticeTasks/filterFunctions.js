"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(first, last) {
  return function (item) {
    return (item >= first && item <= last)
  };
}

function inArray(array) {
    return function(item) {
        return array.includes(item)
    }
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10, 6])));