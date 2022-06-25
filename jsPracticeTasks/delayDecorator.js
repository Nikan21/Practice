"use strict";

function f(x) {
  alert(x);
}

function delay (func, delay) {
    return function() {
        setTimeout(()=> func.apply(this, arguments), delay)
    }

     wrapper
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 3500);

f1000("test"); 
f1500("test");
