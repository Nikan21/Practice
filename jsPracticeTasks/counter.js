'use strict'


function makeCounter() {
  let count = 0

   function counter() { 
    return ++count
  }

  counter.set = function(value) {
    return count = value;
  }

  counter.decrease = function() {
    return --count
  }

  return counter
}

const counter = makeCounter()

console.log( counter() )
console.log( counter() )
console.log( counter.set(10) )
console.log( counter.decrease() )
console.log( counter.decrease() )