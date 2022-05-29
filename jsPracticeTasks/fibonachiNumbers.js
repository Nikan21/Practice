"use strict";

function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    let c = a + b;
  }

  return b;
}

console.log(fib(77));
