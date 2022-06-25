"use strict";

function printNumbers(from, to) {
  let current = from;

  const timer = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timer);
    }

    current++;
  }, 1000);
}
printNumbers(1, 5);

function printNumbers1(from, to) {
  let current = from;

  setTimeout(function func() {
    console.log(current);
    if (current < to) {
      setTimeout(func, 1000);
    }
    current++;
  }, 1000);
}

setTimeout(printNumbers1, 5000, 6, 10)