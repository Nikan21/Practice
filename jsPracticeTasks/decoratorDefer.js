"use strict";

Function.prototype.defer = function (ms) {
  return function (...args) {
    setTimeout(function() {f.apply(this, args)}, ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(3000)(1, 2);
